import { StorageManager } from '../../../src/auth/utils/storage-manager';
import { EncryptionUtil } from '../../../src/auth/utils/encryption';
import { AUTH_CONFIG } from '../../../src/auth/config';
import fs from 'fs';
import path from 'path';

// Mock dependencies
jest.mock('fs');
jest.mock('../../../src/auth/utils/encryption');

const mockFs = fs as jest.Mocked<typeof fs>;
const MockEncryptionUtil = EncryptionUtil as jest.MockedClass<typeof EncryptionUtil>;

// A valid 64-char hex key (32 bytes) for LARK_MCP_ENCRYPTION_KEY.
const VALID_KEY = 'a'.repeat(64);

describe('StorageManager', () => {
  let storageManager: StorageManager;
  let mockEncryptInstance: jest.Mocked<EncryptionUtil>;

  beforeEach(async () => {
    jest.clearAllMocks();

    process.env.LARK_MCP_ENCRYPTION_KEY = VALID_KEY;

    // Mock EncryptionUtil
    mockEncryptInstance = {
      encrypt: jest.fn(),
      decrypt: jest.fn(),
    } as any;

    MockEncryptionUtil.mockImplementation(() => mockEncryptInstance);
    MockEncryptionUtil.generateKey = jest.fn().mockReturnValue('mock-key');

    // Mock fs
    mockFs.existsSync.mockReturnValue(false);
    mockFs.mkdirSync.mockReturnValue(undefined as any);
    mockFs.readFileSync.mockReturnValue('{}');
    mockFs.writeFileSync.mockReturnValue(undefined);

    storageManager = new StorageManager();

    // Wait for auto-initialization to complete
    await new Promise((resolve) => setTimeout(resolve, 10));
  });

  afterEach(() => {
    delete process.env.LARK_MCP_ENCRYPTION_KEY;
  });

  describe('initialization', () => {
    it('should auto-initialize with the key from LARK_MCP_ENCRYPTION_KEY', async () => {
      const manager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(MockEncryptionUtil).toHaveBeenCalledWith(VALID_KEY);
      expect(() => manager.encrypt('x')).not.toThrow();
    });

    it('should create storage directory if it does not exist during auto-initialization', async () => {
      mockFs.existsSync.mockReturnValue(false);

      const manager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(mockFs.mkdirSync).toHaveBeenCalledWith(AUTH_CONFIG.STORAGE_DIR, { recursive: true });
    });

    it('should not create storage directory if it exists during auto-initialization', async () => {
      jest.clearAllMocks();
      MockEncryptionUtil.mockImplementation(() => mockEncryptInstance);

      mockFs.existsSync.mockImplementation((p) => p === AUTH_CONFIG.STORAGE_DIR);

      const manager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(mockFs.mkdirSync).not.toHaveBeenCalled();
    });

    it('should disable persistence when LARK_MCP_ENCRYPTION_KEY is missing', async () => {
      delete process.env.LARK_MCP_ENCRYPTION_KEY;

      const manager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      // Encryption was never constructed; the store falls back to disabled/in-memory.
      expect(() => manager.encrypt('data')).toThrow('StorageManager not initialized');
    });

    it('should disable persistence when LARK_MCP_ENCRYPTION_KEY is not valid hex', async () => {
      process.env.LARK_MCP_ENCRYPTION_KEY = 'not-a-valid-hex-key';

      const manager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(() => manager.encrypt('data')).toThrow('StorageManager not initialized');
    });
  });

  describe('encryption/decryption', () => {
    it('should encrypt data after auto-initialization', async () => {
      mockEncryptInstance.encrypt.mockReturnValue('encrypted-data');

      const result = storageManager.encrypt('test-data');

      expect(mockEncryptInstance.encrypt).toHaveBeenCalledWith('test-data');
      expect(result).toBe('encrypted-data');
    });

    it('should decrypt data after auto-initialization', async () => {
      mockEncryptInstance.decrypt.mockReturnValue('decrypted-data');

      const result = storageManager.decrypt('encrypted-data');

      expect(mockEncryptInstance.decrypt).toHaveBeenCalledWith('encrypted-data');
      expect(result).toBe('decrypted-data');
    });

    it('should throw error if initialization failed', async () => {
      delete process.env.LARK_MCP_ENCRYPTION_KEY;

      const failedManager = new StorageManager();
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(() => failedManager.encrypt('data')).toThrow('StorageManager not initialized');
      expect(() => failedManager.decrypt('data')).toThrow('StorageManager not initialized');
    });
  });

  describe('storage operations', () => {
    it('should load storage data from file', async () => {
      const mockData = { tokens: {}, clients: {} };
      const storageFile = path.join(AUTH_CONFIG.STORAGE_DIR, AUTH_CONFIG.STORAGE_FILE);
      const encryptedData = 'encrypted-json-data';

      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(encryptedData);
      mockEncryptInstance.decrypt.mockReturnValue(JSON.stringify(mockData));

      const result = await storageManager.loadStorageData();

      expect(mockFs.readFileSync).toHaveBeenCalledWith(storageFile, 'utf8');
      expect(mockEncryptInstance.decrypt).toHaveBeenCalledWith(encryptedData);
      expect(result).toEqual(mockData);
    });

    it('should return empty data if file does not exist', async () => {
      mockFs.existsSync.mockReturnValue(false);

      const result = await storageManager.loadStorageData();

      expect(result).toEqual({ tokens: {}, clients: {} });
    });

    it('should return empty data on read error', async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('Read error');
      });

      const result = await storageManager.loadStorageData();

      expect(result).toEqual({ tokens: {}, clients: {} });
    });

    it('should return empty data when file contains empty string', async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue('');
      mockEncryptInstance.decrypt.mockReturnValue('');

      const result = await storageManager.loadStorageData();

      expect(result).toEqual({ tokens: {}, clients: {} });
    });

    it('should save storage data to file', async () => {
      const mockData = {
        tokens: {
          token1: {
            token: 'test-token',
            clientId: 'test-client',
            scopes: ['scope1'],
            expiresAt: 9999999999,
          },
        },
        clients: {},
      };
      const storageFile = path.join(AUTH_CONFIG.STORAGE_DIR, AUTH_CONFIG.STORAGE_FILE);
      const encryptedData = 'encrypted-mock-data';

      mockEncryptInstance.encrypt.mockReturnValue(encryptedData);

      await storageManager.saveStorageData(mockData);

      expect(mockEncryptInstance.encrypt).toHaveBeenCalledWith(JSON.stringify(mockData, null, 2));
      expect(mockFs.writeFileSync).toHaveBeenCalledWith(storageFile, encryptedData);
    });

    it('should throw error on save failure', async () => {
      const mockData = { tokens: {}, clients: {} };
      mockFs.writeFileSync.mockImplementation(() => {
        throw new Error('Write error');
      });

      await expect(storageManager.saveStorageData(mockData)).rejects.toThrow('Write error');
    });

    it('should return empty data when initialization failed and file does not exist', async () => {
      delete process.env.LARK_MCP_ENCRYPTION_KEY;

      const failedManager = new StorageManager();
      mockFs.existsSync.mockReturnValue(false);

      const result = await failedManager.loadStorageData();

      expect(result).toEqual({ tokens: {}, clients: {} });
    });

    it('should skip saving when initialization failed', async () => {
      delete process.env.LARK_MCP_ENCRYPTION_KEY;

      const failedManager = new StorageManager();
      const mockData = { tokens: {}, clients: {} };

      await failedManager.saveStorageData(mockData);

      expect(mockFs.writeFileSync).not.toHaveBeenCalled();
    });
  });
});
