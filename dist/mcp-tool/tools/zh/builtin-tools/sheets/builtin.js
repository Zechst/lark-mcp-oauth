"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheetsBuiltinTools = exports.larkSheetsBuiltinAppendValuesTool = exports.larkSheetsBuiltinSetValuesTool = void 0;
const lark = __importStar(require("@larksuiteoapi/node-sdk"));
const zod_1 = require("zod");
// 表格单元格写入属于 Sheets v2 接口，不在自动生成的 v3 工具集中。以下内置工具封装
// values_batch_update（覆盖写入）与 values_append（追加行），让 MCP 能够真正填充和编辑
// 表格内容，而不仅仅是重命名和查找替换。
const valueRowsSchema = zod_1.z
    .array(zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()])))
    .describe('按行排列的二维单元格数组，使用 null 清空单元格，内层数组表示一行。');
const rangeDescription = "范围，格式为 '<sheetId>!<A1 表示法>'，例如 '0b**12!A1:C5'。sheetId 即工作表的 sheet_id，" +
    '可通过 sheets.v3.spreadsheetSheet.query 获取。A1 表示法为列字母 + 行号。';
exports.larkSheetsBuiltinSetValuesTool = {
    project: 'sheets',
    name: 'sheets.builtin.setValues',
    accessTokens: ['user', 'tenant'],
    description: '[飞书/Lark] - 云文档-电子表格 - 写入数据 - 使用给定的值覆盖一个或多个单元格范围' +
        '（Sheets v2 values_batch_update），目标范围内的原有数据将被替换。',
    schema: {
        data: zod_1.z.object({
            valueRanges: zod_1.z
                .array(zod_1.z.object({
                range: zod_1.z.string().describe(rangeDescription),
                values: valueRowsSchema,
            }))
                .describe('需要覆盖写入的一个或多个范围，每个范围独立写入。'),
        }),
        path: zod_1.z.object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('电子表格 token（表格 URL 中的 spreadsheetToken，或 sheets.v3.spreadsheet.create 返回值）。'),
        }),
        useUAT: zod_1.z.boolean().describe('是否使用用户身份发起请求，false 表示使用应用身份').optional(),
    },
    customHandler: async (client, params, options) => {
        var _a, _b, _c;
        try {
            const { userAccessToken } = options || {};
            const spreadsheetToken = (_a = params.path) === null || _a === void 0 ? void 0 : _a.spreadsheet_token;
            if (!spreadsheetToken) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'spreadsheet_token is required' }) }],
                };
            }
            const request = {
                method: 'POST',
                url: `/open-apis/sheets/v2/spreadsheets/${spreadsheetToken}/values_batch_update`,
                data: { valueRanges: params.data.valueRanges },
            };
            const response = userAccessToken && params.useUAT
                ? await client.request(request, lark.withUserAccessToken(userAccessToken))
                : await client.request(request);
            return {
                content: [{ type: 'text', text: JSON.stringify((_b = response.data) !== null && _b !== void 0 ? _b : response) }],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [{ type: 'text', text: JSON.stringify(((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) || error) }],
            };
        }
    },
};
exports.larkSheetsBuiltinAppendValuesTool = {
    project: 'sheets',
    name: 'sheets.builtin.appendValues',
    accessTokens: ['user', 'tenant'],
    description: '[飞书/Lark] - 云文档-电子表格 - 追加数据 - 在范围最后一行非空数据之后追加若干行' +
        '（Sheets v2 values_append），用于新增行而不覆盖已有数据。',
    schema: {
        data: zod_1.z.object({
            valueRange: zod_1.z.object({
                range: zod_1.z.string().describe(rangeDescription),
                values: valueRowsSchema,
            }),
        }),
        params: zod_1.z
            .object({
            insertDataOption: zod_1.z
                .enum(['OVERWRITE', 'INSERT_ROWS'])
                .describe('数据写入方式。OVERWRITE：写入范围后的已有单元格；INSERT_ROWS：插入新行。默认 OVERWRITE。')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            spreadsheet_token: zod_1.z.string().describe('电子表格 token（表格 URL 中的 spreadsheetToken）。'),
        }),
        useUAT: zod_1.z.boolean().describe('是否使用用户身份发起请求，false 表示使用应用身份').optional(),
    },
    customHandler: async (client, params, options) => {
        var _a, _b, _c;
        try {
            const { userAccessToken } = options || {};
            const spreadsheetToken = (_a = params.path) === null || _a === void 0 ? void 0 : _a.spreadsheet_token;
            if (!spreadsheetToken) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'spreadsheet_token is required' }) }],
                };
            }
            const request = {
                method: 'POST',
                url: `/open-apis/sheets/v2/spreadsheets/${spreadsheetToken}/values_append`,
                params: params.params,
                data: { valueRange: params.data.valueRange },
            };
            const response = userAccessToken && params.useUAT
                ? await client.request(request, lark.withUserAccessToken(userAccessToken))
                : await client.request(request);
            return {
                content: [{ type: 'text', text: JSON.stringify((_b = response.data) !== null && _b !== void 0 ? _b : response) }],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [{ type: 'text', text: JSON.stringify(((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) || error) }],
            };
        }
    },
};
exports.sheetsBuiltinTools = [exports.larkSheetsBuiltinSetValuesTool, exports.larkSheetsBuiltinAppendValuesTool];
