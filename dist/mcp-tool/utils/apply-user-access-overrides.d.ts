import { McpTool } from '../types';
/**
 * Return a new tool list where each tool named in the user-access override
 * registry is marked user-capable: 'user' is added to accessTokens and a
 * language-aware `useUAT` field is injected into the schema (unless already
 * present). Tools not in the registry are returned by reference, untouched.
 * Source objects are never mutated.
 */
export declare function applyUserAccessOverrides(tools: McpTool[], isZH?: boolean): McpTool[];
