export declare const AUTH_CONFIG: {
    readonly SERVER_NAME: "lark-mcp";
    readonly AES_KEY_NAME: "encryption-key";
    readonly STORAGE_DIR: string;
    readonly STORAGE_FILE: "storage.json";
    readonly ENCRYPTION: {
        readonly ALGORITHM: "aes-256-cbc";
        readonly KEY_LENGTH: 32;
        readonly IV_LENGTH: 16;
    };
};
export type AuthConfig = typeof AUTH_CONFIG;
