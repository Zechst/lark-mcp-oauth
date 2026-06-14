import { z } from 'zod';
export type humanAuthenticationV1ToolName = 'human_authentication.v1.identity.create';
export declare const humanAuthenticationV1IdentityCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            identity_name: z.ZodString;
            identity_code: z.ZodString;
            mobile: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            identity_name: string;
            identity_code: string;
            mobile?: string | undefined;
        }, {
            identity_name: string;
            identity_code: string;
            mobile?: string | undefined;
        }>;
        params: z.ZodObject<{
            user_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const humanAuthenticationV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            identity_name: z.ZodString;
            identity_code: z.ZodString;
            mobile: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            identity_name: string;
            identity_code: string;
            mobile?: string | undefined;
        }, {
            identity_name: string;
            identity_code: string;
            mobile?: string | undefined;
        }>;
        params: z.ZodObject<{
            user_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
}[];
