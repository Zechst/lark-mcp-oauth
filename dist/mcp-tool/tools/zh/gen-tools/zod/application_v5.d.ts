import { z } from 'zod';
export type applicationV5ToolName = 'application.v5.application.favourite' | 'application.v5.application.recommend';
export declare const applicationV5ApplicationFavourite: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            language: z.ZodOptional<z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV5ApplicationRecommend: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            language: z.ZodOptional<z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>>;
            recommend_type: z.ZodOptional<z.ZodEnum<["user_unremovable", "user_removable"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
            recommend_type?: "user_unremovable" | "user_removable" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
            recommend_type?: "user_unremovable" | "user_removable" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV5Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            language: z.ZodOptional<z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            language?: "zh_cn" | "en_us" | "ja_jp" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
}[];
