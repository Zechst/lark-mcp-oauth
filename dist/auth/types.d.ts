import { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js';
import { OAuthClientInformationFull } from '@modelcontextprotocol/sdk/shared/auth.js';
export interface StorageData {
    localTokens?: {
        [appId: string]: string;
    };
    tokens: {
        [key: string]: AuthInfo;
    };
    clients: {
        [key: string]: OAuthClientInformationFull;
    };
}
