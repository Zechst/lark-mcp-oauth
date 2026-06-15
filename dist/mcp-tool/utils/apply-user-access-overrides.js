"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyUserAccessOverrides = applyUserAccessOverrides;
const zod_1 = require("zod");
const user_access_overrides_1 = require("../user-access-overrides");
const USE_UAT_DESC_EN = 'Use user access token, otherwise use tenant access token';
const USE_UAT_DESC_ZH = '使用用户身份请求, 否则使用应用身份';
/**
 * Return a new tool list where each tool named in the user-access override
 * registry is marked user-capable: 'user' is added to accessTokens and a
 * language-aware `useUAT` field is injected into the schema (unless already
 * present). Tools not in the registry are returned by reference, untouched.
 * Source objects are never mutated.
 */
function applyUserAccessOverrides(tools, isZH = false) {
    return tools.map((tool) => {
        var _a, _b;
        if (!user_access_overrides_1.userAccessOverrideNames.has(tool.name)) {
            return tool;
        }
        const accessTokens = Array.from(new Set([...((_a = tool.accessTokens) !== null && _a !== void 0 ? _a : ['tenant']), 'user']));
        const schema = ((_b = tool.schema) === null || _b === void 0 ? void 0 : _b.useUAT)
            ? tool.schema
            : {
                ...tool.schema,
                useUAT: zod_1.z
                    .boolean()
                    .describe(isZH ? USE_UAT_DESC_ZH : USE_UAT_DESC_EN)
                    .optional(),
            };
        return { ...tool, accessTokens, schema };
    });
}
