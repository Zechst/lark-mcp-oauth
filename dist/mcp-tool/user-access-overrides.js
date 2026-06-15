"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccessOverrideNames = exports.userAccessOverrides = void 0;
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
exports.userAccessOverrides = {
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
exports.userAccessOverrideNames = new Set(Object.values(exports.userAccessOverrides).flat());
// UNVERIFIED: Web verification against the Lark OpenAPI docs
// (open.larksuite.com / open.feishu.cn, Approval v4) was INCONCLUSIVE for the
// endpoints below. The doc pages render the "supported access tokens" widget
// dynamically; the fetched/markdown-converted content strips that widget and
// only exposes the static example Authorization header (which always reads
// `tenant_access_token`). This was proven by a calibration fetch against
// `approval.v4.task.query`, which the gen file already marks `['tenant','user']`
// (i.e. confirmed user-capable) yet the fetched doc showed only
// `tenant_access_token` / no token info at all. So the fetch results are false
// negatives and cannot positively confirm any tool as tenant-only.
//
// Decision (per task spec): keep the full candidate set; a human should confirm
// user_access_token support for the items below in the live docs / API Explorer.
// Confirmed without fetch: approval.v4.task.query (already ['tenant','user'] in
// src/mcp-tool/tools/en/gen-tools/zod/approval_v4.ts).
//
// Could not positively confirm via web (kept in the list):
//   - approval.v4.task.approve
//   - approval.v4.task.reject
//   - approval.v4.task.resubmit
//   - approval.v4.task.transfer
//   - approval.v4.task.search
//   - approval.v4.instance.create
//   - approval.v4.instance.get
//   - approval.v4.instance.list
//   - approval.v4.instance.query
//   - approval.v4.instance.preview
//   - approval.v4.instance.cancel
//   - approval.v4.instance.cc
//   - approval.v4.instance.addSign
//   - approval.v4.instance.specifiedRollback
//   - approval.v4.instance.searchCc
//   - approval.v4.instanceComment.create
//   - approval.v4.instanceComment.delete
//   - approval.v4.instanceComment.list
//   - approval.v4.instanceComment.remove
