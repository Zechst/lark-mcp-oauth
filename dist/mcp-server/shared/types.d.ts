import * as larkmcp from '../../mcp-tool';
import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { LarkAuthHandler } from '../../auth';
export type McpServerType = 'oapi' | 'recall';
export type McpServerTransport = 'stdio' | 'sse' | 'streamable';
export declare const mcpServerOptionSchema: z.ZodObject<{
    tools: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    language: z.ZodOptional<z.ZodEnum<["zh", "en"]>>;
    toolNameCase: z.ZodOptional<z.ZodEnum<["snake", "camel"]>>;
    tokenMode: z.ZodOptional<z.ZodEnum<["auto", "user_access_token", "tenant_access_token"]>>;
}, "strip", z.ZodTypeAny, {
    language?: "en" | "zh" | undefined;
    tokenMode?: "auto" | "user_access_token" | "tenant_access_token" | undefined;
    tools?: string | string[] | undefined;
    toolNameCase?: "snake" | "camel" | undefined;
}, {
    language?: "en" | "zh" | undefined;
    tokenMode?: "auto" | "user_access_token" | "tenant_access_token" | undefined;
    tools?: string | string[] | undefined;
    toolNameCase?: "snake" | "camel" | undefined;
}>;
export interface McpServerOptions {
    appId?: string;
    appSecret?: string;
    domain?: string;
    tools?: string[];
    language?: 'zh' | 'en';
    toolNameCase?: larkmcp.ToolNameCase;
    tokenMode?: larkmcp.TokenMode;
    userAccessToken?: string | larkmcp.SettableValue;
    oauth?: boolean;
    scope?: string[];
    mode?: McpServerTransport;
    host?: string;
    port?: number;
}
export type InitTransportServerFunction = (getNewServer: (options?: McpServerOptions, authHandler?: LarkAuthHandler) => McpServer, mcpServerOptions: McpServerOptions, authOptions?: {
    needAuthFlow: boolean;
}) => void | Promise<void>;
