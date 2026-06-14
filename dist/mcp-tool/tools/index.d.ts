import { BuiltinToolName } from './en/builtin-tools';
import { ToolName as GenToolName, ProjectName as GenProjectName } from './en/gen-tools';
export type ToolName = GenToolName | BuiltinToolName;
export type ProjectName = GenProjectName;
export declare const AllTools: (import("..").McpTool | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_id: import("zod").ZodString;
            app_secret: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_access_token: import("zod").ZodString;
            tenant_key: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_access_token: string;
            tenant_key: string;
        }, {
            app_access_token: string;
            tenant_key: string;
        }>;
    };
})[];
export declare const AllToolsZh: (import("..").McpTool | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_id: import("zod").ZodString;
            app_secret: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_access_token: import("zod").ZodString;
            tenant_key: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_access_token: string;
            tenant_key: string;
        }, {
            app_access_token: string;
            tenant_key: string;
        }>;
    };
})[];
