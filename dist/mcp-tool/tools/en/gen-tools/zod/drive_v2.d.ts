import { z } from 'zod';
export type driveV2ToolName = 'drive.v2.fileLike.list' | 'drive.v2.permissionPublic.get' | 'drive.v2.permissionPublic.patch';
export declare const driveV2FileLikeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "file"]>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV2PermissionPublicGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV2PermissionPublicPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            external_access_entity: z.ZodOptional<z.ZodEnum<["open", "closed", "allow_share_partner_tenant"]>>;
            security_entity: z.ZodOptional<z.ZodEnum<["anyone_can_view", "anyone_can_edit", "only_full_access"]>>;
            comment_entity: z.ZodOptional<z.ZodEnum<["anyone_can_view", "anyone_can_edit"]>>;
            share_entity: z.ZodOptional<z.ZodEnum<["anyone", "same_tenant"]>>;
            manage_collaborator_entity: z.ZodOptional<z.ZodEnum<["collaborator_can_view", "collaborator_can_edit", "collaborator_full_access"]>>;
            link_share_entity: z.ZodOptional<z.ZodEnum<["tenant_readable", "tenant_editable", "partner_tenant_readable", "partner_tenant_editable", "anyone_readable", "anyone_editable", "closed"]>>;
            copy_entity: z.ZodOptional<z.ZodEnum<["anyone_can_view", "anyone_can_edit", "only_full_access"]>>;
        }, "strip", z.ZodTypeAny, {
            security_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
            comment_entity?: "anyone_can_view" | "anyone_can_edit" | undefined;
            share_entity?: "anyone" | "same_tenant" | undefined;
            link_share_entity?: "tenant_editable" | "anyone_editable" | "tenant_readable" | "anyone_readable" | "closed" | "partner_tenant_readable" | "partner_tenant_editable" | undefined;
            external_access_entity?: "closed" | "open" | "allow_share_partner_tenant" | undefined;
            manage_collaborator_entity?: "collaborator_can_view" | "collaborator_can_edit" | "collaborator_full_access" | undefined;
            copy_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
        }, {
            security_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
            comment_entity?: "anyone_can_view" | "anyone_can_edit" | undefined;
            share_entity?: "anyone" | "same_tenant" | undefined;
            link_share_entity?: "tenant_editable" | "anyone_editable" | "tenant_readable" | "anyone_readable" | "closed" | "partner_tenant_readable" | "partner_tenant_editable" | undefined;
            external_access_entity?: "closed" | "open" | "allow_share_partner_tenant" | undefined;
            manage_collaborator_entity?: "collaborator_can_view" | "collaborator_can_edit" | "collaborator_full_access" | undefined;
            copy_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
        }>>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV2Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "file"]>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
