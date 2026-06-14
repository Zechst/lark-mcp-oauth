import { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js';
import { OAuthClientInformationFull } from '@modelcontextprotocol/sdk/shared/auth.js';
import { OAuthRegisteredClientsStore } from '@modelcontextprotocol/sdk/server/auth/clients.js';
export declare class AuthStore implements OAuthRegisteredClientsStore {
    private storageDataCache;
    private codeVerifiers;
    private initializePromise;
    private fileWatcher;
    private isReloading;
    private isInitializedStorageSuccess;
    constructor();
    private initialize;
    private performInitialization;
    private setupFileWatcher;
    private handleFileChange;
    private loadFromStorage;
    private saveToStorage;
    private clearExpiredTokens;
    storeToken(token: AuthInfo): Promise<AuthInfo>;
    removeToken(accessToken: string): Promise<void>;
    getToken(accessToken: string): Promise<AuthInfo | undefined>;
    getTokenByRefreshToken(refreshToken: string): Promise<AuthInfo | undefined>;
    getLocalAccessToken(appId: string): Promise<string | undefined>;
    storeLocalAccessToken(accessToken: string, appId: string): Promise<string>;
    removeLocalAccessToken(appId: string): Promise<void>;
    removeAllLocalAccessTokens(): Promise<void>;
    getAllLocalAccessTokens(): Promise<{
        [appId: string]: string;
    }>;
    registerClient(client: OAuthClientInformationFull): Promise<OAuthClientInformationFull>;
    getClient(id: string): Promise<OAuthClientInformationFull | undefined>;
    removeClient(clientId: string): Promise<void>;
    storeCodeVerifier(key: string, codeVerifier: string): void;
    getCodeVerifier(key: string): string | undefined;
    removeCodeVerifier(key: string): void;
    clearExpiredCodeVerifiers(): void;
    destroy(): void;
}
export declare const authStore: AuthStore;
