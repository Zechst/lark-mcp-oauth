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
    description: '[飞书/Lark] - 云文档-文档 - 搜索文档 - 搜索云文档，只支持user_access_token',
    schema: {
        data: zod_1.z.object({
            search_key: zod_1.z.string().describe('搜索关键词'),
            count: zod_1.z.number().describe('指定搜索返回的文件数量。取值范围为 [0,50]。').optional(),
            offset: zod_1.z
                .number()
                .describe('指定搜索的偏移量，该参数最小为 0，即不偏移。该参数的值与返回的文件数量之和不得大于或等于 200（即 offset + count < 200）。')
                .optional(),
            owner_ids: zod_1.z.array(zod_1.z.string()).describe('文件所有者的 Open ID').optional(),
            chat_ids: zod_1.z.array(zod_1.z.string()).describe('文件所在群的 ID').optional(),
            docs_types: zod_1.z
                .array(zod_1.z.enum(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file']))
                .describe('文件类型，支持以下枚举：doc：旧版文档;sheet：电子表格;slides：幻灯片;bitable：多维表格;mindnote：思维笔记;file：文件')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('是否使用用户身份请求，false则使用应用身份请求').optional(),
    },
    customHandler: async (client, params, options) => {
        var _a;
        try {
            const { userAccessToken } = options || {};
            if (!userAccessToken) {
                return {
                    isError: true,
                    content: [{ type: 'text', text: JSON.stringify({ msg: '当前未配置 userAccessToken' }) }],
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
    description: '[飞书/Lark] - 云文档-文档 - 导入文档 - 导入云文档，最大20MB',
    schema: {
        data: zod_1.z
            .object({
            markdown: zod_1.z.string().describe('markdown文件内容'),
            file_name: zod_1.z.string().describe('文件名').max(27).optional(),
        })
            .describe('请求体'),
        useUAT: zod_1.z.boolean().describe('使用用户身份请求，否则为应用身份').optional(),
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
                    content: [{ type: 'text', text: JSON.stringify({ msg: '导入文档失败，请检查markdown文件内容' }) }],
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
                    content: [{ type: 'text', text: JSON.stringify({ msg: '导入文档失败，请检查markdown文件内容' }) }],
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
                        content: [{ type: 'text', text: JSON.stringify(taskResponse.data) }],
                    };
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({ msg: '导入文档失败，请稍后再试' }),
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
// 向文档插入图片分两步：(1) 通过 docx.v1.documentBlockChildren.create 创建空图片块（block_type 27），
// 返回图片块的 block_id；(2) 用本工具把图片字节上传到该块。文档块 API 只能创建空占位，图片内容需通过
// 素材上传（parent_type 'docx_image'）填充。
exports.larkDocxBuiltinSetImageTool = {
    project: 'docx',
    name: 'docx.builtin.setImage',
    accessTokens: ['user', 'tenant'],
    description: '[飞书/Lark] - 云文档-文档 - 设置图片 - 向已有的图片块上传图片。先用 docx.v1.documentBlockChildren.create ' +
        '创建空图片块（block_type 27）获取 block_id，再用本工具传入 base64 编码的图片内容进行填充。',
    schema: {
        data: zod_1.z.object({
            block_id: zod_1.z.string().describe('由 docx.v1.documentBlockChildren.create 返回的图片块 block_id（block_type 27）。'),
            image_base64: zod_1.z.string().describe('图片文件内容，base64 编码（不含 data: 前缀）。'),
            file_name: zod_1.z.string().describe("图片文件名，含扩展名，例如 'chart.png'。"),
            document_id: zod_1.z
                .string()
                .describe('该块所属的 document_id/token。文档位于知识库/共享空间时需要以正确路由上传；个人文档可省略。')
                .optional(),
        }),
        useUAT: zod_1.z.boolean().describe('是否使用用户身份发起请求，false 表示使用应用身份').optional(),
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
