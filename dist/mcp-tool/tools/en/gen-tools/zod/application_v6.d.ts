import { z } from 'zod';
export type applicationV6ToolName = 'application.v6.appBadge.set' | 'application.v6.appRecommendRule.list' | 'application.v6.applicationAppUsage.departmentOverview' | 'application.v6.applicationAppUsage.messagePushOverview' | 'application.v6.applicationAppUsage.overview' | 'application.v6.applicationAppVersion.contactsRangeSuggest' | 'application.v6.applicationAppVersion.get' | 'application.v6.applicationAppVersion.list' | 'application.v6.applicationAppVersion.patch' | 'application.v6.applicationCollaborators.get' | 'application.v6.applicationCollaborators.update' | 'application.v6.application.contactsRangeConfiguration' | 'application.v6.applicationContactsRange.patch' | 'application.v6.applicationFeedback.list' | 'application.v6.applicationFeedback.patch' | 'application.v6.application.get' | 'application.v6.application.list' | 'application.v6.applicationManagement.update' | 'application.v6.applicationOwner.update' | 'application.v6.application.patch' | 'application.v6.application.underauditlist' | 'application.v6.applicationVisibility.checkWhiteBlackList' | 'application.v6.applicationVisibility.patch' | 'application.v6.scope.apply' | 'application.v6.scope.list';
export declare const applicationV6AppBadgeSet: {
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
            version: z.ZodString;
            extra: z.ZodOptional<z.ZodString>;
            pc: z.ZodOptional<z.ZodObject<{
                web_app: z.ZodOptional<z.ZodNumber>;
                gadget: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                web_app?: number | undefined;
                gadget?: number | undefined;
            }, {
                web_app?: number | undefined;
                gadget?: number | undefined;
            }>>;
            mobile: z.ZodOptional<z.ZodObject<{
                web_app: z.ZodOptional<z.ZodNumber>;
                gadget: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                web_app?: number | undefined;
                gadget?: number | undefined;
            }, {
                web_app?: number | undefined;
                gadget?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            version: string;
            extra?: string | undefined;
            pc?: {
                web_app?: number | undefined;
                gadget?: number | undefined;
            } | undefined;
            mobile?: {
                web_app?: number | undefined;
                gadget?: number | undefined;
            } | undefined;
        }, {
            user_id: string;
            version: string;
            extra?: string | undefined;
            pc?: {
                web_app?: number | undefined;
                gadget?: number | undefined;
            } | undefined;
            mobile?: {
                web_app?: number | undefined;
                gadget?: number | undefined;
            } | undefined;
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
export declare const applicationV6AppRecommendRuleList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const applicationV6ApplicationAppUsageDepartmentOverview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            date: z.ZodString;
            cycle_type: z.ZodNumber;
            department_id: z.ZodOptional<z.ZodString>;
            recursion: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            cycle_type: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id?: string | undefined;
            recursion?: number | undefined;
        }, {
            date: string;
            cycle_type: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id?: string | undefined;
            recursion?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppUsageMessagePushOverview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            date: z.ZodString;
            cycle_type: z.ZodNumber;
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            cycle_type: number;
            department_id?: string | undefined;
        }, {
            date: string;
            cycle_type: number;
            department_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppUsageOverview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            date: z.ZodString;
            cycle_type: z.ZodNumber;
            department_id: z.ZodOptional<z.ZodString>;
            ability: z.ZodEnum<["app", "mp", "h5", "bot"]>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            cycle_type: number;
            ability: "bot" | "app" | "mp" | "h5";
            department_id?: string | undefined;
        }, {
            date: string;
            cycle_type: number;
            ability: "bot" | "app" | "mp" | "h5";
            department_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppVersionContactsRangeSuggest: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            version_id: string;
        }, {
            app_id: string;
            version_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppVersionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            lang: z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            version_id: string;
        }, {
            app_id: string;
            version_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppVersionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            lang: z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            order?: number | undefined;
        }, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            order?: number | undefined;
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationAppVersionPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            status: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status?: number | undefined;
        }, {
            status?: number | undefined;
        }>>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
            operator_id: z.ZodString;
            reject_reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
            operator_id: string;
            reject_reason?: string | undefined;
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
            operator_id: string;
            reject_reason?: string | undefined;
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            version_id: string;
        }, {
            app_id: string;
            version_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationCollaboratorsGet: {
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
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV6ApplicationCollaboratorsUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            adds: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["administrator", "developer", "operator"]>;
                user_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "operator" | "administrator" | "developer";
                user_id: string;
            }, {
                type: "operator" | "administrator" | "developer";
                user_id: string;
            }>, "many">>;
            removes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            adds?: {
                type: "operator" | "administrator" | "developer";
                user_id: string;
            }[] | undefined;
            removes?: string[] | undefined;
        }, {
            adds?: {
                type: "operator" | "administrator" | "developer";
                user_id: string;
            }[] | undefined;
            removes?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV6ApplicationContactsRangeConfiguration: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
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
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationContactsRangePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            contacts_range_type: z.ZodEnum<["equal_to_availability", "some", "all"]>;
            add_visible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
            del_visible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            contacts_range_type: "some" | "equal_to_availability" | "all";
            add_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
        }, {
            contacts_range_type: "some" | "equal_to_availability" | "all";
            add_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationFeedbackList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            from_date: z.ZodOptional<z.ZodString>;
            to_date: z.ZodOptional<z.ZodString>;
            feedback_type: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            feedback_type?: number | undefined;
        }, {
            status?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            feedback_type?: number | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationFeedbackPatch: {
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
            status: z.ZodNumber;
            operator_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: number;
            operator_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            status: number;
            operator_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            feedback_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            feedback_id: string;
        }, {
            app_id: string;
            feedback_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            lang: z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationList: {
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
            user_id_type: z.ZodOptional<z.ZodString>;
            lang: z.ZodString;
            status: z.ZodOptional<z.ZodNumber>;
            payment_type: z.ZodOptional<z.ZodNumber>;
            owner_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            lang: string;
            status?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            payment_type?: number | undefined;
            owner_type?: number | undefined;
        }, {
            lang: string;
            status?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: string | undefined;
            payment_type?: number | undefined;
            owner_type?: number | undefined;
        }>;
    };
};
export declare const applicationV6ApplicationManagementUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            enable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            enable?: boolean | undefined;
        }, {
            enable?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV6ApplicationOwnerUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            owner_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            owner_id: string;
        }, {
            owner_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const applicationV6ApplicationPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            common_categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            common_categories?: string[] | undefined;
        }, {
            common_categories?: string[] | undefined;
        }>>;
        params: z.ZodObject<{
            lang: z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>;
        }, "strip", z.ZodTypeAny, {
            lang: "zh_cn" | "en_us" | "ja_jp";
        }, {
            lang: "zh_cn" | "en_us" | "ja_jp";
        }>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationUnderauditlist: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            lang: z.ZodEnum<["zh_cn", "en_us", "ja_jp"]>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            lang: "zh_cn" | "en_us" | "ja_jp";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const applicationV6ApplicationVisibilityCheckWhiteBlackList: {
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
            group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
        }, {
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
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
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ApplicationVisibilityPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            add_visible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
            del_visible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
            add_invisible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
            del_invisible_list: z.ZodOptional<z.ZodObject<{
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }, {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            }>>;
            is_visible_to_all: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            add_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            add_invisible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_invisible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            is_visible_to_all?: boolean | undefined;
        }, {
            add_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_visible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            add_invisible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            del_invisible_list?: {
                user_ids?: string[] | undefined;
                department_ids?: string[] | undefined;
                group_ids?: string[] | undefined;
            } | undefined;
            is_visible_to_all?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
    };
};
export declare const applicationV6ScopeApply: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
};
export declare const applicationV6ScopeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
};
export declare const applicationV6Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
}[];
