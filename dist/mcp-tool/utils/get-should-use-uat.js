"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShouldUseUAT = getShouldUseUAT;
exports.resolveShouldUseUAT = resolveShouldUseUAT;
const types_1 = require("../types");
function getShouldUseUAT(tokenMode = types_1.TokenMode.AUTO, useUAT) {
    switch (tokenMode) {
        case types_1.TokenMode.USER_ACCESS_TOKEN: {
            return true;
        }
        case types_1.TokenMode.TENANT_ACCESS_TOKEN: {
            return false;
        }
        case types_1.TokenMode.AUTO:
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
function resolveShouldUseUAT(accessTokens, tokenMode = types_1.TokenMode.AUTO, useUAT) {
    var _a, _b, _c;
    const supportsUser = (_a = accessTokens === null || accessTokens === void 0 ? void 0 : accessTokens.includes('user')) !== null && _a !== void 0 ? _a : false;
    const supportsTenant = (_b = accessTokens === null || accessTokens === void 0 ? void 0 : accessTokens.includes('tenant')) !== null && _b !== void 0 ? _b : false;
    if (supportsUser && !supportsTenant) {
        return true;
    }
    if (supportsTenant && !supportsUser) {
        return false;
    }
    return (_c = getShouldUseUAT(tokenMode, useUAT)) !== null && _c !== void 0 ? _c : false;
}
