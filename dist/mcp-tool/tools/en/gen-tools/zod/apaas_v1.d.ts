import { z } from 'zod';
export type apaasV1ToolName = 'apaas.v1.app.list' | 'apaas.v1.applicationAuditLog.auditLogList' | 'apaas.v1.applicationAuditLog.dataChangeLogDetail' | 'apaas.v1.applicationAuditLog.dataChangeLogsList' | 'apaas.v1.applicationAuditLog.get' | 'apaas.v1.applicationEnvironmentVariable.get' | 'apaas.v1.applicationEnvironmentVariable.query' | 'apaas.v1.applicationFlow.execute' | 'apaas.v1.applicationFunction.invoke' | 'apaas.v1.applicationObject.oqlQuery' | 'apaas.v1.applicationObjectRecord.batchCreate' | 'apaas.v1.applicationObjectRecord.batchDelete' | 'apaas.v1.applicationObjectRecord.batchQuery' | 'apaas.v1.applicationObjectRecord.batchUpdate' | 'apaas.v1.applicationObjectRecord.create' | 'apaas.v1.applicationObjectRecord.delete' | 'apaas.v1.applicationObjectRecord.patch' | 'apaas.v1.applicationObjectRecord.query' | 'apaas.v1.applicationObject.search' | 'apaas.v1.applicationRecordPermissionMember.batchCreateAuthorization' | 'apaas.v1.applicationRecordPermissionMember.batchRemoveAuthorization' | 'apaas.v1.applicationRoleMember.batchCreateAuthorization' | 'apaas.v1.applicationRoleMember.batchRemoveAuthorization' | 'apaas.v1.applicationRoleMember.get' | 'apaas.v1.approvalInstance.cancel' | 'apaas.v1.approvalTask.addAssignee' | 'apaas.v1.approvalTask.agree' | 'apaas.v1.approvalTask.reject' | 'apaas.v1.approvalTask.transfer' | 'apaas.v1.seatActivity.list' | 'apaas.v1.seatAssignment.list' | 'apaas.v1.userTask.cc' | 'apaas.v1.userTask.chatGroup' | 'apaas.v1.userTask.expediting' | 'apaas.v1.userTask.query' | 'apaas.v1.userTask.rollback' | 'apaas.v1.userTask.rollbackPoints';
export declare const apaasV1AppList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: string | undefined;
            page_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1ApplicationAuditLogAuditLogList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodString;
            offset: z.ZodString;
            quick_query: z.ZodOptional<z.ZodString>;
            from: z.ZodString;
            to: z.ZodString;
            log_type: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_order: z.ZodOptional<z.ZodString>;
            app_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offset: string;
            page_size: string;
            from: string;
            to: string;
            log_type: string;
            filter?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }, {
            offset: string;
            page_size: string;
            from: string;
            to: string;
            log_type: string;
            filter?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1ApplicationAuditLogDataChangeLogDetail: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            log_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            log_id: string;
        }, {
            log_id: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1ApplicationAuditLogDataChangeLogsList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            quick_query: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            offset: z.ZodString;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
            log_type: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_order: z.ZodOptional<z.ZodString>;
            app_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offset: string;
            page_size: string;
            log_type: string;
            filter?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }, {
            offset: string;
            page_size: string;
            log_type: string;
            filter?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1ApplicationAuditLogGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            log_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            log_id: string;
        }, {
            log_id: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1ApplicationEnvironmentVariableGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            namespace: z.ZodString;
            environment_variable_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            environment_variable_api_name: string;
        }, {
            namespace: string;
            environment_variable_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationEnvironmentVariableQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            filter: z.ZodOptional<z.ZodObject<{
                quick_query: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                quick_query?: string | undefined;
            }, {
                quick_query?: string | undefined;
            }>>;
            limit: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            offset?: number | undefined;
            filter?: {
                quick_query?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }, {
            offset?: number | undefined;
            filter?: {
                quick_query?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
    };
};
export declare const apaasV1ApplicationFlowExecute: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            is_async: z.ZodOptional<z.ZodBoolean>;
            idempotent_key: z.ZodOptional<z.ZodString>;
            loop_masks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            params: z.ZodOptional<z.ZodString>;
            operator: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator: string;
            params?: string | undefined;
            is_async?: boolean | undefined;
            idempotent_key?: string | undefined;
            loop_masks?: string[] | undefined;
        }, {
            operator: string;
            params?: string | undefined;
            is_async?: boolean | undefined;
            idempotent_key?: string | undefined;
            loop_masks?: string[] | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            flow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            flow_id: string;
        }, {
            namespace: string;
            flow_id: string;
        }>;
    };
};
export declare const apaasV1ApplicationFunctionInvoke: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            params: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params?: string | undefined;
        }, {
            params?: string | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            function_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            function_api_name: string;
        }, {
            namespace: string;
            function_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectOqlQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            query: z.ZodString;
            args: z.ZodOptional<z.ZodString>;
            named_args: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            args?: string | undefined;
            named_args?: string | undefined;
        }, {
            query: string;
            args?: string | undefined;
            named_args?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            records: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            records: string;
        }, {
            records: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ids: string[];
        }, {
            ids: string[];
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            select: z.ZodArray<z.ZodString, "many">;
            filter: z.ZodOptional<z.ZodObject<{
                conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    index: z.ZodOptional<z.ZodString>;
                    left: z.ZodOptional<z.ZodObject<{
                        type: z.ZodOptional<z.ZodString>;
                        settings: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }>>;
                    right: z.ZodOptional<z.ZodObject<{
                        type: z.ZodOptional<z.ZodString>;
                        settings: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }>>;
                    operator: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }, {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }>, "many">>;
                logic_expression: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            }, {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            }>>;
            order_by: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                direction: z.ZodEnum<["ASC", "DESC"]>;
            }, "strip", z.ZodTypeAny, {
                field: string;
                direction: "ASC" | "DESC";
            }, {
                field: string;
                direction: "ASC" | "DESC";
            }>, "many">>;
            group_by: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                field: string;
            }, {
                field: string;
            }>, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            use_page_token: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
            need_total_count: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            select: string[];
            offset?: number | undefined;
            filter?: {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            } | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            order_by?: {
                field: string;
                direction: "ASC" | "DESC";
            }[] | undefined;
            group_by?: {
                field: string;
            }[] | undefined;
            use_page_token?: boolean | undefined;
            need_total_count?: boolean | undefined;
        }, {
            select: string[];
            offset?: number | undefined;
            filter?: {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            } | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            order_by?: {
                field: string;
                direction: "ASC" | "DESC";
            }[] | undefined;
            group_by?: {
                field: string;
            }[] | undefined;
            use_page_token?: boolean | undefined;
            need_total_count?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            records: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            records: string;
        }, {
            records: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            record: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record: string;
        }, {
            record: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            namespace: string;
            object_api_name: string;
        }, {
            id: string;
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            record: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record: string;
        }, {
            record: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            namespace: string;
            object_api_name: string;
        }, {
            id: string;
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectRecordQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            select: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            select?: string[] | undefined;
        }, {
            select?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            namespace: string;
            object_api_name: string;
        }, {
            id: string;
            namespace: string;
            object_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationObjectSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            q: z.ZodOptional<z.ZodString>;
            search_objects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                api_name: z.ZodOptional<z.ZodString>;
                search_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                select: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                filter: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        index: z.ZodOptional<z.ZodString>;
                        left: z.ZodOptional<z.ZodObject<{
                            type: z.ZodOptional<z.ZodString>;
                            settings: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }>>;
                        right: z.ZodOptional<z.ZodObject<{
                            type: z.ZodOptional<z.ZodString>;
                            settings: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }>>;
                        operator: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }, {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }>, "many">>;
                    logic_expression: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                }, {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                }>>;
                order_by: z.ZodOptional<z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    order_type: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                }, "strip", z.ZodTypeAny, {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                }, {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }, {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }>, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodEnum<["Label", "SearchLayout"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            metadata?: "Label" | "SearchLayout" | undefined;
            q?: string | undefined;
            search_objects?: {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }[] | undefined;
        }, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            metadata?: "Label" | "SearchLayout" | undefined;
            q?: string | undefined;
            search_objects?: {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
        }>;
    };
};
export declare const apaasV1ApplicationRecordPermissionMemberBatchCreateAuthorization: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            record_permission_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            record_permission_api_name: string;
        }, {
            namespace: string;
            record_permission_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationRecordPermissionMemberBatchRemoveAuthorization: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            record_permission_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            record_permission_api_name: string;
        }, {
            namespace: string;
            record_permission_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationRoleMemberBatchCreateAuthorization: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            role_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            role_api_name: string;
        }, {
            namespace: string;
            role_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationRoleMemberBatchRemoveAuthorization: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            role_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            role_api_name: string;
        }, {
            namespace: string;
            role_api_name: string;
        }>;
    };
};
export declare const apaasV1ApplicationRoleMemberGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            need_display_name: z.ZodOptional<z.ZodBoolean>;
            use_api_id: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            need_display_name?: boolean | undefined;
            use_api_id?: boolean | undefined;
        }, {
            need_display_name?: boolean | undefined;
            use_api_id?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            role_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            role_api_name: string;
        }, {
            namespace: string;
            role_api_name: string;
        }>;
    };
};
export declare const apaasV1ApprovalInstanceCancel: {
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
            opinion: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion: string;
        }, {
            user_id: string;
            opinion: string;
        }>;
        path: z.ZodObject<{
            approval_instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_instance_id: string;
        }, {
            approval_instance_id: string;
        }>;
    };
};
export declare const apaasV1ApprovalTaskAddAssignee: {
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
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            add_assignee_type: z.ZodOptional<z.ZodString>;
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion?: string | undefined;
            approvers?: string[] | undefined;
            add_assignee_type?: string | undefined;
        }, {
            user_id: string;
            opinion?: string | undefined;
            approvers?: string[] | undefined;
            add_assignee_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            approval_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_task_id: string;
        }, {
            approval_task_id: string;
        }>;
    };
};
export declare const apaasV1ApprovalTaskAgree: {
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
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion?: string | undefined;
        }, {
            user_id: string;
            opinion?: string | undefined;
        }>;
        path: z.ZodObject<{
            approval_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_task_id: string;
        }, {
            approval_task_id: string;
        }>;
    };
};
export declare const apaasV1ApprovalTaskReject: {
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
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion?: string | undefined;
        }, {
            user_id: string;
            opinion?: string | undefined;
        }>;
        path: z.ZodObject<{
            approval_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_task_id: string;
        }, {
            approval_task_id: string;
        }>;
    };
};
export declare const apaasV1ApprovalTaskTransfer: {
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
            from_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            to_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion?: string | undefined;
            from_user_ids?: string[] | undefined;
            to_user_ids?: string[] | undefined;
        }, {
            user_id: string;
            opinion?: string | undefined;
            from_user_ids?: string[] | undefined;
            to_user_ids?: string[] | undefined;
        }>;
        path: z.ZodObject<{
            approval_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_task_id: string;
        }, {
            approval_task_id: string;
        }>;
    };
};
export declare const apaasV1SeatActivityList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            seat_type: z.ZodEnum<["per_user", "per_user_per_app"]>;
            page_size: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
        }, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1SeatAssignmentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            seat_type: z.ZodEnum<["per_user", "per_user_per_app"]>;
            page_size: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
        }, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const apaasV1UserTaskCc: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            cc_user_ids: z.ZodArray<z.ZodString, "many">;
            operator_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            cc_user_ids: string[];
            operator_user_id: string;
        }, {
            cc_user_ids: string[];
            operator_user_id: string;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
};
export declare const apaasV1UserTaskChatGroup: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operator_user_id: z.ZodString;
            invite_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            chat_id: z.ZodOptional<z.ZodString>;
            chat_name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            operator_user_id: string;
            invite_user_ids?: string[] | undefined;
            chat_id?: string | undefined;
            chat_name?: string | undefined;
        }, {
            operator_user_id: string;
            invite_user_ids?: string[] | undefined;
            chat_id?: string | undefined;
            chat_name?: string | undefined;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
};
export declare const apaasV1UserTaskExpediting: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operator_user_id: z.ZodString;
            expediting_user_ids: z.ZodArray<z.ZodString, "many">;
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            operator_user_id: string;
            expediting_user_ids: string[];
            opinion?: string | undefined;
        }, {
            operator_user_id: string;
            expediting_user_ids: string[];
            opinion?: string | undefined;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
};
export declare const apaasV1UserTaskQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodString>;
            offset: z.ZodOptional<z.ZodString>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            api_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            kunlun_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kunlun_user_id: string;
            offset?: string | undefined;
            type?: string | undefined;
            limit?: string | undefined;
            source?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            api_ids?: string[] | undefined;
        }, {
            kunlun_user_id: string;
            offset?: string | undefined;
            type?: string | undefined;
            limit?: string | undefined;
            source?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            api_ids?: string[] | undefined;
        }>;
    };
};
export declare const apaasV1UserTaskRollback: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operator_user_id: z.ZodString;
            to_task_id: z.ZodString;
            opinion: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            opinion: string;
            operator_user_id: string;
            to_task_id: string;
        }, {
            opinion: string;
            operator_user_id: string;
            to_task_id: string;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
};
export declare const apaasV1UserTaskRollbackPoints: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operator_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_user_id: string;
        }, {
            operator_user_id: string;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
};
export declare const apaasV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: string | undefined;
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
        params: z.ZodObject<{
            page_size: z.ZodString;
            offset: z.ZodString;
            quick_query: z.ZodOptional<z.ZodString>;
            from: z.ZodString;
            to: z.ZodString;
            log_type: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_order: z.ZodOptional<z.ZodString>;
            app_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offset: string;
            page_size: string;
            from: string;
            to: string;
            log_type: string;
            filter?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }, {
            offset: string;
            page_size: string;
            from: string;
            to: string;
            log_type: string;
            filter?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            log_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            log_id: string;
        }, {
            log_id: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            quick_query: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            offset: z.ZodString;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
            log_type: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_order: z.ZodOptional<z.ZodString>;
            app_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offset: string;
            page_size: string;
            log_type: string;
            filter?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }, {
            offset: string;
            page_size: string;
            log_type: string;
            filter?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            quick_query?: string | undefined;
            columns?: string[] | undefined;
            sort_by?: string | undefined;
            sort_order?: string | undefined;
            app_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            namespace: z.ZodString;
            environment_variable_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            environment_variable_api_name: string;
        }, {
            namespace: string;
            environment_variable_api_name: string;
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
            filter: z.ZodOptional<z.ZodObject<{
                quick_query: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                quick_query?: string | undefined;
            }, {
                quick_query?: string | undefined;
            }>>;
            limit: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            offset?: number | undefined;
            filter?: {
                quick_query?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }, {
            offset?: number | undefined;
            filter?: {
                quick_query?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            is_async: z.ZodOptional<z.ZodBoolean>;
            idempotent_key: z.ZodOptional<z.ZodString>;
            loop_masks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            params: z.ZodOptional<z.ZodString>;
            operator: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator: string;
            params?: string | undefined;
            is_async?: boolean | undefined;
            idempotent_key?: string | undefined;
            loop_masks?: string[] | undefined;
        }, {
            operator: string;
            params?: string | undefined;
            is_async?: boolean | undefined;
            idempotent_key?: string | undefined;
            loop_masks?: string[] | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            flow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            flow_id: string;
        }, {
            namespace: string;
            flow_id: string;
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
            params: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params?: string | undefined;
        }, {
            params?: string | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            function_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            function_api_name: string;
        }, {
            namespace: string;
            function_api_name: string;
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
            query: z.ZodString;
            args: z.ZodOptional<z.ZodString>;
            named_args: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            args?: string | undefined;
            named_args?: string | undefined;
        }, {
            query: string;
            args?: string | undefined;
            named_args?: string | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            records: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            records: string;
        }, {
            records: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
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
            ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ids: string[];
        }, {
            ids: string[];
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
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
            select: z.ZodArray<z.ZodString, "many">;
            filter: z.ZodOptional<z.ZodObject<{
                conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    index: z.ZodOptional<z.ZodString>;
                    left: z.ZodOptional<z.ZodObject<{
                        type: z.ZodOptional<z.ZodString>;
                        settings: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }>>;
                    right: z.ZodOptional<z.ZodObject<{
                        type: z.ZodOptional<z.ZodString>;
                        settings: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }, {
                        type?: string | undefined;
                        settings?: string | undefined;
                    }>>;
                    operator: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }, {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }>, "many">>;
                logic_expression: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            }, {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            }>>;
            order_by: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                direction: z.ZodEnum<["ASC", "DESC"]>;
            }, "strip", z.ZodTypeAny, {
                field: string;
                direction: "ASC" | "DESC";
            }, {
                field: string;
                direction: "ASC" | "DESC";
            }>, "many">>;
            group_by: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                field: string;
            }, {
                field: string;
            }>, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            use_page_token: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
            need_total_count: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            select: string[];
            offset?: number | undefined;
            filter?: {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            } | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            order_by?: {
                field: string;
                direction: "ASC" | "DESC";
            }[] | undefined;
            group_by?: {
                field: string;
            }[] | undefined;
            use_page_token?: boolean | undefined;
            need_total_count?: boolean | undefined;
        }, {
            select: string[];
            offset?: number | undefined;
            filter?: {
                conditions?: {
                    operator?: string | undefined;
                    index?: string | undefined;
                    left?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                    right?: {
                        type?: string | undefined;
                        settings?: string | undefined;
                    } | undefined;
                }[] | undefined;
                logic_expression?: string | undefined;
            } | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            order_by?: {
                field: string;
                direction: "ASC" | "DESC";
            }[] | undefined;
            group_by?: {
                field: string;
            }[] | undefined;
            use_page_token?: boolean | undefined;
            need_total_count?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
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
            record: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            record: string;
        }, {
            record: string;
        }>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            object_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            object_api_name: string;
        }, {
            namespace: string;
            object_api_name: string;
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
            namespace: z.ZodString;
            object_api_name: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            namespace: string;
            object_api_name: string;
        }, {
            id: string;
            namespace: string;
            object_api_name: string;
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
            q: z.ZodOptional<z.ZodString>;
            search_objects: z.ZodOptional<z.ZodArray<z.ZodObject<{
                api_name: z.ZodOptional<z.ZodString>;
                search_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                select: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                filter: z.ZodOptional<z.ZodObject<{
                    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        index: z.ZodOptional<z.ZodString>;
                        left: z.ZodOptional<z.ZodObject<{
                            type: z.ZodOptional<z.ZodString>;
                            settings: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }>>;
                        right: z.ZodOptional<z.ZodObject<{
                            type: z.ZodOptional<z.ZodString>;
                            settings: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }, {
                            type?: string | undefined;
                            settings?: string | undefined;
                        }>>;
                        operator: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }, {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }>, "many">>;
                    logic_expression: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                }, {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                }>>;
                order_by: z.ZodOptional<z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    order_type: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                }, "strip", z.ZodTypeAny, {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                }, {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }, {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }>, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodEnum<["Label", "SearchLayout"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            metadata?: "Label" | "SearchLayout" | undefined;
            q?: string | undefined;
            search_objects?: {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }[] | undefined;
        }, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            metadata?: "Label" | "SearchLayout" | undefined;
            q?: string | undefined;
            search_objects?: {
                filter?: {
                    conditions?: {
                        operator?: string | undefined;
                        index?: string | undefined;
                        left?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                        right?: {
                            type?: string | undefined;
                            settings?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    logic_expression?: string | undefined;
                } | undefined;
                select?: string[] | undefined;
                order_by?: {
                    field?: string | undefined;
                    order_type?: "asc" | "desc" | undefined;
                } | undefined;
                api_name?: string | undefined;
                search_fields?: string[] | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
        }, {
            namespace: string;
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
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            record_permission_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            record_permission_api_name: string;
        }, {
            namespace: string;
            record_permission_api_name: string;
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
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            role_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            role_api_name: string;
        }, {
            namespace: string;
            role_api_name: string;
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
            need_display_name: z.ZodOptional<z.ZodBoolean>;
            use_api_id: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            need_display_name?: boolean | undefined;
            use_api_id?: boolean | undefined;
        }, {
            need_display_name?: boolean | undefined;
            use_api_id?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            namespace: z.ZodString;
            role_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            namespace: string;
            role_api_name: string;
        }, {
            namespace: string;
            role_api_name: string;
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
            opinion: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion: string;
        }, {
            user_id: string;
            opinion: string;
        }>;
        path: z.ZodObject<{
            approval_instance_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_instance_id: string;
        }, {
            approval_instance_id: string;
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
            opinion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            opinion?: string | undefined;
        }, {
            user_id: string;
            opinion?: string | undefined;
        }>;
        path: z.ZodObject<{
            approval_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            approval_task_id: string;
        }, {
            approval_task_id: string;
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
            seat_type: z.ZodEnum<["per_user", "per_user_per_app"]>;
            page_size: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
        }, {
            page_size: string;
            seat_type: "per_user" | "per_user_per_app";
            page_token?: string | undefined;
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
            type: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodString>;
            offset: z.ZodOptional<z.ZodString>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            api_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            kunlun_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kunlun_user_id: string;
            offset?: string | undefined;
            type?: string | undefined;
            limit?: string | undefined;
            source?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            api_ids?: string[] | undefined;
        }, {
            kunlun_user_id: string;
            offset?: string | undefined;
            type?: string | undefined;
            limit?: string | undefined;
            source?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            api_ids?: string[] | undefined;
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
            operator_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_user_id: string;
        }, {
            operator_user_id: string;
        }>;
        path: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
    };
})[];
