import fs from 'fs';
import path from 'path';
import { EncryptionUtil } from './encryption';
import { AUTH_CONFIG } from '../config';
import { StorageData } from '../types';
import { logger } from '../../utils/logger';

export class StorageManager {
  private encryptionUtil: EncryptionUtil | undefined;
  private initializePromise: Promise<void> | undefined;
  private isInitializedStorageSuccess = false;

  constructor() {
    this.initialize();
  }

  get storageFile(): string {
    return path.join(AUTH_CONFIG.STORAGE_DIR, AUTH_CONFIG.STORAGE_FILE);
  }

  private async initialize(): Promise<void> {
    if (this.initializePromise) {
      return this.initializePromise;
    }

    this.initializePromise = this.performInitialization();

    await this.initializePromise;
  }

  private async performInitialization(): Promise<void> {
    try {
      await this.initializeEncryption();
      this.ensureStorageDir();
      this.isInitializedStorageSuccess = true;
    } catch (error) {
      logger.warn(`[StorageManager] Failed to initialize: ${error}`);
      logger.warn(
        '[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store',
      );
      this.isInitializedStorageSuccess = false;
    }
  }

  private async initializeEncryption(): Promise<void> {
    // Upstream stored the AES key in the OS keychain via `keytar`, which requires native
    // libsecret bindings and silently fails in a headless container. For remote/container
    // deployment we read a stable 32-byte (64 hex char) key from LARK_MCP_ENCRYPTION_KEY so
    // the encrypted token store survives across restarts on a persistent volume.
    // If unset, persistence is disabled and the server falls back to an in-memory store.
    const envKey = process.env.LARK_MCP_ENCRYPTION_KEY?.trim();
    if (!envKey) {
      throw new Error(
        'LARK_MCP_ENCRYPTION_KEY not set — persistent token store disabled, using in-memory store',
      );
    }
    if (!/^[0-9a-f]{64}$/i.test(envKey)) {
      throw new Error('LARK_MCP_ENCRYPTION_KEY must be a 64-character hex string (32 bytes)');
    }
    this.encryptionUtil = new EncryptionUtil(envKey.toLowerCase());
  }

  private ensureStorageDir(): void {
    if (!fs.existsSync(AUTH_CONFIG.STORAGE_DIR)) {
      fs.mkdirSync(AUTH_CONFIG.STORAGE_DIR, { recursive: true });
    }
  }

  encrypt(data: string): string {
    if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
      throw new Error('StorageManager not initialized - call initialize() first');
    }
    return this.encryptionUtil.encrypt(data);
  }

  decrypt(encryptedData: string): string {
    if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
      throw new Error('StorageManager not initialized - call initialize() first');
    }
    return this.encryptionUtil.decrypt(encryptedData);
  }

  async loadStorageData(): Promise<StorageData> {
    await this.initialize();
    if (!this.isInitializedStorageSuccess || !fs.existsSync(this.storageFile)) {
      return { tokens: {}, clients: {} };
    }
    try {
      const data = fs.readFileSync(this.storageFile, 'utf8');
      return data ? JSON.parse(this.decrypt(data)) : { tokens: {}, clients: {} };
    } catch (error) {
      logger.error(`[StorageManager] Failed to load storage data: ${error}`);
      logger.error(
        '[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store',
      );
      return { tokens: {}, clients: {} };
    }
  }

  async saveStorageData(data: StorageData): Promise<void> {
    if (!this.isInitializedStorageSuccess) {
      return;
    }
    await this.initialize();
    try {
      const encryptedData = this.encrypt(JSON.stringify(data, null, 2));
      fs.writeFileSync(this.storageFile, encryptedData);
    } catch (error) {
      logger.error(`[StorageManager] Failed to save storage data: ${error}`);
      throw error;
    }
  }
}

export const storageManager = new StorageManager();
