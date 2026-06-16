import { TokenMode } from '../types';
export declare function getShouldUseUAT(tokenMode?: TokenMode, useUAT?: boolean): boolean | undefined;
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
export declare function resolveShouldUseUAT(accessTokens: string[] | undefined, tokenMode?: TokenMode, useUAT?: boolean): boolean;
