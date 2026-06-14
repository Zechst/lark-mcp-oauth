import { Response } from 'express';
import { OAuthRegisteredClientsStore } from '@modelcontextprotocol/sdk/server/auth/clients.js';
import { OAuthClientInformationFull, OAuthTokens } from '@modelcontextprotocol/sdk/shared/auth.js';
import { AuthorizationParams, OAuthServerProvider } from '@modelcontextprotocol/sdk/server/auth/provider.js';
import { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js';
import { LarkProxyOAuthServerProviderOptions } from './types';
export declare class LarkOAuth2OAuthServerProvider implements OAuthServerProvider {
    private readonly _endpoints;
    private readonly _options;
    skipLocalPkceValidation: boolean;
    constructor(options: LarkProxyOAuthServerProviderOptions);
    get clientsStore(): OAuthRegisteredClientsStore;
    authorize(_client: OAuthClientInformationFull, params: AuthorizationParams, res: Response): Promise<void>;
    challengeForAuthorizationCode(_client: OAuthClientInformationFull, _authorizationCode: string): Promise<string>;
    exchangeAuthorizationCode(client: OAuthClientInformationFull, authorizationCode: string, codeVerifier?: string, redirectUri?: string): Promise<OAuthTokens>;
    exchangeRefreshToken(client: OAuthClientInformationFull, refreshToken: string, scopes?: string[]): Promise<OAuthTokens>;
    verifyAccessToken(token: string): Promise<AuthInfo>;
}
