export declare class EncryptionUtil {
    private aesKey;
    constructor(aesKey: string);
    encrypt(data: string): string;
    decrypt(encryptedData: string): string;
    static generateKey(): string;
}
