import { z } from 'zod';
export type docsV1ToolName = 'docs.v1.content.get';
export declare const docsV1ContentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            doc_token: z.ZodString;
            doc_type: z.ZodLiteral<"docx">;
            content_type: z.ZodLiteral<"markdown">;
            lang: z.ZodOptional<z.ZodEnum<["zh", "en", "ja"]>>;
        }, "strip", z.ZodTypeAny, {
            content_type: "markdown";
            doc_token: string;
            doc_type: "docx";
            lang?: "en" | "ja" | "zh" | undefined;
        }, {
            content_type: "markdown";
            doc_token: string;
            doc_type: "docx";
            lang?: "en" | "ja" | "zh" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const docsV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            doc_token: z.ZodString;
            doc_type: z.ZodLiteral<"docx">;
            content_type: z.ZodLiteral<"markdown">;
            lang: z.ZodOptional<z.ZodEnum<["zh", "en", "ja"]>>;
        }, "strip", z.ZodTypeAny, {
            content_type: "markdown";
            doc_token: string;
            doc_type: "docx";
            lang?: "en" | "ja" | "zh" | undefined;
        }, {
            content_type: "markdown";
            doc_token: string;
            doc_type: "docx";
            lang?: "en" | "ja" | "zh" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
}[];
