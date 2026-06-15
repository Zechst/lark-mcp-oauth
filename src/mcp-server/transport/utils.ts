import { Request, Response } from 'express';
import { McpServerOptions, mcpServerOptionSchema } from '../shared';

export enum JSONRPCErrorCodes {
  PARSE_ERROR = -32700,
  INVALID_REQUEST = -32600,
  METHOD_NOT_FOUND = -32601,
  INVALID_PARAMS = -32602,
  INTERNAL_ERROR = -32603,
}

/**
 * Resolve the Express `trust proxy` setting from the TRUST_PROXY env var.
 *
 * When the server runs behind a reverse proxy (Render, Cloudflare, nginx) the
 * proxy sets the X-Forwarded-For header. express-rate-limit (used by the MCP
 * SDK's OAuth router) refuses to run if X-Forwarded-For is present but
 * `trust proxy` is off, throwing ERR_ERL_UNEXPECTED_X_FORWARDED_FOR. Setting
 * the number of proxy hops lets Express derive the real client IP safely.
 *
 * Default `1` matches a single proxy hop (Render). Numeric strings become the
 * hop count; any other value (e.g. "loopback", "true") is passed through to
 * Express as-is. Prefer a hop count over `true` — `true` trusts every proxy,
 * which lets clients spoof X-Forwarded-For to evade rate limits.
 */
export function getTrustProxySetting(): number | string {
  const raw = process.env.TRUST_PROXY ?? '1';
  return /^\d+$/.test(raw) ? Number(raw) : raw;
}

export function parseMCPServerOptionsFromRequest(req: Request): {
  data: McpServerOptions;
  success: boolean;
  message?: string;
} {
  const result = mcpServerOptionSchema.safeParse(req.query || {});
  if (!result.success) {
    return { data: {}, success: false, message: result.error.message };
  }
  return { data: result.data as McpServerOptions, success: true };
}

export function sendJsonRpcError(
  res: Response,
  error: Error,
  httpCode = 500,
  code = JSONRPCErrorCodes.INTERNAL_ERROR,
  id: number | null = null,
) {
  console.error(error);
  if (!res.headersSent) {
    res.status(httpCode).json({ jsonrpc: '2.0', error: { code, message: error.message }, id });
  }
}

export function sendResponseError(res: Response, error: Error, httpCode = 500): void {
  console.error(error);
  if (!res.headersSent) {
    res.status(httpCode).send(error.message);
  }
}
