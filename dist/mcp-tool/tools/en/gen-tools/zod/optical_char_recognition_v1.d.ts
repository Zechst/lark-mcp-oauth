import { z } from 'zod';
export type opticalCharRecognitionV1ToolName = 'optical_char_recognition.v1.image.basicRecognize';
export declare const opticalCharRecognitionV1ImageBasicRecognize: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            image: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            image?: string | undefined;
        }, {
            image?: string | undefined;
        }>>;
    };
};
export declare const opticalCharRecognitionV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            image: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            image?: string | undefined;
        }, {
            image?: string | undefined;
        }>>;
    };
}[];
