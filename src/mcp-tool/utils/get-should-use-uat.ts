import { TokenMode } from '../types';

export function getShouldUseUAT(tokenMode: TokenMode = TokenMode.AUTO, useUAT?: boolean) {
  switch (tokenMode) {
    case TokenMode.USER_ACCESS_TOKEN: {
      return true;
    }
    case TokenMode.TENANT_ACCESS_TOKEN: {
      return false;
    }
    case TokenMode.AUTO:
    default: {
      return useUAT;
    }
  }
}

/**
 * Decide whether a specific tool call should use the user access token (UAT),
 * driven by the tool's declared `accessTokens` so the choice is deterministic
 * per endpoint instead of left to the caller/model:
 *
 *   ['tenant']          → tenant-only  → never UAT (avoids "user access token not
 *                                         support" on endpoints Lark restricts to
 *                                         the tenant token)
 *   ['user']            → user-only    → always UAT
 *   ['tenant','user']   → both         → fall back to tokenMode / per-call useUAT
 *   undefined/empty     → unknown       → defer to tokenMode (backward compatible)
 *
 * This makes single-capability tools immune to a wrong `useUAT` from the model.
 */
export function resolveShouldUseUAT(
  accessTokens: string[] | undefined,
  tokenMode: TokenMode = TokenMode.AUTO,
  useUAT?: boolean,
): boolean {
  const supportsUser = accessTokens?.includes('user') ?? false;
  const supportsTenant = accessTokens?.includes('tenant') ?? false;
  if (supportsUser && !supportsTenant) {
    return true;
  }
  if (supportsTenant && !supportsUser) {
    return false;
  }
  return getShouldUseUAT(tokenMode, useUAT) ?? false;
}
