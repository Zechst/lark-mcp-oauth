import { z } from 'zod';
export type baseV2ToolName = 'base.v2.appRole.create' | 'base.v2.appRole.list' | 'base.v2.appRole.update';
export declare const baseV2AppRoleCreate: {
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
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                other_rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
                view_perm: z.ZodOptional<z.ZodNumber>;
                view_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                field_action_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
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
            base_rule: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
        }>;
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
export declare const baseV2AppRoleList: {
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
export declare const baseV2AppRoleUpdate: {
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
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                other_rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
                view_perm: z.ZodOptional<z.ZodNumber>;
                view_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                field_action_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
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
            base_rule: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
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
export declare const baseV2Tools: ({
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
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                    other_perm: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                }>>;
                other_rec_rule: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    }>, "many">>;
                    conjunction: z.ZodOptional<z.ZodEnum<["and", "or"]>>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }, {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                }>>;
                field_perm: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                allow_add_record: z.ZodOptional<z.ZodBoolean>;
                allow_delete_record: z.ZodOptional<z.ZodBoolean>;
                view_perm: z.ZodOptional<z.ZodNumber>;
                view_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                field_action_rules: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
            }, "strip", z.ZodTypeAny, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }, {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
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
            base_rule: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
        }, {
            role_name: string;
            table_roles: {
                table_perm: number;
                table_name?: string | undefined;
                table_id?: string | undefined;
                rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                    other_perm?: number | undefined;
                } | undefined;
                other_rec_rule?: {
                    conditions?: {
                        field_name: string;
                        value?: string[] | undefined;
                        operator?: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | undefined;
                    }[] | undefined;
                    conjunction?: "and" | "or" | undefined;
                } | undefined;
                field_perm?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                allow_add_record?: boolean | undefined;
                allow_delete_record?: boolean | undefined;
                view_perm?: number | undefined;
                view_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                field_action_rules?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
            }[];
            block_roles?: {
                block_id: string;
                block_perm: number;
            }[] | undefined;
            base_rule?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
        }>;
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
})[];
