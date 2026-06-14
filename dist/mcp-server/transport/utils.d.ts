import { Request, Response } from 'express';
import { McpServerOptions } from '../shared';
export declare enum JSONRPCErrorCodes {
    PARSE_ERROR = -32700,
    INVALID_REQUEST = -32600,
    METHOD_NOT_FOUND = -32601,
    INVALID_PARAMS = -32602,
    INTERNAL_ERROR = -32603
}
export declare function parseMCPServerOptionsFromRequest(req: Request): {
    data: McpServerOptions;
    success: boolean;
    message?: string;
};
export declare function sendJsonRpcError(res: Response, error: Error, httpCode?: number, code?: JSONRPCErrorCodes, id?: number | null): void;
export declare function sendResponseError(res: Response, error: Error, httpCode?: number): void;
