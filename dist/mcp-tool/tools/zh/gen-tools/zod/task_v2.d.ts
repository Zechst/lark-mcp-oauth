import { z } from 'zod';
export type taskV2ToolName = 'task.v2.attachment.delete' | 'task.v2.attachment.get' | 'task.v2.attachment.list' | 'task.v2.comment.create' | 'task.v2.comment.delete' | 'task.v2.comment.get' | 'task.v2.comment.list' | 'task.v2.comment.patch' | 'task.v2.customField.add' | 'task.v2.customField.create' | 'task.v2.customField.get' | 'task.v2.customField.list' | 'task.v2.customFieldOption.create' | 'task.v2.customFieldOption.patch' | 'task.v2.customField.patch' | 'task.v2.customField.remove' | 'task.v2.section.create' | 'task.v2.section.delete' | 'task.v2.section.get' | 'task.v2.section.list' | 'task.v2.section.patch' | 'task.v2.section.tasks' | 'task.v2.task.addDependencies' | 'task.v2.task.addMembers' | 'task.v2.task.addReminders' | 'task.v2.task.addTasklist' | 'task.v2.task.create' | 'task.v2.task.delete' | 'task.v2.task.get' | 'task.v2.task.list' | 'task.v2.task.patch' | 'task.v2.task.removeDependencies' | 'task.v2.task.removeMembers' | 'task.v2.task.removeReminders' | 'task.v2.task.removeTasklist' | 'task.v2.taskSubtask.create' | 'task.v2.taskSubtask.list' | 'task.v2.task.tasklists' | 'task.v2.tasklistActivitySubscription.create' | 'task.v2.tasklistActivitySubscription.delete' | 'task.v2.tasklistActivitySubscription.get' | 'task.v2.tasklistActivitySubscription.list' | 'task.v2.tasklistActivitySubscription.patch' | 'task.v2.tasklist.addMembers' | 'task.v2.tasklist.create' | 'task.v2.tasklist.delete' | 'task.v2.tasklist.get' | 'task.v2.tasklist.list' | 'task.v2.tasklist.patch' | 'task.v2.tasklist.removeMembers' | 'task.v2.tasklist.tasks';
export declare const taskV2AttachmentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            attachment_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            attachment_guid?: string | undefined;
        }, {
            attachment_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2AttachmentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            attachment_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            attachment_guid: string;
        }, {
            attachment_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2AttachmentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_type?: string | undefined;
        }, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_type?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CommentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            content: z.ZodString;
            reply_to_comment_id: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
            reply_to_comment_id?: string | undefined;
        }, {
            content: string;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
            reply_to_comment_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CommentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            comment_id: string;
        }, {
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CommentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            comment_id: string;
        }, {
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CommentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodString;
            direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            direction?: "asc" | "desc" | undefined;
            resource_type?: string | undefined;
        }, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            direction?: "asc" | "desc" | undefined;
            resource_type?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CommentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            comment: z.ZodObject<{
                content: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                content?: string | undefined;
            }, {
                content?: string | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            comment: {
                content?: string | undefined;
            };
            update_fields: string[];
        }, {
            comment: {
                content?: string | undefined;
            };
            update_fields: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            comment_id: string;
        }, {
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldAdd: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            resource_type: z.ZodString;
            resource_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            resource_type: string;
            resource_id: string;
        }, {
            resource_type: string;
            resource_id: string;
        }>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            resource_type: z.ZodString;
            resource_id: z.ZodString;
            name: z.ZodString;
            type: z.ZodEnum<["number", "datetime", "member", "single_select", "multi_select", "text"]>;
            number_setting: z.ZodOptional<z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<["normal", "percentage", "cny", "usd", "custom"]>>;
                custom_symbol: z.ZodOptional<z.ZodString>;
                custom_symbol_position: z.ZodOptional<z.ZodEnum<["left", "right"]>>;
                separator: z.ZodOptional<z.ZodEnum<["none", "thousand"]>>;
                decimal_count: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            }, {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            }>>;
            member_setting: z.ZodOptional<z.ZodObject<{
                multi: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                multi?: boolean | undefined;
            }, {
                multi?: boolean | undefined;
            }>>;
            datetime_setting: z.ZodOptional<z.ZodObject<{
                format: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                format?: string | undefined;
            }, {
                format?: string | undefined;
            }>>;
            single_select_setting: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    color_index: z.ZodOptional<z.ZodNumber>;
                    is_hidden: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }>>;
            multi_select_setting: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    color_index: z.ZodOptional<z.ZodNumber>;
                    is_hidden: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }>>;
            text_setting: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "text" | "datetime" | "member" | "single_select" | "multi_select";
            name: string;
            resource_type: string;
            resource_id: string;
            number_setting?: {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            } | undefined;
            member_setting?: {
                multi?: boolean | undefined;
            } | undefined;
            datetime_setting?: {
                format?: string | undefined;
            } | undefined;
            single_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            multi_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            text_setting?: {} | undefined;
        }, {
            type: "number" | "text" | "datetime" | "member" | "single_select" | "multi_select";
            name: string;
            resource_type: string;
            resource_id: string;
            number_setting?: {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            } | undefined;
            member_setting?: {
                multi?: boolean | undefined;
            } | undefined;
            datetime_setting?: {
                format?: string | undefined;
            } | undefined;
            single_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            multi_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            text_setting?: {} | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldGet: {
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
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldList: {
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
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldOptionCreate: {
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
            color_index: z.ZodOptional<z.ZodNumber>;
            insert_before: z.ZodOptional<z.ZodString>;
            insert_after: z.ZodOptional<z.ZodString>;
            is_hidden: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            color_index?: number | undefined;
            is_hidden?: boolean | undefined;
        }, {
            name?: string | undefined;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            color_index?: number | undefined;
            is_hidden?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldOptionPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            option: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                color_index: z.ZodOptional<z.ZodNumber>;
                insert_before: z.ZodOptional<z.ZodString>;
                insert_after: z.ZodOptional<z.ZodString>;
                is_hidden: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            }, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            }>>;
            update_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            option?: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            } | undefined;
            update_fields?: string[] | undefined;
        }, {
            option?: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            } | undefined;
            update_fields?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
            option_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
            option_guid: string;
        }, {
            custom_field_guid: string;
            option_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            custom_field: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                number_setting: z.ZodOptional<z.ZodObject<{
                    format: z.ZodOptional<z.ZodEnum<["normal", "percentage", "cny", "usd", "custom"]>>;
                    custom_symbol: z.ZodOptional<z.ZodString>;
                    custom_symbol_position: z.ZodOptional<z.ZodEnum<["left", "right"]>>;
                    separator: z.ZodOptional<z.ZodEnum<["none", "thousand"]>>;
                    decimal_count: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                }, {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                }>>;
                member_setting: z.ZodOptional<z.ZodObject<{
                    multi: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    multi?: boolean | undefined;
                }, {
                    multi?: boolean | undefined;
                }>>;
                datetime_setting: z.ZodOptional<z.ZodObject<{
                    format: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    format?: string | undefined;
                }, {
                    format?: string | undefined;
                }>>;
                single_select_setting: z.ZodOptional<z.ZodObject<{
                    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        guid: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        color_index: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }, {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                }, {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                }>>;
                multi_select_setting: z.ZodOptional<z.ZodObject<{
                    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        guid: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        color_index: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }, {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                }, {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                }>>;
                text_setting: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                number_setting?: {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                } | undefined;
                member_setting?: {
                    multi?: boolean | undefined;
                } | undefined;
                datetime_setting?: {
                    format?: string | undefined;
                } | undefined;
                single_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                multi_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                text_setting?: {} | undefined;
            }, {
                name?: string | undefined;
                number_setting?: {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                } | undefined;
                member_setting?: {
                    multi?: boolean | undefined;
                } | undefined;
                datetime_setting?: {
                    format?: string | undefined;
                } | undefined;
                single_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                multi_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                text_setting?: {} | undefined;
            }>>;
            update_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            update_fields?: string[] | undefined;
            custom_field?: {
                name?: string | undefined;
                number_setting?: {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                } | undefined;
                member_setting?: {
                    multi?: boolean | undefined;
                } | undefined;
                datetime_setting?: {
                    format?: string | undefined;
                } | undefined;
                single_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                multi_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                text_setting?: {} | undefined;
            } | undefined;
        }, {
            update_fields?: string[] | undefined;
            custom_field?: {
                name?: string | undefined;
                number_setting?: {
                    separator?: "none" | "thousand" | undefined;
                    format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                    custom_symbol?: string | undefined;
                    custom_symbol_position?: "left" | "right" | undefined;
                    decimal_count?: number | undefined;
                } | undefined;
                member_setting?: {
                    multi?: boolean | undefined;
                } | undefined;
                datetime_setting?: {
                    format?: string | undefined;
                } | undefined;
                single_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                multi_select_setting?: {
                    options?: {
                        name?: string | undefined;
                        color_index?: number | undefined;
                        guid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                text_setting?: {} | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2CustomFieldRemove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            resource_type: z.ZodString;
            resource_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            resource_type: string;
            resource_id: string;
        }, {
            resource_type: string;
            resource_id: string;
        }>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionCreate: {
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
            resource_type: z.ZodString;
            resource_id: z.ZodOptional<z.ZodString>;
            insert_before: z.ZodOptional<z.ZodString>;
            insert_after: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            resource_type: string;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            resource_id?: string | undefined;
        }, {
            name: string;
            resource_type: string;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            resource_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            section_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            section_guid: string;
        }, {
            section_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            section_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            section_guid: string;
        }, {
            section_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodString;
            resource_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resource_type: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_id?: string | undefined;
        }, {
            resource_type: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_id?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            section: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                insert_before: z.ZodOptional<z.ZodString>;
                insert_after: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
            }, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            update_fields: string[];
            section: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
            };
        }, {
            update_fields: string[];
            section: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            section_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            section_guid: string;
        }, {
            section_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2SectionTasks: {
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
            completed: z.ZodOptional<z.ZodBoolean>;
            created_from: z.ZodOptional<z.ZodString>;
            created_to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            completed?: boolean | undefined;
            created_from?: string | undefined;
            created_to?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            completed?: boolean | undefined;
            created_from?: string | undefined;
            created_to?: string | undefined;
        }>>;
        path: z.ZodObject<{
            section_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            section_guid: string;
        }, {
            section_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskAddDependencies: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            dependencies: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["prev", "next"]>;
                task_guid: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "prev" | "next";
                task_guid: string;
            }, {
                type: "prev" | "next";
                task_guid: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            dependencies?: {
                type: "prev" | "next";
                task_guid: string;
            }[] | undefined;
        }, {
            dependencies?: {
                type: "prev" | "next";
                task_guid: string;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskAddMembers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }>, "many">;
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            members: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[];
            client_token?: string | undefined;
        }, {
            members: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[];
            client_token?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskAddReminders: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            reminders: z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            reminders: {
                relative_fire_minute: number;
            }[];
        }, {
            reminders: {
                relative_fire_minute: number;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskAddTasklist: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tasklist_guid: z.ZodString;
            section_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
            section_guid?: string | undefined;
        }, {
            tasklist_guid: string;
            section_guid?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            summary: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            due: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            origin: z.ZodOptional<z.ZodObject<{
                platform_i18n_name: z.ZodOptional<z.ZodObject<{
                    en_us: z.ZodOptional<z.ZodString>;
                    zh_cn: z.ZodOptional<z.ZodString>;
                    zh_hk: z.ZodOptional<z.ZodString>;
                    zh_tw: z.ZodOptional<z.ZodString>;
                    ja_jp: z.ZodOptional<z.ZodString>;
                    fr_fr: z.ZodOptional<z.ZodString>;
                    it_it: z.ZodOptional<z.ZodString>;
                    de_de: z.ZodOptional<z.ZodString>;
                    ru_ru: z.ZodOptional<z.ZodString>;
                    th_th: z.ZodOptional<z.ZodString>;
                    es_es: z.ZodOptional<z.ZodString>;
                    ko_kr: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }>>;
                href: z.ZodOptional<z.ZodObject<{
                    url: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }>>;
            extra: z.ZodOptional<z.ZodString>;
            completed_at: z.ZodOptional<z.ZodString>;
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }>, "many">>;
            repeat_rule: z.ZodOptional<z.ZodString>;
            custom_complete: z.ZodOptional<z.ZodObject<{
                pc: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                ios: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                android: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }>>;
            tasklists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tasklist_guid: z.ZodOptional<z.ZodString>;
                section_guid: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }>, "many">>;
            client_token: z.ZodOptional<z.ZodString>;
            start: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">>;
            mode: z.ZodOptional<z.ZodNumber>;
            is_milestone: z.ZodOptional<z.ZodBoolean>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                guid: z.ZodString;
                number_value: z.ZodOptional<z.ZodString>;
                member_value: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }>, "many">>;
                datetime_value: z.ZodOptional<z.ZodString>;
                single_select_value: z.ZodOptional<z.ZodString>;
                multi_select_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                text_value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }, {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }>, "many">>;
            docx_source: z.ZodOptional<z.ZodObject<{
                token: z.ZodString;
                block_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                block_id: string;
            }, {
                token: string;
                block_id: string;
            }>>;
            positive_reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            custom_fields?: {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
            mode?: number | undefined;
            is_milestone?: boolean | undefined;
            docx_source?: {
                token: string;
                block_id: string;
            } | undefined;
            positive_reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
        }, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            custom_fields?: {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
            mode?: number | undefined;
            is_milestone?: boolean | undefined;
            docx_source?: {
                token: string;
                block_id: string;
            } | undefined;
            positive_reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskList: {
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
            completed: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: string | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            completed?: boolean | undefined;
        }, {
            type?: string | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            completed?: boolean | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            task: z.ZodOptional<z.ZodObject<{
                summary: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                due: z.ZodOptional<z.ZodObject<{
                    timestamp: z.ZodOptional<z.ZodString>;
                    is_all_day: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                }, {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                }>>;
                extra: z.ZodOptional<z.ZodString>;
                completed_at: z.ZodOptional<z.ZodString>;
                repeat_rule: z.ZodOptional<z.ZodString>;
                custom_complete: z.ZodOptional<z.ZodObject<{
                    pc: z.ZodOptional<z.ZodObject<{
                        href: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodObject<{
                            en_us: z.ZodOptional<z.ZodString>;
                            zh_cn: z.ZodOptional<z.ZodString>;
                            zh_hk: z.ZodOptional<z.ZodString>;
                            zh_tw: z.ZodOptional<z.ZodString>;
                            ja_jp: z.ZodOptional<z.ZodString>;
                            fr_fr: z.ZodOptional<z.ZodString>;
                            it_it: z.ZodOptional<z.ZodString>;
                            de_de: z.ZodOptional<z.ZodString>;
                            ru_ru: z.ZodOptional<z.ZodString>;
                            th_th: z.ZodOptional<z.ZodString>;
                            es_es: z.ZodOptional<z.ZodString>;
                            ko_kr: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }>>;
                    ios: z.ZodOptional<z.ZodObject<{
                        href: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodObject<{
                            en_us: z.ZodOptional<z.ZodString>;
                            zh_cn: z.ZodOptional<z.ZodString>;
                            zh_hk: z.ZodOptional<z.ZodString>;
                            zh_tw: z.ZodOptional<z.ZodString>;
                            ja_jp: z.ZodOptional<z.ZodString>;
                            fr_fr: z.ZodOptional<z.ZodString>;
                            it_it: z.ZodOptional<z.ZodString>;
                            de_de: z.ZodOptional<z.ZodString>;
                            ru_ru: z.ZodOptional<z.ZodString>;
                            th_th: z.ZodOptional<z.ZodString>;
                            es_es: z.ZodOptional<z.ZodString>;
                            ko_kr: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }>>;
                    android: z.ZodOptional<z.ZodObject<{
                        href: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodObject<{
                            en_us: z.ZodOptional<z.ZodString>;
                            zh_cn: z.ZodOptional<z.ZodString>;
                            zh_hk: z.ZodOptional<z.ZodString>;
                            zh_tw: z.ZodOptional<z.ZodString>;
                            ja_jp: z.ZodOptional<z.ZodString>;
                            fr_fr: z.ZodOptional<z.ZodString>;
                            it_it: z.ZodOptional<z.ZodString>;
                            de_de: z.ZodOptional<z.ZodString>;
                            ru_ru: z.ZodOptional<z.ZodString>;
                            th_th: z.ZodOptional<z.ZodString>;
                            es_es: z.ZodOptional<z.ZodString>;
                            ko_kr: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }, {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }, {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                }, {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                }>>;
                start: z.ZodOptional<z.ZodObject<{
                    timestamp: z.ZodOptional<z.ZodString>;
                    is_all_day: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                }, {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                }>>;
                mode: z.ZodOptional<z.ZodNumber>;
                is_milestone: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    guid: z.ZodString;
                    number_value: z.ZodOptional<z.ZodString>;
                    member_value: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        type: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }, {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }>, "many">>;
                    datetime_value: z.ZodOptional<z.ZodString>;
                    single_select_value: z.ZodOptional<z.ZodString>;
                    multi_select_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    text_value: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }, {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                custom_fields?: {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }[] | undefined;
                start?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                due?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                repeat_rule?: string | undefined;
                completed_at?: string | undefined;
                custom_complete?: {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                mode?: number | undefined;
                is_milestone?: boolean | undefined;
            }, {
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                custom_fields?: {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }[] | undefined;
                start?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                due?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                repeat_rule?: string | undefined;
                completed_at?: string | undefined;
                custom_complete?: {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                mode?: number | undefined;
                is_milestone?: boolean | undefined;
            }>>;
            update_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            update_fields: string[];
            task?: {
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                custom_fields?: {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }[] | undefined;
                start?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                due?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                repeat_rule?: string | undefined;
                completed_at?: string | undefined;
                custom_complete?: {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                mode?: number | undefined;
                is_milestone?: boolean | undefined;
            } | undefined;
        }, {
            update_fields: string[];
            task?: {
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                custom_fields?: {
                    guid: string;
                    text_value?: string | undefined;
                    number_value?: string | undefined;
                    member_value?: {
                        type?: string | undefined;
                        id?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    datetime_value?: string | undefined;
                    single_select_value?: string | undefined;
                    multi_select_value?: string[] | undefined;
                }[] | undefined;
                start?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                due?: {
                    timestamp?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                repeat_rule?: string | undefined;
                completed_at?: string | undefined;
                custom_complete?: {
                    pc?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    ios?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                    android?: {
                        href?: string | undefined;
                        tip?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                            zh_hk?: string | undefined;
                            zh_tw?: string | undefined;
                            th_th?: string | undefined;
                            es_es?: string | undefined;
                            ko_kr?: string | undefined;
                            de_de?: string | undefined;
                            fr_fr?: string | undefined;
                            it_it?: string | undefined;
                            ru_ru?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                mode?: number | undefined;
                is_milestone?: boolean | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskRemoveDependencies: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            dependencies: z.ZodArray<z.ZodObject<{
                task_guid: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                task_guid: string;
            }, {
                task_guid: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            dependencies: {
                task_guid: string;
            }[];
        }, {
            dependencies: {
                task_guid: string;
            }[];
        }>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskRemoveMembers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                role: string;
                type?: string | undefined;
            }, {
                id: string;
                role: string;
                type?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                id: string;
                role: string;
                type?: string | undefined;
            }[];
        }, {
            members: {
                id: string;
                role: string;
                type?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskRemoveReminders: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            reminder_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            reminder_ids: string[];
        }, {
            reminder_ids: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskRemoveTasklist: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskSubtaskCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            summary: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            due: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            origin: z.ZodOptional<z.ZodObject<{
                platform_i18n_name: z.ZodOptional<z.ZodObject<{
                    en_us: z.ZodOptional<z.ZodString>;
                    zh_cn: z.ZodOptional<z.ZodString>;
                    zh_hk: z.ZodOptional<z.ZodString>;
                    zh_tw: z.ZodOptional<z.ZodString>;
                    ja_jp: z.ZodOptional<z.ZodString>;
                    fr_fr: z.ZodOptional<z.ZodString>;
                    it_it: z.ZodOptional<z.ZodString>;
                    de_de: z.ZodOptional<z.ZodString>;
                    ru_ru: z.ZodOptional<z.ZodString>;
                    th_th: z.ZodOptional<z.ZodString>;
                    es_es: z.ZodOptional<z.ZodString>;
                    ko_kr: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }>>;
                href: z.ZodOptional<z.ZodObject<{
                    url: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }>>;
            extra: z.ZodOptional<z.ZodString>;
            completed_at: z.ZodOptional<z.ZodString>;
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }>, "many">>;
            repeat_rule: z.ZodOptional<z.ZodString>;
            custom_complete: z.ZodOptional<z.ZodObject<{
                pc: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                ios: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                android: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }>>;
            tasklists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tasklist_guid: z.ZodOptional<z.ZodString>;
                section_guid: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }>, "many">>;
            client_token: z.ZodOptional<z.ZodString>;
            start: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
        }, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskSubtaskList: {
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
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            task_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_guid?: string | undefined;
        }, {
            task_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TaskTasklists: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistActivitySubscriptionCreate: {
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
            subscribers: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">;
            include_keys: z.ZodArray<z.ZodNumber, "many">;
            disabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            subscribers: {
                type?: string | undefined;
                id?: string | undefined;
            }[];
            include_keys: number[];
            disabled?: boolean | undefined;
        }, {
            name: string;
            subscribers: {
                type?: string | undefined;
                id?: string | undefined;
            }[];
            include_keys: number[];
            disabled?: boolean | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistActivitySubscriptionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
            activity_subscription_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistActivitySubscriptionGet: {
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
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
            activity_subscription_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistActivitySubscriptionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            limit: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            limit?: number | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            limit?: number | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistActivitySubscriptionPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            activity_subscription: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                subscribers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type?: string | undefined;
                    id?: string | undefined;
                }, {
                    type?: string | undefined;
                    id?: string | undefined;
                }>, "many">>;
                include_keys: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                disabled: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                disabled?: boolean | undefined;
                subscribers?: {
                    type?: string | undefined;
                    id?: string | undefined;
                }[] | undefined;
                include_keys?: number[] | undefined;
            }, {
                name?: string | undefined;
                disabled?: boolean | undefined;
                subscribers?: {
                    type?: string | undefined;
                    id?: string | undefined;
                }[] | undefined;
                include_keys?: number[] | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodEnum<["name", "include_keys", "subscribers", "disabled"]>, "many">;
        }, "strip", z.ZodTypeAny, {
            update_fields: ("name" | "disabled" | "subscribers" | "include_keys")[];
            activity_subscription: {
                name?: string | undefined;
                disabled?: boolean | undefined;
                subscribers?: {
                    type?: string | undefined;
                    id?: string | undefined;
                }[] | undefined;
                include_keys?: number[] | undefined;
            };
        }, {
            update_fields: ("name" | "disabled" | "subscribers" | "include_keys")[];
            activity_subscription: {
                name?: string | undefined;
                disabled?: boolean | undefined;
                subscribers?: {
                    type?: string | undefined;
                    id?: string | undefined;
                }[] | undefined;
                include_keys?: number[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
            activity_subscription_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistAddMembers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[];
        }, {
            members: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            tasklist_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid?: string | undefined;
        }, {
            tasklist_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistCreate: {
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
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
        }, {
            name: string;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            tasklist_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid?: string | undefined;
        }, {
            tasklist_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            tasklist_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid?: string | undefined;
        }, {
            tasklist_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistList: {
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
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tasklist: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                owner: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                    role: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                }, {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            }, {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodString, "many">;
            origin_owner_to_role: z.ZodOptional<z.ZodEnum<["editor", "viewer", "none"]>>;
        }, "strip", z.ZodTypeAny, {
            update_fields: string[];
            tasklist: {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            };
            origin_owner_to_role?: "none" | "editor" | "viewer" | undefined;
        }, {
            update_fields: string[];
            tasklist: {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            };
            origin_owner_to_role?: "none" | "editor" | "viewer" | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistRemoveMembers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[];
        }, {
            members: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            tasklist_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid?: string | undefined;
        }, {
            tasklist_guid?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2TasklistTasks: {
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
            completed: z.ZodOptional<z.ZodBoolean>;
            created_from: z.ZodOptional<z.ZodString>;
            created_to: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            completed?: boolean | undefined;
            created_from?: string | undefined;
            created_to?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            completed?: boolean | undefined;
            created_from?: string | undefined;
            created_to?: string | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV2Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            attachment_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            attachment_guid?: string | undefined;
        }, {
            attachment_guid?: string | undefined;
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
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            attachment_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            attachment_guid: string;
        }, {
            attachment_guid: string;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_type?: string | undefined;
        }, {
            resource_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_type?: string | undefined;
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
            content: z.ZodString;
            reply_to_comment_id: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
            reply_to_comment_id?: string | undefined;
        }, {
            content: string;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
            reply_to_comment_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
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
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            comment_id: string;
        }, {
            comment_id: string;
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
            resource_type: z.ZodString;
            resource_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            resource_type: string;
            resource_id: string;
        }, {
            resource_type: string;
            resource_id: string;
        }>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
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
            resource_type: z.ZodString;
            resource_id: z.ZodString;
            name: z.ZodString;
            type: z.ZodEnum<["number", "datetime", "member", "single_select", "multi_select", "text"]>;
            number_setting: z.ZodOptional<z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<["normal", "percentage", "cny", "usd", "custom"]>>;
                custom_symbol: z.ZodOptional<z.ZodString>;
                custom_symbol_position: z.ZodOptional<z.ZodEnum<["left", "right"]>>;
                separator: z.ZodOptional<z.ZodEnum<["none", "thousand"]>>;
                decimal_count: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            }, {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            }>>;
            member_setting: z.ZodOptional<z.ZodObject<{
                multi: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                multi?: boolean | undefined;
            }, {
                multi?: boolean | undefined;
            }>>;
            datetime_setting: z.ZodOptional<z.ZodObject<{
                format: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                format?: string | undefined;
            }, {
                format?: string | undefined;
            }>>;
            single_select_setting: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    color_index: z.ZodOptional<z.ZodNumber>;
                    is_hidden: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }>>;
            multi_select_setting: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    color_index: z.ZodOptional<z.ZodNumber>;
                    is_hidden: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }, {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }, {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            }>>;
            text_setting: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "text" | "datetime" | "member" | "single_select" | "multi_select";
            name: string;
            resource_type: string;
            resource_id: string;
            number_setting?: {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            } | undefined;
            member_setting?: {
                multi?: boolean | undefined;
            } | undefined;
            datetime_setting?: {
                format?: string | undefined;
            } | undefined;
            single_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            multi_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            text_setting?: {} | undefined;
        }, {
            type: "number" | "text" | "datetime" | "member" | "single_select" | "multi_select";
            name: string;
            resource_type: string;
            resource_id: string;
            number_setting?: {
                separator?: "none" | "thousand" | undefined;
                format?: "custom" | "normal" | "percentage" | "cny" | "usd" | undefined;
                custom_symbol?: string | undefined;
                custom_symbol_position?: "left" | "right" | undefined;
                decimal_count?: number | undefined;
            } | undefined;
            member_setting?: {
                multi?: boolean | undefined;
            } | undefined;
            datetime_setting?: {
                format?: string | undefined;
            } | undefined;
            single_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            multi_select_setting?: {
                options?: {
                    name: string;
                    color_index?: number | undefined;
                    is_hidden?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            text_setting?: {} | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            resource_type: z.ZodOptional<z.ZodString>;
            resource_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            resource_type?: string | undefined;
            resource_id?: string | undefined;
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
            name: z.ZodOptional<z.ZodString>;
            color_index: z.ZodOptional<z.ZodNumber>;
            insert_before: z.ZodOptional<z.ZodString>;
            insert_after: z.ZodOptional<z.ZodString>;
            is_hidden: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            color_index?: number | undefined;
            is_hidden?: boolean | undefined;
        }, {
            name?: string | undefined;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            color_index?: number | undefined;
            is_hidden?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
        }, {
            custom_field_guid: string;
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
        data: z.ZodOptional<z.ZodObject<{
            option: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                color_index: z.ZodOptional<z.ZodNumber>;
                insert_before: z.ZodOptional<z.ZodString>;
                insert_after: z.ZodOptional<z.ZodString>;
                is_hidden: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            }, {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            }>>;
            update_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            option?: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            } | undefined;
            update_fields?: string[] | undefined;
        }, {
            option?: {
                name?: string | undefined;
                insert_before?: string | undefined;
                insert_after?: string | undefined;
                color_index?: number | undefined;
                is_hidden?: boolean | undefined;
            } | undefined;
            update_fields?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            custom_field_guid: z.ZodString;
            option_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_field_guid: string;
            option_guid: string;
        }, {
            custom_field_guid: string;
            option_guid: string;
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
            name: z.ZodString;
            resource_type: z.ZodString;
            resource_id: z.ZodOptional<z.ZodString>;
            insert_before: z.ZodOptional<z.ZodString>;
            insert_after: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            resource_type: string;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            resource_id?: string | undefined;
        }, {
            name: string;
            resource_type: string;
            insert_before?: string | undefined;
            insert_after?: string | undefined;
            resource_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
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
            section_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            section_guid: string;
        }, {
            section_guid: string;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            resource_type: z.ZodString;
            resource_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resource_type: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_id?: string | undefined;
        }, {
            resource_type: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            resource_id?: string | undefined;
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
            summary: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            due: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            origin: z.ZodOptional<z.ZodObject<{
                platform_i18n_name: z.ZodOptional<z.ZodObject<{
                    en_us: z.ZodOptional<z.ZodString>;
                    zh_cn: z.ZodOptional<z.ZodString>;
                    zh_hk: z.ZodOptional<z.ZodString>;
                    zh_tw: z.ZodOptional<z.ZodString>;
                    ja_jp: z.ZodOptional<z.ZodString>;
                    fr_fr: z.ZodOptional<z.ZodString>;
                    it_it: z.ZodOptional<z.ZodString>;
                    de_de: z.ZodOptional<z.ZodString>;
                    ru_ru: z.ZodOptional<z.ZodString>;
                    th_th: z.ZodOptional<z.ZodString>;
                    es_es: z.ZodOptional<z.ZodString>;
                    ko_kr: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                }>>;
                href: z.ZodOptional<z.ZodObject<{
                    url: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }, {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }>>;
            extra: z.ZodOptional<z.ZodString>;
            completed_at: z.ZodOptional<z.ZodString>;
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }, {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }>, "many">>;
            repeat_rule: z.ZodOptional<z.ZodString>;
            custom_complete: z.ZodOptional<z.ZodObject<{
                pc: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                ios: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
                android: z.ZodOptional<z.ZodObject<{
                    href: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodObject<{
                        en_us: z.ZodOptional<z.ZodString>;
                        zh_cn: z.ZodOptional<z.ZodString>;
                        zh_hk: z.ZodOptional<z.ZodString>;
                        zh_tw: z.ZodOptional<z.ZodString>;
                        ja_jp: z.ZodOptional<z.ZodString>;
                        fr_fr: z.ZodOptional<z.ZodString>;
                        it_it: z.ZodOptional<z.ZodString>;
                        de_de: z.ZodOptional<z.ZodString>;
                        ru_ru: z.ZodOptional<z.ZodString>;
                        th_th: z.ZodOptional<z.ZodString>;
                        es_es: z.ZodOptional<z.ZodString>;
                        ko_kr: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }, {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }, {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            }>>;
            tasklists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tasklist_guid: z.ZodOptional<z.ZodString>;
                section_guid: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }, {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }>, "many">>;
            client_token: z.ZodOptional<z.ZodString>;
            start: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">>;
            mode: z.ZodOptional<z.ZodNumber>;
            is_milestone: z.ZodOptional<z.ZodBoolean>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                guid: z.ZodString;
                number_value: z.ZodOptional<z.ZodString>;
                member_value: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }>, "many">>;
                datetime_value: z.ZodOptional<z.ZodString>;
                single_select_value: z.ZodOptional<z.ZodString>;
                multi_select_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                text_value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }, {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }>, "many">>;
            docx_source: z.ZodOptional<z.ZodObject<{
                token: z.ZodString;
                block_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                block_id: string;
            }, {
                token: string;
                block_id: string;
            }>>;
            positive_reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                relative_fire_minute: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                relative_fire_minute: number;
            }, {
                relative_fire_minute: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            custom_fields?: {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
            mode?: number | undefined;
            is_milestone?: boolean | undefined;
            docx_source?: {
                token: string;
                block_id: string;
            } | undefined;
            positive_reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
        }, {
            summary: string;
            description?: string | undefined;
            extra?: string | undefined;
            client_token?: string | undefined;
            reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
            members?: {
                id: string;
                role: string;
                type?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            custom_fields?: {
                guid: string;
                text_value?: string | undefined;
                number_value?: string | undefined;
                member_value?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                datetime_value?: string | undefined;
                single_select_value?: string | undefined;
                multi_select_value?: string[] | undefined;
            }[] | undefined;
            start?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            due?: {
                timestamp?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            origin?: {
                platform_i18n_name?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                    zh_hk?: string | undefined;
                    zh_tw?: string | undefined;
                    th_th?: string | undefined;
                    es_es?: string | undefined;
                    ko_kr?: string | undefined;
                    de_de?: string | undefined;
                    fr_fr?: string | undefined;
                    it_it?: string | undefined;
                    ru_ru?: string | undefined;
                } | undefined;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } | undefined;
            repeat_rule?: string | undefined;
            completed_at?: string | undefined;
            custom_complete?: {
                pc?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                ios?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
                android?: {
                    href?: string | undefined;
                    tip?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                        zh_hk?: string | undefined;
                        zh_tw?: string | undefined;
                        th_th?: string | undefined;
                        es_es?: string | undefined;
                        ko_kr?: string | undefined;
                        de_de?: string | undefined;
                        fr_fr?: string | undefined;
                        it_it?: string | undefined;
                        ru_ru?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            tasklists?: {
                section_guid?: string | undefined;
                tasklist_guid?: string | undefined;
            }[] | undefined;
            mode?: number | undefined;
            is_milestone?: boolean | undefined;
            docx_source?: {
                token: string;
                block_id: string;
            } | undefined;
            positive_reminders?: {
                relative_fire_minute: number;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
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
            task_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_guid: string;
        }, {
            task_guid: string;
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
            name: z.ZodString;
            subscribers: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">;
            include_keys: z.ZodArray<z.ZodNumber, "many">;
            disabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            subscribers: {
                type?: string | undefined;
                id?: string | undefined;
            }[];
            include_keys: number[];
            disabled?: boolean | undefined;
        }, {
            name: string;
            subscribers: {
                type?: string | undefined;
                id?: string | undefined;
            }[];
            include_keys: number[];
            disabled?: boolean | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
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
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
            activity_subscription_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
            activity_subscription_guid: string;
        }, {
            tasklist_guid: string;
            activity_subscription_guid: string;
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
            limit: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            limit?: number | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            limit?: number | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
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
            name: z.ZodString;
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }, {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
        }, {
            name: string;
            members?: {
                type?: string | undefined;
                id?: string | undefined;
                role?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
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
            tasklist_guid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid?: string | undefined;
        }, {
            tasklist_guid?: string | undefined;
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
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
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
            tasklist: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                owner: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                    role: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                }, {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            }, {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodString, "many">;
            origin_owner_to_role: z.ZodOptional<z.ZodEnum<["editor", "viewer", "none"]>>;
        }, "strip", z.ZodTypeAny, {
            update_fields: string[];
            tasklist: {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            };
            origin_owner_to_role?: "none" | "editor" | "viewer" | undefined;
        }, {
            update_fields: string[];
            tasklist: {
                name?: string | undefined;
                owner?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    role?: string | undefined;
                } | undefined;
            };
            origin_owner_to_role?: "none" | "editor" | "viewer" | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: string | undefined;
        }, {
            user_id_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            tasklist_guid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tasklist_guid: string;
        }, {
            tasklist_guid: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
