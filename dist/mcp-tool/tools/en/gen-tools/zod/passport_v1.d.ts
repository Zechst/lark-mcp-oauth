import { z } from 'zod';
export type passportV1ToolName = 'passport.v1.session.logout' | 'passport.v1.session.query';
export declare const passportV1SessionLogout: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            idp_credential_id: z.ZodOptional<z.ZodString>;
            logout_type: z.ZodNumber;
            terminal_type: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            user_id: z.ZodOptional<z.ZodString>;
            logout_reason: z.ZodOptional<z.ZodNumber>;
            sid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            logout_type: number;
            user_id?: string | undefined;
            idp_credential_id?: string | undefined;
            terminal_type?: number[] | undefined;
            logout_reason?: number | undefined;
            sid?: string | undefined;
        }, {
            logout_type: number;
            user_id?: string | undefined;
            idp_credential_id?: string | undefined;
            terminal_type?: number[] | undefined;
            logout_reason?: number | undefined;
            sid?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const passportV1SessionQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const passportV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            idp_credential_id: z.ZodOptional<z.ZodString>;
            logout_type: z.ZodNumber;
            terminal_type: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            user_id: z.ZodOptional<z.ZodString>;
            logout_reason: z.ZodOptional<z.ZodNumber>;
            sid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            logout_type: number;
            user_id?: string | undefined;
            idp_credential_id?: string | undefined;
            terminal_type?: number[] | undefined;
            logout_reason?: number | undefined;
            sid?: string | undefined;
        }, {
            logout_type: number;
            user_id?: string | undefined;
            idp_credential_id?: string | undefined;
            terminal_type?: number[] | undefined;
            logout_reason?: number | undefined;
            sid?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
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
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
})[];
