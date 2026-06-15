# Approval User-Access Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let the logged-in Lark user act on their own approvals (approve, reject, submit, comment, etc.) through the MCP by making the operational approval tools usable with the user access token.

**Architecture:** A generic, sync-proof override layer. A data-driven registry (`user-access-overrides.ts`) lists tool names that should be user-capable; a pure transform (`apply-user-access-overrides.ts`) runs in the `LarkMcpTool` constructor before `filterTools`, adding `'user'` to each listed tool's `accessTokens` and injecting a language-aware `useUAT` schema field. The auto-generated `approval_v4.ts` files are never edited, so upstream `sync-openapi` cannot clobber the change.

**Tech Stack:** TypeScript, zod, jest (ts-jest), `@larksuiteoapi/node-sdk`.

**Spec:** `docs/superpowers/specs/2026-06-15-approval-user-access-design.md` (CEO + ENG reviewed, cleared).

---

## File Structure

- Create `src/mcp-tool/user-access-overrides.ts` — the registry (data only).
- Create `src/mcp-tool/utils/apply-user-access-overrides.ts` — the transform (pure function).
- Modify `src/mcp-tool/utils/index.ts` — re-export the transform.
- Modify `src/mcp-tool/mcp-tool.ts` — call the transform in the constructor before `filterTools`.
- Create `tests/mcp-tool/utils/apply-user-access-overrides.test.ts` — unit tests.
- Modify `dist/**` — rebuilt at the end (Render free-tier runs prebuilt dist).

Reference facts (verified against the codebase):
- `McpTool` is `{ name: string; project?: string; schema: any; accessTokens?: string[]; ... }` (`src/mcp-tool/types/index.ts:27`).
- `filterTools` keeps a tool in `user_access_token` mode only if `accessTokens.includes('user')` (`src/mcp-tool/utils/filter-tools.ts:18`).
- The constructor currently does `this.allTools = filterTools(isZH ? AllToolsZh : AllTools, filterOptions)` (`src/mcp-tool/mcp-tool.ts:52`).
- The en gen `useUAT` description string is `Use user access token, otherwise use tenant access token`; the zh gen string is `使用用户身份请求, 否则使用应用身份` (from `approval_v4.ts` `task.query`).

---

## Task 1: Author the user-access override registry (verify-first)

**Files:**
- Create: `src/mcp-tool/user-access-overrides.ts`

The 20 operational approval tool names below are the candidate set (all of
`approval_v4` except admin/definition tools `approval.create`, `approval.get`,
the event tools `approval.subscribe`/`unsubscribe`, and the `externalApproval.*`
/ `externalInstance.*` / `externalTask.*` integration tools).

- [ ] **Step 1: Verify UAT support per endpoint (verify-first decision)**

For each tool below, open its Lark OpenAPI doc page (open.feishu.cn / open.larksuite.com, Approval v4) and confirm the endpoint lists **user_access_token** under supported access tokens. If an endpoint is documented as tenant-only, delete that line from the registry in Step 2 and move it to the spec's "NOT in scope" list. Note: `approval.v4.task.query` is already `['tenant','user']` in the gen file, so it is a known-good anchor.

- [ ] **Step 2: Create the registry file**

```ts
// src/mcp-tool/user-access-overrides.ts

/**
 * Tools that should be usable with the user_access_token (acting as the
 * logged-in user), keyed by Lark project. Applied by
 * applyUserAccessOverrides() before tool filtering. This is a sync-proof
 * override layer: the auto-generated gen-tools are never edited.
 *
 * Approval is the first consumer. Each entry below was confirmed to support
 * user_access_token in the Lark OpenAPI docs (see Task 1, Step 1).
 *
 *   AllTools ─▶ applyUserAccessOverrides ─▶ filterTools ─▶ registered tools
 *                 (+'user', +useUAT)         (user mode keeps user-capable)
 */
export const userAccessOverrides: Record<string, string[]> = {
  approval: [
    // task actions (act on my pending approvals)
    'approval.v4.task.approve',
    'approval.v4.task.reject',
    'approval.v4.task.resubmit',
    'approval.v4.task.transfer',
    'approval.v4.task.search',
    'approval.v4.task.query',
    // instances (submit / view / manage my approval instances)
    'approval.v4.instance.create',
    'approval.v4.instance.get',
    'approval.v4.instance.list',
    'approval.v4.instance.query',
    'approval.v4.instance.preview',
    'approval.v4.instance.cancel',
    'approval.v4.instance.cc',
    'approval.v4.instance.addSign',
    'approval.v4.instance.specifiedRollback',
    'approval.v4.instance.searchCc',
    // comments on instances
    'approval.v4.instanceComment.create',
    'approval.v4.instanceComment.delete',
    'approval.v4.instanceComment.list',
    'approval.v4.instanceComment.remove',
  ],
};

/** Flattened lookup used by the transform. */
export const userAccessOverrideNames: Set<string> = new Set<string>(
  Object.values(userAccessOverrides).flat(),
);
```

- [ ] **Step 3: Type-check the new file**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/mcp-tool/user-access-overrides.ts
git commit -m "feat(approval): add user-access override registry"
```

---

## Task 2: Implement the transform (TDD)

**Files:**
- Create: `src/mcp-tool/utils/apply-user-access-overrides.ts`
- Test: `tests/mcp-tool/utils/apply-user-access-overrides.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/mcp-tool/utils/apply-user-access-overrides.test.ts
import { z } from 'zod';
import { applyUserAccessOverrides } from '../../../src/mcp-tool/utils/apply-user-access-overrides';
import { McpTool } from '../../../src/mcp-tool/types';

const make = (name: string, over: Partial<McpTool> = {}): McpTool => ({
  project: name.split('.')[0],
  name,
  description: 'desc',
  schema: { data: z.object({}) },
  accessTokens: ['tenant'],
  ...over,
});

describe('applyUserAccessOverrides', () => {
  it("adds 'user' and injects useUAT for a listed approval tool", () => {
    const tools = [make('approval.v4.task.approve')];
    const out = applyUserAccessOverrides(tools, false);
    expect(out[0].accessTokens).toEqual(['tenant', 'user']);
    expect(out[0].schema.useUAT).toBeDefined();
    expect(out[0].schema.useUAT.description).toBe(
      'Use user access token, otherwise use tenant access token',
    );
  });

  it('injects the Chinese useUAT description when isZH is true', () => {
    const out = applyUserAccessOverrides([make('approval.v4.task.reject')], true);
    expect(out[0].schema.useUAT.description).toBe('使用用户身份请求, 否则使用应用身份');
  });

  it('leaves an excluded approval tool unchanged', () => {
    const tool = make('approval.v4.approval.create');
    const out = applyUserAccessOverrides([tool], false);
    expect(out[0]).toBe(tool); // same reference, untouched
    expect(out[0].accessTokens).toEqual(['tenant']);
    expect(out[0].schema.useUAT).toBeUndefined();
  });

  it('leaves a non-approval tool unchanged', () => {
    const tool = make('im.v1.message.create');
    const out = applyUserAccessOverrides([tool], false);
    expect(out[0]).toBe(tool);
  });

  it('is idempotent when useUAT already exists (task.query anchor)', () => {
    const existing = z.boolean().describe('pre-existing').optional();
    const tool = make('approval.v4.task.query', {
      accessTokens: ['tenant', 'user'],
      schema: { params: z.object({}), useUAT: existing },
    });
    const out = applyUserAccessOverrides([tool], false);
    expect(out[0].schema.useUAT).toBe(existing); // not replaced
    expect(out[0].accessTokens).toEqual(['tenant', 'user']); // no duplicate 'user'
  });

  it('defaults accessTokens to [tenant, user] when undefined', () => {
    const out = applyUserAccessOverrides(
      [make('approval.v4.instance.create', { accessTokens: undefined })],
      false,
    );
    expect(out[0].accessTokens).toEqual(['tenant', 'user']);
  });

  it('does not mutate the source tool objects or array', () => {
    const tool = make('approval.v4.task.approve');
    const tools = [tool];
    applyUserAccessOverrides(tools, false);
    expect(tool.accessTokens).toEqual(['tenant']); // original untouched
    expect(tool.schema.useUAT).toBeUndefined();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx jest tests/mcp-tool/utils/apply-user-access-overrides.test.ts`
Expected: FAIL — cannot find module `apply-user-access-overrides`.

- [ ] **Step 3: Write the minimal implementation**

```ts
// src/mcp-tool/utils/apply-user-access-overrides.ts
import { z } from 'zod';
import { McpTool } from '../types';
import { userAccessOverrideNames } from '../user-access-overrides';

const USE_UAT_DESC_EN = 'Use user access token, otherwise use tenant access token';
const USE_UAT_DESC_ZH = '使用用户身份请求, 否则使用应用身份';

/**
 * Return a new tool list where each tool named in the user-access override
 * registry is marked user-capable: 'user' is added to accessTokens and a
 * language-aware `useUAT` field is injected into the schema (unless already
 * present). Tools not in the registry are returned by reference, untouched.
 * Source objects are never mutated.
 */
export function applyUserAccessOverrides(tools: McpTool[], isZH = false): McpTool[] {
  return tools.map((tool) => {
    if (!userAccessOverrideNames.has(tool.name)) {
      return tool;
    }
    const accessTokens = Array.from(new Set([...(tool.accessTokens ?? ['tenant']), 'user']));
    const schema = tool.schema?.useUAT
      ? tool.schema
      : {
          ...tool.schema,
          useUAT: z
            .boolean()
            .describe(isZH ? USE_UAT_DESC_ZH : USE_UAT_DESC_EN)
            .optional(),
        };
    return { ...tool, accessTokens, schema };
  });
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx jest tests/mcp-tool/utils/apply-user-access-overrides.test.ts`
Expected: PASS (7 tests).

- [ ] **Step 5: Commit**

```bash
git add src/mcp-tool/utils/apply-user-access-overrides.ts tests/mcp-tool/utils/apply-user-access-overrides.test.ts
git commit -m "feat(approval): add applyUserAccessOverrides transform"
```

---

## Task 3: Export the transform from the utils barrel

**Files:**
- Modify: `src/mcp-tool/utils/index.ts`

- [ ] **Step 1: Add the export**

Append this line to `src/mcp-tool/utils/index.ts`:

```ts
export * from './apply-user-access-overrides';
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/mcp-tool/utils/index.ts
git commit -m "chore(approval): export applyUserAccessOverrides from utils"
```

---

## Task 4: Wire the transform into the constructor (TDD)

**Files:**
- Modify: `src/mcp-tool/mcp-tool.ts` (constructor, around line 52)
- Test: `tests/mcp-tool/apply-overrides-integration.test.ts`

- [ ] **Step 1: Write the failing integration test**

```ts
// tests/mcp-tool/apply-overrides-integration.test.ts
import { LarkMcpTool } from '../../src/mcp-tool/mcp-tool';
import { TokenMode } from '../../src/mcp-tool/types';

describe('LarkMcpTool approval user-access (integration)', () => {
  it('keeps operational approval tools in user_access_token mode', () => {
    const client = new LarkMcpTool({
      appId: 'cli_test',
      appSecret: 'secret_test',
      tokenMode: TokenMode.USER_ACCESS_TOKEN,
      toolsOptions: { allowProjects: ['approval'] as any },
    });
    const names = client.getTools().map((t) => t.name);
    expect(names).toContain('approval.v4.task.approve');
    expect(names).toContain('approval.v4.instance.create');
    // admin/definition tool stays tenant-only → filtered out in user mode
    expect(names).not.toContain('approval.v4.approval.create');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx jest tests/mcp-tool/apply-overrides-integration.test.ts`
Expected: FAIL — `approval.v4.task.approve` not in the returned tools (still tenant-only, filtered out).

- [ ] **Step 3: Apply the wiring change**

In `src/mcp-tool/mcp-tool.ts`, find the import block and add `applyUserAccessOverrides` to the existing utils import:

```ts
import { filterTools, larkOapiHandler, caseTransf, getShouldUseUAT, applyUserAccessOverrides } from './utils';
```

Then change the constructor line (currently `this.allTools = filterTools(isZH ? AllToolsZh : AllTools, filterOptions);`) to:

```ts
const baseTools = applyUserAccessOverrides(isZH ? AllToolsZh : AllTools, isZH);
this.allTools = filterTools(baseTools, filterOptions);
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx jest tests/mcp-tool/apply-overrides-integration.test.ts`
Expected: PASS.

- [ ] **Step 5: Run the full suite to check for regressions**

Run: `npx jest`
Expected: all tests pass (existing + new).

- [ ] **Step 6: Commit**

```bash
git add src/mcp-tool/mcp-tool.ts tests/mcp-tool/apply-overrides-integration.test.ts
git commit -m "feat(approval): apply user-access overrides before tool filtering"
```

---

## Task 5: Rebuild dist and final commit

**Files:**
- Modify: `dist/**` (generated)

The Render free-tier deploy runs the prebuilt `dist/`, and a pre-commit hook
keeps `dist/` in sync with `src/`. Rebuild and commit so the deploy gets the
new code.

- [ ] **Step 1: Build**

Run: `yarn build`
Expected: `dist/` rebuilt with no tsc errors; new files `dist/mcp-tool/user-access-overrides.js` and `dist/mcp-tool/utils/apply-user-access-overrides.js` present.

- [ ] **Step 2: Commit the rebuilt dist**

```bash
git add dist/
git commit -m "build(approval): rebuild dist with user-access overrides"
```

- [ ] **Step 3: Verify the branch is ready**

Run: `git log --oneline main..HEAD`
Expected: the feature commits from Tasks 1-5, no uncommitted changes (`git status` clean).

---

## Post-implementation (operator steps, not code)

These are done in the Render dashboard / Lark console after the code ships — they
do not block this PR but the feature is inert without them:

1. Set `LARK_TOOLS=docx,wiki,bitable,drive,calendar,sheets,mail,approval` so the approval project is exposed.
2. Grant the approval **user** scopes for the app in the Lark developer console (e.g. `approval:approval`, `approval:instance`, `approval:task` and comment scopes), or rely on the default "all app permissions" scope. Re-auth after redeploy (free-tier tokens are memory-only).

---

## Self-review notes

- **Spec coverage:** registry (Task 1) ✓, transform + idempotency + non-mutation + i18n (Task 2) ✓, export (Task 3) ✓, constructor wiring + user-mode filtering (Task 4) ✓, dist rebuild (Task 5) ✓, deployment steps documented ✓.
- **Verify-first:** Task 1 Step 1 enforces per-endpoint UAT confirmation before the registry ships.
- **Type consistency:** transform signature `applyUserAccessOverrides(tools, isZH)` is used identically in the export, the constructor wiring, and all tests. `accessTokens: string[]` and `schema: any` match `McpTool` (`types/index.ts:27`).
