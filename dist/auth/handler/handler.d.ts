import { Express, Request, Response, NextFunction } from 'express';
import { LarkOIDC2OAuthServerProvider, LarkOAuth2OAuthServerProvider } from '../provider';
export interface LarkOAuthClientConfig {
    port: number;
    host: string;
    domain: string;
    appId: string;
    appSecret: string;
    scope?: string[];
}
export declare class LarkAuthHandler {
    protected readonly app: Express;
    protected readonly options: LarkOAuthClientConfig;
    protected readonly provider: LarkOIDC2OAuthServerProvider | LarkOAuth2OAuthServerProvider;
    protected get publicBaseUrl(): string | undefined;
    get callbackUrl(): string;
    get issuerUrl(): string;
    constructor(app: Express, options: Partial<LarkOAuthClientConfig>);
    protected callback(req: Request, res: Response): Promise<void>;
    setupRoutes: () => void;
    authenticateRequest(req: Request, res: Response, next: NextFunction): void;
    refreshToken(accessToken: string): Promise<{
        access_token: string;
        token_type: string;
        expires_in?: number | undefined;
        scope?: string | undefined;
        refresh_token?: string | undefined;
    }>;
    reAuthorize(accessToken?: string): Promise<{
        accessToken: string;
        authorizeUrl: string;
    }>;
}
