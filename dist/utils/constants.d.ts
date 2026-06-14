import envPaths from 'env-paths';
export declare const ENV_PATHS: envPaths.Paths;
export declare const USER_AGENT: string;
export declare const NODE_VERSION_MAJOR: number;
export declare const OAPI_MCP_DEFAULT_ARGS: {
    domain: string;
    toolNameCase: string;
    language: string;
    tokenMode: string;
    mode: string;
    host: string;
    port: string;
};
export declare const OAPI_MCP_ENV_ARGS: Record<string, string>;
export declare enum OAPI_MCP_ERROR_CODE {
    USER_ACCESS_TOKEN_INVALID = 99991668,
    USER_ACCESS_TOKEN_UNAUTHORIZED = 99991679
}
