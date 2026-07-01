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
exports.docxBuiltinTools = exports.larkDocxBuiltinSetImageTool = exports.larkDocxBuiltinImportTool = exports.larkDocxBuiltinSearchTool = void 0;
const lark = __importStar(require("@larksuiteoapi/node-sdk"));
const stream_1 = require("stream");
const zod_1 = require("zod");
exports.larkDocxBuiltinSearchTool = {
    project: 'docx',
    name: 'docx.builtin.search',
    accessTokens: ['user'],
    description: '[Feishu/Lark]-Docs-Document-Search Document-Search cloud documents, only supports user_access_token',
    schema: {
        data: zod_1.z.object({
            search_key: zod_1.z.string().describe('Search keyword'),
            count: zod_1.z
                .number()
                .describe('Specify the number of files returned in the search. Value range is [0,50].')
                .optional(),
            offset: zod_1.z
                .number()
                .describe('Specifies the search offset. The minimum value is 0, which means no offset. The sum of this parameter and the number of returned files must not be greater than or equal to 200 (i.e., offset + count < 200).')
                .optional(),
            owner_ids: zod_1.z.array(zod_1.z.string()).describe('Open ID of the file owner').optional(),
            chat_ids: zod_1.z.array(zod_1.z.string()).describe('ID of the group where the file is located').optional(),
            docs_types: zod_1.z
                .array(zod_1.z.enum(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file']))
                .describe('File types, supports the following enumerations: doc: old version document; sheet: spreadsheet; slides: slides; bitable: multi-dimensional table; mindnote: mind map; file: file')
                .optional(),
        }),
        useUAT: zod_1.z
            .boolean()
            .describe('Whether to use user identity for the request, false means using application identity')
            .optional(),
    },
    customHandler: async (client, params, options) => {
        var _a;
        try {
            const { userAccessToken } = options || {};
            if (!userAccessToken) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'User access token is not configured' }) }],
                };
            }
            const response = await client.request({
                method: 'POST',
                url: '/open-apis/suite/docs-api/search/object',
                data: params.data,
            }, lark.withUserAccessToken(userAccessToken));
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify((_a = response.data) !== null && _a !== void 0 ? _a : response),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(error.response.data),
                    },
                ],
            };
        }
    },
};
exports.larkDocxBuiltinImportTool = {
    project: 'docx',
    name: 'docx.builtin.import',
    accessTokens: ['user', 'tenant'],
    description: '[Feishu/Lark]-Docs-Document-Import Document-Import cloud document, maximum 20MB',
    schema: {
        data: zod_1.z
            .object({
            markdown: zod_1.z.string().describe('Markdown file content'),
            file_name: zod_1.z.string().describe('File name').max(27).optional(),
        })
            .describe('Request body'),
        useUAT: zod_1.z.boolean().describe('Use user identity for the request, otherwise use application identity').optional(),
    },
    customHandler: async (client, params, options) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        try {
            const { userAccessToken } = options || {};
            const file = stream_1.Readable.from(params.data.markdown);
            const data = {
                file_name: 'docx.md',
                parent_type: 'ccm_import_open',
                parent_node: '/',
                size: Buffer.byteLength(params.data.markdown),
                file,
                extra: JSON.stringify({ obj_type: 'docx', file_extension: 'md' }),
            };
            const response = userAccessToken && params.useUAT
                ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
                : await client.drive.media.uploadAll({ data });
            if (!(response === null || response === void 0 ? void 0 : response.file_token)) {
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({ msg: 'Document import failed, please check the markdown file content' }),
                        },
                    ],
                };
            }
            const importData = {
                file_extension: 'md',
                file_name: params.data.file_name,
                file_token: response === null || response === void 0 ? void 0 : response.file_token,
                type: 'docx',
                point: {
                    mount_type: 1,
                    mount_key: '',
                },
            };
            const importResponse = userAccessToken && params.useUAT
                ? await client.drive.importTask.create({ data: importData }, lark.withUserAccessToken(userAccessToken))
                : await client.drive.importTask.create({ data: importData });
            const taskId = (_a = importResponse.data) === null || _a === void 0 ? void 0 : _a.ticket;
            if (!taskId) {
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({ msg: 'Document import failed, please check the markdown file content' }),
                        },
                    ],
                };
            }
            for (let i = 0; i < 5; i++) {
                const taskResponse = userAccessToken && params.useUAT
                    ? await client.drive.importTask.get({ path: { ticket: taskId } }, lark.withUserAccessToken(userAccessToken))
                    : await client.drive.importTask.get({ path: { ticket: taskId } });
                if (((_c = (_b = taskResponse.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.job_status) === 0) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify((_d = taskResponse.data) !== null && _d !== void 0 ? _d : taskResponse),
                            },
                        ],
                    };
                }
                else if (((_f = (_e = taskResponse.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.job_status) !== 1 && ((_h = (_g = taskResponse.data) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.job_status) !== 2) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify(taskResponse.data),
                            },
                        ],
                    };
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({ msg: 'Document import failed, please try again later' }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(((_j = error === null || error === void 0 ? void 0 : error.response) === null || _j === void 0 ? void 0 : _j.data) || error),
                    },
                ],
            };
        }
    },
};
// Inserting a real image into a document is a two-step flow: (1) create an empty image block
// (block_type 27) via docx.v1.documentBlockChildren.create — that returns the image block_id —
// then (2) upload the image bytes to that block with this tool. The docx block API alone only
// creates the empty placeholder; the media upload (parent_type 'docx_image') fills it in.
exports.larkDocxBuiltinSetImageTool = {
    project: 'docx',
    name: 'docx.builtin.setImage',
    accessTokens: ['user', 'tenant'],
    description: '[Feishu/Lark]-Docs-Document-Set image-Upload an image into an existing image block. First create an ' +
        'empty image block with docx.v1.documentBlockChildren.create (block_type 27) to get its block_id, then ' +
        'call this with the base64-encoded image bytes to populate it.',
    schema: {
        data: zod_1.z.object({
            block_id: zod_1.z
                .string()
                .describe('The image block_id (block_type 27) returned by docx.v1.documentBlockChildren.create.'),
            image_base64: zod_1.z.string().describe('The image file content, base64-encoded (no data: URI prefix).'),
            file_name: zod_1.z.string().describe("Image file name including extension, e.g. 'chart.png'."),
            document_id: zod_1.z
                .string()
                .describe('The document_id/token that owns the block. Required for docs hosted in a wiki/shared space so the upload routes correctly; may be omitted for a personal doc.')
                .optional(),
        }),
        useUAT: zod_1.z
            .boolean()
            .describe('Whether to use user identity for the request, false means using application identity')
            .optional(),
    },
    customHandler: async (client, params, options) => {
        var _a;
        try {
            const { userAccessToken } = options || {};
            const buffer = Buffer.from(params.data.image_base64, 'base64');
            if (!buffer.length) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'image_base64 is empty or invalid' }) }],
                };
            }
            const file = stream_1.Readable.from(buffer);
            const data = {
                file_name: params.data.file_name,
                parent_type: 'docx_image',
                parent_node: params.data.block_id,
                size: buffer.length,
                file,
                extra: params.data.document_id
                    ? JSON.stringify({ drive_route_token: params.data.document_id })
                    : undefined,
            };
            const response = userAccessToken && params.useUAT
                ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
                : await client.drive.media.uploadAll({ data });
            if (!(response === null || response === void 0 ? void 0 : response.file_token)) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: 'Image upload failed', response }) }],
                };
            }
            return {
                content: [{ type: 'text', text: JSON.stringify({ file_token: response.file_token }) }],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [{ type: 'text', text: JSON.stringify(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error) }],
            };
        }
    },
};
exports.docxBuiltinTools = [exports.larkDocxBuiltinSearchTool, exports.larkDocxBuiltinImportTool, exports.larkDocxBuiltinSetImageTool];
