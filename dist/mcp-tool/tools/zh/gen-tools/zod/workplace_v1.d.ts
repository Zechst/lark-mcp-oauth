import { z } from 'zod';
export type workplaceV1ToolName = 'workplace.v1.customWorkplaceAccessData.search' | 'workplace.v1.workplaceAccessData.search' | 'workplace.v1.workplaceBlockAccessData.search';
export declare const workplaceV1CustomWorkplaceAccessDataSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            from_date: z.ZodString;
            to_date: z.ZodString;
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            custom_workplace_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
            custom_workplace_id?: string | undefined;
        }, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
            custom_workplace_id?: string | undefined;
        }>;
    };
};
export declare const workplaceV1WorkplaceAccessDataSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            from_date: z.ZodString;
            to_date: z.ZodString;
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
        }, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const workplaceV1WorkplaceBlockAccessDataSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            from_date: z.ZodString;
            to_date: z.ZodString;
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            block_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
            block_id?: string | undefined;
        }, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
            block_id?: string | undefined;
        }>;
    };
};
export declare const workplaceV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            from_date: z.ZodString;
            to_date: z.ZodString;
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
        }, {
            page_size: number;
            from_date: string;
            to_date: string;
            page_token?: string | undefined;
        }>;
    };
}[];
