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
    expect(names).not.toContain('approval.v4.approval.create');
  });
});
