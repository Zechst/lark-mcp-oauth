import { z } from 'zod';
export type wikiV1ToolName = 'wiki.v1.node.search';
export declare const wikiV1NodeSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            query: z.ZodString;
            space_id: z.ZodOptional<z.ZodString>;
            node_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            space_id?: string | undefined;
            node_id?: string | undefined;
        }, {
            query: string;
            space_id?: string | undefined;
            node_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            query: z.ZodString;
            space_id: z.ZodOptional<z.ZodString>;
            node_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            space_id?: string | undefined;
            node_id?: string | undefined;
        }, {
            query: string;
            space_id?: string | undefined;
            node_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
}[];
