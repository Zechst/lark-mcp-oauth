import { z } from 'zod';
export type hireV1ToolName = 'hire.v1.advertisement.publish' | 'hire.v1.agency.batchQuery' | 'hire.v1.agency.get' | 'hire.v1.agency.getAgencyAccount' | 'hire.v1.agency.operateAgencyAccount' | 'hire.v1.agency.protect' | 'hire.v1.agency.protectSearch' | 'hire.v1.agency.query' | 'hire.v1.application.cancelOnboard' | 'hire.v1.application.create' | 'hire.v1.application.get' | 'hire.v1.application.getDetail' | 'hire.v1.applicationInterview.list' | 'hire.v1.application.list' | 'hire.v1.application.offer' | 'hire.v1.application.recover' | 'hire.v1.application.terminate' | 'hire.v1.application.transferOnboard' | 'hire.v1.application.transferStage' | 'hire.v1.attachment.get' | 'hire.v1.attachment.preview' | 'hire.v1.backgroundCheckOrder.list' | 'hire.v1.diversityInclusion.search' | 'hire.v1.ecoAccountCustomField.batchDelete' | 'hire.v1.ecoAccountCustomField.batchUpdate' | 'hire.v1.ecoAccountCustomField.create' | 'hire.v1.ecoBackgroundCheckCustomField.batchDelete' | 'hire.v1.ecoBackgroundCheckCustomField.batchUpdate' | 'hire.v1.ecoBackgroundCheckCustomField.create' | 'hire.v1.ecoBackgroundCheckPackage.batchDelete' | 'hire.v1.ecoBackgroundCheckPackage.batchUpdate' | 'hire.v1.ecoBackgroundCheckPackage.create' | 'hire.v1.ecoBackgroundCheck.cancel' | 'hire.v1.ecoBackgroundCheck.updateProgress' | 'hire.v1.ecoBackgroundCheck.updateResult' | 'hire.v1.ecoExamPaper.batchDelete' | 'hire.v1.ecoExamPaper.batchUpdate' | 'hire.v1.ecoExamPaper.create' | 'hire.v1.ecoExam.loginInfo' | 'hire.v1.ecoExam.updateResult' | 'hire.v1.ehrImportTask.patch' | 'hire.v1.employee.get' | 'hire.v1.employee.getByApplication' | 'hire.v1.employee.patch' | 'hire.v1.evaluationTask.list' | 'hire.v1.evaluation.list' | 'hire.v1.examMarkingTask.list' | 'hire.v1.exam.create' | 'hire.v1.externalApplication.create' | 'hire.v1.externalApplication.delete' | 'hire.v1.externalApplication.list' | 'hire.v1.externalApplication.update' | 'hire.v1.externalBackgroundCheck.batchQuery' | 'hire.v1.externalBackgroundCheck.create' | 'hire.v1.externalBackgroundCheck.delete' | 'hire.v1.externalBackgroundCheck.update' | 'hire.v1.externalInterviewAssessment.create' | 'hire.v1.externalInterviewAssessment.patch' | 'hire.v1.externalInterview.batchQuery' | 'hire.v1.externalInterview.create' | 'hire.v1.externalInterview.delete' | 'hire.v1.externalInterview.update' | 'hire.v1.externalOffer.batchQuery' | 'hire.v1.externalOffer.create' | 'hire.v1.externalOffer.delete' | 'hire.v1.externalOffer.update' | 'hire.v1.externalReferralReward.create' | 'hire.v1.externalReferralReward.delete' | 'hire.v1.interviewFeedbackForm.list' | 'hire.v1.interviewRecordAttachment.get' | 'hire.v1.interviewRecord.get' | 'hire.v1.interviewRecord.list' | 'hire.v1.interviewRegistrationSchema.list' | 'hire.v1.interviewRoundType.list' | 'hire.v1.interviewTask.list' | 'hire.v1.interview.getByTalent' | 'hire.v1.interview.list' | 'hire.v1.interviewer.list' | 'hire.v1.interviewer.patch' | 'hire.v1.jobFunction.list' | 'hire.v1.jobProcess.list' | 'hire.v1.jobPublishRecord.search' | 'hire.v1.jobRequirementSchema.list' | 'hire.v1.jobRequirement.create' | 'hire.v1.jobRequirement.delete' | 'hire.v1.jobRequirement.list' | 'hire.v1.jobRequirement.listById' | 'hire.v1.jobRequirement.update' | 'hire.v1.jobSchema.list' | 'hire.v1.jobType.list' | 'hire.v1.job.close' | 'hire.v1.job.combinedCreate' | 'hire.v1.job.combinedUpdate' | 'hire.v1.job.config' | 'hire.v1.job.get' | 'hire.v1.job.getDetail' | 'hire.v1.job.list' | 'hire.v1.jobManager.batchUpdate' | 'hire.v1.jobManager.get' | 'hire.v1.job.open' | 'hire.v1.job.recruiter' | 'hire.v1.job.updateConfig' | 'hire.v1.location.list' | 'hire.v1.location.query' | 'hire.v1.minutes.get' | 'hire.v1.note.create' | 'hire.v1.note.delete' | 'hire.v1.note.get' | 'hire.v1.note.list' | 'hire.v1.note.patch' | 'hire.v1.offerApplicationForm.get' | 'hire.v1.offerApplicationForm.list' | 'hire.v1.offerCustomField.update' | 'hire.v1.offerSchema.get' | 'hire.v1.offer.create' | 'hire.v1.offer.get' | 'hire.v1.offer.internOfferStatus' | 'hire.v1.offer.list' | 'hire.v1.offer.offerStatus' | 'hire.v1.offer.update' | 'hire.v1.questionnaire.list' | 'hire.v1.referralAccount.create' | 'hire.v1.referralAccount.deactivate' | 'hire.v1.referralAccount.enable' | 'hire.v1.referralAccount.getAccountAssets' | 'hire.v1.referralAccount.reconciliation' | 'hire.v1.referralAccount.withdraw' | 'hire.v1.referralWebsiteJobPost.get' | 'hire.v1.referralWebsiteJobPost.list' | 'hire.v1.referral.getByApplication' | 'hire.v1.referral.search' | 'hire.v1.registrationSchema.list' | 'hire.v1.resumeSource.list' | 'hire.v1.role.get' | 'hire.v1.role.list' | 'hire.v1.subject.list' | 'hire.v1.talentBlocklist.changeTalentBlock' | 'hire.v1.talentFolder.list' | 'hire.v1.talentObject.query' | 'hire.v1.talentOperationLog.search' | 'hire.v1.talentPool.batchChangeTalentPool' | 'hire.v1.talentPool.moveTalent' | 'hire.v1.talentPool.search' | 'hire.v1.talentTag.list' | 'hire.v1.talent.addToFolder' | 'hire.v1.talent.batchGetId' | 'hire.v1.talent.combinedCreate' | 'hire.v1.talent.combinedUpdate' | 'hire.v1.talentExternalInfo.create' | 'hire.v1.talentExternalInfo.update' | 'hire.v1.talent.get' | 'hire.v1.talent.list' | 'hire.v1.talent.onboardStatus' | 'hire.v1.talent.removeToFolder' | 'hire.v1.talent.tag' | 'hire.v1.terminationReason.list' | 'hire.v1.test.search' | 'hire.v1.todo.list' | 'hire.v1.tripartiteAgreement.create' | 'hire.v1.tripartiteAgreement.delete' | 'hire.v1.tripartiteAgreement.list' | 'hire.v1.tripartiteAgreement.update' | 'hire.v1.userRole.list' | 'hire.v1.websiteChannel.create' | 'hire.v1.websiteChannel.delete' | 'hire.v1.websiteChannel.list' | 'hire.v1.websiteChannel.update' | 'hire.v1.websiteDeliveryTask.get' | 'hire.v1.websiteDelivery.createByAttachment' | 'hire.v1.websiteDelivery.createByResume' | 'hire.v1.websiteJobPost.get' | 'hire.v1.websiteJobPost.list' | 'hire.v1.websiteJobPost.search' | 'hire.v1.website.list' | 'hire.v1.websiteSiteUser.create';
export declare const hireV1AdvertisementPublish: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            job_channel_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            job_channel_id?: string | undefined;
        }, {
            job_channel_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            advertisement_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            advertisement_id: string;
        }, {
            advertisement_id: string;
        }>;
    };
};
export declare const hireV1AgencyBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            agency_supplier_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            keyword: z.ZodOptional<z.ZodString>;
            filter_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                value_type: z.ZodNumber;
                value_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                range_filter: z.ZodOptional<z.ZodObject<{
                    from: z.ZodOptional<z.ZodString>;
                    to: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    from?: string | undefined;
                    to?: string | undefined;
                }, {
                    from?: string | undefined;
                    to?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                value_type: number;
                value_list?: string[] | undefined;
                range_filter?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }, {
                key: string;
                value_type: number;
                value_list?: string[] | undefined;
                range_filter?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            keyword?: string | undefined;
            agency_supplier_id_list?: string[] | undefined;
            filter_list?: {
                key: string;
                value_type: number;
                value_list?: string[] | undefined;
                range_filter?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }[] | undefined;
        }, {
            keyword?: string | undefined;
            agency_supplier_id_list?: string[] | undefined;
            filter_list?: {
                key: string;
                value_type: number;
                value_list?: string[] | undefined;
                range_filter?: {
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
export declare const hireV1AgencyGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            agency_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            agency_id?: string | undefined;
        }, {
            agency_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1AgencyGetAgencyAccount: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            supplier_id: z.ZodString;
            status: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            supplier_id: string;
            status?: number | undefined;
            role?: number | undefined;
        }, {
            supplier_id: string;
            status?: number | undefined;
            role?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "union_id" | "open_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const hireV1AgencyOperateAgencyAccount: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            option: z.ZodNumber;
            id: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            option: number;
            reason?: string | undefined;
        }, {
            id: string;
            option: number;
            reason?: string | undefined;
        }>;
    };
};
export declare const hireV1AgencyProtect: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            supplier_id: z.ZodString;
            consultant_id: z.ZodString;
            protect_create_time: z.ZodNumber;
            protect_expire_time: z.ZodNumber;
            comment: z.ZodOptional<z.ZodString>;
            current_salary: z.ZodOptional<z.ZodString>;
            expected_salary: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            supplier_id: string;
            consultant_id: string;
            protect_create_time: number;
            protect_expire_time: number;
            comment?: string | undefined;
            current_salary?: string | undefined;
            expected_salary?: string | undefined;
        }, {
            talent_id: string;
            supplier_id: string;
            consultant_id: string;
            protect_create_time: number;
            protect_expire_time: number;
            comment?: string | undefined;
            current_salary?: string | undefined;
            expected_salary?: string | undefined;
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
export declare const hireV1AgencyProtectSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
        }, {
            talent_id: string;
        }>;
    };
};
export declare const hireV1AgencyQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            name: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            name: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const hireV1ApplicationCancelOnboard: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            termination_type: z.ZodNumber;
            termination_reason_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            termination_reason_notes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            termination_type: number;
            termination_reason_id_list?: string[] | undefined;
            termination_reason_notes?: string | undefined;
        }, {
            termination_type: number;
            termination_reason_id_list?: string[] | undefined;
            termination_reason_notes?: string | undefined;
        }>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            job_id: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            resume_source_id: z.ZodOptional<z.ZodString>;
            application_preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            delivery_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
            talent_id: string;
            user_id?: string | undefined;
            resume_source_id?: string | undefined;
            application_preferred_city_code_list?: string[] | undefined;
            delivery_type?: number | undefined;
        }, {
            job_id: string;
            talent_id: string;
            user_id?: string | undefined;
            resume_source_id?: string | undefined;
            application_preferred_city_code_list?: string[] | undefined;
            delivery_type?: number | undefined;
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
export declare const hireV1ApplicationGet: {
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
            options: z.ZodOptional<z.ZodArray<z.ZodLiteral<"get_latest_application_on_chain">, "many">>;
        }, "strip", z.ZodTypeAny, {
            options?: "get_latest_application_on_chain"[] | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            options?: "get_latest_application_on_chain"[] | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationGetDetail: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
            options: z.ZodOptional<z.ZodArray<z.ZodEnum<["with_job", "with_talent", "with_interview", "with_offer", "with_evaluation", "with_employee", "with_agency", "with_referral", "with_portal"]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            options?: ("with_job" | "with_talent" | "with_interview" | "with_offer" | "with_evaluation" | "with_employee" | "with_agency" | "with_referral" | "with_portal")[] | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            options?: ("with_job" | "with_talent" | "with_interview" | "with_offer" | "with_evaluation" | "with_employee" | "with_agency" | "with_referral" | "with_portal")[] | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            application_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            application_id?: string | undefined;
        }, {
            application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ApplicationInterviewList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id", "people_admin_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            process_id: z.ZodOptional<z.ZodString>;
            stage_id: z.ZodOptional<z.ZodString>;
            talent_id: z.ZodOptional<z.ZodString>;
            active_status: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            lock_status: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            process_id?: string | undefined;
            job_id?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            talent_id?: string | undefined;
            stage_id?: string | undefined;
            active_status?: string | undefined;
            lock_status?: number[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            process_id?: string | undefined;
            job_id?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            talent_id?: string | undefined;
            stage_id?: string | undefined;
            active_status?: string | undefined;
            lock_status?: number[] | undefined;
        }>>;
    };
};
export declare const hireV1ApplicationOffer: {
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
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationRecover: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationTerminate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            termination_type: z.ZodNumber;
            termination_reason_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            termination_reason_note: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            termination_type: number;
            termination_reason_list?: string[] | undefined;
            termination_reason_note?: string | undefined;
        }, {
            termination_type: number;
            termination_reason_list?: string[] | undefined;
            termination_reason_note?: string | undefined;
        }>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationTransferOnboard: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            actual_onboard_time: z.ZodOptional<z.ZodNumber>;
            expected_conversion_time: z.ZodOptional<z.ZodNumber>;
            job_requirement_id: z.ZodOptional<z.ZodString>;
            operator_id: z.ZodOptional<z.ZodString>;
            onboard_city_code: z.ZodOptional<z.ZodString>;
            department: z.ZodOptional<z.ZodString>;
            leader: z.ZodOptional<z.ZodString>;
            sequence: z.ZodOptional<z.ZodString>;
            level: z.ZodOptional<z.ZodString>;
            employee_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            operator_id?: string | undefined;
            level?: string | undefined;
            employee_type?: string | undefined;
            sequence?: string | undefined;
            department?: string | undefined;
            actual_onboard_time?: number | undefined;
            expected_conversion_time?: number | undefined;
            job_requirement_id?: string | undefined;
            onboard_city_code?: string | undefined;
            leader?: string | undefined;
        }, {
            operator_id?: string | undefined;
            level?: string | undefined;
            employee_type?: string | undefined;
            sequence?: string | undefined;
            department?: string | undefined;
            actual_onboard_time?: number | undefined;
            expected_conversion_time?: number | undefined;
            job_requirement_id?: string | undefined;
            onboard_city_code?: string | undefined;
            leader?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_admin_department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1ApplicationTransferStage: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            stage_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            stage_id: string;
        }, {
            stage_id: string;
        }>;
        path: z.ZodObject<{
            application_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
        }, {
            application_id: string;
        }>;
    };
};
export declare const hireV1AttachmentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type?: number | undefined;
        }, {
            type?: number | undefined;
        }>>;
        path: z.ZodObject<{
            attachment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            attachment_id: string;
        }, {
            attachment_id: string;
        }>;
    };
};
export declare const hireV1AttachmentPreview: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            attachment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            attachment_id: string;
        }, {
            attachment_id: string;
        }>;
    };
};
export declare const hireV1BackgroundCheckOrderList: {
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
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            application_id: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1DiversityInclusionSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            talent_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            application_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            talent_ids?: string[] | undefined;
            application_ids?: string[] | undefined;
        }, {
            talent_ids?: string[] | undefined;
            application_ids?: string[] | undefined;
        }>>;
    };
};
export declare const hireV1EcoAccountCustomFieldBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope: z.ZodNumber;
            custom_field_key_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            custom_field_key_list?: string[] | undefined;
        }, {
            scope: number;
            custom_field_key_list?: string[] | undefined;
        }>;
    };
};
export declare const hireV1EcoAccountCustomFieldBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope: z.ZodNumber;
            custom_field_list: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
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
                is_required: z.ZodBoolean;
                description: z.ZodOptional<z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            custom_field_list: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
        }, {
            scope: number;
            custom_field_list: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
        }>;
    };
};
export declare const hireV1EcoAccountCustomFieldCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope: z.ZodNumber;
            custom_field_list: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
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
                is_required: z.ZodBoolean;
                description: z.ZodOptional<z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }, {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            custom_field_list: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
        }, {
            scope: number;
            custom_field_list: {
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckCustomFieldBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
        }, {
            account_id: string;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckCustomFieldBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            custom_field_list: z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["text", "textarea", "number", "boolean", "select", "multiselect", "date", "file", "resume"]>;
                key: z.ZodString;
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
                is_required: z.ZodBoolean;
                description: z.ZodOptional<z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
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
                    key: string;
                }, {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }, {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            custom_field_list: {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
            account_id: string;
        }, {
            custom_field_list: {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
            account_id: string;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckCustomFieldCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            custom_field_list: z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<["text", "textarea", "number", "boolean", "select", "multiselect", "date", "file", "resume"]>;
                key: z.ZodString;
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
                is_required: z.ZodBoolean;
                description: z.ZodOptional<z.ZodObject<{
                    zh_cn: z.ZodOptional<z.ZodString>;
                    en_us: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }, {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                }>>;
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
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
                    key: string;
                }, {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }, {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            custom_field_list: {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
            account_id: string;
        }, {
            custom_field_list: {
                type: "number" | "boolean" | "date" | "file" | "text" | "resume" | "select" | "textarea" | "multiselect";
                name: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                };
                key: string;
                is_required: boolean;
                options?: {
                    name: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    };
                    key: string;
                }[] | undefined;
                description?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                } | undefined;
            }[];
            account_id: string;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckPackageBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            package_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            additional_item_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            package_id_list?: string[] | undefined;
            additional_item_id_list?: string[] | undefined;
        }, {
            account_id: string;
            package_id_list?: string[] | undefined;
            additional_item_id_list?: string[] | undefined;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckPackageBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            package_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                description?: string | undefined;
            }, {
                id: string;
                name: string;
                description?: string | undefined;
            }>, "many">;
            additional_item_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                description?: string | undefined;
            }, {
                id: string;
                name: string;
                description?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            package_list: {
                id: string;
                name: string;
                description?: string | undefined;
            }[];
            additional_item_list?: {
                id: string;
                name: string;
                description?: string | undefined;
            }[] | undefined;
        }, {
            account_id: string;
            package_list: {
                id: string;
                name: string;
                description?: string | undefined;
            }[];
            additional_item_list?: {
                id: string;
                name: string;
                description?: string | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckPackageCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            package_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                description?: string | undefined;
            }, {
                id: string;
                name: string;
                description?: string | undefined;
            }>, "many">;
            additional_item_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                description?: string | undefined;
            }, {
                id: string;
                name: string;
                description?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            package_list: {
                id: string;
                name: string;
                description?: string | undefined;
            }[];
            additional_item_list?: {
                id: string;
                name: string;
                description?: string | undefined;
            }[] | undefined;
        }, {
            account_id: string;
            package_list: {
                id: string;
                name: string;
                description?: string | undefined;
            }[];
            additional_item_list?: {
                id: string;
                name: string;
                description?: string | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckCancel: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            background_check_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            background_check_id: string;
        }, {
            background_check_id: string;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckUpdateProgress: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            background_check_id: z.ZodString;
            stage_id: z.ZodString;
            stage_en_name: z.ZodOptional<z.ZodString>;
            stage_name: z.ZodString;
            stage_time: z.ZodString;
            result: z.ZodOptional<z.ZodString>;
            report_file_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                report_name: z.ZodString;
                report_url: z.ZodString;
                report_url_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }, {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            stage_id: string;
            background_check_id: string;
            stage_name: string;
            stage_time: string;
            result?: string | undefined;
            stage_en_name?: string | undefined;
            report_file_list?: {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }[] | undefined;
        }, {
            stage_id: string;
            background_check_id: string;
            stage_name: string;
            stage_time: string;
            result?: string | undefined;
            stage_en_name?: string | undefined;
            report_file_list?: {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1EcoBackgroundCheckUpdateResult: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            background_check_id: z.ZodString;
            result: z.ZodString;
            result_time: z.ZodString;
            report_file_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                report_name: z.ZodString;
                report_url: z.ZodString;
                report_url_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }, {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            result: string;
            background_check_id: string;
            result_time: string;
            report_file_list?: {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }[] | undefined;
        }, {
            result: string;
            background_check_id: string;
            result_time: string;
            report_file_list?: {
                report_name: string;
                report_url: string;
                report_url_type?: number | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1EcoExamPaperBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            paper_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            paper_id_list: string[];
        }, {
            account_id: string;
            paper_id_list: string[];
        }>;
    };
};
export declare const hireV1EcoExamPaperBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            paper_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                duration: z.ZodOptional<z.ZodNumber>;
                question_count: z.ZodOptional<z.ZodNumber>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }, {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            paper_list: {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }[];
        }, {
            account_id: string;
            paper_list: {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }[];
        }>;
    };
};
export declare const hireV1EcoExamPaperCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            account_id: z.ZodString;
            paper_list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                duration: z.ZodOptional<z.ZodNumber>;
                question_count: z.ZodOptional<z.ZodNumber>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }, {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            account_id: string;
            paper_list: {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }[];
        }, {
            account_id: string;
            paper_list: {
                id: string;
                name: string;
                start_time?: string | undefined;
                end_time?: string | undefined;
                duration?: number | undefined;
                question_count?: number | undefined;
            }[];
        }>;
    };
};
export declare const hireV1EcoExamLoginInfo: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            result: z.ZodOptional<z.ZodNumber>;
            msg: z.ZodOptional<z.ZodString>;
            exam_login_info: z.ZodObject<{
                exam_url: z.ZodString;
                username: z.ZodOptional<z.ZodString>;
                password: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                exam_url: string;
                password?: string | undefined;
                username?: string | undefined;
            }, {
                exam_url: string;
                password?: string | undefined;
                username?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            exam_login_info: {
                exam_url: string;
                password?: string | undefined;
                username?: string | undefined;
            };
            result?: number | undefined;
            msg?: string | undefined;
        }, {
            exam_login_info: {
                exam_url: string;
                password?: string | undefined;
                username?: string | undefined;
            };
            result?: number | undefined;
            msg?: string | undefined;
        }>;
        path: z.ZodObject<{
            exam_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            exam_id: string;
        }, {
            exam_id: string;
        }>;
    };
};
export declare const hireV1EcoExamUpdateResult: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            result: z.ZodString;
            result_time: z.ZodOptional<z.ZodString>;
            report_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                answer_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                url: string;
                answer_time?: string | undefined;
            }, {
                name: string;
                url: string;
                answer_time?: string | undefined;
            }>, "many">>;
            detail_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                result: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                result: string;
                name: string;
                id?: string | undefined;
            }, {
                result: string;
                name: string;
                id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            result: string;
            result_time?: string | undefined;
            report_list?: {
                name: string;
                url: string;
                answer_time?: string | undefined;
            }[] | undefined;
            detail_list?: {
                result: string;
                name: string;
                id?: string | undefined;
            }[] | undefined;
        }, {
            result: string;
            result_time?: string | undefined;
            report_list?: {
                name: string;
                url: string;
                answer_time?: string | undefined;
            }[] | undefined;
            detail_list?: {
                result: string;
                name: string;
                id?: string | undefined;
            }[] | undefined;
        }>;
        path: z.ZodObject<{
            exam_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            exam_id: string;
        }, {
            exam_id: string;
        }>;
    };
};
export declare const hireV1EhrImportTaskPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            fail_reason: z.ZodOptional<z.ZodString>;
            redirect_url: z.ZodOptional<z.ZodString>;
            state: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            state: number;
            fail_reason?: string | undefined;
            redirect_url?: string | undefined;
        }, {
            state: number;
            fail_reason?: string | undefined;
            redirect_url?: string | undefined;
        }>;
        path: z.ZodObject<{
            ehr_import_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            ehr_import_task_id: string;
        }, {
            ehr_import_task_id: string;
        }>;
    };
};
export declare const hireV1EmployeeGet: {
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
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_admin_department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
    };
};
export declare const hireV1EmployeeGetByApplication: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            application_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_admin_department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            application_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>;
    };
};
export declare const hireV1EmployeePatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operation: z.ZodNumber;
            conversion_info: z.ZodOptional<z.ZodObject<{
                actual_conversion_time: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                actual_conversion_time?: number | undefined;
            }, {
                actual_conversion_time?: number | undefined;
            }>>;
            overboard_info: z.ZodOptional<z.ZodObject<{
                actual_overboard_time: z.ZodOptional<z.ZodNumber>;
                overboard_note: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                actual_overboard_time?: number | undefined;
                overboard_note?: string | undefined;
            }, {
                actual_overboard_time?: number | undefined;
                overboard_note?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            operation: number;
            conversion_info?: {
                actual_conversion_time?: number | undefined;
            } | undefined;
            overboard_info?: {
                actual_overboard_time?: number | undefined;
                overboard_note?: string | undefined;
            } | undefined;
        }, {
            operation: number;
            conversion_info?: {
                actual_conversion_time?: number | undefined;
            } | undefined;
            overboard_info?: {
                actual_overboard_time?: number | undefined;
                overboard_note?: string | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id", "people_admin_department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | "people_admin_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodObject<{
            employee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_id: string;
        }, {
            employee_id: string;
        }>;
    };
};
export declare const hireV1EvaluationTaskList: {
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
            activity_status: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }>;
    };
};
export declare const hireV1EvaluationList: {
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
            application_id: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExamMarkingTaskList: {
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
            activity_status: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }>;
    };
};
export declare const hireV1ExamCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            application_id: z.ZodString;
            exam_resource_name: z.ZodString;
            score: z.ZodNumber;
            uuid: z.ZodOptional<z.ZodString>;
            operator_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            application_id: string;
            exam_resource_name: string;
            score: number;
            uuid?: string | undefined;
        }, {
            operator_id: string;
            application_id: string;
            exam_resource_name: string;
            score: number;
            uuid?: string | undefined;
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
export declare const hireV1ExternalApplicationCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_id: z.ZodOptional<z.ZodString>;
            job_recruitment_type: z.ZodOptional<z.ZodNumber>;
            job_title: z.ZodOptional<z.ZodString>;
            resume_source: z.ZodOptional<z.ZodString>;
            stage: z.ZodOptional<z.ZodString>;
            talent_id: z.ZodString;
            termination_reason: z.ZodOptional<z.ZodString>;
            delivery_type: z.ZodOptional<z.ZodNumber>;
            modify_time: z.ZodOptional<z.ZodNumber>;
            create_time: z.ZodOptional<z.ZodNumber>;
            termination_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            create_time?: number | undefined;
            external_id?: string | undefined;
            job_title?: string | undefined;
            termination_type?: string | undefined;
            delivery_type?: number | undefined;
            job_recruitment_type?: number | undefined;
            resume_source?: string | undefined;
            stage?: string | undefined;
            termination_reason?: string | undefined;
            modify_time?: number | undefined;
        }, {
            talent_id: string;
            create_time?: number | undefined;
            external_id?: string | undefined;
            job_title?: string | undefined;
            termination_type?: string | undefined;
            delivery_type?: number | undefined;
            job_recruitment_type?: number | undefined;
            resume_source?: string | undefined;
            stage?: string | undefined;
            termination_reason?: string | undefined;
            modify_time?: number | undefined;
        }>;
    };
};
export declare const hireV1ExternalApplicationDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            talent_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id?: string | undefined;
        }, {
            talent_id?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            external_application_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_application_id?: string | undefined;
        }, {
            external_application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalApplicationList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            talent_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            talent_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            talent_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalApplicationUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            job_recruitment_type: z.ZodOptional<z.ZodNumber>;
            job_title: z.ZodOptional<z.ZodString>;
            resume_source: z.ZodOptional<z.ZodString>;
            stage: z.ZodOptional<z.ZodString>;
            termination_reason: z.ZodOptional<z.ZodString>;
            delivery_type: z.ZodOptional<z.ZodNumber>;
            modify_time: z.ZodOptional<z.ZodNumber>;
            create_time: z.ZodOptional<z.ZodNumber>;
            termination_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            create_time?: number | undefined;
            job_title?: string | undefined;
            termination_type?: string | undefined;
            delivery_type?: number | undefined;
            job_recruitment_type?: number | undefined;
            resume_source?: string | undefined;
            stage?: string | undefined;
            termination_reason?: string | undefined;
            modify_time?: number | undefined;
        }, {
            create_time?: number | undefined;
            job_title?: string | undefined;
            termination_type?: string | undefined;
            delivery_type?: number | undefined;
            job_recruitment_type?: number | undefined;
            resume_source?: string | undefined;
            stage?: string | undefined;
            termination_reason?: string | undefined;
            modify_time?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            external_application_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_application_id?: string | undefined;
        }, {
            external_application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalBackgroundCheckBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            external_background_check_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_background_check_id_list?: string[] | undefined;
        }, {
            external_background_check_id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            external_application_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalBackgroundCheckCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_id: z.ZodOptional<z.ZodString>;
            external_application_id: z.ZodString;
            date: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            result: z.ZodOptional<z.ZodString>;
            attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            date?: number | undefined;
            result?: string | undefined;
            name?: string | undefined;
            external_id?: string | undefined;
            attachment_id_list?: string[] | undefined;
        }, {
            external_application_id: string;
            date?: number | undefined;
            result?: string | undefined;
            name?: string | undefined;
            external_id?: string | undefined;
            attachment_id_list?: string[] | undefined;
        }>;
    };
};
export declare const hireV1ExternalBackgroundCheckDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            external_background_check_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_background_check_id: string;
        }, {
            external_background_check_id: string;
        }>;
    };
};
export declare const hireV1ExternalBackgroundCheckUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_application_id: z.ZodString;
            date: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            result: z.ZodOptional<z.ZodString>;
            attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            date?: number | undefined;
            result?: string | undefined;
            name?: string | undefined;
            attachment_id_list?: string[] | undefined;
        }, {
            external_application_id: string;
            date?: number | undefined;
            result?: string | undefined;
            name?: string | undefined;
            attachment_id_list?: string[] | undefined;
        }>;
        path: z.ZodObject<{
            external_background_check_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_background_check_id: string;
        }, {
            external_background_check_id: string;
        }>;
    };
};
export declare const hireV1ExternalInterviewAssessmentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_id: z.ZodOptional<z.ZodString>;
            username: z.ZodOptional<z.ZodString>;
            conclusion: z.ZodOptional<z.ZodNumber>;
            assessment_dimension_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                score: z.ZodOptional<z.ZodNumber>;
                option: z.ZodOptional<z.ZodString>;
                options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodOptional<z.ZodString>;
                assessment_type: z.ZodOptional<z.ZodNumber>;
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }, {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }>, "many">>;
            content: z.ZodOptional<z.ZodString>;
            external_interview_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_interview_id: string;
            content?: string | undefined;
            external_id?: string | undefined;
            username?: string | undefined;
            conclusion?: number | undefined;
            assessment_dimension_list?: {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }[] | undefined;
        }, {
            external_interview_id: string;
            content?: string | undefined;
            external_id?: string | undefined;
            username?: string | undefined;
            conclusion?: number | undefined;
            assessment_dimension_list?: {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1ExternalInterviewAssessmentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            username: z.ZodOptional<z.ZodString>;
            conclusion: z.ZodOptional<z.ZodNumber>;
            assessment_dimension_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                score: z.ZodOptional<z.ZodNumber>;
                option: z.ZodOptional<z.ZodString>;
                options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodOptional<z.ZodString>;
                assessment_type: z.ZodOptional<z.ZodNumber>;
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }, {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }>, "many">>;
            content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content?: string | undefined;
            username?: string | undefined;
            conclusion?: number | undefined;
            assessment_dimension_list?: {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }[] | undefined;
        }, {
            content?: string | undefined;
            username?: string | undefined;
            conclusion?: number | undefined;
            assessment_dimension_list?: {
                options?: string[] | undefined;
                content?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                option?: string | undefined;
                score?: number | undefined;
                assessment_type?: number | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            external_interview_assessment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_interview_assessment_id: string;
        }, {
            external_interview_assessment_id: string;
        }>;
    };
};
export declare const hireV1ExternalInterviewBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            external_interview_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_interview_id_list?: string[] | undefined;
        }, {
            external_interview_id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            external_application_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalInterviewCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_id: z.ZodOptional<z.ZodString>;
            external_application_id: z.ZodString;
            participate_status: z.ZodOptional<z.ZodNumber>;
            begin_time: z.ZodOptional<z.ZodNumber>;
            end_time: z.ZodOptional<z.ZodNumber>;
            interview_assessments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                username: z.ZodOptional<z.ZodString>;
                conclusion: z.ZodOptional<z.ZodNumber>;
                assessment_dimension_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    score: z.ZodOptional<z.ZodNumber>;
                    option: z.ZodOptional<z.ZodString>;
                    options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    content: z.ZodOptional<z.ZodString>;
                    assessment_type: z.ZodOptional<z.ZodNumber>;
                    title: z.ZodOptional<z.ZodString>;
                    description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }, {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }>, "many">>;
                content: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }, {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            end_time?: number | undefined;
            external_id?: string | undefined;
            participate_status?: number | undefined;
            begin_time?: number | undefined;
            interview_assessments?: {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            external_application_id: string;
            end_time?: number | undefined;
            external_id?: string | undefined;
            participate_status?: number | undefined;
            begin_time?: number | undefined;
            interview_assessments?: {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1ExternalInterviewDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            external_interview_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_interview_id: string;
        }, {
            external_interview_id: string;
        }>;
    };
};
export declare const hireV1ExternalInterviewUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_application_id: z.ZodString;
            participate_status: z.ZodOptional<z.ZodNumber>;
            begin_time: z.ZodOptional<z.ZodNumber>;
            end_time: z.ZodOptional<z.ZodNumber>;
            interview_assessments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                username: z.ZodOptional<z.ZodString>;
                conclusion: z.ZodOptional<z.ZodNumber>;
                assessment_dimension_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    score: z.ZodOptional<z.ZodNumber>;
                    option: z.ZodOptional<z.ZodString>;
                    options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    content: z.ZodOptional<z.ZodString>;
                    assessment_type: z.ZodOptional<z.ZodNumber>;
                    title: z.ZodOptional<z.ZodString>;
                    description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }, {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }>, "many">>;
                content: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }, {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            end_time?: number | undefined;
            participate_status?: number | undefined;
            begin_time?: number | undefined;
            interview_assessments?: {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            external_application_id: string;
            end_time?: number | undefined;
            participate_status?: number | undefined;
            begin_time?: number | undefined;
            interview_assessments?: {
                content?: string | undefined;
                username?: string | undefined;
                conclusion?: number | undefined;
                assessment_dimension_list?: {
                    options?: string[] | undefined;
                    content?: string | undefined;
                    title?: string | undefined;
                    description?: string | undefined;
                    option?: string | undefined;
                    score?: number | undefined;
                    assessment_type?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        }>;
        path: z.ZodObject<{
            external_interview_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_interview_id: string;
        }, {
            external_interview_id: string;
        }>;
    };
};
export declare const hireV1ExternalOfferBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            external_offer_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_offer_id_list?: string[] | undefined;
        }, {
            external_offer_id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            external_application_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            external_application_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalOfferCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_id: z.ZodOptional<z.ZodString>;
            external_application_id: z.ZodString;
            biz_create_time: z.ZodOptional<z.ZodString>;
            owner: z.ZodOptional<z.ZodString>;
            offer_status: z.ZodOptional<z.ZodString>;
            attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            external_id?: string | undefined;
            owner?: string | undefined;
            attachment_id_list?: string[] | undefined;
            biz_create_time?: string | undefined;
            offer_status?: string | undefined;
        }, {
            external_application_id: string;
            external_id?: string | undefined;
            owner?: string | undefined;
            attachment_id_list?: string[] | undefined;
            biz_create_time?: string | undefined;
            offer_status?: string | undefined;
        }>;
    };
};
export declare const hireV1ExternalOfferDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            external_offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_offer_id?: string | undefined;
        }, {
            external_offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalOfferUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_application_id: z.ZodString;
            biz_create_time: z.ZodOptional<z.ZodString>;
            owner: z.ZodOptional<z.ZodString>;
            offer_status: z.ZodOptional<z.ZodString>;
            attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            external_application_id: string;
            owner?: string | undefined;
            attachment_id_list?: string[] | undefined;
            biz_create_time?: string | undefined;
            offer_status?: string | undefined;
        }, {
            external_application_id: string;
            owner?: string | undefined;
            attachment_id_list?: string[] | undefined;
            biz_create_time?: string | undefined;
            offer_status?: string | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            external_offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_offer_id?: string | undefined;
        }, {
            external_offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ExternalReferralRewardCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            referral_user_id: z.ZodString;
            create_user_id: z.ZodOptional<z.ZodString>;
            confirm_user_id: z.ZodOptional<z.ZodString>;
            pay_user_id: z.ZodOptional<z.ZodString>;
            external_id: z.ZodString;
            application_id: z.ZodOptional<z.ZodString>;
            talent_id: z.ZodOptional<z.ZodString>;
            job_id: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            rule_type: z.ZodNumber;
            bonus: z.ZodObject<{
                bonus_type: z.ZodNumber;
                point_bonus: z.ZodOptional<z.ZodNumber>;
                cash: z.ZodOptional<z.ZodObject<{
                    currency_type: z.ZodString;
                    amount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    amount: number;
                    currency_type: string;
                }, {
                    amount: number;
                    currency_type: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                bonus_type: number;
                point_bonus?: number | undefined;
                cash?: {
                    amount: number;
                    currency_type: string;
                } | undefined;
            }, {
                bonus_type: number;
                point_bonus?: number | undefined;
                cash?: {
                    amount: number;
                    currency_type: string;
                } | undefined;
            }>;
            stage: z.ZodNumber;
            create_time: z.ZodOptional<z.ZodString>;
            confirm_time: z.ZodOptional<z.ZodString>;
            pay_time: z.ZodOptional<z.ZodString>;
            onboard_time: z.ZodOptional<z.ZodString>;
            conversion_time: z.ZodOptional<z.ZodString>;
            comment: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            rule_type: number;
            external_id: string;
            stage: number;
            referral_user_id: string;
            bonus: {
                bonus_type: number;
                point_bonus?: number | undefined;
                cash?: {
                    amount: number;
                    currency_type: string;
                } | undefined;
            };
            create_time?: string | undefined;
            comment?: string | undefined;
            reason?: string | undefined;
            job_id?: string | undefined;
            talent_id?: string | undefined;
            create_user_id?: string | undefined;
            application_id?: string | undefined;
            confirm_user_id?: string | undefined;
            pay_user_id?: string | undefined;
            confirm_time?: string | undefined;
            pay_time?: string | undefined;
            onboard_time?: string | undefined;
            conversion_time?: string | undefined;
        }, {
            rule_type: number;
            external_id: string;
            stage: number;
            referral_user_id: string;
            bonus: {
                bonus_type: number;
                point_bonus?: number | undefined;
                cash?: {
                    amount: number;
                    currency_type: string;
                } | undefined;
            };
            create_time?: string | undefined;
            comment?: string | undefined;
            reason?: string | undefined;
            job_id?: string | undefined;
            talent_id?: string | undefined;
            create_user_id?: string | undefined;
            application_id?: string | undefined;
            confirm_user_id?: string | undefined;
            pay_user_id?: string | undefined;
            confirm_time?: string | undefined;
            pay_time?: string | undefined;
            onboard_time?: string | undefined;
            conversion_time?: string | undefined;
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
export declare const hireV1ExternalReferralRewardDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            external_referral_reward_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_referral_reward_id?: string | undefined;
        }, {
            external_referral_reward_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1InterviewFeedbackFormList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            interview_feedback_form_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            interview_feedback_form_ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            interview_feedback_form_ids?: string[] | undefined;
        }>>;
    };
};
export declare const hireV1InterviewRecordAttachmentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            application_id: z.ZodString;
            interview_record_id: z.ZodOptional<z.ZodString>;
            language: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
            language?: number | undefined;
            interview_record_id?: string | undefined;
        }, {
            application_id: string;
            language?: number | undefined;
            interview_record_id?: string | undefined;
        }>;
    };
};
export declare const hireV1InterviewRecordGet: {
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
            interview_record_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            interview_record_id: string;
        }, {
            interview_record_id: string;
        }>;
    };
};
export declare const hireV1InterviewRecordList: {
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
            ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            ids?: string[] | undefined;
        }>>;
    };
};
export declare const hireV1InterviewRegistrationSchemaList: {
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
export declare const hireV1InterviewRoundTypeList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            process_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            process_type?: number | undefined;
        }, {
            process_type?: number | undefined;
        }>>;
    };
};
export declare const hireV1InterviewTaskList: {
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
            activity_status: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }, {
            user_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            activity_status?: number | undefined;
        }>;
    };
};
export declare const hireV1InterviewGetByTalent: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            talent_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }, {
            talent_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }>;
    };
};
export declare const hireV1InterviewList: {
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
            application_id: z.ZodOptional<z.ZodString>;
            interview_id: z.ZodOptional<z.ZodString>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            application_id?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            interview_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            application_id?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            interview_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1InterviewerList: {
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
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            verify_status: z.ZodOptional<z.ZodNumber>;
            earliest_update_time: z.ZodOptional<z.ZodString>;
            latest_update_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            verify_status?: number | undefined;
            earliest_update_time?: string | undefined;
            latest_update_time?: string | undefined;
        }, {
            user_ids?: string[] | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            verify_status?: number | undefined;
            earliest_update_time?: string | undefined;
            latest_update_time?: string | undefined;
        }>>;
    };
};
export declare const hireV1InterviewerPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            interviewer: z.ZodObject<{
                verify_status: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                verify_status?: number | undefined;
            }, {
                verify_status?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            interviewer: {
                verify_status?: number | undefined;
            };
        }, {
            interviewer: {
                verify_status?: number | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            interviewer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            interviewer_id?: string | undefined;
        }, {
            interviewer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1JobFunctionList: {
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
export declare const hireV1JobProcessList: {
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
export declare const hireV1JobPublishRecordSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            job_channel_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_channel_id: string;
        }, {
            job_channel_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }>>;
    };
};
export declare const hireV1JobRequirementSchemaList: {
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
export declare const hireV1JobRequirementCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            short_code: z.ZodString;
            name: z.ZodString;
            display_progress: z.ZodNumber;
            head_count: z.ZodNumber;
            recruitment_type_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            max_level_id: z.ZodOptional<z.ZodString>;
            min_level_id: z.ZodOptional<z.ZodString>;
            sequence_id: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodNumber>;
            department_id: z.ZodOptional<z.ZodString>;
            recruiter_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jr_hiring_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            direct_leader_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            start_time: z.ZodOptional<z.ZodString>;
            deadline: z.ZodOptional<z.ZodString>;
            priority: z.ZodOptional<z.ZodNumber>;
            required_degree: z.ZodOptional<z.ZodNumber>;
            max_salary: z.ZodOptional<z.ZodString>;
            min_salary: z.ZodOptional<z.ZodString>;
            address_id: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            customized_data_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                object_id?: string | undefined;
            }, {
                value?: string | undefined;
                object_id?: string | undefined;
            }>, "many">>;
            process_type: z.ZodOptional<z.ZodNumber>;
            job_type_id: z.ZodOptional<z.ZodString>;
            job_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            employment_job_id: z.ZodOptional<z.ZodString>;
            position_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            short_code: string;
            display_progress: number;
            head_count: number;
            department_id?: string | undefined;
            description?: string | undefined;
            start_time?: string | undefined;
            category?: number | undefined;
            employee_type_id?: string | undefined;
            priority?: number | undefined;
            job_id_list?: string[] | undefined;
            position_id?: string | undefined;
            address_id?: string | undefined;
            recruitment_type_id?: string | undefined;
            process_type?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            sequence_id?: string | undefined;
            recruiter_id_list?: string[] | undefined;
            jr_hiring_manager_id_list?: string[] | undefined;
            direct_leader_id_list?: string[] | undefined;
            deadline?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: string | undefined;
            min_salary?: string | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            job_type_id?: string | undefined;
            employment_job_id?: string | undefined;
        }, {
            name: string;
            short_code: string;
            display_progress: number;
            head_count: number;
            department_id?: string | undefined;
            description?: string | undefined;
            start_time?: string | undefined;
            category?: number | undefined;
            employee_type_id?: string | undefined;
            priority?: number | undefined;
            job_id_list?: string[] | undefined;
            position_id?: string | undefined;
            address_id?: string | undefined;
            recruitment_type_id?: string | undefined;
            process_type?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            sequence_id?: string | undefined;
            recruiter_id_list?: string[] | undefined;
            jr_hiring_manager_id_list?: string[] | undefined;
            direct_leader_id_list?: string[] | undefined;
            deadline?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: string | undefined;
            min_salary?: string | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            job_type_id?: string | undefined;
            employment_job_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
    };
};
export declare const hireV1JobRequirementDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            job_requirement_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_requirement_id: string;
        }, {
            job_requirement_id: string;
        }>;
    };
};
export declare const hireV1JobRequirementList: {
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
            job_id: z.ZodOptional<z.ZodString>;
            create_time_begin: z.ZodOptional<z.ZodString>;
            create_time_end: z.ZodOptional<z.ZodString>;
            update_time_begin: z.ZodOptional<z.ZodString>;
            update_time_end: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_id?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
            create_time_begin?: string | undefined;
            create_time_end?: string | undefined;
            update_time_begin?: string | undefined;
            update_time_end?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_id?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
            create_time_begin?: string | undefined;
            create_time_end?: string | undefined;
            update_time_begin?: string | undefined;
            update_time_end?: string | undefined;
        }>>;
    };
};
export declare const hireV1JobRequirementListById: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id_list?: string[] | undefined;
        }, {
            id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
    };
};
export declare const hireV1JobRequirementUpdate: {
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
            display_progress: z.ZodNumber;
            head_count: z.ZodNumber;
            recruitment_type_id: z.ZodOptional<z.ZodString>;
            employee_type_id: z.ZodOptional<z.ZodString>;
            max_level_id: z.ZodOptional<z.ZodString>;
            min_level_id: z.ZodOptional<z.ZodString>;
            sequence_id: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodNumber>;
            department_id: z.ZodOptional<z.ZodString>;
            recruiter_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jr_hiring_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            direct_leader_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            start_time: z.ZodOptional<z.ZodString>;
            deadline: z.ZodOptional<z.ZodString>;
            priority: z.ZodOptional<z.ZodNumber>;
            required_degree: z.ZodOptional<z.ZodNumber>;
            max_salary: z.ZodOptional<z.ZodString>;
            min_salary: z.ZodOptional<z.ZodString>;
            address_id: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            customized_data_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                object_id?: string | undefined;
            }, {
                value?: string | undefined;
                object_id?: string | undefined;
            }>, "many">>;
            process_type: z.ZodOptional<z.ZodNumber>;
            job_type_id: z.ZodOptional<z.ZodString>;
            job_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            employment_job_id: z.ZodOptional<z.ZodString>;
            position_id: z.ZodOptional<z.ZodString>;
            update_option: z.ZodOptional<z.ZodObject<{
                need_update_related_job: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                need_update_related_job?: boolean | undefined;
            }, {
                need_update_related_job?: boolean | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            display_progress: number;
            head_count: number;
            department_id?: string | undefined;
            description?: string | undefined;
            start_time?: string | undefined;
            category?: number | undefined;
            employee_type_id?: string | undefined;
            priority?: number | undefined;
            job_id_list?: string[] | undefined;
            position_id?: string | undefined;
            address_id?: string | undefined;
            recruitment_type_id?: string | undefined;
            process_type?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            sequence_id?: string | undefined;
            recruiter_id_list?: string[] | undefined;
            jr_hiring_manager_id_list?: string[] | undefined;
            direct_leader_id_list?: string[] | undefined;
            deadline?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: string | undefined;
            min_salary?: string | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            job_type_id?: string | undefined;
            employment_job_id?: string | undefined;
            update_option?: {
                need_update_related_job?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            display_progress: number;
            head_count: number;
            department_id?: string | undefined;
            description?: string | undefined;
            start_time?: string | undefined;
            category?: number | undefined;
            employee_type_id?: string | undefined;
            priority?: number | undefined;
            job_id_list?: string[] | undefined;
            position_id?: string | undefined;
            address_id?: string | undefined;
            recruitment_type_id?: string | undefined;
            process_type?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            sequence_id?: string | undefined;
            recruiter_id_list?: string[] | undefined;
            jr_hiring_manager_id_list?: string[] | undefined;
            direct_leader_id_list?: string[] | undefined;
            deadline?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: string | undefined;
            min_salary?: string | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            job_type_id?: string | undefined;
            employment_job_id?: string | undefined;
            update_option?: {
                need_update_related_job?: boolean | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodObject<{
            job_requirement_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_requirement_id: string;
        }, {
            job_requirement_id: string;
        }>;
    };
};
export declare const hireV1JobSchemaList: {
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
            scenario: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            scenario?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            scenario?: number | undefined;
        }>>;
    };
};
export declare const hireV1JobTypeList: {
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
export declare const hireV1JobClose: {
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
export declare const hireV1JobCombinedCreate: {
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
            experience: z.ZodOptional<z.ZodNumber>;
            expiry_time: z.ZodOptional<z.ZodNumber>;
            customized_data_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                object_id?: string | undefined;
            }, {
                value?: string | undefined;
                object_id?: string | undefined;
            }>, "many">>;
            min_level_id: z.ZodOptional<z.ZodString>;
            min_salary: z.ZodOptional<z.ZodNumber>;
            title: z.ZodString;
            job_managers: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                recruiter_id: z.ZodString;
                hiring_manager_id_list: z.ZodArray<z.ZodString, "many">;
                assistant_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            }, {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            }>;
            job_process_id: z.ZodString;
            process_type: z.ZodNumber;
            subject_id: z.ZodOptional<z.ZodString>;
            job_function_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodString;
            head_count: z.ZodOptional<z.ZodNumber>;
            is_never_expired: z.ZodBoolean;
            max_salary: z.ZodOptional<z.ZodNumber>;
            requirement: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            highlight_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_type_id: z.ZodString;
            max_level_id: z.ZodOptional<z.ZodString>;
            recruitment_type_id: z.ZodString;
            required_degree: z.ZodOptional<z.ZodNumber>;
            job_category_id: z.ZodOptional<z.ZodString>;
            address_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_attribute: z.ZodOptional<z.ZodNumber>;
            expiry_timestamp: z.ZodOptional<z.ZodString>;
            interview_registration_schema_id: z.ZodOptional<z.ZodString>;
            onboard_registration_schema_id: z.ZodOptional<z.ZodString>;
            target_major_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            portal_website_apply_form_schema_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            department_id: string;
            title: string;
            recruitment_type_id: string;
            process_type: number;
            job_type_id: string;
            job_managers: {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            };
            job_process_id: string;
            is_never_expired: boolean;
            code?: string | undefined;
            description?: string | undefined;
            head_count?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: number | undefined;
            min_salary?: number | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            experience?: number | undefined;
            expiry_time?: number | undefined;
            subject_id?: string | undefined;
            job_function_id?: string | undefined;
            requirement?: string | undefined;
            highlight_list?: string[] | undefined;
            job_category_id?: string | undefined;
            address_id_list?: string[] | undefined;
            job_attribute?: number | undefined;
            expiry_timestamp?: string | undefined;
            interview_registration_schema_id?: string | undefined;
            onboard_registration_schema_id?: string | undefined;
            target_major_id_list?: string[] | undefined;
            portal_website_apply_form_schema_id?: string | undefined;
        }, {
            department_id: string;
            title: string;
            recruitment_type_id: string;
            process_type: number;
            job_type_id: string;
            job_managers: {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            };
            job_process_id: string;
            is_never_expired: boolean;
            code?: string | undefined;
            description?: string | undefined;
            head_count?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: number | undefined;
            min_salary?: number | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            experience?: number | undefined;
            expiry_time?: number | undefined;
            subject_id?: string | undefined;
            job_function_id?: string | undefined;
            requirement?: string | undefined;
            highlight_list?: string[] | undefined;
            job_category_id?: string | undefined;
            address_id_list?: string[] | undefined;
            job_attribute?: number | undefined;
            expiry_timestamp?: string | undefined;
            interview_registration_schema_id?: string | undefined;
            onboard_registration_schema_id?: string | undefined;
            target_major_id_list?: string[] | undefined;
            portal_website_apply_form_schema_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }>>;
    };
};
export declare const hireV1JobCombinedUpdate: {
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
            experience: z.ZodOptional<z.ZodNumber>;
            expiry_time: z.ZodOptional<z.ZodNumber>;
            customized_data_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                object_id?: string | undefined;
            }, {
                value?: string | undefined;
                object_id?: string | undefined;
            }>, "many">>;
            min_level_id: z.ZodOptional<z.ZodString>;
            min_salary: z.ZodOptional<z.ZodNumber>;
            title: z.ZodOptional<z.ZodString>;
            job_managers: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                recruiter_id: z.ZodString;
                hiring_manager_id_list: z.ZodArray<z.ZodString, "many">;
                assistant_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            }, {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            }>;
            job_process_id: z.ZodOptional<z.ZodString>;
            subject_id: z.ZodOptional<z.ZodString>;
            job_function_id: z.ZodOptional<z.ZodString>;
            department_id: z.ZodOptional<z.ZodString>;
            head_count: z.ZodOptional<z.ZodNumber>;
            is_never_expired: z.ZodBoolean;
            max_salary: z.ZodOptional<z.ZodNumber>;
            requirement: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            highlight_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_type_id: z.ZodString;
            max_level_id: z.ZodOptional<z.ZodString>;
            required_degree: z.ZodOptional<z.ZodNumber>;
            job_category_id: z.ZodOptional<z.ZodString>;
            address_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_attribute: z.ZodOptional<z.ZodNumber>;
            expiry_timestamp: z.ZodOptional<z.ZodString>;
            target_major_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            job_type_id: string;
            job_managers: {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            };
            is_never_expired: boolean;
            id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            head_count?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: number | undefined;
            min_salary?: number | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            experience?: number | undefined;
            expiry_time?: number | undefined;
            job_process_id?: string | undefined;
            subject_id?: string | undefined;
            job_function_id?: string | undefined;
            requirement?: string | undefined;
            highlight_list?: string[] | undefined;
            job_category_id?: string | undefined;
            address_id_list?: string[] | undefined;
            job_attribute?: number | undefined;
            expiry_timestamp?: string | undefined;
            target_major_id_list?: string[] | undefined;
        }, {
            job_type_id: string;
            job_managers: {
                recruiter_id: string;
                hiring_manager_id_list: string[];
                id?: string | undefined;
                assistant_id_list?: string[] | undefined;
            };
            is_never_expired: boolean;
            id?: string | undefined;
            department_id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            head_count?: number | undefined;
            max_level_id?: string | undefined;
            min_level_id?: string | undefined;
            required_degree?: number | undefined;
            max_salary?: number | undefined;
            min_salary?: number | undefined;
            customized_data_list?: {
                value?: string | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            experience?: number | undefined;
            expiry_time?: number | undefined;
            job_process_id?: string | undefined;
            subject_id?: string | undefined;
            job_function_id?: string | undefined;
            requirement?: string | undefined;
            highlight_list?: string[] | undefined;
            job_category_id?: string | undefined;
            address_id_list?: string[] | undefined;
            job_attribute?: number | undefined;
            expiry_timestamp?: string | undefined;
            target_major_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
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
export declare const hireV1JobConfig: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
export declare const hireV1JobGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
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
export declare const hireV1JobGetDetail: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
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
export declare const hireV1JobList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
        }>>;
    };
};
export declare const hireV1JobManagerBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            recruiter_id: z.ZodOptional<z.ZodString>;
            assistant_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            hiring_manager_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            update_option_list: z.ZodArray<z.ZodNumber, "many">;
            creator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            update_option_list: number[];
            creator_id?: string | undefined;
            recruiter_id?: string | undefined;
            hiring_manager_id_list?: string[] | undefined;
            assistant_id_list?: string[] | undefined;
        }, {
            update_option_list: number[];
            creator_id?: string | undefined;
            recruiter_id?: string | undefined;
            hiring_manager_id_list?: string[] | undefined;
            assistant_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
export declare const hireV1JobManagerGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        path: z.ZodObject<{
            job_id: z.ZodString;
            manager_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
            manager_id: string;
        }, {
            job_id: string;
            manager_id: string;
        }>;
    };
};
export declare const hireV1JobOpen: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            expiry_time: z.ZodOptional<z.ZodNumber>;
            is_never_expired: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            is_never_expired: boolean;
            expiry_time?: number | undefined;
        }, {
            is_never_expired: boolean;
            expiry_time?: number | undefined;
        }>;
        path: z.ZodObject<{
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
        }>;
    };
};
export declare const hireV1JobRecruiter: {
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
            job_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_id: string;
        }, {
            job_id: string;
        }>;
    };
};
export declare const hireV1JobUpdateConfig: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            offer_apply_schema_id: z.ZodOptional<z.ZodString>;
            offer_process_conf: z.ZodOptional<z.ZodString>;
            recommended_evaluator_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            update_option_list: z.ZodArray<z.ZodNumber, "many">;
            assessment_template_biz_id: z.ZodOptional<z.ZodString>;
            interview_round_conf_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                interviewer_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                round: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                interviewer_id_list?: string[] | undefined;
                round?: number | undefined;
            }, {
                interviewer_id_list?: string[] | undefined;
                round?: number | undefined;
            }>, "many">>;
            jr_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            interview_registration_schema_id: z.ZodOptional<z.ZodString>;
            onboard_registration_schema_id: z.ZodOptional<z.ZodString>;
            interview_round_type_conf_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                round_biz_id: z.ZodOptional<z.ZodString>;
                assessment_template_biz_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                assessment_template_biz_id?: string | undefined;
                round_biz_id?: string | undefined;
            }, {
                assessment_template_biz_id?: string | undefined;
                round_biz_id?: string | undefined;
            }>, "many">>;
            related_job_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            interview_appointment_config: z.ZodOptional<z.ZodObject<{
                enable_interview_appointment_by_interviewer: z.ZodOptional<z.ZodBoolean>;
                config: z.ZodOptional<z.ZodObject<{
                    interview_type: z.ZodOptional<z.ZodNumber>;
                    talent_timezone_code: z.ZodOptional<z.ZodString>;
                    contact_user_id: z.ZodOptional<z.ZodString>;
                    contact_mobile: z.ZodOptional<z.ZodString>;
                    contact_email: z.ZodOptional<z.ZodString>;
                    address_id: z.ZodOptional<z.ZodString>;
                    video_type: z.ZodOptional<z.ZodNumber>;
                    cc: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    remark: z.ZodOptional<z.ZodString>;
                    interview_notification_template_id: z.ZodOptional<z.ZodString>;
                    appointment_notification_template_id: z.ZodOptional<z.ZodString>;
                    cancel_interview_notification_template_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                }, {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                config?: {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                } | undefined;
                enable_interview_appointment_by_interviewer?: boolean | undefined;
            }, {
                config?: {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                } | undefined;
                enable_interview_appointment_by_interviewer?: boolean | undefined;
            }>>;
            portal_website_apply_form_schema_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            update_option_list: number[];
            interview_registration_schema_id?: string | undefined;
            onboard_registration_schema_id?: string | undefined;
            portal_website_apply_form_schema_id?: string | undefined;
            offer_apply_schema_id?: string | undefined;
            offer_process_conf?: string | undefined;
            recommended_evaluator_id_list?: string[] | undefined;
            assessment_template_biz_id?: string | undefined;
            interview_round_conf_list?: {
                interviewer_id_list?: string[] | undefined;
                round?: number | undefined;
            }[] | undefined;
            jr_id_list?: string[] | undefined;
            interview_round_type_conf_list?: {
                assessment_template_biz_id?: string | undefined;
                round_biz_id?: string | undefined;
            }[] | undefined;
            related_job_id_list?: string[] | undefined;
            interview_appointment_config?: {
                config?: {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                } | undefined;
                enable_interview_appointment_by_interviewer?: boolean | undefined;
            } | undefined;
        }, {
            update_option_list: number[];
            interview_registration_schema_id?: string | undefined;
            onboard_registration_schema_id?: string | undefined;
            portal_website_apply_form_schema_id?: string | undefined;
            offer_apply_schema_id?: string | undefined;
            offer_process_conf?: string | undefined;
            recommended_evaluator_id_list?: string[] | undefined;
            assessment_template_biz_id?: string | undefined;
            interview_round_conf_list?: {
                interviewer_id_list?: string[] | undefined;
                round?: number | undefined;
            }[] | undefined;
            jr_id_list?: string[] | undefined;
            interview_round_type_conf_list?: {
                assessment_template_biz_id?: string | undefined;
                round_biz_id?: string | undefined;
            }[] | undefined;
            related_job_id_list?: string[] | undefined;
            interview_appointment_config?: {
                config?: {
                    remark?: string | undefined;
                    address_id?: string | undefined;
                    interview_type?: number | undefined;
                    talent_timezone_code?: string | undefined;
                    contact_user_id?: string | undefined;
                    contact_mobile?: string | undefined;
                    contact_email?: string | undefined;
                    video_type?: number | undefined;
                    cc?: string[] | undefined;
                    interview_notification_template_id?: string | undefined;
                    appointment_notification_template_id?: string | undefined;
                    cancel_interview_notification_template_id?: string | undefined;
                } | undefined;
                enable_interview_appointment_by_interviewer?: boolean | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
export declare const hireV1LocationList: {
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
            page_size: z.ZodOptional<z.ZodNumber>;
            usage: z.ZodEnum<["position_location", "interview_location"]>;
        }, "strip", z.ZodTypeAny, {
            usage: "position_location" | "interview_location";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            usage: "position_location" | "interview_location";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
    };
};
export declare const hireV1LocationQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            location_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            location_type: number;
            code_list?: string[] | undefined;
        }, {
            location_type: number;
            code_list?: string[] | undefined;
        }>;
        params: z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const hireV1MinutesGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            interview_id: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            interview_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            interview_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
    };
};
export declare const hireV1NoteCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            application_id: z.ZodOptional<z.ZodString>;
            creator_id: z.ZodOptional<z.ZodString>;
            content: z.ZodString;
            privacy: z.ZodOptional<z.ZodNumber>;
            notify_mentioned_user: z.ZodOptional<z.ZodBoolean>;
            mention_entity_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                offset: z.ZodNumber;
                user_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                offset: number;
                user_id: string;
            }, {
                offset: number;
                user_id: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            talent_id: string;
            creator_id?: string | undefined;
            application_id?: string | undefined;
            privacy?: number | undefined;
            notify_mentioned_user?: boolean | undefined;
            mention_entity_list?: {
                offset: number;
                user_id: string;
            }[] | undefined;
        }, {
            content: string;
            talent_id: string;
            creator_id?: string | undefined;
            application_id?: string | undefined;
            privacy?: number | undefined;
            notify_mentioned_user?: boolean | undefined;
            mention_entity_list?: {
                offset: number;
                user_id: string;
            }[] | undefined;
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
export declare const hireV1NoteDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            note_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            note_id?: string | undefined;
        }, {
            note_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1NoteGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        path: z.ZodObject<{
            note_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            note_id: string;
        }, {
            note_id: string;
        }>;
    };
};
export declare const hireV1NoteList: {
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
            talent_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            talent_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const hireV1NotePatch: {
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
            operator_id: z.ZodOptional<z.ZodString>;
            notify_mentioned_user: z.ZodOptional<z.ZodBoolean>;
            mention_entity_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                offset: z.ZodNumber;
                user_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                offset: number;
                user_id: string;
            }, {
                offset: number;
                user_id: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            operator_id?: string | undefined;
            notify_mentioned_user?: boolean | undefined;
            mention_entity_list?: {
                offset: number;
                user_id: string;
            }[] | undefined;
        }, {
            content: string;
            operator_id?: string | undefined;
            notify_mentioned_user?: boolean | undefined;
            mention_entity_list?: {
                offset: number;
                user_id: string;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        path: z.ZodObject<{
            note_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            note_id: string;
        }, {
            note_id: string;
        }>;
    };
};
export declare const hireV1OfferApplicationFormGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            offer_application_form_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_application_form_id?: string | undefined;
        }, {
            offer_application_form_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1OfferApplicationFormList: {
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
export declare const hireV1OfferCustomFieldUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
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
            config: z.ZodOptional<z.ZodObject<{
                options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodObject<{
                        zh_cn: z.ZodOptional<z.ZodString>;
                        en_us: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    }, {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }, {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                options?: {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }, {
                options?: {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
            };
            config?: {
                options?: {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            name: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
            };
            config?: {
                options?: {
                    name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            offer_custom_field_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_custom_field_id?: string | undefined;
        }, {
            offer_custom_field_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1OfferSchemaGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            offer_schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            offer_schema_id: string;
        }, {
            offer_schema_id: string;
        }>;
    };
};
export declare const hireV1OfferCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            application_id: z.ZodString;
            schema_id: z.ZodOptional<z.ZodString>;
            offer_type: z.ZodOptional<z.ZodNumber>;
            basic_info: z.ZodObject<{
                department_id: z.ZodString;
                leader_user_id: z.ZodString;
                employment_job_id: z.ZodOptional<z.ZodString>;
                employee_type_id: z.ZodOptional<z.ZodString>;
                job_family_id: z.ZodOptional<z.ZodString>;
                job_level_id: z.ZodOptional<z.ZodString>;
                probation_month: z.ZodOptional<z.ZodNumber>;
                contract_year: z.ZodOptional<z.ZodNumber>;
                contract_period: z.ZodOptional<z.ZodObject<{
                    period_type: z.ZodNumber;
                    period: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    period_type: number;
                    period: number;
                }, {
                    period_type: number;
                    period: number;
                }>>;
                expected_onboard_date: z.ZodOptional<z.ZodString>;
                onboard_address_id: z.ZodOptional<z.ZodString>;
                work_address_id: z.ZodOptional<z.ZodString>;
                owner_user_id: z.ZodString;
                recommended_words: z.ZodOptional<z.ZodString>;
                job_requirement_id: z.ZodOptional<z.ZodString>;
                job_process_type_id: z.ZodOptional<z.ZodNumber>;
                attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                common_attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                attachment_description: z.ZodOptional<z.ZodString>;
                operator_user_id: z.ZodString;
                position_id: z.ZodOptional<z.ZodString>;
                job_offered: z.ZodOptional<z.ZodString>;
                job_grade_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            }, {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            }>;
            salary_info: z.ZodOptional<z.ZodObject<{
                currency: z.ZodString;
                basic_salary: z.ZodOptional<z.ZodString>;
                probation_salary_percentage: z.ZodOptional<z.ZodString>;
                award_salary_multiple: z.ZodOptional<z.ZodString>;
                option_shares: z.ZodOptional<z.ZodString>;
                quarterly_bonus: z.ZodOptional<z.ZodString>;
                half_year_bonus: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            }, {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            }>>;
            customized_info_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                id?: string | undefined;
            }, {
                value?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            basic_info: {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            };
            application_id: string;
            schema_id?: string | undefined;
            offer_type?: number | undefined;
            salary_info?: {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            } | undefined;
            customized_info_list?: {
                value?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
        }, {
            basic_info: {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            };
            application_id: string;
            schema_id?: string | undefined;
            offer_type?: number | undefined;
            salary_info?: {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            } | undefined;
            customized_info_list?: {
                value?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
    };
};
export declare const hireV1OfferGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_id?: string | undefined;
        }, {
            offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1OfferInternOfferStatus: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operation: z.ZodEnum<["confirm_onboarding", "cancel_onboarding", "offboard"]>;
            onboarding_info: z.ZodOptional<z.ZodObject<{
                actual_onboarding_date: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                actual_onboarding_date: string;
            }, {
                actual_onboarding_date: string;
            }>>;
            offboarding_info: z.ZodOptional<z.ZodObject<{
                actual_offboarding_date: z.ZodString;
                notes: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                actual_offboarding_date: string;
                notes?: string | undefined;
            }, {
                actual_offboarding_date: string;
                notes?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            operation: "confirm_onboarding" | "cancel_onboarding" | "offboard";
            onboarding_info?: {
                actual_onboarding_date: string;
            } | undefined;
            offboarding_info?: {
                actual_offboarding_date: string;
                notes?: string | undefined;
            } | undefined;
        }, {
            operation: "confirm_onboarding" | "cancel_onboarding" | "offboard";
            onboarding_info?: {
                actual_onboarding_date: string;
            } | undefined;
            offboarding_info?: {
                actual_offboarding_date: string;
                notes?: string | undefined;
            } | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_id?: string | undefined;
        }, {
            offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1OfferList: {
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
            page_size: z.ZodOptional<z.ZodNumber>;
            talent_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            talent_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>;
    };
};
export declare const hireV1OfferOfferStatus: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            offer_status: z.ZodNumber;
            expiration_date: z.ZodOptional<z.ZodString>;
            termination_reason_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            termination_reason_note: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_status: number;
            expiration_date?: string | undefined;
            termination_reason_id_list?: string[] | undefined;
            termination_reason_note?: string | undefined;
        }, {
            offer_status: number;
            expiration_date?: string | undefined;
            termination_reason_id_list?: string[] | undefined;
            termination_reason_note?: string | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_id?: string | undefined;
        }, {
            offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1OfferUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            schema_id: z.ZodString;
            basic_info: z.ZodObject<{
                department_id: z.ZodString;
                leader_user_id: z.ZodString;
                employment_job_id: z.ZodOptional<z.ZodString>;
                employee_type_id: z.ZodOptional<z.ZodString>;
                job_family_id: z.ZodOptional<z.ZodString>;
                job_level_id: z.ZodOptional<z.ZodString>;
                probation_month: z.ZodOptional<z.ZodNumber>;
                contract_year: z.ZodOptional<z.ZodNumber>;
                contract_period: z.ZodOptional<z.ZodObject<{
                    period_type: z.ZodNumber;
                    period: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    period_type: number;
                    period: number;
                }, {
                    period_type: number;
                    period: number;
                }>>;
                expected_onboard_date: z.ZodOptional<z.ZodString>;
                onboard_address_id: z.ZodOptional<z.ZodString>;
                work_address_id: z.ZodOptional<z.ZodString>;
                owner_user_id: z.ZodString;
                recommended_words: z.ZodOptional<z.ZodString>;
                job_requirement_id: z.ZodOptional<z.ZodString>;
                job_process_type_id: z.ZodOptional<z.ZodNumber>;
                attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                common_attachment_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                attachment_description: z.ZodOptional<z.ZodString>;
                operator_user_id: z.ZodString;
                position_id: z.ZodOptional<z.ZodString>;
                job_offered: z.ZodOptional<z.ZodString>;
                job_grade_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            }, {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            }>;
            salary_info: z.ZodOptional<z.ZodObject<{
                currency: z.ZodString;
                basic_salary: z.ZodOptional<z.ZodString>;
                probation_salary_percentage: z.ZodOptional<z.ZodString>;
                award_salary_multiple: z.ZodOptional<z.ZodString>;
                option_shares: z.ZodOptional<z.ZodString>;
                quarterly_bonus: z.ZodOptional<z.ZodString>;
                half_year_bonus: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            }, {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            }>>;
            customized_info_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                id?: string | undefined;
            }, {
                value?: string | undefined;
                id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            basic_info: {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            };
            schema_id: string;
            salary_info?: {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            } | undefined;
            customized_info_list?: {
                value?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
        }, {
            basic_info: {
                department_id: string;
                operator_user_id: string;
                leader_user_id: string;
                owner_user_id: string;
                job_family_id?: string | undefined;
                job_level_id?: string | undefined;
                employee_type_id?: string | undefined;
                job_grade_id?: string | undefined;
                position_id?: string | undefined;
                job_requirement_id?: string | undefined;
                attachment_id_list?: string[] | undefined;
                employment_job_id?: string | undefined;
                probation_month?: number | undefined;
                contract_year?: number | undefined;
                contract_period?: {
                    period_type: number;
                    period: number;
                } | undefined;
                expected_onboard_date?: string | undefined;
                onboard_address_id?: string | undefined;
                work_address_id?: string | undefined;
                recommended_words?: string | undefined;
                job_process_type_id?: number | undefined;
                common_attachment_id_list?: string[] | undefined;
                attachment_description?: string | undefined;
                job_offered?: string | undefined;
            };
            schema_id: string;
            salary_info?: {
                currency: string;
                basic_salary?: string | undefined;
                probation_salary_percentage?: string | undefined;
                award_salary_multiple?: string | undefined;
                option_shares?: string | undefined;
                quarterly_bonus?: string | undefined;
                half_year_bonus?: string | undefined;
            } | undefined;
            customized_info_list?: {
                value?: string | undefined;
                id?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            job_family_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_category_id", "job_family_id"]>>;
            employee_type_id_type: z.ZodOptional<z.ZodEnum<["people_admin_employee_type_id", "employee_type_enum_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            job_family_id_type?: "job_family_id" | "people_admin_job_category_id" | undefined;
            employee_type_id_type?: "people_admin_employee_type_id" | "employee_type_enum_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            offer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            offer_id?: string | undefined;
        }, {
            offer_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1QuestionnaireList: {
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
            application_id: z.ZodOptional<z.ZodString>;
            interview_id: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
            interview_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            application_id?: string | undefined;
            interview_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ReferralAccountCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            mobile: z.ZodOptional<z.ZodObject<{
                code: z.ZodOptional<z.ZodString>;
                number: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                number?: string | undefined;
                code?: string | undefined;
            }, {
                number?: string | undefined;
                code?: string | undefined;
            }>>;
            email: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mobile?: {
                number?: string | undefined;
                code?: string | undefined;
            } | undefined;
            email?: string | undefined;
        }, {
            mobile?: {
                number?: string | undefined;
                code?: string | undefined;
            } | undefined;
            email?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const hireV1ReferralAccountDeactivate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            referral_account_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            referral_account_id?: string | undefined;
        }, {
            referral_account_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ReferralAccountEnable: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            referral_account_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            referral_account_id?: string | undefined;
        }, {
            referral_account_id?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const hireV1ReferralAccountGetAccountAssets: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            referral_account_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            referral_account_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            referral_account_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const hireV1ReferralAccountReconciliation: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            start_trans_time: z.ZodString;
            end_trans_time: z.ZodString;
            trade_details: z.ZodOptional<z.ZodArray<z.ZodObject<{
                account_id: z.ZodString;
                total_recharge_reward_info: z.ZodOptional<z.ZodObject<{
                    point_bonus: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    point_bonus?: number | undefined;
                }, {
                    point_bonus?: number | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                account_id: string;
                total_recharge_reward_info?: {
                    point_bonus?: number | undefined;
                } | undefined;
            }, {
                account_id: string;
                total_recharge_reward_info?: {
                    point_bonus?: number | undefined;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            start_trans_time: string;
            end_trans_time: string;
            trade_details?: {
                account_id: string;
                total_recharge_reward_info?: {
                    point_bonus?: number | undefined;
                } | undefined;
            }[] | undefined;
        }, {
            start_trans_time: string;
            end_trans_time: string;
            trade_details?: {
                account_id: string;
                total_recharge_reward_info?: {
                    point_bonus?: number | undefined;
                } | undefined;
            }[] | undefined;
        }>;
    };
};
export declare const hireV1ReferralAccountWithdraw: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            withdraw_bonus_type: z.ZodArray<z.ZodNumber, "many">;
            external_order_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            withdraw_bonus_type: number[];
            external_order_id: string;
        }, {
            withdraw_bonus_type: number[];
            external_order_id: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            referral_account_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            referral_account_id?: string | undefined;
        }, {
            referral_account_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1ReferralWebsiteJobPostGet: {
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
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }>>;
        path: z.ZodObject<{
            job_post_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_post_id: string;
        }, {
            job_post_id: string;
        }>;
    };
};
export declare const hireV1ReferralWebsiteJobPostList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            process_type: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            process_type?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            process_type?: number | undefined;
        }>>;
    };
};
export declare const hireV1ReferralGetByApplication: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            application_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            application_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            application_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const hireV1ReferralSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            start_time?: string | undefined;
            end_time?: string | undefined;
        }, {
            talent_id: string;
            start_time?: string | undefined;
            end_time?: string | undefined;
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
export declare const hireV1RegistrationSchemaList: {
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
            scenario: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            scenario?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            scenario?: number | undefined;
        }>>;
    };
};
export declare const hireV1ResumeSourceList: {
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
export declare const hireV1RoleGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            role_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            role_id?: string | undefined;
        }, {
            role_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1RoleList: {
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
export declare const hireV1SubjectList: {
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
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
export declare const hireV1TalentBlocklistChangeTalentBlock: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            option: z.ZodNumber;
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            option: number;
            reason?: string | undefined;
        }, {
            talent_id: string;
            option: number;
            reason?: string | undefined;
        }>;
    };
};
export declare const hireV1TalentFolderList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
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
export declare const hireV1TalentObjectQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
};
export declare const hireV1TalentOperationLogSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            job_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            operator_id_list: z.ZodArray<z.ZodString, "many">;
            operation_list: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            operator_id_list: string[];
            operation_list: number[];
            job_id_list?: string[] | undefined;
        }, {
            operator_id_list: string[];
            operation_list: number[];
            job_id_list?: string[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
export declare const hireV1TalentPoolBatchChangeTalentPool: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id_list: z.ZodArray<z.ZodString, "many">;
            option_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            talent_id_list: string[];
            option_type: number;
        }, {
            talent_id_list: string[];
            option_type: number;
        }>;
        path: z.ZodObject<{
            talent_pool_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_pool_id: string;
        }, {
            talent_pool_id: string;
        }>;
    };
};
export declare const hireV1TalentPoolMoveTalent: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            add_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
            add_type: number;
        }, {
            talent_id: string;
            add_type: number;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            talent_pool_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_pool_id?: string | undefined;
        }, {
            talent_pool_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1TalentPoolSearch: {
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
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            id_list?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            id_list?: string[] | undefined;
        }>>;
    };
};
export declare const hireV1TalentTagList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            keyword: z.ZodOptional<z.ZodString>;
            id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            type: z.ZodOptional<z.ZodNumber>;
            include_inactive: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            id_list?: string[] | undefined;
            include_inactive?: boolean | undefined;
        }, {
            type?: number | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            id_list?: string[] | undefined;
            include_inactive?: boolean | undefined;
        }>>;
    };
};
export declare const hireV1TalentAddToFolder: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id_list: z.ZodArray<z.ZodString, "many">;
            folder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id_list: string[];
            folder_id: string;
        }, {
            talent_id_list: string[];
            folder_id: string;
        }>;
    };
};
export declare const hireV1TalentBatchGetId: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            mobile_code: z.ZodOptional<z.ZodString>;
            mobile_number_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            email_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            identification_type: z.ZodOptional<z.ZodNumber>;
            identification_number_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            identification_type?: number | undefined;
            email_list?: string[] | undefined;
            mobile_code?: string | undefined;
            mobile_number_list?: string[] | undefined;
            identification_number_list?: string[] | undefined;
        }, {
            identification_type?: number | undefined;
            email_list?: string[] | undefined;
            mobile_code?: string | undefined;
            mobile_number_list?: string[] | undefined;
            identification_number_list?: string[] | undefined;
        }>>;
    };
};
export declare const hireV1TalentCombinedCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            init_source_id: z.ZodOptional<z.ZodString>;
            folder_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            creator_id: z.ZodOptional<z.ZodString>;
            creator_account_type: z.ZodOptional<z.ZodNumber>;
            resume_attachment_id: z.ZodOptional<z.ZodString>;
            basic_info: z.ZodObject<{
                name: z.ZodString;
                mobile: z.ZodOptional<z.ZodString>;
                mobile_country_code: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                identification: z.ZodOptional<z.ZodObject<{
                    identification_type: z.ZodOptional<z.ZodNumber>;
                    identification_number: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                }, {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                }>>;
                start_work_time: z.ZodOptional<z.ZodString>;
                birthday: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNumber>;
                nationality_id: z.ZodOptional<z.ZodString>;
                current_city_code: z.ZodOptional<z.ZodString>;
                hometown_city_code: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>;
            education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                degree: z.ZodOptional<z.ZodNumber>;
                school: z.ZodOptional<z.ZodString>;
                field_of_study: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                education_type: z.ZodOptional<z.ZodNumber>;
                academic_ranking: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }, {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }>, "many">>;
            career_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                company: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                career_type: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }>, "many">>;
            project_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
                link: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            works_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                link: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                attachment_id: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            award_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                award_time: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }>, "many">>;
            language_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                language: z.ZodOptional<z.ZodNumber>;
                proficiency: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }, {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }>, "many">>;
            sns_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                sns_type: z.ZodOptional<z.ZodNumber>;
                link: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }>, "many">>;
            preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            self_evaluation: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                content: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>>;
            customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }, {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }, {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            basic_info: {
                name: string;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            };
            creator_id?: string | undefined;
            education_list?: {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }[] | undefined;
            init_source_id?: string | undefined;
            folder_id_list?: string[] | undefined;
            creator_account_type?: number | undefined;
            resume_attachment_id?: string | undefined;
            customized_data?: {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            career_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }[] | undefined;
            project_list?: {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            works_list?: {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            award_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }[] | undefined;
            language_list?: {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }[] | undefined;
            sns_list?: {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }[] | undefined;
            preferred_city_code_list?: string[] | undefined;
            self_evaluation?: {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            basic_info: {
                name: string;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            };
            creator_id?: string | undefined;
            education_list?: {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }[] | undefined;
            init_source_id?: string | undefined;
            folder_id_list?: string[] | undefined;
            creator_account_type?: number | undefined;
            resume_attachment_id?: string | undefined;
            customized_data?: {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            career_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }[] | undefined;
            project_list?: {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            works_list?: {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            award_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }[] | undefined;
            language_list?: {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }[] | undefined;
            sns_list?: {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }[] | undefined;
            preferred_city_code_list?: string[] | undefined;
            self_evaluation?: {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            } | undefined;
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
export declare const hireV1TalentCombinedUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id: z.ZodString;
            init_source_id: z.ZodOptional<z.ZodString>;
            folder_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            operator_id: z.ZodOptional<z.ZodString>;
            operator_account_type: z.ZodOptional<z.ZodNumber>;
            resume_attachment_id: z.ZodOptional<z.ZodString>;
            basic_info: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                mobile: z.ZodOptional<z.ZodString>;
                mobile_country_code: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                identification: z.ZodOptional<z.ZodObject<{
                    identification_type: z.ZodOptional<z.ZodNumber>;
                    identification_number: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                }, {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                }>>;
                start_work_time: z.ZodOptional<z.ZodString>;
                birthday: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNumber>;
                nationality_id: z.ZodOptional<z.ZodString>;
                current_city_code: z.ZodOptional<z.ZodString>;
                hometown_city_code: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                name?: string | undefined;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>;
            education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                degree: z.ZodOptional<z.ZodNumber>;
                school: z.ZodOptional<z.ZodString>;
                field_of_study: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                education_type: z.ZodOptional<z.ZodNumber>;
                academic_ranking: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }, {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }>, "many">>;
            career_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                company: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                career_type: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }>, "many">>;
            project_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
                link: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            works_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                link: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                attachment_id: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            award_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                award_time: z.ZodOptional<z.ZodString>;
                desc: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }, {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }>, "many">>;
            language_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                language: z.ZodOptional<z.ZodNumber>;
                proficiency: z.ZodOptional<z.ZodNumber>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }, {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }>, "many">>;
            sns_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                sns_type: z.ZodOptional<z.ZodNumber>;
                link: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }, {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }>, "many">>;
            preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            self_evaluation: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                content: z.ZodOptional<z.ZodString>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }, {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }>>;
            customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                object_id: z.ZodOptional<z.ZodString>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }, {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }, {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            basic_info: {
                name?: string | undefined;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            };
            talent_id: string;
            operator_id?: string | undefined;
            education_list?: {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }[] | undefined;
            init_source_id?: string | undefined;
            folder_id_list?: string[] | undefined;
            resume_attachment_id?: string | undefined;
            customized_data?: {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            career_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }[] | undefined;
            project_list?: {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            works_list?: {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            award_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }[] | undefined;
            language_list?: {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }[] | undefined;
            sns_list?: {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }[] | undefined;
            preferred_city_code_list?: string[] | undefined;
            self_evaluation?: {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            } | undefined;
            operator_account_type?: number | undefined;
        }, {
            basic_info: {
                name?: string | undefined;
                mobile?: string | undefined;
                email?: string | undefined;
                gender?: number | undefined;
                nationality_id?: string | undefined;
                birthday?: string | undefined;
                mobile_country_code?: string | undefined;
                identification?: {
                    identification_type?: number | undefined;
                    identification_number?: string | undefined;
                } | undefined;
                start_work_time?: string | undefined;
                current_city_code?: string | undefined;
                hometown_city_code?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            };
            talent_id: string;
            operator_id?: string | undefined;
            education_list?: {
                id?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                school?: string | undefined;
                field_of_study?: string | undefined;
                degree?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                education_type?: number | undefined;
                academic_ranking?: number | undefined;
            }[] | undefined;
            init_source_id?: string | undefined;
            folder_id_list?: string[] | undefined;
            resume_attachment_id?: string | undefined;
            customized_data?: {
                children?: {
                    value?: string | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                object_id?: string | undefined;
            }[] | undefined;
            career_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                company?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_type?: number | undefined;
            }[] | undefined;
            project_list?: {
                link?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                desc?: string | undefined;
                start_time?: string | undefined;
                end_time?: string | undefined;
                role?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            works_list?: {
                link?: string | undefined;
                id?: string | undefined;
                desc?: string | undefined;
                attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            award_list?: {
                id?: string | undefined;
                title?: string | undefined;
                desc?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                award_time?: string | undefined;
            }[] | undefined;
            language_list?: {
                id?: string | undefined;
                language?: number | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                proficiency?: number | undefined;
            }[] | undefined;
            sns_list?: {
                link?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                sns_type?: number | undefined;
            }[] | undefined;
            preferred_city_code_list?: string[] | undefined;
            self_evaluation?: {
                content?: string | undefined;
                id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
            } | undefined;
            operator_account_type?: number | undefined;
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
export declare const hireV1TalentExternalInfoCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_create_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_create_time: string;
        }, {
            external_create_time: string;
        }>;
        path: z.ZodObject<{
            talent_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
        }, {
            talent_id: string;
        }>;
    };
};
export declare const hireV1TalentExternalInfoUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            external_create_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            external_create_time: string;
        }, {
            external_create_time: string;
        }>;
        path: z.ZodObject<{
            talent_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
        }, {
            talent_id: string;
        }>;
    };
};
export declare const hireV1TalentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        path: z.ZodObject<{
            talent_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
        }, {
            talent_id: string;
        }>;
    };
};
export declare const hireV1TalentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            keyword: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            sort_by: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            query_option: z.ZodOptional<z.ZodLiteral<"ignore_empty_error">>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            keyword?: string | undefined;
            sort_by?: number | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            query_option?: "ignore_empty_error" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            keyword?: string | undefined;
            sort_by?: number | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            query_option?: "ignore_empty_error" | undefined;
        }>>;
    };
};
export declare const hireV1TalentOnboardStatus: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operation: z.ZodNumber;
            onboard_time: z.ZodOptional<z.ZodString>;
            overboard_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            operation: number;
            onboard_time?: string | undefined;
            overboard_time?: string | undefined;
        }, {
            operation: number;
            onboard_time?: string | undefined;
            overboard_time?: string | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            talent_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            talent_id?: string | undefined;
        }, {
            talent_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1TalentRemoveToFolder: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            talent_id_list: z.ZodArray<z.ZodString, "many">;
            folder_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id_list: string[];
            folder_id: string;
        }, {
            talent_id_list: string[];
            folder_id: string;
        }>;
    };
};
export declare const hireV1TalentTag: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            operation: z.ZodNumber;
            tag_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            operation: number;
            tag_id_list: string[];
        }, {
            operation: number;
            tag_id_list: string[];
        }>;
        path: z.ZodObject<{
            talent_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            talent_id: string;
        }, {
            talent_id: string;
        }>;
    };
};
export declare const hireV1TerminationReasonList: {
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
export declare const hireV1TestSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            application_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            test_start_time_min: z.ZodOptional<z.ZodString>;
            test_start_time_max: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            application_id_list?: string[] | undefined;
            test_start_time_min?: string | undefined;
            test_start_time_max?: string | undefined;
        }, {
            application_id_list?: string[] | undefined;
            test_start_time_min?: string | undefined;
            test_start_time_max?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
export declare const hireV1TodoList: {
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
            page_size: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            type: z.ZodEnum<["evaluation", "offer", "exam", "interview"]>;
        }, "strip", z.ZodTypeAny, {
            type: "evaluation" | "offer" | "exam" | "interview";
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            type: "evaluation" | "offer" | "exam" | "interview";
            page_size?: string | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const hireV1TripartiteAgreementCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            application_id: z.ZodString;
            state: z.ZodNumber;
            create_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            create_time: string;
            application_id: string;
            state: number;
        }, {
            create_time: string;
            application_id: string;
            state: number;
        }>;
    };
};
export declare const hireV1TripartiteAgreementDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            tripartite_agreement_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tripartite_agreement_id?: string | undefined;
        }, {
            tripartite_agreement_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1TripartiteAgreementList: {
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
            application_id: z.ZodOptional<z.ZodString>;
            tripartite_agreement_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            application_id?: string | undefined;
            tripartite_agreement_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            application_id?: string | undefined;
            tripartite_agreement_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1TripartiteAgreementUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            state: z.ZodNumber;
            modify_time: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            state: number;
            modify_time: string;
        }, {
            state: number;
            modify_time: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            tripartite_agreement_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tripartite_agreement_id?: string | undefined;
        }, {
            tripartite_agreement_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1UserRoleList: {
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
            user_id: z.ZodOptional<z.ZodString>;
            role_id: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            role_id?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            role_id?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteChannelCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            channel_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            channel_name: string;
        }, {
            channel_name: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
        }, {
            website_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteChannelDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
            channel_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
            channel_id?: string | undefined;
        }, {
            website_id?: string | undefined;
            channel_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteChannelList: {
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
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
        }, {
            website_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteChannelUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            channel_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            channel_name: string;
        }, {
            channel_name: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
            channel_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
            channel_id?: string | undefined;
        }, {
            website_id?: string | undefined;
            channel_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteDeliveryTaskGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            website_id: z.ZodString;
            delivery_task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            website_id: string;
            delivery_task_id: string;
        }, {
            website_id: string;
            delivery_task_id: string;
        }>;
    };
};
export declare const hireV1WebsiteDeliveryCreateByAttachment: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            job_post_id: z.ZodString;
            user_id: z.ZodString;
            resume_file_id: z.ZodString;
            channel_id: z.ZodOptional<z.ZodString>;
            application_preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mobile_country_code: z.ZodOptional<z.ZodString>;
            mobile: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            identification: z.ZodOptional<z.ZodObject<{
                identification_type: z.ZodOptional<z.ZodNumber>;
                identification_number: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                identification_type?: number | undefined;
                identification_number?: string | undefined;
            }, {
                identification_type?: number | undefined;
                identification_number?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            job_post_id: string;
            resume_file_id: string;
            mobile?: string | undefined;
            email?: string | undefined;
            application_preferred_city_code_list?: string[] | undefined;
            mobile_country_code?: string | undefined;
            identification?: {
                identification_type?: number | undefined;
                identification_number?: string | undefined;
            } | undefined;
            channel_id?: string | undefined;
        }, {
            user_id: string;
            job_post_id: string;
            resume_file_id: string;
            mobile?: string | undefined;
            email?: string | undefined;
            application_preferred_city_code_list?: string[] | undefined;
            mobile_country_code?: string | undefined;
            identification?: {
                identification_type?: number | undefined;
                identification_number?: string | undefined;
            } | undefined;
            channel_id?: string | undefined;
        }>;
        path: z.ZodObject<{
            website_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            website_id: string;
        }, {
            website_id: string;
        }>;
    };
};
export declare const hireV1WebsiteDeliveryCreateByResume: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            job_post_id: z.ZodString;
            resume: z.ZodObject<{
                internship_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    desc: z.ZodOptional<z.ZodString>;
                    end_time: z.ZodOptional<z.ZodNumber>;
                    start_time: z.ZodOptional<z.ZodNumber>;
                    title: z.ZodOptional<z.ZodString>;
                    company: z.ZodOptional<z.ZodString>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }>, "many">>;
                basic_info: z.ZodObject<{
                    nationality_id: z.ZodOptional<z.ZodString>;
                    start_work_time: z.ZodOptional<z.ZodNumber>;
                    current_home_address: z.ZodOptional<z.ZodString>;
                    hometown_city_code: z.ZodOptional<z.ZodString>;
                    mobile_country_code: z.ZodOptional<z.ZodString>;
                    identification: z.ZodOptional<z.ZodObject<{
                        identification_number: z.ZodOptional<z.ZodString>;
                        identification_type: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    }, {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    }>>;
                    marital_status: z.ZodOptional<z.ZodNumber>;
                    mobile: z.ZodOptional<z.ZodString>;
                    current_city_code: z.ZodOptional<z.ZodString>;
                    experience_years: z.ZodOptional<z.ZodNumber>;
                    gender: z.ZodOptional<z.ZodNumber>;
                    birthday: z.ZodOptional<z.ZodNumber>;
                    name: z.ZodString;
                    preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    resume_source_id: z.ZodOptional<z.ZodString>;
                    age: z.ZodOptional<z.ZodNumber>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    email: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                }, {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                }>;
                education_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    education_type: z.ZodOptional<z.ZodNumber>;
                    end_time: z.ZodOptional<z.ZodNumber>;
                    end_time_v2: z.ZodOptional<z.ZodNumber>;
                    field_of_study: z.ZodOptional<z.ZodString>;
                    school: z.ZodOptional<z.ZodString>;
                    start_time: z.ZodOptional<z.ZodNumber>;
                    academic_ranking: z.ZodOptional<z.ZodNumber>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    degree: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }, {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }>, "many">>;
                self_evaluation: z.ZodOptional<z.ZodObject<{
                    content: z.ZodOptional<z.ZodString>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }, {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }>>;
                career_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    desc: z.ZodOptional<z.ZodString>;
                    end_time: z.ZodOptional<z.ZodNumber>;
                    start_time: z.ZodOptional<z.ZodNumber>;
                    title: z.ZodOptional<z.ZodString>;
                    company: z.ZodOptional<z.ZodString>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }>, "many">>;
                customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    object_id: z.ZodOptional<z.ZodString>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }, {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }>, "many">>;
                resume_attachment_id: z.ZodOptional<z.ZodString>;
                sns_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    sns_type: z.ZodOptional<z.ZodNumber>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }, {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }>, "many">>;
                works_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    desc: z.ZodOptional<z.ZodString>;
                    link: z.ZodOptional<z.ZodString>;
                    attachment: z.ZodOptional<z.ZodObject<{
                        file_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        file_id?: string | undefined;
                    }, {
                        file_id?: string | undefined;
                    }>>;
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }, {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }>, "many">>;
                award_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    desc: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    award_time: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }, {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }>, "many">>;
                project_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    desc: z.ZodOptional<z.ZodString>;
                    end_time: z.ZodOptional<z.ZodNumber>;
                    link: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    role: z.ZodOptional<z.ZodString>;
                    start_time: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }, {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }>, "many">>;
                language_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    customized_data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        object_id: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }, {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }>, "many">>;
                    language: z.ZodOptional<z.ZodNumber>;
                    proficiency: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }, {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                basic_info: {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                };
                education_list?: {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }[] | undefined;
                resume_attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                project_list?: {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                works_list?: {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }[] | undefined;
                award_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }[] | undefined;
                language_list?: {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }[] | undefined;
                sns_list?: {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }[] | undefined;
                self_evaluation?: {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                } | undefined;
                internship_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }, {
                basic_info: {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                };
                education_list?: {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }[] | undefined;
                resume_attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                project_list?: {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                works_list?: {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }[] | undefined;
                award_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }[] | undefined;
                language_list?: {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }[] | undefined;
                sns_list?: {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }[] | undefined;
                self_evaluation?: {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                } | undefined;
                internship_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }>;
            user_id: z.ZodString;
            application_preferred_city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channel_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            resume: {
                basic_info: {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                };
                education_list?: {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }[] | undefined;
                resume_attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                project_list?: {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                works_list?: {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }[] | undefined;
                award_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }[] | undefined;
                language_list?: {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }[] | undefined;
                sns_list?: {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }[] | undefined;
                self_evaluation?: {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                } | undefined;
                internship_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            };
            user_id: string;
            job_post_id: string;
            application_preferred_city_code_list?: string[] | undefined;
            channel_id?: string | undefined;
        }, {
            resume: {
                basic_info: {
                    name: string;
                    mobile?: string | undefined;
                    email?: string | undefined;
                    gender?: number | undefined;
                    nationality_id?: string | undefined;
                    marital_status?: number | undefined;
                    age?: number | undefined;
                    birthday?: number | undefined;
                    resume_source_id?: string | undefined;
                    mobile_country_code?: string | undefined;
                    identification?: {
                        identification_type?: number | undefined;
                        identification_number?: string | undefined;
                    } | undefined;
                    start_work_time?: number | undefined;
                    current_city_code?: string | undefined;
                    hometown_city_code?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    preferred_city_code_list?: string[] | undefined;
                    current_home_address?: string | undefined;
                    experience_years?: number | undefined;
                };
                education_list?: {
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    school?: string | undefined;
                    field_of_study?: string | undefined;
                    degree?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    education_type?: number | undefined;
                    academic_ranking?: number | undefined;
                    end_time_v2?: number | undefined;
                }[] | undefined;
                resume_attachment_id?: string | undefined;
                customized_data?: {
                    children?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    object_id?: string | undefined;
                }[] | undefined;
                career_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                project_list?: {
                    link?: string | undefined;
                    name?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    role?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                works_list?: {
                    link?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    attachment?: {
                        file_id?: string | undefined;
                    } | undefined;
                }[] | undefined;
                award_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    award_time?: number | undefined;
                }[] | undefined;
                language_list?: {
                    language?: number | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    proficiency?: number | undefined;
                }[] | undefined;
                sns_list?: {
                    link?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                    sns_type?: number | undefined;
                }[] | undefined;
                self_evaluation?: {
                    content?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                } | undefined;
                internship_list?: {
                    title?: string | undefined;
                    desc?: string | undefined;
                    start_time?: number | undefined;
                    end_time?: number | undefined;
                    company?: string | undefined;
                    customized_data?: {
                        value?: string | undefined;
                        object_id?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            };
            user_id: string;
            job_post_id: string;
            application_preferred_city_code_list?: string[] | undefined;
            channel_id?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            website_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            website_id: string;
        }, {
            website_id: string;
        }>;
    };
};
export declare const hireV1WebsiteJobPostGet: {
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
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }>>;
        path: z.ZodObject<{
            website_id: z.ZodString;
            job_post_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            job_post_id: string;
            website_id: string;
        }, {
            job_post_id: string;
            website_id: string;
        }>;
    };
};
export declare const hireV1WebsiteJobPostList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            create_start_time: z.ZodOptional<z.ZodString>;
            create_end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            create_start_time?: string | undefined;
            create_end_time?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
            create_start_time?: string | undefined;
            create_end_time?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
        }, {
            website_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteJobPostSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            job_type_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            city_code_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            job_function_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            subject_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            keyword: z.ZodOptional<z.ZodString>;
            update_start_time: z.ZodOptional<z.ZodString>;
            update_end_time: z.ZodOptional<z.ZodString>;
            create_start_time: z.ZodOptional<z.ZodString>;
            create_end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            keyword?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            create_start_time?: string | undefined;
            create_end_time?: string | undefined;
            job_type_id_list?: string[] | undefined;
            city_code_list?: string[] | undefined;
            job_function_id_list?: string[] | undefined;
            subject_id_list?: string[] | undefined;
        }, {
            keyword?: string | undefined;
            update_start_time?: string | undefined;
            update_end_time?: string | undefined;
            create_start_time?: string | undefined;
            create_end_time?: string | undefined;
            job_type_id_list?: string[] | undefined;
            city_code_list?: string[] | undefined;
            job_function_id_list?: string[] | undefined;
            subject_id_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            department_id_type: z.ZodOptional<z.ZodEnum<["open_department_id", "department_id"]>>;
            job_level_id_type: z.ZodOptional<z.ZodEnum<["people_admin_job_level_id", "job_level_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            department_id_type?: "department_id" | "open_department_id" | undefined;
            job_level_id_type?: "job_level_id" | "people_admin_job_level_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            website_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            website_id?: string | undefined;
        }, {
            website_id?: string | undefined;
        }>>;
    };
};
export declare const hireV1WebsiteList: {
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
export declare const hireV1WebsiteSiteUserCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            external_id: z.ZodString;
            mobile: z.ZodOptional<z.ZodString>;
            mobile_country_code: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            external_id: string;
            name?: string | undefined;
            mobile?: string | undefined;
            email?: string | undefined;
            mobile_country_code?: string | undefined;
        }, {
            external_id: string;
            name?: string | undefined;
            mobile?: string | undefined;
            email?: string | undefined;
            mobile_country_code?: string | undefined;
        }>;
        path: z.ZodObject<{
            website_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            website_id: string;
        }, {
            website_id: string;
        }>;
    };
};
export declare const hireV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
}[];
