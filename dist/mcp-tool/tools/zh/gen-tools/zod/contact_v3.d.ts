import { z } from 'zod';
export type contactV3ToolName = 'contact.v3.customAttr.list' | 'contact.v3.department.batch' | 'contact.v3.department.children' | 'contact.v3.department.create' | 'contact.v3.department.delete' | 'contact.v3.department.get' | 'contact.v3.department.list' | 'contact.v3.department.parent' | 'contact.v3.department.patch' | 'contact.v3.department.search' | 'contact.v3.department.unbindDepartmentChat' | 'contact.v3.department.update' | 'contact.v3.department.updateDepartmentId' | 'contact.v3.employeeTypeEnum.create' | 'contact.v3.employeeTypeEnum.delete' | 'contact.v3.employeeTypeEnum.list' | 'contact.v3.employeeTypeEnum.update' | 'contact.v3.functionalRole.create' | 'contact.v3.functionalRole.delete' | 'contact.v3.functionalRoleMember.batchCreate' | 'contact.v3.functionalRoleMember.batchDelete' | 'contact.v3.functionalRoleMember.get' | 'contact.v3.functionalRoleMember.list' | 'contact.v3.functionalRoleMember.scopes' | 'contact.v3.functionalRole.update' | 'contact.v3.group.create' | 'contact.v3.group.delete' | 'contact.v3.group.get' | 'contact.v3.group.memberBelong' | 'contact.v3.groupMember.add' | 'contact.v3.groupMember.batchAdd' | 'contact.v3.groupMember.batchRemove' | 'contact.v3.groupMember.remove' | 'contact.v3.groupMember.simplelist' | 'contact.v3.group.patch' | 'contact.v3.group.simplelist' | 'contact.v3.jobFamily.create' | 'contact.v3.jobFamily.delete' | 'contact.v3.jobFamily.get' | 'contact.v3.jobFamily.list' | 'contact.v3.jobFamily.update' | 'contact.v3.jobLevel.create' | 'contact.v3.jobLevel.delete' | 'contact.v3.jobLevel.get' | 'contact.v3.jobLevel.list' | 'contact.v3.jobLevel.update' | 'contact.v3.jobTitle.get' | 'contact.v3.jobTitle.list' | 'contact.v3.scope.list' | 'contact.v3.unit.bindDepartment' | 'contact.v3.unit.create' | 'contact.v3.unit.delete' | 'contact.v3.unit.get' | 'contact.v3.unit.list' | 'contact.v3.unit.listDepartment' | 'contact.v3.unit.patch' | 'contact.v3.unit.unbindDepartment' | 'contact.v3.user.batch' | 'contact.v3.user.batchGetId' | 'contact.v3.user.create' | 'contact.v3.user.delete' | 'contact.v3.user.findByDepartment' | 'contact.v3.user.get' | 'contact.v3.user.list' | 'contact.v3.user.patch' | 'contact.v3.user.resurrect' | 'contact.v3.user.update' | 'contact.v3.user.updateUserId' | 'contact.v3.workCity.get' | 'contact.v3.workCity.list';
export declare const contactV3CustomAttrList: {
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
    };
};
export declare const contactV3DepartmentBatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            department_ids: z.ZodArray<z.ZodString, "many">;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3DepartmentChildren: {
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
            fetch_child: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            fetch_child?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            fetch_child?: boolean | undefined;
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
export declare const contactV3DepartmentCreate: {
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
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            parent_department_id: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            leader_user_id: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodString>;
            unit_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            create_group_chat: z.ZodOptional<z.ZodBoolean>;
            leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                leaderType: z.ZodNumber;
                leaderID: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                leaderType: number;
                leaderID: string;
            }, {
                leaderType: number;
                leaderID: string;
            }>, "many">>;
            group_chat_employee_types: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            department_hrbps: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_department_id: string;
            department_id?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            unit_ids?: string[] | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
        }, {
            name: string;
            parent_department_id: string;
            department_id?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            unit_ids?: string[] | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
    };
};
export declare const contactV3DepartmentDelete: {
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
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3DepartmentGet: {
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
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3DepartmentList: {
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
            parent_department_id: z.ZodOptional<z.ZodString>;
            fetch_child: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            fetch_child?: boolean | undefined;
            parent_department_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            fetch_child?: boolean | undefined;
            parent_department_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3DepartmentParent: {
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
            department_id: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3DepartmentPatch: {
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
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            parent_department_id: z.ZodOptional<z.ZodString>;
            leader_user_id: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodString>;
            create_group_chat: z.ZodOptional<z.ZodBoolean>;
            leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                leaderType: z.ZodNumber;
                leaderID: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                leaderType: number;
                leaderID: string;
            }, {
                leaderType: number;
                leaderID: string;
            }>, "many">>;
            group_chat_employee_types: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            department_hrbps: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            parent_department_id?: string | undefined;
            leader_user_id?: string | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
        }, {
            name?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            parent_department_id?: string | undefined;
            leader_user_id?: string | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3DepartmentSearch: {
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
        }, "strip", z.ZodTypeAny, {
            query: string;
        }, {
            query: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3DepartmentUnbindDepartmentChat: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
    };
};
export declare const contactV3DepartmentUpdate: {
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
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            parent_department_id: z.ZodString;
            leader_user_id: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodString>;
            create_group_chat: z.ZodOptional<z.ZodBoolean>;
            leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                leaderType: z.ZodNumber;
                leaderID: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                leaderType: number;
                leaderID: string;
            }, {
                leaderType: number;
                leaderID: string;
            }>, "many">>;
            group_chat_employee_types: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_department_id: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
        }, {
            name: string;
            parent_department_id: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3DepartmentUpdateDepartmentId: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            new_department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            new_department_id: string;
        }, {
            new_department_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3EmployeeTypeEnumCreate: {
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
            enum_type: z.ZodNumber;
            enum_status: z.ZodNumber;
            i18n_content: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const contactV3EmployeeTypeEnumDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            enum_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            enum_id?: string | undefined;
        }, {
            enum_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3EmployeeTypeEnumList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
};
export declare const contactV3EmployeeTypeEnumUpdate: {
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
            enum_type: z.ZodNumber;
            enum_status: z.ZodNumber;
            i18n_content: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            enum_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            enum_id?: string | undefined;
        }, {
            enum_id?: string | undefined;
        }>>;
    };
};
export declare const contactV3FunctionalRoleCreate: {
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
        }, "strip", z.ZodTypeAny, {
            role_name: string;
        }, {
            role_name: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            members: string[];
        }, {
            members: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleMemberBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            members: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            members?: string[] | undefined;
        }, {
            members?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleMemberGet: {
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
            role_id: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            role_id: string;
        }, {
            member_id: string;
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleMemberList: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
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
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleMemberScopes: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodString, "many">;
            departments: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            members: string[];
            departments: string[];
        }, {
            members: string[];
            departments: string[];
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
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3FunctionalRoleUpdate: {
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
        }, "strip", z.ZodTypeAny, {
            role_name: string;
        }, {
            role_name: string;
        }>;
        path: z.ZodObject<{
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
        }>;
    };
};
export declare const contactV3GroupCreate: {
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
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodNumber>;
            group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type?: number | undefined;
            description?: string | undefined;
            group_id?: string | undefined;
        }, {
            name: string;
            type?: number | undefined;
            description?: string | undefined;
            group_id?: string | undefined;
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
    };
};
export declare const contactV3GroupDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupGet: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupMemberBelong: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            member_id: z.ZodString;
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            group_type: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            group_type?: number | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            member_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            group_type?: number | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const contactV3GroupMemberAdd: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodLiteral<"user">;
            member_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_id_type: "user_id" | "union_id" | "open_id";
            member_type: "user";
        }, {
            member_id: string;
            member_id_type: "user_id" | "union_id" | "open_id";
            member_type: "user";
        }>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupMemberBatchAdd: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                member_id: z.ZodString;
                member_type: z.ZodString;
                member_id_type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }, {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            members?: {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }[] | undefined;
        }, {
            members?: {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupMemberBatchRemove: {
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
                member_id: z.ZodString;
                member_type: z.ZodString;
                member_id_type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }, {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }[];
        }, {
            members: {
                member_id: string;
                member_type: string;
                member_id_type?: string | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupMemberRemove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodLiteral<"user">;
            member_id: z.ZodString;
            member_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_id_type: "user_id" | "union_id" | "open_id";
            member_type: "user";
        }, {
            member_id: string;
            member_id_type: "user_id" | "union_id" | "open_id";
            member_type: "user";
        }>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupMemberSimplelist: {
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
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "department_id"]>>;
            member_type: z.ZodOptional<z.ZodEnum<["user", "department"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | undefined;
            member_type?: "user" | "department" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | "department_id" | undefined;
            member_type?: "user" | "department" | undefined;
        }>>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupPatch: {
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
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
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
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
    };
};
export declare const contactV3GroupSimplelist: {
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
            type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            type?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
};
export declare const contactV3JobFamilyCreate: {
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
            description: z.ZodOptional<z.ZodString>;
            parent_job_family_id: z.ZodOptional<z.ZodString>;
            status: z.ZodBoolean;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const contactV3JobFamilyDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_family_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_family_id: string;
        }, {
            job_family_id: string;
        }>;
    };
};
export declare const contactV3JobFamilyGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_family_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_family_id: string;
        }, {
            job_family_id: string;
        }>;
    };
};
export declare const contactV3JobFamilyList: {
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
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            name?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            name?: string | undefined;
        }>>;
    };
};
export declare const contactV3JobFamilyUpdate: {
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
            description: z.ZodOptional<z.ZodString>;
            parent_job_family_id: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodBoolean>;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status?: boolean | undefined;
            name?: string | undefined;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status?: boolean | undefined;
            name?: string | undefined;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            job_family_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_family_id: string;
        }, {
            job_family_id: string;
        }>;
    };
};
export declare const contactV3JobLevelCreate: {
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
            description: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            status: z.ZodBoolean;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const contactV3JobLevelDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_level_id: string;
        }, {
            job_level_id: string;
        }>;
    };
};
export declare const contactV3JobLevelGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_level_id: string;
        }, {
            job_level_id: string;
        }>;
    };
};
export declare const contactV3JobLevelList: {
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
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            name?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            name?: string | undefined;
        }>>;
    };
};
export declare const contactV3JobLevelUpdate: {
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
            description: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodBoolean>;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status?: boolean | undefined;
            name?: string | undefined;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status?: boolean | undefined;
            name?: string | undefined;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            job_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_level_id: string;
        }, {
            job_level_id: string;
        }>;
    };
};
export declare const contactV3JobTitleGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            job_title_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            job_title_id?: string | undefined;
        }, {
            job_title_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3JobTitleList: {
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
export declare const contactV3ScopeList: {
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
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
    };
};
export declare const contactV3UnitBindDepartment: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            unit_id: z.ZodString;
            department_id: z.ZodString;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
    };
};
export declare const contactV3UnitCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            unit_id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            unit_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            unit_type: string;
            unit_id?: string | undefined;
        }, {
            name: string;
            unit_type: string;
            unit_id?: string | undefined;
        }>;
    };
};
export declare const contactV3UnitDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            unit_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
        }, {
            unit_id: string;
        }>;
    };
};
export declare const contactV3UnitGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            unit_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
        }, {
            unit_id: string;
        }>;
    };
};
export declare const contactV3UnitList: {
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
    };
};
export declare const contactV3UnitListDepartment: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            unit_id: z.ZodString;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            unit_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
    };
};
export declare const contactV3UnitPatch: {
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
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
        }, {
            name?: string | undefined;
        }>>;
        path: z.ZodObject<{
            unit_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
        }, {
            unit_id: string;
        }>;
    };
};
export declare const contactV3UnitUnbindDepartment: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            unit_id: z.ZodString;
            department_id: z.ZodString;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
    };
};
export declare const contactV3UserBatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3UserBatchGetId: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            emails: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mobiles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            include_resigned: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            emails?: string[] | undefined;
            mobiles?: string[] | undefined;
            include_resigned?: boolean | undefined;
        }, {
            emails?: string[] | undefined;
            mobiles?: string[] | undefined;
            include_resigned?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const contactV3UserCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            en_name: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            mobile: z.ZodString;
            mobile_visible: z.ZodOptional<z.ZodBoolean>;
            gender: z.ZodOptional<z.ZodNumber>;
            avatar_key: z.ZodOptional<z.ZodString>;
            department_ids: z.ZodArray<z.ZodString, "many">;
            leader_user_id: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            work_station: z.ZodOptional<z.ZodString>;
            join_time: z.ZodOptional<z.ZodNumber>;
            employee_no: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodNumber;
            orders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
                is_primary_dept: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }>, "many">>;
            custom_attrs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    text: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    option_id: z.ZodOptional<z.ZodString>;
                    generic_user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: number;
                        id: string;
                    }, {
                        type: number;
                        id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
            enterprise_email: z.ZodOptional<z.ZodString>;
            job_title: z.ZodOptional<z.ZodString>;
            geo: z.ZodOptional<z.ZodString>;
            job_level_id: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            dotted_line_leader_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            user_id?: string | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            geo?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
        }, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            user_id?: string | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            geo?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
    };
};
export declare const contactV3UserDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            department_chat_acceptor_user_id: z.ZodOptional<z.ZodString>;
            external_chat_acceptor_user_id: z.ZodOptional<z.ZodString>;
            docs_acceptor_user_id: z.ZodOptional<z.ZodString>;
            calendar_acceptor_user_id: z.ZodOptional<z.ZodString>;
            application_acceptor_user_id: z.ZodOptional<z.ZodString>;
            minutes_acceptor_user_id: z.ZodOptional<z.ZodString>;
            survey_acceptor_user_id: z.ZodOptional<z.ZodString>;
            email_acceptor: z.ZodOptional<z.ZodObject<{
                processing_type: z.ZodEnum<["1", "2", "3"]>;
                acceptor_user_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            }, {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            }>>;
            anycross_acceptor_user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_chat_acceptor_user_id?: string | undefined;
            external_chat_acceptor_user_id?: string | undefined;
            docs_acceptor_user_id?: string | undefined;
            calendar_acceptor_user_id?: string | undefined;
            application_acceptor_user_id?: string | undefined;
            minutes_acceptor_user_id?: string | undefined;
            survey_acceptor_user_id?: string | undefined;
            email_acceptor?: {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            } | undefined;
            anycross_acceptor_user_id?: string | undefined;
        }, {
            department_chat_acceptor_user_id?: string | undefined;
            external_chat_acceptor_user_id?: string | undefined;
            docs_acceptor_user_id?: string | undefined;
            calendar_acceptor_user_id?: string | undefined;
            application_acceptor_user_id?: string | undefined;
            minutes_acceptor_user_id?: string | undefined;
            survey_acceptor_user_id?: string | undefined;
            email_acceptor?: {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            } | undefined;
            anycross_acceptor_user_id?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
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
export declare const contactV3UserFindByDepartment: {
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
            department_id: z.ZodString;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3UserGet: {
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3UserList: {
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
            department_id: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3UserPatch: {
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
            en_name: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            mobile: z.ZodOptional<z.ZodString>;
            mobile_visible: z.ZodOptional<z.ZodBoolean>;
            gender: z.ZodOptional<z.ZodNumber>;
            avatar_key: z.ZodOptional<z.ZodString>;
            department_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            leader_user_id: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            work_station: z.ZodOptional<z.ZodString>;
            join_time: z.ZodOptional<z.ZodNumber>;
            employee_no: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodOptional<z.ZodNumber>;
            orders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
                is_primary_dept: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }>, "many">>;
            custom_attrs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    text: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    option_id: z.ZodOptional<z.ZodString>;
                    generic_user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: number;
                        id: string;
                    }, {
                        type: number;
                        id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
            enterprise_email: z.ZodOptional<z.ZodString>;
            job_title: z.ZodOptional<z.ZodString>;
            is_frozen: z.ZodOptional<z.ZodBoolean>;
            job_level_id: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            dotted_line_leader_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            department_ids?: string[] | undefined;
            name?: string | undefined;
            mobile?: string | undefined;
            employee_type?: number | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
            is_frozen?: boolean | undefined;
        }, {
            department_ids?: string[] | undefined;
            name?: string | undefined;
            mobile?: string | undefined;
            employee_type?: number | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
            is_frozen?: boolean | undefined;
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3UserResurrect: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodString;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }, {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }>, "many">>;
            subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            departments?: {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }[] | undefined;
            subscription_ids?: string[] | undefined;
        }, {
            departments?: {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }[] | undefined;
            subscription_ids?: string[] | undefined;
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
    };
};
export declare const contactV3UserUpdate: {
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
            en_name: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            mobile: z.ZodString;
            mobile_visible: z.ZodOptional<z.ZodBoolean>;
            gender: z.ZodOptional<z.ZodNumber>;
            avatar_key: z.ZodOptional<z.ZodString>;
            department_ids: z.ZodArray<z.ZodString, "many">;
            leader_user_id: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            work_station: z.ZodOptional<z.ZodString>;
            join_time: z.ZodOptional<z.ZodNumber>;
            employee_no: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodNumber;
            orders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
                is_primary_dept: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }>, "many">>;
            custom_attrs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    text: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    option_id: z.ZodOptional<z.ZodString>;
                    generic_user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: number;
                        id: string;
                    }, {
                        type: number;
                        id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
            enterprise_email: z.ZodOptional<z.ZodString>;
            job_title: z.ZodOptional<z.ZodString>;
            is_frozen: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            is_frozen?: boolean | undefined;
        }, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            is_frozen?: boolean | undefined;
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
        }>;
    };
};
export declare const contactV3UserUpdateUserId: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            new_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            new_user_id: string;
        }, {
            new_user_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
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
export declare const contactV3WorkCityGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            work_city_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            work_city_id?: string | undefined;
        }, {
            work_city_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const contactV3WorkCityList: {
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
export declare const contactV3Tools: ({
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
            department_ids: z.ZodArray<z.ZodString, "many">;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            i18n_name: z.ZodOptional<z.ZodObject<{
                zh_cn: z.ZodOptional<z.ZodString>;
                ja_jp: z.ZodOptional<z.ZodString>;
                en_us: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }, {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            }>>;
            parent_department_id: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            leader_user_id: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodString>;
            unit_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            create_group_chat: z.ZodOptional<z.ZodBoolean>;
            leaders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                leaderType: z.ZodNumber;
                leaderID: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                leaderType: number;
                leaderID: string;
            }, {
                leaderType: number;
                leaderID: string;
            }>, "many">>;
            group_chat_employee_types: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            department_hrbps: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_department_id: string;
            department_id?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            unit_ids?: string[] | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
        }, {
            name: string;
            parent_department_id: string;
            department_id?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            order?: string | undefined;
            leader_user_id?: string | undefined;
            unit_ids?: string[] | undefined;
            create_group_chat?: boolean | undefined;
            leaders?: {
                leaderType: number;
                leaderID: string;
            }[] | undefined;
            group_chat_employee_types?: number[] | undefined;
            department_hrbps?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
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
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            department_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
        }, {
            department_id?: string | undefined;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            department_id: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
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
            content: z.ZodString;
            enum_type: z.ZodNumber;
            enum_status: z.ZodNumber;
            i18n_content: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            content: string;
            enum_type: number;
            enum_status: number;
            i18n_content?: {
                value?: string | undefined;
                locale?: string | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            enum_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            enum_id?: string | undefined;
        }, {
            enum_id?: string | undefined;
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
            role_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_name: string;
        }, {
            role_name: string;
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
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            role_id: string;
        }, {
            role_id: string;
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
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodNumber>;
            group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type?: number | undefined;
            description?: string | undefined;
            group_id?: string | undefined;
        }, {
            name: string;
            type?: number | undefined;
            description?: string | undefined;
            group_id?: string | undefined;
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
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
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
            member_id: z.ZodString;
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            group_type: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            group_type?: number | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            member_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            group_type?: number | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            parent_job_family_id: z.ZodOptional<z.ZodString>;
            status: z.ZodBoolean;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            parent_job_family_id?: string | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
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
        path: z.ZodObject<{
            job_family_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_family_id: string;
        }, {
            job_family_id: string;
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
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            status: z.ZodBoolean;
            i18n_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
            i18n_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                locale: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                locale?: string | undefined;
            }, {
                value?: string | undefined;
                locale?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
        }, {
            status: boolean;
            name: string;
            i18n_name?: {
                value?: string | undefined;
                locale?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            order?: number | undefined;
            i18n_description?: {
                value?: string | undefined;
                locale?: string | undefined;
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
        path: z.ZodObject<{
            job_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_level_id: string;
        }, {
            job_level_id: string;
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
            job_title_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            job_title_id?: string | undefined;
        }, {
            job_title_id?: string | undefined;
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
            unit_id: z.ZodString;
            department_id: z.ZodString;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            department_id: string;
            unit_id: string;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            unit_id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            unit_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            unit_type: string;
            unit_id?: string | undefined;
        }, {
            name: string;
            unit_type: string;
            unit_id?: string | undefined;
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
            unit_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
        }, {
            unit_id: string;
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
            unit_id: z.ZodString;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            unit_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            unit_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            user_ids: z.ZodArray<z.ZodString, "many">;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
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
            emails: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mobiles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            include_resigned: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            emails?: string[] | undefined;
            mobiles?: string[] | undefined;
            include_resigned?: boolean | undefined;
        }, {
            emails?: string[] | undefined;
            mobiles?: string[] | undefined;
            include_resigned?: boolean | undefined;
        }>>;
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
        data: z.ZodObject<{
            user_id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            en_name: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            mobile: z.ZodString;
            mobile_visible: z.ZodOptional<z.ZodBoolean>;
            gender: z.ZodOptional<z.ZodNumber>;
            avatar_key: z.ZodOptional<z.ZodString>;
            department_ids: z.ZodArray<z.ZodString, "many">;
            leader_user_id: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            work_station: z.ZodOptional<z.ZodString>;
            join_time: z.ZodOptional<z.ZodNumber>;
            employee_no: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodNumber;
            orders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
                is_primary_dept: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }>, "many">>;
            custom_attrs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    text: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    option_id: z.ZodOptional<z.ZodString>;
                    generic_user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: number;
                        id: string;
                    }, {
                        type: number;
                        id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
            enterprise_email: z.ZodOptional<z.ZodString>;
            job_title: z.ZodOptional<z.ZodString>;
            geo: z.ZodOptional<z.ZodString>;
            job_level_id: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            dotted_line_leader_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            user_id?: string | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            geo?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
        }, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            user_id?: string | undefined;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            geo?: string | undefined;
            subscription_ids?: string[] | undefined;
            dotted_line_leader_user_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            client_token?: string | undefined;
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
            department_chat_acceptor_user_id: z.ZodOptional<z.ZodString>;
            external_chat_acceptor_user_id: z.ZodOptional<z.ZodString>;
            docs_acceptor_user_id: z.ZodOptional<z.ZodString>;
            calendar_acceptor_user_id: z.ZodOptional<z.ZodString>;
            application_acceptor_user_id: z.ZodOptional<z.ZodString>;
            minutes_acceptor_user_id: z.ZodOptional<z.ZodString>;
            survey_acceptor_user_id: z.ZodOptional<z.ZodString>;
            email_acceptor: z.ZodOptional<z.ZodObject<{
                processing_type: z.ZodEnum<["1", "2", "3"]>;
                acceptor_user_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            }, {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            }>>;
            anycross_acceptor_user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_chat_acceptor_user_id?: string | undefined;
            external_chat_acceptor_user_id?: string | undefined;
            docs_acceptor_user_id?: string | undefined;
            calendar_acceptor_user_id?: string | undefined;
            application_acceptor_user_id?: string | undefined;
            minutes_acceptor_user_id?: string | undefined;
            survey_acceptor_user_id?: string | undefined;
            email_acceptor?: {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            } | undefined;
            anycross_acceptor_user_id?: string | undefined;
        }, {
            department_chat_acceptor_user_id?: string | undefined;
            external_chat_acceptor_user_id?: string | undefined;
            docs_acceptor_user_id?: string | undefined;
            calendar_acceptor_user_id?: string | undefined;
            application_acceptor_user_id?: string | undefined;
            minutes_acceptor_user_id?: string | undefined;
            survey_acceptor_user_id?: string | undefined;
            email_acceptor?: {
                processing_type: "1" | "2" | "3";
                acceptor_user_id?: string | undefined;
            } | undefined;
            anycross_acceptor_user_id?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
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
            department_id_type: z.ZodOptional<z.ZodEnum<["department_id", "open_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
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
            departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodString;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }, {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }>, "many">>;
            subscription_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            departments?: {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }[] | undefined;
            subscription_ids?: string[] | undefined;
        }, {
            departments?: {
                department_id: string;
                user_order?: number | undefined;
                department_order?: number | undefined;
            }[] | undefined;
            subscription_ids?: string[] | undefined;
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
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
            name: z.ZodString;
            en_name: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            mobile: z.ZodString;
            mobile_visible: z.ZodOptional<z.ZodBoolean>;
            gender: z.ZodOptional<z.ZodNumber>;
            avatar_key: z.ZodOptional<z.ZodString>;
            department_ids: z.ZodArray<z.ZodString, "many">;
            leader_user_id: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            work_station: z.ZodOptional<z.ZodString>;
            join_time: z.ZodOptional<z.ZodNumber>;
            employee_no: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodNumber;
            orders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                department_id: z.ZodOptional<z.ZodString>;
                user_order: z.ZodOptional<z.ZodNumber>;
                department_order: z.ZodOptional<z.ZodNumber>;
                is_primary_dept: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }, {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }>, "many">>;
            custom_attrs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    text: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    option_id: z.ZodOptional<z.ZodString>;
                    generic_user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: number;
                        id: string;
                    }, {
                        type: number;
                        id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }, {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }, {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
            enterprise_email: z.ZodOptional<z.ZodString>;
            job_title: z.ZodOptional<z.ZodString>;
            is_frozen: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            is_frozen?: boolean | undefined;
        }, {
            department_ids: string[];
            name: string;
            mobile: string;
            employee_type: number;
            employee_no?: string | undefined;
            leader_user_id?: string | undefined;
            en_name?: string | undefined;
            nickname?: string | undefined;
            email?: string | undefined;
            mobile_visible?: boolean | undefined;
            gender?: number | undefined;
            avatar_key?: string | undefined;
            city?: string | undefined;
            country?: string | undefined;
            work_station?: string | undefined;
            join_time?: number | undefined;
            orders?: {
                department_id?: string | undefined;
                user_order?: number | undefined;
                department_order?: number | undefined;
                is_primary_dept?: boolean | undefined;
            }[] | undefined;
            custom_attrs?: {
                value?: {
                    text?: string | undefined;
                    url?: string | undefined;
                    pc_url?: string | undefined;
                    option_id?: string | undefined;
                    generic_user?: {
                        type: number;
                        id: string;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
            enterprise_email?: string | undefined;
            job_title?: string | undefined;
            is_frozen?: boolean | undefined;
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
            user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
        }, {
            user_id: string;
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
            new_user_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            new_user_id: string;
        }, {
            new_user_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
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
            work_city_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            work_city_id?: string | undefined;
        }, {
            work_city_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
