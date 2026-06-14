import { z } from 'zod';
export type boardV1ToolName = 'board.v1.whiteboardNode.list';
export declare const boardV1WhiteboardNodeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            whiteboard_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            whiteboard_id: string;
        }, {
            whiteboard_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const boardV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            whiteboard_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            whiteboard_id: string;
        }, {
            whiteboard_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
}[];
