import { z } from 'zod';
export type compensationV1ToolName = 'compensation.v1.archive.query' | 'compensation.v1.changeReason.list' | 'compensation.v1.indicator.list' | 'compensation.v1.itemCategory.list' | 'compensation.v1.item.list' | 'compensation.v1.plan.list';
export declare const compensationV1ArchiveQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id_list: z.ZodArray<z.ZodString, "many">;
            tid_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            effective_start_date: z.ZodOptional<z.ZodString>;
            effective_end_date: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_list: string[];
            tid_list?: string[] | undefined;
            effective_start_date?: string | undefined;
            effective_end_date?: string | undefined;
        }, {
            user_id_list: string[];
            tid_list?: string[] | undefined;
            effective_start_date?: string | undefined;
            effective_end_date?: string | undefined;
        }>;
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            user_id_type: "user_id" | "union_id" | "open_id" | "people_corehr_id";
            page_token?: string | undefined;
        }, {
            page_size: number;
            user_id_type: "user_id" | "union_id" | "open_id" | "people_corehr_id";
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const compensationV1ChangeReasonList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const compensationV1IndicatorList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const compensationV1ItemCategoryList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
};
export declare const compensationV1ItemList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const compensationV1PlanList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const compensationV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
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
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
})[];
