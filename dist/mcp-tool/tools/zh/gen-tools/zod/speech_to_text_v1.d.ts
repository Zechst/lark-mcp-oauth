import { z } from 'zod';
export type speechToTextV1ToolName = 'speech_to_text.v1.speech.fileRecognize' | 'speech_to_text.v1.speech.streamRecognize';
export declare const speechToTextV1SpeechFileRecognize: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            speech: z.ZodObject<{
                speech: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                speech?: string | undefined;
            }, {
                speech?: string | undefined;
            }>;
            config: z.ZodObject<{
                file_id: z.ZodString;
                format: z.ZodString;
                engine_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                file_id: string;
                format: string;
                engine_type: string;
            }, {
                file_id: string;
                format: string;
                engine_type: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            config: {
                file_id: string;
                format: string;
                engine_type: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }, {
            config: {
                file_id: string;
                format: string;
                engine_type: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }>;
    };
};
export declare const speechToTextV1SpeechStreamRecognize: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            speech: z.ZodObject<{
                speech: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                speech?: string | undefined;
            }, {
                speech?: string | undefined;
            }>;
            config: z.ZodObject<{
                stream_id: z.ZodString;
                sequence_id: z.ZodNumber;
                action: z.ZodNumber;
                format: z.ZodString;
                engine_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            }, {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            config: {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }, {
            config: {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }>;
    };
};
export declare const speechToTextV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            speech: z.ZodObject<{
                speech: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                speech?: string | undefined;
            }, {
                speech?: string | undefined;
            }>;
            config: z.ZodObject<{
                file_id: z.ZodString;
                format: z.ZodString;
                engine_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                file_id: string;
                format: string;
                engine_type: string;
            }, {
                file_id: string;
                format: string;
                engine_type: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            config: {
                file_id: string;
                format: string;
                engine_type: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }, {
            config: {
                file_id: string;
                format: string;
                engine_type: string;
            };
            speech: {
                speech?: string | undefined;
            };
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
            speech: z.ZodObject<{
                speech: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                speech?: string | undefined;
            }, {
                speech?: string | undefined;
            }>;
            config: z.ZodObject<{
                stream_id: z.ZodString;
                sequence_id: z.ZodNumber;
                action: z.ZodNumber;
                format: z.ZodString;
                engine_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            }, {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            config: {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }, {
            config: {
                action: number;
                sequence_id: number;
                format: string;
                engine_type: string;
                stream_id: string;
            };
            speech: {
                speech?: string | undefined;
            };
        }>;
    };
})[];
