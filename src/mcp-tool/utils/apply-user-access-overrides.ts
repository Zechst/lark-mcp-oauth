import { z } from 'zod';
import { McpTool } from '../types';
import { userAccessOverrideNames } from '../user-access-overrides';

const USE_UAT_DESC_EN = 'Use user access token, otherwise use tenant access token';
const USE_UAT_DESC_ZH = '使用用户身份请求, 否则使用应用身份';

/**
 * Return a new tool list where each tool named in the user-access override
 * registry is marked user-capable: 'user' is added to accessTokens and a
 * language-aware `useUAT` field is injected into the schema (unless already
 * present). Tools not in the registry are returned by reference, untouched.
 * Source objects are never mutated.
 */
export function applyUserAccessOverrides(tools: McpTool[], isZH = false): McpTool[] {
  return tools.map((tool) => {
    if (!userAccessOverrideNames.has(tool.name)) {
      return tool;
    }
    const accessTokens = Array.from(new Set([...(tool.accessTokens ?? ['tenant']), 'user']));
    const schema = tool.schema?.useUAT
      ? tool.schema
      : {
          ...tool.schema,
          useUAT: z
            .boolean()
            .describe(isZH ? USE_UAT_DESC_ZH : USE_UAT_DESC_EN)
            .optional(),
        };
    return { ...tool, accessTokens, schema };
  });
}
