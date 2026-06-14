import { z } from 'zod';
export type approvalV4ToolName = 'approval.v4.approval.create' | 'approval.v4.approval.get' | 'approval.v4.approval.subscribe' | 'approval.v4.approval.unsubscribe' | 'approval.v4.externalApproval.create' | 'approval.v4.externalApproval.get' | 'approval.v4.externalInstance.check' | 'approval.v4.externalInstance.create' | 'approval.v4.externalTask.list' | 'approval.v4.instance.addSign' | 'approval.v4.instance.cancel' | 'approval.v4.instance.cc' | 'approval.v4.instanceComment.create' | 'approval.v4.instanceComment.delete' | 'approval.v4.instanceComment.list' | 'approval.v4.instanceComment.remove' | 'approval.v4.instance.create' | 'approval.v4.instance.get' | 'approval.v4.instance.list' | 'approval.v4.instance.preview' | 'approval.v4.instance.query' | 'approval.v4.instance.searchCc' | 'approval.v4.instance.specifiedRollback' | 'approval.v4.task.approve' | 'approval.v4.task.query' | 'approval.v4.task.reject' | 'approval.v4.task.resubmit' | 'approval.v4.task.search' | 'approval.v4.task.transfer';
export declare const approvalV4ApprovalCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_name: z.ZodString;
            approval_code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            viewers: z.ZodArray<z.ZodObject<{
                viewer_type: z.ZodOptional<z.ZodEnum<["TENANT", "DEPARTMENT", "USER", "NONE"]>>;
                viewer_user_id: z.ZodOptional<z.ZodString>;
                viewer_department_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }>, "many">;
            form: z.ZodObject<{
                form_content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                form_content: string;
            }, {
                form_content: string;
            }>;
            node_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                node_type: z.ZodOptional<z.ZodEnum<["AND", "OR", "SEQUENTIAL"]>>;
                approver: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["Supervisor", "SupervisorTopDown", "DepartmentManager", "DepartmentManagerTopDown", "Personal", "Free"]>;
                    user_id: z.ZodOptional<z.ZodString>;
                    level: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }>, "many">>;
                ccer: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["Supervisor", "SupervisorTopDown", "DepartmentManager", "DepartmentManagerTopDown", "Personal", "Free"]>;
                    user_id: z.ZodOptional<z.ZodString>;
                    level: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }>, "many">>;
                privilege_field: z.ZodOptional<z.ZodObject<{
                    writable: z.ZodArray<z.ZodString, "many">;
                    readable: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    readable: string[];
                    writable: string[];
                }, {
                    readable: string[];
                    writable: string[];
                }>>;
                approver_chosen_multi: z.ZodOptional<z.ZodBoolean>;
                approver_chosen_range: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodOptional<z.ZodEnum<["ALL", "PERSONAL", "ROLE"]>>;
                    id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }, {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }>, "many">>;
                starter_assignee: z.ZodOptional<z.ZodEnum<["STARTER", "AUTO_PASS", "SUPERVISOR", "DEPARTMENT_MANAGER"]>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }, {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }>, "many">;
            settings: z.ZodOptional<z.ZodObject<{
                revert_interval: z.ZodOptional<z.ZodNumber>;
                revert_option: z.ZodOptional<z.ZodNumber>;
                reject_option: z.ZodOptional<z.ZodNumber>;
                quick_approval_option: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            }, {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            }>>;
            config: z.ZodOptional<z.ZodObject<{
                can_update_viewer: z.ZodBoolean;
                can_update_form: z.ZodBoolean;
                can_update_process: z.ZodBoolean;
                can_update_revert: z.ZodBoolean;
                help_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            }, {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            }>>;
            icon: z.ZodOptional<z.ZodNumber>;
            i18n_resources: z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">;
            process_manager_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_name: string;
            viewers: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[];
            form: {
                form_content: string;
            };
            node_list: {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }[];
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            description?: string | undefined;
            settings?: {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            } | undefined;
            approval_code?: string | undefined;
            config?: {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            } | undefined;
            icon?: number | undefined;
            process_manager_ids?: string[] | undefined;
        }, {
            approval_name: string;
            viewers: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[];
            form: {
                form_content: string;
            };
            node_list: {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }[];
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            description?: string | undefined;
            settings?: {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            } | undefined;
            approval_code?: string | undefined;
            config?: {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            } | undefined;
            icon?: number | undefined;
            process_manager_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
    };
};
export declare const approvalV4ApprovalGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
            with_admin_id: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            with_admin_id?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            with_admin_id?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            approval_code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
        }, {
            approval_code: string;
        }>;
    };
};
export declare const approvalV4ApprovalSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            approval_code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
        }, {
            approval_code: string;
        }>;
    };
};
export declare const approvalV4ApprovalUnsubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            approval_code: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            approval_code?: string | undefined;
        }, {
            approval_code?: string | undefined;
        }>>;
    };
};
export declare const approvalV4ExternalApprovalCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_name: z.ZodString;
            approval_code: z.ZodString;
            group_code: z.ZodString;
            group_name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            external: z.ZodObject<{
                biz_name: z.ZodOptional<z.ZodString>;
                biz_type: z.ZodOptional<z.ZodString>;
                create_link_mobile: z.ZodOptional<z.ZodString>;
                create_link_pc: z.ZodOptional<z.ZodString>;
                support_pc: z.ZodOptional<z.ZodBoolean>;
                support_mobile: z.ZodOptional<z.ZodBoolean>;
                support_batch_read: z.ZodOptional<z.ZodBoolean>;
                enable_mark_readed: z.ZodOptional<z.ZodBoolean>;
                enable_quick_operate: z.ZodOptional<z.ZodBoolean>;
                action_callback_url: z.ZodOptional<z.ZodString>;
                action_callback_token: z.ZodOptional<z.ZodString>;
                action_callback_key: z.ZodOptional<z.ZodString>;
                allow_batch_operate: z.ZodOptional<z.ZodBoolean>;
                exclude_efficiency_statistics: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            }, {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            }>;
            viewers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                viewer_type: z.ZodOptional<z.ZodEnum<["TENANT", "DEPARTMENT", "USER", "NONE"]>>;
                viewer_user_id: z.ZodOptional<z.ZodString>;
                viewer_department_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }>, "many">>;
            i18n_resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">>;
            managers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_name: string;
            approval_code: string;
            group_code: string;
            external: {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            };
            description?: string | undefined;
            viewers?: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[] | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            group_name?: string | undefined;
            managers?: string[] | undefined;
        }, {
            approval_name: string;
            approval_code: string;
            group_code: string;
            external: {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            };
            description?: string | undefined;
            viewers?: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[] | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            group_name?: string | undefined;
            managers?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
    };
};
export declare const approvalV4ExternalApprovalGet: {
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
            approval_code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
        }, {
            approval_code: string;
        }>;
    };
};
export declare const approvalV4ExternalInstanceCheck: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            instances: z.ZodArray<z.ZodObject<{
                instance_id: z.ZodString;
                update_time: z.ZodString;
                tasks: z.ZodArray<z.ZodObject<{
                    task_id: z.ZodString;
                    update_time: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    task_id: string;
                    update_time: string;
                }, {
                    task_id: string;
                    update_time: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }, {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            instances: {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }[];
        }, {
            instances: {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }[];
        }>;
    };
};
export declare const approvalV4ExternalInstanceCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "CANCELED", "DELETED", "HIDDEN", "TERMINATED"]>;
            extra: z.ZodOptional<z.ZodString>;
            instance_id: z.ZodString;
            links: z.ZodObject<{
                pc_link: z.ZodString;
                mobile_link: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                pc_link: string;
                mobile_link?: string | undefined;
            }, {
                pc_link: string;
                mobile_link?: string | undefined;
            }>;
            title: z.ZodOptional<z.ZodString>;
            form: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                name?: string | undefined;
            }, {
                value?: string | undefined;
                name?: string | undefined;
            }>, "many">>;
            user_id: z.ZodOptional<z.ZodString>;
            user_name: z.ZodOptional<z.ZodString>;
            open_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            department_name: z.ZodOptional<z.ZodString>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            update_time: z.ZodString;
            display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
            update_mode: z.ZodOptional<z.ZodEnum<["REPLACE", "UPDATE"]>>;
            task_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                task_id: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                open_id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                links: z.ZodObject<{
                    pc_link: z.ZodString;
                    mobile_link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }>;
                status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "TRANSFERRED", "DONE"]>;
                extra: z.ZodOptional<z.ZodString>;
                create_time: z.ZodString;
                end_time: z.ZodString;
                update_time: z.ZodOptional<z.ZodString>;
                action_context: z.ZodOptional<z.ZodString>;
                action_configs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    action_type: z.ZodString;
                    action_name: z.ZodOptional<z.ZodString>;
                    is_need_reason: z.ZodOptional<z.ZodBoolean>;
                    is_reason_required: z.ZodOptional<z.ZodBoolean>;
                    is_need_attachment: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }, {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }>, "many">>;
                display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
                exclude_statistics: z.ZodOptional<z.ZodBoolean>;
                node_id: z.ZodOptional<z.ZodString>;
                node_name: z.ZodOptional<z.ZodString>;
                generate_type: z.ZodOptional<z.ZodEnum<["EXTERNAL_CONSIGN", "DEFAULT"]>>;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }>, "many">>;
            cc_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cc_id: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                open_id: z.ZodOptional<z.ZodString>;
                links: z.ZodObject<{
                    pc_link: z.ZodString;
                    mobile_link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }>;
                read_status: z.ZodEnum<["READ", "UNREAD"]>;
                extra: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                create_time: z.ZodString;
                update_time: z.ZodString;
                display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
            }, "strip", z.ZodTypeAny, {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }, {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }>, "many">>;
            i18n_resources: z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP", "zh-HK", "zh-TW", "de-DE", "es-ES", "fr-FR", "id-ID", "it-IT", "ko-KR", "pt-BR", "th-TH", "vi-VN", "ms-MY", "ru-RU"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">;
            trusteeship_url_token: z.ZodOptional<z.ZodString>;
            trusteeship_user_id_type: z.ZodOptional<z.ZodString>;
            trusteeship_urls: z.ZodOptional<z.ZodObject<{
                form_detail_url: z.ZodOptional<z.ZodString>;
                action_definition_url: z.ZodOptional<z.ZodString>;
                approval_node_url: z.ZodOptional<z.ZodString>;
                action_callback_url: z.ZodOptional<z.ZodString>;
                pull_business_data_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            }, {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            }>>;
            trusteeship_cache_config: z.ZodOptional<z.ZodObject<{
                form_policy: z.ZodOptional<z.ZodEnum<["DISABLE", "IMMUTABLE", "BY_NODE", "BY_USER"]>>;
                form_vary_with_locale: z.ZodOptional<z.ZodBoolean>;
                form_version: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            }, {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            }>>;
            resource_region: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "DELETED" | "HIDDEN" | "TERMINATED";
            start_time: string;
            end_time: string;
            approval_code: string;
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            instance_id: string;
            update_time: string;
            links: {
                pc_link: string;
                mobile_link?: string | undefined;
            };
            user_id?: string | undefined;
            open_id?: string | undefined;
            user_name?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            extra?: string | undefined;
            form?: {
                value?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            department_name?: string | undefined;
            display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            update_mode?: "REPLACE" | "UPDATE" | undefined;
            task_list?: {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }[] | undefined;
            cc_list?: {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }[] | undefined;
            trusteeship_url_token?: string | undefined;
            trusteeship_user_id_type?: string | undefined;
            trusteeship_urls?: {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            } | undefined;
            trusteeship_cache_config?: {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            } | undefined;
            resource_region?: string | undefined;
        }, {
            status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "DELETED" | "HIDDEN" | "TERMINATED";
            start_time: string;
            end_time: string;
            approval_code: string;
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            instance_id: string;
            update_time: string;
            links: {
                pc_link: string;
                mobile_link?: string | undefined;
            };
            user_id?: string | undefined;
            open_id?: string | undefined;
            user_name?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            extra?: string | undefined;
            form?: {
                value?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            department_name?: string | undefined;
            display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            update_mode?: "REPLACE" | "UPDATE" | undefined;
            task_list?: {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }[] | undefined;
            cc_list?: {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }[] | undefined;
            trusteeship_url_token?: string | undefined;
            trusteeship_user_id_type?: string | undefined;
            trusteeship_urls?: {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            } | undefined;
            trusteeship_cache_config?: {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            } | undefined;
            resource_region?: string | undefined;
        }>;
    };
};
export declare const approvalV4ExternalTaskList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            approval_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            instance_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            status: z.ZodOptional<z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "TRANSFERRED", "DONE"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | undefined;
            user_ids?: string[] | undefined;
            approval_codes?: string[] | undefined;
            instance_ids?: string[] | undefined;
        }, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | undefined;
            user_ids?: string[] | undefined;
            approval_codes?: string[] | undefined;
            instance_ids?: string[] | undefined;
        }>>;
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
    };
};
export declare const approvalV4InstanceAddSign: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id: z.ZodString;
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            task_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            add_sign_user_ids: z.ZodArray<z.ZodString, "many">;
            add_sign_type: z.ZodNumber;
            approval_method: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            add_sign_user_ids: string[];
            add_sign_type: number;
            comment?: string | undefined;
            approval_method?: number | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            add_sign_user_ids: string[];
            add_sign_type: number;
            comment?: string | undefined;
            approval_method?: number | undefined;
        }>;
    };
};
export declare const approvalV4InstanceCancel: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            approval_code: string;
            instance_code: string;
        }, {
            user_id: string;
            approval_code: string;
            instance_code: string;
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
export declare const approvalV4InstanceCc: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
            cc_user_ids: z.ZodArray<z.ZodString, "many">;
            comment: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            cc_user_ids: string[];
            approval_code: string;
            instance_code: string;
            comment?: string | undefined;
        }, {
            user_id: string;
            cc_user_ids: string[];
            approval_code: string;
            instance_code: string;
            comment?: string | undefined;
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
export declare const approvalV4InstanceCommentCreate: {
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
            at_info_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodString;
                name: z.ZodString;
                offset: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                offset: string;
                user_id: string;
                name: string;
            }, {
                offset: string;
                user_id: string;
                name: string;
            }>, "many">>;
            parent_comment_id: z.ZodOptional<z.ZodString>;
            comment_id: z.ZodOptional<z.ZodString>;
            disable_bot: z.ZodOptional<z.ZodBoolean>;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            extra?: string | undefined;
            at_info_list?: {
                offset: string;
                user_id: string;
                name: string;
            }[] | undefined;
            parent_comment_id?: string | undefined;
            comment_id?: string | undefined;
            disable_bot?: boolean | undefined;
        }, {
            content?: string | undefined;
            extra?: string | undefined;
            at_info_list?: {
                offset: string;
                user_id: string;
                name: string;
            }[] | undefined;
            parent_comment_id?: string | undefined;
            comment_id?: string | undefined;
            disable_bot?: boolean | undefined;
        }>>;
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
        }>;
    };
};
export declare const approvalV4InstanceCommentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
            comment_id: string;
        }, {
            instance_id: string;
            comment_id: string;
        }>;
    };
};
export declare const approvalV4InstanceCommentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
        }>;
    };
};
export declare const approvalV4InstanceCommentRemove: {
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
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
        }>;
    };
};
export declare const approvalV4InstanceCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            open_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            form: z.ZodString;
            node_approver_user_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_approver_open_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_cc_user_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_cc_open_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            uuid: z.ZodOptional<z.ZodString>;
            allow_resubmit: z.ZodOptional<z.ZodBoolean>;
            allow_submit_again: z.ZodOptional<z.ZodBoolean>;
            cancel_bot_notification: z.ZodOptional<z.ZodString>;
            forbid_revoke: z.ZodOptional<z.ZodBoolean>;
            i18n_resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">>;
            title: z.ZodOptional<z.ZodString>;
            title_display_method: z.ZodOptional<z.ZodNumber>;
            node_auto_approval_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_id_type: z.ZodOptional<z.ZodEnum<["CUSTOM", "NON_CUSTOM"]>>;
                node_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }, {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
            form: string;
            user_id?: string | undefined;
            open_id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            node_approver_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_approver_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            uuid?: string | undefined;
            allow_resubmit?: boolean | undefined;
            allow_submit_again?: boolean | undefined;
            cancel_bot_notification?: string | undefined;
            forbid_revoke?: boolean | undefined;
            title_display_method?: number | undefined;
            node_auto_approval_list?: {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }[] | undefined;
        }, {
            approval_code: string;
            form: string;
            user_id?: string | undefined;
            open_id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            node_approver_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_approver_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            uuid?: string | undefined;
            allow_resubmit?: boolean | undefined;
            allow_submit_again?: boolean | undefined;
            cancel_bot_notification?: string | undefined;
            forbid_revoke?: boolean | undefined;
            title_display_method?: number | undefined;
            node_auto_approval_list?: {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const approvalV4InstanceGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
            user_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
        }, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
        }>>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
        }>;
    };
};
export declare const approvalV4InstanceList: {
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
            approval_code: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            approval_code: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            approval_code: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
    };
};
export declare const approvalV4InstancePreview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id: z.ZodString;
            approval_code: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            form: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodString>;
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            department_id?: string | undefined;
            task_id?: string | undefined;
            approval_code?: string | undefined;
            form?: string | undefined;
            locale?: string | undefined;
            instance_code?: string | undefined;
        }, {
            user_id: string;
            department_id?: string | undefined;
            task_id?: string | undefined;
            approval_code?: string | undefined;
            form?: string | undefined;
            locale?: string | undefined;
            instance_code?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "user_id", "union_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const approvalV4InstanceQuery: {
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
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            instance_title: z.ZodOptional<z.ZodString>;
            instance_status: z.ZodOptional<z.ZodEnum<["PENDING", "RECALL", "REJECT", "DELETED", "APPROVED", "ALL"]>>;
            instance_start_time_from: z.ZodOptional<z.ZodString>;
            instance_start_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            instance_title?: string | undefined;
            instance_status?: "ALL" | "PENDING" | "APPROVED" | "DELETED" | "RECALL" | "REJECT" | undefined;
            instance_start_time_from?: string | undefined;
            instance_start_time_to?: string | undefined;
        }, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            instance_title?: string | undefined;
            instance_status?: "ALL" | "PENDING" | "APPROVED" | "DELETED" | "RECALL" | "REJECT" | undefined;
            instance_start_time_from?: string | undefined;
            instance_start_time_to?: string | undefined;
        }>>;
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
    };
};
export declare const approvalV4InstanceSearchCc: {
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
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            cc_title: z.ZodOptional<z.ZodString>;
            read_status: z.ZodOptional<z.ZodEnum<["READ", "UNREAD", "ALL"]>>;
            cc_create_time_from: z.ZodOptional<z.ZodString>;
            cc_create_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            read_status?: "ALL" | "READ" | "UNREAD" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            cc_title?: string | undefined;
            cc_create_time_from?: string | undefined;
            cc_create_time_to?: string | undefined;
        }, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            read_status?: "ALL" | "READ" | "UNREAD" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            cc_title?: string | undefined;
            cc_create_time_from?: string | undefined;
            cc_create_time_to?: string | undefined;
        }>>;
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
    };
};
export declare const approvalV4InstanceSpecifiedRollback: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id: z.ZodString;
            task_id: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            extra: z.ZodOptional<z.ZodString>;
            task_def_key_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            task_def_key_list: string[];
            extra?: string | undefined;
            reason?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            task_def_key_list: string[];
            extra?: string | undefined;
            reason?: string | undefined;
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
export declare const approvalV4TaskApprove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            task_id: z.ZodString;
            form: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            form?: string | undefined;
            comment?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            form?: string | undefined;
            comment?: string | undefined;
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
export declare const approvalV4TaskQuery: {
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
            user_id: z.ZodString;
            topic: z.ZodEnum<["1", "2", "3", "17", "18"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            topic: "1" | "2" | "3" | "17" | "18";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            topic: "1" | "2" | "3" | "17" | "18";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const approvalV4TaskReject: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            task_id: z.ZodString;
            form: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            form?: string | undefined;
            comment?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            form?: string | undefined;
            comment?: string | undefined;
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
export declare const approvalV4TaskResubmit: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            task_id: z.ZodString;
            form: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            form: string;
            instance_code: string;
            comment?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            form: string;
            instance_code: string;
            comment?: string | undefined;
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
export declare const approvalV4TaskSearch: {
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
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            task_title: z.ZodOptional<z.ZodString>;
            task_status: z.ZodOptional<z.ZodEnum<["PENDING", "REJECTED", "APPROVED", "TRANSFERRED", "DONE", "RM_REPEAT", "PROCESSED", "ALL"]>>;
            task_start_time_from: z.ZodOptional<z.ZodString>;
            task_start_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
            task_status_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            order?: number | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            task_title?: string | undefined;
            task_status?: "ALL" | "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | "RM_REPEAT" | "PROCESSED" | undefined;
            task_start_time_from?: string | undefined;
            task_start_time_to?: string | undefined;
            task_status_list?: string[] | undefined;
        }, {
            user_id?: string | undefined;
            order?: number | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            task_title?: string | undefined;
            task_status?: "ALL" | "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | "RM_REPEAT" | "PROCESSED" | undefined;
            task_start_time_from?: string | undefined;
            task_start_time_to?: string | undefined;
            task_status_list?: string[] | undefined;
        }>>;
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
    };
};
export declare const approvalV4TaskTransfer: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            transfer_user_id: z.ZodString;
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            transfer_user_id: string;
            comment?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            transfer_user_id: string;
            comment?: string | undefined;
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
export declare const approvalV4Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_name: z.ZodString;
            approval_code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            viewers: z.ZodArray<z.ZodObject<{
                viewer_type: z.ZodOptional<z.ZodEnum<["TENANT", "DEPARTMENT", "USER", "NONE"]>>;
                viewer_user_id: z.ZodOptional<z.ZodString>;
                viewer_department_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }>, "many">;
            form: z.ZodObject<{
                form_content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                form_content: string;
            }, {
                form_content: string;
            }>;
            node_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                node_type: z.ZodOptional<z.ZodEnum<["AND", "OR", "SEQUENTIAL"]>>;
                approver: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["Supervisor", "SupervisorTopDown", "DepartmentManager", "DepartmentManagerTopDown", "Personal", "Free"]>;
                    user_id: z.ZodOptional<z.ZodString>;
                    level: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }>, "many">>;
                ccer: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["Supervisor", "SupervisorTopDown", "DepartmentManager", "DepartmentManagerTopDown", "Personal", "Free"]>;
                    user_id: z.ZodOptional<z.ZodString>;
                    level: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }, {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }>, "many">>;
                privilege_field: z.ZodOptional<z.ZodObject<{
                    writable: z.ZodArray<z.ZodString, "many">;
                    readable: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    readable: string[];
                    writable: string[];
                }, {
                    readable: string[];
                    writable: string[];
                }>>;
                approver_chosen_multi: z.ZodOptional<z.ZodBoolean>;
                approver_chosen_range: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodOptional<z.ZodEnum<["ALL", "PERSONAL", "ROLE"]>>;
                    id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }, {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }>, "many">>;
                starter_assignee: z.ZodOptional<z.ZodEnum<["STARTER", "AUTO_PASS", "SUPERVISOR", "DEPARTMENT_MANAGER"]>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }, {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }>, "many">;
            settings: z.ZodOptional<z.ZodObject<{
                revert_interval: z.ZodOptional<z.ZodNumber>;
                revert_option: z.ZodOptional<z.ZodNumber>;
                reject_option: z.ZodOptional<z.ZodNumber>;
                quick_approval_option: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            }, {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            }>>;
            config: z.ZodOptional<z.ZodObject<{
                can_update_viewer: z.ZodBoolean;
                can_update_form: z.ZodBoolean;
                can_update_process: z.ZodBoolean;
                can_update_revert: z.ZodBoolean;
                help_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            }, {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            }>>;
            icon: z.ZodOptional<z.ZodNumber>;
            i18n_resources: z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">;
            process_manager_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_name: string;
            viewers: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[];
            form: {
                form_content: string;
            };
            node_list: {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }[];
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            description?: string | undefined;
            settings?: {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            } | undefined;
            approval_code?: string | undefined;
            config?: {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            } | undefined;
            icon?: number | undefined;
            process_manager_ids?: string[] | undefined;
        }, {
            approval_name: string;
            viewers: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[];
            form: {
                form_content: string;
            };
            node_list: {
                id: string;
                name?: string | undefined;
                node_type?: "AND" | "OR" | "SEQUENTIAL" | undefined;
                approver?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                ccer?: {
                    type: "Supervisor" | "SupervisorTopDown" | "DepartmentManager" | "DepartmentManagerTopDown" | "Personal" | "Free";
                    user_id?: string | undefined;
                    level?: string | undefined;
                }[] | undefined;
                privilege_field?: {
                    readable: string[];
                    writable: string[];
                } | undefined;
                approver_chosen_multi?: boolean | undefined;
                approver_chosen_range?: {
                    type?: "ALL" | "PERSONAL" | "ROLE" | undefined;
                    id_list?: string[] | undefined;
                }[] | undefined;
                starter_assignee?: "STARTER" | "AUTO_PASS" | "SUPERVISOR" | "DEPARTMENT_MANAGER" | undefined;
            }[];
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            description?: string | undefined;
            settings?: {
                revert_interval?: number | undefined;
                revert_option?: number | undefined;
                reject_option?: number | undefined;
                quick_approval_option?: number | undefined;
            } | undefined;
            approval_code?: string | undefined;
            config?: {
                can_update_viewer: boolean;
                can_update_form: boolean;
                can_update_process: boolean;
                can_update_revert: boolean;
                help_url?: string | undefined;
            } | undefined;
            icon?: number | undefined;
            process_manager_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            approval_code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
        }, {
            approval_code: string;
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
        path: z.ZodOptional<z.ZodObject<{
            approval_code: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            approval_code?: string | undefined;
        }, {
            approval_code?: string | undefined;
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
        data: z.ZodObject<{
            approval_name: z.ZodString;
            approval_code: z.ZodString;
            group_code: z.ZodString;
            group_name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            external: z.ZodObject<{
                biz_name: z.ZodOptional<z.ZodString>;
                biz_type: z.ZodOptional<z.ZodString>;
                create_link_mobile: z.ZodOptional<z.ZodString>;
                create_link_pc: z.ZodOptional<z.ZodString>;
                support_pc: z.ZodOptional<z.ZodBoolean>;
                support_mobile: z.ZodOptional<z.ZodBoolean>;
                support_batch_read: z.ZodOptional<z.ZodBoolean>;
                enable_mark_readed: z.ZodOptional<z.ZodBoolean>;
                enable_quick_operate: z.ZodOptional<z.ZodBoolean>;
                action_callback_url: z.ZodOptional<z.ZodString>;
                action_callback_token: z.ZodOptional<z.ZodString>;
                action_callback_key: z.ZodOptional<z.ZodString>;
                allow_batch_operate: z.ZodOptional<z.ZodBoolean>;
                exclude_efficiency_statistics: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            }, {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            }>;
            viewers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                viewer_type: z.ZodOptional<z.ZodEnum<["TENANT", "DEPARTMENT", "USER", "NONE"]>>;
                viewer_user_id: z.ZodOptional<z.ZodString>;
                viewer_department_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }, {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }>, "many">>;
            i18n_resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">>;
            managers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_name: string;
            approval_code: string;
            group_code: string;
            external: {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            };
            description?: string | undefined;
            viewers?: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[] | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            group_name?: string | undefined;
            managers?: string[] | undefined;
        }, {
            approval_name: string;
            approval_code: string;
            group_code: string;
            external: {
                biz_name?: string | undefined;
                biz_type?: string | undefined;
                create_link_mobile?: string | undefined;
                create_link_pc?: string | undefined;
                support_pc?: boolean | undefined;
                support_mobile?: boolean | undefined;
                support_batch_read?: boolean | undefined;
                enable_mark_readed?: boolean | undefined;
                enable_quick_operate?: boolean | undefined;
                action_callback_url?: string | undefined;
                action_callback_token?: string | undefined;
                action_callback_key?: string | undefined;
                allow_batch_operate?: boolean | undefined;
                exclude_efficiency_statistics?: boolean | undefined;
            };
            description?: string | undefined;
            viewers?: {
                viewer_type?: "TENANT" | "DEPARTMENT" | "USER" | "NONE" | undefined;
                viewer_user_id?: string | undefined;
                viewer_department_id?: string | undefined;
            }[] | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            group_name?: string | undefined;
            managers?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
        data: z.ZodObject<{
            instances: z.ZodArray<z.ZodObject<{
                instance_id: z.ZodString;
                update_time: z.ZodString;
                tasks: z.ZodArray<z.ZodObject<{
                    task_id: z.ZodString;
                    update_time: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    task_id: string;
                    update_time: string;
                }, {
                    task_id: string;
                    update_time: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }, {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            instances: {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }[];
        }, {
            instances: {
                instance_id: string;
                update_time: string;
                tasks: {
                    task_id: string;
                    update_time: string;
                }[];
            }[];
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
        data: z.ZodObject<{
            approval_code: z.ZodString;
            status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "CANCELED", "DELETED", "HIDDEN", "TERMINATED"]>;
            extra: z.ZodOptional<z.ZodString>;
            instance_id: z.ZodString;
            links: z.ZodObject<{
                pc_link: z.ZodString;
                mobile_link: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                pc_link: string;
                mobile_link?: string | undefined;
            }, {
                pc_link: string;
                mobile_link?: string | undefined;
            }>;
            title: z.ZodOptional<z.ZodString>;
            form: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                name?: string | undefined;
            }, {
                value?: string | undefined;
                name?: string | undefined;
            }>, "many">>;
            user_id: z.ZodOptional<z.ZodString>;
            user_name: z.ZodOptional<z.ZodString>;
            open_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            department_name: z.ZodOptional<z.ZodString>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            update_time: z.ZodString;
            display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
            update_mode: z.ZodOptional<z.ZodEnum<["REPLACE", "UPDATE"]>>;
            task_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                task_id: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                open_id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                links: z.ZodObject<{
                    pc_link: z.ZodString;
                    mobile_link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }>;
                status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "TRANSFERRED", "DONE"]>;
                extra: z.ZodOptional<z.ZodString>;
                create_time: z.ZodString;
                end_time: z.ZodString;
                update_time: z.ZodOptional<z.ZodString>;
                action_context: z.ZodOptional<z.ZodString>;
                action_configs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    action_type: z.ZodString;
                    action_name: z.ZodOptional<z.ZodString>;
                    is_need_reason: z.ZodOptional<z.ZodBoolean>;
                    is_reason_required: z.ZodOptional<z.ZodBoolean>;
                    is_need_attachment: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }, {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }>, "many">>;
                display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
                exclude_statistics: z.ZodOptional<z.ZodBoolean>;
                node_id: z.ZodOptional<z.ZodString>;
                node_name: z.ZodOptional<z.ZodString>;
                generate_type: z.ZodOptional<z.ZodEnum<["EXTERNAL_CONSIGN", "DEFAULT"]>>;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }>, "many">>;
            cc_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cc_id: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                open_id: z.ZodOptional<z.ZodString>;
                links: z.ZodObject<{
                    pc_link: z.ZodString;
                    mobile_link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }, {
                    pc_link: string;
                    mobile_link?: string | undefined;
                }>;
                read_status: z.ZodEnum<["READ", "UNREAD"]>;
                extra: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                create_time: z.ZodString;
                update_time: z.ZodString;
                display_method: z.ZodOptional<z.ZodEnum<["BROWSER", "SIDEBAR", "NORMAL", "TRUSTEESHIP"]>>;
            }, "strip", z.ZodTypeAny, {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }, {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }>, "many">>;
            i18n_resources: z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP", "zh-HK", "zh-TW", "de-DE", "es-ES", "fr-FR", "id-ID", "it-IT", "ko-KR", "pt-BR", "th-TH", "vi-VN", "ms-MY", "ru-RU"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">;
            trusteeship_url_token: z.ZodOptional<z.ZodString>;
            trusteeship_user_id_type: z.ZodOptional<z.ZodString>;
            trusteeship_urls: z.ZodOptional<z.ZodObject<{
                form_detail_url: z.ZodOptional<z.ZodString>;
                action_definition_url: z.ZodOptional<z.ZodString>;
                approval_node_url: z.ZodOptional<z.ZodString>;
                action_callback_url: z.ZodOptional<z.ZodString>;
                pull_business_data_url: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            }, {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            }>>;
            trusteeship_cache_config: z.ZodOptional<z.ZodObject<{
                form_policy: z.ZodOptional<z.ZodEnum<["DISABLE", "IMMUTABLE", "BY_NODE", "BY_USER"]>>;
                form_vary_with_locale: z.ZodOptional<z.ZodBoolean>;
                form_version: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            }, {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            }>>;
            resource_region: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "DELETED" | "HIDDEN" | "TERMINATED";
            start_time: string;
            end_time: string;
            approval_code: string;
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            instance_id: string;
            update_time: string;
            links: {
                pc_link: string;
                mobile_link?: string | undefined;
            };
            user_id?: string | undefined;
            open_id?: string | undefined;
            user_name?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            extra?: string | undefined;
            form?: {
                value?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            department_name?: string | undefined;
            display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            update_mode?: "REPLACE" | "UPDATE" | undefined;
            task_list?: {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }[] | undefined;
            cc_list?: {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }[] | undefined;
            trusteeship_url_token?: string | undefined;
            trusteeship_user_id_type?: string | undefined;
            trusteeship_urls?: {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            } | undefined;
            trusteeship_cache_config?: {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            } | undefined;
            resource_region?: string | undefined;
        }, {
            status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "DELETED" | "HIDDEN" | "TERMINATED";
            start_time: string;
            end_time: string;
            approval_code: string;
            i18n_resources: {
                locale: "zh-CN" | "en-US" | "ja-JP" | "zh-HK" | "zh-TW" | "de-DE" | "es-ES" | "fr-FR" | "id-ID" | "it-IT" | "ko-KR" | "pt-BR" | "th-TH" | "vi-VN" | "ms-MY" | "ru-RU";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[];
            instance_id: string;
            update_time: string;
            links: {
                pc_link: string;
                mobile_link?: string | undefined;
            };
            user_id?: string | undefined;
            open_id?: string | undefined;
            user_name?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            extra?: string | undefined;
            form?: {
                value?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            department_name?: string | undefined;
            display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            update_mode?: "REPLACE" | "UPDATE" | undefined;
            task_list?: {
                status: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE";
                task_id: string;
                end_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                update_time?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
                action_context?: string | undefined;
                action_configs?: {
                    action_type: string;
                    action_name?: string | undefined;
                    is_need_reason?: boolean | undefined;
                    is_reason_required?: boolean | undefined;
                    is_need_attachment?: boolean | undefined;
                }[] | undefined;
                exclude_statistics?: boolean | undefined;
                node_id?: string | undefined;
                node_name?: string | undefined;
                generate_type?: "EXTERNAL_CONSIGN" | "DEFAULT" | undefined;
            }[] | undefined;
            cc_list?: {
                update_time: string;
                links: {
                    pc_link: string;
                    mobile_link?: string | undefined;
                };
                create_time: string;
                cc_id: string;
                read_status: "READ" | "UNREAD";
                user_id?: string | undefined;
                open_id?: string | undefined;
                title?: string | undefined;
                extra?: string | undefined;
                display_method?: "BROWSER" | "SIDEBAR" | "NORMAL" | "TRUSTEESHIP" | undefined;
            }[] | undefined;
            trusteeship_url_token?: string | undefined;
            trusteeship_user_id_type?: string | undefined;
            trusteeship_urls?: {
                action_callback_url?: string | undefined;
                form_detail_url?: string | undefined;
                action_definition_url?: string | undefined;
                approval_node_url?: string | undefined;
                pull_business_data_url?: string | undefined;
            } | undefined;
            trusteeship_cache_config?: {
                form_policy?: "DISABLE" | "IMMUTABLE" | "BY_NODE" | "BY_USER" | undefined;
                form_vary_with_locale?: boolean | undefined;
                form_version?: string | undefined;
            } | undefined;
            resource_region?: string | undefined;
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
        data: z.ZodOptional<z.ZodObject<{
            approval_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            instance_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            status: z.ZodOptional<z.ZodEnum<["PENDING", "APPROVED", "REJECTED", "TRANSFERRED", "DONE"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | undefined;
            user_ids?: string[] | undefined;
            approval_codes?: string[] | undefined;
            instance_ids?: string[] | undefined;
        }, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | undefined;
            user_ids?: string[] | undefined;
            approval_codes?: string[] | undefined;
            instance_ids?: string[] | undefined;
        }>>;
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
            user_id: z.ZodString;
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            task_id: z.ZodString;
            comment: z.ZodOptional<z.ZodString>;
            add_sign_user_ids: z.ZodArray<z.ZodString, "many">;
            add_sign_type: z.ZodNumber;
            approval_method: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            add_sign_user_ids: string[];
            add_sign_type: number;
            comment?: string | undefined;
            approval_method?: number | undefined;
        }, {
            user_id: string;
            task_id: string;
            approval_code: string;
            instance_code: string;
            add_sign_user_ids: string[];
            add_sign_type: number;
            comment?: string | undefined;
            approval_method?: number | undefined;
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
        data: z.ZodObject<{
            approval_code: z.ZodString;
            instance_code: z.ZodString;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            approval_code: string;
            instance_code: string;
        }, {
            user_id: string;
            approval_code: string;
            instance_code: string;
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
            content: z.ZodOptional<z.ZodString>;
            at_info_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                user_id: z.ZodString;
                name: z.ZodString;
                offset: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                offset: string;
                user_id: string;
                name: string;
            }, {
                offset: string;
                user_id: string;
                name: string;
            }>, "many">>;
            parent_comment_id: z.ZodOptional<z.ZodString>;
            comment_id: z.ZodOptional<z.ZodString>;
            disable_bot: z.ZodOptional<z.ZodBoolean>;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            extra?: string | undefined;
            at_info_list?: {
                offset: string;
                user_id: string;
                name: string;
            }[] | undefined;
            parent_comment_id?: string | undefined;
            comment_id?: string | undefined;
            disable_bot?: boolean | undefined;
        }, {
            content?: string | undefined;
            extra?: string | undefined;
            at_info_list?: {
                offset: string;
                user_id: string;
                name: string;
            }[] | undefined;
            parent_comment_id?: string | undefined;
            comment_id?: string | undefined;
            disable_bot?: boolean | undefined;
        }>>;
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
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
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
            comment_id: string;
        }, {
            instance_id: string;
            comment_id: string;
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
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            instance_id: string;
        }, {
            instance_id: string;
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
        data: z.ZodObject<{
            approval_code: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            open_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            form: z.ZodString;
            node_approver_user_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_approver_open_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_cc_user_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            node_cc_open_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                value?: string[] | undefined;
                key?: string | undefined;
            }, {
                value?: string[] | undefined;
                key?: string | undefined;
            }>, "many">>;
            uuid: z.ZodOptional<z.ZodString>;
            allow_resubmit: z.ZodOptional<z.ZodBoolean>;
            allow_submit_again: z.ZodOptional<z.ZodBoolean>;
            cancel_bot_notification: z.ZodOptional<z.ZodString>;
            forbid_revoke: z.ZodOptional<z.ZodBoolean>;
            i18n_resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>;
                texts: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    key: string;
                }, {
                    value: string;
                    key: string;
                }>, "many">;
                is_default: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }, {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }>, "many">>;
            title: z.ZodOptional<z.ZodString>;
            title_display_method: z.ZodOptional<z.ZodNumber>;
            node_auto_approval_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_id_type: z.ZodOptional<z.ZodEnum<["CUSTOM", "NON_CUSTOM"]>>;
                node_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }, {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            approval_code: string;
            form: string;
            user_id?: string | undefined;
            open_id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            node_approver_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_approver_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            uuid?: string | undefined;
            allow_resubmit?: boolean | undefined;
            allow_submit_again?: boolean | undefined;
            cancel_bot_notification?: string | undefined;
            forbid_revoke?: boolean | undefined;
            title_display_method?: number | undefined;
            node_auto_approval_list?: {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }[] | undefined;
        }, {
            approval_code: string;
            form: string;
            user_id?: string | undefined;
            open_id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            i18n_resources?: {
                locale: "zh-CN" | "en-US" | "ja-JP";
                texts: {
                    value: string;
                    key: string;
                }[];
                is_default: boolean;
            }[] | undefined;
            node_approver_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_approver_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_user_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            node_cc_open_id_list?: {
                value?: string[] | undefined;
                key?: string | undefined;
            }[] | undefined;
            uuid?: string | undefined;
            allow_resubmit?: boolean | undefined;
            allow_submit_again?: boolean | undefined;
            cancel_bot_notification?: string | undefined;
            forbid_revoke?: boolean | undefined;
            title_display_method?: number | undefined;
            node_auto_approval_list?: {
                node_id?: string | undefined;
                node_id_type?: "CUSTOM" | "NON_CUSTOM" | undefined;
            }[] | undefined;
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
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            approval_code: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            approval_code: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            approval_code: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
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
        data: z.ZodObject<{
            user_id: z.ZodString;
            approval_code: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            form: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodString>;
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            department_id?: string | undefined;
            task_id?: string | undefined;
            approval_code?: string | undefined;
            form?: string | undefined;
            locale?: string | undefined;
            instance_code?: string | undefined;
        }, {
            user_id: string;
            department_id?: string | undefined;
            task_id?: string | undefined;
            approval_code?: string | undefined;
            form?: string | undefined;
            locale?: string | undefined;
            instance_code?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "user_id", "union_id"]>>;
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
            user_id: z.ZodOptional<z.ZodString>;
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            instance_title: z.ZodOptional<z.ZodString>;
            instance_status: z.ZodOptional<z.ZodEnum<["PENDING", "RECALL", "REJECT", "DELETED", "APPROVED", "ALL"]>>;
            instance_start_time_from: z.ZodOptional<z.ZodString>;
            instance_start_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            instance_title?: string | undefined;
            instance_status?: "ALL" | "PENDING" | "APPROVED" | "DELETED" | "RECALL" | "REJECT" | undefined;
            instance_start_time_from?: string | undefined;
            instance_start_time_to?: string | undefined;
        }, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            instance_title?: string | undefined;
            instance_status?: "ALL" | "PENDING" | "APPROVED" | "DELETED" | "RECALL" | "REJECT" | undefined;
            instance_start_time_from?: string | undefined;
            instance_start_time_to?: string | undefined;
        }>>;
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
            user_id: z.ZodOptional<z.ZodString>;
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            cc_title: z.ZodOptional<z.ZodString>;
            read_status: z.ZodOptional<z.ZodEnum<["READ", "UNREAD", "ALL"]>>;
            cc_create_time_from: z.ZodOptional<z.ZodString>;
            cc_create_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            read_status?: "ALL" | "READ" | "UNREAD" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            cc_title?: string | undefined;
            cc_create_time_from?: string | undefined;
            cc_create_time_to?: string | undefined;
        }, {
            user_id?: string | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            read_status?: "ALL" | "READ" | "UNREAD" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            cc_title?: string | undefined;
            cc_create_time_from?: string | undefined;
            cc_create_time_to?: string | undefined;
        }>>;
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
            user_id: z.ZodString;
            task_id: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            extra: z.ZodOptional<z.ZodString>;
            task_def_key_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            task_id: string;
            task_def_key_list: string[];
            extra?: string | undefined;
            reason?: string | undefined;
        }, {
            user_id: string;
            task_id: string;
            task_def_key_list: string[];
            extra?: string | undefined;
            reason?: string | undefined;
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
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id: z.ZodString;
            topic: z.ZodEnum<["1", "2", "3", "17", "18"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            topic: "1" | "2" | "3" | "17" | "18";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id: string;
            topic: "1" | "2" | "3" | "17" | "18";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
            user_id: z.ZodOptional<z.ZodString>;
            approval_code: z.ZodOptional<z.ZodString>;
            instance_code: z.ZodOptional<z.ZodString>;
            instance_external_id: z.ZodOptional<z.ZodString>;
            group_external_id: z.ZodOptional<z.ZodString>;
            task_title: z.ZodOptional<z.ZodString>;
            task_status: z.ZodOptional<z.ZodEnum<["PENDING", "REJECTED", "APPROVED", "TRANSFERRED", "DONE", "RM_REPEAT", "PROCESSED", "ALL"]>>;
            task_start_time_from: z.ZodOptional<z.ZodString>;
            task_start_time_to: z.ZodOptional<z.ZodString>;
            locale: z.ZodOptional<z.ZodEnum<["zh-CN", "en-US", "ja-JP"]>>;
            task_status_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            order?: number | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            task_title?: string | undefined;
            task_status?: "ALL" | "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | "RM_REPEAT" | "PROCESSED" | undefined;
            task_start_time_from?: string | undefined;
            task_start_time_to?: string | undefined;
            task_status_list?: string[] | undefined;
        }, {
            user_id?: string | undefined;
            order?: number | undefined;
            approval_code?: string | undefined;
            locale?: "zh-CN" | "en-US" | "ja-JP" | undefined;
            instance_code?: string | undefined;
            instance_external_id?: string | undefined;
            group_external_id?: string | undefined;
            task_title?: string | undefined;
            task_status?: "ALL" | "PENDING" | "APPROVED" | "REJECTED" | "TRANSFERRED" | "DONE" | "RM_REPEAT" | "PROCESSED" | undefined;
            task_start_time_from?: string | undefined;
            task_start_time_to?: string | undefined;
            task_status_list?: string[] | undefined;
        }>>;
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
    };
})[];
