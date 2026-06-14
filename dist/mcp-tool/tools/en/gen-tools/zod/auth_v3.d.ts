import { z } from 'zod';
export type authV3ToolName = 'auth.v3.auth.appAccessToken' | 'auth.v3.auth.appAccessTokenInternal' | 'auth.v3.auth.appTicketResend' | 'auth.v3.auth.tenantAccessToken' | 'auth.v3.auth.tenantAccessTokenInternal';
export declare const authV3AuthAppAccessToken: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            app_secret: z.ZodString;
            app_ticket: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            app_secret: string;
            app_ticket: string;
        }, {
            app_id: string;
            app_secret: string;
            app_ticket: string;
        }>;
    };
};
export declare const authV3AuthAppAccessTokenInternal: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            app_secret: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
};
export declare const authV3AuthAppTicketResend: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            app_secret: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
};
export declare const authV3AuthTenantAccessToken: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_access_token: z.ZodString;
            tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_access_token: string;
            tenant_key: string;
        }, {
            app_access_token: string;
            tenant_key: string;
        }>;
    };
};
export declare const authV3AuthTenantAccessTokenInternal: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            app_secret: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
};
export declare const authV3Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            app_secret: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: z.ZodObject<{
            app_access_token: z.ZodString;
            tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_access_token: string;
            tenant_key: string;
        }, {
            app_access_token: string;
            tenant_key: string;
        }>;
    };
})[];
