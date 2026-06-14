import { z } from 'zod';
export type securityAndComplianceV1ToolName = 'security_and_compliance.v1.openapiLog.listData';
export declare const securityAndComplianceV1OpenapiLogListData: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            api_keys: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            start_time: z.ZodOptional<z.ZodNumber>;
            end_time: z.ZodOptional<z.ZodNumber>;
            app_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            app_id?: string | undefined;
            start_time?: number | undefined;
            end_time?: number | undefined;
            api_keys?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            app_id?: string | undefined;
            start_time?: number | undefined;
            end_time?: number | undefined;
            api_keys?: string[] | undefined;
        }>>;
    };
};
export declare const securityAndComplianceV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            api_keys: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            start_time: z.ZodOptional<z.ZodNumber>;
            end_time: z.ZodOptional<z.ZodNumber>;
            app_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            app_id?: string | undefined;
            start_time?: number | undefined;
            end_time?: number | undefined;
            api_keys?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            app_id?: string | undefined;
            start_time?: number | undefined;
            end_time?: number | undefined;
            api_keys?: string[] | undefined;
        }>>;
    };
}[];
