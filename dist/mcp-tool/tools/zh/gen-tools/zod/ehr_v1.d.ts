import { z } from 'zod';
export type ehrV1ToolName = 'ehr.v1.employee.list';
export declare const ehrV1EmployeeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            view: z.ZodOptional<z.ZodEnum<["basic", "full"]>>;
            status: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            type: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type?: number[] | undefined;
            status?: number[] | undefined;
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            view?: "basic" | "full" | undefined;
        }, {
            type?: number[] | undefined;
            status?: number[] | undefined;
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            view?: "basic" | "full" | undefined;
        }>>;
    };
};
export declare const ehrV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            view: z.ZodOptional<z.ZodEnum<["basic", "full"]>>;
            status: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            type: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type?: number[] | undefined;
            status?: number[] | undefined;
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            view?: "basic" | "full" | undefined;
        }, {
            type?: number[] | undefined;
            status?: number[] | undefined;
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            view?: "basic" | "full" | undefined;
        }>>;
    };
}[];
