import { z } from 'zod';
export type acsV1ToolName = 'acs.v1.accessRecord.list' | 'acs.v1.device.list' | 'acs.v1.ruleExternal.create' | 'acs.v1.ruleExternal.delete' | 'acs.v1.ruleExternal.deviceBind' | 'acs.v1.ruleExternal.get' | 'acs.v1.user.get' | 'acs.v1.user.list' | 'acs.v1.user.patch' | 'acs.v1.visitor.create' | 'acs.v1.visitor.delete';
export declare const acsV1AccessRecordList: {
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
            from: z.ZodNumber;
            to: z.ZodNumber;
            device_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            from: number;
            to: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
            device_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            from: number;
            to: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
            device_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const acsV1DeviceList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
};
export declare const acsV1RuleExternalCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            rule: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                }>, "many">>;
                user_count: z.ZodOptional<z.ZodString>;
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_type: z.ZodNumber;
                    user_id: z.ZodOptional<z.ZodString>;
                    user_name: z.ZodOptional<z.ZodString>;
                    phone_num: z.ZodOptional<z.ZodString>;
                    department_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }, {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }>, "many">>;
                visitor_count: z.ZodOptional<z.ZodString>;
                visitors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_type: z.ZodNumber;
                    user_id: z.ZodOptional<z.ZodString>;
                    user_name: z.ZodOptional<z.ZodString>;
                    phone_num: z.ZodOptional<z.ZodString>;
                    department_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }, {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }>, "many">>;
                remind_face: z.ZodOptional<z.ZodBoolean>;
                opening_time: z.ZodOptional<z.ZodObject<{
                    valid_day: z.ZodOptional<z.ZodObject<{
                        start_day: z.ZodNumber;
                        end_day: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        start_day: number;
                        end_day: number;
                    }, {
                        start_day: number;
                        end_day: number;
                    }>>;
                    weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    day_times: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        start_hhmm: z.ZodNumber;
                        end_hhmm: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        start_hhmm: number;
                        end_hhmm: number;
                    }, {
                        start_hhmm: number;
                        end_hhmm: number;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                }, {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                }>>;
                is_temp: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
                devices?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                user_count?: string | undefined;
                users?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                visitor_count?: string | undefined;
                visitors?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                remind_face?: boolean | undefined;
                opening_time?: {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                } | undefined;
                is_temp?: boolean | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
                devices?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                user_count?: string | undefined;
                users?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                visitor_count?: string | undefined;
                visitors?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                remind_face?: boolean | undefined;
                opening_time?: {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                } | undefined;
                is_temp?: boolean | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            rule: {
                id?: string | undefined;
                name?: string | undefined;
                devices?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                user_count?: string | undefined;
                users?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                visitor_count?: string | undefined;
                visitors?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                remind_face?: boolean | undefined;
                opening_time?: {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                } | undefined;
                is_temp?: boolean | undefined;
            };
        }, {
            rule: {
                id?: string | undefined;
                name?: string | undefined;
                devices?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                user_count?: string | undefined;
                users?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                visitor_count?: string | undefined;
                visitors?: {
                    user_type: number;
                    user_id?: string | undefined;
                    user_name?: string | undefined;
                    phone_num?: string | undefined;
                    department_id?: string | undefined;
                }[] | undefined;
                remind_face?: boolean | undefined;
                opening_time?: {
                    valid_day?: {
                        start_day: number;
                        end_day: number;
                    } | undefined;
                    weekdays?: number[] | undefined;
                    day_times?: {
                        start_hhmm: number;
                        end_hhmm: number;
                    }[] | undefined;
                } | undefined;
                is_temp?: boolean | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            rule_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            rule_id?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            rule_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const acsV1RuleExternalDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rule_id: string;
        }, {
            rule_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const acsV1RuleExternalDeviceBind: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            device_id: z.ZodString;
            rule_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            device_id: string;
            rule_ids: string[];
        }, {
            device_id: string;
            rule_ids: string[];
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const acsV1RuleExternalGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            device_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            device_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            device_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const acsV1UserGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
    };
};
export declare const acsV1UserList: {
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
    };
};
export declare const acsV1UserPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            feature: z.ZodOptional<z.ZodObject<{
                card: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                card?: number | undefined;
            }, {
                card?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            feature?: {
                card?: number | undefined;
            } | undefined;
        }, {
            feature?: {
                card?: number | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
    };
};
export declare const acsV1VisitorCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user: z.ZodObject<{
                user_type: z.ZodNumber;
                user_id: z.ZodOptional<z.ZodString>;
                user_name: z.ZodOptional<z.ZodString>;
                phone_num: z.ZodOptional<z.ZodString>;
                department_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_type: number;
                user_id?: string | undefined;
                user_name?: string | undefined;
                phone_num?: string | undefined;
                department_id?: string | undefined;
            }, {
                user_type: number;
                user_id?: string | undefined;
                user_name?: string | undefined;
                phone_num?: string | undefined;
                department_id?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            user: {
                user_type: number;
                user_id?: string | undefined;
                user_name?: string | undefined;
                phone_num?: string | undefined;
                department_id?: string | undefined;
            };
        }, {
            user: {
                user_type: number;
                user_id?: string | undefined;
                user_name?: string | undefined;
                phone_num?: string | undefined;
                department_id?: string | undefined;
            };
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
export declare const acsV1VisitorDelete: {
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
            visitor_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            visitor_id: string;
        }, {
            visitor_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const acsV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
}[];
