export declare function generateCodeVerifier(): string;
export declare function generateCodeChallenge(codeVerifier: string): string;
export declare function generatePKCEPair(): {
    codeVerifier: string;
    codeChallenge: string;
};
