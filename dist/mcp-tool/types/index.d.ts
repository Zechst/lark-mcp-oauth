import * as lark from '@larksuiteoapi/node-sdk';
import { ProjectName, ToolName } from '../tools';
import { CallToolResult } from '@modelcontextprotocol/sdk/types';
export type ToolNameCase = 'snake' | 'camel' | 'kebab' | 'dot';
export declare enum TokenMode {
    AUTO = "auto",
    USER_ACCESS_TOKEN = "user_access_token",
    TENANT_ACCESS_TOKEN = "tenant_access_token"
}
export interface McpHandlerOptions {
    userAccessToken?: string;
    tool?: McpTool;
}
export type McpHandler = (client: lark.Client, params: any, options: McpHandlerOptions) => Promise<CallToolResult> | CallToolResult;
/**
 * MCP Tool
 */
export interface McpTool {
    project: string;
    name: string;
    description: string;
    schema: any;
    sdkName?: string;
    path?: string;
    httpMethod?: string;
    accessTokens?: string[];
    supportFileUpload?: boolean;
    supportFileDownload?: boolean;
    customHandler?: McpHandler;
}
/**
 * Tools Filter Options
 */
export interface ToolsFilterOptions {
    language?: 'zh' | 'en';
    allowTools?: ToolName[];
    allowProjects?: ProjectName[];
    tokenMode?: TokenMode;
}
export type LarkClientOptions = Partial<ConstructorParameters<typeof lark.Client>[0]>;
export interface LarkMcpToolOptions extends LarkClientOptions {
    client?: lark.Client;
    appId?: string;
    appSecret?: string;
    toolsOptions?: ToolsFilterOptions;
    tokenMode?: TokenMode;
    oauth?: boolean;
}
export interface SettableValue {
    value?: string;
    getter?: () => Promise<string | undefined>;
    setter?: (value?: string) => Promise<void>;
}
