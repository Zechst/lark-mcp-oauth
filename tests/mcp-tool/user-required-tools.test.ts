import { userRequiredToolNames } from '../../src/mcp-tool/user-required-tools';
import { resolveShouldUseUAT } from '../../src/mcp-tool/utils/get-should-use-uat';
import { TokenMode } from '../../src/mcp-tool/types';

// Mirrors the decision made in mcp-tool.ts registerMcpServer.
const decide = (name: string, accessTokens: string[] | undefined) =>
  userRequiredToolNames.has(name) || resolveShouldUseUAT(accessTokens, TokenMode.AUTO, false);

describe('userRequiredToolNames', () => {
  it('lists the personal mailbox read tools', () => {
    expect(userRequiredToolNames.has('mail.v1.userMailboxMessage.list')).toBe(true);
    expect(userRequiredToolNames.has('mail.v1.userMailboxMessage.get')).toBe(true);
  });

  it('forces UAT for a personal-mailbox read even though accessTokens allows tenant and auto defaults to tenant', () => {
    // Baseline: a dual-capable tool in auto mode with useUAT=false resolves to tenant.
    expect(resolveShouldUseUAT(['tenant', 'user'], TokenMode.AUTO, false)).toBe(false);
    // The user-required override flips that specific tool to the user token.
    expect(decide('mail.v1.userMailboxMessage.list', ['tenant', 'user'])).toBe(true);
  });

  it('does not affect tools that are not listed', () => {
    expect(decide('approval.v4.instance.get', ['tenant'])).toBe(false);
    expect(decide('mail.v1.publicMailbox.get', ['tenant'])).toBe(false);
  });
});
