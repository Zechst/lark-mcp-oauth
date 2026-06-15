/**
 * Tools that should be usable with the user_access_token (acting as the
 * logged-in user), keyed by Lark project. Applied by
 * applyUserAccessOverrides() before tool filtering. This is a sync-proof
 * override layer: the auto-generated gen-tools are never edited.
 *
 * Approval is the first consumer. Each entry below is intended to be used with
 * user_access_token; see the UNVERIFIED note at the bottom of this file for the
 * verification status of individual endpoints.
 *
 *   AllTools ─▶ applyUserAccessOverrides ─▶ filterTools ─▶ registered tools
 *                 (+'user', +useUAT)         (user mode keeps user-capable)
 */
export declare const userAccessOverrides: Record<string, string[]>;
/** Flattened lookup used by the transform. */
export declare const userAccessOverrideNames: Set<string>;
