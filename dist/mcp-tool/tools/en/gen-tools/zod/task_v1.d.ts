import { z } from 'zod';
export type taskV1ToolName = 'task.v1.task.batchDeleteCollaborator' | 'task.v1.task.batchDeleteFollower' | 'task.v1.taskCollaborator.create' | 'task.v1.taskCollaborator.delete' | 'task.v1.taskCollaborator.list' | 'task.v1.taskComment.create' | 'task.v1.taskComment.delete' | 'task.v1.taskComment.get' | 'task.v1.taskComment.list' | 'task.v1.taskComment.update' | 'task.v1.task.complete' | 'task.v1.task.create' | 'task.v1.task.delete' | 'task.v1.taskFollower.create' | 'task.v1.taskFollower.delete' | 'task.v1.taskFollower.list' | 'task.v1.task.get' | 'task.v1.task.list' | 'task.v1.task.patch' | 'task.v1.taskReminder.create' | 'task.v1.taskReminder.delete' | 'task.v1.taskReminder.list' | 'task.v1.task.uncomplete';
export declare const taskV1TaskBatchDeleteCollaborator: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id_list?: string[] | undefined;
        }, {
            id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskBatchDeleteFollower: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id_list?: string[] | undefined;
        }, {
            id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCollaboratorCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            id_list?: string[] | undefined;
        }, {
            id?: string | undefined;
            id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCollaboratorDelete: {
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
            task_id: z.ZodString;
            collaborator_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            collaborator_id: string;
        }, {
            task_id: string;
            collaborator_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCollaboratorList: {
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
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCommentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            content: z.ZodOptional<z.ZodString>;
            parent_id: z.ZodOptional<z.ZodString>;
            create_milli_time: z.ZodOptional<z.ZodString>;
            rich_content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            parent_id?: string | undefined;
            create_milli_time?: string | undefined;
            rich_content?: string | undefined;
        }, {
            content?: string | undefined;
            parent_id?: string | undefined;
            create_milli_time?: string | undefined;
            rich_content?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCommentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            comment_id: string;
        }, {
            task_id: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCommentGet: {
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
            task_id: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            comment_id: string;
        }, {
            task_id: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCommentList: {
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
            list_direction: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            list_direction?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            list_direction?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCommentUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            content: z.ZodOptional<z.ZodString>;
            rich_content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            rich_content?: string | undefined;
        }, {
            content?: string | undefined;
            rich_content?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            comment_id: string;
        }, {
            task_id: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskComplete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            extra: z.ZodOptional<z.ZodString>;
            due: z.ZodOptional<z.ZodObject<{
                time: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            origin: z.ZodObject<{
                platform_i18n_name: z.ZodString;
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
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }, {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }>;
            can_edit: z.ZodOptional<z.ZodBoolean>;
            custom: z.ZodOptional<z.ZodString>;
            collaborator_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            follower_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repeat_rule: z.ZodOptional<z.ZodString>;
            rich_summary: z.ZodOptional<z.ZodString>;
            rich_description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            origin: {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            };
            custom?: string | undefined;
            description?: string | undefined;
            extra?: string | undefined;
            summary?: string | undefined;
            due?: {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            can_edit?: boolean | undefined;
            collaborator_ids?: string[] | undefined;
            follower_ids?: string[] | undefined;
            repeat_rule?: string | undefined;
            rich_summary?: string | undefined;
            rich_description?: string | undefined;
        }, {
            origin: {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            };
            custom?: string | undefined;
            description?: string | undefined;
            extra?: string | undefined;
            summary?: string | undefined;
            due?: {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            can_edit?: boolean | undefined;
            collaborator_ids?: string[] | undefined;
            follower_ids?: string[] | undefined;
            repeat_rule?: string | undefined;
            rich_summary?: string | undefined;
            rich_description?: string | undefined;
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
export declare const taskV1TaskDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskFollowerCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            id_list?: string[] | undefined;
        }, {
            id?: string | undefined;
            id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskFollowerDelete: {
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
            task_id: z.ZodString;
            follower_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            follower_id: string;
        }, {
            task_id: string;
            follower_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskFollowerList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
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
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskGet: {
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
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskList: {
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
            start_create_time: z.ZodOptional<z.ZodString>;
            end_create_time: z.ZodOptional<z.ZodString>;
            task_completed: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_create_time?: string | undefined;
            end_create_time?: string | undefined;
            task_completed?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_create_time?: string | undefined;
            end_create_time?: string | undefined;
            task_completed?: boolean | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            task: z.ZodObject<{
                summary: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                extra: z.ZodOptional<z.ZodString>;
                due: z.ZodOptional<z.ZodObject<{
                    time: z.ZodOptional<z.ZodString>;
                    timezone: z.ZodOptional<z.ZodString>;
                    is_all_day: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                }, {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                }>>;
                origin: z.ZodOptional<z.ZodObject<{
                    platform_i18n_name: z.ZodString;
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
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                }, {
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                }>>;
                can_edit: z.ZodOptional<z.ZodBoolean>;
                custom: z.ZodOptional<z.ZodString>;
                followers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }, {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }>, "many">>;
                collaborators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }, {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }>, "many">>;
                collaborator_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                follower_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repeat_rule: z.ZodOptional<z.ZodString>;
                rich_summary: z.ZodOptional<z.ZodString>;
                rich_description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                custom?: string | undefined;
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                due?: {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                origin?: {
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                } | undefined;
                can_edit?: boolean | undefined;
                collaborator_ids?: string[] | undefined;
                follower_ids?: string[] | undefined;
                repeat_rule?: string | undefined;
                rich_summary?: string | undefined;
                rich_description?: string | undefined;
                followers?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                collaborators?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
            }, {
                custom?: string | undefined;
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                due?: {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                origin?: {
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                } | undefined;
                can_edit?: boolean | undefined;
                collaborator_ids?: string[] | undefined;
                follower_ids?: string[] | undefined;
                repeat_rule?: string | undefined;
                rich_summary?: string | undefined;
                rich_description?: string | undefined;
                followers?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                collaborators?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            task: {
                custom?: string | undefined;
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                due?: {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                origin?: {
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                } | undefined;
                can_edit?: boolean | undefined;
                collaborator_ids?: string[] | undefined;
                follower_ids?: string[] | undefined;
                repeat_rule?: string | undefined;
                rich_summary?: string | undefined;
                rich_description?: string | undefined;
                followers?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                collaborators?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
            };
            update_fields: string[];
        }, {
            task: {
                custom?: string | undefined;
                description?: string | undefined;
                extra?: string | undefined;
                summary?: string | undefined;
                due?: {
                    time?: string | undefined;
                    timezone?: string | undefined;
                    is_all_day?: boolean | undefined;
                } | undefined;
                origin?: {
                    platform_i18n_name: string;
                    href?: {
                        title?: string | undefined;
                        url?: string | undefined;
                    } | undefined;
                } | undefined;
                can_edit?: boolean | undefined;
                collaborator_ids?: string[] | undefined;
                follower_ids?: string[] | undefined;
                repeat_rule?: string | undefined;
                rich_summary?: string | undefined;
                rich_description?: string | undefined;
                followers?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                collaborators?: {
                    id?: string | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
            };
            update_fields: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskReminderCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            relative_fire_minute: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            relative_fire_minute: number;
        }, {
            relative_fire_minute: number;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskReminderDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
            reminder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
            reminder_id: string;
        }, {
            task_id: string;
            reminder_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskReminderList: {
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
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1TaskUncomplete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const taskV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
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
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            extra: z.ZodOptional<z.ZodString>;
            due: z.ZodOptional<z.ZodObject<{
                time: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
                is_all_day: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            }, {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            }>>;
            origin: z.ZodObject<{
                platform_i18n_name: z.ZodString;
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
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }, {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }>;
            can_edit: z.ZodOptional<z.ZodBoolean>;
            custom: z.ZodOptional<z.ZodString>;
            collaborator_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            follower_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repeat_rule: z.ZodOptional<z.ZodString>;
            rich_summary: z.ZodOptional<z.ZodString>;
            rich_description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            origin: {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            };
            custom?: string | undefined;
            description?: string | undefined;
            extra?: string | undefined;
            summary?: string | undefined;
            due?: {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            can_edit?: boolean | undefined;
            collaborator_ids?: string[] | undefined;
            follower_ids?: string[] | undefined;
            repeat_rule?: string | undefined;
            rich_summary?: string | undefined;
            rich_description?: string | undefined;
        }, {
            origin: {
                platform_i18n_name: string;
                href?: {
                    title?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            };
            custom?: string | undefined;
            description?: string | undefined;
            extra?: string | undefined;
            summary?: string | undefined;
            due?: {
                time?: string | undefined;
                timezone?: string | undefined;
                is_all_day?: boolean | undefined;
            } | undefined;
            can_edit?: boolean | undefined;
            collaborator_ids?: string[] | undefined;
            follower_ids?: string[] | undefined;
            repeat_rule?: string | undefined;
            rich_summary?: string | undefined;
            rich_description?: string | undefined;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            start_create_time: z.ZodOptional<z.ZodString>;
            end_create_time: z.ZodOptional<z.ZodString>;
            task_completed: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_create_time?: string | undefined;
            end_create_time?: string | undefined;
            task_completed?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_create_time?: string | undefined;
            end_create_time?: string | undefined;
            task_completed?: boolean | undefined;
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
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
