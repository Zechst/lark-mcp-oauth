import { z } from 'zod';
export type performanceV2ToolName = 'performance.v2.activity.query' | 'performance.v2.additionalInformation.import' | 'performance.v2.additionalInformation.query' | 'performance.v2.additionalInformationsBatch.delete' | 'performance.v2.indicator.query' | 'performance.v2.metricDetail.import' | 'performance.v2.metricDetail.query' | 'performance.v2.metricField.query' | 'performance.v2.metricLib.query' | 'performance.v2.metricTag.list' | 'performance.v2.metricTemplate.query' | 'performance.v2.question.query' | 'performance.v2.reviewData.query' | 'performance.v2.reviewTemplate.query' | 'performance.v2.reviewee.query' | 'performance.v2.userGroupUserRel.write';
export declare const performanceV2ActivityQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            semester_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            activity_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }, {
            semester_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
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
export declare const performanceV2AdditionalInformationImport: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            additional_informations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                item_id: z.ZodOptional<z.ZodString>;
                external_id: z.ZodOptional<z.ZodString>;
                reviewee_user_id: z.ZodString;
                item: z.ZodString;
                time: z.ZodString;
                detailed_description: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }, {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }>, "many">>;
            import_record_name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            additional_informations?: {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }[] | undefined;
            import_record_name?: string | undefined;
        }, {
            semester_id: string;
            additional_informations?: {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }[] | undefined;
            import_record_name?: string | undefined;
        }>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const performanceV2AdditionalInformationQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            item_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            external_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            reviewee_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            item_ids?: string[] | undefined;
            external_ids?: string[] | undefined;
            reviewee_user_ids?: string[] | undefined;
        }, {
            semester_id: string;
            item_ids?: string[] | undefined;
            external_ids?: string[] | undefined;
            reviewee_user_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2AdditionalInformationsBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            additional_informations: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            additional_informations: string[];
        }, {
            semester_id: string;
            additional_informations: string[];
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
export declare const performanceV2IndicatorQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            indicator_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            indicator_ids?: string[] | undefined;
        }, {
            indicator_ids?: string[] | undefined;
        }>>;
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
export declare const performanceV2MetricDetailImport: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            import_record_name: z.ZodOptional<z.ZodString>;
            imported_metrics: z.ZodArray<z.ZodObject<{
                reviewee_user_id: z.ZodString;
                metric_id: z.ZodString;
                fields: z.ZodArray<z.ZodObject<{
                    field_id: z.ZodString;
                    field_value: z.ZodOptional<z.ZodString>;
                    field_value_person: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }, {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }, {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            imported_metrics: {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }[];
            import_record_name?: string | undefined;
        }, {
            semester_id: string;
            imported_metrics: {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }[];
            import_record_name?: string | undefined;
        }>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const performanceV2MetricDetailQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            reviewee_user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            reviewee_user_ids: string[];
        }, {
            semester_id: string;
            reviewee_user_ids: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2MetricFieldQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            field_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_ids?: string[] | undefined;
        }, {
            field_ids?: string[] | undefined;
        }>>;
    };
};
export declare const performanceV2MetricLibQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            is_active: z.ZodOptional<z.ZodBoolean>;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            type_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            range_of_availability: z.ZodOptional<z.ZodEnum<["admins_and_reviewees", "only_admins"]>>;
            scoring_setting_type: z.ZodOptional<z.ZodEnum<["score_manually", "score_by_formula"]>>;
        }, "strip", z.ZodTypeAny, {
            tag_ids?: string[] | undefined;
            is_active?: boolean | undefined;
            type_ids?: string[] | undefined;
            range_of_availability?: "admins_and_reviewees" | "only_admins" | undefined;
            scoring_setting_type?: "score_manually" | "score_by_formula" | undefined;
        }, {
            tag_ids?: string[] | undefined;
            is_active?: boolean | undefined;
            type_ids?: string[] | undefined;
            range_of_availability?: "admins_and_reviewees" | "only_admins" | undefined;
            scoring_setting_type?: "score_manually" | "score_by_formula" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2MetricTagList: {
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
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            tag_ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            tag_ids?: string[] | undefined;
        }>>;
    };
};
export declare const performanceV2MetricTemplateQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            metrics_template_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            status: z.ZodOptional<z.ZodEnum<["to_be_configured", "to_be_activated", "enabled", "disabled"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "to_be_configured" | "to_be_activated" | "enabled" | "disabled" | undefined;
            metrics_template_ids?: string[] | undefined;
        }, {
            status?: "to_be_configured" | "to_be_activated" | "enabled" | "disabled" | undefined;
            metrics_template_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2QuestionQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            tag_based_question_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag_based_question_ids?: string[] | undefined;
        }, {
            tag_based_question_ids?: string[] | undefined;
        }>>;
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
export declare const performanceV2ReviewDataQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_ids: z.ZodArray<z.ZodString, "many">;
            reviewee_user_ids: z.ZodArray<z.ZodString, "many">;
            stage_types: z.ZodOptional<z.ZodArray<z.ZodEnum<["summarize_key_outputs", "review", "communication_and_open_result", "view_result", "reconsideration", "leader_review"]>, "many">>;
            review_stage_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<["reviewee", "invited_reviewer", "solid_line_leader", "dotted_line_leader", "secondary_solid_line_leader", "direct_project_leader", "custom_review_role", "metric_reviewer"]>, "many">>;
            stage_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            need_leader_review_data_source: z.ZodOptional<z.ZodBoolean>;
            updated_later_than: z.ZodOptional<z.ZodString>;
            stage_progresses: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_ids: string[];
            reviewee_user_ids: string[];
            stage_types?: ("leader_review" | "communication_and_open_result" | "view_result" | "summarize_key_outputs" | "review" | "reconsideration")[] | undefined;
            updated_later_than?: string | undefined;
            review_stage_roles?: ("reviewee" | "invited_reviewer" | "solid_line_leader" | "dotted_line_leader" | "secondary_solid_line_leader" | "direct_project_leader" | "custom_review_role" | "metric_reviewer")[] | undefined;
            stage_ids?: string[] | undefined;
            need_leader_review_data_source?: boolean | undefined;
            stage_progresses?: number[] | undefined;
        }, {
            semester_ids: string[];
            reviewee_user_ids: string[];
            stage_types?: ("leader_review" | "communication_and_open_result" | "view_result" | "summarize_key_outputs" | "review" | "reconsideration")[] | undefined;
            updated_later_than?: string | undefined;
            review_stage_roles?: ("reviewee" | "invited_reviewer" | "solid_line_leader" | "dotted_line_leader" | "secondary_solid_line_leader" | "direct_project_leader" | "custom_review_role" | "metric_reviewer")[] | undefined;
            stage_ids?: string[] | undefined;
            need_leader_review_data_source?: boolean | undefined;
            stage_progresses?: number[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2ReviewTemplateQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            review_template_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            review_template_ids?: string[] | undefined;
        }, {
            review_template_ids?: string[] | undefined;
        }>>;
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
export declare const performanceV2RevieweeQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            semester_id: z.ZodString;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            activity_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            user_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }, {
            semester_id: string;
            user_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
    };
};
export declare const performanceV2UserGroupUserRelWrite: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            group_id: z.ZodOptional<z.ZodString>;
            scope_visible_setting: z.ZodOptional<z.ZodNumber>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            group_id?: string | undefined;
            scope_visible_setting?: number | undefined;
        }, {
            user_ids?: string[] | undefined;
            group_id?: string | undefined;
            scope_visible_setting?: number | undefined;
        }>>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const performanceV2Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            semester_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            activity_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }, {
            semester_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
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
            semester_id: z.ZodString;
            additional_informations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                item_id: z.ZodOptional<z.ZodString>;
                external_id: z.ZodOptional<z.ZodString>;
                reviewee_user_id: z.ZodString;
                item: z.ZodString;
                time: z.ZodString;
                detailed_description: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }, {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }>, "many">>;
            import_record_name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            additional_informations?: {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }[] | undefined;
            import_record_name?: string | undefined;
        }, {
            semester_id: string;
            additional_informations?: {
                time: string;
                reviewee_user_id: string;
                item: string;
                detailed_description: string;
                external_id?: string | undefined;
                item_id?: string | undefined;
            }[] | undefined;
            import_record_name?: string | undefined;
        }>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            semester_id: z.ZodString;
            item_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            external_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            reviewee_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            item_ids?: string[] | undefined;
            external_ids?: string[] | undefined;
            reviewee_user_ids?: string[] | undefined;
        }, {
            semester_id: string;
            item_ids?: string[] | undefined;
            external_ids?: string[] | undefined;
            reviewee_user_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            semester_id: z.ZodString;
            additional_informations: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            additional_informations: string[];
        }, {
            semester_id: string;
            additional_informations: string[];
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
            indicator_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            indicator_ids?: string[] | undefined;
        }, {
            indicator_ids?: string[] | undefined;
        }>>;
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
            semester_id: z.ZodString;
            import_record_name: z.ZodOptional<z.ZodString>;
            imported_metrics: z.ZodArray<z.ZodObject<{
                reviewee_user_id: z.ZodString;
                metric_id: z.ZodString;
                fields: z.ZodArray<z.ZodObject<{
                    field_id: z.ZodString;
                    field_value: z.ZodOptional<z.ZodString>;
                    field_value_person: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }, {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }, {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            imported_metrics: {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }[];
            import_record_name?: string | undefined;
        }, {
            semester_id: string;
            imported_metrics: {
                fields: {
                    field_id: string;
                    field_value?: string | undefined;
                    field_value_person?: string | undefined;
                }[];
                reviewee_user_id: string;
                metric_id: string;
            }[];
            import_record_name?: string | undefined;
        }>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            semester_id: z.ZodString;
            reviewee_user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            reviewee_user_ids: string[];
        }, {
            semester_id: string;
            reviewee_user_ids: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            field_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_ids?: string[] | undefined;
        }, {
            field_ids?: string[] | undefined;
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
            is_active: z.ZodOptional<z.ZodBoolean>;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            type_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            range_of_availability: z.ZodOptional<z.ZodEnum<["admins_and_reviewees", "only_admins"]>>;
            scoring_setting_type: z.ZodOptional<z.ZodEnum<["score_manually", "score_by_formula"]>>;
        }, "strip", z.ZodTypeAny, {
            tag_ids?: string[] | undefined;
            is_active?: boolean | undefined;
            type_ids?: string[] | undefined;
            range_of_availability?: "admins_and_reviewees" | "only_admins" | undefined;
            scoring_setting_type?: "score_manually" | "score_by_formula" | undefined;
        }, {
            tag_ids?: string[] | undefined;
            is_active?: boolean | undefined;
            type_ids?: string[] | undefined;
            range_of_availability?: "admins_and_reviewees" | "only_admins" | undefined;
            scoring_setting_type?: "score_manually" | "score_by_formula" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            tag_ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            tag_ids?: string[] | undefined;
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
            metrics_template_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            status: z.ZodOptional<z.ZodEnum<["to_be_configured", "to_be_activated", "enabled", "disabled"]>>;
        }, "strip", z.ZodTypeAny, {
            status?: "to_be_configured" | "to_be_activated" | "enabled" | "disabled" | undefined;
            metrics_template_ids?: string[] | undefined;
        }, {
            status?: "to_be_configured" | "to_be_activated" | "enabled" | "disabled" | undefined;
            metrics_template_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            tag_based_question_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag_based_question_ids?: string[] | undefined;
        }, {
            tag_based_question_ids?: string[] | undefined;
        }>>;
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
            semester_ids: z.ZodArray<z.ZodString, "many">;
            reviewee_user_ids: z.ZodArray<z.ZodString, "many">;
            stage_types: z.ZodOptional<z.ZodArray<z.ZodEnum<["summarize_key_outputs", "review", "communication_and_open_result", "view_result", "reconsideration", "leader_review"]>, "many">>;
            review_stage_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<["reviewee", "invited_reviewer", "solid_line_leader", "dotted_line_leader", "secondary_solid_line_leader", "direct_project_leader", "custom_review_role", "metric_reviewer"]>, "many">>;
            stage_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            need_leader_review_data_source: z.ZodOptional<z.ZodBoolean>;
            updated_later_than: z.ZodOptional<z.ZodString>;
            stage_progresses: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_ids: string[];
            reviewee_user_ids: string[];
            stage_types?: ("leader_review" | "communication_and_open_result" | "view_result" | "summarize_key_outputs" | "review" | "reconsideration")[] | undefined;
            updated_later_than?: string | undefined;
            review_stage_roles?: ("reviewee" | "invited_reviewer" | "solid_line_leader" | "dotted_line_leader" | "secondary_solid_line_leader" | "direct_project_leader" | "custom_review_role" | "metric_reviewer")[] | undefined;
            stage_ids?: string[] | undefined;
            need_leader_review_data_source?: boolean | undefined;
            stage_progresses?: number[] | undefined;
        }, {
            semester_ids: string[];
            reviewee_user_ids: string[];
            stage_types?: ("leader_review" | "communication_and_open_result" | "view_result" | "summarize_key_outputs" | "review" | "reconsideration")[] | undefined;
            updated_later_than?: string | undefined;
            review_stage_roles?: ("reviewee" | "invited_reviewer" | "solid_line_leader" | "dotted_line_leader" | "secondary_solid_line_leader" | "direct_project_leader" | "custom_review_role" | "metric_reviewer")[] | undefined;
            stage_ids?: string[] | undefined;
            need_leader_review_data_source?: boolean | undefined;
            stage_progresses?: number[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            review_template_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            review_template_ids?: string[] | undefined;
        }, {
            review_template_ids?: string[] | undefined;
        }>>;
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
            semester_id: z.ZodString;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            activity_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            user_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }, {
            semester_id: string;
            user_ids?: string[] | undefined;
            activity_ids?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            group_id: z.ZodOptional<z.ZodString>;
            scope_visible_setting: z.ZodOptional<z.ZodNumber>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            group_id?: string | undefined;
            scope_visible_setting?: number | undefined;
        }, {
            user_ids?: string[] | undefined;
            group_id?: string | undefined;
            scope_visible_setting?: number | undefined;
        }>>;
        params: z.ZodObject<{
            client_token: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            client_token: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
})[];
