import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { LarkMcpToolOptions, McpTool, SettableValue, ToolNameCase } from './types';
import { LarkAuthHandler } from '../auth';
/**
 * Feishu/Lark MCP
 */
export declare class LarkMcpTool {
    private client;
    private userAccessToken;
    private auth;
    private options;
    private allTools;
    /**
     * Feishu/Lark MCP
     * @param options Feishu/Lark Client Options
     */
    constructor(options: LarkMcpToolOptions, auth?: LarkAuthHandler);
    /**
     * Get MCP Tools
     * @returns MCP Tool Definition Array
     */
    getTools(): McpTool[];
    /**
     * Update User Access Token
     * @param userAccessToken User Access Token
     */
    updateUserAccessToken(userAccessToken: string | SettableValue): void;
    private getUserAccessToken;
    private setUserAccessToken;
    reAuthorize(): Promise<{
        userAccessToken?: string;
        authorizeUrl?: string;
    }>;
    ensureGetUserAccessToken(): Promise<{
        userAccessToken?: string;
        authorizeUrl?: string;
    }>;
    getReAuthorizeMessage(authorizeUrl?: string, errorCode?: number, errorText?: string): {
        isError: boolean;
        content: {
            type: "text";
            text: string;
        }[];
    };
    /**
     * Register Tools to MCP Server
     * @param server MCP Server Instance
     */
    registerMcpServer(server: McpServer, options?: {
        toolNameCase?: ToolNameCase;
    }): void;
}
