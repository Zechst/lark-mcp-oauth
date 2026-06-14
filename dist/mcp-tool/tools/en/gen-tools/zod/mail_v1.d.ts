import { z } from 'zod';
export type mailV1ToolName = 'mail.v1.mailgroupAlias.create' | 'mail.v1.mailgroupAlias.delete' | 'mail.v1.mailgroupAlias.list' | 'mail.v1.mailgroup.create' | 'mail.v1.mailgroup.delete' | 'mail.v1.mailgroup.get' | 'mail.v1.mailgroup.list' | 'mail.v1.mailgroupManager.batchCreate' | 'mail.v1.mailgroupManager.batchDelete' | 'mail.v1.mailgroupManager.list' | 'mail.v1.mailgroupMember.batchCreate' | 'mail.v1.mailgroupMember.batchDelete' | 'mail.v1.mailgroupMember.create' | 'mail.v1.mailgroupMember.delete' | 'mail.v1.mailgroupMember.get' | 'mail.v1.mailgroupMember.list' | 'mail.v1.mailgroup.patch' | 'mail.v1.mailgroupPermissionMember.batchCreate' | 'mail.v1.mailgroupPermissionMember.batchDelete' | 'mail.v1.mailgroupPermissionMember.create' | 'mail.v1.mailgroupPermissionMember.delete' | 'mail.v1.mailgroupPermissionMember.get' | 'mail.v1.mailgroupPermissionMember.list' | 'mail.v1.mailgroup.update' | 'mail.v1.publicMailboxAlias.create' | 'mail.v1.publicMailboxAlias.delete' | 'mail.v1.publicMailboxAlias.list' | 'mail.v1.publicMailbox.create' | 'mail.v1.publicMailbox.delete' | 'mail.v1.publicMailbox.get' | 'mail.v1.publicMailbox.list' | 'mail.v1.publicMailboxMember.batchCreate' | 'mail.v1.publicMailboxMember.batchDelete' | 'mail.v1.publicMailboxMember.clear' | 'mail.v1.publicMailboxMember.create' | 'mail.v1.publicMailboxMember.delete' | 'mail.v1.publicMailboxMember.get' | 'mail.v1.publicMailboxMember.list' | 'mail.v1.publicMailbox.patch' | 'mail.v1.publicMailbox.removeToRecycleBin' | 'mail.v1.publicMailbox.update' | 'mail.v1.userMailboxAlias.create' | 'mail.v1.userMailboxAlias.delete' | 'mail.v1.userMailboxAlias.list' | 'mail.v1.userMailbox.delete' | 'mail.v1.userMailboxEvent.subscribe' | 'mail.v1.userMailboxEvent.subscription' | 'mail.v1.userMailboxEvent.unsubscribe' | 'mail.v1.userMailboxFolder.create' | 'mail.v1.userMailboxFolder.delete' | 'mail.v1.userMailboxFolder.list' | 'mail.v1.userMailboxFolder.patch' | 'mail.v1.userMailboxMailContact.create' | 'mail.v1.userMailboxMailContact.delete' | 'mail.v1.userMailboxMailContact.list' | 'mail.v1.userMailboxMailContact.patch' | 'mail.v1.userMailboxMessageAttachment.downloadUrl' | 'mail.v1.userMailboxMessage.get' | 'mail.v1.userMailboxMessage.getByCard' | 'mail.v1.userMailboxMessage.list' | 'mail.v1.userMailboxMessage.send' | 'mail.v1.userMailboxRule.create' | 'mail.v1.userMailboxRule.delete' | 'mail.v1.userMailboxRule.list' | 'mail.v1.userMailboxRule.reorder' | 'mail.v1.userMailboxRule.update' | 'mail.v1.user.query';
export declare const mailV1MailgroupAliasCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email_alias?: string | undefined;
        }, {
            email_alias?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupAliasDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
            alias_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
            alias_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
            alias_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupAliasList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            who_can_send_mail: z.ZodOptional<z.ZodEnum<["ANYONE", "ALL_INTERNAL_USERS", "ALL_GROUP_MEMBERS", "CUSTOM_MEMBERS"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            manager_user_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            manager_user_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            manager_user_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupManagerBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            mailgroup_manager_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
            }, {
                user_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_manager_list?: {
                user_id?: string | undefined;
            }[] | undefined;
        }, {
            mailgroup_manager_list?: {
                user_id?: string | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupManagerBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            mailgroup_manager_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
            }, {
                user_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_manager_list?: {
                user_id?: string | undefined;
            }[] | undefined;
        }, {
            mailgroup_manager_list?: {
                user_id?: string | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupManagerList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                member_id: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                user_id: z.ZodOptional<z.ZodString>;
                department_id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodEnum<["USER", "DEPARTMENT", "COMPANY", "EXTERNAL_USER", "MAIL_GROUP", "PUBLIC_MAILBOX", "OTHER_MEMBER"]>>;
            }, "strip", z.ZodTypeAny, {
                type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                member_id?: string | undefined;
                email?: string | undefined;
            }, {
                type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                member_id?: string | undefined;
                email?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            items?: {
                type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                member_id?: string | undefined;
                email?: string | undefined;
            }[] | undefined;
        }, {
            items?: {
                type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                member_id?: string | undefined;
                email?: string | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            member_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            member_id_list?: string[] | undefined;
        }, {
            member_id_list?: string[] | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["USER", "DEPARTMENT", "COMPANY", "EXTERNAL_USER", "MAIL_GROUP", "PUBLIC_MAILBOX", "OTHER_MEMBER"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
            user_id?: string | undefined;
            department_id?: string | undefined;
            email?: string | undefined;
        }, {
            type?: "DEPARTMENT" | "USER" | "COMPANY" | "EXTERNAL_USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | "OTHER_MEMBER" | undefined;
            user_id?: string | undefined;
            department_id?: string | undefined;
            email?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id?: string | undefined;
            mailgroup_id?: string | undefined;
        }, {
            member_id?: string | undefined;
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id?: string | undefined;
            mailgroup_id?: string | undefined;
        }, {
            member_id?: string | undefined;
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupMemberList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            who_can_send_mail: z.ZodOptional<z.ZodEnum<["ANYONE", "ALL_INTERNAL_USERS", "ALL_GROUP_MEMBERS", "CUSTOM_MEMBERS"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                permission_member_id: z.ZodOptional<z.ZodString>;
                user_id: z.ZodOptional<z.ZodString>;
                department_id: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodEnum<["USER", "DEPARTMENT", "MAIL_GROUP", "PUBLIC_MAILBOX"]>>;
            }, "strip", z.ZodTypeAny, {
                type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                email?: string | undefined;
                permission_member_id?: string | undefined;
            }, {
                type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                email?: string | undefined;
                permission_member_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            items?: {
                type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                email?: string | undefined;
                permission_member_id?: string | undefined;
            }[] | undefined;
        }, {
            items?: {
                type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
                user_id?: string | undefined;
                department_id?: string | undefined;
                email?: string | undefined;
                permission_member_id?: string | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            permission_member_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            permission_member_id_list: string[];
        }, {
            permission_member_id_list: string[];
        }>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["USER", "DEPARTMENT", "MAIL_GROUP", "PUBLIC_MAILBOX"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
            user_id?: string | undefined;
            department_id?: string | undefined;
            email?: string | undefined;
        }, {
            type?: "DEPARTMENT" | "USER" | "MAIL_GROUP" | "PUBLIC_MAILBOX" | undefined;
            user_id?: string | undefined;
            department_id?: string | undefined;
            email?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
            permission_member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
            permission_member_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
            permission_member_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
            permission_member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
            permission_member_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
            permission_member_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupPermissionMemberList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1MailgroupUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            who_can_send_mail: z.ZodOptional<z.ZodEnum<["ANYONE", "ALL_INTERNAL_USERS", "ALL_GROUP_MEMBERS", "CUSTOM_MEMBERS"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxAliasCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email_alias?: string | undefined;
        }, {
            email_alias?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxAliasDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
            alias_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alias_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }, {
            alias_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxAliasList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            geo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            email?: string | undefined;
            geo?: string | undefined;
        }, {
            name?: string | undefined;
            email?: string | undefined;
            geo?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            public_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id: string;
        }, {
            public_mailbox_id: string;
        }>;
    };
};
export declare const mailV1PublicMailboxGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxList: {
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
export declare const mailV1PublicMailboxMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            items: z.ZodArray<z.ZodObject<{
                member_id: z.ZodOptional<z.ZodString>;
                user_id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodLiteral<"USER">>;
            }, "strip", z.ZodTypeAny, {
                type?: "USER" | undefined;
                user_id?: string | undefined;
                member_id?: string | undefined;
            }, {
                type?: "USER" | undefined;
                user_id?: string | undefined;
                member_id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            items: {
                type?: "USER" | undefined;
                user_id?: string | undefined;
                member_id?: string | undefined;
            }[];
        }, {
            items: {
                type?: "USER" | undefined;
                user_id?: string | undefined;
                member_id?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            public_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id: string;
        }, {
            public_mailbox_id: string;
        }>;
    };
};
export declare const mailV1PublicMailboxMemberBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            member_id_list: string[];
        }, {
            member_id_list: string[];
        }>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxMemberClear: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_id: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodLiteral<"USER">>;
        }, "strip", z.ZodTypeAny, {
            type?: "USER" | undefined;
            user_id?: string | undefined;
        }, {
            type?: "USER" | undefined;
            user_id?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }, {
            member_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxMemberGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }, {
            member_id?: string | undefined;
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxMemberList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            email?: string | undefined;
        }, {
            name?: string | undefined;
            email?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1PublicMailboxRemoveToRecycleBin: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            to_mail_address: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            to_mail_address?: string | undefined;
        }, {
            to_mail_address?: string | undefined;
        }>>;
        path: z.ZodObject<{
            public_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id: string;
        }, {
            public_mailbox_id: string;
        }>;
    };
};
export declare const mailV1PublicMailboxUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            email?: string | undefined;
        }, {
            name?: string | undefined;
            email?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1UserMailboxAliasCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            email_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email_alias?: string | undefined;
        }, {
            email_alias?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id?: string | undefined;
        }, {
            user_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1UserMailboxAliasDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
            alias_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alias_id?: string | undefined;
            user_mailbox_id?: string | undefined;
        }, {
            alias_id?: string | undefined;
            user_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1UserMailboxAliasList: {
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
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id?: string | undefined;
        }, {
            user_mailbox_id?: string | undefined;
        }>>;
    };
};
export declare const mailV1UserMailboxDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            transfer_mailbox: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transfer_mailbox?: string | undefined;
        }, {
            transfer_mailbox?: string | undefined;
        }>>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
    };
};
export declare const mailV1UserMailboxEventSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            event_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            event_type: number;
        }, {
            event_type: number;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxEventSubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxEventUnsubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            event_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            event_type: number;
        }, {
            event_type: number;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxFolderCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodString;
            parent_folder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_folder_id: string;
        }, {
            name: string;
            parent_folder_id: string;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxFolderDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            folder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            folder_id: string;
            user_mailbox_id: string;
        }, {
            folder_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxFolderList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            folder_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            folder_type?: number | undefined;
        }, {
            folder_type?: number | undefined;
        }>>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxFolderPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            parent_folder_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            parent_folder_id?: string | undefined;
        }, {
            name?: string | undefined;
            parent_folder_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            folder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            folder_id: string;
            user_mailbox_id: string;
        }, {
            folder_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMailContactCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            mail_address: z.ZodOptional<z.ZodString>;
            tag: z.ZodOptional<z.ZodString>;
            remark: z.ZodOptional<z.ZodString>;
            position: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            phone?: string | undefined;
            remark?: string | undefined;
            position?: string | undefined;
            company?: string | undefined;
            mail_address?: string | undefined;
            tag?: string | undefined;
        }, {
            name: string;
            phone?: string | undefined;
            remark?: string | undefined;
            position?: string | undefined;
            company?: string | undefined;
            mail_address?: string | undefined;
            tag?: string | undefined;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMailContactDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            mail_contact_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
            mail_contact_id: string;
        }, {
            user_mailbox_id: string;
            mail_contact_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMailContactList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMailContactPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            mail_address: z.ZodOptional<z.ZodString>;
            tag: z.ZodOptional<z.ZodString>;
            remark: z.ZodOptional<z.ZodString>;
            position: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            phone?: string | undefined;
            remark?: string | undefined;
            position?: string | undefined;
            company?: string | undefined;
            mail_address?: string | undefined;
            tag?: string | undefined;
        }, {
            name: string;
            phone?: string | undefined;
            remark?: string | undefined;
            position?: string | undefined;
            company?: string | undefined;
            mail_address?: string | undefined;
            tag?: string | undefined;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            mail_contact_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
            mail_contact_id: string;
        }, {
            user_mailbox_id: string;
            mail_contact_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMessageAttachmentDownloadUrl: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            attachment_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            attachment_ids: string[];
        }, {
            attachment_ids: string[];
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
            user_mailbox_id: string;
        }, {
            message_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMessageGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
            user_mailbox_id: string;
        }, {
            message_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMessageGetByCard: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            card_id: z.ZodString;
            owner_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            owner_id: string;
            card_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            owner_id: string;
            card_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMessageList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            folder_id: z.ZodString;
            only_unread: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            folder_id: string;
            page_token?: string | undefined;
            only_unread?: boolean | undefined;
        }, {
            page_size: number;
            folder_id: string;
            page_token?: string | undefined;
            only_unread?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxMessageSend: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            subject: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodArray<z.ZodObject<{
                mail_address: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mail_address: string;
                name?: string | undefined;
            }, {
                mail_address: string;
                name?: string | undefined;
            }>, "many">>;
            cc: z.ZodOptional<z.ZodArray<z.ZodObject<{
                mail_address: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mail_address: string;
                name?: string | undefined;
            }, {
                mail_address: string;
                name?: string | undefined;
            }>, "many">>;
            bcc: z.ZodOptional<z.ZodArray<z.ZodObject<{
                mail_address: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mail_address: string;
                name?: string | undefined;
            }, {
                mail_address: string;
                name?: string | undefined;
            }>, "many">>;
            head_from: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
            }, {
                name?: string | undefined;
            }>>;
            body_html: z.ZodOptional<z.ZodString>;
            body_plain_text: z.ZodOptional<z.ZodString>;
            attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                body: z.ZodString;
                filename: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                body: string;
                filename: string;
            }, {
                body: string;
                filename: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            to?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            attachments?: {
                body: string;
                filename: string;
            }[] | undefined;
            cc?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            subject?: string | undefined;
            bcc?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            head_from?: {
                name?: string | undefined;
            } | undefined;
            body_html?: string | undefined;
            body_plain_text?: string | undefined;
        }, {
            to?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            attachments?: {
                body: string;
                filename: string;
            }[] | undefined;
            cc?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            subject?: string | undefined;
            bcc?: {
                mail_address: string;
                name?: string | undefined;
            }[] | undefined;
            head_from?: {
                name?: string | undefined;
            } | undefined;
            body_html?: string | undefined;
            body_plain_text?: string | undefined;
        }>>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxRuleCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            condition: z.ZodObject<{
                match_type: z.ZodNumber;
                items: z.ZodArray<z.ZodObject<{
                    type: z.ZodNumber;
                    operator: z.ZodNumber;
                    input: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }, {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            }, {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            }>;
            action: z.ZodObject<{
                items: z.ZodArray<z.ZodObject<{
                    type: z.ZodNumber;
                    input: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    input?: string | undefined;
                }, {
                    type: number;
                    input?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            }, {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            }>;
            ignore_the_rest_of_rules: z.ZodBoolean;
            name: z.ZodString;
            is_enable: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            };
            condition: {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            };
            ignore_the_rest_of_rules: boolean;
            is_enable: boolean;
        }, {
            name: string;
            action: {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            };
            condition: {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            };
            ignore_the_rest_of_rules: boolean;
            is_enable: boolean;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxRuleDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rule_id: string;
            user_mailbox_id: string;
        }, {
            rule_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxRuleList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxRuleReorder: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            rule_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            rule_ids: string[];
        }, {
            rule_ids: string[];
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserMailboxRuleUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            condition: z.ZodObject<{
                match_type: z.ZodNumber;
                items: z.ZodArray<z.ZodObject<{
                    type: z.ZodNumber;
                    operator: z.ZodNumber;
                    input: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }, {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            }, {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            }>;
            action: z.ZodObject<{
                items: z.ZodArray<z.ZodObject<{
                    type: z.ZodNumber;
                    input: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    input?: string | undefined;
                }, {
                    type: number;
                    input?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            }, {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            }>;
            ignore_the_rest_of_rules: z.ZodBoolean;
            name: z.ZodString;
            is_enable: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            };
            condition: {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            };
            ignore_the_rest_of_rules: boolean;
            is_enable: boolean;
        }, {
            name: string;
            action: {
                items: {
                    type: number;
                    input?: string | undefined;
                }[];
            };
            condition: {
                items: {
                    type: number;
                    operator: number;
                    input?: string | undefined;
                }[];
                match_type: number;
            };
            ignore_the_rest_of_rules: boolean;
            is_enable: boolean;
        }>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
            rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rule_id: string;
            user_mailbox_id: string;
        }, {
            rule_id: string;
            user_mailbox_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const mailV1UserQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            email_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            email_list: string[];
        }, {
            email_list: string[];
        }>;
    };
};
export declare const mailV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            mailgroup_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mailgroup_id?: string | undefined;
        }, {
            mailgroup_id?: string | undefined;
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
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            who_can_send_mail: z.ZodOptional<z.ZodEnum<["ANYONE", "ALL_INTERNAL_USERS", "ALL_GROUP_MEMBERS", "CUSTOM_MEMBERS"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            email?: string | undefined;
            who_can_send_mail?: "ANYONE" | "ALL_INTERNAL_USERS" | "ALL_GROUP_MEMBERS" | "CUSTOM_MEMBERS" | undefined;
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
        params: z.ZodOptional<z.ZodObject<{
            manager_user_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            manager_user_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            manager_user_id?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            public_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id?: string | undefined;
        }, {
            public_mailbox_id?: string | undefined;
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
            email: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            geo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            email?: string | undefined;
            geo?: string | undefined;
        }, {
            name?: string | undefined;
            email?: string | undefined;
            geo?: string | undefined;
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
        path: z.ZodObject<{
            public_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            public_mailbox_id: string;
        }, {
            public_mailbox_id: string;
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
            email_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email_alias?: string | undefined;
        }, {
            email_alias?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id?: string | undefined;
        }, {
            user_mailbox_id?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
            alias_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alias_id?: string | undefined;
            user_mailbox_id?: string | undefined;
        }, {
            alias_id?: string | undefined;
            user_mailbox_id?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            user_mailbox_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id?: string | undefined;
        }, {
            user_mailbox_id?: string | undefined;
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
        params: z.ZodOptional<z.ZodObject<{
            transfer_mailbox: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transfer_mailbox?: string | undefined;
        }, {
            transfer_mailbox?: string | undefined;
        }>>;
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
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
        path: z.ZodObject<{
            user_mailbox_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_mailbox_id: string;
        }, {
            user_mailbox_id: string;
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
        data: z.ZodObject<{
            email_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            email_list: string[];
        }, {
            email_list: string[];
        }>;
    };
})[];
