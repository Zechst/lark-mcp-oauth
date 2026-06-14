import { z } from 'zod';
export type corehrV1ToolName = 'corehr.v1.assignedUser.search' | 'corehr.v1.authorization.addRoleAssign' | 'corehr.v1.authorization.getByParam' | 'corehr.v1.authorization.query' | 'corehr.v1.authorization.removeRoleAssign' | 'corehr.v1.authorization.updateRoleAssign' | 'corehr.v1.commonDataId.convert' | 'corehr.v1.commonDataMetaData.addEnumOption' | 'corehr.v1.commonDataMetaData.editEnumOption' | 'corehr.v1.company.create' | 'corehr.v1.company.delete' | 'corehr.v1.company.get' | 'corehr.v1.company.list' | 'corehr.v1.company.patch' | 'corehr.v1.compensationStandard.match' | 'corehr.v1.contract.create' | 'corehr.v1.contract.delete' | 'corehr.v1.contract.get' | 'corehr.v1.contract.list' | 'corehr.v1.contract.patch' | 'corehr.v1.countryRegion.get' | 'corehr.v1.countryRegion.list' | 'corehr.v1.currency.get' | 'corehr.v1.currency.list' | 'corehr.v1.customField.getByParam' | 'corehr.v1.customField.listObjectApiName' | 'corehr.v1.customField.query' | 'corehr.v1.department.create' | 'corehr.v1.department.delete' | 'corehr.v1.department.get' | 'corehr.v1.department.list' | 'corehr.v1.department.patch' | 'corehr.v1.employeeType.create' | 'corehr.v1.employeeType.delete' | 'corehr.v1.employeeType.get' | 'corehr.v1.employeeType.list' | 'corehr.v1.employeeType.patch' | 'corehr.v1.employment.create' | 'corehr.v1.employment.delete' | 'corehr.v1.employment.patch' | 'corehr.v1.jobChange.create' | 'corehr.v1.jobData.create' | 'corehr.v1.jobData.delete' | 'corehr.v1.jobData.get' | 'corehr.v1.jobData.list' | 'corehr.v1.jobData.patch' | 'corehr.v1.jobFamily.create' | 'corehr.v1.jobFamily.delete' | 'corehr.v1.jobFamily.get' | 'corehr.v1.jobFamily.list' | 'corehr.v1.jobFamily.patch' | 'corehr.v1.jobLevel.create' | 'corehr.v1.jobLevel.delete' | 'corehr.v1.jobLevel.get' | 'corehr.v1.jobLevel.list' | 'corehr.v1.jobLevel.patch' | 'corehr.v1.job.create' | 'corehr.v1.job.delete' | 'corehr.v1.job.get' | 'corehr.v1.job.list' | 'corehr.v1.job.patch' | 'corehr.v1.leaveGrantingRecord.create' | 'corehr.v1.leaveGrantingRecord.delete' | 'corehr.v1.leave.calendarByScope' | 'corehr.v1.leave.leaveBalances' | 'corehr.v1.leave.leaveRequestHistory' | 'corehr.v1.leave.leaveTypes' | 'corehr.v1.leave.workCalendar' | 'corehr.v1.leave.workCalendarDate' | 'corehr.v1.location.create' | 'corehr.v1.location.delete' | 'corehr.v1.location.get' | 'corehr.v1.location.list' | 'corehr.v1.nationalIdType.create' | 'corehr.v1.nationalIdType.delete' | 'corehr.v1.nationalIdType.get' | 'corehr.v1.nationalIdType.list' | 'corehr.v1.nationalIdType.patch' | 'corehr.v1.offboarding.query' | 'corehr.v1.offboarding.search' | 'corehr.v1.offboarding.submit' | 'corehr.v1.person.create' | 'corehr.v1.person.delete' | 'corehr.v1.person.get' | 'corehr.v1.person.patch' | 'corehr.v1.preHire.delete' | 'corehr.v1.preHire.get' | 'corehr.v1.preHire.list' | 'corehr.v1.preHire.patch' | 'corehr.v1.processFormVariableData.get' | 'corehr.v1.securityGroup.list' | 'corehr.v1.securityGroup.query' | 'corehr.v1.subdivision.get' | 'corehr.v1.subdivision.list' | 'corehr.v1.subregion.get' | 'corehr.v1.subregion.list' | 'corehr.v1.transferReason.query' | 'corehr.v1.transferType.query' | 'corehr.v1.workingHoursType.create' | 'corehr.v1.workingHoursType.delete' | 'corehr.v1.workingHoursType.get' | 'corehr.v1.workingHoursType.list' | 'corehr.v1.workingHoursType.patch';
export declare const corehrV1AssignedUserSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            role_id: z.ZodString;
            management_scope_list: z.ZodArray<z.ZodObject<{
                management_dimension: z.ZodString;
                obj_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                management_dimension: string;
                obj_id: string;
            }, {
                management_dimension: string;
                obj_id: string;
            }>, "many">;
            search_method: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            role_id: string;
            management_scope_list: {
                management_dimension: string;
                obj_id: string;
            }[];
            search_method: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            role_id: string;
            management_scope_list: {
                management_dimension: string;
                obj_id: string;
            }[];
            search_method: string;
            page_token?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
    };
};
export declare const corehrV1AuthorizationAddRoleAssign: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            assigned_organization_items: z.ZodArray<z.ZodArray<z.ZodObject<{
                org_key: z.ZodString;
                org_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                org_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }, {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }>, "many">, "many">;
        }, "strip", z.ZodTypeAny, {
            assigned_organization_items: {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }[][];
        }, {
            assigned_organization_items: {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }[][];
        }>;
        params: z.ZodObject<{
            employment_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1AuthorizationGetByParam: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            employment_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            employment_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1AuthorizationQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            employment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            role_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            updated_at_gte: z.ZodOptional<z.ZodString>;
            updated_at_lte: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            employment_id_list?: string[] | undefined;
            role_id_list?: string[] | undefined;
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            employment_id_list?: string[] | undefined;
            role_id_list?: string[] | undefined;
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }>>;
    };
};
export declare const corehrV1AuthorizationRemoveRoleAssign: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            employment_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1AuthorizationUpdateRoleAssign: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            assigned_organization_items: z.ZodArray<z.ZodArray<z.ZodObject<{
                org_key: z.ZodString;
                org_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                org_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }, {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }>, "many">, "many">;
        }, "strip", z.ZodTypeAny, {
            assigned_organization_items: {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }[][];
        }, {
            assigned_organization_items: {
                org_key: string;
                org_ids?: string[] | undefined;
                org_codes?: string[] | undefined;
            }[][];
        }>;
        params: z.ZodObject<{
            employment_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            role_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            employment_id: string;
            role_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1CommonDataIdConvert: {
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
        params: z.ZodObject<{
            id_transform_type: z.ZodNumber;
            id_type: z.ZodEnum<["user_id", "department_id", "job_level_id", "job_family_id", "employee_type_id"]>;
            feishu_user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            feishu_department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            id_transform_type: number;
            id_type: "user_id" | "department_id" | "job_family_id" | "job_level_id" | "employee_type_id";
            feishu_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            feishu_department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            id_transform_type: number;
            id_type: "user_id" | "department_id" | "job_family_id" | "job_level_id" | "employee_type_id";
            feishu_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            feishu_department_id_type?: "department_id" | "open_department_id" | undefined;
        }>;
    };
};
export declare const corehrV1CommonDataMetaDataAddEnumOption: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            object_api_name: z.ZodString;
            enum_field_api_name: z.ZodString;
            enum_field_options: z.ZodArray<z.ZodObject<{
                option_api_name: z.ZodString;
                name: z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_options: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }[];
        }, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_options: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1CommonDataMetaDataEditEnumOption: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            object_api_name: z.ZodString;
            enum_field_api_name: z.ZodString;
            enum_field_option: z.ZodObject<{
                option_api_name: z.ZodString;
                active: z.ZodBoolean;
                name: z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            }>;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_option: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            };
        }, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_option: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1CompanyCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                effective_time: z.ZodOptional<z.ZodString>;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }>;
            type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            industry_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            legal_representative: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            post_code: z.ZodOptional<z.ZodString>;
            tax_payer_id: z.ZodOptional<z.ZodString>;
            confidential: z.ZodOptional<z.ZodBoolean>;
            sub_type_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            branch_company: z.ZodOptional<z.ZodBoolean>;
            primary_manager: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            currency: z.ZodOptional<z.ZodObject<{
                currency_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                numeric_code: z.ZodOptional<z.ZodNumber>;
                currency_alpha_3_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }>>;
            phone: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            fax: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            registered_office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
            office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            };
            type?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }, {
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            };
            type?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1CompanyDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            company_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            company_id: string;
        }, {
            company_id: string;
        }>;
    };
};
export declare const corehrV1CompanyGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            company_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            company_id: string;
        }, {
            company_id: string;
        }>;
    };
};
export declare const corehrV1CompanyList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1CompanyPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            hiberarchy_common: z.ZodOptional<z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                active: z.ZodOptional<z.ZodBoolean>;
                effective_time: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                effective_time: string;
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            }, {
                effective_time: string;
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            }>>;
            type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            industry_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            legal_representative: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            post_code: z.ZodOptional<z.ZodString>;
            tax_payer_id: z.ZodOptional<z.ZodString>;
            confidential: z.ZodOptional<z.ZodBoolean>;
            sub_type_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            branch_company: z.ZodOptional<z.ZodBoolean>;
            primary_manager: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            currency: z.ZodOptional<z.ZodObject<{
                currency_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                numeric_code: z.ZodOptional<z.ZodNumber>;
                currency_alpha_3_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }>>;
            phone: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            fax: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            registered_office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
            office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            type?: {
                enum_name: string;
            } | undefined;
            hiberarchy_common?: {
                effective_time: string;
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            } | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }, {
            type?: {
                enum_name: string;
            } | undefined;
            hiberarchy_common?: {
                effective_time: string;
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            } | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            company_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            company_id: string;
        }, {
            company_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const corehrV1CompensationStandardMatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
            employment_id: z.ZodOptional<z.ZodString>;
            reference_object_api: z.ZodOptional<z.ZodEnum<["cpst_item", "cpst_indicator"]>>;
            reference_object_id: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            work_location_id: z.ZodOptional<z.ZodString>;
            company_id: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            job_level_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            recruitment_type: z.ZodOptional<z.ZodEnum<["experienced_professionals", "recent_graduates", "routine_intern"]>>;
            cpst_change_reason_id: z.ZodOptional<z.ZodString>;
            cpst_plan_id: z.ZodOptional<z.ZodString>;
            cpst_salary_level_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reference_object_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            effective_time?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            company_id?: string | undefined;
            reference_object_api?: "cpst_item" | "cpst_indicator" | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            recruitment_type?: "experienced_professionals" | "recent_graduates" | "routine_intern" | undefined;
            cpst_change_reason_id?: string | undefined;
            cpst_plan_id?: string | undefined;
            cpst_salary_level_id?: string | undefined;
        }, {
            reference_object_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            effective_time?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            company_id?: string | undefined;
            reference_object_api?: "cpst_item" | "cpst_indicator" | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            recruitment_type?: "experienced_professionals" | "recent_graduates" | "routine_intern" | undefined;
            cpst_change_reason_id?: string | undefined;
            cpst_plan_id?: string | undefined;
            cpst_salary_level_id?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const corehrV1ContractCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            employment_id: z.ZodString;
            contract_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            first_party_company_id: z.ZodString;
            person_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            duration_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            contract_end_date: z.ZodOptional<z.ZodString>;
            contract_number: z.ZodOptional<z.ZodString>;
            signing_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            employment_id: string;
            contract_type: {
                enum_name: string;
            };
            first_party_company_id: string;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time: string;
            employment_id: string;
            contract_type: {
                enum_name: string;
            };
            first_party_company_id: string;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1ContractDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            contract_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            contract_id: string;
        }, {
            contract_id: string;
        }>;
    };
};
export declare const corehrV1ContractGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            contract_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            contract_id: string;
        }, {
            contract_id: string;
        }>;
    };
};
export declare const corehrV1ContractList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1ContractPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            effective_time: z.ZodOptional<z.ZodString>;
            expiration_time: z.ZodOptional<z.ZodString>;
            employment_id: z.ZodOptional<z.ZodString>;
            contract_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            first_party_company_id: z.ZodOptional<z.ZodString>;
            person_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            duration_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            contract_end_date: z.ZodOptional<z.ZodString>;
            contract_number: z.ZodOptional<z.ZodString>;
            signing_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time?: string | undefined;
            expiration_time?: string | undefined;
            employment_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            contract_type?: {
                enum_name: string;
            } | undefined;
            first_party_company_id?: string | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time?: string | undefined;
            expiration_time?: string | undefined;
            employment_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            contract_type?: {
                enum_name: string;
            } | undefined;
            first_party_company_id?: string | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            contract_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            contract_id: string;
        }, {
            contract_id: string;
        }>;
    };
};
export declare const corehrV1CountryRegionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            country_region_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            country_region_id: string;
        }, {
            country_region_id: string;
        }>;
    };
};
export declare const corehrV1CountryRegionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1CurrencyGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            currency_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            currency_id: string;
        }, {
            currency_id: string;
        }>;
    };
};
export declare const corehrV1CurrencyList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1CustomFieldGetByParam: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            object_api_name: z.ZodString;
            custom_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            custom_api_name: string;
        }, {
            object_api_name: string;
            custom_api_name: string;
        }>;
    };
};
export declare const corehrV1CustomFieldListObjectApiName: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1CustomFieldQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            object_api_name_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            object_api_name_list: string[];
        }, {
            object_api_name_list: string[];
        }>;
    };
};
export declare const corehrV1DepartmentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            sub_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            manager: z.ZodOptional<z.ZodString>;
            is_confidential: z.ZodOptional<z.ZodBoolean>;
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }>;
            effective_time: z.ZodString;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            cost_center_id: z.ZodOptional<z.ZodString>;
            staffing_model: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1DepartmentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
    };
};
export declare const corehrV1DepartmentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
    };
};
export declare const corehrV1DepartmentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            department_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            name_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            department_id_list?: string[] | undefined;
            name_list?: string[] | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            department_id_list?: string[] | undefined;
            name_list?: string[] | undefined;
        }>;
    };
};
export declare const corehrV1DepartmentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            sub_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            manager: z.ZodOptional<z.ZodString>;
            is_confidential: z.ZodOptional<z.ZodBoolean>;
            hiberarchy_common: z.ZodOptional<z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                active: z.ZodOptional<z.ZodBoolean>;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            }, {
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            }>>;
            effective_time: z.ZodString;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            cost_center_id: z.ZodOptional<z.ZodString>;
            staffing_model: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            hiberarchy_common?: {
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            } | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time: string;
            id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            hiberarchy_common?: {
                code?: string | undefined;
                name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                active?: boolean | undefined;
                parent_id?: string | undefined;
            } | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
        }>;
    };
};
export declare const corehrV1EmployeeTypeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            default_employee_type: z.ZodBoolean;
            active: z.ZodBoolean;
            code: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_employee_type: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_employee_type: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1EmployeeTypeDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            employee_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type_id: string;
        }, {
            employee_type_id: string;
        }>;
    };
};
export declare const corehrV1EmployeeTypeGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            employee_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type_id: string;
        }, {
            employee_type_id: string;
        }>;
    };
};
export declare const corehrV1EmployeeTypeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1EmployeeTypePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            default_employee_type: z.ZodOptional<z.ZodBoolean>;
            active: z.ZodOptional<z.ZodBoolean>;
            code: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            default_employee_type?: boolean | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            default_employee_type?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            employee_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type_id: string;
        }, {
            employee_type_id: string;
        }>;
    };
};
export declare const corehrV1EmploymentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            seniority_date: z.ZodOptional<z.ZodString>;
            employee_number: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            employment_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            person_id: z.ZodString;
            primary_employment: z.ZodBoolean;
            employment_status: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            work_email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                email_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            reason_for_offboarding: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            ats_application_id: z.ZodOptional<z.ZodString>;
            rehire: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            rehire_employment_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            person_id: string;
            employment_type: {
                enum_name: string;
            };
            primary_employment: boolean;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_status?: {
                enum_name: string;
            } | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
            rehire?: {
                enum_name: string;
            } | undefined;
            rehire_employment_id?: string | undefined;
        }, {
            effective_time: string;
            person_id: string;
            employment_type: {
                enum_name: string;
            };
            primary_employment: boolean;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_status?: {
                enum_name: string;
            } | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
            rehire?: {
                enum_name: string;
            } | undefined;
            rehire_employment_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1EmploymentDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
        }, {
            employment_id: string;
        }>;
    };
};
export declare const corehrV1EmploymentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            seniority_date: z.ZodOptional<z.ZodString>;
            employee_number: z.ZodOptional<z.ZodString>;
            employment_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            person_id: z.ZodOptional<z.ZodString>;
            primary_employment: z.ZodOptional<z.ZodBoolean>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            work_email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                email_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            reason_for_offboarding: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            ats_application_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_type?: {
                enum_name: string;
            } | undefined;
            primary_employment?: boolean | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
        }, {
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_type?: {
                enum_name: string;
            } | undefined;
            primary_employment?: boolean | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            employment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
        }, {
            employment_id: string;
        }>;
    };
};
export declare const corehrV1JobChangeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            transfer_mode: z.ZodNumber;
            employment_id: z.ZodString;
            transfer_type_unique_identifier: z.ZodString;
            flow_id: z.ZodOptional<z.ZodString>;
            effective_date: z.ZodString;
            transfer_info: z.ZodObject<{
                remark: z.ZodOptional<z.ZodString>;
                offer_info: z.ZodOptional<z.ZodString>;
                target_dotted_manager_clean: z.ZodOptional<z.ZodBoolean>;
                probation_exist: z.ZodOptional<z.ZodBoolean>;
                original_department: z.ZodOptional<z.ZodString>;
                target_department: z.ZodOptional<z.ZodString>;
                original_work_location: z.ZodOptional<z.ZodString>;
                target_work_location: z.ZodOptional<z.ZodString>;
                original_direct_manager: z.ZodOptional<z.ZodString>;
                target_direct_manager: z.ZodOptional<z.ZodString>;
                original_dotted_manager: z.ZodOptional<z.ZodString>;
                target_dotted_manager: z.ZodOptional<z.ZodString>;
                original_job: z.ZodOptional<z.ZodString>;
                target_job: z.ZodOptional<z.ZodString>;
                original_job_family: z.ZodOptional<z.ZodString>;
                target_job_family: z.ZodOptional<z.ZodString>;
                original_job_level: z.ZodOptional<z.ZodString>;
                target_job_level: z.ZodOptional<z.ZodString>;
                original_workforce_type: z.ZodOptional<z.ZodString>;
                target_workforce_type: z.ZodOptional<z.ZodString>;
                original_employee_subtype: z.ZodOptional<z.ZodString>;
                target_employee_subtype: z.ZodOptional<z.ZodString>;
                original_company: z.ZodOptional<z.ZodString>;
                target_company: z.ZodOptional<z.ZodString>;
                original_contract_number: z.ZodOptional<z.ZodString>;
                target_contract_number: z.ZodOptional<z.ZodString>;
                original_contract_type: z.ZodOptional<z.ZodString>;
                target_contract_type: z.ZodOptional<z.ZodString>;
                original_duration_type: z.ZodOptional<z.ZodString>;
                target_duration_type: z.ZodOptional<z.ZodString>;
                original_signing_type: z.ZodOptional<z.ZodString>;
                target_signing_type: z.ZodOptional<z.ZodString>;
                original_contract_start_date: z.ZodOptional<z.ZodString>;
                target_contract_start_date: z.ZodOptional<z.ZodString>;
                original_contract_end_date: z.ZodOptional<z.ZodString>;
                target_contract_end_date: z.ZodOptional<z.ZodString>;
                original_working_hours_type: z.ZodOptional<z.ZodString>;
                target_working_hours_type: z.ZodOptional<z.ZodString>;
                original_working_calendar: z.ZodOptional<z.ZodString>;
                target_working_calendar: z.ZodOptional<z.ZodString>;
                original_probation_end_date: z.ZodOptional<z.ZodString>;
                target_probation_end_date: z.ZodOptional<z.ZodString>;
                original_weekly_working_hours: z.ZodOptional<z.ZodString>;
                target_weekly_working_hours: z.ZodOptional<z.ZodString>;
                original_work_shift: z.ZodOptional<z.ZodString>;
                target_work_shift: z.ZodOptional<z.ZodString>;
                original_cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    cost_center_id: z.ZodOptional<z.ZodString>;
                    rate: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }>, "many">>;
                target_cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    cost_center_id: z.ZodOptional<z.ZodString>;
                    rate: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }>, "many">>;
                original_employment_change: z.ZodOptional<z.ZodObject<{
                    regular_employee_start_date: z.ZodOptional<z.ZodString>;
                    seniority_date: z.ZodOptional<z.ZodString>;
                    employee_number: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        custom_api_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        custom_api_name: string;
                    }, {
                        value: string;
                        custom_api_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }>>;
                target_employment_change: z.ZodOptional<z.ZodObject<{
                    regular_employee_start_date: z.ZodOptional<z.ZodString>;
                    seniority_date: z.ZodOptional<z.ZodString>;
                    employee_number: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        custom_api_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        custom_api_name: string;
                    }, {
                        value: string;
                        custom_api_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }>>;
                original_job_grade: z.ZodOptional<z.ZodString>;
                target_job_grade: z.ZodOptional<z.ZodString>;
                original_compensation_type: z.ZodOptional<z.ZodString>;
                target_compensation_type: z.ZodOptional<z.ZodString>;
                original_service_company: z.ZodOptional<z.ZodString>;
                target_service_company: z.ZodOptional<z.ZodString>;
                original_position: z.ZodOptional<z.ZodString>;
                target_position: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            }, {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            }>;
            transfer_key: z.ZodOptional<z.ZodString>;
            initiator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            transfer_mode: number;
            transfer_type_unique_identifier: string;
            effective_date: string;
            transfer_info: {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            };
            flow_id?: string | undefined;
            transfer_key?: string | undefined;
            initiator_id?: string | undefined;
        }, {
            employment_id: string;
            transfer_mode: number;
            transfer_type_unique_identifier: string;
            effective_date: string;
            transfer_info: {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            };
            flow_id?: string | undefined;
            transfer_key?: string | undefined;
            initiator_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }>>;
    };
};
export declare const corehrV1JobDataCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            job_level_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodString;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            work_location_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            probation_start_date: z.ZodOptional<z.ZodString>;
            probation_end_date: z.ZodOptional<z.ZodString>;
            primary_job_data: z.ZodBoolean;
            employment_id: z.ZodString;
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            assignment_start_reason: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            probation_expected_end_date: z.ZodOptional<z.ZodString>;
            direct_manager_id: z.ZodOptional<z.ZodString>;
            dotted_line_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            second_direct_manager_id: z.ZodOptional<z.ZodString>;
            cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cost_center_id: z.ZodOptional<z.ZodString>;
                rate: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            employment_id: string;
            employee_type_id: string;
            primary_job_data: boolean;
            assignment_start_reason: {
                enum_name: string;
            };
            department_id?: string | undefined;
            expiration_time?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
        }, {
            effective_time: string;
            employment_id: string;
            employee_type_id: string;
            primary_job_data: boolean;
            assignment_start_reason: {
                enum_name: string;
            };
            department_id?: string | undefined;
            expiration_time?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1JobDataDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_data_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_data_id: string;
        }, {
            job_data_id: string;
        }>;
    };
};
export declare const corehrV1JobDataGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }>>;
        path: z.ZodObject<{
            job_data_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_data_id: string;
        }, {
            job_data_id: string;
        }>;
    };
};
export declare const corehrV1JobDataList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            employment_id: z.ZodOptional<z.ZodString>;
            job_data_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            department_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            get_all_version: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            employment_id?: string | undefined;
            job_id?: string | undefined;
            job_data_id_list?: string[] | undefined;
            get_all_version?: boolean | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            employment_id?: string | undefined;
            job_id?: string | undefined;
            job_data_id_list?: string[] | undefined;
            get_all_version?: boolean | undefined;
        }>;
    };
};
export declare const corehrV1JobDataPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            version_id: z.ZodOptional<z.ZodString>;
            job_level_id: z.ZodOptional<z.ZodString>;
            job_grade_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            work_location_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            probation_start_date: z.ZodOptional<z.ZodString>;
            probation_end_date: z.ZodOptional<z.ZodString>;
            primary_job_data: z.ZodOptional<z.ZodBoolean>;
            employment_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodOptional<z.ZodString>;
            expiration_time: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            assignment_start_reason: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            probation_expected_end_date: z.ZodOptional<z.ZodString>;
            direct_manager_id: z.ZodOptional<z.ZodString>;
            dotted_line_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            second_direct_manager_id: z.ZodOptional<z.ZodString>;
            cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cost_center_id: z.ZodOptional<z.ZodString>;
                rate: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }>, "many">>;
            work_shift: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            compensation_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            service_company: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id?: string | undefined;
            effective_time?: string | undefined;
            expiration_time?: string | undefined;
            version_id?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            primary_job_data?: boolean | undefined;
            assignment_start_reason?: {
                enum_name: string;
            } | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
            job_grade_id?: string | undefined;
            work_shift?: {
                enum_name: string;
            } | undefined;
            compensation_type?: {
                enum_name: string;
            } | undefined;
            service_company?: string | undefined;
        }, {
            department_id?: string | undefined;
            effective_time?: string | undefined;
            expiration_time?: string | undefined;
            version_id?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            primary_job_data?: boolean | undefined;
            assignment_start_reason?: {
                enum_name: string;
            } | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
            job_grade_id?: string | undefined;
            work_shift?: {
                enum_name: string;
            } | undefined;
            compensation_type?: {
                enum_name: string;
            } | undefined;
            service_company?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            job_data_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_data_id: string;
        }, {
            job_data_id: string;
        }>;
    };
};
export declare const corehrV1JobFamilyCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            active: z.ZodBoolean;
            selectable: z.ZodOptional<z.ZodBoolean>;
            parent_id: z.ZodOptional<z.ZodString>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            effective_time: z.ZodString;
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1JobFamilyDelete: {
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
export declare const corehrV1JobFamilyGet: {
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
export declare const corehrV1JobFamilyList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1JobFamilyPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodOptional<z.ZodBoolean>;
            selectable: z.ZodOptional<z.ZodBoolean>;
            parent_id: z.ZodOptional<z.ZodString>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            effective_time: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            effective_time?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            effective_time?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
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
export declare const corehrV1JobLevelCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            level_order: z.ZodNumber;
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodBoolean;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            job_grade: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            level_order: number;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            job_grade?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            level_order: number;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            job_grade?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1JobLevelDelete: {
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
export declare const corehrV1JobLevelGet: {
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
export declare const corehrV1JobLevelList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1JobLevelPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            level_order: z.ZodOptional<z.ZodNumber>;
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodOptional<z.ZodBoolean>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            job_grade: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            level_order?: number | undefined;
            job_grade?: string[] | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            level_order?: number | undefined;
            job_grade?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
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
export declare const corehrV1JobCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodBoolean;
            job_title: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            pathway_id: z.ZodOptional<z.ZodString>;
            job_family_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_level_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1JobDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
        }>;
    };
};
export declare const corehrV1JobGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
        }>;
    };
};
export declare const corehrV1JobList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            query_language: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            name?: string | undefined;
            query_language?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            name?: string | undefined;
            query_language?: string | undefined;
        }>;
    };
};
export declare const corehrV1JobPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodOptional<z.ZodBoolean>;
            job_title: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            pathway_id: z.ZodOptional<z.ZodString>;
            job_family_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_level_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            effective_time?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            effective_time?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
        }>;
    };
};
export declare const corehrV1LeaveGrantingRecordCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            leave_type_id: z.ZodString;
            employment_id: z.ZodString;
            granting_quantity: z.ZodString;
            granting_unit: z.ZodNumber;
            effective_date: z.ZodString;
            expiration_date: z.ZodOptional<z.ZodString>;
            section_type: z.ZodOptional<z.ZodNumber>;
            reason: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            external_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason: {
                value: string;
                lang: string;
            }[];
            employment_id: string;
            leave_type_id: string;
            effective_date: string;
            granting_quantity: string;
            granting_unit: number;
            expiration_date?: string | undefined;
            external_id?: string | undefined;
            section_type?: number | undefined;
        }, {
            reason: {
                value: string;
                lang: string;
            }[];
            employment_id: string;
            leave_type_id: string;
            effective_date: string;
            granting_quantity: string;
            granting_unit: number;
            expiration_date?: string | undefined;
            external_id?: string | undefined;
            section_type?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
    };
};
export declare const corehrV1LeaveGrantingRecordDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            leave_granting_record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            leave_granting_record_id: string;
        }, {
            leave_granting_record_id: string;
        }>;
    };
};
export declare const corehrV1LeaveCalendarByScope: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            wk_department_id: z.ZodOptional<z.ZodString>;
            wk_country_region_id: z.ZodOptional<z.ZodString>;
            wk_employee_type_id: z.ZodOptional<z.ZodString>;
            wk_work_location_id: z.ZodOptional<z.ZodString>;
            wk_working_hours_type_id: z.ZodOptional<z.ZodString>;
            wk_job_family_id: z.ZodOptional<z.ZodString>;
            wk_company_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            wk_department_id?: string | undefined;
            wk_country_region_id?: string | undefined;
            wk_employee_type_id?: string | undefined;
            wk_work_location_id?: string | undefined;
            wk_working_hours_type_id?: string | undefined;
            wk_job_family_id?: string | undefined;
            wk_company_id?: string | undefined;
        }, {
            wk_department_id?: string | undefined;
            wk_country_region_id?: string | undefined;
            wk_employee_type_id?: string | undefined;
            wk_work_location_id?: string | undefined;
            wk_working_hours_type_id?: string | undefined;
            wk_job_family_id?: string | undefined;
            wk_company_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const corehrV1LeaveLeaveBalances: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            as_of_date: z.ZodOptional<z.ZodString>;
            employment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            time_zone: z.ZodOptional<z.ZodString>;
            include_offboard: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            time_zone?: string | undefined;
            employment_id_list?: string[] | undefined;
            as_of_date?: string | undefined;
            include_offboard?: boolean | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            time_zone?: string | undefined;
            employment_id_list?: string[] | undefined;
            as_of_date?: string | undefined;
            include_offboard?: boolean | undefined;
        }>;
    };
};
export declare const corehrV1LeaveLeaveRequestHistory: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            employment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            initiator_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            leave_request_status: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            leave_type_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            leave_start_date_min: z.ZodOptional<z.ZodString>;
            leave_start_date_max: z.ZodOptional<z.ZodString>;
            leave_end_date_min: z.ZodOptional<z.ZodString>;
            leave_end_date_max: z.ZodOptional<z.ZodString>;
            leave_submit_date_min: z.ZodOptional<z.ZodString>;
            leave_submit_date_max: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            leave_update_time_min: z.ZodOptional<z.ZodString>;
            leave_update_time_max: z.ZodOptional<z.ZodString>;
            return_detail: z.ZodOptional<z.ZodBoolean>;
            leave_term_type: z.ZodOptional<z.ZodNumber>;
            time_zone: z.ZodOptional<z.ZodString>;
            data_source: z.ZodOptional<z.ZodNumber>;
            db_update_time_min: z.ZodOptional<z.ZodString>;
            db_update_time_max: z.ZodOptional<z.ZodString>;
            wd_need_amount_zero_records: z.ZodOptional<z.ZodBoolean>;
            wd_need_denied_and_canceled_record: z.ZodOptional<z.ZodBoolean>;
            wd_paid_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            time_zone?: string | undefined;
            employment_id_list?: string[] | undefined;
            initiator_id_list?: string[] | undefined;
            leave_request_status?: string[] | undefined;
            leave_type_id_list?: string[] | undefined;
            leave_start_date_min?: string | undefined;
            leave_start_date_max?: string | undefined;
            leave_end_date_min?: string | undefined;
            leave_end_date_max?: string | undefined;
            leave_submit_date_min?: string | undefined;
            leave_submit_date_max?: string | undefined;
            leave_update_time_min?: string | undefined;
            leave_update_time_max?: string | undefined;
            return_detail?: boolean | undefined;
            leave_term_type?: number | undefined;
            data_source?: number | undefined;
            db_update_time_min?: string | undefined;
            db_update_time_max?: string | undefined;
            wd_need_amount_zero_records?: boolean | undefined;
            wd_need_denied_and_canceled_record?: boolean | undefined;
            wd_paid_type?: number | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            time_zone?: string | undefined;
            employment_id_list?: string[] | undefined;
            initiator_id_list?: string[] | undefined;
            leave_request_status?: string[] | undefined;
            leave_type_id_list?: string[] | undefined;
            leave_start_date_min?: string | undefined;
            leave_start_date_max?: string | undefined;
            leave_end_date_min?: string | undefined;
            leave_end_date_max?: string | undefined;
            leave_submit_date_min?: string | undefined;
            leave_submit_date_max?: string | undefined;
            leave_update_time_min?: string | undefined;
            leave_update_time_max?: string | undefined;
            return_detail?: boolean | undefined;
            leave_term_type?: number | undefined;
            data_source?: number | undefined;
            db_update_time_min?: string | undefined;
            db_update_time_max?: string | undefined;
            wd_need_amount_zero_records?: boolean | undefined;
            wd_need_denied_and_canceled_record?: boolean | undefined;
            wd_paid_type?: number | undefined;
        }>;
    };
};
export declare const corehrV1LeaveLeaveTypes: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            status: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            status?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            page_size: string;
            status?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1LeaveWorkCalendar: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            wk_calendar_ids: z.ZodArray<z.ZodString, "many">;
            wk_calendar_id_gt: z.ZodOptional<z.ZodString>;
            wk_option: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodBoolean>;
                offset: z.ZodOptional<z.ZodNumber>;
                limit: z.ZodNumber;
                sort_options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    sort_field: z.ZodOptional<z.ZodString>;
                    sort_order: z.ZodOptional<z.ZodNumber>;
                    sort_i18n: z.ZodOptional<z.ZodNumber>;
                    sort_by_strand_length: z.ZodOptional<z.ZodBoolean>;
                    sort_by_pinyin: z.ZodOptional<z.ZodBoolean>;
                    sort_by_enum_value_order: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }, {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            }, {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            }>>;
            only_enable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            wk_calendar_ids: string[];
            wk_calendar_id_gt?: string | undefined;
            wk_option?: {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            only_enable?: boolean | undefined;
        }, {
            wk_calendar_ids: string[];
            wk_calendar_id_gt?: string | undefined;
            wk_option?: {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            only_enable?: boolean | undefined;
        }>;
    };
};
export declare const corehrV1LeaveWorkCalendarDate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            wk_calendar_ids: z.ZodArray<z.ZodString, "many">;
            dates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            begin_date: z.ZodOptional<z.ZodString>;
            end_date: z.ZodOptional<z.ZodString>;
            offset: z.ZodOptional<z.ZodNumber>;
            limit: z.ZodOptional<z.ZodNumber>;
            ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            wk_calendar_ids: string[];
            offset?: number | undefined;
            end_date?: string | undefined;
            limit?: number | undefined;
            ids?: string[] | undefined;
            dates?: string[] | undefined;
            begin_date?: string | undefined;
        }, {
            wk_calendar_ids: string[];
            offset?: number | undefined;
            end_date?: string | undefined;
            limit?: number | undefined;
            ids?: string[] | undefined;
            dates?: string[] | undefined;
            begin_date?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const corehrV1LocationCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }>;
            location_usage_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            address: z.ZodOptional<z.ZodArray<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
                address_type_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>, "many">>;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }>, "many">>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            locale: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            time_zone_id: z.ZodOptional<z.ZodString>;
            display_language_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            locale?: {
                enum_name: string;
            } | undefined;
            address?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            location_usage_list?: {
                enum_name: string;
            }[] | undefined;
            time_zone_id?: string | undefined;
            display_language_id?: string | undefined;
        }, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            locale?: {
                enum_name: string;
            } | undefined;
            address?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            location_usage_list?: {
                enum_name: string;
            }[] | undefined;
            time_zone_id?: string | undefined;
            display_language_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1LocationDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            location_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location_id: string;
        }, {
            location_id: string;
        }>;
    };
};
export declare const corehrV1LocationGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            location_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location_id: string;
        }, {
            location_id: string;
        }>;
    };
};
export declare const corehrV1LocationList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1NationalIdTypeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            country_region_id: z.ZodString;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            active: z.ZodBoolean;
            validation_rule: z.ZodString;
            validation_rule_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            code: z.ZodString;
            identification_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            country_region_id: string;
            validation_rule: string;
            identification_type: {
                enum_name: string;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
        }, {
            code: string;
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            country_region_id: string;
            validation_rule: string;
            identification_type: {
                enum_name: string;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1NationalIdTypeDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            national_id_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            national_id_type_id: string;
        }, {
            national_id_type_id: string;
        }>;
    };
};
export declare const corehrV1NationalIdTypeGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            national_id_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            national_id_type_id: string;
        }, {
            national_id_type_id: string;
        }>;
    };
};
export declare const corehrV1NationalIdTypeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            identification_type: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            country_region_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            code?: string | undefined;
            page_token?: string | undefined;
            country_region_id?: string | undefined;
            identification_type?: string | undefined;
        }, {
            page_size: string;
            code?: string | undefined;
            page_token?: string | undefined;
            country_region_id?: string | undefined;
            identification_type?: string | undefined;
        }>;
    };
};
export declare const corehrV1NationalIdTypePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            country_region_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodOptional<z.ZodBoolean>;
            validation_rule: z.ZodOptional<z.ZodString>;
            validation_rule_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            code: z.ZodOptional<z.ZodString>;
            identification_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id?: string | undefined;
            validation_rule?: string | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
            identification_type?: {
                enum_name: string;
            } | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id?: string | undefined;
            validation_rule?: string | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
            identification_type?: {
                enum_name: string;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            national_id_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            national_id_type_id: string;
        }, {
            national_id_type_id: string;
        }>;
    };
};
export declare const corehrV1OffboardingQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            active: z.ZodOptional<z.ZodBoolean>;
            offboarding_reason_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            offboarding_reason_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            offboarding_reason_unique_identifier?: string[] | undefined;
        }>>;
    };
};
export declare const corehrV1OffboardingSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            employment_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            apply_initiating_time_start: z.ZodOptional<z.ZodString>;
            apply_initiating_time_end: z.ZodOptional<z.ZodString>;
            apply_finished_time_start: z.ZodOptional<z.ZodString>;
            apply_finished_time_end: z.ZodOptional<z.ZodString>;
            expected_offboarding_date_start: z.ZodOptional<z.ZodString>;
            expected_offboarding_date_end: z.ZodOptional<z.ZodString>;
            offboarding_date_start: z.ZodOptional<z.ZodString>;
            offboarding_date_end: z.ZodOptional<z.ZodString>;
            statuses: z.ZodOptional<z.ZodArray<z.ZodEnum<["Approving", "Approved", "Offboarded", "Rejected", "Withdrawn", "NoNeedApproval"]>, "many">>;
            reasons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            employee_reasons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            employment_ids?: string[] | undefined;
            apply_initiating_time_start?: string | undefined;
            apply_initiating_time_end?: string | undefined;
            apply_finished_time_start?: string | undefined;
            apply_finished_time_end?: string | undefined;
            expected_offboarding_date_start?: string | undefined;
            expected_offboarding_date_end?: string | undefined;
            offboarding_date_start?: string | undefined;
            offboarding_date_end?: string | undefined;
            statuses?: ("Approving" | "Approved" | "Offboarded" | "Rejected" | "Withdrawn" | "NoNeedApproval")[] | undefined;
            reasons?: string[] | undefined;
            employee_reasons?: string[] | undefined;
        }, {
            employment_ids?: string[] | undefined;
            apply_initiating_time_start?: string | undefined;
            apply_initiating_time_end?: string | undefined;
            apply_finished_time_start?: string | undefined;
            apply_finished_time_end?: string | undefined;
            expected_offboarding_date_start?: string | undefined;
            expected_offboarding_date_end?: string | undefined;
            offboarding_date_start?: string | undefined;
            offboarding_date_end?: string | undefined;
            statuses?: ("Approving" | "Approved" | "Offboarded" | "Rejected" | "Withdrawn" | "NoNeedApproval")[] | undefined;
            reasons?: string[] | undefined;
            employee_reasons?: string[] | undefined;
        }>>;
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>;
    };
};
export declare const corehrV1OffboardingSubmit: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            offboarding_mode: z.ZodNumber;
            employment_id: z.ZodString;
            offboarding_date: z.ZodString;
            offboarding_reason_unique_identifier: z.ZodString;
            offboarding_reason_explanation: z.ZodOptional<z.ZodString>;
            initiator_id: z.ZodOptional<z.ZodString>;
            add_block_list: z.ZodOptional<z.ZodBoolean>;
            block_reason: z.ZodOptional<z.ZodString>;
            block_reason_explanation: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            offboarding_reason_unique_identifier: string;
            offboarding_mode: number;
            offboarding_date: string;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            initiator_id?: string | undefined;
            offboarding_reason_explanation?: string | undefined;
            add_block_list?: boolean | undefined;
            block_reason?: string | undefined;
            block_reason_explanation?: string | undefined;
        }, {
            employment_id: string;
            offboarding_reason_unique_identifier: string;
            offboarding_mode: number;
            offboarding_date: string;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            initiator_id?: string | undefined;
            offboarding_reason_explanation?: string | undefined;
            add_block_list?: boolean | undefined;
            block_reason?: string | undefined;
            block_reason_explanation?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
    };
};
export declare const corehrV1PersonCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name_list: z.ZodArray<z.ZodObject<{
                local_primary: z.ZodOptional<z.ZodString>;
                local_first_name: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                name_type: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                local_first_name_2: z.ZodOptional<z.ZodString>;
                local_primary_2: z.ZodOptional<z.ZodString>;
                additional_name_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                first_name: z.ZodOptional<z.ZodString>;
                full_name: z.ZodOptional<z.ZodString>;
                hereditary: z.ZodOptional<z.ZodString>;
                custom_name: z.ZodOptional<z.ZodString>;
                custom_local_name: z.ZodOptional<z.ZodString>;
                middle_name: z.ZodOptional<z.ZodString>;
                name_primary: z.ZodOptional<z.ZodString>;
                secondary: z.ZodOptional<z.ZodString>;
                social: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                tertiary: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                local_middle_name: z.ZodOptional<z.ZodString>;
                local_secondary: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }>, "many">;
            gender: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            date_of_birth: z.ZodOptional<z.ZodString>;
            nationality_id: z.ZodOptional<z.ZodString>;
            race: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            marital_status: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            phone_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                international_area_code: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_number: z.ZodString;
                device_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            address_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>, "many">>;
            email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }>, "many">>;
            work_experience_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                company_organization: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                department: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                job: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }>, "many">>;
            education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                school: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                level_of_education: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                field_of_study: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                degree: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                school_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                field_of_study_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                country_region_id: z.ZodOptional<z.ZodString>;
                expected_end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }>, "many">>;
            bank_account_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                bank_name: z.ZodOptional<z.ZodString>;
                bank_account_number: z.ZodString;
                account_holder: z.ZodString;
                bank: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                branch_name: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                country_region_id: z.ZodOptional<z.ZodString>;
                bank_account_usage: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>, "many">>;
                bank_account_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                currency_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                national_id_type_id: z.ZodString;
                national_id_number: z.ZodString;
                issue_date: z.ZodOptional<z.ZodString>;
                expiration_date: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                issued_by: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }>, "many">>;
            dependent_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                gender: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                date_of_birth: z.ZodOptional<z.ZodString>;
                nationality_id: z.ZodOptional<z.ZodString>;
                national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    national_id_type_id: z.ZodString;
                    national_id_number: z.ZodString;
                    issue_date: z.ZodOptional<z.ZodString>;
                    expiration_date: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    issued_by: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }>, "many">>;
                spouses_working_status: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_this_person_covered_by_health_insurance: z.ZodOptional<z.ZodBoolean>;
                is_this_person_allowed_for_tax_deduction: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                dependent_name: z.ZodOptional<z.ZodString>;
                employer: z.ZodOptional<z.ZodString>;
                job: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>>;
                address: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    region_id: z.ZodOptional<z.ZodString>;
                    city_id: z.ZodOptional<z.ZodString>;
                    distinct_id: z.ZodOptional<z.ZodString>;
                    local_address_line1: z.ZodOptional<z.ZodString>;
                    local_address_line2: z.ZodOptional<z.ZodString>;
                    local_address_line3: z.ZodOptional<z.ZodString>;
                    local_address_line4: z.ZodOptional<z.ZodString>;
                    local_address_line5: z.ZodOptional<z.ZodString>;
                    local_address_line6: z.ZodOptional<z.ZodString>;
                    local_address_line7: z.ZodOptional<z.ZodString>;
                    local_address_line8: z.ZodOptional<z.ZodString>;
                    local_address_line9: z.ZodOptional<z.ZodString>;
                    postal_code: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }>>;
                birth_certificate_of_child: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            emergency_contact_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_ist: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>, "many">>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                legal_name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }>, "many">>;
            date_entered_workforce: z.ZodOptional<z.ZodString>;
            profile_image_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            resident_tax_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            age: z.ZodOptional<z.ZodNumber>;
            personal_profile: z.ZodOptional<z.ZodArray<z.ZodObject<{
                personal_profile_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name_list: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[];
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }, {
            name_list: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[];
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1PersonDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            person_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            person_id: string;
        }, {
            person_id: string;
        }>;
    };
};
export declare const corehrV1PersonGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodLiteral<"people_employee_id">>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "people_employee_id" | undefined;
        }, {
            user_id_type?: "people_employee_id" | undefined;
        }>>;
        path: z.ZodObject<{
            person_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            person_id: string;
        }, {
            person_id: string;
        }>;
    };
};
export declare const corehrV1PersonPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            name_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                local_primary: z.ZodOptional<z.ZodString>;
                local_first_name: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                name_type: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                local_first_name_2: z.ZodOptional<z.ZodString>;
                local_primary_2: z.ZodOptional<z.ZodString>;
                additional_name_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                first_name: z.ZodOptional<z.ZodString>;
                full_name: z.ZodOptional<z.ZodString>;
                hereditary: z.ZodOptional<z.ZodString>;
                custom_name: z.ZodOptional<z.ZodString>;
                custom_local_name: z.ZodOptional<z.ZodString>;
                middle_name: z.ZodOptional<z.ZodString>;
                name_primary: z.ZodOptional<z.ZodString>;
                secondary: z.ZodOptional<z.ZodString>;
                social: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                tertiary: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                local_middle_name: z.ZodOptional<z.ZodString>;
                local_secondary: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }>, "many">>;
            gender: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            date_of_birth: z.ZodOptional<z.ZodString>;
            nationality_id: z.ZodOptional<z.ZodString>;
            race: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            marital_status: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            phone_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                international_area_code: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_number: z.ZodString;
                device_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            address_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>, "many">>;
            email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }>, "many">>;
            work_experience_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                company_organization: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                department: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                job: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }>, "many">>;
            education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                school: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                level_of_education: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                field_of_study: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                degree: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                school_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                field_of_study_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                country_region_id: z.ZodOptional<z.ZodString>;
                expected_end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }>, "many">>;
            bank_account_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                bank_name: z.ZodOptional<z.ZodString>;
                bank_account_number: z.ZodString;
                account_holder: z.ZodString;
                bank: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                branch_name: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                country_region_id: z.ZodOptional<z.ZodString>;
                bank_account_usage: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>, "many">>;
                bank_account_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                currency_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                national_id_type_id: z.ZodString;
                national_id_number: z.ZodString;
                issue_date: z.ZodOptional<z.ZodString>;
                expiration_date: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                issued_by: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }>, "many">>;
            dependent_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                gender: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                date_of_birth: z.ZodOptional<z.ZodString>;
                nationality_id: z.ZodOptional<z.ZodString>;
                national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    national_id_type_id: z.ZodString;
                    national_id_number: z.ZodString;
                    issue_date: z.ZodOptional<z.ZodString>;
                    expiration_date: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    issued_by: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }>, "many">>;
                spouses_working_status: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_this_person_covered_by_health_insurance: z.ZodOptional<z.ZodBoolean>;
                is_this_person_allowed_for_tax_deduction: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                dependent_name: z.ZodOptional<z.ZodString>;
                employer: z.ZodOptional<z.ZodString>;
                job: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>>;
                address: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    region_id: z.ZodOptional<z.ZodString>;
                    city_id: z.ZodOptional<z.ZodString>;
                    distinct_id: z.ZodOptional<z.ZodString>;
                    local_address_line1: z.ZodOptional<z.ZodString>;
                    local_address_line2: z.ZodOptional<z.ZodString>;
                    local_address_line3: z.ZodOptional<z.ZodString>;
                    local_address_line4: z.ZodOptional<z.ZodString>;
                    local_address_line5: z.ZodOptional<z.ZodString>;
                    local_address_line6: z.ZodOptional<z.ZodString>;
                    local_address_line7: z.ZodOptional<z.ZodString>;
                    local_address_line8: z.ZodOptional<z.ZodString>;
                    local_address_line9: z.ZodOptional<z.ZodString>;
                    postal_code: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }>>;
                birth_certificate_of_child: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            emergency_contact_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_ist: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>, "many">>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                legal_name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }>, "many">>;
            date_entered_workforce: z.ZodOptional<z.ZodString>;
            profile_image_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            resident_tax_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            age: z.ZodOptional<z.ZodNumber>;
            personal_profile: z.ZodOptional<z.ZodArray<z.ZodObject<{
                personal_profile_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            name_list?: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }, {
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            name_list?: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            person_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            person_id: string;
        }, {
            person_id: string;
        }>;
    };
};
export declare const corehrV1PreHireDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            pre_hire_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pre_hire_id: string;
        }, {
            pre_hire_id: string;
        }>;
    };
};
export declare const corehrV1PreHireGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            pre_hire_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pre_hire_id: string;
        }, {
            pre_hire_id: string;
        }>;
    };
};
export declare const corehrV1PreHireList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            pre_hire_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            pre_hire_ids?: string[] | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            pre_hire_ids?: string[] | undefined;
        }>;
    };
};
export declare const corehrV1PreHirePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            ats_application_id: z.ZodOptional<z.ZodString>;
            hire_date: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            worker_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            person_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cost_center_id: z.ZodOptional<z.ZodString>;
                rate: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }>, "many">>;
            onboarding_status: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            onboarding_status: {
                enum_name: string;
            };
            employee_type?: {
                enum_name: string;
            } | undefined;
            employee_type_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            ats_application_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
            hire_date?: string | undefined;
            worker_id?: string | undefined;
        }, {
            onboarding_status: {
                enum_name: string;
            };
            employee_type?: {
                enum_name: string;
            } | undefined;
            employee_type_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            ats_application_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
            hire_date?: string | undefined;
            worker_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            pre_hire_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pre_hire_id: string;
        }, {
            pre_hire_id: string;
        }>;
    };
};
export declare const corehrV1ProcessFormVariableDataGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            process_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            process_id: string;
        }, {
            process_id: string;
        }>;
    };
};
export declare const corehrV1SecurityGroupList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1SecurityGroupQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            item_list: z.ZodArray<z.ZodObject<{
                role_key: z.ZodString;
                department_id: z.ZodString;
                work_location_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }, {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }>, "many">;
            updated_at_gte: z.ZodOptional<z.ZodString>;
            updated_at_lte: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            item_list: {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }[];
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }, {
            item_list: {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }[];
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }>>;
    };
};
export declare const corehrV1SubdivisionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            subdivision_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subdivision_id: string;
        }, {
            subdivision_id: string;
        }>;
    };
};
export declare const corehrV1SubdivisionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            country_region_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            country_region_id?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            country_region_id?: string | undefined;
        }>;
    };
};
export declare const corehrV1SubregionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            subregion_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subregion_id: string;
        }, {
            subregion_id: string;
        }>;
    };
};
export declare const corehrV1SubregionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
            subdivision_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
            subdivision_id?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
            subdivision_id?: string | undefined;
        }>;
    };
};
export declare const corehrV1TransferReasonQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            active: z.ZodOptional<z.ZodBoolean>;
            transfer_reason_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            transfer_reason_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            transfer_reason_unique_identifier?: string[] | undefined;
        }>>;
    };
};
export declare const corehrV1TransferTypeQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            active: z.ZodOptional<z.ZodBoolean>;
            transfer_type_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            transfer_type_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            transfer_type_unique_identifier?: string[] | undefined;
        }>>;
    };
};
export declare const corehrV1WorkingHoursTypeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            country_region_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            default_for_job: z.ZodBoolean;
            active: z.ZodBoolean;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_for_job: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_for_job: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
    };
};
export declare const corehrV1WorkingHoursTypeDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            working_hours_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            working_hours_type_id: string;
        }, {
            working_hours_type_id: string;
        }>;
    };
};
export declare const corehrV1WorkingHoursTypeGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            working_hours_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            working_hours_type_id: string;
        }, {
            working_hours_type_id: string;
        }>;
    };
};
export declare const corehrV1WorkingHoursTypeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const corehrV1WorkingHoursTypePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            country_region_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            default_for_job: z.ZodOptional<z.ZodBoolean>;
            active: z.ZodOptional<z.ZodBoolean>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
            default_for_job?: boolean | undefined;
        }, {
            code?: string | undefined;
            name?: {
                value: string;
                lang: string;
            }[] | undefined;
            active?: boolean | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
            default_for_job?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
            client_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            working_hours_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            working_hours_type_id: string;
        }, {
            working_hours_type_id: string;
        }>;
    };
};
export declare const corehrV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            role_id: z.ZodString;
            management_scope_list: z.ZodArray<z.ZodObject<{
                management_dimension: z.ZodString;
                obj_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                management_dimension: string;
                obj_id: string;
            }, {
                management_dimension: string;
                obj_id: string;
            }>, "many">;
            search_method: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            role_id: string;
            management_scope_list: {
                management_dimension: string;
                obj_id: string;
            }[];
            search_method: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
            role_id: string;
            management_scope_list: {
                management_dimension: string;
                obj_id: string;
            }[];
            search_method: string;
            page_token?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
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
            employment_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            employment_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
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
            employment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            role_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            updated_at_gte: z.ZodOptional<z.ZodString>;
            updated_at_lte: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            employment_id_list?: string[] | undefined;
            role_id_list?: string[] | undefined;
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }, {
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            employment_id_list?: string[] | undefined;
            role_id_list?: string[] | undefined;
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
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
            ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ids: string[];
        }, {
            ids: string[];
        }>;
        params: z.ZodObject<{
            id_transform_type: z.ZodNumber;
            id_type: z.ZodEnum<["user_id", "department_id", "job_level_id", "job_family_id", "employee_type_id"]>;
            feishu_user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            feishu_department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            id_transform_type: number;
            id_type: "user_id" | "department_id" | "job_family_id" | "job_level_id" | "employee_type_id";
            feishu_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            feishu_department_id_type?: "department_id" | "open_department_id" | undefined;
        }, {
            id_transform_type: number;
            id_type: "user_id" | "department_id" | "job_family_id" | "job_level_id" | "employee_type_id";
            feishu_user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            feishu_department_id_type?: "department_id" | "open_department_id" | undefined;
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
            object_api_name: z.ZodString;
            enum_field_api_name: z.ZodString;
            enum_field_options: z.ZodArray<z.ZodObject<{
                option_api_name: z.ZodString;
                name: z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_options: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }[];
        }, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_options: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        data: z.ZodObject<{
            object_api_name: z.ZodString;
            enum_field_api_name: z.ZodString;
            enum_field_option: z.ZodObject<{
                option_api_name: z.ZodString;
                active: z.ZodBoolean;
                name: z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            }>;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_option: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            };
        }, {
            object_api_name: string;
            enum_field_api_name: string;
            enum_field_option: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                option_api_name: string;
                active: boolean;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        data: z.ZodObject<{
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                effective_time: z.ZodOptional<z.ZodString>;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }>;
            type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            industry_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            legal_representative: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            post_code: z.ZodOptional<z.ZodString>;
            tax_payer_id: z.ZodOptional<z.ZodString>;
            confidential: z.ZodOptional<z.ZodBoolean>;
            sub_type_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            branch_company: z.ZodOptional<z.ZodBoolean>;
            primary_manager: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            currency: z.ZodOptional<z.ZodObject<{
                currency_name: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                numeric_code: z.ZodOptional<z.ZodNumber>;
                currency_alpha_3_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }, {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            }>>;
            phone: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            fax: z.ZodOptional<z.ZodObject<{
                area_code: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                phone_number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }, {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            }>>;
            registered_office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
            office_address_info: z.ZodOptional<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            };
            type?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }, {
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                effective_time?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            };
            type?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            industry_list?: {
                enum_name: string;
            }[] | undefined;
            legal_representative?: {
                value: string;
                lang: string;
            }[] | undefined;
            post_code?: string | undefined;
            tax_payer_id?: string | undefined;
            confidential?: boolean | undefined;
            sub_type_list?: {
                enum_name: string;
            }[] | undefined;
            branch_company?: boolean | undefined;
            primary_manager?: {
                value: string;
                lang: string;
            }[] | undefined;
            currency?: {
                currency_name?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                numeric_code?: number | undefined;
                currency_alpha_3_code?: string | undefined;
            } | undefined;
            phone?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            fax?: {
                area_code: {
                    enum_name: string;
                };
                phone_number: string;
            } | undefined;
            registered_office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
            office_address_info?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            company_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            company_id: string;
        }, {
            company_id: string;
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
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: string;
            page_token?: string | undefined;
        }, {
            page_size: string;
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
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
            employment_id: z.ZodOptional<z.ZodString>;
            reference_object_api: z.ZodOptional<z.ZodEnum<["cpst_item", "cpst_indicator"]>>;
            reference_object_id: z.ZodString;
            department_id: z.ZodOptional<z.ZodString>;
            work_location_id: z.ZodOptional<z.ZodString>;
            company_id: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            job_level_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            recruitment_type: z.ZodOptional<z.ZodEnum<["experienced_professionals", "recent_graduates", "routine_intern"]>>;
            cpst_change_reason_id: z.ZodOptional<z.ZodString>;
            cpst_plan_id: z.ZodOptional<z.ZodString>;
            cpst_salary_level_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reference_object_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            effective_time?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            company_id?: string | undefined;
            reference_object_api?: "cpst_item" | "cpst_indicator" | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            recruitment_type?: "experienced_professionals" | "recent_graduates" | "routine_intern" | undefined;
            cpst_change_reason_id?: string | undefined;
            cpst_plan_id?: string | undefined;
            cpst_salary_level_id?: string | undefined;
        }, {
            reference_object_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id?: string | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            effective_time?: string | undefined;
            employment_id?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            employee_type_id?: string | undefined;
            company_id?: string | undefined;
            reference_object_api?: "cpst_item" | "cpst_indicator" | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            recruitment_type?: "experienced_professionals" | "recent_graduates" | "routine_intern" | undefined;
            cpst_change_reason_id?: string | undefined;
            cpst_plan_id?: string | undefined;
            cpst_salary_level_id?: string | undefined;
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
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            employment_id: z.ZodString;
            contract_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            first_party_company_id: z.ZodString;
            person_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            duration_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            contract_end_date: z.ZodOptional<z.ZodString>;
            contract_number: z.ZodOptional<z.ZodString>;
            signing_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            employment_id: string;
            contract_type: {
                enum_name: string;
            };
            first_party_company_id: string;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time: string;
            employment_id: string;
            contract_type: {
                enum_name: string;
            };
            first_party_company_id: string;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            person_id?: string | undefined;
            duration_type?: {
                enum_name: string;
            } | undefined;
            contract_end_date?: string | undefined;
            contract_number?: string | undefined;
            signing_type?: {
                enum_name: string;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            contract_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            contract_id: string;
        }, {
            contract_id: string;
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
            country_region_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            country_region_id: string;
        }, {
            country_region_id: string;
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
            currency_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            currency_id: string;
        }, {
            currency_id: string;
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
            object_api_name: z.ZodString;
            custom_api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            object_api_name: string;
            custom_api_name: string;
        }, {
            object_api_name: string;
            custom_api_name: string;
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
            object_api_name_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            object_api_name_list: string[];
        }, {
            object_api_name_list: string[];
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
            sub_type: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            manager: z.ZodOptional<z.ZodString>;
            is_confidential: z.ZodOptional<z.ZodBoolean>;
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }>;
            effective_time: z.ZodString;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            cost_center_id: z.ZodOptional<z.ZodString>;
            staffing_model: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            sub_type?: {
                enum_name: string;
            } | undefined;
            manager?: string | undefined;
            is_confidential?: boolean | undefined;
            cost_center_id?: string | undefined;
            staffing_model?: {
                enum_name: string;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
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
        path: z.ZodObject<{
            department_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
        }, {
            department_id: string;
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
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            default_employee_type: z.ZodBoolean;
            active: z.ZodBoolean;
            code: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_employee_type: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_employee_type: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            employee_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type_id: string;
        }, {
            employee_type_id: string;
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
            seniority_date: z.ZodOptional<z.ZodString>;
            employee_number: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            employment_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            person_id: z.ZodString;
            primary_employment: z.ZodBoolean;
            employment_status: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            work_email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                email_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            reason_for_offboarding: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            ats_application_id: z.ZodOptional<z.ZodString>;
            rehire: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            rehire_employment_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            person_id: string;
            employment_type: {
                enum_name: string;
            };
            primary_employment: boolean;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_status?: {
                enum_name: string;
            } | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
            rehire?: {
                enum_name: string;
            } | undefined;
            rehire_employment_id?: string | undefined;
        }, {
            effective_time: string;
            person_id: string;
            employment_type: {
                enum_name: string;
            };
            primary_employment: boolean;
            expiration_time?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            seniority_date?: string | undefined;
            employee_number?: string | undefined;
            employment_status?: {
                enum_name: string;
            } | undefined;
            work_email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                email_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            reason_for_offboarding?: {
                enum_name: string;
            } | undefined;
            ats_application_id?: string | undefined;
            rehire?: {
                enum_name: string;
            } | undefined;
            rehire_employment_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
        }, {
            employment_id: string;
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
            transfer_mode: z.ZodNumber;
            employment_id: z.ZodString;
            transfer_type_unique_identifier: z.ZodString;
            flow_id: z.ZodOptional<z.ZodString>;
            effective_date: z.ZodString;
            transfer_info: z.ZodObject<{
                remark: z.ZodOptional<z.ZodString>;
                offer_info: z.ZodOptional<z.ZodString>;
                target_dotted_manager_clean: z.ZodOptional<z.ZodBoolean>;
                probation_exist: z.ZodOptional<z.ZodBoolean>;
                original_department: z.ZodOptional<z.ZodString>;
                target_department: z.ZodOptional<z.ZodString>;
                original_work_location: z.ZodOptional<z.ZodString>;
                target_work_location: z.ZodOptional<z.ZodString>;
                original_direct_manager: z.ZodOptional<z.ZodString>;
                target_direct_manager: z.ZodOptional<z.ZodString>;
                original_dotted_manager: z.ZodOptional<z.ZodString>;
                target_dotted_manager: z.ZodOptional<z.ZodString>;
                original_job: z.ZodOptional<z.ZodString>;
                target_job: z.ZodOptional<z.ZodString>;
                original_job_family: z.ZodOptional<z.ZodString>;
                target_job_family: z.ZodOptional<z.ZodString>;
                original_job_level: z.ZodOptional<z.ZodString>;
                target_job_level: z.ZodOptional<z.ZodString>;
                original_workforce_type: z.ZodOptional<z.ZodString>;
                target_workforce_type: z.ZodOptional<z.ZodString>;
                original_employee_subtype: z.ZodOptional<z.ZodString>;
                target_employee_subtype: z.ZodOptional<z.ZodString>;
                original_company: z.ZodOptional<z.ZodString>;
                target_company: z.ZodOptional<z.ZodString>;
                original_contract_number: z.ZodOptional<z.ZodString>;
                target_contract_number: z.ZodOptional<z.ZodString>;
                original_contract_type: z.ZodOptional<z.ZodString>;
                target_contract_type: z.ZodOptional<z.ZodString>;
                original_duration_type: z.ZodOptional<z.ZodString>;
                target_duration_type: z.ZodOptional<z.ZodString>;
                original_signing_type: z.ZodOptional<z.ZodString>;
                target_signing_type: z.ZodOptional<z.ZodString>;
                original_contract_start_date: z.ZodOptional<z.ZodString>;
                target_contract_start_date: z.ZodOptional<z.ZodString>;
                original_contract_end_date: z.ZodOptional<z.ZodString>;
                target_contract_end_date: z.ZodOptional<z.ZodString>;
                original_working_hours_type: z.ZodOptional<z.ZodString>;
                target_working_hours_type: z.ZodOptional<z.ZodString>;
                original_working_calendar: z.ZodOptional<z.ZodString>;
                target_working_calendar: z.ZodOptional<z.ZodString>;
                original_probation_end_date: z.ZodOptional<z.ZodString>;
                target_probation_end_date: z.ZodOptional<z.ZodString>;
                original_weekly_working_hours: z.ZodOptional<z.ZodString>;
                target_weekly_working_hours: z.ZodOptional<z.ZodString>;
                original_work_shift: z.ZodOptional<z.ZodString>;
                target_work_shift: z.ZodOptional<z.ZodString>;
                original_cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    cost_center_id: z.ZodOptional<z.ZodString>;
                    rate: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }>, "many">>;
                target_cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    cost_center_id: z.ZodOptional<z.ZodString>;
                    rate: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }, {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }>, "many">>;
                original_employment_change: z.ZodOptional<z.ZodObject<{
                    regular_employee_start_date: z.ZodOptional<z.ZodString>;
                    seniority_date: z.ZodOptional<z.ZodString>;
                    employee_number: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        custom_api_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        custom_api_name: string;
                    }, {
                        value: string;
                        custom_api_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }>>;
                target_employment_change: z.ZodOptional<z.ZodObject<{
                    regular_employee_start_date: z.ZodOptional<z.ZodString>;
                    seniority_date: z.ZodOptional<z.ZodString>;
                    employee_number: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        custom_api_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        custom_api_name: string;
                    }, {
                        value: string;
                        custom_api_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }, {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                }>>;
                original_job_grade: z.ZodOptional<z.ZodString>;
                target_job_grade: z.ZodOptional<z.ZodString>;
                original_compensation_type: z.ZodOptional<z.ZodString>;
                target_compensation_type: z.ZodOptional<z.ZodString>;
                original_service_company: z.ZodOptional<z.ZodString>;
                target_service_company: z.ZodOptional<z.ZodString>;
                original_position: z.ZodOptional<z.ZodString>;
                target_position: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            }, {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            }>;
            transfer_key: z.ZodOptional<z.ZodString>;
            initiator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            transfer_mode: number;
            transfer_type_unique_identifier: string;
            effective_date: string;
            transfer_info: {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            };
            flow_id?: string | undefined;
            transfer_key?: string | undefined;
            initiator_id?: string | undefined;
        }, {
            employment_id: string;
            transfer_mode: number;
            transfer_type_unique_identifier: string;
            effective_date: string;
            transfer_info: {
                remark?: string | undefined;
                offer_info?: string | undefined;
                target_dotted_manager_clean?: boolean | undefined;
                probation_exist?: boolean | undefined;
                original_department?: string | undefined;
                target_department?: string | undefined;
                original_work_location?: string | undefined;
                target_work_location?: string | undefined;
                original_direct_manager?: string | undefined;
                target_direct_manager?: string | undefined;
                original_dotted_manager?: string | undefined;
                target_dotted_manager?: string | undefined;
                original_job?: string | undefined;
                target_job?: string | undefined;
                original_job_family?: string | undefined;
                target_job_family?: string | undefined;
                original_job_level?: string | undefined;
                target_job_level?: string | undefined;
                original_workforce_type?: string | undefined;
                target_workforce_type?: string | undefined;
                original_employee_subtype?: string | undefined;
                target_employee_subtype?: string | undefined;
                original_company?: string | undefined;
                target_company?: string | undefined;
                original_contract_number?: string | undefined;
                target_contract_number?: string | undefined;
                original_contract_type?: string | undefined;
                target_contract_type?: string | undefined;
                original_duration_type?: string | undefined;
                target_duration_type?: string | undefined;
                original_signing_type?: string | undefined;
                target_signing_type?: string | undefined;
                original_contract_start_date?: string | undefined;
                target_contract_start_date?: string | undefined;
                original_contract_end_date?: string | undefined;
                target_contract_end_date?: string | undefined;
                original_working_hours_type?: string | undefined;
                target_working_hours_type?: string | undefined;
                original_working_calendar?: string | undefined;
                target_working_calendar?: string | undefined;
                original_probation_end_date?: string | undefined;
                target_probation_end_date?: string | undefined;
                original_weekly_working_hours?: string | undefined;
                target_weekly_working_hours?: string | undefined;
                original_work_shift?: string | undefined;
                target_work_shift?: string | undefined;
                original_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                target_cost_center_rate?: {
                    cost_center_id?: string | undefined;
                    rate?: number | undefined;
                }[] | undefined;
                original_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                target_employment_change?: {
                    custom_fields?: {
                        value: string;
                        custom_api_name: string;
                    }[] | undefined;
                    seniority_date?: string | undefined;
                    employee_number?: string | undefined;
                    regular_employee_start_date?: string | undefined;
                } | undefined;
                original_job_grade?: string | undefined;
                target_job_grade?: string | undefined;
                original_compensation_type?: string | undefined;
                target_compensation_type?: string | undefined;
                original_service_company?: string | undefined;
                target_service_company?: string | undefined;
                original_position?: string | undefined;
                target_position?: string | undefined;
            };
            flow_id?: string | undefined;
            transfer_key?: string | undefined;
            initiator_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
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
            job_level_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodString;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            work_location_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            probation_start_date: z.ZodOptional<z.ZodString>;
            probation_end_date: z.ZodOptional<z.ZodString>;
            primary_job_data: z.ZodBoolean;
            employment_id: z.ZodString;
            effective_time: z.ZodString;
            expiration_time: z.ZodOptional<z.ZodString>;
            job_family_id: z.ZodOptional<z.ZodString>;
            assignment_start_reason: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            probation_expected_end_date: z.ZodOptional<z.ZodString>;
            direct_manager_id: z.ZodOptional<z.ZodString>;
            dotted_line_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            second_direct_manager_id: z.ZodOptional<z.ZodString>;
            cost_center_rate: z.ZodOptional<z.ZodArray<z.ZodObject<{
                cost_center_id: z.ZodOptional<z.ZodString>;
                rate: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }, {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            employment_id: string;
            employee_type_id: string;
            primary_job_data: boolean;
            assignment_start_reason: {
                enum_name: string;
            };
            department_id?: string | undefined;
            expiration_time?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
        }, {
            effective_time: string;
            employment_id: string;
            employee_type_id: string;
            primary_job_data: boolean;
            assignment_start_reason: {
                enum_name: string;
            };
            department_id?: string | undefined;
            expiration_time?: string | undefined;
            job_family_id?: string | undefined;
            job_level_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            work_location_id?: string | undefined;
            job_id?: string | undefined;
            working_hours_type_id?: string | undefined;
            probation_start_date?: string | undefined;
            probation_end_date?: string | undefined;
            probation_expected_end_date?: string | undefined;
            direct_manager_id?: string | undefined;
            dotted_line_manager_id_list?: string[] | undefined;
            second_direct_manager_id?: string | undefined;
            cost_center_rate?: {
                cost_center_id?: string | undefined;
                rate?: number | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
            client_token?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
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
        path: z.ZodObject<{
            job_data_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_data_id: string;
        }, {
            job_data_id: string;
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
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            active: z.ZodBoolean;
            selectable: z.ZodOptional<z.ZodBoolean>;
            parent_id: z.ZodOptional<z.ZodString>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            effective_time: z.ZodString;
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            parent_id?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            selectable?: boolean | undefined;
            pathway_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
            level_order: z.ZodNumber;
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodBoolean;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            job_grade: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            pathway_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            level_order: number;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            job_grade?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            level_order: number;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            pathway_ids?: string[] | undefined;
            job_grade?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        data: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            active: z.ZodBoolean;
            job_title: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            pathway_id: z.ZodOptional<z.ZodString>;
            job_family_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_level_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            effective_time: string;
            active: boolean;
            code?: string | undefined;
            description?: {
                value: string;
                lang: string;
            }[] | undefined;
            job_title?: {
                value: string;
                lang: string;
            }[] | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            pathway_id?: string | undefined;
            job_family_id_list?: string[] | undefined;
            job_level_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
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
            leave_type_id: z.ZodString;
            employment_id: z.ZodString;
            granting_quantity: z.ZodString;
            granting_unit: z.ZodNumber;
            effective_date: z.ZodString;
            expiration_date: z.ZodOptional<z.ZodString>;
            section_type: z.ZodOptional<z.ZodNumber>;
            reason: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            external_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason: {
                value: string;
                lang: string;
            }[];
            employment_id: string;
            leave_type_id: string;
            effective_date: string;
            granting_quantity: string;
            granting_unit: number;
            expiration_date?: string | undefined;
            external_id?: string | undefined;
            section_type?: number | undefined;
        }, {
            reason: {
                value: string;
                lang: string;
            }[];
            employment_id: string;
            leave_type_id: string;
            effective_date: string;
            granting_quantity: string;
            granting_unit: number;
            expiration_date?: string | undefined;
            external_id?: string | undefined;
            section_type?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
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
            leave_granting_record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            leave_granting_record_id: string;
        }, {
            leave_granting_record_id: string;
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
            wk_department_id: z.ZodOptional<z.ZodString>;
            wk_country_region_id: z.ZodOptional<z.ZodString>;
            wk_employee_type_id: z.ZodOptional<z.ZodString>;
            wk_work_location_id: z.ZodOptional<z.ZodString>;
            wk_working_hours_type_id: z.ZodOptional<z.ZodString>;
            wk_job_family_id: z.ZodOptional<z.ZodString>;
            wk_company_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            wk_department_id?: string | undefined;
            wk_country_region_id?: string | undefined;
            wk_employee_type_id?: string | undefined;
            wk_work_location_id?: string | undefined;
            wk_working_hours_type_id?: string | undefined;
            wk_job_family_id?: string | undefined;
            wk_company_id?: string | undefined;
        }, {
            wk_department_id?: string | undefined;
            wk_country_region_id?: string | undefined;
            wk_employee_type_id?: string | undefined;
            wk_work_location_id?: string | undefined;
            wk_working_hours_type_id?: string | undefined;
            wk_job_family_id?: string | undefined;
            wk_company_id?: string | undefined;
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
            wk_calendar_ids: z.ZodArray<z.ZodString, "many">;
            wk_calendar_id_gt: z.ZodOptional<z.ZodString>;
            wk_option: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodBoolean>;
                offset: z.ZodOptional<z.ZodNumber>;
                limit: z.ZodNumber;
                sort_options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    sort_field: z.ZodOptional<z.ZodString>;
                    sort_order: z.ZodOptional<z.ZodNumber>;
                    sort_i18n: z.ZodOptional<z.ZodNumber>;
                    sort_by_strand_length: z.ZodOptional<z.ZodBoolean>;
                    sort_by_pinyin: z.ZodOptional<z.ZodBoolean>;
                    sort_by_enum_value_order: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }, {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            }, {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            }>>;
            only_enable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            wk_calendar_ids: string[];
            wk_calendar_id_gt?: string | undefined;
            wk_option?: {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            only_enable?: boolean | undefined;
        }, {
            wk_calendar_ids: string[];
            wk_calendar_id_gt?: string | undefined;
            wk_option?: {
                limit: number;
                count?: boolean | undefined;
                offset?: number | undefined;
                sort_options?: {
                    sort_order?: number | undefined;
                    sort_field?: string | undefined;
                    sort_i18n?: number | undefined;
                    sort_by_strand_length?: boolean | undefined;
                    sort_by_pinyin?: boolean | undefined;
                    sort_by_enum_value_order?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            only_enable?: boolean | undefined;
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
            wk_calendar_ids: z.ZodArray<z.ZodString, "many">;
            dates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            begin_date: z.ZodOptional<z.ZodString>;
            end_date: z.ZodOptional<z.ZodString>;
            offset: z.ZodOptional<z.ZodNumber>;
            limit: z.ZodOptional<z.ZodNumber>;
            ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            wk_calendar_ids: string[];
            offset?: number | undefined;
            end_date?: string | undefined;
            limit?: number | undefined;
            ids?: string[] | undefined;
            dates?: string[] | undefined;
            begin_date?: string | undefined;
        }, {
            wk_calendar_ids: string[];
            offset?: number | undefined;
            end_date?: string | undefined;
            limit?: number | undefined;
            ids?: string[] | undefined;
            dates?: string[] | undefined;
            begin_date?: string | undefined;
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
            hiberarchy_common: z.ZodObject<{
                parent_id: z.ZodOptional<z.ZodString>;
                name: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                active: z.ZodBoolean;
                code: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }, {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            }>;
            location_usage_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>, "many">>;
            address: z.ZodOptional<z.ZodArray<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                address_line1: z.ZodOptional<z.ZodString>;
                address_line2: z.ZodOptional<z.ZodString>;
                address_line3: z.ZodOptional<z.ZodString>;
                address_line4: z.ZodOptional<z.ZodString>;
                address_line5: z.ZodOptional<z.ZodString>;
                address_line6: z.ZodOptional<z.ZodString>;
                address_line7: z.ZodOptional<z.ZodString>;
                address_line8: z.ZodOptional<z.ZodString>;
                address_line9: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
                address_type_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>, "many">>;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }>, "many">>;
            working_hours_type_id: z.ZodOptional<z.ZodString>;
            effective_time: z.ZodString;
            locale: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            time_zone_id: z.ZodOptional<z.ZodString>;
            display_language_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            locale?: {
                enum_name: string;
            } | undefined;
            address?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            location_usage_list?: {
                enum_name: string;
            }[] | undefined;
            time_zone_id?: string | undefined;
            display_language_id?: string | undefined;
        }, {
            effective_time: string;
            hiberarchy_common: {
                name: {
                    value: string;
                    lang: string;
                }[];
                active: boolean;
                code?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                parent_id?: string | undefined;
            };
            locale?: {
                enum_name: string;
            } | undefined;
            address?: {
                country_region_id: string;
                region_id?: string | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                address_line1?: string | undefined;
                address_line2?: string | undefined;
                address_line3?: string | undefined;
                address_line4?: string | undefined;
                address_line5?: string | undefined;
                address_line6?: string | undefined;
                address_line7?: string | undefined;
                address_line8?: string | undefined;
                address_line9?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                address_type_list?: {
                    enum_name: string;
                }[] | undefined;
            }[] | undefined;
            working_hours_type_id?: string | undefined;
            location_usage_list?: {
                enum_name: string;
            }[] | undefined;
            time_zone_id?: string | undefined;
            display_language_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            location_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            location_id: string;
        }, {
            location_id: string;
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
            country_region_id: z.ZodString;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            active: z.ZodBoolean;
            validation_rule: z.ZodString;
            validation_rule_description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">>;
            code: z.ZodString;
            identification_type: z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            country_region_id: string;
            validation_rule: string;
            identification_type: {
                enum_name: string;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
        }, {
            code: string;
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            country_region_id: string;
            validation_rule: string;
            identification_type: {
                enum_name: string;
            };
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            validation_rule_description?: {
                value: string;
                lang: string;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            national_id_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            national_id_type_id: string;
        }, {
            national_id_type_id: string;
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
            active: z.ZodOptional<z.ZodBoolean>;
            offboarding_reason_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            offboarding_reason_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            offboarding_reason_unique_identifier?: string[] | undefined;
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
            employment_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            apply_initiating_time_start: z.ZodOptional<z.ZodString>;
            apply_initiating_time_end: z.ZodOptional<z.ZodString>;
            apply_finished_time_start: z.ZodOptional<z.ZodString>;
            apply_finished_time_end: z.ZodOptional<z.ZodString>;
            expected_offboarding_date_start: z.ZodOptional<z.ZodString>;
            expected_offboarding_date_end: z.ZodOptional<z.ZodString>;
            offboarding_date_start: z.ZodOptional<z.ZodString>;
            offboarding_date_end: z.ZodOptional<z.ZodString>;
            statuses: z.ZodOptional<z.ZodArray<z.ZodEnum<["Approving", "Approved", "Offboarded", "Rejected", "Withdrawn", "NoNeedApproval"]>, "many">>;
            reasons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            employee_reasons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            employment_ids?: string[] | undefined;
            apply_initiating_time_start?: string | undefined;
            apply_initiating_time_end?: string | undefined;
            apply_finished_time_start?: string | undefined;
            apply_finished_time_end?: string | undefined;
            expected_offboarding_date_start?: string | undefined;
            expected_offboarding_date_end?: string | undefined;
            offboarding_date_start?: string | undefined;
            offboarding_date_end?: string | undefined;
            statuses?: ("Approving" | "Approved" | "Offboarded" | "Rejected" | "Withdrawn" | "NoNeedApproval")[] | undefined;
            reasons?: string[] | undefined;
            employee_reasons?: string[] | undefined;
        }, {
            employment_ids?: string[] | undefined;
            apply_initiating_time_start?: string | undefined;
            apply_initiating_time_end?: string | undefined;
            apply_finished_time_start?: string | undefined;
            apply_finished_time_end?: string | undefined;
            expected_offboarding_date_start?: string | undefined;
            expected_offboarding_date_end?: string | undefined;
            offboarding_date_start?: string | undefined;
            offboarding_date_end?: string | undefined;
            statuses?: ("Approving" | "Approved" | "Offboarded" | "Rejected" | "Withdrawn" | "NoNeedApproval")[] | undefined;
            reasons?: string[] | undefined;
            employee_reasons?: string[] | undefined;
        }>>;
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
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
            offboarding_mode: z.ZodNumber;
            employment_id: z.ZodString;
            offboarding_date: z.ZodString;
            offboarding_reason_unique_identifier: z.ZodString;
            offboarding_reason_explanation: z.ZodOptional<z.ZodString>;
            initiator_id: z.ZodOptional<z.ZodString>;
            add_block_list: z.ZodOptional<z.ZodBoolean>;
            block_reason: z.ZodOptional<z.ZodString>;
            block_reason_explanation: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            offboarding_reason_unique_identifier: string;
            offboarding_mode: number;
            offboarding_date: string;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            initiator_id?: string | undefined;
            offboarding_reason_explanation?: string | undefined;
            add_block_list?: boolean | undefined;
            block_reason?: string | undefined;
            block_reason_explanation?: string | undefined;
        }, {
            employment_id: string;
            offboarding_reason_unique_identifier: string;
            offboarding_mode: number;
            offboarding_date: string;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            initiator_id?: string | undefined;
            offboarding_reason_explanation?: string | undefined;
            add_block_list?: boolean | undefined;
            block_reason?: string | undefined;
            block_reason_explanation?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
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
            name_list: z.ZodArray<z.ZodObject<{
                local_primary: z.ZodOptional<z.ZodString>;
                local_first_name: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                name_type: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                local_first_name_2: z.ZodOptional<z.ZodString>;
                local_primary_2: z.ZodOptional<z.ZodString>;
                additional_name_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                first_name: z.ZodOptional<z.ZodString>;
                full_name: z.ZodOptional<z.ZodString>;
                hereditary: z.ZodOptional<z.ZodString>;
                custom_name: z.ZodOptional<z.ZodString>;
                custom_local_name: z.ZodOptional<z.ZodString>;
                middle_name: z.ZodOptional<z.ZodString>;
                name_primary: z.ZodOptional<z.ZodString>;
                secondary: z.ZodOptional<z.ZodString>;
                social: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                tertiary: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                local_middle_name: z.ZodOptional<z.ZodString>;
                local_secondary: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }, {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }>, "many">;
            gender: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            date_of_birth: z.ZodOptional<z.ZodString>;
            nationality_id: z.ZodOptional<z.ZodString>;
            race: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            marital_status: z.ZodOptional<z.ZodObject<{
                enum_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enum_name: string;
            }, {
                enum_name: string;
            }>>;
            phone_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                international_area_code: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_number: z.ZodString;
                device_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_usage: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_primary: z.ZodOptional<z.ZodBoolean>;
                is_public: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }, {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            address_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                country_region_id: z.ZodString;
                region_id: z.ZodOptional<z.ZodString>;
                city_id: z.ZodOptional<z.ZodString>;
                distinct_id: z.ZodOptional<z.ZodString>;
                local_address_line1: z.ZodOptional<z.ZodString>;
                local_address_line2: z.ZodOptional<z.ZodString>;
                local_address_line3: z.ZodOptional<z.ZodString>;
                local_address_line4: z.ZodOptional<z.ZodString>;
                local_address_line5: z.ZodOptional<z.ZodString>;
                local_address_line6: z.ZodOptional<z.ZodString>;
                local_address_line7: z.ZodOptional<z.ZodString>;
                local_address_line8: z.ZodOptional<z.ZodString>;
                local_address_line9: z.ZodOptional<z.ZodString>;
                postal_code: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }, {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }>, "many">>;
            email_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }, {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }>, "many">>;
            work_experience_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                company_organization: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                department: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                job: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                description: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }, {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }>, "many">>;
            education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                school: z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">;
                level_of_education: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                start_date: z.ZodOptional<z.ZodString>;
                end_date: z.ZodOptional<z.ZodString>;
                field_of_study: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    lang: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    lang: string;
                }, {
                    value: string;
                    lang: string;
                }>, "many">>;
                degree: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                school_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                field_of_study_name: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                country_region_id: z.ZodOptional<z.ZodString>;
                expected_end_date: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }, {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }>, "many">>;
            bank_account_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                bank_name: z.ZodOptional<z.ZodString>;
                bank_account_number: z.ZodString;
                account_holder: z.ZodString;
                bank: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                branch_name: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                country_region_id: z.ZodOptional<z.ZodString>;
                bank_account_usage: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>, "many">>;
                bank_account_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                currency_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
            national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                national_id_type_id: z.ZodString;
                national_id_number: z.ZodString;
                issue_date: z.ZodOptional<z.ZodString>;
                expiration_date: z.ZodOptional<z.ZodString>;
                country_region_id: z.ZodString;
                issued_by: z.ZodOptional<z.ZodString>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }, {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }>, "many">>;
            dependent_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>;
                gender: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                date_of_birth: z.ZodOptional<z.ZodString>;
                nationality_id: z.ZodOptional<z.ZodString>;
                national_id_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    national_id_type_id: z.ZodString;
                    national_id_number: z.ZodString;
                    issue_date: z.ZodOptional<z.ZodString>;
                    expiration_date: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    issued_by: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }, {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }>, "many">>;
                spouses_working_status: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                is_this_person_covered_by_health_insurance: z.ZodOptional<z.ZodBoolean>;
                is_this_person_allowed_for_tax_deduction: z.ZodOptional<z.ZodBoolean>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                dependent_name: z.ZodOptional<z.ZodString>;
                employer: z.ZodOptional<z.ZodString>;
                job: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>>;
                address: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    region_id: z.ZodOptional<z.ZodString>;
                    city_id: z.ZodOptional<z.ZodString>;
                    distinct_id: z.ZodOptional<z.ZodString>;
                    local_address_line1: z.ZodOptional<z.ZodString>;
                    local_address_line2: z.ZodOptional<z.ZodString>;
                    local_address_line3: z.ZodOptional<z.ZodString>;
                    local_address_line4: z.ZodOptional<z.ZodString>;
                    local_address_line5: z.ZodOptional<z.ZodString>;
                    local_address_line6: z.ZodOptional<z.ZodString>;
                    local_address_line7: z.ZodOptional<z.ZodString>;
                    local_address_line8: z.ZodOptional<z.ZodString>;
                    local_address_line9: z.ZodOptional<z.ZodString>;
                    postal_code: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }, {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                }>>;
                birth_certificate_of_child: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }, {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            emergency_contact_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodObject<{
                    local_primary: z.ZodOptional<z.ZodString>;
                    local_first_name: z.ZodOptional<z.ZodString>;
                    country_region_id: z.ZodString;
                    name_type: z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>;
                    local_first_name_2: z.ZodOptional<z.ZodString>;
                    local_primary_2: z.ZodOptional<z.ZodString>;
                    additional_name_type: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    first_name: z.ZodOptional<z.ZodString>;
                    full_name: z.ZodOptional<z.ZodString>;
                    hereditary: z.ZodOptional<z.ZodString>;
                    custom_name: z.ZodOptional<z.ZodString>;
                    custom_local_name: z.ZodOptional<z.ZodString>;
                    middle_name: z.ZodOptional<z.ZodString>;
                    name_primary: z.ZodOptional<z.ZodString>;
                    secondary: z.ZodOptional<z.ZodString>;
                    social: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    tertiary: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    local_middle_name: z.ZodOptional<z.ZodString>;
                    local_secondary: z.ZodOptional<z.ZodString>;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }, {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                }>>;
                relationship: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                phone_ist: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    international_area_code: z.ZodOptional<z.ZodObject<{
                        enum_name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        enum_name: string;
                    }, {
                        enum_name: string;
                    }>>;
                    phone_number: z.ZodString;
                    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        field_name: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        field_name: string;
                    }, {
                        value: string;
                        field_name: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }, {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }>, "many">>;
                custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field_name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_name: string;
                }, {
                    value: string;
                    field_name: string;
                }>, "many">>;
                legal_name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }, {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }>, "many">>;
            date_entered_workforce: z.ZodOptional<z.ZodString>;
            profile_image_id: z.ZodOptional<z.ZodString>;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
            resident_tax_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            age: z.ZodOptional<z.ZodNumber>;
            personal_profile: z.ZodOptional<z.ZodArray<z.ZodObject<{
                personal_profile_type: z.ZodOptional<z.ZodObject<{
                    enum_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    enum_name: string;
                }, {
                    enum_name: string;
                }>>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }, {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name_list: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[];
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }, {
            name_list: {
                country_region_id: string;
                name_type: {
                    enum_name: string;
                };
                title?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                local_primary?: string | undefined;
                local_first_name?: string | undefined;
                local_first_name_2?: string | undefined;
                local_primary_2?: string | undefined;
                additional_name_type?: {
                    enum_name: string;
                } | undefined;
                first_name?: string | undefined;
                full_name?: string | undefined;
                hereditary?: string | undefined;
                custom_name?: string | undefined;
                custom_local_name?: string | undefined;
                middle_name?: string | undefined;
                name_primary?: string | undefined;
                secondary?: string | undefined;
                social?: {
                    enum_name: string;
                } | undefined;
                tertiary?: string | undefined;
                local_middle_name?: string | undefined;
                local_secondary?: string | undefined;
            }[];
            gender?: {
                enum_name: string;
            } | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            date_of_birth?: string | undefined;
            nationality_id?: string | undefined;
            race?: {
                enum_name: string;
            } | undefined;
            marital_status?: {
                enum_name: string;
            } | undefined;
            phone_list?: {
                phone_number: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                is_primary?: boolean | undefined;
                is_public?: boolean | undefined;
                international_area_code?: {
                    enum_name: string;
                } | undefined;
                device_type?: {
                    enum_name: string;
                } | undefined;
                phone_usage?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            address_list?: {
                country_region_id: string;
                region_id?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                city_id?: string | undefined;
                distinct_id?: string | undefined;
                local_address_line1?: string | undefined;
                local_address_line2?: string | undefined;
                local_address_line3?: string | undefined;
                local_address_line4?: string | undefined;
                local_address_line5?: string | undefined;
                local_address_line6?: string | undefined;
                local_address_line7?: string | undefined;
                local_address_line8?: string | undefined;
                local_address_line9?: string | undefined;
                postal_code?: string | undefined;
            }[] | undefined;
            email_list?: {
                email: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
            }[] | undefined;
            work_experience_list?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                description?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                department?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                company_organization?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                job?: {
                    value: string;
                    lang: string;
                }[] | undefined;
            }[] | undefined;
            education_list?: {
                school: {
                    value: string;
                    lang: string;
                }[];
                start_date?: string | undefined;
                end_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                level_of_education?: {
                    enum_name: string;
                } | undefined;
                field_of_study?: {
                    value: string;
                    lang: string;
                }[] | undefined;
                degree?: {
                    enum_name: string;
                } | undefined;
                school_name?: {
                    enum_name: string;
                } | undefined;
                field_of_study_name?: {
                    enum_name: string;
                } | undefined;
                expected_end_date?: string | undefined;
            }[] | undefined;
            bank_account_list?: {
                bank_account_number: string;
                account_holder: string;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                country_region_id?: string | undefined;
                currency_id?: string | undefined;
                bank_name?: string | undefined;
                bank?: {
                    enum_name: string;
                } | undefined;
                branch_name?: string | undefined;
                bank_account_usage?: {
                    enum_name: string;
                }[] | undefined;
                bank_account_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
            national_id_list?: {
                country_region_id: string;
                national_id_type_id: string;
                national_id_number: string;
                expiration_date?: string | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                issue_date?: string | undefined;
                issued_by?: string | undefined;
            }[] | undefined;
            dependent_list?: {
                relationship: {
                    enum_name: string;
                };
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                address?: {
                    country_region_id: string;
                    id?: string | undefined;
                    region_id?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    city_id?: string | undefined;
                    distinct_id?: string | undefined;
                    local_address_line1?: string | undefined;
                    local_address_line2?: string | undefined;
                    local_address_line3?: string | undefined;
                    local_address_line4?: string | undefined;
                    local_address_line5?: string | undefined;
                    local_address_line6?: string | undefined;
                    local_address_line7?: string | undefined;
                    local_address_line8?: string | undefined;
                    local_address_line9?: string | undefined;
                    postal_code?: string | undefined;
                } | undefined;
                gender?: {
                    enum_name: string;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                phone?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                } | undefined;
                date_of_birth?: string | undefined;
                nationality_id?: string | undefined;
                job?: string | undefined;
                national_id_list?: {
                    country_region_id: string;
                    national_id_type_id: string;
                    national_id_number: string;
                    expiration_date?: string | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    issue_date?: string | undefined;
                    issued_by?: string | undefined;
                }[] | undefined;
                spouses_working_status?: {
                    enum_name: string;
                } | undefined;
                is_this_person_covered_by_health_insurance?: boolean | undefined;
                is_this_person_allowed_for_tax_deduction?: boolean | undefined;
                dependent_name?: string | undefined;
                employer?: string | undefined;
                birth_certificate_of_child?: {
                    id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            emergency_contact_list?: {
                name?: {
                    country_region_id: string;
                    name_type: {
                        enum_name: string;
                    };
                    title?: {
                        enum_name: string;
                    } | undefined;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    local_primary?: string | undefined;
                    local_first_name?: string | undefined;
                    local_first_name_2?: string | undefined;
                    local_primary_2?: string | undefined;
                    additional_name_type?: {
                        enum_name: string;
                    } | undefined;
                    first_name?: string | undefined;
                    full_name?: string | undefined;
                    hereditary?: string | undefined;
                    custom_name?: string | undefined;
                    custom_local_name?: string | undefined;
                    middle_name?: string | undefined;
                    name_primary?: string | undefined;
                    secondary?: string | undefined;
                    social?: {
                        enum_name: string;
                    } | undefined;
                    tertiary?: string | undefined;
                    local_middle_name?: string | undefined;
                    local_secondary?: string | undefined;
                } | undefined;
                custom_fields?: {
                    value: string;
                    field_name: string;
                }[] | undefined;
                relationship?: {
                    enum_name: string;
                } | undefined;
                phone_ist?: {
                    phone_number: string;
                    custom_fields?: {
                        value: string;
                        field_name: string;
                    }[] | undefined;
                    international_area_code?: {
                        enum_name: string;
                    } | undefined;
                }[] | undefined;
                legal_name?: string | undefined;
            }[] | undefined;
            date_entered_workforce?: string | undefined;
            profile_image_id?: string | undefined;
            resident_tax_id_list?: string[] | undefined;
            age?: number | undefined;
            personal_profile?: {
                files?: {
                    id?: string | undefined;
                }[] | undefined;
                personal_profile_type?: {
                    enum_name: string;
                } | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            person_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            person_id: string;
        }, {
            person_id: string;
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
            pre_hire_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pre_hire_id: string;
        }, {
            pre_hire_id: string;
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
            process_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            process_id: string;
        }, {
            process_id: string;
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
            item_list: z.ZodArray<z.ZodObject<{
                role_key: z.ZodString;
                department_id: z.ZodString;
                work_location_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }, {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }>, "many">;
            updated_at_gte: z.ZodOptional<z.ZodString>;
            updated_at_lte: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            item_list: {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }[];
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }, {
            item_list: {
                department_id: string;
                role_key: string;
                work_location_id?: string | undefined;
            }[];
            updated_at_gte?: string | undefined;
            updated_at_lte?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_corehr_department_id"]>>;
        }, "strip", z.ZodTypeAny, {
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
        }, {
            department_id_type?: "department_id" | "open_department_id" | "people_corehr_department_id" | undefined;
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
            subdivision_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subdivision_id: string;
        }, {
            subdivision_id: string;
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
            subregion_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subregion_id: string;
        }, {
            subregion_id: string;
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
            active: z.ZodOptional<z.ZodBoolean>;
            transfer_reason_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            transfer_reason_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            transfer_reason_unique_identifier?: string[] | undefined;
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
            active: z.ZodOptional<z.ZodBoolean>;
            transfer_type_unique_identifier: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            active?: boolean | undefined;
            transfer_type_unique_identifier?: string[] | undefined;
        }, {
            active?: boolean | undefined;
            transfer_type_unique_identifier?: string[] | undefined;
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
            code: z.ZodOptional<z.ZodString>;
            name: z.ZodArray<z.ZodObject<{
                lang: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                lang: string;
            }, {
                value: string;
                lang: string;
            }>, "many">;
            country_region_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            default_for_job: z.ZodBoolean;
            active: z.ZodBoolean;
            custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                field_name: string;
            }, {
                value: string;
                field_name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_for_job: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
        }, {
            name: {
                value: string;
                lang: string;
            }[];
            active: boolean;
            default_for_job: boolean;
            code?: string | undefined;
            custom_fields?: {
                value: string;
                field_name: string;
            }[] | undefined;
            country_region_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            client_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_token?: string | undefined;
        }, {
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
        path: z.ZodObject<{
            working_hours_type_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            working_hours_type_id: string;
        }, {
            working_hours_type_id: string;
        }>;
    };
})[];
