import { z } from 'zod';
export type translationV1ToolName = 'translation.v1.text.detect' | 'translation.v1.text.translate';
export declare const translationV1TextDetect: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
        }>;
    };
};
export declare const translationV1TextTranslate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            source_language: z.ZodString;
            text: z.ZodString;
            target_language: z.ZodString;
            glossary: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            source_language: string;
            target_language: string;
            glossary?: {
                from: string;
                to: string;
            }[] | undefined;
        }, {
            text: string;
            source_language: string;
            target_language: string;
            glossary?: {
                from: string;
                to: string;
            }[] | undefined;
        }>;
    };
};
export declare const translationV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
        }>;
    };
}[];
