import { z } from 'zod';
export type performanceV1ToolName = 'performance.v1.reviewData.query' | 'performance.v1.semester.list' | 'performance.v1.stageTask.findByPage' | 'performance.v1.stageTask.findByUserList';
export declare const performanceV1ReviewDataQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            stage_types: z.ZodArray<z.ZodEnum<["leader_review", "communication_and_open_result", "view_result"]>, "many">;
            stage_progress: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            semester_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            reviewee_user_id_list: z.ZodArray<z.ZodString, "many">;
            updated_later_than: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            stage_types: ("leader_review" | "communication_and_open_result" | "view_result")[];
            reviewee_user_id_list: string[];
            stage_progress?: number[] | undefined;
            semester_id_list?: string[] | undefined;
            updated_later_than?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            stage_types: ("leader_review" | "communication_and_open_result" | "view_result")[];
            reviewee_user_id_list: string[];
            stage_progress?: number[] | undefined;
            semester_id_list?: string[] | undefined;
            updated_later_than?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const performanceV1SemesterList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            year: z.ZodOptional<z.ZodNumber>;
            type_group: z.ZodOptional<z.ZodEnum<["Annual", "Semi-annual", "Quarter", "Bimonth", "Month", "Non-standard"]>>;
            type: z.ZodOptional<z.ZodEnum<["Annual", "H1", "H2", "Q1", "Q2", "Q3", "Q4", "January-February", "March-April", "May-June", "July-August", "September-October", "November-December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Custom"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "Annual" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | "January-February" | "March-April" | "May-June" | "July-August" | "September-October" | "November-December" | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" | "Custom" | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            year?: number | undefined;
            type_group?: "Annual" | "Semi-annual" | "Quarter" | "Bimonth" | "Month" | "Non-standard" | undefined;
        }, {
            type?: "Annual" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | "January-February" | "March-April" | "May-June" | "July-August" | "September-October" | "November-December" | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" | "Custom" | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            year?: number | undefined;
            type_group?: "Annual" | "Semi-annual" | "Quarter" | "Bimonth" | "Month" | "Non-standard" | undefined;
        }>>;
    };
};
export declare const performanceV1StageTaskFindByPage: {
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
            task_option_lists: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            after_time: z.ZodOptional<z.ZodString>;
            before_time: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }, {
            semester_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
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
export declare const performanceV1StageTaskFindByUserList: {
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
            user_id_lists: z.ZodArray<z.ZodString, "many">;
            task_option_lists: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            after_time: z.ZodOptional<z.ZodString>;
            before_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            user_id_lists: string[];
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }, {
            semester_id: string;
            user_id_lists: string[];
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const performanceV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            stage_types: z.ZodArray<z.ZodEnum<["leader_review", "communication_and_open_result", "view_result"]>, "many">;
            stage_progress: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            semester_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            reviewee_user_id_list: z.ZodArray<z.ZodString, "many">;
            updated_later_than: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            stage_types: ("leader_review" | "communication_and_open_result" | "view_result")[];
            reviewee_user_id_list: string[];
            stage_progress?: number[] | undefined;
            semester_id_list?: string[] | undefined;
            updated_later_than?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            stage_types: ("leader_review" | "communication_and_open_result" | "view_result")[];
            reviewee_user_id_list: string[];
            stage_progress?: number[] | undefined;
            semester_id_list?: string[] | undefined;
            updated_later_than?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
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
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            year: z.ZodOptional<z.ZodNumber>;
            type_group: z.ZodOptional<z.ZodEnum<["Annual", "Semi-annual", "Quarter", "Bimonth", "Month", "Non-standard"]>>;
            type: z.ZodOptional<z.ZodEnum<["Annual", "H1", "H2", "Q1", "Q2", "Q3", "Q4", "January-February", "March-April", "May-June", "July-August", "September-October", "November-December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Custom"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "Annual" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | "January-February" | "March-April" | "May-June" | "July-August" | "September-October" | "November-December" | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" | "Custom" | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            year?: number | undefined;
            type_group?: "Annual" | "Semi-annual" | "Quarter" | "Bimonth" | "Month" | "Non-standard" | undefined;
        }, {
            type?: "Annual" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | "January-February" | "March-April" | "May-June" | "July-August" | "September-October" | "November-December" | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" | "Custom" | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            year?: number | undefined;
            type_group?: "Annual" | "Semi-annual" | "Quarter" | "Bimonth" | "Month" | "Non-standard" | undefined;
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
            task_option_lists: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            after_time: z.ZodOptional<z.ZodString>;
            before_time: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }, {
            semester_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
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
        data: z.ZodObject<{
            semester_id: z.ZodString;
            user_id_lists: z.ZodArray<z.ZodString, "many">;
            task_option_lists: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            after_time: z.ZodOptional<z.ZodString>;
            before_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            semester_id: string;
            user_id_lists: string[];
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }, {
            semester_id: string;
            user_id_lists: string[];
            task_option_lists?: number[] | undefined;
            after_time?: string | undefined;
            before_time?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
