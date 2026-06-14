import { z } from 'zod';
export type reportV1ToolName = 'report.v1.rule.query' | 'report.v1.ruleView.remove' | 'report.v1.task.query';
export declare const reportV1RuleQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            rule_name: z.ZodString;
            include_deleted: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            rule_name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            include_deleted?: number | undefined;
        }, {
            rule_name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            include_deleted?: number | undefined;
        }>;
    };
};
export declare const reportV1RuleViewRemove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rule_id: string;
        }, {
            rule_id: string;
        }>;
    };
};
export declare const reportV1TaskQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            commit_start_time: z.ZodNumber;
            commit_end_time: z.ZodNumber;
            rule_id: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            page_token: z.ZodString;
            page_size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token: string;
            commit_start_time: number;
            commit_end_time: number;
            user_id?: string | undefined;
            rule_id?: string | undefined;
        }, {
            page_size: number;
            page_token: string;
            commit_start_time: number;
            commit_end_time: number;
            user_id?: string | undefined;
            rule_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const reportV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            rule_name: z.ZodString;
            include_deleted: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            rule_name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            include_deleted?: number | undefined;
        }, {
            rule_name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            include_deleted?: number | undefined;
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
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rule_id: string;
        }, {
            rule_id: string;
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
        data: z.ZodObject<{
            commit_start_time: z.ZodNumber;
            commit_end_time: z.ZodNumber;
            rule_id: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            page_token: z.ZodString;
            page_size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token: string;
            commit_start_time: number;
            commit_end_time: number;
            user_id?: string | undefined;
            rule_id?: string | undefined;
        }, {
            page_size: number;
            page_token: string;
            commit_start_time: number;
            commit_end_time: number;
            user_id?: string | undefined;
            rule_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
