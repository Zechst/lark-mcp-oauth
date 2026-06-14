import { z } from 'zod';
export type helpdeskV1ToolName = 'helpdesk.v1.notification.cancelApprove' | 'helpdesk.v1.notification.cancelSend' | 'helpdesk.v1.notification.create' | 'helpdesk.v1.notification.executeSend' | 'helpdesk.v1.notification.get' | 'helpdesk.v1.notification.patch' | 'helpdesk.v1.notification.preview' | 'helpdesk.v1.notification.submitApprove';
export declare const helpdeskV1NotificationCancelApprove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationCancelSend: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            is_recall: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            is_recall: boolean;
        }, {
            is_recall: boolean;
        }>;
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationCreate: {
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
            job_name: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNumber>;
            create_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            created_at: z.ZodOptional<z.ZodString>;
            update_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            updated_at: z.ZodOptional<z.ZodString>;
            target_user_count: z.ZodOptional<z.ZodNumber>;
            sent_user_count: z.ZodOptional<z.ZodNumber>;
            read_user_count: z.ZodOptional<z.ZodNumber>;
            send_at: z.ZodOptional<z.ZodString>;
            push_content: z.ZodOptional<z.ZodString>;
            push_type: z.ZodOptional<z.ZodNumber>;
            push_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            user_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>, "many">>;
            department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            chat_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                chat_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }>, "many">>;
            ext: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }>>;
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
export declare const helpdeskV1NotificationExecuteSend: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            send_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            send_at: string;
        }, {
            send_at: string;
        }>;
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationGet: {
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
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationPatch: {
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
            job_name: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNumber>;
            create_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            created_at: z.ZodOptional<z.ZodString>;
            update_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            updated_at: z.ZodOptional<z.ZodString>;
            target_user_count: z.ZodOptional<z.ZodNumber>;
            sent_user_count: z.ZodOptional<z.ZodNumber>;
            read_user_count: z.ZodOptional<z.ZodNumber>;
            send_at: z.ZodOptional<z.ZodString>;
            push_content: z.ZodOptional<z.ZodString>;
            push_type: z.ZodOptional<z.ZodNumber>;
            push_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            user_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>, "many">>;
            department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            chat_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                chat_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }>, "many">>;
            ext: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationPreview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1NotificationSubmitApprove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            reason: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reason: string;
        }, {
            reason: string;
        }>;
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const helpdeskV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            notification_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            notification_id: string;
        }, {
            notification_id: string;
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
            id: z.ZodOptional<z.ZodString>;
            job_name: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNumber>;
            create_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            created_at: z.ZodOptional<z.ZodString>;
            update_user: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>>;
            updated_at: z.ZodOptional<z.ZodString>;
            target_user_count: z.ZodOptional<z.ZodNumber>;
            sent_user_count: z.ZodOptional<z.ZodNumber>;
            read_user_count: z.ZodOptional<z.ZodNumber>;
            send_at: z.ZodOptional<z.ZodString>;
            push_content: z.ZodOptional<z.ZodString>;
            push_type: z.ZodOptional<z.ZodNumber>;
            push_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_type: z.ZodOptional<z.ZodNumber>;
            new_staff_scope_department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            user_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodString>;
                avatar_url: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }, {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }>, "many">>;
            department_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                department_id?: string | undefined;
            }, {
                name?: string | undefined;
                department_id?: string | undefined;
            }>, "many">>;
            chat_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                chat_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }, {
                name?: string | undefined;
                chat_id?: string | undefined;
            }>, "many">>;
            ext: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }, {
            status?: number | undefined;
            id?: string | undefined;
            job_name?: string | undefined;
            create_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            created_at?: string | undefined;
            update_user?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            } | undefined;
            updated_at?: string | undefined;
            target_user_count?: number | undefined;
            sent_user_count?: number | undefined;
            read_user_count?: number | undefined;
            send_at?: string | undefined;
            push_content?: string | undefined;
            push_type?: number | undefined;
            push_scope_type?: number | undefined;
            new_staff_scope_type?: number | undefined;
            new_staff_scope_department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            user_list?: {
                user_id?: string | undefined;
                name?: string | undefined;
                avatar_url?: string | undefined;
            }[] | undefined;
            department_list?: {
                name?: string | undefined;
                department_id?: string | undefined;
            }[] | undefined;
            chat_list?: {
                name?: string | undefined;
                chat_id?: string | undefined;
            }[] | undefined;
            ext?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
