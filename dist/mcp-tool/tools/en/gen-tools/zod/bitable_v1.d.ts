import { z } from 'zod';
export type bitableV1ToolName = 'bitable.v1.app.copy' | 'bitable.v1.app.create' | 'bitable.v1.appDashboard.copy' | 'bitable.v1.appDashboard.list' | 'bitable.v1.app.get' | 'bitable.v1.appRole.create' | 'bitable.v1.appRole.delete' | 'bitable.v1.appRole.list' | 'bitable.v1.appRoleMember.batchCreate' | 'bitable.v1.appRoleMember.batchDelete' | 'bitable.v1.appRoleMember.create' | 'bitable.v1.appRoleMember.delete' | 'bitable.v1.appRoleMember.list' | 'bitable.v1.appRole.update' | 'bitable.v1.appTable.batchCreate' | 'bitable.v1.appTable.batchDelete' | 'bitable.v1.appTable.create' | 'bitable.v1.appTable.delete' | 'bitable.v1.appTableField.create' | 'bitable.v1.appTableField.delete' | 'bitable.v1.appTableField.list' | 'bitable.v1.appTableField.update' | 'bitable.v1.appTableFormField.list' | 'bitable.v1.appTableFormField.patch' | 'bitable.v1.appTableForm.get' | 'bitable.v1.appTableForm.patch' | 'bitable.v1.appTable.list' | 'bitable.v1.appTable.patch' | 'bitable.v1.appTableRecord.batchCreate' | 'bitable.v1.appTableRecord.batchDelete' | 'bitable.v1.appTableRecord.batchGet' | 'bitable.v1.appTableRecord.batchUpdate' | 'bitable.v1.appTableRecord.create' | 'bitable.v1.appTableRecord.delete' | 'bitable.v1.appTableRecord.get' | 'bitable.v1.appTableRecord.list' | 'bitable.v1.appTableRecord.search' | 'bitable.v1.appTableRecord.update' | 'bitable.v1.appTableView.create' | 'bitable.v1.appTableView.delete' | 'bitable.v1.appTableView.get' | 'bitable.v1.appTableView.list' | 'bitable.v1.appTableView.patch' | 'bitable.v1.app.update' | 'bitable.v1.appWorkflow.list' | 'bitable.v1.appWorkflow.update';
export declare const bitableV1AppCopy: {
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
            folder_token: z.ZodOptional<z.ZodString>;
            without_content: z.ZodOptional<z.ZodBoolean>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
            without_content?: boolean | undefined;
        }, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
            without_content?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppCreate: {
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
            folder_token: z.ZodOptional<z.ZodString>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
        }, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppDashboardCopy: {
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
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            block_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            block_id: string;
            app_token: string;
        }, {
            block_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppDashboardList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            role_name: z.ZodString;
            table_roles: z.ZodArray<z.ZodObject<{
                table_name: z.ZodOptional<z.ZodString>;
                table_id: z.ZodOptional<z.ZodString>;
                table_perm: z.ZodNumber;
                rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        operator: z.ZodOptional<z.ZodEnum<["is", "isNot", "contains", "doesNotContain", "isEmpty", "isNotEmpty"]>>;
                        value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }>, "many">;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }>, "many">;
            block_roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                block_id: z.ZodString;
                block_perm: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                block_id: string;
                block_perm: number;
            }, {
                block_id: string;
                block_perm: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
        }, {
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
        }, {
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_list: z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "chat_id", "department_id", "open_department_id"]>>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }, {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            member_list: {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }[];
        }, {
            member_list: {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
            role_id: string;
        }, {
            app_token: string;
            role_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleMemberBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_list: z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "chat_id", "department_id", "open_department_id"]>>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }, {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            member_list: {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }[];
        }, {
            member_list: {
                id: string;
                type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
            role_id: string;
        }, {
            app_token: string;
            role_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
        }, {
            member_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "chat_id", "department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "chat_id", "department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            member_id: string;
            app_token?: string | undefined;
            role_id?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleMemberList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
            role_id: string;
        }, {
            app_token: string;
            role_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppRoleUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            role_name: z.ZodString;
            table_roles: z.ZodArray<z.ZodObject<{
                table_perm: z.ZodNumber;
                table_name: z.ZodOptional<z.ZodString>;
                table_id: z.ZodOptional<z.ZodString>;
                rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        operator: z.ZodOptional<z.ZodEnum<["is", "isNot", "contains", "doesNotContain", "isEmpty", "isNotEmpty"]>>;
                        value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }>, "many">;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }>, "many">;
            block_roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                block_id: z.ZodString;
                block_perm: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                block_id: string;
                block_perm: number;
            }, {
                block_id: string;
                block_perm: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            tables: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
            }, {
                name?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            tables?: {
                name?: string | undefined;
            }[] | undefined;
        }, {
            tables?: {
                name?: string | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            table_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            table_ids?: string[] | undefined;
        }, {
            table_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            table: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                default_view_name: z.ZodOptional<z.ZodString>;
                fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    type: z.ZodNumber;
                    ui_type: z.ZodOptional<z.ZodEnum<["Text", "Barcode", "Number", "Progress", "Currency", "Rating", "SingleSelect", "MultiSelect", "DateTime", "Checkbox", "User", "GroupChat", "Phone", "Url", "Attachment", "SingleLink", "Formula", "DuplexLink", "Location", "CreatedTime", "ModifiedTime", "CreatedUser", "ModifiedUser", "AutoNumber"]>>;
                    property: z.ZodOptional<z.ZodObject<{
                        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodOptional<z.ZodString>;
                            id: z.ZodOptional<z.ZodString>;
                            color: z.ZodOptional<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }, {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }>, "many">>;
                        formatter: z.ZodOptional<z.ZodString>;
                        date_formatter: z.ZodOptional<z.ZodString>;
                        auto_fill: z.ZodOptional<z.ZodBoolean>;
                        multiple: z.ZodOptional<z.ZodBoolean>;
                        table_id: z.ZodOptional<z.ZodString>;
                        table_name: z.ZodOptional<z.ZodString>;
                        back_field_name: z.ZodOptional<z.ZodString>;
                        auto_serial: z.ZodOptional<z.ZodObject<{
                            type: z.ZodEnum<["custom", "auto_increment_number"]>;
                            options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                type: z.ZodEnum<["system_number", "fixed_text", "created_time"]>;
                                value: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }, {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        }, {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        }>>;
                        location: z.ZodOptional<z.ZodObject<{
                            input_type: z.ZodEnum<["only_mobile", "not_limit"]>;
                        }, "strip", z.ZodTypeAny, {
                            input_type: "only_mobile" | "not_limit";
                        }, {
                            input_type: "only_mobile" | "not_limit";
                        }>>;
                        formula_expression: z.ZodOptional<z.ZodString>;
                        allowed_edit_modes: z.ZodOptional<z.ZodObject<{
                            manual: z.ZodOptional<z.ZodBoolean>;
                            scan: z.ZodOptional<z.ZodBoolean>;
                        }, "strip", z.ZodTypeAny, {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        }, {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        }>>;
                        min: z.ZodOptional<z.ZodNumber>;
                        max: z.ZodOptional<z.ZodNumber>;
                        range_customize: z.ZodOptional<z.ZodBoolean>;
                        currency_code: z.ZodOptional<z.ZodString>;
                        rating: z.ZodOptional<z.ZodObject<{
                            symbol: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            symbol?: string | undefined;
                        }, {
                            symbol?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }, {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }>>;
                    description: z.ZodOptional<z.ZodObject<{
                        disable_sync: z.ZodOptional<z.ZodBoolean>;
                        text: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    }, {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }, {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                default_view_name?: string | undefined;
                fields?: {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            }, {
                name?: string | undefined;
                default_view_name?: string | undefined;
                fields?: {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            table?: {
                name?: string | undefined;
                default_view_name?: string | undefined;
                fields?: {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            table?: {
                name?: string | undefined;
                default_view_name?: string | undefined;
                fields?: {
                    type: number;
                    field_name: string;
                    description?: {
                        text?: string | undefined;
                        disable_sync?: boolean | undefined;
                    } | undefined;
                    ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | undefined;
                    property?: {
                        options?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                        table_name?: string | undefined;
                        table_id?: string | undefined;
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        auto_fill?: boolean | undefined;
                        multiple?: boolean | undefined;
                        back_field_name?: string | undefined;
                        auto_serial?: {
                            type: "custom" | "auto_increment_number";
                            options?: {
                                value: string;
                                type: "system_number" | "fixed_text" | "created_time";
                            }[] | undefined;
                        } | undefined;
                        location?: {
                            input_type: "only_mobile" | "not_limit";
                        } | undefined;
                        formula_expression?: string | undefined;
                        allowed_edit_modes?: {
                            manual?: boolean | undefined;
                            scan?: boolean | undefined;
                        } | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFieldCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            field_name: z.ZodString;
            type: z.ZodNumber;
            property: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }>, "many">>;
                formatter: z.ZodOptional<z.ZodString>;
                date_formatter: z.ZodOptional<z.ZodString>;
                auto_fill: z.ZodOptional<z.ZodBoolean>;
                multiple: z.ZodOptional<z.ZodBoolean>;
                table_id: z.ZodOptional<z.ZodString>;
                back_field_name: z.ZodOptional<z.ZodString>;
                auto_serial: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<["custom", "auto_increment_number"]>;
                    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodEnum<["system_number", "fixed_text", "created_time"]>;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }, {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                }, {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                }>>;
                location: z.ZodOptional<z.ZodObject<{
                    input_type: z.ZodEnum<["only_mobile", "not_limit"]>;
                }, "strip", z.ZodTypeAny, {
                    input_type: "only_mobile" | "not_limit";
                }, {
                    input_type: "only_mobile" | "not_limit";
                }>>;
                formula_expression: z.ZodOptional<z.ZodString>;
                allowed_edit_modes: z.ZodOptional<z.ZodObject<{
                    manual: z.ZodOptional<z.ZodBoolean>;
                    scan: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                }, {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                }>>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
                range_customize: z.ZodOptional<z.ZodBoolean>;
                currency_code: z.ZodOptional<z.ZodString>;
                rating: z.ZodOptional<z.ZodObject<{
                    symbol: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    symbol?: string | undefined;
                }, {
                    symbol?: string | undefined;
                }>>;
                type: z.ZodOptional<z.ZodObject<{
                    data_type: z.ZodNumber;
                    ui_property: z.ZodOptional<z.ZodObject<{
                        currency_code: z.ZodOptional<z.ZodString>;
                        formatter: z.ZodOptional<z.ZodString>;
                        range_customize: z.ZodOptional<z.ZodBoolean>;
                        min: z.ZodOptional<z.ZodNumber>;
                        max: z.ZodOptional<z.ZodNumber>;
                        date_formatter: z.ZodOptional<z.ZodString>;
                        rating: z.ZodOptional<z.ZodObject<{
                            symbol: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            symbol?: string | undefined;
                        }, {
                            symbol?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }, {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }>>;
                    ui_type: z.ZodOptional<z.ZodEnum<["Number", "Progress", "Currency", "Rating", "DateTime"]>>;
                }, "strip", z.ZodTypeAny, {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }, {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            }, {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            }>>;
            description: z.ZodOptional<z.ZodObject<{
                disable_sync: z.ZodOptional<z.ZodBoolean>;
                text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            }, {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            }>>;
            ui_type: z.ZodOptional<z.ZodEnum<["Text", "Email", "Barcode", "Number", "Progress", "Currency", "Rating", "SingleSelect", "MultiSelect", "DateTime", "Checkbox", "User", "GroupChat", "Phone", "Url", "Attachment", "SingleLink", "Formula", "DuplexLink", "Location", "CreatedTime", "ModifiedTime", "CreatedUser", "ModifiedUser", "AutoNumber"]>>;
        }, "strip", z.ZodTypeAny, {
            type: number;
            field_name: string;
            description?: {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            } | undefined;
            ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | "Email" | undefined;
            property?: {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            type: number;
            field_name: string;
            description?: {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            } | undefined;
            ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | "Email" | undefined;
            property?: {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFieldDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            field_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            field_id: string;
        }, {
            table_id: string;
            app_token: string;
            field_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFieldList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            view_id: z.ZodOptional<z.ZodString>;
            text_field_as_array: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view_id?: string | undefined;
            text_field_as_array?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view_id?: string | undefined;
            text_field_as_array?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFieldUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            field_name: z.ZodString;
            type: z.ZodNumber;
            property: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }>, "many">>;
                formatter: z.ZodOptional<z.ZodString>;
                date_formatter: z.ZodOptional<z.ZodString>;
                auto_fill: z.ZodOptional<z.ZodBoolean>;
                multiple: z.ZodOptional<z.ZodBoolean>;
                table_id: z.ZodOptional<z.ZodString>;
                table_name: z.ZodOptional<z.ZodString>;
                back_field_name: z.ZodOptional<z.ZodString>;
                auto_serial: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<["custom", "auto_increment_number"]>;
                    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodEnum<["system_number", "fixed_text", "created_time"]>;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }, {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                }, {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                }>>;
                location: z.ZodOptional<z.ZodObject<{
                    input_type: z.ZodEnum<["only_mobile", "not_limit"]>;
                }, "strip", z.ZodTypeAny, {
                    input_type: "only_mobile" | "not_limit";
                }, {
                    input_type: "only_mobile" | "not_limit";
                }>>;
                formula_expression: z.ZodOptional<z.ZodString>;
                allowed_edit_modes: z.ZodOptional<z.ZodObject<{
                    manual: z.ZodOptional<z.ZodBoolean>;
                    scan: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                }, {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                }>>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
                range_customize: z.ZodOptional<z.ZodBoolean>;
                currency_code: z.ZodOptional<z.ZodString>;
                rating: z.ZodOptional<z.ZodObject<{
                    symbol: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    symbol?: string | undefined;
                }, {
                    symbol?: string | undefined;
                }>>;
                type: z.ZodOptional<z.ZodObject<{
                    data_type: z.ZodNumber;
                    ui_property: z.ZodOptional<z.ZodObject<{
                        currency_code: z.ZodOptional<z.ZodString>;
                        formatter: z.ZodOptional<z.ZodString>;
                        range_customize: z.ZodOptional<z.ZodBoolean>;
                        min: z.ZodOptional<z.ZodNumber>;
                        max: z.ZodOptional<z.ZodNumber>;
                        date_formatter: z.ZodOptional<z.ZodString>;
                        rating: z.ZodOptional<z.ZodObject<{
                            symbol: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            symbol?: string | undefined;
                        }, {
                            symbol?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }, {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    }>>;
                    ui_type: z.ZodOptional<z.ZodEnum<["Number", "Progress", "Currency", "Rating", "DateTime"]>>;
                }, "strip", z.ZodTypeAny, {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }, {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_name?: string | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            }, {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_name?: string | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            }>>;
            description: z.ZodOptional<z.ZodObject<{
                disable_sync: z.ZodOptional<z.ZodBoolean>;
                text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            }, {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            }>>;
            ui_type: z.ZodOptional<z.ZodEnum<["Text", "Email", "Barcode", "Number", "Progress", "Currency", "Rating", "SingleSelect", "MultiSelect", "DateTime", "Checkbox", "User", "GroupChat", "Phone", "Url", "Attachment", "SingleLink", "Formula", "DuplexLink", "Location", "CreatedTime", "ModifiedTime", "CreatedUser", "ModifiedUser", "AutoNumber"]>>;
        }, "strip", z.ZodTypeAny, {
            type: number;
            field_name: string;
            description?: {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            } | undefined;
            ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | "Email" | undefined;
            property?: {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_name?: string | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            type: number;
            field_name: string;
            description?: {
                text?: string | undefined;
                disable_sync?: boolean | undefined;
            } | undefined;
            ui_type?: "Text" | "Barcode" | "Number" | "Progress" | "Currency" | "Rating" | "SingleSelect" | "MultiSelect" | "DateTime" | "Checkbox" | "User" | "GroupChat" | "Phone" | "Url" | "Attachment" | "SingleLink" | "Formula" | "DuplexLink" | "Location" | "CreatedTime" | "ModifiedTime" | "CreatedUser" | "ModifiedUser" | "AutoNumber" | "Email" | undefined;
            property?: {
                options?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    color?: number | undefined;
                }[] | undefined;
                type?: {
                    data_type: number;
                    ui_type?: "Number" | "Progress" | "Currency" | "Rating" | "DateTime" | undefined;
                    ui_property?: {
                        formatter?: string | undefined;
                        date_formatter?: string | undefined;
                        min?: number | undefined;
                        max?: number | undefined;
                        range_customize?: boolean | undefined;
                        currency_code?: string | undefined;
                        rating?: {
                            symbol?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                table_name?: string | undefined;
                table_id?: string | undefined;
                formatter?: string | undefined;
                date_formatter?: string | undefined;
                auto_fill?: boolean | undefined;
                multiple?: boolean | undefined;
                back_field_name?: string | undefined;
                auto_serial?: {
                    type: "custom" | "auto_increment_number";
                    options?: {
                        value: string;
                        type: "system_number" | "fixed_text" | "created_time";
                    }[] | undefined;
                } | undefined;
                location?: {
                    input_type: "only_mobile" | "not_limit";
                } | undefined;
                formula_expression?: string | undefined;
                allowed_edit_modes?: {
                    manual?: boolean | undefined;
                    scan?: boolean | undefined;
                } | undefined;
                min?: number | undefined;
                max?: number | undefined;
                range_customize?: boolean | undefined;
                currency_code?: string | undefined;
                rating?: {
                    symbol?: string | undefined;
                } | undefined;
            } | undefined;
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            field_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            field_id: string;
        }, {
            table_id: string;
            app_token: string;
            field_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFormFieldList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            form_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            form_id: string;
        }, {
            table_id: string;
            app_token: string;
            form_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFormFieldPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            pre_field_id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            visible: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            description?: string | undefined;
            pre_field_id?: string | undefined;
            required?: boolean | undefined;
            visible?: boolean | undefined;
        }, {
            title?: string | undefined;
            description?: string | undefined;
            pre_field_id?: string | undefined;
            required?: boolean | undefined;
            visible?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            form_id: z.ZodString;
            field_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            field_id: string;
            form_id: string;
        }, {
            table_id: string;
            app_token: string;
            field_id: string;
            form_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFormGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            form_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            form_id: string;
        }, {
            table_id: string;
            app_token: string;
            form_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableFormPatch: {
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
            description: z.ZodOptional<z.ZodString>;
            shared: z.ZodOptional<z.ZodBoolean>;
            shared_limit: z.ZodOptional<z.ZodEnum<["off", "tenant_editable", "anyone_editable"]>>;
            submit_limit_once: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            shared?: boolean | undefined;
            shared_limit?: "off" | "tenant_editable" | "anyone_editable" | undefined;
            submit_limit_once?: boolean | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            shared?: boolean | undefined;
            shared_limit?: "off" | "tenant_editable" | "anyone_editable" | undefined;
            submit_limit_once?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            form_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
            form_id: string;
        }, {
            table_id: string;
            app_token: string;
            form_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableList: {
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
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTablePatch: {
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
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
        }, {
            name?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            records: z.ZodArray<z.ZodObject<{
                fields: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
                shared_url: z.ZodOptional<z.ZodString>;
                record_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                fields: {} & {
                    [k: string]: any;
                };
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }, {
                fields: {} & {
                    [k: string]: any;
                };
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            records: {
                fields: {} & {
                    [k: string]: any;
                };
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }[];
        }, {
            records: {
                fields: {} & {
                    [k: string]: any;
                };
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
            ignore_consistency_check: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            client_token?: string | undefined;
            ignore_consistency_check?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            client_token?: string | undefined;
            ignore_consistency_check?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            records: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            records: string[];
        }, {
            records: string[];
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordBatchGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            record_ids: z.ZodArray<z.ZodString, "many">;
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
            with_shared_url: z.ZodOptional<z.ZodBoolean>;
            automatic_fields: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            record_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_shared_url?: boolean | undefined;
            automatic_fields?: boolean | undefined;
        }, {
            record_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_shared_url?: boolean | undefined;
            automatic_fields?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            records: z.ZodArray<z.ZodObject<{
                fields: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
                record_id: z.ZodOptional<z.ZodString>;
                shared_url: z.ZodOptional<z.ZodString>;
                record_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                fields: {} & {
                    [k: string]: any;
                };
                record_id?: string | undefined;
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }, {
                fields: {} & {
                    [k: string]: any;
                };
                record_id?: string | undefined;
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            records: {
                fields: {} & {
                    [k: string]: any;
                };
                record_id?: string | undefined;
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }[];
        }, {
            records: {
                fields: {} & {
                    [k: string]: any;
                };
                record_id?: string | undefined;
                shared_url?: string | undefined;
                record_url?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            ignore_consistency_check: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ignore_consistency_check?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ignore_consistency_check?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            fields: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
        }, "strip", z.ZodTypeAny, {
            fields: {} & {
                [k: string]: any;
            };
        }, {
            fields: {} & {
                [k: string]: any;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
            ignore_consistency_check: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            client_token?: string | undefined;
            ignore_consistency_check?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            client_token?: string | undefined;
            ignore_consistency_check?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record_id: string;
            table_id: string;
            app_token: string;
        }, {
            record_id: string;
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            text_field_as_array: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            display_formula_ref: z.ZodOptional<z.ZodBoolean>;
            with_shared_url: z.ZodOptional<z.ZodBoolean>;
            automatic_fields: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            text_field_as_array?: boolean | undefined;
            with_shared_url?: boolean | undefined;
            automatic_fields?: boolean | undefined;
            display_formula_ref?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            text_field_as_array?: boolean | undefined;
            with_shared_url?: boolean | undefined;
            automatic_fields?: boolean | undefined;
            display_formula_ref?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record_id: string;
            table_id: string;
            app_token: string;
        }, {
            record_id: string;
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            view_id: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodString>;
            sort: z.ZodOptional<z.ZodString>;
            field_names: z.ZodOptional<z.ZodString>;
            text_field_as_array: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            display_formula_ref: z.ZodOptional<z.ZodBoolean>;
            automatic_fields: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            sort?: string | undefined;
            filter?: string | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            view_id?: string | undefined;
            text_field_as_array?: boolean | undefined;
            automatic_fields?: boolean | undefined;
            display_formula_ref?: boolean | undefined;
            field_names?: string | undefined;
        }, {
            sort?: string | undefined;
            filter?: string | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            view_id?: string | undefined;
            text_field_as_array?: boolean | undefined;
            automatic_fields?: boolean | undefined;
            display_formula_ref?: boolean | undefined;
            field_names?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            view_id: z.ZodOptional<z.ZodString>;
            field_names: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                desc?: boolean | undefined;
                field_name?: string | undefined;
            }, {
                desc?: boolean | undefined;
                field_name?: string | undefined;
            }>, "many">>;
            filter: z.ZodOptional<z.ZodObject<{
                conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    operator: z.ZodEnum<["is", "isNot", "contains", "doesNotContain", "isEmpty", "isNotEmpty", "isGreater", "isGreaterEqual", "isLess", "isLessEqual", "like", "in"]>;
                    value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }, {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                conditions?: {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }[] | undefined;
                conjunction?: "and" | "or" | undefined;
            }, {
                conditions?: {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }[] | undefined;
                conjunction?: "and" | "or" | undefined;
            }>>;
            automatic_fields: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            sort?: {
                desc?: boolean | undefined;
                field_name?: string | undefined;
            }[] | undefined;
            filter?: {
                conditions?: {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }[] | undefined;
                conjunction?: "and" | "or" | undefined;
            } | undefined;
            view_id?: string | undefined;
            automatic_fields?: boolean | undefined;
            field_names?: string[] | undefined;
        }, {
            sort?: {
                desc?: boolean | undefined;
                field_name?: string | undefined;
            }[] | undefined;
            filter?: {
                conditions?: {
                    operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "like" | "in";
                    field_name: string;
                    value?: string[] | undefined;
                }[] | undefined;
                conjunction?: "and" | "or" | undefined;
            } | undefined;
            view_id?: string | undefined;
            automatic_fields?: boolean | undefined;
            field_names?: string[] | undefined;
        }>>;
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
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            table_id: string;
            app_token: string;
        }, {
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableRecordUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            fields: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
        }, "strip", z.ZodTypeAny, {
            fields: {} & {
                [k: string]: any;
            };
        }, {
            fields: {} & {
                [k: string]: any;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            ignore_consistency_check: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ignore_consistency_check?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ignore_consistency_check?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
            table_id: z.ZodString;
            record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record_id: string;
            table_id: string;
            app_token: string;
        }, {
            record_id: string;
            table_id: string;
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableViewCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            view_name: z.ZodString;
            view_type: z.ZodOptional<z.ZodEnum<["grid", "kanban", "gallery", "gantt", "form"]>>;
        }, "strip", z.ZodTypeAny, {
            view_name: string;
            view_type?: "form" | "grid" | "kanban" | "gallery" | "gantt" | undefined;
        }, {
            view_name: string;
            view_type?: "form" | "grid" | "kanban" | "gallery" | "gantt" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            table_id?: string | undefined;
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableViewDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
            view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableViewGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
            view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableViewList: {
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
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            table_id?: string | undefined;
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppTableViewPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            view_name: z.ZodOptional<z.ZodString>;
            property: z.ZodOptional<z.ZodObject<{
                filter_info: z.ZodOptional<z.ZodObject<{
                    conjunction: z.ZodEnum<["and", "or"]>;
                    conditions: z.ZodArray<z.ZodObject<{
                        field_id: z.ZodString;
                        operator: z.ZodEnum<["is", "isNot", "contains", "doesNotContain", "isEmpty", "isNotEmpty", "isGreater", "isGreaterEqual", "isLess", "isLessEqual"]>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }, {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                }, {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                }>>;
                hidden_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                hierarchy_config: z.ZodOptional<z.ZodObject<{
                    field_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    field_id?: string | undefined;
                }, {
                    field_id?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                filter_info?: {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                } | undefined;
                hidden_fields?: string[] | undefined;
                hierarchy_config?: {
                    field_id?: string | undefined;
                } | undefined;
            }, {
                filter_info?: {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                } | undefined;
                hidden_fields?: string[] | undefined;
                hierarchy_config?: {
                    field_id?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            property?: {
                filter_info?: {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                } | undefined;
                hidden_fields?: string[] | undefined;
                hierarchy_config?: {
                    field_id?: string | undefined;
                } | undefined;
            } | undefined;
            view_name?: string | undefined;
        }, {
            property?: {
                filter_info?: {
                    conditions: {
                        operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual";
                        field_id: string;
                        value?: string | undefined;
                    }[];
                    conjunction: "and" | "or";
                } | undefined;
                hidden_fields?: string[] | undefined;
                hierarchy_config?: {
                    field_id?: string | undefined;
                } | undefined;
            } | undefined;
            view_name?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
            view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppUpdate: {
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
            is_advanced: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            is_advanced?: boolean | undefined;
        }, {
            name?: string | undefined;
            is_advanced?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppWorkflowList: {
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
            app_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
        }, {
            app_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1AppWorkflowUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            status: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: string;
        }, {
            status: string;
        }>;
        path: z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            workflow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            workflow_id: string;
            app_token?: string | undefined;
        }, {
            workflow_id: string;
            app_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const bitableV1Tools: ({
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
            folder_token: z.ZodOptional<z.ZodString>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
        }, {
            name?: string | undefined;
            time_zone?: string | undefined;
            folder_token?: string | undefined;
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
        path: z.ZodObject<{
            app_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_token: string;
        }, {
            app_token: string;
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
            role_name: z.ZodString;
            table_roles: z.ZodArray<z.ZodObject<{
                table_name: z.ZodOptional<z.ZodString>;
                table_id: z.ZodOptional<z.ZodString>;
                table_perm: z.ZodNumber;
                rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        operator: z.ZodOptional<z.ZodEnum<["is", "isNot", "contains", "doesNotContain", "isEmpty", "isNotEmpty"]>>;
                        value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }, {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }>, "many">;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }>, "many">;
            block_roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                block_id: z.ZodString;
                block_perm: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                block_id: string;
                block_perm: number;
            }, {
                block_id: string;
                block_perm: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[];
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                field_perm?: {} | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
        }, {
            app_token?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            app_token?: string | undefined;
            role_id?: string | undefined;
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
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_token?: string | undefined;
        }, {
            app_token?: string | undefined;
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
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "chat_id", "department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "chat_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            app_token?: string | undefined;
            role_id?: string | undefined;
        }, {
            member_id: string;
            app_token?: string | undefined;
            role_id?: string | undefined;
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
            view_name: z.ZodString;
            view_type: z.ZodOptional<z.ZodEnum<["grid", "kanban", "gallery", "gantt", "form"]>>;
        }, "strip", z.ZodTypeAny, {
            view_name: string;
            view_type?: "form" | "grid" | "kanban" | "gallery" | "gantt" | undefined;
        }, {
            view_name: string;
            view_type?: "form" | "grid" | "kanban" | "gallery" | "gantt" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            table_id?: string | undefined;
            app_token?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            table_id: z.ZodOptional<z.ZodString>;
            view_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
        }, {
            view_id?: string | undefined;
            table_id?: string | undefined;
            app_token?: string | undefined;
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
        data: z.ZodObject<{
            status: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: string;
        }, {
            status: string;
        }>;
        path: z.ZodObject<{
            app_token: z.ZodOptional<z.ZodString>;
            workflow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            workflow_id: string;
            app_token?: string | undefined;
        }, {
            workflow_id: string;
            app_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
