# Design: Approval tools under user identity (user_access_token)

**Date:** 2026-06-15
**Status:** Approved (design), pending implementation plan
**Repo:** `Zechst/lark-mcp-oauth` (fork of `larksuite/lark-openapi-mcp`)
**Base branch:** `main` (now fast-forwarded to include the former
`feat/remote-oauth` work: remote OAuth, Render deploy, env-driven creds,
whole-project selection in `-t`/`LARK_TOOLS`, and `LARK_OAUTH_SCOPE`).
**Work branch:** `feat/approval-user-access`

## Problem

The Lark Approval API operations exposed by this MCP server (`approval_v4`) are
almost all declared as `accessTokens: ['tenant']` only. The single exception is
`approval.v4.task.query`, which already supports `['tenant', 'user']`.

This means a user authenticated via OAuth cannot perform approval actions **as
themselves** (e.g. approve or reject a pending task) through the MCP — those
actions are semantically user-identity operations in Lark, but the tools refuse
to run under the user access token ("UAT").

Goal: enable the **operational** approval tools to run under the logged-in
user's identity within their tenant, while leaving admin/definition and external
integration endpoints tenant-only.

## How identity selection works today (verified in code)

A tool can run as the logged-in user only when **both** gates pass:

1. **`accessTokens` includes `'user'`.**
   `src/mcp-tool/utils/filter-tools.ts` strips any tool lacking `'user'` when
   `tokenMode === USER_ACCESS_TOKEN`.

2. **The tool's `schema` includes `useUAT: z.boolean()...optional()`.**
   In AUTO mode, `src/mcp-tool/mcp-tool.ts` reads `params.useUAT` via
   `getShouldUseUAT(tokenMode, params?.useUAT)`; if true it calls
   `ensureGetUserAccessToken()` and runs the handler with the user token
   (`handler.ts` → `lark.withUserAccessToken`). The caller can only set
   `useUAT` if it is declared in the schema.

OAuth scopes are **not** a code blocker: `--scope` (see `src/cli.ts`) defaults to
"all permissions granted to the app," passed straight into the authorize URL.
Granting approval user scopes is a Lark developer-console configuration step.

## Constraint: gen-tools are auto-generated

`src/mcp-tool/tools/{en,zh}/gen-tools/zod/approval_v4.ts` are produced upstream
by `sync-openapi` (see git history). Editing them directly risks being
overwritten on a future sync. Therefore the change is applied as an **override
layer** rather than an in-file edit.

## Design

### New file: `src/mcp-tool/user-access-overrides.ts`

Exports a **generic, data-driven registry** of tool names that should gain
user-identity support, keyed by project so future products (calendar, mail,
etc.) can opt in with a one-line edit. Approval is the first consumer:

```ts
// project → tool names that should be user-capable
export const userAccessOverrides: Record<string, string[]> = {
  approval: [ /* operational approval tools, below */ ],
};
// flattened lookup the transform uses
export const userAccessOverrideNames: Set<string> = new Set(
  Object.values(userAccessOverrides).flat(),
);
```

The approval **operational** entries (each must be confirmed UAT-capable against
Lark docs first — see "UAT verification" below):

- **Tasks:** `approval.v4.task.approve`, `approval.v4.task.reject`,
  `approval.v4.task.resubmit`, `approval.v4.task.transfer`,
  `approval.v4.task.search`
  (`approval.v4.task.query` already supports user; including it is a no-op
  thanks to idempotent injection.)
- **Instances:** `approval.v4.instance.create`, `approval.v4.instance.get`,
  `approval.v4.instance.list`, `approval.v4.instance.query`,
  `approval.v4.instance.preview`, `approval.v4.instance.cancel`,
  `approval.v4.instance.cc`, `approval.v4.instance.addSign`,
  `approval.v4.instance.specifiedRollback`, `approval.v4.instance.searchCc`
- **Comments:** `approval.v4.instanceComment.create`,
  `approval.v4.instanceComment.delete`, `approval.v4.instanceComment.list`,
  `approval.v4.instanceComment.remove`

**Excluded (remain tenant-only):**
- `approval.v4.approval.create`, `approval.v4.approval.get` — definition/admin
- `approval.v4.approval.subscribe`, `approval.v4.approval.unsubscribe` — app-level events
- all `externalApproval.*`, `externalInstance.*`, `externalTask.*` — app integration

### New file: `src/mcp-tool/utils/apply-user-access-overrides.ts`

```ts
applyUserAccessOverrides(tools: McpTool[], isZH: boolean): McpTool[]
```

For each tool whose `name` is in the override set, return a **new** tool object
(do not mutate the shared module-level singletons) that:

1. Sets `accessTokens` to the de-duplicated union of the existing tokens (default
   `['tenant']`) plus `'user'`.
2. If `schema.useUAT` is absent, injects a `useUAT: z.boolean()...optional()`
   field. **Description is language-aware** (eng review Finding 2): the transform
   takes an `isZH` flag and injects the Chinese description for the zh tool set
   (matching the existing pattern in `docx/builtin.ts`, e.g. `'是否使用用户身份
   请求，否则使用应用身份'`) and the English description for the en set. If
   `useUAT` is already present (e.g. `task.query`), leave it unchanged
   (idempotent).

All other tools are returned unchanged (same reference is acceptable).

Exported from `src/mcp-tool/utils/index.ts` alongside the existing utils.

### Wiring: `src/mcp-tool/mcp-tool.ts`

In the constructor, apply the override before filtering:

```ts
const baseTools = applyUserAccessOverrides(isZH ? AllToolsZh : AllTools, isZH);
this.allTools = filterTools(baseTools, filterOptions);
```

No changes to `filter-tools.ts`, `get-should-use-uat.ts`, or `handler.ts` — the
existing gates pick up the augmented definitions automatically.

## UAT verification (do this before marking tools)

**Decision (CEO review, verify-first):** Before adding a tool to the registry,
confirm its endpoint actually supports `user_access_token` in the Lark OpenAPI
docs. Mark only confirmed endpoints. Annotate the registry with each endpoint's
confirmed token support so the list is auditable. This avoids confusing runtime
errors in the `user_access_token`-mode deployment (where every call uses UAT and
a tenant-only endpoint would simply fail). Any endpoint that turns out to be
tenant-only stays out of the registry and is listed under "NOT in scope".

## Error handling

Reuses the existing re-authorize path: if the user token lacks scope or is
invalid, `mcp-tool.ts` already detects `USER_ACCESS_TOKEN_UNAUTHORIZED` /
`USER_ACCESS_TOKEN_INVALID` and returns a re-authorization URL.

Caveat: if a specific endpoint does not support UAT server-side, Lark returns a
normal API error; this surfaces to the caller as a standard tool error (no
crash). Per-endpoint UAT support should be confirmed against Lark docs during
implementation; the allow-list can be trimmed if any endpoint rejects UAT.

## Deployment: enable the approval project (operator action)

On the deployed branch, `LARK_TOOLS` entries are classified in
`src/mcp-server/shared/init.ts`: preset markers expand, dotted entries are
concrete tool names, and **bare words are whole projects** (→ `allowProjects`).
So the approval tools are not visible until `approval` is added to the env list:

```
LARK_TOOLS=docx,wiki,bitable,drive,calendar,sheets,mail,approval
```

Important interaction (from the init.ts comment): *the tokenMode filter still
applies downstream, so user_access_token mode keeps only the user-capable tools
within a selected project.* Therefore:
- Adding `approval` to `LARK_TOOLS` makes the project visible.
- This design's override layer is what makes the **operational** approval tools
  user-capable, so they survive `user_access_token`-mode filtering and honor
  `useUAT` in `auto` mode. Both changes are required together.

## OAuth scope configuration (operator action, documented not coded)

The operator must enable the approval **user** permission scopes for the app in
the Lark developer console (e.g. `approval:approval`, `approval:instance`,
`approval:task`, and comment-related scopes as applicable). Scope is driven by
`LARK_OAUTH_SCOPE` (or `--scope`); when unset it defaults to all permissions
granted to the app, so usually no code/env change is needed beyond granting the
scopes in the console.

## Testing

Unit tests for `apply-user-access-overrides`:
- An allow-listed approval tool (e.g. `approval.v4.task.approve`) gains `'user'`
  in `accessTokens` and a `useUAT` schema field.
- An excluded approval tool (e.g. `approval.v4.approval.create`) is unchanged.
- A non-approval tool is unchanged.
- Idempotency: `approval.v4.task.query` (already `['tenant','user']` with
  `useUAT`) is not duplicated/corrupted.
- The shared source arrays (`AllTools` / `AllToolsZh`) are not mutated.
- Both en and zh tool sets are covered.

## Scope of change

- 2 new files (`user-access-overrides.ts`, `utils/apply-user-access-overrides.ts`)
- 1 export line in `utils/index.ts`
- 1 two-line edit in `mcp-tool.ts` constructor
- 1 new test file

## Build note

The deployed branch ships a prebuilt `dist/` and has a pre-commit hook
(`chore(repo): add pre-commit hook to keep dist in sync with src`) that rebuilds
`dist/` from `src/`. After implementing, run the build so `dist/` reflects the
new files, and ensure the hook's rebuilt `dist/` is committed alongside the
`src/` changes (Render's free-tier deploy uses the prebuilt `dist/`).

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 1 | clean | HOLD_SCOPE, 0 critical gaps (generic registry + verify-first) |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | clean | 1 issue (language-aware useUAT), 0 critical gaps |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | n/a (no UI scope) |

- **VERDICT:** CEO + ENG CLEARED — ready to implement.

NO UNRESOLVED DECISIONS
