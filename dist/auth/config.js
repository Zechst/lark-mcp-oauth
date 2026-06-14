"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_CONFIG = void 0;
const constants_1 = require("../utils/constants");
exports.AUTH_CONFIG = {
    SERVER_NAME: 'lark-mcp',
    AES_KEY_NAME: 'encryption-key',
    // Override with LARK_MCP_STORAGE_DIR to point at a mounted persistent volume (e.g. a
    // Render disk at /data) so encrypted tokens survive redeploys. Defaults to the per-OS data dir.
    STORAGE_DIR: ((_a = process.env.LARK_MCP_STORAGE_DIR) === null || _a === void 0 ? void 0 : _a.trim()) || constants_1.ENV_PATHS.data,
    STORAGE_FILE: 'storage.json',
    ENCRYPTION: {
        ALGORITHM: 'aes-256-cbc',
        KEY_LENGTH: 32, // 256 bits
        IV_LENGTH: 16, // 128 bits
    },
};
