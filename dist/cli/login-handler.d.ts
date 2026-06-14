export interface LoginOptions {
    appId: string;
    appSecret: string;
    domain: string;
    host: string;
    port: string;
    scope?: string[];
    timeout?: number;
}
export declare class LoginHandler {
    static checkTokenWithTimeout(timeout: number, appId: string): Promise<boolean>;
    static handleLogin(options: LoginOptions): Promise<void>;
    static handleLogout(appId?: string): Promise<void>;
    private static simpleMask;
    static handleWhoAmI(): Promise<void>;
}
