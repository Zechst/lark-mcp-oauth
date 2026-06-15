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
    const out = applyUserAccessOverrides([make('approval.v4.task.approve')], false);
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
    expect(out[0]).toBe(tool);
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
    expect(out[0].schema.useUAT).toBe(existing);
    expect(out[0].accessTokens).toEqual(['tenant', 'user']);
  });

  it('defaults accessTokens to [tenant, user] when undefined', () => {
    const out = applyUserAccessOverrides(
      [make('approval.v4.instance.create', { accessTokens: undefined })],
      false,
    );
    expect(out[0].accessTokens).toEqual(['tenant', 'user']);
  });

  it('does not mutate the source tool objects', () => {
    const tool = make('approval.v4.task.approve');
    applyUserAccessOverrides([tool], false);
    expect(tool.accessTokens).toEqual(['tenant']);
    expect(tool.schema.useUAT).toBeUndefined();
  });
});
