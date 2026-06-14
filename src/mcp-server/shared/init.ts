import * as larkmcp from '../../mcp-tool';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { initStdioServer, initSSEServer, initStreamableServer } from '../transport';
import { McpServerOptions, McpServerType } from './types';
import { noop } from '../../utils/noop';
import { currentVersion } from '../../utils/version';
import { oapiHttpInstance } from '../../utils/http-instance';
import { LarkAuthHandler } from '../../auth';
import { logger } from '../../utils/logger';

export function initOAPIMcpServer(options: McpServerOptions, authHandler?: LarkAuthHandler) {
  const { appId, appSecret, userAccessToken, tokenMode, domain, oauth } = options;

  if (!appId || !appSecret) {
    console.error('Error: Missing App Credentials');
    throw new Error('Missing App Credentials');
  }

  let allowTools = options.tools || [];

  // Expand any preset names (e.g. preset.doc.default) into their concrete tool names.
  for (const [presetName, presetTools] of Object.entries(larkmcp.presetTools)) {
    if (allowTools.includes(presetName)) {
      allowTools = [...presetTools, ...allowTools];
    }
  }

  // Unique
  allowTools = Array.from(new Set(allowTools));

  // Classify the -t entries: preset markers are dropped (already expanded above), entries
  // containing a dot are concrete tool names (e.g. sheets.v3.spreadsheet.create), and bare
  // words are whole projects (e.g. "sheets", "mail", "calendar") enabled via allowProjects.
  // Project selection turns on a domain that has no preset without listing every tool by hand.
  // The tokenMode filter still applies downstream, so user_access_token mode keeps only the
  // user-capable tools within a selected project.
  const presetNames = new Set(Object.keys(larkmcp.presetTools));
  const resolvedTools: string[] = [];
  const resolvedProjects: string[] = [];
  for (const entry of allowTools) {
    if (presetNames.has(entry)) {
      continue;
    }
    if (entry.includes('.')) {
      resolvedTools.push(entry);
    } else {
      resolvedProjects.push(entry);
    }
  }

  // Create MCP Server
  const mcpServer = new McpServer({ id: 'lark-mcp-server', name: 'Feishu/Lark MCP Server', version: currentVersion });

  const hasSelection = resolvedTools.length > 0 || resolvedProjects.length > 0;
  const toolsOptions = hasSelection
    ? {
        allowTools: resolvedTools as larkmcp.ToolName[],
        allowProjects: resolvedProjects as larkmcp.ProjectName[],
        language: options.language,
      }
    : { language: options.language };

  const larkClient = new larkmcp.LarkMcpTool(
    {
      appId,
      appSecret,
      logger: { warn: noop, error: noop, debug: noop, info: noop, trace: noop },
      httpInstance: oapiHttpInstance,
      domain,
      toolsOptions,
      tokenMode,
      oauth,
    },
    authHandler,
  );

  if (userAccessToken) {
    larkClient.updateUserAccessToken(userAccessToken);
  }

  larkClient.registerMcpServer(mcpServer, { toolNameCase: options.toolNameCase });

  return { mcpServer, larkClient };
}

export function initRecallMcpServer(options: McpServerOptions) {
  const server = new McpServer({
    id: 'lark-recall-mcp-server',
    name: 'Lark Recall MCP Service',
    version: currentVersion,
  });
  server.tool(larkmcp.RecallTool.name, larkmcp.RecallTool.description, larkmcp.RecallTool.schema, (params) =>
    larkmcp.RecallTool.handler(params, options),
  );
  return server;
}

export async function initMcpServerWithTransport(serverType: McpServerType, options: McpServerOptions) {
  const { mode, userAccessToken, oauth } = options;

  if (userAccessToken && oauth) {
    logger.error(`[initMcpServerWithTransport] userAccessToken and oauth cannot be used together`);
    throw new Error('userAccessToken and oauth cannot be used together');
  }

  const getNewServer = (commonOptions?: McpServerOptions, authHandler?: LarkAuthHandler) => {
    if (serverType === 'oapi') {
      const { mcpServer } = initOAPIMcpServer({ ...options, ...commonOptions }, authHandler);
      return mcpServer;
    } else if (serverType === 'recall') {
      return initRecallMcpServer({ ...options, ...commonOptions });
    }
    logger.error(`[initMcpServerWithTransport] Invalid server type: ${serverType}`);
    throw new Error('Invalid server type');
  };

  const needAuthFlow = serverType === 'oapi';

  switch (mode) {
    case 'stdio':
      await initStdioServer(getNewServer, options, { needAuthFlow });
      break;
    case 'sse':
      await initSSEServer(getNewServer, options, { needAuthFlow });
      break;
    case 'streamable':
      await initStreamableServer(getNewServer, options, { needAuthFlow });
      break;
    default:
      throw new Error('Invalid mode:' + mode);
  }
}
