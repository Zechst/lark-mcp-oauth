import { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js';
export declare function isTokenValid(accessToken?: string): Promise<{
    valid: boolean;
    isExpired: boolean;
    token: AuthInfo | undefined;
}>;
export declare function isTokenExpired(token?: AuthInfo): boolean;
