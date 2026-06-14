import { z } from 'zod';
export type attendanceV1ToolName = 'attendance.v1.approvalInfo.process' | 'attendance.v1.archiveRule.delReport' | 'attendance.v1.archiveRule.list' | 'attendance.v1.archiveRule.uploadReport' | 'attendance.v1.archiveRule.userStatsFieldsQuery' | 'attendance.v1.group.create' | 'attendance.v1.group.delete' | 'attendance.v1.group.get' | 'attendance.v1.group.list' | 'attendance.v1.group.listUser' | 'attendance.v1.group.search' | 'attendance.v1.leaveAccrualRecord.patch' | 'attendance.v1.leaveEmployExpireRecord.get' | 'attendance.v1.shift.create' | 'attendance.v1.shift.delete' | 'attendance.v1.shift.get' | 'attendance.v1.shift.list' | 'attendance.v1.shift.query' | 'attendance.v1.userApproval.create' | 'attendance.v1.userApproval.query' | 'attendance.v1.userDailyShift.batchCreate' | 'attendance.v1.userDailyShift.batchCreateTemp' | 'attendance.v1.userDailyShift.query' | 'attendance.v1.userFlow.batchCreate' | 'attendance.v1.userFlow.batchDel' | 'attendance.v1.userFlow.get' | 'attendance.v1.userFlow.query' | 'attendance.v1.userSetting.modify' | 'attendance.v1.userSetting.query' | 'attendance.v1.userStatsData.query' | 'attendance.v1.userStatsField.query' | 'attendance.v1.userStatsView.query' | 'attendance.v1.userStatsView.update' | 'attendance.v1.userTaskRemedy.create' | 'attendance.v1.userTaskRemedy.query' | 'attendance.v1.userTaskRemedy.queryUserAllowedRemedys' | 'attendance.v1.userTask.query';
export declare const attendanceV1ApprovalInfoProcess: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_id: z.ZodString;
            approval_type: z.ZodString;
            status: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: number;
            approval_id: string;
            approval_type: string;
        }, {
            status: number;
            approval_id: string;
            approval_type: string;
        }>;
    };
};
export declare const attendanceV1ArchiveRuleDelReport: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            month: z.ZodString;
            operator_id: z.ZodString;
            archive_rule_id: z.ZodString;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            user_ids?: string[] | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            user_ids?: string[] | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const attendanceV1ArchiveRuleList: {
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
export declare const attendanceV1ArchiveRuleUploadReport: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            month: z.ZodString;
            operator_id: z.ZodString;
            archive_report_datas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                member_id: z.ZodString;
                start_time: z.ZodString;
                end_time: z.ZodString;
                field_datas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    value: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    value?: string | undefined;
                }, {
                    code: string;
                    value?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }, {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            archive_rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            archive_report_datas?: {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            archive_report_datas?: {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const attendanceV1ArchiveRuleUserStatsFieldsQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            locale: z.ZodOptional<z.ZodString>;
            month: z.ZodString;
            archive_rule_id: z.ZodString;
            operator_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            locale?: string | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            locale?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const attendanceV1GroupCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            group: z.ZodObject<{
                group_id: z.ZodOptional<z.ZodString>;
                group_name: z.ZodString;
                time_zone: z.ZodString;
                bind_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                except_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                bind_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                except_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_leader_ids: z.ZodArray<z.ZodString, "many">;
                sub_group_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                allow_out_punch: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_approval: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_post_approval: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_remark: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_photo: z.ZodOptional<z.ZodBoolean>;
                out_punch_allowed_hide_addr: z.ZodOptional<z.ZodBoolean>;
                out_punch_allowed_adjust_addr: z.ZodOptional<z.ZodBoolean>;
                adjust_range: z.ZodOptional<z.ZodNumber>;
                allow_pc_punch: z.ZodOptional<z.ZodBoolean>;
                allow_remedy: z.ZodOptional<z.ZodBoolean>;
                remedy_limit: z.ZodOptional<z.ZodBoolean>;
                remedy_limit_count: z.ZodOptional<z.ZodNumber>;
                remedy_date_limit: z.ZodOptional<z.ZodBoolean>;
                remedy_date_num: z.ZodOptional<z.ZodNumber>;
                allow_remedy_type_lack: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_late: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_early: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_normal: z.ZodOptional<z.ZodBoolean>;
                show_cumulative_time: z.ZodOptional<z.ZodBoolean>;
                show_over_time: z.ZodOptional<z.ZodBoolean>;
                hide_staff_punch_time: z.ZodOptional<z.ZodBoolean>;
                hide_clock_in_rule: z.ZodOptional<z.ZodBoolean>;
                face_punch: z.ZodOptional<z.ZodBoolean>;
                face_punch_cfg: z.ZodOptional<z.ZodNumber>;
                face_live_need_action: z.ZodOptional<z.ZodBoolean>;
                face_downgrade: z.ZodOptional<z.ZodBoolean>;
                replace_basic_pic: z.ZodOptional<z.ZodBoolean>;
                anti_cheat_punch_config: z.ZodOptional<z.ZodObject<{
                    intercept_suspected_cheat_punch: z.ZodBoolean;
                    check_cheat_software_punch: z.ZodOptional<z.ZodBoolean>;
                    check_buddy_punch: z.ZodOptional<z.ZodBoolean>;
                    check_simulate_wifi_punch: z.ZodOptional<z.ZodBoolean>;
                    check_change_device_punch: z.ZodOptional<z.ZodBoolean>;
                    allow_change_device_num: z.ZodOptional<z.ZodNumber>;
                    suspected_cheat_handle_method: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                }, {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                }>>;
                machines: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    machine_sn: z.ZodString;
                    machine_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    machine_sn: string;
                    machine_name: string;
                }, {
                    machine_sn: string;
                    machine_name: string;
                }>, "many">>;
                gps_range: z.ZodOptional<z.ZodNumber>;
                locations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    location_name: z.ZodString;
                    location_type: z.ZodNumber;
                    latitude: z.ZodOptional<z.ZodNumber>;
                    longitude: z.ZodOptional<z.ZodNumber>;
                    ssid: z.ZodOptional<z.ZodString>;
                    bssid: z.ZodOptional<z.ZodString>;
                    map_type: z.ZodOptional<z.ZodNumber>;
                    address: z.ZodOptional<z.ZodString>;
                    ip: z.ZodOptional<z.ZodString>;
                    feature: z.ZodOptional<z.ZodString>;
                    gps_range: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }, {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }>, "many">>;
                group_type: z.ZodNumber;
                punch_day_shift_ids: z.ZodArray<z.ZodString, "many">;
                free_punch_cfg: z.ZodOptional<z.ZodObject<{
                    free_start_time: z.ZodString;
                    free_end_time: z.ZodString;
                    punch_day: z.ZodNumber;
                    work_day_no_punch_as_lack: z.ZodOptional<z.ZodBoolean>;
                    work_hours_demand: z.ZodOptional<z.ZodBoolean>;
                    work_hours: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                }, {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                }>>;
                calendar_id: z.ZodNumber;
                need_punch_special_days: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    punch_day: z.ZodNumber;
                    shift_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    punch_day: number;
                    shift_id: string;
                }, {
                    punch_day: number;
                    shift_id: string;
                }>, "many">>;
                no_need_punch_special_days: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    punch_day: z.ZodNumber;
                    shift_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    punch_day: number;
                    shift_id: string;
                }, {
                    punch_day: number;
                    shift_id: string;
                }>, "many">>;
                work_day_no_punch_as_lack: z.ZodOptional<z.ZodBoolean>;
                effect_now: z.ZodOptional<z.ZodBoolean>;
                remedy_period_type: z.ZodOptional<z.ZodNumber>;
                remedy_period_custom_date: z.ZodOptional<z.ZodNumber>;
                punch_type: z.ZodOptional<z.ZodNumber>;
                rest_clockIn_need_approval: z.ZodOptional<z.ZodBoolean>;
                clockIn_need_photo: z.ZodOptional<z.ZodBoolean>;
                member_status_change: z.ZodOptional<z.ZodObject<{
                    onboarding_on_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    onboarding_off_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    offboarding_on_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    offboarding_off_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                }, {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                }>>;
                leave_need_punch: z.ZodOptional<z.ZodBoolean>;
                leave_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                go_out_need_punch: z.ZodOptional<z.ZodNumber>;
                go_out_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                travel_need_punch: z.ZodOptional<z.ZodNumber>;
                travel_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                need_punch_members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    rule_scope_type: z.ZodOptional<z.ZodNumber>;
                    scope_group_list: z.ZodOptional<z.ZodObject<{
                        scope_value_type: z.ZodOptional<z.ZodNumber>;
                        operation_type: z.ZodOptional<z.ZodNumber>;
                        right: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            key: z.ZodOptional<z.ZodString>;
                            name: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }>, "many">>;
                        member_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        custom_field_ID: z.ZodOptional<z.ZodString>;
                        custom_field_obj_type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }>, "many">>;
                no_need_punch_members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    rule_scope_type: z.ZodOptional<z.ZodNumber>;
                    scope_group_list: z.ZodOptional<z.ZodObject<{
                        scope_value_type: z.ZodOptional<z.ZodNumber>;
                        operation_type: z.ZodOptional<z.ZodNumber>;
                        right: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            key: z.ZodOptional<z.ZodString>;
                            name: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }>, "many">>;
                        member_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        custom_field_ID: z.ZodOptional<z.ZodString>;
                        custom_field_obj_type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }>, "many">>;
                save_auto_changes: z.ZodOptional<z.ZodBoolean>;
                org_change_auto_adjust: z.ZodOptional<z.ZodBoolean>;
                bind_default_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                bind_default_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                overtime_clock_cfg: z.ZodOptional<z.ZodObject<{
                    allow_punch_approval: z.ZodOptional<z.ZodBoolean>;
                    need_clock_over_time_start_and_end: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                }, {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                }>>;
                new_calendar_id: z.ZodOptional<z.ZodString>;
                allow_apply_punch: z.ZodOptional<z.ZodBoolean>;
                clock_in_abnormal_settings: z.ZodOptional<z.ZodObject<{
                    ignore_until_latest_clockout: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    ignore_until_latest_clockout?: boolean | undefined;
                }, {
                    ignore_until_latest_clockout?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            }, {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            }>;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            group: {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            };
            operator_id?: string | undefined;
        }, {
            group: {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            };
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
            dept_type: z.ZodLiteral<"open_id">;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
        }, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
        }>;
    };
};
export declare const attendanceV1GroupDelete: {
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
export declare const attendanceV1GroupGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
            dept_type: z.ZodLiteral<"open_id">;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
        }, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
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
export declare const attendanceV1GroupList: {
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
export declare const attendanceV1GroupListUser: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            employee_type: z.ZodString;
            dept_type: z.ZodString;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            member_clock_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
            dept_type: string;
            member_clock_type: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            employee_type: string;
            dept_type: string;
            member_clock_type: number;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        path: z.ZodObject<{
            group_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_id: string;
        }, {
            group_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const attendanceV1GroupSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            group_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_name: string;
        }, {
            group_name: string;
        }>;
    };
};
export declare const attendanceV1LeaveAccrualRecordPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            leave_granting_record_id: z.ZodString;
            employment_id: z.ZodString;
            leave_type_id: z.ZodString;
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
            time_offset: z.ZodOptional<z.ZodNumber>;
            expiration_date: z.ZodOptional<z.ZodString>;
            quantity: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason: {
                value: string;
                lang: string;
            }[];
            leave_granting_record_id: string;
            employment_id: string;
            leave_type_id: string;
            time_offset?: number | undefined;
            expiration_date?: string | undefined;
            quantity?: string | undefined;
        }, {
            reason: {
                value: string;
                lang: string;
            }[];
            leave_granting_record_id: string;
            employment_id: string;
            leave_type_id: string;
            time_offset?: number | undefined;
            expiration_date?: string | undefined;
            quantity?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            leave_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            leave_id?: string | undefined;
        }, {
            leave_id?: string | undefined;
        }>>;
    };
};
export declare const attendanceV1LeaveEmployExpireRecordGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            employment_id: z.ZodString;
            leave_type_id: z.ZodString;
            start_expiration_date: z.ZodString;
            end_expiration_date: z.ZodString;
            time_offset: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            leave_type_id: string;
            start_expiration_date: string;
            end_expiration_date: string;
            time_offset?: number | undefined;
        }, {
            employment_id: string;
            leave_type_id: string;
            start_expiration_date: string;
            end_expiration_date: string;
            time_offset?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            leave_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            leave_id?: string | undefined;
        }, {
            leave_id?: string | undefined;
        }>>;
    };
};
export declare const attendanceV1ShiftCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            shift_name: z.ZodString;
            punch_times: z.ZodNumber;
            sub_shift_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            is_flexible: z.ZodOptional<z.ZodBoolean>;
            flexible_minutes: z.ZodOptional<z.ZodNumber>;
            flexible_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                flexible_early_minutes: z.ZodNumber;
                flexible_late_minutes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }, {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }>, "many">>;
            no_need_off: z.ZodOptional<z.ZodBoolean>;
            punch_time_rule: z.ZodArray<z.ZodObject<{
                on_time: z.ZodString;
                off_time: z.ZodString;
                late_minutes_as_late: z.ZodNumber;
                late_minutes_as_lack: z.ZodNumber;
                on_advance_minutes: z.ZodNumber;
                early_minutes_as_early: z.ZodNumber;
                early_minutes_as_lack: z.ZodNumber;
                off_delay_minutes: z.ZodNumber;
                late_minutes_as_serious_late: z.ZodOptional<z.ZodNumber>;
                no_need_on: z.ZodOptional<z.ZodBoolean>;
                no_need_off: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }, {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }>, "many">;
            late_off_late_on_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                late_off_minutes: z.ZodNumber;
                late_on_minutes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                late_off_minutes: number;
                late_on_minutes: number;
            }, {
                late_off_minutes: number;
                late_on_minutes: number;
            }>, "many">>;
            rest_time_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                rest_begin_time: z.ZodString;
                rest_end_time: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                rest_begin_time: string;
                rest_end_time: string;
            }, {
                rest_begin_time: string;
                rest_end_time: string;
            }>, "many">>;
            overtime_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                on_overtime: z.ZodString;
                off_overtime: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                on_overtime: string;
                off_overtime: string;
            }, {
                on_overtime: string;
                off_overtime: string;
            }>, "many">>;
            day_type: z.ZodOptional<z.ZodNumber>;
            overtime_rest_time_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                rest_begin_time: z.ZodString;
                rest_end_time: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                rest_begin_time: string;
                rest_end_time: string;
            }, {
                rest_begin_time: string;
                rest_end_time: string;
            }>, "many">>;
            late_minutes_as_serious_late: z.ZodOptional<z.ZodNumber>;
            shift_middle_time_rule: z.ZodOptional<z.ZodObject<{
                middle_time_type: z.ZodOptional<z.ZodNumber>;
                fixed_middle_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            }, {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            }>>;
            shift_attendance_time_config: z.ZodOptional<z.ZodObject<{
                attendance_time: z.ZodOptional<z.ZodNumber>;
                on_attendance_time: z.ZodOptional<z.ZodNumber>;
                off_attendance_time: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            }, {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            }>>;
            late_off_late_on_setting: z.ZodOptional<z.ZodObject<{
                late_off_base_on_time_type: z.ZodOptional<z.ZodNumber>;
                late_on_base_on_time_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            }, {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            }>>;
            id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            shift_name: string;
            punch_times: number;
            punch_time_rule: {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }[];
            id?: string | undefined;
            sub_shift_leader_ids?: string[] | undefined;
            is_flexible?: boolean | undefined;
            flexible_minutes?: number | undefined;
            flexible_rule?: {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }[] | undefined;
            no_need_off?: boolean | undefined;
            late_minutes_as_serious_late?: number | undefined;
            late_off_late_on_rule?: {
                late_off_minutes: number;
                late_on_minutes: number;
            }[] | undefined;
            rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            overtime_rule?: {
                on_overtime: string;
                off_overtime: string;
            }[] | undefined;
            day_type?: number | undefined;
            overtime_rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            shift_middle_time_rule?: {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            } | undefined;
            shift_attendance_time_config?: {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            } | undefined;
            late_off_late_on_setting?: {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            } | undefined;
        }, {
            shift_name: string;
            punch_times: number;
            punch_time_rule: {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }[];
            id?: string | undefined;
            sub_shift_leader_ids?: string[] | undefined;
            is_flexible?: boolean | undefined;
            flexible_minutes?: number | undefined;
            flexible_rule?: {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }[] | undefined;
            no_need_off?: boolean | undefined;
            late_minutes_as_serious_late?: number | undefined;
            late_off_late_on_rule?: {
                late_off_minutes: number;
                late_on_minutes: number;
            }[] | undefined;
            rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            overtime_rule?: {
                on_overtime: string;
                off_overtime: string;
            }[] | undefined;
            day_type?: number | undefined;
            overtime_rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            shift_middle_time_rule?: {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            } | undefined;
            shift_attendance_time_config?: {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            } | undefined;
            late_off_late_on_setting?: {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_type: z.ZodOptional<z.ZodEnum<["employee_id", "employee_no"]>>;
        }, "strip", z.ZodTypeAny, {
            employee_type?: "employee_id" | "employee_no" | undefined;
        }, {
            employee_type?: "employee_id" | "employee_no" | undefined;
        }>>;
    };
};
export declare const attendanceV1ShiftDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            shift_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            shift_id: string;
        }, {
            shift_id: string;
        }>;
    };
};
export declare const attendanceV1ShiftGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            shift_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            shift_id: string;
        }, {
            shift_id: string;
        }>;
    };
};
export declare const attendanceV1ShiftList: {
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
export declare const attendanceV1ShiftQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            shift_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            shift_name: string;
        }, {
            shift_name: string;
        }>;
    };
};
export declare const attendanceV1UserApprovalCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_approval: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodString;
                date: z.ZodString;
                outs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    uniq_id: z.ZodString;
                    unit: z.ZodNumber;
                    interval: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    i18n_names: z.ZodObject<{
                        ch: z.ZodOptional<z.ZodString>;
                        en: z.ZodOptional<z.ZodString>;
                        ja: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }>;
                    default_locale: z.ZodString;
                    reason: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }>, "many">>;
                leaves: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    uniq_id: z.ZodOptional<z.ZodString>;
                    unit: z.ZodNumber;
                    interval: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    i18n_names: z.ZodObject<{
                        ch: z.ZodOptional<z.ZodString>;
                        en: z.ZodOptional<z.ZodString>;
                        ja: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }>;
                    default_locale: z.ZodEnum<["ch", "en", "ja"]>;
                    reason: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }>, "many">>;
                overtime_works: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    duration: z.ZodNumber;
                    unit: z.ZodNumber;
                    category: z.ZodNumber;
                    type: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    reason: z.ZodOptional<z.ZodString>;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }, {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }>, "many">>;
                trips: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    reason: z.ZodString;
                    approve_pass_time: z.ZodString;
                    approve_apply_time: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    departure: z.ZodOptional<z.ZodObject<{
                        region_level: z.ZodOptional<z.ZodString>;
                        region_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }>>;
                    destinations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        region_level: z.ZodOptional<z.ZodString>;
                        region_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }>, "many">>;
                    transportation: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    trip_type: z.ZodOptional<z.ZodNumber>;
                    remarks: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }>, "many">>;
                time_zone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            }, {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_approval?: {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            user_approval?: {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no", "open_id"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserApprovalQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_date_from: z.ZodNumber;
            check_date_to: z.ZodNumber;
            check_date_type: z.ZodOptional<z.ZodEnum<["PeriodTime", "CreateTime", "UpdateTime"]>>;
            status: z.ZodOptional<z.ZodNumber>;
            check_time_from: z.ZodOptional<z.ZodString>;
            check_time_to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
            check_time_from?: string | undefined;
            check_time_to?: string | undefined;
        }, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
            check_time_from?: string | undefined;
            check_time_to?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no", "open_id"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserDailyShiftBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_daily_shifts: z.ZodArray<z.ZodObject<{
                group_id: z.ZodString;
                shift_id: z.ZodString;
                month: z.ZodNumber;
                user_id: z.ZodString;
                day_no: z.ZodNumber;
                is_clear_schedule: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }, {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }>, "many">;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_daily_shifts: {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }[];
            operator_id?: string | undefined;
        }, {
            user_daily_shifts: {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }[];
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserDailyShiftBatchCreateTemp: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_tmp_daily_shifts: z.ZodArray<z.ZodObject<{
                group_id: z.ZodString;
                user_id: z.ZodString;
                date: z.ZodNumber;
                shift_name: z.ZodString;
                punch_time_simple_rules: z.ZodArray<z.ZodObject<{
                    on_time: z.ZodString;
                    off_time: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    on_time: string;
                    off_time: string;
                }, {
                    on_time: string;
                    off_time: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }, {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }>, "many">;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_tmp_daily_shifts: {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }[];
            operator_id?: string | undefined;
        }, {
            user_tmp_daily_shifts: {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }[];
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const attendanceV1UserDailyShiftQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_date_from: z.ZodNumber;
            check_date_to: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
        }, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserFlowBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            flow_records: z.ZodArray<z.ZodObject<{
                user_id: z.ZodString;
                creator_id: z.ZodString;
                location_name: z.ZodString;
                check_time: z.ZodString;
                comment: z.ZodString;
                record_id: z.ZodOptional<z.ZodString>;
                ssid: z.ZodOptional<z.ZodString>;
                bssid: z.ZodOptional<z.ZodString>;
                is_field: z.ZodOptional<z.ZodBoolean>;
                is_wifi: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodNumber>;
                photo_urls: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                device_id: z.ZodOptional<z.ZodString>;
                check_result: z.ZodOptional<z.ZodEnum<["NoNeedCheck", "SystemCheck", "Normal", "Early", "Late", "SeriousLate", "Lack", "Invalid", "None", "Todo"]>>;
                external_id: z.ZodOptional<z.ZodString>;
                idempotent_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }, {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            flow_records: {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }[];
        }, {
            flow_records: {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }[];
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserFlowBatchDel: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            record_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            record_ids: string[];
        }, {
            record_ids: string[];
        }>;
    };
};
export declare const attendanceV1UserFlowGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["open_id", "employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }>;
        path: z.ZodObject<{
            user_flow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_flow_id: string;
        }, {
            user_flow_id: string;
        }>;
    };
};
export declare const attendanceV1UserFlowQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_time_from: z.ZodString;
            check_time_to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_time_from: string;
            check_time_to: string;
        }, {
            user_ids: string[];
            check_time_from: string;
            check_time_to: string;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
            include_terminated_user: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
            include_terminated_user?: boolean | undefined;
        }, {
            employee_type: "employee_id" | "employee_no";
            include_terminated_user?: boolean | undefined;
        }>;
    };
};
export declare const attendanceV1UserSettingModify: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            user_setting: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodString;
                face_key: z.ZodString;
                face_key_update_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            }, {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_setting?: {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            } | undefined;
        }, {
            user_setting?: {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            } | undefined;
        }>>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserSettingQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
        }, {
            user_ids: string[];
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserStatsDataQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            locale: z.ZodEnum<["en", "ja", "zh"]>;
            stats_type: z.ZodEnum<["daily", "month"]>;
            start_date: z.ZodNumber;
            end_date: z.ZodNumber;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            need_history: z.ZodOptional<z.ZodBoolean>;
            current_group_only: z.ZodOptional<z.ZodBoolean>;
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_ids?: string[] | undefined;
            user_id?: string | undefined;
            need_history?: boolean | undefined;
            current_group_only?: boolean | undefined;
        }, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_ids?: string[] | undefined;
            user_id?: string | undefined;
            need_history?: boolean | undefined;
            current_group_only?: boolean | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserStatsFieldQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            locale: z.ZodEnum<["en", "ja", "zh"]>;
            stats_type: z.ZodEnum<["daily", "month"]>;
            start_date: z.ZodNumber;
            end_date: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
        }, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserStatsViewQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            locale: z.ZodEnum<["en", "ja", "zh"]>;
            stats_type: z.ZodEnum<["daily", "month"]>;
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_id?: string | undefined;
        }, {
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserStatsViewUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            view: z.ZodObject<{
                view_id: z.ZodString;
                stats_type: z.ZodEnum<["daily", "month"]>;
                user_id: z.ZodString;
                items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    child_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        code: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        code: string;
                    }, {
                        value: string;
                        code: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }, {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            }, {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            view: {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            };
        }, {
            view: {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
        path: z.ZodObject<{
            user_stats_view_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_stats_view_id: string;
        }, {
            user_stats_view_id: string;
        }>;
    };
};
export declare const attendanceV1UserTaskRemedyCreate: {
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
            remedy_date: z.ZodNumber;
            punch_no: z.ZodNumber;
            work_type: z.ZodNumber;
            remedy_time: z.ZodString;
            reason: z.ZodString;
            time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            reason: string;
            remedy_date: number;
            punch_no: number;
            work_type: number;
            remedy_time: string;
            time?: string | undefined;
        }, {
            user_id: string;
            reason: string;
            remedy_date: number;
            punch_no: number;
            work_type: number;
            remedy_time: string;
            time?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserTaskRemedyQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_time_from: z.ZodString;
            check_time_to: z.ZodString;
            check_date_type: z.ZodOptional<z.ZodEnum<["PeriodTime", "CreateTime", "UpdateTime"]>>;
            status: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_time_from: string;
            check_time_to: string;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
        }, {
            user_ids: string[];
            check_time_from: string;
            check_time_to: string;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserTaskRemedyQueryUserAllowedRemedys: {
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
            remedy_date: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            remedy_date: number;
        }, {
            user_id: string;
            remedy_date: number;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
};
export declare const attendanceV1UserTaskQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_date_from: z.ZodNumber;
            check_date_to: z.ZodNumber;
            need_overtime_result: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            need_overtime_result?: boolean | undefined;
        }, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            need_overtime_result?: boolean | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
            ignore_invalid_users: z.ZodOptional<z.ZodBoolean>;
            include_terminated_user: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
            include_terminated_user?: boolean | undefined;
            ignore_invalid_users?: boolean | undefined;
        }, {
            employee_type: "employee_id" | "employee_no";
            include_terminated_user?: boolean | undefined;
            ignore_invalid_users?: boolean | undefined;
        }>;
    };
};
export declare const attendanceV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            approval_id: z.ZodString;
            approval_type: z.ZodString;
            status: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: number;
            approval_id: string;
            approval_type: string;
        }, {
            status: number;
            approval_id: string;
            approval_type: string;
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
            month: z.ZodString;
            operator_id: z.ZodString;
            archive_rule_id: z.ZodString;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            user_ids?: string[] | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            user_ids?: string[] | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
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
            month: z.ZodString;
            operator_id: z.ZodString;
            archive_report_datas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                member_id: z.ZodString;
                start_time: z.ZodString;
                end_time: z.ZodString;
                field_datas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    value: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    value?: string | undefined;
                }, {
                    code: string;
                    value?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }, {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            archive_rule_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            archive_report_datas?: {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            archive_report_datas?: {
                start_time: string;
                end_time: string;
                member_id: string;
                field_datas?: {
                    code: string;
                    value?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
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
            locale: z.ZodOptional<z.ZodString>;
            month: z.ZodString;
            archive_rule_id: z.ZodString;
            operator_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            locale?: string | undefined;
        }, {
            operator_id: string;
            month: string;
            archive_rule_id: string;
            locale?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            employee_type: string;
        }, {
            employee_type: string;
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
            group: z.ZodObject<{
                group_id: z.ZodOptional<z.ZodString>;
                group_name: z.ZodString;
                time_zone: z.ZodString;
                bind_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                except_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                bind_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                except_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                group_leader_ids: z.ZodArray<z.ZodString, "many">;
                sub_group_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                allow_out_punch: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_approval: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_post_approval: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_remark: z.ZodOptional<z.ZodBoolean>;
                out_punch_need_photo: z.ZodOptional<z.ZodBoolean>;
                out_punch_allowed_hide_addr: z.ZodOptional<z.ZodBoolean>;
                out_punch_allowed_adjust_addr: z.ZodOptional<z.ZodBoolean>;
                adjust_range: z.ZodOptional<z.ZodNumber>;
                allow_pc_punch: z.ZodOptional<z.ZodBoolean>;
                allow_remedy: z.ZodOptional<z.ZodBoolean>;
                remedy_limit: z.ZodOptional<z.ZodBoolean>;
                remedy_limit_count: z.ZodOptional<z.ZodNumber>;
                remedy_date_limit: z.ZodOptional<z.ZodBoolean>;
                remedy_date_num: z.ZodOptional<z.ZodNumber>;
                allow_remedy_type_lack: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_late: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_early: z.ZodOptional<z.ZodBoolean>;
                allow_remedy_type_normal: z.ZodOptional<z.ZodBoolean>;
                show_cumulative_time: z.ZodOptional<z.ZodBoolean>;
                show_over_time: z.ZodOptional<z.ZodBoolean>;
                hide_staff_punch_time: z.ZodOptional<z.ZodBoolean>;
                hide_clock_in_rule: z.ZodOptional<z.ZodBoolean>;
                face_punch: z.ZodOptional<z.ZodBoolean>;
                face_punch_cfg: z.ZodOptional<z.ZodNumber>;
                face_live_need_action: z.ZodOptional<z.ZodBoolean>;
                face_downgrade: z.ZodOptional<z.ZodBoolean>;
                replace_basic_pic: z.ZodOptional<z.ZodBoolean>;
                anti_cheat_punch_config: z.ZodOptional<z.ZodObject<{
                    intercept_suspected_cheat_punch: z.ZodBoolean;
                    check_cheat_software_punch: z.ZodOptional<z.ZodBoolean>;
                    check_buddy_punch: z.ZodOptional<z.ZodBoolean>;
                    check_simulate_wifi_punch: z.ZodOptional<z.ZodBoolean>;
                    check_change_device_punch: z.ZodOptional<z.ZodBoolean>;
                    allow_change_device_num: z.ZodOptional<z.ZodNumber>;
                    suspected_cheat_handle_method: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                }, {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                }>>;
                machines: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    machine_sn: z.ZodString;
                    machine_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    machine_sn: string;
                    machine_name: string;
                }, {
                    machine_sn: string;
                    machine_name: string;
                }>, "many">>;
                gps_range: z.ZodOptional<z.ZodNumber>;
                locations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    location_name: z.ZodString;
                    location_type: z.ZodNumber;
                    latitude: z.ZodOptional<z.ZodNumber>;
                    longitude: z.ZodOptional<z.ZodNumber>;
                    ssid: z.ZodOptional<z.ZodString>;
                    bssid: z.ZodOptional<z.ZodString>;
                    map_type: z.ZodOptional<z.ZodNumber>;
                    address: z.ZodOptional<z.ZodString>;
                    ip: z.ZodOptional<z.ZodString>;
                    feature: z.ZodOptional<z.ZodString>;
                    gps_range: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }, {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }>, "many">>;
                group_type: z.ZodNumber;
                punch_day_shift_ids: z.ZodArray<z.ZodString, "many">;
                free_punch_cfg: z.ZodOptional<z.ZodObject<{
                    free_start_time: z.ZodString;
                    free_end_time: z.ZodString;
                    punch_day: z.ZodNumber;
                    work_day_no_punch_as_lack: z.ZodOptional<z.ZodBoolean>;
                    work_hours_demand: z.ZodOptional<z.ZodBoolean>;
                    work_hours: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                }, {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                }>>;
                calendar_id: z.ZodNumber;
                need_punch_special_days: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    punch_day: z.ZodNumber;
                    shift_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    punch_day: number;
                    shift_id: string;
                }, {
                    punch_day: number;
                    shift_id: string;
                }>, "many">>;
                no_need_punch_special_days: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    punch_day: z.ZodNumber;
                    shift_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    punch_day: number;
                    shift_id: string;
                }, {
                    punch_day: number;
                    shift_id: string;
                }>, "many">>;
                work_day_no_punch_as_lack: z.ZodOptional<z.ZodBoolean>;
                effect_now: z.ZodOptional<z.ZodBoolean>;
                remedy_period_type: z.ZodOptional<z.ZodNumber>;
                remedy_period_custom_date: z.ZodOptional<z.ZodNumber>;
                punch_type: z.ZodOptional<z.ZodNumber>;
                rest_clockIn_need_approval: z.ZodOptional<z.ZodBoolean>;
                clockIn_need_photo: z.ZodOptional<z.ZodBoolean>;
                member_status_change: z.ZodOptional<z.ZodObject<{
                    onboarding_on_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    onboarding_off_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    offboarding_on_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                    offboarding_off_no_need_punch: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                }, {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                }>>;
                leave_need_punch: z.ZodOptional<z.ZodBoolean>;
                leave_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                go_out_need_punch: z.ZodOptional<z.ZodNumber>;
                go_out_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                travel_need_punch: z.ZodOptional<z.ZodNumber>;
                travel_need_punch_cfg: z.ZodOptional<z.ZodObject<{
                    late_minutes_as_late: z.ZodOptional<z.ZodNumber>;
                    late_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_early: z.ZodOptional<z.ZodNumber>;
                    early_minutes_as_lack: z.ZodOptional<z.ZodNumber>;
                    not_during_shift: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }, {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                }>>;
                need_punch_members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    rule_scope_type: z.ZodOptional<z.ZodNumber>;
                    scope_group_list: z.ZodOptional<z.ZodObject<{
                        scope_value_type: z.ZodOptional<z.ZodNumber>;
                        operation_type: z.ZodOptional<z.ZodNumber>;
                        right: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            key: z.ZodOptional<z.ZodString>;
                            name: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }>, "many">>;
                        member_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        custom_field_ID: z.ZodOptional<z.ZodString>;
                        custom_field_obj_type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }>, "many">>;
                no_need_punch_members: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    rule_scope_type: z.ZodOptional<z.ZodNumber>;
                    scope_group_list: z.ZodOptional<z.ZodObject<{
                        scope_value_type: z.ZodOptional<z.ZodNumber>;
                        operation_type: z.ZodOptional<z.ZodNumber>;
                        right: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            key: z.ZodOptional<z.ZodString>;
                            name: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }, {
                            name?: string | undefined;
                            key?: string | undefined;
                        }>, "many">>;
                        member_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        custom_field_ID: z.ZodOptional<z.ZodString>;
                        custom_field_obj_type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }, {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }, {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }>, "many">>;
                save_auto_changes: z.ZodOptional<z.ZodBoolean>;
                org_change_auto_adjust: z.ZodOptional<z.ZodBoolean>;
                bind_default_dept_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                bind_default_user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                overtime_clock_cfg: z.ZodOptional<z.ZodObject<{
                    allow_punch_approval: z.ZodOptional<z.ZodBoolean>;
                    need_clock_over_time_start_and_end: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                }, {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                }>>;
                new_calendar_id: z.ZodOptional<z.ZodString>;
                allow_apply_punch: z.ZodOptional<z.ZodBoolean>;
                clock_in_abnormal_settings: z.ZodOptional<z.ZodObject<{
                    ignore_until_latest_clockout: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    ignore_until_latest_clockout?: boolean | undefined;
                }, {
                    ignore_until_latest_clockout?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            }, {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            }>;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            group: {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            };
            operator_id?: string | undefined;
        }, {
            group: {
                time_zone: string;
                group_name: string;
                group_leader_ids: string[];
                group_type: number;
                punch_day_shift_ids: string[];
                calendar_id: number;
                group_id?: string | undefined;
                bind_dept_ids?: string[] | undefined;
                except_dept_ids?: string[] | undefined;
                bind_user_ids?: string[] | undefined;
                except_user_ids?: string[] | undefined;
                sub_group_leader_ids?: string[] | undefined;
                allow_out_punch?: boolean | undefined;
                out_punch_need_approval?: boolean | undefined;
                out_punch_need_post_approval?: boolean | undefined;
                out_punch_need_remark?: boolean | undefined;
                out_punch_need_photo?: boolean | undefined;
                out_punch_allowed_hide_addr?: boolean | undefined;
                out_punch_allowed_adjust_addr?: boolean | undefined;
                adjust_range?: number | undefined;
                allow_pc_punch?: boolean | undefined;
                allow_remedy?: boolean | undefined;
                remedy_limit?: boolean | undefined;
                remedy_limit_count?: number | undefined;
                remedy_date_limit?: boolean | undefined;
                remedy_date_num?: number | undefined;
                allow_remedy_type_lack?: boolean | undefined;
                allow_remedy_type_late?: boolean | undefined;
                allow_remedy_type_early?: boolean | undefined;
                allow_remedy_type_normal?: boolean | undefined;
                show_cumulative_time?: boolean | undefined;
                show_over_time?: boolean | undefined;
                hide_staff_punch_time?: boolean | undefined;
                hide_clock_in_rule?: boolean | undefined;
                face_punch?: boolean | undefined;
                face_punch_cfg?: number | undefined;
                face_live_need_action?: boolean | undefined;
                face_downgrade?: boolean | undefined;
                replace_basic_pic?: boolean | undefined;
                anti_cheat_punch_config?: {
                    intercept_suspected_cheat_punch: boolean;
                    check_cheat_software_punch?: boolean | undefined;
                    check_buddy_punch?: boolean | undefined;
                    check_simulate_wifi_punch?: boolean | undefined;
                    check_change_device_punch?: boolean | undefined;
                    allow_change_device_num?: number | undefined;
                    suspected_cheat_handle_method?: number | undefined;
                } | undefined;
                machines?: {
                    machine_sn: string;
                    machine_name: string;
                }[] | undefined;
                gps_range?: number | undefined;
                locations?: {
                    location_name: string;
                    location_type: number;
                    feature?: string | undefined;
                    gps_range?: number | undefined;
                    latitude?: number | undefined;
                    longitude?: number | undefined;
                    ssid?: string | undefined;
                    bssid?: string | undefined;
                    map_type?: number | undefined;
                    address?: string | undefined;
                    ip?: string | undefined;
                }[] | undefined;
                work_day_no_punch_as_lack?: boolean | undefined;
                free_punch_cfg?: {
                    free_start_time: string;
                    free_end_time: string;
                    punch_day: number;
                    work_day_no_punch_as_lack?: boolean | undefined;
                    work_hours_demand?: boolean | undefined;
                    work_hours?: number | undefined;
                } | undefined;
                need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                no_need_punch_special_days?: {
                    punch_day: number;
                    shift_id: string;
                }[] | undefined;
                effect_now?: boolean | undefined;
                remedy_period_type?: number | undefined;
                remedy_period_custom_date?: number | undefined;
                punch_type?: number | undefined;
                rest_clockIn_need_approval?: boolean | undefined;
                clockIn_need_photo?: boolean | undefined;
                member_status_change?: {
                    onboarding_on_no_need_punch?: boolean | undefined;
                    onboarding_off_no_need_punch?: boolean | undefined;
                    offboarding_on_no_need_punch?: boolean | undefined;
                    offboarding_off_no_need_punch?: boolean | undefined;
                } | undefined;
                leave_need_punch?: boolean | undefined;
                leave_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                go_out_need_punch?: number | undefined;
                go_out_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                travel_need_punch?: number | undefined;
                travel_need_punch_cfg?: {
                    late_minutes_as_late?: number | undefined;
                    late_minutes_as_lack?: number | undefined;
                    early_minutes_as_early?: number | undefined;
                    early_minutes_as_lack?: number | undefined;
                    not_during_shift?: boolean | undefined;
                } | undefined;
                need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                no_need_punch_members?: {
                    rule_scope_type?: number | undefined;
                    scope_group_list?: {
                        right?: {
                            name?: string | undefined;
                            key?: string | undefined;
                        }[] | undefined;
                        scope_value_type?: number | undefined;
                        operation_type?: number | undefined;
                        member_ids?: string[] | undefined;
                        custom_field_ID?: string | undefined;
                        custom_field_obj_type?: string | undefined;
                    } | undefined;
                }[] | undefined;
                save_auto_changes?: boolean | undefined;
                org_change_auto_adjust?: boolean | undefined;
                bind_default_dept_ids?: string[] | undefined;
                bind_default_user_ids?: string[] | undefined;
                overtime_clock_cfg?: {
                    allow_punch_approval?: boolean | undefined;
                    need_clock_over_time_start_and_end?: boolean | undefined;
                } | undefined;
                new_calendar_id?: string | undefined;
                allow_apply_punch?: boolean | undefined;
                clock_in_abnormal_settings?: {
                    ignore_until_latest_clockout?: boolean | undefined;
                } | undefined;
            };
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
            dept_type: z.ZodLiteral<"open_id">;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
        }, {
            employee_type: "employee_id" | "employee_no";
            dept_type: "open_id";
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
        data: z.ZodObject<{
            group_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            group_name: string;
        }, {
            group_name: string;
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
            leave_granting_record_id: z.ZodString;
            employment_id: z.ZodString;
            leave_type_id: z.ZodString;
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
            time_offset: z.ZodOptional<z.ZodNumber>;
            expiration_date: z.ZodOptional<z.ZodString>;
            quantity: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason: {
                value: string;
                lang: string;
            }[];
            leave_granting_record_id: string;
            employment_id: string;
            leave_type_id: string;
            time_offset?: number | undefined;
            expiration_date?: string | undefined;
            quantity?: string | undefined;
        }, {
            reason: {
                value: string;
                lang: string;
            }[];
            leave_granting_record_id: string;
            employment_id: string;
            leave_type_id: string;
            time_offset?: number | undefined;
            expiration_date?: string | undefined;
            quantity?: string | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            leave_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            leave_id?: string | undefined;
        }, {
            leave_id?: string | undefined;
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
            employment_id: z.ZodString;
            leave_type_id: z.ZodString;
            start_expiration_date: z.ZodString;
            end_expiration_date: z.ZodString;
            time_offset: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            employment_id: string;
            leave_type_id: string;
            start_expiration_date: string;
            end_expiration_date: string;
            time_offset?: number | undefined;
        }, {
            employment_id: string;
            leave_type_id: string;
            start_expiration_date: string;
            end_expiration_date: string;
            time_offset?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_corehr_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_corehr_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            leave_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            leave_id?: string | undefined;
        }, {
            leave_id?: string | undefined;
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
            shift_name: z.ZodString;
            punch_times: z.ZodNumber;
            sub_shift_leader_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            is_flexible: z.ZodOptional<z.ZodBoolean>;
            flexible_minutes: z.ZodOptional<z.ZodNumber>;
            flexible_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                flexible_early_minutes: z.ZodNumber;
                flexible_late_minutes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }, {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }>, "many">>;
            no_need_off: z.ZodOptional<z.ZodBoolean>;
            punch_time_rule: z.ZodArray<z.ZodObject<{
                on_time: z.ZodString;
                off_time: z.ZodString;
                late_minutes_as_late: z.ZodNumber;
                late_minutes_as_lack: z.ZodNumber;
                on_advance_minutes: z.ZodNumber;
                early_minutes_as_early: z.ZodNumber;
                early_minutes_as_lack: z.ZodNumber;
                off_delay_minutes: z.ZodNumber;
                late_minutes_as_serious_late: z.ZodOptional<z.ZodNumber>;
                no_need_on: z.ZodOptional<z.ZodBoolean>;
                no_need_off: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }, {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }>, "many">;
            late_off_late_on_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                late_off_minutes: z.ZodNumber;
                late_on_minutes: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                late_off_minutes: number;
                late_on_minutes: number;
            }, {
                late_off_minutes: number;
                late_on_minutes: number;
            }>, "many">>;
            rest_time_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                rest_begin_time: z.ZodString;
                rest_end_time: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                rest_begin_time: string;
                rest_end_time: string;
            }, {
                rest_begin_time: string;
                rest_end_time: string;
            }>, "many">>;
            overtime_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                on_overtime: z.ZodString;
                off_overtime: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                on_overtime: string;
                off_overtime: string;
            }, {
                on_overtime: string;
                off_overtime: string;
            }>, "many">>;
            day_type: z.ZodOptional<z.ZodNumber>;
            overtime_rest_time_rule: z.ZodOptional<z.ZodArray<z.ZodObject<{
                rest_begin_time: z.ZodString;
                rest_end_time: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                rest_begin_time: string;
                rest_end_time: string;
            }, {
                rest_begin_time: string;
                rest_end_time: string;
            }>, "many">>;
            late_minutes_as_serious_late: z.ZodOptional<z.ZodNumber>;
            shift_middle_time_rule: z.ZodOptional<z.ZodObject<{
                middle_time_type: z.ZodOptional<z.ZodNumber>;
                fixed_middle_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            }, {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            }>>;
            shift_attendance_time_config: z.ZodOptional<z.ZodObject<{
                attendance_time: z.ZodOptional<z.ZodNumber>;
                on_attendance_time: z.ZodOptional<z.ZodNumber>;
                off_attendance_time: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            }, {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            }>>;
            late_off_late_on_setting: z.ZodOptional<z.ZodObject<{
                late_off_base_on_time_type: z.ZodOptional<z.ZodNumber>;
                late_on_base_on_time_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            }, {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            }>>;
            id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            shift_name: string;
            punch_times: number;
            punch_time_rule: {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }[];
            id?: string | undefined;
            sub_shift_leader_ids?: string[] | undefined;
            is_flexible?: boolean | undefined;
            flexible_minutes?: number | undefined;
            flexible_rule?: {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }[] | undefined;
            no_need_off?: boolean | undefined;
            late_minutes_as_serious_late?: number | undefined;
            late_off_late_on_rule?: {
                late_off_minutes: number;
                late_on_minutes: number;
            }[] | undefined;
            rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            overtime_rule?: {
                on_overtime: string;
                off_overtime: string;
            }[] | undefined;
            day_type?: number | undefined;
            overtime_rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            shift_middle_time_rule?: {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            } | undefined;
            shift_attendance_time_config?: {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            } | undefined;
            late_off_late_on_setting?: {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            } | undefined;
        }, {
            shift_name: string;
            punch_times: number;
            punch_time_rule: {
                late_minutes_as_late: number;
                late_minutes_as_lack: number;
                early_minutes_as_early: number;
                early_minutes_as_lack: number;
                on_time: string;
                off_time: string;
                on_advance_minutes: number;
                off_delay_minutes: number;
                no_need_off?: boolean | undefined;
                late_minutes_as_serious_late?: number | undefined;
                no_need_on?: boolean | undefined;
            }[];
            id?: string | undefined;
            sub_shift_leader_ids?: string[] | undefined;
            is_flexible?: boolean | undefined;
            flexible_minutes?: number | undefined;
            flexible_rule?: {
                flexible_early_minutes: number;
                flexible_late_minutes: number;
            }[] | undefined;
            no_need_off?: boolean | undefined;
            late_minutes_as_serious_late?: number | undefined;
            late_off_late_on_rule?: {
                late_off_minutes: number;
                late_on_minutes: number;
            }[] | undefined;
            rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            overtime_rule?: {
                on_overtime: string;
                off_overtime: string;
            }[] | undefined;
            day_type?: number | undefined;
            overtime_rest_time_rule?: {
                rest_begin_time: string;
                rest_end_time: string;
            }[] | undefined;
            shift_middle_time_rule?: {
                middle_time_type?: number | undefined;
                fixed_middle_time?: string | undefined;
            } | undefined;
            shift_attendance_time_config?: {
                attendance_time?: number | undefined;
                on_attendance_time?: number | undefined;
                off_attendance_time?: number | undefined;
            } | undefined;
            late_off_late_on_setting?: {
                late_off_base_on_time_type?: number | undefined;
                late_on_base_on_time_type?: number | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            employee_type: z.ZodOptional<z.ZodEnum<["employee_id", "employee_no"]>>;
        }, "strip", z.ZodTypeAny, {
            employee_type?: "employee_id" | "employee_no" | undefined;
        }, {
            employee_type?: "employee_id" | "employee_no" | undefined;
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
            shift_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            shift_id: string;
        }, {
            shift_id: string;
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
            shift_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            shift_name: string;
        }, {
            shift_name: string;
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
            user_approval: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodString;
                date: z.ZodString;
                outs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    uniq_id: z.ZodString;
                    unit: z.ZodNumber;
                    interval: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    i18n_names: z.ZodObject<{
                        ch: z.ZodOptional<z.ZodString>;
                        en: z.ZodOptional<z.ZodString>;
                        ja: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }>;
                    default_locale: z.ZodString;
                    reason: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }>, "many">>;
                leaves: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    uniq_id: z.ZodOptional<z.ZodString>;
                    unit: z.ZodNumber;
                    interval: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    i18n_names: z.ZodObject<{
                        ch: z.ZodOptional<z.ZodString>;
                        en: z.ZodOptional<z.ZodString>;
                        ja: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }, {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    }>;
                    default_locale: z.ZodEnum<["ch", "en", "ja"]>;
                    reason: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }>, "many">>;
                overtime_works: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    duration: z.ZodNumber;
                    unit: z.ZodNumber;
                    category: z.ZodNumber;
                    type: z.ZodNumber;
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    reason: z.ZodOptional<z.ZodString>;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }, {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }>, "many">>;
                trips: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    start_time: z.ZodString;
                    end_time: z.ZodString;
                    reason: z.ZodString;
                    approve_pass_time: z.ZodString;
                    approve_apply_time: z.ZodString;
                    idempotent_id: z.ZodOptional<z.ZodString>;
                    correct_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    cancel_process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    process_id: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    departure: z.ZodOptional<z.ZodObject<{
                        region_level: z.ZodOptional<z.ZodString>;
                        region_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }>>;
                    destinations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        region_level: z.ZodOptional<z.ZodString>;
                        region_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }, {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }>, "many">>;
                    transportation: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    trip_type: z.ZodOptional<z.ZodNumber>;
                    remarks: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }, {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }>, "many">>;
                time_zone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            }, {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_approval?: {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            user_approval?: {
                date: string;
                user_id: string;
                time_zone?: string | undefined;
                outs?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    uniq_id: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                leaves?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    unit: number;
                    interval: number;
                    i18n_names: {
                        ch?: string | undefined;
                        en?: string | undefined;
                        ja?: string | undefined;
                    };
                    default_locale: "ch" | "en" | "ja";
                    idempotent_id?: string | undefined;
                    uniq_id?: string | undefined;
                }[] | undefined;
                overtime_works?: {
                    type: number;
                    start_time: string;
                    end_time: string;
                    unit: number;
                    duration: number;
                    category: number;
                    idempotent_id?: string | undefined;
                    reason?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                }[] | undefined;
                trips?: {
                    start_time: string;
                    end_time: string;
                    reason: string;
                    approve_pass_time: string;
                    approve_apply_time: string;
                    idempotent_id?: string | undefined;
                    correct_process_id?: string[] | undefined;
                    cancel_process_id?: string[] | undefined;
                    process_id?: string[] | undefined;
                    departure?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    } | undefined;
                    destinations?: {
                        region_level?: string | undefined;
                        region_id?: string | undefined;
                    }[] | undefined;
                    transportation?: number[] | undefined;
                    trip_type?: number | undefined;
                    remarks?: string | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no", "open_id"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
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
            user_ids: z.ZodArray<z.ZodString, "many">;
            check_date_from: z.ZodNumber;
            check_date_to: z.ZodNumber;
            check_date_type: z.ZodOptional<z.ZodEnum<["PeriodTime", "CreateTime", "UpdateTime"]>>;
            status: z.ZodOptional<z.ZodNumber>;
            check_time_from: z.ZodOptional<z.ZodString>;
            check_time_to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
            check_time_from?: string | undefined;
            check_time_to?: string | undefined;
        }, {
            user_ids: string[];
            check_date_from: number;
            check_date_to: number;
            status?: number | undefined;
            check_date_type?: "PeriodTime" | "CreateTime" | "UpdateTime" | undefined;
            check_time_from?: string | undefined;
            check_time_to?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no", "open_id"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
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
            user_daily_shifts: z.ZodArray<z.ZodObject<{
                group_id: z.ZodString;
                shift_id: z.ZodString;
                month: z.ZodNumber;
                user_id: z.ZodString;
                day_no: z.ZodNumber;
                is_clear_schedule: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }, {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }>, "many">;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_daily_shifts: {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }[];
            operator_id?: string | undefined;
        }, {
            user_daily_shifts: {
                user_id: string;
                month: number;
                group_id: string;
                shift_id: string;
                day_no: number;
                is_clear_schedule?: boolean | undefined;
            }[];
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            user_tmp_daily_shifts: z.ZodArray<z.ZodObject<{
                group_id: z.ZodString;
                user_id: z.ZodString;
                date: z.ZodNumber;
                shift_name: z.ZodString;
                punch_time_simple_rules: z.ZodArray<z.ZodObject<{
                    on_time: z.ZodString;
                    off_time: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    on_time: string;
                    off_time: string;
                }, {
                    on_time: string;
                    off_time: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }, {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }>, "many">;
            operator_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_tmp_daily_shifts: {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }[];
            operator_id?: string | undefined;
        }, {
            user_tmp_daily_shifts: {
                date: number;
                user_id: string;
                group_id: string;
                shift_name: string;
                punch_time_simple_rules: {
                    on_time: string;
                    off_time: string;
                }[];
            }[];
            operator_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            flow_records: z.ZodArray<z.ZodObject<{
                user_id: z.ZodString;
                creator_id: z.ZodString;
                location_name: z.ZodString;
                check_time: z.ZodString;
                comment: z.ZodString;
                record_id: z.ZodOptional<z.ZodString>;
                ssid: z.ZodOptional<z.ZodString>;
                bssid: z.ZodOptional<z.ZodString>;
                is_field: z.ZodOptional<z.ZodBoolean>;
                is_wifi: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodNumber>;
                photo_urls: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                device_id: z.ZodOptional<z.ZodString>;
                check_result: z.ZodOptional<z.ZodEnum<["NoNeedCheck", "SystemCheck", "Normal", "Early", "Late", "SeriousLate", "Lack", "Invalid", "None", "Todo"]>>;
                external_id: z.ZodOptional<z.ZodString>;
                idempotent_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }, {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            flow_records: {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }[];
        }, {
            flow_records: {
                user_id: string;
                comment: string;
                location_name: string;
                creator_id: string;
                check_time: string;
                type?: number | undefined;
                device_id?: string | undefined;
                idempotent_id?: string | undefined;
                ssid?: string | undefined;
                bssid?: string | undefined;
                record_id?: string | undefined;
                is_field?: boolean | undefined;
                is_wifi?: boolean | undefined;
                photo_urls?: string[] | undefined;
                check_result?: "NoNeedCheck" | "SystemCheck" | "Normal" | "Early" | "Late" | "SeriousLate" | "Lack" | "Invalid" | "None" | "Todo" | undefined;
                external_id?: string | undefined;
            }[];
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            record_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            record_ids: string[];
        }, {
            record_ids: string[];
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
            employee_type: z.ZodEnum<["open_id", "employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }, {
            employee_type: "open_id" | "employee_id" | "employee_no";
        }>;
        path: z.ZodObject<{
            user_flow_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_flow_id: string;
        }, {
            user_flow_id: string;
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
            user_setting: z.ZodOptional<z.ZodObject<{
                user_id: z.ZodString;
                face_key: z.ZodString;
                face_key_update_time: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            }, {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            user_setting?: {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            } | undefined;
        }, {
            user_setting?: {
                user_id: string;
                face_key: string;
                face_key_update_time?: string | undefined;
            } | undefined;
        }>>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
        }, {
            user_ids: string[];
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            locale: z.ZodEnum<["en", "ja", "zh"]>;
            stats_type: z.ZodEnum<["daily", "month"]>;
            start_date: z.ZodNumber;
            end_date: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
        }, {
            start_date: number;
            end_date: number;
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            locale: z.ZodEnum<["en", "ja", "zh"]>;
            stats_type: z.ZodEnum<["daily", "month"]>;
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_id?: string | undefined;
        }, {
            locale: "en" | "ja" | "zh";
            stats_type: "month" | "daily";
            user_id?: string | undefined;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
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
            view: z.ZodObject<{
                view_id: z.ZodString;
                stats_type: z.ZodEnum<["daily", "month"]>;
                user_id: z.ZodString;
                items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    child_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        code: z.ZodString;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        code: string;
                    }, {
                        value: string;
                        code: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }, {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            }, {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            view: {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            };
        }, {
            view: {
                user_id: string;
                stats_type: "month" | "daily";
                view_id: string;
                items?: {
                    code: string;
                    child_items?: {
                        value: string;
                        code: string;
                    }[] | undefined;
                }[] | undefined;
            };
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
        path: z.ZodObject<{
            user_stats_view_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_stats_view_id: string;
        }, {
            user_stats_view_id: string;
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
            remedy_date: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            remedy_date: number;
        }, {
            user_id: string;
            remedy_date: number;
        }>;
        params: z.ZodObject<{
            employee_type: z.ZodEnum<["employee_id", "employee_no"]>;
        }, "strip", z.ZodTypeAny, {
            employee_type: "employee_id" | "employee_no";
        }, {
            employee_type: "employee_id" | "employee_no";
        }>;
    };
})[];
