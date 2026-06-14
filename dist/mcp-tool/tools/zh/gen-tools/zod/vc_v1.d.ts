import { z } from 'zod';
export type vcV1ToolName = 'vc.v1.alert.list' | 'vc.v1.export.get' | 'vc.v1.export.meetingList' | 'vc.v1.export.participantList' | 'vc.v1.export.participantQualityList' | 'vc.v1.export.resourceReservationList' | 'vc.v1.meetingList.get' | 'vc.v1.meeting.end' | 'vc.v1.meeting.get' | 'vc.v1.meeting.invite' | 'vc.v1.meeting.kickout' | 'vc.v1.meeting.listByNo' | 'vc.v1.meetingRecording.get' | 'vc.v1.meetingRecording.setPermission' | 'vc.v1.meetingRecording.start' | 'vc.v1.meetingRecording.stop' | 'vc.v1.meeting.setHost' | 'vc.v1.participantList.get' | 'vc.v1.participantQualityList.get' | 'vc.v1.report.getDaily' | 'vc.v1.report.getTopUser' | 'vc.v1.reserveConfigAdmin.get' | 'vc.v1.reserveConfigAdmin.patch' | 'vc.v1.reserveConfigDisableInform.get' | 'vc.v1.reserveConfigDisableInform.patch' | 'vc.v1.reserveConfigForm.get' | 'vc.v1.reserveConfigForm.patch' | 'vc.v1.reserveConfig.patch' | 'vc.v1.reserveConfig.reserveScope' | 'vc.v1.reserve.apply' | 'vc.v1.reserve.delete' | 'vc.v1.reserve.get' | 'vc.v1.reserve.getActiveMeeting' | 'vc.v1.reserve.update' | 'vc.v1.resourceReservationList.get' | 'vc.v1.roomConfig.query' | 'vc.v1.roomConfig.set' | 'vc.v1.roomConfig.setCheckboardAccessCode' | 'vc.v1.roomConfig.setRoomAccessCode' | 'vc.v1.roomLevel.create' | 'vc.v1.roomLevel.del' | 'vc.v1.roomLevel.get' | 'vc.v1.roomLevel.list' | 'vc.v1.roomLevel.mget' | 'vc.v1.roomLevel.patch' | 'vc.v1.roomLevel.search' | 'vc.v1.room.create' | 'vc.v1.room.delete' | 'vc.v1.room.get' | 'vc.v1.room.list' | 'vc.v1.room.mget' | 'vc.v1.room.patch' | 'vc.v1.room.search' | 'vc.v1.scopeConfig.create' | 'vc.v1.scopeConfig.get';
export declare const vcV1AlertList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            query_type: z.ZodOptional<z.ZodNumber>;
            query_value: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            query_type?: number | undefined;
            query_value?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            query_type?: number | undefined;
            query_value?: string | undefined;
        }>;
    };
};
export declare const vcV1ExportGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ExportMeetingList: {
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
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            meeting_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
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
export declare const vcV1ExportParticipantList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
        }, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
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
export declare const vcV1ExportParticipantQualityList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_no: z.ZodString;
            join_time: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
        }, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
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
export declare const vcV1ExportResourceReservationList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            room_level_id: z.ZodString;
            need_topic: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            room_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            is_exclude: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            room_level_id: string;
            room_ids?: string[] | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }, {
            start_time: string;
            end_time: string;
            room_level_id: string;
            room_ids?: string[] | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingListGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            meeting_type: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingEnd: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            with_participants: z.ZodOptional<z.ZodBoolean>;
            with_meeting_ability: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_participants?: boolean | undefined;
            with_meeting_ability?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_participants?: boolean | undefined;
            with_meeting_ability?: boolean | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingInvite: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            invitees: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                user_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                user_type?: number | undefined;
            }, {
                id?: string | undefined;
                user_type?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            invitees: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }, {
            invitees: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingKickout: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            kickout_users: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                user_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                user_type?: number | undefined;
            }, {
                id?: string | undefined;
                user_type?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            kickout_users: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }, {
            kickout_users: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1MeetingListByNo: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            meeting_no: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            meeting_no: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            meeting_no: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingRecordingGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingRecordingSetPermission: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            permission_objects: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                type: z.ZodNumber;
                permission: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: number;
                permission: number;
                id?: string | undefined;
            }, {
                type: number;
                permission: number;
                id?: string | undefined;
            }>, "many">;
            action_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            permission_objects: {
                type: number;
                permission: number;
                id?: string | undefined;
            }[];
            action_type?: number | undefined;
        }, {
            permission_objects: {
                type: number;
                permission: number;
                id?: string | undefined;
            }[];
            action_type?: number | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingRecordingStart: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            timezone: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            timezone?: number | undefined;
        }, {
            timezone?: number | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingRecordingStop: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1MeetingSetHost: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            host_user: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                user_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                user_type?: number | undefined;
            }, {
                id?: string | undefined;
                user_type?: number | undefined;
            }>;
            old_host_user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                user_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                user_type?: number | undefined;
            }, {
                id?: string | undefined;
                user_type?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            host_user: {
                id?: string | undefined;
                user_type?: number | undefined;
            };
            old_host_user?: {
                id?: string | undefined;
                user_type?: number | undefined;
            } | undefined;
        }, {
            host_user: {
                id?: string | undefined;
                user_type?: number | undefined;
            };
            old_host_user?: {
                id?: string | undefined;
                user_type?: number | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ParticipantListGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
        }, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ParticipantQualityListGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_no: z.ZodString;
            join_time: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
        }, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ReportGetDaily: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            unit: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            unit?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            unit?: number | undefined;
        }>;
    };
};
export declare const vcV1ReportGetTopUser: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            limit: z.ZodNumber;
            order_by: z.ZodNumber;
            unit: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            order_by: number;
            start_time: string;
            end_time: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            unit?: number | undefined;
        }, {
            limit: number;
            order_by: number;
            start_time: string;
            end_time: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            unit?: number | undefined;
        }>;
    };
};
export declare const vcV1ReserveConfigAdminGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope_type: z.ZodNumber;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1ReserveConfigAdminPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope_type: z.ZodNumber;
            reserve_admin_config: z.ZodObject<{
                depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            reserve_admin_config: {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }, {
            scope_type: number;
            reserve_admin_config: {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
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
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1ReserveConfigDisableInformGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope_type: z.ZodNumber;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
        }>;
    };
};
export declare const vcV1ReserveConfigDisableInformPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope_type: z.ZodNumber;
            disable_inform: z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                if_inform: z.ZodBoolean;
                informed_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                informed_depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            disable_inform: {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }, {
            scope_type: number;
            disable_inform: {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
        }>;
    };
};
export declare const vcV1ReserveConfigFormGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope_type: z.ZodNumber;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1ReserveConfigFormPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope_type: z.ZodNumber;
            reserve_form_config: z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                reserve_form: z.ZodBoolean;
                notified_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                notified_time: z.ZodOptional<z.ZodNumber>;
                time_unit: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            }, {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            reserve_form_config: {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            };
        }, {
            scope_type: number;
            reserve_form_config: {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
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
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1ReserveConfigPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope_type: z.ZodString;
            approval_config: z.ZodOptional<z.ZodObject<{
                approval_switch: z.ZodOptional<z.ZodNumber>;
                approval_condition: z.ZodOptional<z.ZodNumber>;
                meeting_duration: z.ZodOptional<z.ZodNumber>;
                approvers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            }, {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            }>>;
            time_config: z.ZodOptional<z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                time_switch: z.ZodNumber;
                days_in_advance: z.ZodOptional<z.ZodNumber>;
                opening_hour: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                max_duration: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            }, {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            }>>;
            reserve_scope_config: z.ZodOptional<z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                allow_all_users: z.ZodOptional<z.ZodNumber>;
                allow_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                allow_depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: string;
            approval_config?: {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            } | undefined;
            time_config?: {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            } | undefined;
            reserve_scope_config?: {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            } | undefined;
        }, {
            scope_type: string;
            approval_config?: {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            } | undefined;
            time_config?: {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            } | undefined;
            reserve_scope_config?: {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
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
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
        }>;
    };
};
export declare const vcV1ReserveConfigReserveScope: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope_id: z.ZodString;
            scope_type: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: string;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: string;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const vcV1ReserveApply: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            end_time: z.ZodOptional<z.ZodString>;
            owner_id: z.ZodOptional<z.ZodString>;
            meeting_settings: z.ZodObject<{
                topic: z.ZodOptional<z.ZodString>;
                action_permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    permission: z.ZodNumber;
                    permission_checkers: z.ZodArray<z.ZodObject<{
                        check_field: z.ZodNumber;
                        check_mode: z.ZodNumber;
                        check_list: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }>, "many">>;
                meeting_initial_type: z.ZodOptional<z.ZodNumber>;
                meeting_connect: z.ZodOptional<z.ZodBoolean>;
                call_setting: z.ZodOptional<z.ZodObject<{
                    callee: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        user_type: z.ZodNumber;
                        pstn_sip_info: z.ZodOptional<z.ZodObject<{
                            nickname: z.ZodOptional<z.ZodString>;
                            main_address: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            main_address: string;
                            nickname?: string | undefined;
                        }, {
                            main_address: string;
                            nickname?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }>>;
                auto_record: z.ZodOptional<z.ZodBoolean>;
                assign_host_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_type: z.ZodOptional<z.ZodNumber>;
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }>, "many">>;
                password: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            meeting_settings: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            };
            end_time?: string | undefined;
            owner_id?: string | undefined;
        }, {
            meeting_settings: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            };
            end_time?: string | undefined;
            owner_id?: string | undefined;
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
export declare const vcV1ReserveDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            reserve_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_id?: string | undefined;
        }, {
            reserve_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ReserveGet: {
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
        path: z.ZodOptional<z.ZodObject<{
            reserve_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_id?: string | undefined;
        }, {
            reserve_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ReserveGetActiveMeeting: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            with_participants: z.ZodOptional<z.ZodBoolean>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_participants?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            with_participants?: boolean | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            reserve_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_id?: string | undefined;
        }, {
            reserve_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ReserveUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            end_time: z.ZodOptional<z.ZodString>;
            meeting_settings: z.ZodOptional<z.ZodObject<{
                topic: z.ZodOptional<z.ZodString>;
                action_permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    permission: z.ZodNumber;
                    permission_checkers: z.ZodArray<z.ZodObject<{
                        check_field: z.ZodNumber;
                        check_mode: z.ZodNumber;
                        check_list: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }>, "many">>;
                meeting_initial_type: z.ZodOptional<z.ZodNumber>;
                meeting_connect: z.ZodOptional<z.ZodBoolean>;
                call_setting: z.ZodOptional<z.ZodObject<{
                    callee: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        user_type: z.ZodNumber;
                        pstn_sip_info: z.ZodOptional<z.ZodObject<{
                            nickname: z.ZodOptional<z.ZodString>;
                            main_address: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            main_address: string;
                            nickname?: string | undefined;
                        }, {
                            main_address: string;
                            nickname?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }>>;
                auto_record: z.ZodOptional<z.ZodBoolean>;
                assign_host_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_type: z.ZodOptional<z.ZodNumber>;
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }>, "many">>;
                password: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            end_time?: string | undefined;
            meeting_settings?: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            end_time?: string | undefined;
            meeting_settings?: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            reserve_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_id?: string | undefined;
        }, {
            reserve_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1ResourceReservationListGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            room_level_id: z.ZodString;
            need_topic: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            room_ids: z.ZodArray<z.ZodString, "many">;
            is_exclude: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            room_ids: string[];
            room_level_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }, {
            start_time: string;
            end_time: string;
            room_ids: string[];
            room_level_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const vcV1RoomConfigQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope: z.ZodNumber;
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            scope: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }>;
    };
};
export declare const vcV1RoomConfigSet: {
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
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            room_config: z.ZodObject<{
                room_background: z.ZodOptional<z.ZodString>;
                display_background: z.ZodOptional<z.ZodString>;
                digital_signage: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_box_digital_signage: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_status: z.ZodOptional<z.ZodObject<{
                    status: z.ZodBoolean;
                    disable_start_time: z.ZodOptional<z.ZodString>;
                    disable_end_time: z.ZodOptional<z.ZodString>;
                    disable_reason: z.ZodOptional<z.ZodString>;
                    contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    disable_notice: z.ZodOptional<z.ZodBoolean>;
                    resume_notice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                }, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            }, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            room_config: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            };
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            scope: number;
            room_config: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            };
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
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
export declare const vcV1RoomConfigSetCheckboardAccessCode: {
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
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            valid_day: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }>;
    };
};
export declare const vcV1RoomConfigSetRoomAccessCode: {
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
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            valid_day: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }>;
    };
};
export declare const vcV1RoomLevelCreate: {
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
            parent_id: z.ZodString;
            custom_group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
        }, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
        }>;
    };
};
export declare const vcV1RoomLevelDel: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            room_level_id: z.ZodString;
            delete_child: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            room_level_id: string;
            delete_child?: boolean | undefined;
        }, {
            room_level_id: string;
            delete_child?: boolean | undefined;
        }>;
    };
};
export declare const vcV1RoomLevelGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            room_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_level_id: string;
        }, {
            room_level_id: string;
        }>;
    };
};
export declare const vcV1RoomLevelList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            room_level_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            room_level_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            room_level_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1RoomLevelMget: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            level_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            level_ids: string[];
        }, {
            level_ids: string[];
        }>;
    };
};
export declare const vcV1RoomLevelPatch: {
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
            parent_id: z.ZodString;
            custom_group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
        }, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
        }>;
        path: z.ZodObject<{
            room_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_level_id: string;
        }, {
            room_level_id: string;
        }>;
    };
};
export declare const vcV1RoomLevelSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            custom_level_ids: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_level_ids: string;
        }, {
            custom_level_ids: string;
        }>;
    };
};
export declare const vcV1RoomCreate: {
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
            capacity: z.ZodNumber;
            description: z.ZodOptional<z.ZodString>;
            custom_room_id: z.ZodOptional<z.ZodString>;
            room_level_id: z.ZodString;
            room_status: z.ZodOptional<z.ZodObject<{
                status: z.ZodBoolean;
                schedule_status: z.ZodOptional<z.ZodBoolean>;
                disable_start_time: z.ZodOptional<z.ZodString>;
                disable_end_time: z.ZodOptional<z.ZodString>;
                disable_reason: z.ZodOptional<z.ZodString>;
                contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                disable_notice: z.ZodOptional<z.ZodBoolean>;
                resume_notice: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }>>;
            device: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            room_level_id: string;
            capacity: number;
            description?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
        }, {
            name: string;
            room_level_id: string;
            capacity: number;
            description?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
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
export declare const vcV1RoomDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            room_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_id: string;
        }, {
            room_id: string;
        }>;
    };
};
export declare const vcV1RoomGet: {
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
            room_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_id: string;
        }, {
            room_id: string;
        }>;
    };
};
export declare const vcV1RoomList: {
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
            room_level_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_level_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_level_id?: string | undefined;
        }>>;
    };
};
export declare const vcV1RoomMget: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            room_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            room_ids: string[];
        }, {
            room_ids: string[];
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
export declare const vcV1RoomPatch: {
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
            capacity: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            custom_room_id: z.ZodOptional<z.ZodString>;
            room_level_id: z.ZodOptional<z.ZodString>;
            room_status: z.ZodOptional<z.ZodObject<{
                status: z.ZodBoolean;
                schedule_status: z.ZodOptional<z.ZodBoolean>;
                disable_start_time: z.ZodOptional<z.ZodString>;
                disable_end_time: z.ZodOptional<z.ZodString>;
                disable_reason: z.ZodOptional<z.ZodString>;
                contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                disable_notice: z.ZodOptional<z.ZodBoolean>;
                resume_notice: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }>>;
            device: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            room_level_id?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            capacity?: number | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            room_level_id?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            capacity?: number | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            room_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_id: string;
        }, {
            room_id: string;
        }>;
    };
};
export declare const vcV1RoomSearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            custom_room_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            keyword: z.ZodOptional<z.ZodString>;
            room_level_id: z.ZodOptional<z.ZodString>;
            search_level_name: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            room_level_id?: string | undefined;
            custom_room_ids?: string[] | undefined;
            search_level_name?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            room_level_id?: string | undefined;
            custom_room_ids?: string[] | undefined;
            search_level_name?: boolean | undefined;
        }>>;
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
export declare const vcV1ScopeConfigCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            scope_type: z.ZodNumber;
            scope_id: z.ZodString;
            scope_config: z.ZodOptional<z.ZodObject<{
                room_background: z.ZodOptional<z.ZodString>;
                display_background: z.ZodOptional<z.ZodString>;
                digital_signage: z.ZodOptional<z.ZodObject<{
                    if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_box_digital_signage: z.ZodOptional<z.ZodObject<{
                    if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_status: z.ZodOptional<z.ZodObject<{
                    status: z.ZodBoolean;
                    schedule_status: z.ZodOptional<z.ZodBoolean>;
                    disable_start_time: z.ZodOptional<z.ZodString>;
                    disable_end_time: z.ZodOptional<z.ZodString>;
                    disable_reason: z.ZodOptional<z.ZodString>;
                    contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    disable_notice: z.ZodOptional<z.ZodBoolean>;
                    resume_notice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                }, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            }, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            scope_id: string;
            scope_config?: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            } | undefined;
        }, {
            scope_type: number;
            scope_id: string;
            scope_config?: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
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
export declare const vcV1ScopeConfigGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            scope_type: z.ZodNumber;
            scope_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
};
export declare const vcV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            start_time: z.ZodString;
            end_time: z.ZodString;
            query_type: z.ZodOptional<z.ZodNumber>;
            query_value: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            query_type?: number | undefined;
            query_value?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            query_type?: number | undefined;
            query_value?: string | undefined;
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
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
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
            start_time: z.ZodString;
            end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            meeting_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
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
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
        }, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
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
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_no: z.ZodString;
            join_time: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
        }, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
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
            room_level_id: z.ZodString;
            need_topic: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            room_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            is_exclude: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            room_level_id: string;
            room_ids?: string[] | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }, {
            start_time: string;
            end_time: string;
            room_level_id: string;
            room_ids?: string[] | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
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
            start_time: z.ZodString;
            end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            meeting_type: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
            meeting_no?: string | undefined;
            meeting_type?: number | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
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
            kickout_users: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                user_type: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                user_type?: number | undefined;
            }, {
                id?: string | undefined;
                user_type?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            kickout_users: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }, {
            kickout_users: {
                id?: string | undefined;
                user_type?: number | undefined;
            }[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            meeting_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            meeting_id?: string | undefined;
        }, {
            meeting_id?: string | undefined;
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
            meeting_no: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            meeting_no: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            meeting_no: string;
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
        params: z.ZodObject<{
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_status: z.ZodOptional<z.ZodNumber>;
            meeting_no: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
        }, {
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            meeting_status?: number | undefined;
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
            meeting_start_time: z.ZodString;
            meeting_end_time: z.ZodString;
            meeting_no: z.ZodString;
            join_time: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
        }, {
            join_time: string;
            meeting_no: string;
            meeting_start_time: string;
            meeting_end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
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
            start_time: z.ZodString;
            end_time: z.ZodString;
            unit: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            unit?: number | undefined;
        }, {
            start_time: string;
            end_time: string;
            unit?: number | undefined;
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
            scope_type: z.ZodNumber;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
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
            scope_type: z.ZodNumber;
            reserve_admin_config: z.ZodObject<{
                depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            reserve_admin_config: {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }, {
            scope_type: number;
            reserve_admin_config: {
                users?: {
                    user_id: string;
                }[] | undefined;
                depts?: {
                    department_id: string;
                }[] | undefined;
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
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
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
            scope_type: z.ZodNumber;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
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
            scope_type: z.ZodNumber;
            disable_inform: z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                if_inform: z.ZodBoolean;
                informed_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                informed_depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            disable_inform: {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }, {
            scope_type: number;
            disable_inform: {
                if_inform: boolean;
                if_cover_child_scope?: boolean | undefined;
                informed_users?: {
                    user_id: string;
                }[] | undefined;
                informed_depts?: {
                    department_id: string;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
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
            scope_type: z.ZodNumber;
            reserve_form_config: z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                reserve_form: z.ZodBoolean;
                notified_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                notified_time: z.ZodOptional<z.ZodNumber>;
                time_unit: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            }, {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            reserve_form_config: {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
            };
        }, {
            scope_type: number;
            reserve_form_config: {
                reserve_form: boolean;
                if_cover_child_scope?: boolean | undefined;
                notified_users?: {
                    user_id: string;
                }[] | undefined;
                notified_time?: number | undefined;
                time_unit?: number | undefined;
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
            reserve_config_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id?: string | undefined;
        }, {
            reserve_config_id?: string | undefined;
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
            scope_type: z.ZodString;
            approval_config: z.ZodOptional<z.ZodObject<{
                approval_switch: z.ZodOptional<z.ZodNumber>;
                approval_condition: z.ZodOptional<z.ZodNumber>;
                meeting_duration: z.ZodOptional<z.ZodNumber>;
                approvers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            }, {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            }>>;
            time_config: z.ZodOptional<z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                time_switch: z.ZodNumber;
                days_in_advance: z.ZodOptional<z.ZodNumber>;
                opening_hour: z.ZodOptional<z.ZodString>;
                start_time: z.ZodOptional<z.ZodString>;
                end_time: z.ZodOptional<z.ZodString>;
                max_duration: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            }, {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            }>>;
            reserve_scope_config: z.ZodOptional<z.ZodObject<{
                if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                allow_all_users: z.ZodOptional<z.ZodNumber>;
                allow_users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    user_id: string;
                }, {
                    user_id: string;
                }>, "many">>;
                allow_depts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    department_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    department_id: string;
                }, {
                    department_id: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            }, {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: string;
            approval_config?: {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            } | undefined;
            time_config?: {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            } | undefined;
            reserve_scope_config?: {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
            } | undefined;
        }, {
            scope_type: string;
            approval_config?: {
                approvers?: {
                    user_id: string;
                }[] | undefined;
                approval_switch?: number | undefined;
                approval_condition?: number | undefined;
                meeting_duration?: number | undefined;
            } | undefined;
            time_config?: {
                time_switch: number;
                start_time?: string | undefined;
                end_time?: string | undefined;
                if_cover_child_scope?: boolean | undefined;
                days_in_advance?: number | undefined;
                opening_hour?: string | undefined;
                max_duration?: number | undefined;
            } | undefined;
            reserve_scope_config?: {
                if_cover_child_scope?: boolean | undefined;
                allow_all_users?: number | undefined;
                allow_users?: {
                    user_id: string;
                }[] | undefined;
                allow_depts?: {
                    department_id: string;
                }[] | undefined;
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
            reserve_config_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reserve_config_id: string;
        }, {
            reserve_config_id: string;
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
            scope_id: z.ZodString;
            scope_type: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: string;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: string;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
            end_time: z.ZodOptional<z.ZodString>;
            owner_id: z.ZodOptional<z.ZodString>;
            meeting_settings: z.ZodObject<{
                topic: z.ZodOptional<z.ZodString>;
                action_permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    permission: z.ZodNumber;
                    permission_checkers: z.ZodArray<z.ZodObject<{
                        check_field: z.ZodNumber;
                        check_mode: z.ZodNumber;
                        check_list: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }, {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }, {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }>, "many">>;
                meeting_initial_type: z.ZodOptional<z.ZodNumber>;
                meeting_connect: z.ZodOptional<z.ZodBoolean>;
                call_setting: z.ZodOptional<z.ZodObject<{
                    callee: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        user_type: z.ZodNumber;
                        pstn_sip_info: z.ZodOptional<z.ZodObject<{
                            nickname: z.ZodOptional<z.ZodString>;
                            main_address: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            main_address: string;
                            nickname?: string | undefined;
                        }, {
                            main_address: string;
                            nickname?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }, {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }, {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                }>>;
                auto_record: z.ZodOptional<z.ZodBoolean>;
                assign_host_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    user_type: z.ZodOptional<z.ZodNumber>;
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }, {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }>, "many">>;
                password: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }, {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            meeting_settings: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            };
            end_time?: string | undefined;
            owner_id?: string | undefined;
        }, {
            meeting_settings: {
                password?: string | undefined;
                topic?: string | undefined;
                auto_record?: boolean | undefined;
                action_permissions?: {
                    permission: number;
                    permission_checkers: {
                        check_field: number;
                        check_mode: number;
                        check_list: string[];
                    }[];
                }[] | undefined;
                meeting_initial_type?: number | undefined;
                meeting_connect?: boolean | undefined;
                call_setting?: {
                    callee: {
                        user_type: number;
                        id?: string | undefined;
                        pstn_sip_info?: {
                            main_address: string;
                            nickname?: string | undefined;
                        } | undefined;
                    };
                } | undefined;
                assign_host_list?: {
                    id?: string | undefined;
                    user_type?: number | undefined;
                }[] | undefined;
            };
            end_time?: string | undefined;
            owner_id?: string | undefined;
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
            reserve_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reserve_id?: string | undefined;
        }, {
            reserve_id?: string | undefined;
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
        params: z.ZodObject<{
            room_level_id: z.ZodString;
            need_topic: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodString;
            end_time: z.ZodString;
            room_ids: z.ZodArray<z.ZodString, "many">;
            is_exclude: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            room_ids: string[];
            room_level_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
        }, {
            start_time: string;
            end_time: string;
            room_ids: string[];
            room_level_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            need_topic?: boolean | undefined;
            is_exclude?: boolean | undefined;
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
            scope: z.ZodNumber;
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            scope: number;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
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
            scope: z.ZodNumber;
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            room_config: z.ZodObject<{
                room_background: z.ZodOptional<z.ZodString>;
                display_background: z.ZodOptional<z.ZodString>;
                digital_signage: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_box_digital_signage: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_status: z.ZodOptional<z.ZodObject<{
                    status: z.ZodBoolean;
                    disable_start_time: z.ZodOptional<z.ZodString>;
                    disable_end_time: z.ZodOptional<z.ZodString>;
                    disable_reason: z.ZodOptional<z.ZodString>;
                    contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    disable_notice: z.ZodOptional<z.ZodBoolean>;
                    resume_notice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                }, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            }, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            scope: number;
            room_config: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            };
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            scope: number;
            room_config: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                } | undefined;
            };
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
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
        data: z.ZodObject<{
            scope: z.ZodNumber;
            country_id: z.ZodOptional<z.ZodString>;
            district_id: z.ZodOptional<z.ZodString>;
            building_id: z.ZodOptional<z.ZodString>;
            floor_name: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            valid_day: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
        }, {
            valid_day: number;
            scope: number;
            room_id?: string | undefined;
            country_id?: string | undefined;
            district_id?: string | undefined;
            building_id?: string | undefined;
            floor_name?: string | undefined;
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
            parent_id: z.ZodString;
            custom_group_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
        }, {
            name: string;
            parent_id: string;
            custom_group_id?: string | undefined;
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
            room_level_id: z.ZodString;
            delete_child: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            room_level_id: string;
            delete_child?: boolean | undefined;
        }, {
            room_level_id: string;
            delete_child?: boolean | undefined;
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
            room_level_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_level_id: string;
        }, {
            room_level_id: string;
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
            room_level_id: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            room_level_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            room_level_id?: string | undefined;
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
            level_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            level_ids: string[];
        }, {
            level_ids: string[];
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
            custom_level_ids: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom_level_ids: string;
        }, {
            custom_level_ids: string;
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
            capacity: z.ZodNumber;
            description: z.ZodOptional<z.ZodString>;
            custom_room_id: z.ZodOptional<z.ZodString>;
            room_level_id: z.ZodString;
            room_status: z.ZodOptional<z.ZodObject<{
                status: z.ZodBoolean;
                schedule_status: z.ZodOptional<z.ZodBoolean>;
                disable_start_time: z.ZodOptional<z.ZodString>;
                disable_end_time: z.ZodOptional<z.ZodString>;
                disable_reason: z.ZodOptional<z.ZodString>;
                contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                disable_notice: z.ZodOptional<z.ZodBoolean>;
                resume_notice: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }, {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            }>>;
            device: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            room_level_id: string;
            capacity: number;
            description?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
        }, {
            name: string;
            room_level_id: string;
            capacity: number;
            description?: string | undefined;
            room_status?: {
                status: boolean;
                disable_start_time?: string | undefined;
                disable_end_time?: string | undefined;
                disable_reason?: string | undefined;
                contact_ids?: string[] | undefined;
                disable_notice?: boolean | undefined;
                resume_notice?: boolean | undefined;
                schedule_status?: boolean | undefined;
            } | undefined;
            custom_room_id?: string | undefined;
            device?: {
                name: string;
            }[] | undefined;
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
        path: z.ZodObject<{
            room_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            room_id: string;
        }, {
            room_id: string;
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
            room_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            room_ids: string[];
        }, {
            room_ids: string[];
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
            custom_room_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            keyword: z.ZodOptional<z.ZodString>;
            room_level_id: z.ZodOptional<z.ZodString>;
            search_level_name: z.ZodOptional<z.ZodBoolean>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            room_level_id?: string | undefined;
            custom_room_ids?: string[] | undefined;
            search_level_name?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            room_level_id?: string | undefined;
            custom_room_ids?: string[] | undefined;
            search_level_name?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
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
            scope_type: z.ZodNumber;
            scope_id: z.ZodString;
            scope_config: z.ZodOptional<z.ZodObject<{
                room_background: z.ZodOptional<z.ZodString>;
                display_background: z.ZodOptional<z.ZodString>;
                digital_signage: z.ZodOptional<z.ZodObject<{
                    if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_box_digital_signage: z.ZodOptional<z.ZodObject<{
                    if_cover_child_scope: z.ZodOptional<z.ZodBoolean>;
                    enable: z.ZodOptional<z.ZodBoolean>;
                    mute: z.ZodOptional<z.ZodBoolean>;
                    start_display: z.ZodOptional<z.ZodNumber>;
                    stop_display: z.ZodOptional<z.ZodNumber>;
                    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                        material_type: z.ZodOptional<z.ZodNumber>;
                        url: z.ZodOptional<z.ZodString>;
                        duration: z.ZodOptional<z.ZodNumber>;
                        cover: z.ZodOptional<z.ZodString>;
                        md5: z.ZodOptional<z.ZodString>;
                        vid: z.ZodOptional<z.ZodString>;
                        size: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }, {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                }>>;
                room_status: z.ZodOptional<z.ZodObject<{
                    status: z.ZodBoolean;
                    schedule_status: z.ZodOptional<z.ZodBoolean>;
                    disable_start_time: z.ZodOptional<z.ZodString>;
                    disable_end_time: z.ZodOptional<z.ZodString>;
                    disable_reason: z.ZodOptional<z.ZodString>;
                    contact_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    disable_notice: z.ZodOptional<z.ZodBoolean>;
                    resume_notice: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                }, {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            }, {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            scope_id: string;
            scope_config?: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
            } | undefined;
        }, {
            scope_type: number;
            scope_id: string;
            scope_config?: {
                room_background?: string | undefined;
                display_background?: string | undefined;
                digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_box_digital_signage?: {
                    enable?: boolean | undefined;
                    if_cover_child_scope?: boolean | undefined;
                    mute?: boolean | undefined;
                    start_display?: number | undefined;
                    stop_display?: number | undefined;
                    materials?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        size?: string | undefined;
                        url?: string | undefined;
                        duration?: number | undefined;
                        material_type?: number | undefined;
                        cover?: string | undefined;
                        md5?: string | undefined;
                        vid?: string | undefined;
                    }[] | undefined;
                } | undefined;
                room_status?: {
                    status: boolean;
                    disable_start_time?: string | undefined;
                    disable_end_time?: string | undefined;
                    disable_reason?: string | undefined;
                    contact_ids?: string[] | undefined;
                    disable_notice?: boolean | undefined;
                    resume_notice?: boolean | undefined;
                    schedule_status?: boolean | undefined;
                } | undefined;
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
            scope_type: z.ZodNumber;
            scope_id: z.ZodString;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            scope_type: number;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            scope_type: number;
            scope_id: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
    };
})[];
