"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageManager = exports.StorageManager = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const encryption_1 = require("./encryption");
const config_1 = require("../config");
const logger_1 = require("../../utils/logger");
class StorageManager {
    constructor() {
        this.isInitializedStorageSuccess = false;
        this.initialize();
    }
    get storageFile() {
        return path_1.default.join(config_1.AUTH_CONFIG.STORAGE_DIR, config_1.AUTH_CONFIG.STORAGE_FILE);
    }
    async initialize() {
        if (this.initializePromise) {
            return this.initializePromise;
        }
        this.initializePromise = this.performInitialization();
        await this.initializePromise;
    }
    async performInitialization() {
        try {
            await this.initializeEncryption();
            this.ensureStorageDir();
            this.isInitializedStorageSuccess = true;
        }
        catch (error) {
            logger_1.logger.warn(`[StorageManager] Failed to initialize: ${error}`);
            logger_1.logger.warn('[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store');
            this.isInitializedStorageSuccess = false;
        }
    }
    async initializeEncryption() {
        var _a;
        // Upstream stored the AES key in the OS keychain via `keytar`, which requires native
        // libsecret bindings and silently fails in a headless container. For remote/container
        // deployment we read a stable 32-byte (64 hex char) key from LARK_MCP_ENCRYPTION_KEY so
        // the encrypted token store survives across restarts on a persistent volume.
        // If unset, persistence is disabled and the server falls back to an in-memory store.
        const envKey = (_a = process.env.LARK_MCP_ENCRYPTION_KEY) === null || _a === void 0 ? void 0 : _a.trim();
        if (!envKey) {
            throw new Error('LARK_MCP_ENCRYPTION_KEY not set — persistent token store disabled, using in-memory store');
        }
        if (!/^[0-9a-f]{64}$/i.test(envKey)) {
            throw new Error('LARK_MCP_ENCRYPTION_KEY must be a 64-character hex string (32 bytes)');
        }
        this.encryptionUtil = new encryption_1.EncryptionUtil(envKey.toLowerCase());
    }
    ensureStorageDir() {
        if (!fs_1.default.existsSync(config_1.AUTH_CONFIG.STORAGE_DIR)) {
            fs_1.default.mkdirSync(config_1.AUTH_CONFIG.STORAGE_DIR, { recursive: true });
        }
    }
    encrypt(data) {
        if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
            throw new Error('StorageManager not initialized - call initialize() first');
        }
        return this.encryptionUtil.encrypt(data);
    }
    decrypt(encryptedData) {
        if (!this.isInitializedStorageSuccess || !this.encryptionUtil) {
            throw new Error('StorageManager not initialized - call initialize() first');
        }
        return this.encryptionUtil.decrypt(encryptedData);
    }
    async loadStorageData() {
        await this.initialize();
        if (!this.isInitializedStorageSuccess || !fs_1.default.existsSync(this.storageFile)) {
            return { tokens: {}, clients: {} };
        }
        try {
            const data = fs_1.default.readFileSync(this.storageFile, 'utf8');
            return data ? JSON.parse(this.decrypt(data)) : { tokens: {}, clients: {} };
        }
        catch (error) {
            logger_1.logger.error(`[StorageManager] Failed to load storage data: ${error}`);
            logger_1.logger.error('[StorageManager] ⚠️ Builtin User Access Token Store will be disabled. but you can still use it with memory store');
            return { tokens: {}, clients: {} };
        }
    }
    async saveStorageData(data) {
        if (!this.isInitializedStorageSuccess) {
            return;
        }
        await this.initialize();
        try {
            const encryptedData = this.encrypt(JSON.stringify(data, null, 2));
            fs_1.default.writeFileSync(this.storageFile, encryptedData);
        }
        catch (error) {
            logger_1.logger.error(`[StorageManager] Failed to save storage data: ${error}`);
            throw error;
        }
    }
}
exports.StorageManager = StorageManager;
exports.storageManager = new StorageManager();
