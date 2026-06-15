"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONRPCErrorCodes = void 0;
exports.getTrustProxySetting = getTrustProxySetting;
exports.parseMCPServerOptionsFromRequest = parseMCPServerOptionsFromRequest;
exports.sendJsonRpcError = sendJsonRpcError;
exports.sendResponseError = sendResponseError;
const shared_1 = require("../shared");
var JSONRPCErrorCodes;
(function (JSONRPCErrorCodes) {
    JSONRPCErrorCodes[JSONRPCErrorCodes["PARSE_ERROR"] = -32700] = "PARSE_ERROR";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    JSONRPCErrorCodes[JSONRPCErrorCodes["METHOD_NOT_FOUND"] = -32601] = "METHOD_NOT_FOUND";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
    JSONRPCErrorCodes[JSONRPCErrorCodes["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
})(JSONRPCErrorCodes || (exports.JSONRPCErrorCodes = JSONRPCErrorCodes = {}));
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
function getTrustProxySetting() {
    var _a;
    const raw = (_a = process.env.TRUST_PROXY) !== null && _a !== void 0 ? _a : '1';
    return /^\d+$/.test(raw) ? Number(raw) : raw;
}
function parseMCPServerOptionsFromRequest(req) {
    const result = shared_1.mcpServerOptionSchema.safeParse(req.query || {});
    if (!result.success) {
        return { data: {}, success: false, message: result.error.message };
    }
    return { data: result.data, success: true };
}
function sendJsonRpcError(res, error, httpCode = 500, code = JSONRPCErrorCodes.INTERNAL_ERROR, id = null) {
    console.error(error);
    if (!res.headersSent) {
        res.status(httpCode).json({ jsonrpc: '2.0', error: { code, message: error.message }, id });
    }
}
function sendResponseError(res, error, httpCode = 500) {
    console.error(error);
    if (!res.headersSent) {
        res.status(httpCode).send(error.message);
    }
}
