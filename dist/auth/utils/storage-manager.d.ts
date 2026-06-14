import { StorageData } from '../types';
export declare class StorageManager {
    private encryptionUtil;
    private initializePromise;
    private isInitializedStorageSuccess;
    constructor();
    get storageFile(): string;
    private initialize;
    private performInitialization;
    private initializeEncryption;
    private ensureStorageDir;
    encrypt(data: string): string;
    decrypt(encryptedData: string): string;
    loadStorageData(): Promise<StorageData>;
    saveStorageData(data: StorageData): Promise<void>;
}
export declare const storageManager: StorageManager;
