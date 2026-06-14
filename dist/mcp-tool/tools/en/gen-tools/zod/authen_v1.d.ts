import { z } from 'zod';
export type authenV1ToolName = 'authen.v1.userInfo.get';
export declare const authenV1UserInfoGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const authenV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
}[];
