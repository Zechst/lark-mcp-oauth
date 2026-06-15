import { resolveShouldUseUAT } from '../../../src/mcp-tool/utils/get-should-use-uat';
import { TokenMode } from '../../../src/mcp-tool/types';

describe('resolveShouldUseUAT', () => {
  it('tenant-only tools never use UAT, even if the caller asks for it', () => {
    expect(resolveShouldUseUAT(['tenant'], TokenMode.AUTO, true)).toBe(false);
    // even in forced user_access_token mode, a tenant-only endpoint stays tenant
    expect(resolveShouldUseUAT(['tenant'], TokenMode.USER_ACCESS_TOKEN, true)).toBe(false);
  });

  it('user-only tools always use UAT, even if the caller opts out', () => {
    expect(resolveShouldUseUAT(['user'], TokenMode.AUTO, false)).toBe(true);
    expect(resolveShouldUseUAT(['user'], TokenMode.TENANT_ACCESS_TOKEN, false)).toBe(true);
  });

  it('dual-capable tools defer to tokenMode / per-call useUAT', () => {
    expect(resolveShouldUseUAT(['tenant', 'user'], TokenMode.AUTO, true)).toBe(true);
    expect(resolveShouldUseUAT(['tenant', 'user'], TokenMode.AUTO, false)).toBe(false);
    expect(resolveShouldUseUAT(['tenant', 'user'], TokenMode.USER_ACCESS_TOKEN, false)).toBe(true);
    expect(resolveShouldUseUAT(['tenant', 'user'], TokenMode.TENANT_ACCESS_TOKEN, true)).toBe(false);
  });

  it('treats missing/empty accessTokens as tenant-capable and defers to tokenMode', () => {
    expect(resolveShouldUseUAT(undefined, TokenMode.AUTO, false)).toBe(false);
    expect(resolveShouldUseUAT(undefined, TokenMode.AUTO, true)).toBe(true);
    expect(resolveShouldUseUAT([], TokenMode.AUTO, false)).toBe(false);
  });
});
