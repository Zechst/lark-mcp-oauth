import { z } from 'zod';
export type trustPartyV1ToolName = 'trust_party.v1.collaborationTenantCollaborationDepartment.get' | 'trust_party.v1.collaborationTenantCollaborationUser.get' | 'trust_party.v1.collaborationTenant.get' | 'trust_party.v1.collaborationTenant.list' | 'trust_party.v1.collaborationTenant.visibleOrganization';
export declare const trustPartyV1CollaborationTenantCollaborationDepartmentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            target_department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            target_department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            target_department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            target_tenant_key: z.ZodString;
            target_department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
            target_department_id: string;
        }, {
            target_tenant_key: string;
            target_department_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const trustPartyV1CollaborationTenantCollaborationUserGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            target_user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            target_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            target_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            target_tenant_key: z.ZodString;
            target_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
            target_user_id: string;
        }, {
            target_tenant_key: string;
            target_user_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const trustPartyV1CollaborationTenantGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const trustPartyV1CollaborationTenantList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const trustPartyV1CollaborationTenantVisibleOrganization: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            target_department_id: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            group_id_type: z.ZodOptional<z.ZodEnum<["group_id", "open_group_id"]>>;
            target_group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_department_id?: string | undefined;
            target_group_id?: string | undefined;
            group_id_type?: "group_id" | "open_group_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_department_id?: string | undefined;
            target_group_id?: string | undefined;
            group_id_type?: "group_id" | "open_group_id" | undefined;
        }>>;
        path: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const trustPartyV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
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
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
