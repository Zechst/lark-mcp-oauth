import { z } from 'zod';
export type directoryV1ToolName = 'directory.v1.collaborationRule.create' | 'directory.v1.collaborationRule.delete' | 'directory.v1.collaborationRule.list' | 'directory.v1.collaborationRule.update' | 'directory.v1.collaborationTenant.list' | 'directory.v1.collborationShareEntity.list' | 'directory.v1.department.create' | 'directory.v1.department.delete' | 'directory.v1.department.filter' | 'directory.v1.department.mget' | 'directory.v1.department.patch' | 'directory.v1.department.search' | 'directory.v1.employee.create' | 'directory.v1.employee.delete' | 'directory.v1.employee.filter' | 'directory.v1.employee.mget' | 'directory.v1.employee.patch' | 'directory.v1.employee.regular' | 'directory.v1.employee.resurrect' | 'directory.v1.employee.search' | 'directory.v1.employee.toBeResigned';
export declare const directoryV1CollaborationRuleCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            subjects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
            objects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }>;
        params: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1CollaborationRuleDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        path: z.ZodObject<{
            collaboration_rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            collaboration_rule_id: string;
        }, {
            collaboration_rule_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1CollaborationRuleList: {
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
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            target_tenant_key: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1CollaborationRuleUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            subjects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
            objects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }>;
        params: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        path: z.ZodObject<{
            collaboration_rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            collaboration_rule_id: string;
        }, {
            collaboration_rule_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1CollaborationTenantList: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1CollborationShareEntityList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            target_tenant_key: z.ZodString;
            target_department_id: z.ZodOptional<z.ZodString>;
            target_group_id: z.ZodOptional<z.ZodString>;
            is_select_subject: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_department_id?: string | undefined;
            target_group_id?: string | undefined;
            is_select_subject?: boolean | undefined;
        }, {
            target_tenant_key: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_department_id?: string | undefined;
            target_group_id?: string | undefined;
            is_select_subject?: boolean | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            department: z.ZodObject<{
                custom_department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                parent_department_id: z.ZodOptional<z.ZodString>;
                leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    leader_type: z.ZodNumber;
                    leader_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    leader_type: number;
                    leader_id: string;
                }, {
                    leader_type: number;
                    leader_id: string;
                }>, "many">>;
                order_weight: z.ZodOptional<z.ZodString>;
                enabled_status: z.ZodOptional<z.ZodBoolean>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "9", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        ids: string[];
                    }, {
                        ids: string[];
                    }>, "many">>;
                    phone_value: z.ZodOptional<z.ZodObject<{
                        phone_number: z.ZodString;
                        extension_number: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }>>;
                    field_key: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentDelete: {
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
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentFilter: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            filter: z.ZodObject<{
                conditions: z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    operator: string;
                    field: string;
                }, {
                    value: string;
                    operator: string;
                    field: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentMget: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            department_ids: z.ZodArray<z.ZodString, "many">;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            required_fields: string[];
        }, {
            department_ids: string[];
            required_fields: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            department: z.ZodObject<{
                custom_department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                parent_department_id: z.ZodOptional<z.ZodString>;
                leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    leader_type: z.ZodNumber;
                    leader_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    leader_type: number;
                    leader_id: string;
                }, {
                    leader_type: number;
                    leader_id: string;
                }>, "many">>;
                order_weight: z.ZodOptional<z.ZodString>;
                enabled_status: z.ZodOptional<z.ZodBoolean>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_key: z.ZodOptional<z.ZodString>;
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                        user_type: z.ZodLiteral<"1">;
                    }, "strip", z.ZodTypeAny, {
                        user_type: "1";
                        ids: string[];
                    }, {
                        user_type: "1";
                        ids: string[];
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1DepartmentSearch: {
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
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            employee: z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    name: z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>;
                    another_name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }>>;
                mobile: z.ZodOptional<z.ZodString>;
                custom_employee_id: z.ZodOptional<z.ZodString>;
                avatar_key: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                enterprise_email: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNumber>;
                employee_order_in_departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodOptional<z.ZodString>;
                    order_weight_in_deparment: z.ZodOptional<z.ZodString>;
                    order_weight_among_deparments: z.ZodOptional<z.ZodString>;
                    is_main_department: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }>, "many">>;
                leader_id: z.ZodOptional<z.ZodString>;
                dotted_line_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                work_country_or_region: z.ZodOptional<z.ZodString>;
                work_place_id: z.ZodOptional<z.ZodString>;
                work_station: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                job_number: z.ZodOptional<z.ZodString>;
                extension_number: z.ZodOptional<z.ZodString>;
                join_date: z.ZodOptional<z.ZodString>;
                employment_type: z.ZodOptional<z.ZodNumber>;
                job_title_id: z.ZodOptional<z.ZodString>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "9", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        ids: string[];
                    }, {
                        ids: string[];
                    }>, "many">>;
                    phone_value: z.ZodOptional<z.ZodObject<{
                        phone_number: z.ZodString;
                        extension_number: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }>>;
                    field_key: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            }, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            }>;
            options: z.ZodOptional<z.ZodObject<{
                geo_name: z.ZodOptional<z.ZodString>;
                subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            }, {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            };
            options?: {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            } | undefined;
        }, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            };
            options?: {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            options: z.ZodOptional<z.ZodObject<{
                resigned_employee_resource_receiver: z.ZodOptional<z.ZodObject<{
                    department_chat_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    external_chat_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    docs_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    calendar_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    application_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    helpdesk_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    approval_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    email_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    minutes_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    survey_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    anycross_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                }, {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            }, {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            options?: {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            options?: {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
        }, "strip", z.ZodTypeAny, {
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeFilter: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            filter: z.ZodObject<{
                conditions: z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    operator: string;
                    field: string;
                }, {
                    value: string;
                    operator: string;
                    field: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeMget: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            employee_ids: z.ZodArray<z.ZodString, "many">;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            required_fields: string[];
            employee_ids: string[];
        }, {
            required_fields: string[];
            employee_ids: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            employee: z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    name: z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>;
                    another_name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }>>;
                mobile: z.ZodOptional<z.ZodString>;
                custom_employee_id: z.ZodOptional<z.ZodString>;
                avatar_key: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                enterprise_email: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNumber>;
                employee_order_in_departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodOptional<z.ZodString>;
                    order_weight_in_deparment: z.ZodOptional<z.ZodString>;
                    order_weight_among_deparments: z.ZodOptional<z.ZodString>;
                    is_main_department: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }>, "many">>;
                background_image_key: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                leader_id: z.ZodOptional<z.ZodString>;
                dotted_line_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                work_country_or_region: z.ZodOptional<z.ZodString>;
                work_place_id: z.ZodOptional<z.ZodString>;
                work_station: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                job_number: z.ZodOptional<z.ZodString>;
                extension_number: z.ZodOptional<z.ZodString>;
                join_date: z.ZodOptional<z.ZodString>;
                employment_type: z.ZodOptional<z.ZodNumber>;
                job_title_id: z.ZodOptional<z.ZodString>;
                job_level_id: z.ZodOptional<z.ZodString>;
                job_family_id: z.ZodOptional<z.ZodString>;
                resign_date: z.ZodOptional<z.ZodString>;
                resign_reason: z.ZodOptional<z.ZodEnum<["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]>>;
                resign_remark: z.ZodOptional<z.ZodString>;
                resign_type: z.ZodOptional<z.ZodEnum<["0", "1", "2", "3"]>>;
                is_frozen: z.ZodOptional<z.ZodBoolean>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "9", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        ids: string[];
                    }, {
                        ids: string[];
                    }>, "many">>;
                    phone_value: z.ZodOptional<z.ZodObject<{
                        phone_number: z.ZodString;
                        extension_number: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }>>;
                    field_key: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                description?: string | undefined;
                mobile?: string | undefined;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                is_frozen?: boolean | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
                background_image_key?: string | undefined;
                resign_date?: string | undefined;
                resign_reason?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | undefined;
                resign_remark?: string | undefined;
                resign_type?: "0" | "1" | "2" | "3" | undefined;
            }, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                description?: string | undefined;
                mobile?: string | undefined;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                is_frozen?: boolean | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
                background_image_key?: string | undefined;
                resign_date?: string | undefined;
                resign_reason?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | undefined;
                resign_remark?: string | undefined;
                resign_type?: "0" | "1" | "2" | "3" | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                description?: string | undefined;
                mobile?: string | undefined;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                is_frozen?: boolean | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
                background_image_key?: string | undefined;
                resign_date?: string | undefined;
                resign_reason?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | undefined;
                resign_remark?: string | undefined;
                resign_type?: "0" | "1" | "2" | "3" | undefined;
            };
        }, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                description?: string | undefined;
                mobile?: string | undefined;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                is_frozen?: boolean | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
                background_image_key?: string | undefined;
                resign_date?: string | undefined;
                resign_reason?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | undefined;
                resign_remark?: string | undefined;
                resign_type?: "0" | "1" | "2" | "3" | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeRegular: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeResurrect: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            employee_order_in_departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                order_weight_in_deparment: z.ZodOptional<z.ZodString>;
                order_weight_among_deparments: z.ZodOptional<z.ZodString>;
                is_main_department: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                order_weight_in_deparment?: string | undefined;
                order_weight_among_deparments?: string | undefined;
                is_main_department?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                order_weight_in_deparment?: string | undefined;
                order_weight_among_deparments?: string | undefined;
                is_main_department?: boolean | undefined;
            }>, "many">>;
            options: z.ZodOptional<z.ZodObject<{
                subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                subscription_ids?: string[] | undefined;
            }, {
                subscription_ids?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            options?: {
                subscription_ids?: string[] | undefined;
            } | undefined;
            employee_order_in_departments?: {
                department_id?: string | undefined;
                order_weight_in_deparment?: string | undefined;
                order_weight_among_deparments?: string | undefined;
                is_main_department?: boolean | undefined;
            }[] | undefined;
        }, {
            options?: {
                subscription_ids?: string[] | undefined;
            } | undefined;
            employee_order_in_departments?: {
                department_id?: string | undefined;
                order_weight_in_deparment?: string | undefined;
                order_weight_among_deparments?: string | undefined;
                is_main_department?: boolean | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeSearch: {
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
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1EmployeeToBeResigned: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            employee: z.ZodObject<{
                resign_date: z.ZodString;
                resign_reason: z.ZodEnum<["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]>;
                resign_type: z.ZodEnum<["1", "2", "3"]>;
                resign_remark: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                resign_date: string;
                resign_reason: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25";
                resign_type: "1" | "2" | "3";
                resign_remark?: string | undefined;
            }, {
                resign_date: string;
                resign_reason: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25";
                resign_type: "1" | "2" | "3";
                resign_remark?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            employee: {
                resign_date: string;
                resign_reason: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25";
                resign_type: "1" | "2" | "3";
                resign_remark?: string | undefined;
            };
        }, {
            employee: {
                resign_date: string;
                resign_reason: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "17" | "18" | "16" | "19" | "20" | "21" | "22" | "23" | "24" | "25";
                resign_type: "1" | "2" | "3";
                resign_remark?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const directoryV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            subjects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
            objects: z.ZodObject<{
                open_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                open_group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }, {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }, {
            subjects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
            objects: {
                open_user_ids?: string[] | undefined;
                open_department_ids?: string[] | undefined;
                open_group_ids?: string[] | undefined;
            };
        }>;
        params: z.ZodObject<{
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
        params: z.ZodObject<{
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
        }, {
            target_tenant_key: string;
        }>;
        path: z.ZodObject<{
            collaboration_rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            collaboration_rule_id: string;
        }, {
            collaboration_rule_id: string;
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
            target_tenant_key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            target_tenant_key: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            target_tenant_key: string;
            page_size?: number | undefined;
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
            department: z.ZodObject<{
                custom_department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                parent_department_id: z.ZodOptional<z.ZodString>;
                leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    leader_type: z.ZodNumber;
                    leader_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    leader_type: number;
                    leader_id: string;
                }, {
                    leader_type: number;
                    leader_id: string;
                }>, "many">>;
                order_weight: z.ZodOptional<z.ZodString>;
                enabled_status: z.ZodOptional<z.ZodBoolean>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "9", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        ids: string[];
                    }, {
                        ids: string[];
                    }>, "many">>;
                    phone_value: z.ZodOptional<z.ZodObject<{
                        phone_number: z.ZodString;
                        extension_number: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }>>;
                    field_key: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
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
            filter: z.ZodObject<{
                conditions: z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    operator: string;
                    field: string;
                }, {
                    value: string;
                    operator: string;
                    field: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            department_ids: z.ZodArray<z.ZodString, "many">;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            required_fields: string[];
        }, {
            department_ids: string[];
            required_fields: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            department: z.ZodObject<{
                custom_department_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                parent_department_id: z.ZodOptional<z.ZodString>;
                leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    leader_type: z.ZodNumber;
                    leader_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    leader_type: number;
                    leader_id: string;
                }, {
                    leader_type: number;
                    leader_id: string;
                }>, "many">>;
                order_weight: z.ZodOptional<z.ZodString>;
                enabled_status: z.ZodOptional<z.ZodBoolean>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_key: z.ZodOptional<z.ZodString>;
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                        user_type: z.ZodLiteral<"1">;
                    }, "strip", z.ZodTypeAny, {
                        user_type: "1";
                        ids: string[];
                    }, {
                        user_type: "1";
                        ids: string[];
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }, {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }, {
            department: {
                name?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                parent_department_id?: string | undefined;
                leaders?: {
                    leader_type: number;
                    leader_id: string;
                }[] | undefined;
                custom_department_id?: string | undefined;
                order_weight?: string | undefined;
                enabled_status?: boolean | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        user_type: "1";
                        ids: string[];
                    }[] | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
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
            query: z.ZodString;
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            query: string;
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            employee: z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    name: z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>;
                    another_name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }, {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                }>>;
                mobile: z.ZodOptional<z.ZodString>;
                custom_employee_id: z.ZodOptional<z.ZodString>;
                avatar_key: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                enterprise_email: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNumber>;
                employee_order_in_departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodOptional<z.ZodString>;
                    order_weight_in_deparment: z.ZodOptional<z.ZodString>;
                    order_weight_among_deparments: z.ZodOptional<z.ZodString>;
                    is_main_department: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }, {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }>, "many">>;
                leader_id: z.ZodOptional<z.ZodString>;
                dotted_line_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                work_country_or_region: z.ZodOptional<z.ZodString>;
                work_place_id: z.ZodOptional<z.ZodString>;
                work_station: z.ZodOptional<z.ZodObject<{
                    default_value: z.ZodString;
                    i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>>;
                job_number: z.ZodOptional<z.ZodString>;
                extension_number: z.ZodOptional<z.ZodString>;
                join_date: z.ZodOptional<z.ZodString>;
                employment_type: z.ZodOptional<z.ZodNumber>;
                job_title_id: z.ZodOptional<z.ZodString>;
                custom_field_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_type: z.ZodOptional<z.ZodEnum<["1", "2", "3", "4", "9", "10", "11"]>>;
                    text_value: z.ZodOptional<z.ZodObject<{
                        default_value: z.ZodString;
                        i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>>;
                    url_value: z.ZodOptional<z.ZodObject<{
                        link_text: z.ZodObject<{
                            default_value: z.ZodString;
                            i18n_value: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>;
                        url: z.ZodString;
                        pcurl: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }, {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    }>>;
                    enum_value: z.ZodOptional<z.ZodObject<{
                        enum_ids: z.ZodArray<z.ZodString, "many">;
                        enum_type: z.ZodEnum<["1", "2"]>;
                    }, "strip", z.ZodTypeAny, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }, {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    }>>;
                    user_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        ids: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        ids: string[];
                    }, {
                        ids: string[];
                    }>, "many">>;
                    phone_value: z.ZodOptional<z.ZodObject<{
                        phone_number: z.ZodString;
                        extension_number: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }, {
                        phone_number: string;
                        extension_number?: string | undefined;
                    }>>;
                    field_key: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }, {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            }, {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            }>;
            options: z.ZodOptional<z.ZodObject<{
                geo_name: z.ZodOptional<z.ZodString>;
                subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            }, {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            };
            options?: {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            } | undefined;
        }, {
            employee: {
                name?: {
                    name: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    };
                    another_name?: string | undefined;
                } | undefined;
                mobile?: string | undefined;
                job_title_id?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                avatar_key?: string | undefined;
                work_station?: {
                    default_value: string;
                    i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                } | undefined;
                enterprise_email?: string | undefined;
                employment_type?: number | undefined;
                leader_id?: string | undefined;
                extension_number?: string | undefined;
                custom_field_values?: {
                    text_value?: {
                        default_value: string;
                        i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    } | undefined;
                    enum_value?: {
                        enum_type: "1" | "2";
                        enum_ids: string[];
                    } | undefined;
                    field_type?: "1" | "2" | "3" | "4" | "9" | "10" | "11" | undefined;
                    url_value?: {
                        url: string;
                        link_text: {
                            default_value: string;
                            i18n_value?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        };
                        pcurl: string;
                    } | undefined;
                    user_values?: {
                        ids: string[];
                    }[] | undefined;
                    phone_value?: {
                        phone_number: string;
                        extension_number?: string | undefined;
                    } | undefined;
                    field_key?: string | undefined;
                }[] | undefined;
                custom_employee_id?: string | undefined;
                employee_order_in_departments?: {
                    department_id?: string | undefined;
                    order_weight_in_deparment?: string | undefined;
                    order_weight_among_deparments?: string | undefined;
                    is_main_department?: boolean | undefined;
                }[] | undefined;
                dotted_line_leader_ids?: string[] | undefined;
                work_country_or_region?: string | undefined;
                work_place_id?: string | undefined;
                job_number?: string | undefined;
                join_date?: string | undefined;
            };
            options?: {
                subscription_ids?: string[] | undefined;
                geo_name?: string | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            options: z.ZodOptional<z.ZodObject<{
                resigned_employee_resource_receiver: z.ZodOptional<z.ZodObject<{
                    department_chat_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    external_chat_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    docs_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    calendar_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    application_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    helpdesk_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    approval_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    email_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    minutes_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    survey_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                    anycross_acceptor_employee_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                }, {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            }, {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            options?: {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            options?: {
                resigned_employee_resource_receiver?: {
                    department_chat_acceptor_employee_id?: string | undefined;
                    external_chat_acceptor_employee_id?: string | undefined;
                    docs_acceptor_employee_id?: string | undefined;
                    calendar_acceptor_employee_id?: string | undefined;
                    application_acceptor_employee_id?: string | undefined;
                    helpdesk_acceptor_employee_id?: string | undefined;
                    approval_acceptor_employee_id?: string | undefined;
                    email_acceptor_employee_id?: string | undefined;
                    minutes_acceptor_employee_id?: string | undefined;
                    survey_acceptor_employee_id?: string | undefined;
                    anycross_acceptor_employee_id?: string | undefined;
                } | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
        }, "strip", z.ZodTypeAny, {
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
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
            filter: z.ZodObject<{
                conditions: z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    operator: string;
                    field: string;
                }, {
                    value: string;
                    operator: string;
                    field: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }, {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            }>;
            required_fields: z.ZodArray<z.ZodString, "many">;
            page_request: z.ZodObject<{
                page_size: z.ZodOptional<z.ZodNumber>;
                page_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }, {
                page_size?: number | undefined;
                page_token?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }, {
            filter: {
                conditions: {
                    value: string;
                    operator: string;
                    field: string;
                }[];
            };
            required_fields: string[];
            page_request: {
                page_size?: number | undefined;
                page_token?: string | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            employee_ids: z.ZodArray<z.ZodString, "many">;
            required_fields: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            required_fields: string[];
            employee_ids: string[];
        }, {
            required_fields: string[];
            employee_ids: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
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
            employee_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "employee_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
            employee_id_type?: "union_id" | "open_id" | "employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
