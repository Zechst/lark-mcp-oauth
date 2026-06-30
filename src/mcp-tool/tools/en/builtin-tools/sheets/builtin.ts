import { McpTool } from '../../../../types';
import * as lark from '@larksuiteoapi/node-sdk';
import { z } from 'zod';

// Tool name type
export type sheetsBuiltinToolName = 'sheets.builtin.setValues' | 'sheets.builtin.appendValues';

// Sheets cell-value writing lives in the Sheets v2 API, which is not part of the generated v3
// tool set. These builtins wrap values_batch_update (overwrite) and values_append (add rows) so
// the MCP can actually populate and edit spreadsheet content, not just rename and find/replace.

const valueRowsSchema = z
  .array(z.array(z.union([z.string(), z.number(), z.boolean(), z.null()])))
  .describe('Row-major 2D array of cell values. Use null to clear a cell. The inner array is one row.');

const rangeDescription =
  "Range in '<sheetId>!<A1 notation>' form, e.g. '0b**12!A1:C5'. The sheetId is the sheet's sheet_id, " +
  'obtained from sheets.v3.spreadsheetSheet.query. A1 notation is column-letter + row-number.';

export const larkSheetsBuiltinSetValuesTool: McpTool = {
  project: 'sheets',
  name: 'sheets.builtin.setValues',
  accessTokens: ['user', 'tenant'],
  description:
    '[Feishu/Lark]-Docs-Sheets-Write values-Overwrite one or more ranges of cells with the given values ' +
    '(Sheets v2 values_batch_update). Existing values in the target ranges are replaced.',
  schema: {
    data: z.object({
      valueRanges: z
        .array(
          z.object({
            range: z.string().describe(rangeDescription),
            values: valueRowsSchema,
          }),
        )
        .describe('One or more ranges to overwrite. Each range is written independently.'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe('Spreadsheet token (the spreadsheetToken in the sheet URL / returned by sheets.v3.spreadsheet.create).'),
    }),
    useUAT: z
      .boolean()
      .describe('Whether to use user identity for the request, false means using application identity')
      .optional(),
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
    '[Feishu/Lark]-Docs-Sheets-Append values-Append rows of values after the last non-empty row of a range ' +
    '(Sheets v2 values_append). Use this to add new rows without overwriting existing data.',
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
          .describe(
            'How to add the data. OVERWRITE: write into existing cells after the range; INSERT_ROWS: insert new rows. Defaults to OVERWRITE.',
          )
          .optional(),
      })
      .optional(),
    path: z.object({
      spreadsheet_token: z.string().describe('Spreadsheet token (the spreadsheetToken in the sheet URL).'),
    }),
    useUAT: z
      .boolean()
      .describe('Whether to use user identity for the request, false means using application identity')
      .optional(),
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
