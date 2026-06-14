import { Request, Response } from 'express';
import { LarkAuthHandler } from './handler';
export declare class LarkAuthHandlerLocal extends LarkAuthHandler {
    private static readonly LOCAL_CLIENT_ID;
    private expressServer;
    private timeoutId;
    private startServer;
    private stopServer;
    protected callback(req: Request, res: Response): Promise<void>;
    refreshToken(accessToken: string): Promise<{
        access_token: string;
        token_type: string;
        expires_in?: number | undefined;
        scope?: string | undefined;
        refresh_token?: string | undefined;
    }>;
    reAuthorize(accessToken?: string, ignoreCheck?: boolean): Promise<{
        accessToken: string;
        authorizeUrl: string;
    }>;
}
