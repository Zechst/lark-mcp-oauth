import { z } from 'zod';
export type sheetsV3ToolName = 'sheets.v3.spreadsheet.create' | 'sheets.v3.spreadsheet.get' | 'sheets.v3.spreadsheet.patch' | 'sheets.v3.spreadsheetSheetFilterViewCondition.create' | 'sheets.v3.spreadsheetSheetFilterViewCondition.delete' | 'sheets.v3.spreadsheetSheetFilterViewCondition.get' | 'sheets.v3.spreadsheetSheetFilterViewCondition.query' | 'sheets.v3.spreadsheetSheetFilterViewCondition.update' | 'sheets.v3.spreadsheetSheetFilterView.create' | 'sheets.v3.spreadsheetSheetFilterView.delete' | 'sheets.v3.spreadsheetSheetFilterView.get' | 'sheets.v3.spreadsheetSheetFilterView.patch' | 'sheets.v3.spreadsheetSheetFilterView.query' | 'sheets.v3.spreadsheetSheetFilter.create' | 'sheets.v3.spreadsheetSheetFilter.delete' | 'sheets.v3.spreadsheetSheetFilter.get' | 'sheets.v3.spreadsheetSheetFilter.update' | 'sheets.v3.spreadsheetSheet.find' | 'sheets.v3.spreadsheetSheetFloatImage.create' | 'sheets.v3.spreadsheetSheetFloatImage.delete' | 'sheets.v3.spreadsheetSheetFloatImage.get' | 'sheets.v3.spreadsheetSheetFloatImage.patch' | 'sheets.v3.spreadsheetSheetFloatImage.query' | 'sheets.v3.spreadsheetSheet.get' | 'sheets.v3.spreadsheetSheet.moveDimension' | 'sheets.v3.spreadsheetSheet.query' | 'sheets.v3.spreadsheetSheet.replace';
export declare const sheetsV3SpreadsheetCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            folder_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            folder_token?: string | undefined;
        }, {
            title?: string | undefined;
            folder_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
        }, {
            title?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewConditionCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            condition_id: z.ZodOptional<z.ZodString>;
            filter_type: z.ZodOptional<z.ZodString>;
            compare_type: z.ZodOptional<z.ZodString>;
            expected: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            expected?: string[] | undefined;
            filter_type?: string | undefined;
            condition_id?: string | undefined;
            compare_type?: string | undefined;
        }, {
            expected?: string[] | undefined;
            filter_type?: string | undefined;
            condition_id?: string | undefined;
            compare_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewConditionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
            condition_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewConditionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
            condition_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewConditionQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewConditionUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            filter_type: z.ZodOptional<z.ZodString>;
            compare_type: z.ZodOptional<z.ZodString>;
            expected: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            expected?: string[] | undefined;
            filter_type?: string | undefined;
            compare_type?: string | undefined;
        }, {
            expected?: string[] | undefined;
            filter_type?: string | undefined;
            compare_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
            condition_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            condition_id?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            filter_view_id: z.ZodOptional<z.ZodString>;
            filter_view_name: z.ZodOptional<z.ZodString>;
            range: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            filter_view_id?: string | undefined;
            filter_view_name?: string | undefined;
            range?: string | undefined;
        }, {
            filter_view_id?: string | undefined;
            filter_view_name?: string | undefined;
            range?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            filter_view_name: z.ZodOptional<z.ZodString>;
            range: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            filter_view_name?: string | undefined;
            range?: string | undefined;
        }, {
            filter_view_name?: string | undefined;
            range?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            filter_view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            filter_view_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterViewQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            range: z.ZodString;
            col: z.ZodString;
            condition: z.ZodObject<{
                filter_type: z.ZodString;
                compare_type: z.ZodOptional<z.ZodString>;
                expected: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            }, {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            condition: {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            };
            range: string;
            col: string;
        }, {
            condition: {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            };
            range: string;
            col: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFilterUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            col: z.ZodString;
            condition: z.ZodObject<{
                filter_type: z.ZodString;
                compare_type: z.ZodOptional<z.ZodString>;
                expected: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            }, {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            condition: {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            };
            col: string;
        }, {
            condition: {
                expected: string[];
                filter_type: string;
                compare_type?: string | undefined;
            };
            col: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFind: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            find_condition: z.ZodObject<{
                range: z.ZodString;
                match_case: z.ZodOptional<z.ZodBoolean>;
                match_entire_cell: z.ZodOptional<z.ZodBoolean>;
                search_by_regex: z.ZodOptional<z.ZodBoolean>;
                include_formulas: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            }, {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            }>;
            find: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            find: string;
            find_condition: {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            };
        }, {
            find: string;
            find_condition: {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            };
        }>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFloatImageCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            float_image_id: z.ZodOptional<z.ZodString>;
            float_image_token: z.ZodOptional<z.ZodString>;
            range: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            offset_x: z.ZodOptional<z.ZodNumber>;
            offset_y: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            range?: string | undefined;
            float_image_id?: string | undefined;
            float_image_token?: string | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            range?: string | undefined;
            float_image_id?: string | undefined;
            float_image_token?: string | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFloatImageDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            float_image_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFloatImageGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            float_image_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFloatImagePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            float_image_token: z.ZodOptional<z.ZodString>;
            range: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            offset_x: z.ZodOptional<z.ZodNumber>;
            offset_y: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            range?: string | undefined;
            float_image_token?: string | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            range?: string | undefined;
            float_image_token?: string | undefined;
            offset_x?: number | undefined;
            offset_y?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
            float_image_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
            float_image_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetFloatImageQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            spreadsheet_token: z.ZodString;
            sheet_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token: string;
            sheet_id: string;
        }, {
            spreadsheet_token: string;
            sheet_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetMoveDimension: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            source: z.ZodOptional<z.ZodObject<{
                major_dimension: z.ZodOptional<z.ZodString>;
                start_index: z.ZodOptional<z.ZodNumber>;
                end_index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start_index?: number | undefined;
                end_index?: number | undefined;
                major_dimension?: string | undefined;
            }, {
                start_index?: number | undefined;
                end_index?: number | undefined;
                major_dimension?: string | undefined;
            }>>;
            destination_index: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            source?: {
                start_index?: number | undefined;
                end_index?: number | undefined;
                major_dimension?: string | undefined;
            } | undefined;
            destination_index?: number | undefined;
        }, {
            source?: {
                start_index?: number | undefined;
                end_index?: number | undefined;
                major_dimension?: string | undefined;
            } | undefined;
            destination_index?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3SpreadsheetSheetReplace: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            find_condition: z.ZodObject<{
                range: z.ZodString;
                match_case: z.ZodOptional<z.ZodBoolean>;
                match_entire_cell: z.ZodOptional<z.ZodBoolean>;
                search_by_regex: z.ZodOptional<z.ZodBoolean>;
                include_formulas: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            }, {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            }>;
            find: z.ZodString;
            replacement: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            find: string;
            find_condition: {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            };
            replacement: string;
        }, {
            find: string;
            find_condition: {
                range: string;
                match_case?: boolean | undefined;
                match_entire_cell?: boolean | undefined;
                search_by_regex?: boolean | undefined;
                include_formulas?: boolean | undefined;
            };
            replacement: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
            sheet_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
            sheet_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const sheetsV3Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            folder_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            folder_token?: string | undefined;
        }, {
            title?: string | undefined;
            folder_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            spreadsheet_token: z.ZodString;
            sheet_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token: string;
            sheet_id: string;
        }, {
            spreadsheet_token: string;
            sheet_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            spreadsheet_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            spreadsheet_token?: string | undefined;
        }, {
            spreadsheet_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
