import { McpTool } from '../../../../types';
import * as lark from '@larksuiteoapi/node-sdk';
import { z } from 'zod';

// 工具名称类型
export type sheetsBuiltinToolName = 'sheets.builtin.setValues' | 'sheets.builtin.appendValues';

// 表格单元格写入属于 Sheets v2 接口，不在自动生成的 v3 工具集中。以下内置工具封装
// values_batch_update（覆盖写入）与 values_append（追加行），让 MCP 能够真正填充和编辑
// 表格内容，而不仅仅是重命名和查找替换。

const valueRowsSchema = z
  .array(z.array(z.union([z.string(), z.number(), z.boolean(), z.null()])))
  .describe('按行排列的二维单元格数组，使用 null 清空单元格，内层数组表示一行。');

const rangeDescription =
  "范围，格式为 '<sheetId>!<A1 表示法>'，例如 '0b**12!A1:C5'。sheetId 即工作表的 sheet_id，" +
  '可通过 sheets.v3.spreadsheetSheet.query 获取。A1 表示法为列字母 + 行号。';

export const larkSheetsBuiltinSetValuesTool: McpTool = {
  project: 'sheets',
  name: 'sheets.builtin.setValues',
  accessTokens: ['user', 'tenant'],
  description:
    '[飞书/Lark] - 云文档-电子表格 - 写入数据 - 使用给定的值覆盖一个或多个单元格范围' +
    '（Sheets v2 values_batch_update），目标范围内的原有数据将被替换。',
  schema: {
    data: z.object({
      valueRanges: z
        .array(
          z.object({
            range: z.string().describe(rangeDescription),
            values: valueRowsSchema,
          }),
        )
        .describe('需要覆盖写入的一个或多个范围，每个范围独立写入。'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe('电子表格 token（表格 URL 中的 spreadsheetToken，或 sheets.v3.spreadsheet.create 返回值）。'),
    }),
    useUAT: z.boolean().describe('是否使用用户身份发起请求，false 表示使用应用身份').optional(),
  },
  customHandler: async (client, params, options): Promise<any> => {
    try {
      const { userAccessToken } = options || {};
      const spreadsheetToken = params.path?.spreadsheet_token;

      if (!spreadsheetToken) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: JSON.stringify({ msg: 'spreadsheet_token is required' }) }],
        };
      }

      const request = {
        method: 'POST' as const,
        url: `/open-apis/sheets/v2/spreadsheets/${spreadsheetToken}/values_batch_update`,
        data: { valueRanges: params.data.valueRanges },
      };

      const response =
        userAccessToken && params.useUAT
          ? await client.request(request, lark.withUserAccessToken(userAccessToken))
          : await client.request(request);

      return {
        content: [{ type: 'text' as const, text: JSON.stringify(response.data ?? response) }],
      };
    } catch (error) {
      return {
        isError: true,
        content: [{ type: 'text' as const, text: JSON.stringify((error as any)?.response?.data || error) }],
      };
    }
  },
};

export const larkSheetsBuiltinAppendValuesTool: McpTool = {
  project: 'sheets',
  name: 'sheets.builtin.appendValues',
  accessTokens: ['user', 'tenant'],
  description:
    '[飞书/Lark] - 云文档-电子表格 - 追加数据 - 在范围最后一行非空数据之后追加若干行' +
    '（Sheets v2 values_append），用于新增行而不覆盖已有数据。',
  schema: {
    data: z.object({
      valueRange: z.object({
        range: z.string().describe(rangeDescription),
        values: valueRowsSchema,
      }),
    }),
    params: z
      .object({
        insertDataOption: z
          .enum(['OVERWRITE', 'INSERT_ROWS'])
          .describe('数据写入方式。OVERWRITE：写入范围后的已有单元格；INSERT_ROWS：插入新行。默认 OVERWRITE。')
          .optional(),
      })
      .optional(),
    path: z.object({
      spreadsheet_token: z.string().describe('电子表格 token（表格 URL 中的 spreadsheetToken）。'),
    }),
    useUAT: z.boolean().describe('是否使用用户身份发起请求，false 表示使用应用身份').optional(),
  },
  customHandler: async (client, params, options): Promise<any> => {
    try {
      const { userAccessToken } = options || {};
      const spreadsheetToken = params.path?.spreadsheet_token;

      if (!spreadsheetToken) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: JSON.stringify({ msg: 'spreadsheet_token is required' }) }],
        };
      }

      const request = {
        method: 'POST' as const,
        url: `/open-apis/sheets/v2/spreadsheets/${spreadsheetToken}/values_append`,
        params: params.params,
        data: { valueRange: params.data.valueRange },
      };

      const response =
        userAccessToken && params.useUAT
          ? await client.request(request, lark.withUserAccessToken(userAccessToken))
          : await client.request(request);

      return {
        content: [{ type: 'text' as const, text: JSON.stringify(response.data ?? response) }],
      };
    } catch (error) {
      return {
        isError: true,
        content: [{ type: 'text' as const, text: JSON.stringify((error as any)?.response?.data || error) }],
      };
    }
  },
};

export const sheetsBuiltinTools = [larkSheetsBuiltinSetValuesTool, larkSheetsBuiltinAppendValuesTool];
