import * as larkmcp from '../../mcp-tool';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { McpServerOptions, McpServerType } from './types';
import { LarkAuthHandler } from '../../auth';
export declare function initOAPIMcpServer(options: McpServerOptions, authHandler?: LarkAuthHandler): {
    mcpServer: McpServer;
    larkClient: larkmcp.LarkMcpTool;
};
export declare function initRecallMcpServer(options: McpServerOptions): McpServer;
export declare function initMcpServerWithTransport(serverType: McpServerType, options: McpServerOptions): Promise<void>;
