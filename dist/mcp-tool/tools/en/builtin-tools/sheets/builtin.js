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
// Sheets cell-value writing lives in the Sheets v2 API, which is not part of the generated v3
// tool set. These builtins wrap values_batch_update (overwrite) and values_append (add rows) so
// the MCP can actually populate and edit spreadsheet content, not just rename and find/replace.
const valueRowsSchema = zod_1.z
    .array(zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()])))
    .describe('Row-major 2D array of cell values. Use null to clear a cell. The inner array is one row.');
const rangeDescription = "Range in '<sheetId>!<A1 notation>' form, e.g. '0b**12!A1:C5'. The sheetId is the sheet's sheet_id, " +
    'obtained from sheets.v3.spreadsheetSheet.query. A1 notation is column-letter + row-number.';
exports.larkSheetsBuiltinSetValuesTool = {
    project: 'sheets',
    name: 'sheets.builtin.setValues',
    accessTokens: ['user', 'tenant'],
    description: '[Feishu/Lark]-Docs-Sheets-Write values-Overwrite one or more ranges of cells with the given values ' +
        '(Sheets v2 values_batch_update). Existing values in the target ranges are replaced.',
    schema: {
        data: zod_1.z.object({
            valueRanges: zod_1.z
                .array(zod_1.z.object({
                range: zod_1.z.string().describe(rangeDescription),
                values: valueRowsSchema,
            }))
                .describe('One or more ranges to overwrite. Each range is written independently.'),
        }),
        path: zod_1.z.object({
            spreadsheet_token: zod_1.z
                .string()
                .describe('Spreadsheet token (the spreadsheetToken in the sheet URL / returned by sheets.v3.spreadsheet.create).'),
        }),
        useUAT: zod_1.z
            .boolean()
            .describe('Whether to use user identity for the request, false means using application identity')
            .optional(),
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
    description: '[Feishu/Lark]-Docs-Sheets-Append values-Append rows of values after the last non-empty row of a range ' +
        '(Sheets v2 values_append). Use this to add new rows without overwriting existing data.',
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
                .describe('How to add the data. OVERWRITE: write into existing cells after the range; INSERT_ROWS: insert new rows. Defaults to OVERWRITE.')
                .optional(),
        })
            .optional(),
        path: zod_1.z.object({
            spreadsheet_token: zod_1.z.string().describe('Spreadsheet token (the spreadsheetToken in the sheet URL).'),
        }),
        useUAT: zod_1.z
            .boolean()
            .describe('Whether to use user identity for the request, false means using application identity')
            .optional(),
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
