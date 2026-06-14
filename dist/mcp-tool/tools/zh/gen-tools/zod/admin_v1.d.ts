import { z } from 'zod';
export type adminV1ToolName = 'admin.v1.adminDeptStat.list' | 'admin.v1.adminUserStat.list' | 'admin.v1.auditInfo.list' | 'admin.v1.badge.create' | 'admin.v1.badge.get' | 'admin.v1.badgeGrant.create' | 'admin.v1.badgeGrant.delete' | 'admin.v1.badgeGrant.get' | 'admin.v1.badgeGrant.list' | 'admin.v1.badgeGrant.update' | 'admin.v1.badge.list' | 'admin.v1.badge.update' | 'admin.v1.password.reset';
export declare const adminV1AdminDeptStatList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            department_id_type: z.ZodEnum<["department_id", "open_department_id"]>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            department_id: z.ZodString;
            contains_child_dept: z.ZodBoolean;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            target_geo: z.ZodOptional<z.ZodString>;
            with_product_version: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            department_id_type: "department_id" | "open_department_id";
            start_date: string;
            end_date: string;
            contains_child_dept: boolean;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_geo?: string | undefined;
            with_product_version?: boolean | undefined;
        }, {
            department_id: string;
            department_id_type: "department_id" | "open_department_id";
            start_date: string;
            end_date: string;
            contains_child_dept: boolean;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_geo?: string | undefined;
            with_product_version?: boolean | undefined;
        }>;
    };
};
export declare const adminV1AdminUserStatList: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            target_geo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_date: string;
            end_date: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_geo?: string | undefined;
        }, {
            start_date: string;
            end_date: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_geo?: string | undefined;
        }>;
    };
};
export declare const adminV1AuditInfoList: {
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
            latest: z.ZodOptional<z.ZodNumber>;
            oldest: z.ZodOptional<z.ZodNumber>;
            event_name: z.ZodOptional<z.ZodString>;
            operator_type: z.ZodOptional<z.ZodEnum<["user", "bot"]>>;
            operator_value: z.ZodOptional<z.ZodString>;
            event_module: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_type: z.ZodOptional<z.ZodNumber>;
            object_type: z.ZodOptional<z.ZodNumber>;
            object_value: z.ZodOptional<z.ZodString>;
            ext_filter_object_by_ccm_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            user_type?: number | undefined;
            latest?: number | undefined;
            oldest?: number | undefined;
            event_name?: string | undefined;
            operator_type?: "user" | "bot" | undefined;
            operator_value?: string | undefined;
            event_module?: number | undefined;
            object_type?: number | undefined;
            object_value?: string | undefined;
            ext_filter_object_by_ccm_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            user_type?: number | undefined;
            latest?: number | undefined;
            oldest?: number | undefined;
            event_name?: string | undefined;
            operator_type?: "user" | "bot" | undefined;
            operator_value?: string | undefined;
            event_module?: number | undefined;
            object_type?: number | undefined;
            object_value?: string | undefined;
            ext_filter_object_by_ccm_token?: string | undefined;
        }>>;
    };
};
export declare const adminV1BadgeCreate: {
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
            explanation: z.ZodOptional<z.ZodString>;
            detail_image: z.ZodString;
            show_image: z.ZodString;
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            i18n_explanation: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
        }, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
        }>;
    };
};
export declare const adminV1BadgeGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            badge_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
        }, {
            badge_id: string;
        }>;
    };
};
export declare const adminV1BadgeGrantCreate: {
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
            grant_type: z.ZodNumber;
            time_zone: z.ZodString;
            rule_detail: z.ZodObject<{
                effective_time: z.ZodOptional<z.ZodString>;
                expiration_time: z.ZodOptional<z.ZodString>;
                anniversary: z.ZodOptional<z.ZodNumber>;
                effective_period: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            }, {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            }>;
            is_grant_all: z.ZodBoolean;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            grant_type: number;
            time_zone: string;
            rule_detail: {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            };
            is_grant_all: boolean;
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
        }, {
            name: string;
            grant_type: number;
            time_zone: string;
            rule_detail: {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            };
            is_grant_all: boolean;
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
        }>;
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
            badge_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
        }, {
            badge_id: string;
        }>;
    };
};
export declare const adminV1BadgeGrantDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            badge_id: z.ZodString;
            grant_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
            grant_id: string;
        }, {
            badge_id: string;
            grant_id: string;
        }>;
    };
};
export declare const adminV1BadgeGrantGet: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            badge_id: z.ZodString;
            grant_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
            grant_id: string;
        }, {
            badge_id: string;
            grant_id: string;
        }>;
    };
};
export declare const adminV1BadgeGrantList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            name?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            name?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
        path: z.ZodObject<{
            badge_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
        }, {
            badge_id: string;
        }>;
    };
};
export declare const adminV1BadgeGrantUpdate: {
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
            grant_type: z.ZodNumber;
            time_zone: z.ZodString;
            rule_detail: z.ZodObject<{
                effective_time: z.ZodOptional<z.ZodString>;
                expiration_time: z.ZodOptional<z.ZodString>;
                anniversary: z.ZodOptional<z.ZodNumber>;
                effective_period: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            }, {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            }>;
            is_grant_all: z.ZodBoolean;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            group_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            grant_type: number;
            time_zone: string;
            rule_detail: {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            };
            is_grant_all: boolean;
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
        }, {
            name: string;
            grant_type: number;
            time_zone: string;
            rule_detail: {
                effective_time?: string | undefined;
                expiration_time?: string | undefined;
                anniversary?: number | undefined;
                effective_period?: number | undefined;
            };
            is_grant_all: boolean;
            user_ids?: string[] | undefined;
            department_ids?: string[] | undefined;
            group_ids?: string[] | undefined;
        }>;
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
            badge_id: z.ZodString;
            grant_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
            grant_id: string;
        }, {
            badge_id: string;
            grant_id: string;
        }>;
    };
};
export declare const adminV1BadgeList: {
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
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            name?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            name?: string | undefined;
        }>;
    };
};
export declare const adminV1BadgeUpdate: {
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
            explanation: z.ZodOptional<z.ZodString>;
            detail_image: z.ZodString;
            show_image: z.ZodString;
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            i18n_explanation: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
        }, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
        }>;
        path: z.ZodObject<{
            badge_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
        }, {
            badge_id: string;
        }>;
    };
};
export declare const adminV1PasswordReset: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            password: z.ZodObject<{
                ent_email_password: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                ent_email_password: string;
            }, {
                ent_email_password: string;
            }>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            password: {
                ent_email_password: string;
            };
        }, {
            user_id: string;
            password: {
                ent_email_password: string;
            };
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
    };
};
export declare const adminV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            department_id_type: z.ZodEnum<["department_id", "open_department_id"]>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            department_id: z.ZodString;
            contains_child_dept: z.ZodBoolean;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            target_geo: z.ZodOptional<z.ZodString>;
            with_product_version: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            department_id_type: "department_id" | "open_department_id";
            start_date: string;
            end_date: string;
            contains_child_dept: boolean;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_geo?: string | undefined;
            with_product_version?: boolean | undefined;
        }, {
            department_id: string;
            department_id_type: "department_id" | "open_department_id";
            start_date: string;
            end_date: string;
            contains_child_dept: boolean;
            page_size?: number | undefined;
            page_token?: string | undefined;
            target_geo?: string | undefined;
            with_product_version?: boolean | undefined;
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            target_geo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_date: string;
            end_date: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_geo?: string | undefined;
        }, {
            start_date: string;
            end_date: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            target_geo?: string | undefined;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
            latest: z.ZodOptional<z.ZodNumber>;
            oldest: z.ZodOptional<z.ZodNumber>;
            event_name: z.ZodOptional<z.ZodString>;
            operator_type: z.ZodOptional<z.ZodEnum<["user", "bot"]>>;
            operator_value: z.ZodOptional<z.ZodString>;
            event_module: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_type: z.ZodOptional<z.ZodNumber>;
            object_type: z.ZodOptional<z.ZodNumber>;
            object_value: z.ZodOptional<z.ZodString>;
            ext_filter_object_by_ccm_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            user_type?: number | undefined;
            latest?: number | undefined;
            oldest?: number | undefined;
            event_name?: string | undefined;
            operator_type?: "user" | "bot" | undefined;
            operator_value?: string | undefined;
            event_module?: number | undefined;
            object_type?: number | undefined;
            object_value?: string | undefined;
            ext_filter_object_by_ccm_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            user_type?: number | undefined;
            latest?: number | undefined;
            oldest?: number | undefined;
            event_name?: string | undefined;
            operator_type?: "user" | "bot" | undefined;
            operator_value?: string | undefined;
            event_module?: number | undefined;
            object_type?: number | undefined;
            object_value?: string | undefined;
            ext_filter_object_by_ccm_token?: string | undefined;
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
            name: z.ZodString;
            explanation: z.ZodOptional<z.ZodString>;
            detail_image: z.ZodString;
            show_image: z.ZodString;
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            i18n_explanation: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
        }, {
            name: string;
            detail_image: string;
            show_image: string;
            explanation?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            i18n_explanation?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
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
            badge_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            badge_id: string;
        }, {
            badge_id: string;
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
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            name?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            name?: string | undefined;
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
            password: z.ZodObject<{
                ent_email_password: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                ent_email_password: string;
            }, {
                ent_email_password: string;
            }>;
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            password: {
                ent_email_password: string;
            };
        }, {
            user_id: string;
            password: {
                ent_email_password: string;
            };
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
    };
})[];
