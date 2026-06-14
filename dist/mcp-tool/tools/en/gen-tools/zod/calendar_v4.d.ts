import { z } from 'zod';
export type calendarV4ToolName = 'calendar.v4.calendarAcl.create' | 'calendar.v4.calendarAcl.delete' | 'calendar.v4.calendarAcl.list' | 'calendar.v4.calendarAcl.subscription' | 'calendar.v4.calendarAcl.unsubscription' | 'calendar.v4.calendar.create' | 'calendar.v4.calendar.delete' | 'calendar.v4.calendarEventAttendee.batchDelete' | 'calendar.v4.calendarEventAttendeeChatMember.list' | 'calendar.v4.calendarEventAttendee.create' | 'calendar.v4.calendarEventAttendee.list' | 'calendar.v4.calendarEvent.create' | 'calendar.v4.calendarEvent.delete' | 'calendar.v4.calendarEvent.get' | 'calendar.v4.calendarEvent.instanceView' | 'calendar.v4.calendarEvent.instances' | 'calendar.v4.calendarEvent.list' | 'calendar.v4.calendarEventMeetingChat.create' | 'calendar.v4.calendarEventMeetingChat.delete' | 'calendar.v4.calendarEventMeetingMinute.create' | 'calendar.v4.calendarEvent.patch' | 'calendar.v4.calendarEvent.reply' | 'calendar.v4.calendarEvent.search' | 'calendar.v4.calendarEvent.subscription' | 'calendar.v4.calendarEvent.unsubscription' | 'calendar.v4.calendar.get' | 'calendar.v4.calendar.list' | 'calendar.v4.calendar.patch' | 'calendar.v4.calendar.primary' | 'calendar.v4.calendar.search' | 'calendar.v4.calendar.subscribe' | 'calendar.v4.calendar.subscription' | 'calendar.v4.calendar.unsubscribe' | 'calendar.v4.calendar.unsubscription' | 'calendar.v4.exchangeBinding.create' | 'calendar.v4.exchangeBinding.delete' | 'calendar.v4.exchangeBinding.get' | 'calendar.v4.freebusy.list' | 'calendar.v4.setting.generateCaldavConf' | 'calendar.v4.timeoffEvent.create' | 'calendar.v4.timeoffEvent.delete';
export declare const calendarV4CalendarAclCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            role: z.ZodEnum<["unknown", "free_busy_reader", "reader", "writer", "owner"]>;
            scope: z.ZodObject<{
                type: z.ZodLiteral<"user">;
                user_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "user";
                user_id?: string | undefined;
            }, {
                type: "user";
                user_id?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            role: "unknown" | "free_busy_reader" | "reader" | "writer" | "owner";
            scope: {
                type: "user";
                user_id?: string | undefined;
            };
        }, {
            role: "unknown" | "free_busy_reader" | "reader" | "writer" | "owner";
            scope: {
                type: "user";
                user_id?: string | undefined;
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
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarAclDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            acl_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            acl_id: string;
        }, {
            calendar_id: string;
            acl_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarAclList: {
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
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarAclSubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarAclUnsubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            permissions: z.ZodOptional<z.ZodEnum<["private", "show_only_free_busy", "public"]>>;
            color: z.ZodOptional<z.ZodNumber>;
            summary_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            color?: number | undefined;
            summary?: string | undefined;
            permissions?: "private" | "show_only_free_busy" | "public" | undefined;
            summary_alias?: string | undefined;
        }, {
            description?: string | undefined;
            color?: number | undefined;
            summary?: string | undefined;
            permissions?: "private" | "show_only_free_busy" | "public" | undefined;
            summary_alias?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventAttendeeBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            attendee_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            delete_ids: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["user", "chat", "resource", "third_party"]>>;
                user_id: z.ZodOptional<z.ZodString>;
                chat_id: z.ZodOptional<z.ZodString>;
                room_id: z.ZodOptional<z.ZodString>;
                third_party_email: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
            }, {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
            }>, "many">>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            instance_start_time_admin: z.ZodOptional<z.ZodString>;
            is_enable_admin: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            attendee_ids?: string[] | undefined;
            delete_ids?: {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
            }[] | undefined;
            need_notification?: boolean | undefined;
            instance_start_time_admin?: string | undefined;
            is_enable_admin?: boolean | undefined;
        }, {
            attendee_ids?: string[] | undefined;
            delete_ids?: {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
            }[] | undefined;
            need_notification?: boolean | undefined;
            instance_start_time_admin?: string | undefined;
            is_enable_admin?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventAttendeeChatMemberList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
            attendee_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
            attendee_id: string;
        }, {
            calendar_id: string;
            event_id: string;
            attendee_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventAttendeeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            attendees: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["user", "chat", "resource", "third_party"]>>;
                is_optional: z.ZodOptional<z.ZodBoolean>;
                user_id: z.ZodOptional<z.ZodString>;
                chat_id: z.ZodOptional<z.ZodString>;
                room_id: z.ZodOptional<z.ZodString>;
                third_party_email: z.ZodOptional<z.ZodString>;
                operate_id: z.ZodOptional<z.ZodString>;
                resource_customization: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    index_key: z.ZodString;
                    input_content: z.ZodOptional<z.ZodString>;
                    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        option_key: z.ZodOptional<z.ZodString>;
                        others_content: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }, {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }, {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }>, "many">>;
                approval_reason: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
                is_optional?: boolean | undefined;
                operate_id?: string | undefined;
                resource_customization?: {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }[] | undefined;
                approval_reason?: string | undefined;
            }, {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
                is_optional?: boolean | undefined;
                operate_id?: string | undefined;
                resource_customization?: {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }[] | undefined;
                approval_reason?: string | undefined;
            }>, "many">>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            instance_start_time_admin: z.ZodOptional<z.ZodString>;
            is_enable_admin: z.ZodOptional<z.ZodBoolean>;
            add_operator_to_attendee: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            need_notification?: boolean | undefined;
            instance_start_time_admin?: string | undefined;
            is_enable_admin?: boolean | undefined;
            attendees?: {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
                is_optional?: boolean | undefined;
                operate_id?: string | undefined;
                resource_customization?: {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }[] | undefined;
                approval_reason?: string | undefined;
            }[] | undefined;
            add_operator_to_attendee?: boolean | undefined;
        }, {
            need_notification?: boolean | undefined;
            instance_start_time_admin?: string | undefined;
            is_enable_admin?: boolean | undefined;
            attendees?: {
                type?: "user" | "resource" | "chat" | "third_party" | undefined;
                user_id?: string | undefined;
                chat_id?: string | undefined;
                room_id?: string | undefined;
                third_party_email?: string | undefined;
                is_optional?: boolean | undefined;
                operate_id?: string | undefined;
                resource_customization?: {
                    index_key: string;
                    options?: {
                        option_key?: string | undefined;
                        others_content?: string | undefined;
                    }[] | undefined;
                    input_content?: string | undefined;
                }[] | undefined;
                approval_reason?: string | undefined;
            }[] | undefined;
            add_operator_to_attendee?: boolean | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventAttendeeList: {
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
            need_resource_customization: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            need_resource_customization?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            need_resource_customization?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodObject<{
                date: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }>;
            end_time: z.ZodObject<{
                date: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }>;
            vchat: z.ZodOptional<z.ZodObject<{
                vc_type: z.ZodOptional<z.ZodEnum<["vc", "third_party", "no_meeting", "lark_live", "unknown"]>>;
                icon_type: z.ZodOptional<z.ZodEnum<["vc", "live", "default"]>>;
                description: z.ZodOptional<z.ZodString>;
                meeting_url: z.ZodOptional<z.ZodString>;
                meeting_settings: z.ZodOptional<z.ZodObject<{
                    owner_id: z.ZodOptional<z.ZodString>;
                    join_meeting_permission: z.ZodOptional<z.ZodEnum<["anyone_can_join", "only_organization_employees", "only_event_attendees"]>>;
                    assign_hosts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    auto_record: z.ZodOptional<z.ZodBoolean>;
                    open_lobby: z.ZodOptional<z.ZodBoolean>;
                    allow_attendees_start: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                }, {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            }, {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            }>>;
            visibility: z.ZodOptional<z.ZodEnum<["default", "public", "private"]>>;
            attendee_ability: z.ZodOptional<z.ZodEnum<["none", "can_see_others", "can_invite_others", "can_modify_event"]>>;
            free_busy_status: z.ZodOptional<z.ZodEnum<["busy", "free"]>>;
            location: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                latitude: z.ZodOptional<z.ZodNumber>;
                longitude: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            }, {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            }>>;
            color: z.ZodOptional<z.ZodNumber>;
            reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                minutes: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                minutes?: number | undefined;
            }, {
                minutes?: number | undefined;
            }>, "many">>;
            recurrence: z.ZodOptional<z.ZodString>;
            schemas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ui_name: z.ZodOptional<z.ZodString>;
                ui_status: z.ZodOptional<z.ZodEnum<["hide", "readonly", "editable", "unknown"]>>;
                app_link: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }, {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }>, "many">>;
            attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_token: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                file_token?: string | undefined;
            }, {
                file_token?: string | undefined;
            }>, "many">>;
            event_check_in: z.ZodOptional<z.ZodObject<{
                enable_check_in: z.ZodBoolean;
                check_in_start_time: z.ZodOptional<z.ZodObject<{
                    time_type: z.ZodEnum<["before_event_start", "after_event_start", "after_event_end"]>;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }>>;
                check_in_end_time: z.ZodOptional<z.ZodObject<{
                    time_type: z.ZodEnum<["before_event_start", "after_event_start", "after_event_end"]>;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }>>;
                need_notify_attendees: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            }, {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            start_time: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            };
            end_time: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            };
            description?: string | undefined;
            color?: number | undefined;
            location?: {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            } | undefined;
            summary?: string | undefined;
            need_notification?: boolean | undefined;
            vchat?: {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            } | undefined;
            visibility?: "default" | "private" | "public" | undefined;
            attendee_ability?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event" | undefined;
            free_busy_status?: "busy" | "free" | undefined;
            reminders?: {
                minutes?: number | undefined;
            }[] | undefined;
            recurrence?: string | undefined;
            schemas?: {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }[] | undefined;
            attachments?: {
                file_token?: string | undefined;
            }[] | undefined;
            event_check_in?: {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            } | undefined;
        }, {
            start_time: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            };
            end_time: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            };
            description?: string | undefined;
            color?: number | undefined;
            location?: {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            } | undefined;
            summary?: string | undefined;
            need_notification?: boolean | undefined;
            vchat?: {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            } | undefined;
            visibility?: "default" | "private" | "public" | undefined;
            attendee_ability?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event" | undefined;
            free_busy_status?: "busy" | "free" | undefined;
            reminders?: {
                minutes?: number | undefined;
            }[] | undefined;
            recurrence?: string | undefined;
            schemas?: {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }[] | undefined;
            attachments?: {
                file_token?: string | undefined;
            }[] | undefined;
            event_check_in?: {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            } | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            idempotency_key: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            idempotency_key?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            idempotency_key?: string | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            need_notification: z.ZodOptional<z.ZodEnum<["true", "false"]>>;
        }, "strip", z.ZodTypeAny, {
            need_notification?: "true" | "false" | undefined;
        }, {
            need_notification?: "true" | "false" | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            need_meeting_settings: z.ZodOptional<z.ZodBoolean>;
            need_attendee: z.ZodOptional<z.ZodBoolean>;
            max_attendee_num: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            need_meeting_settings?: boolean | undefined;
            need_attendee?: boolean | undefined;
            max_attendee_num?: number | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            need_meeting_settings?: boolean | undefined;
            need_attendee?: boolean | undefined;
            max_attendee_num?: number | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventInstanceView: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            start_time: string;
            end_time: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventInstances: {
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            start_time: string;
            end_time: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventList: {
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
            anchor_time: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            sync_token: z.ZodOptional<z.ZodString>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            anchor_time?: string | undefined;
            sync_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            anchor_time?: string | undefined;
            sync_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventMeetingChatCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventMeetingChatDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            meeting_chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            meeting_chat_id: string;
        }, {
            meeting_chat_id: string;
        }>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventMeetingMinuteCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            start_time: z.ZodOptional<z.ZodObject<{
                date: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }>>;
            end_time: z.ZodOptional<z.ZodObject<{
                date: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodOptional<z.ZodString>;
                timezone: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }, {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            }>>;
            vchat: z.ZodOptional<z.ZodObject<{
                vc_type: z.ZodOptional<z.ZodEnum<["vc", "third_party", "no_meeting", "lark_live", "unknown"]>>;
                icon_type: z.ZodOptional<z.ZodEnum<["vc", "live", "default"]>>;
                description: z.ZodOptional<z.ZodString>;
                meeting_url: z.ZodOptional<z.ZodString>;
                meeting_settings: z.ZodOptional<z.ZodObject<{
                    owner_id: z.ZodOptional<z.ZodString>;
                    join_meeting_permission: z.ZodOptional<z.ZodEnum<["anyone_can_join", "only_organization_employees", "only_event_attendees"]>>;
                    assign_hosts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    auto_record: z.ZodOptional<z.ZodBoolean>;
                    open_lobby: z.ZodOptional<z.ZodBoolean>;
                    allow_attendees_start: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                }, {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            }, {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            }>>;
            visibility: z.ZodOptional<z.ZodEnum<["default", "public", "private"]>>;
            attendee_ability: z.ZodOptional<z.ZodEnum<["none", "can_see_others", "can_invite_others", "can_modify_event"]>>;
            free_busy_status: z.ZodOptional<z.ZodEnum<["busy", "free"]>>;
            location: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                latitude: z.ZodOptional<z.ZodNumber>;
                longitude: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            }, {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            }>>;
            color: z.ZodOptional<z.ZodNumber>;
            reminders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                minutes: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                minutes?: number | undefined;
            }, {
                minutes?: number | undefined;
            }>, "many">>;
            recurrence: z.ZodOptional<z.ZodString>;
            schemas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ui_name: z.ZodOptional<z.ZodString>;
                ui_status: z.ZodOptional<z.ZodEnum<["hide", "readonly", "editable", "unknown"]>>;
                app_link: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }, {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }>, "many">>;
            attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_token: z.ZodOptional<z.ZodString>;
                is_deleted: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                file_token?: string | undefined;
                is_deleted?: boolean | undefined;
            }, {
                file_token?: string | undefined;
                is_deleted?: boolean | undefined;
            }>, "many">>;
            event_check_in: z.ZodOptional<z.ZodObject<{
                enable_check_in: z.ZodBoolean;
                check_in_start_time: z.ZodOptional<z.ZodObject<{
                    time_type: z.ZodEnum<["before_event_start", "after_event_start", "after_event_end"]>;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }>>;
                check_in_end_time: z.ZodOptional<z.ZodObject<{
                    time_type: z.ZodEnum<["before_event_start", "after_event_start", "after_event_end"]>;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }, {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                }>>;
                need_notify_attendees: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            }, {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            start_time?: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            } | undefined;
            end_time?: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            } | undefined;
            color?: number | undefined;
            location?: {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            } | undefined;
            summary?: string | undefined;
            need_notification?: boolean | undefined;
            vchat?: {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            } | undefined;
            visibility?: "default" | "private" | "public" | undefined;
            attendee_ability?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event" | undefined;
            free_busy_status?: "busy" | "free" | undefined;
            reminders?: {
                minutes?: number | undefined;
            }[] | undefined;
            recurrence?: string | undefined;
            schemas?: {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }[] | undefined;
            attachments?: {
                file_token?: string | undefined;
                is_deleted?: boolean | undefined;
            }[] | undefined;
            event_check_in?: {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            } | undefined;
        }, {
            description?: string | undefined;
            start_time?: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            } | undefined;
            end_time?: {
                date?: string | undefined;
                timestamp?: string | undefined;
                timezone?: string | undefined;
            } | undefined;
            color?: number | undefined;
            location?: {
                name?: string | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
                address?: string | undefined;
            } | undefined;
            summary?: string | undefined;
            need_notification?: boolean | undefined;
            vchat?: {
                description?: string | undefined;
                vc_type?: "unknown" | "third_party" | "vc" | "no_meeting" | "lark_live" | undefined;
                icon_type?: "default" | "vc" | "live" | undefined;
                meeting_url?: string | undefined;
                meeting_settings?: {
                    owner_id?: string | undefined;
                    join_meeting_permission?: "anyone_can_join" | "only_organization_employees" | "only_event_attendees" | undefined;
                    assign_hosts?: string[] | undefined;
                    auto_record?: boolean | undefined;
                    open_lobby?: boolean | undefined;
                    allow_attendees_start?: boolean | undefined;
                } | undefined;
            } | undefined;
            visibility?: "default" | "private" | "public" | undefined;
            attendee_ability?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event" | undefined;
            free_busy_status?: "busy" | "free" | undefined;
            reminders?: {
                minutes?: number | undefined;
            }[] | undefined;
            recurrence?: string | undefined;
            schemas?: {
                ui_name?: string | undefined;
                ui_status?: "unknown" | "hide" | "readonly" | "editable" | undefined;
                app_link?: string | undefined;
            }[] | undefined;
            attachments?: {
                file_token?: string | undefined;
                is_deleted?: boolean | undefined;
            }[] | undefined;
            event_check_in?: {
                enable_check_in: boolean;
                check_in_start_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                check_in_end_time?: {
                    duration: number;
                    time_type: "before_event_start" | "after_event_start" | "after_event_end";
                } | undefined;
                need_notify_attendees?: boolean | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventReply: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            rsvp_status: z.ZodEnum<["accept", "decline", "tentative"]>;
        }, "strip", z.ZodTypeAny, {
            rsvp_status: "accept" | "decline" | "tentative";
        }, {
            rsvp_status: "accept" | "decline" | "tentative";
        }>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
            event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
            event_id: string;
        }, {
            calendar_id: string;
            event_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventSearch: {
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
            filter: z.ZodOptional<z.ZodObject<{
                start_time: z.ZodOptional<z.ZodObject<{
                    date: z.ZodOptional<z.ZodString>;
                    timestamp: z.ZodOptional<z.ZodString>;
                    timezone: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                }, {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                }>>;
                end_time: z.ZodOptional<z.ZodObject<{
                    date: z.ZodOptional<z.ZodString>;
                    timestamp: z.ZodOptional<z.ZodString>;
                    timezone: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                }, {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                }>>;
                user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                room_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                chat_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                chat_ids?: string[] | undefined;
                user_ids?: string[] | undefined;
                start_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                end_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                room_ids?: string[] | undefined;
            }, {
                chat_ids?: string[] | undefined;
                user_ids?: string[] | undefined;
                start_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                end_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                room_ids?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            filter?: {
                chat_ids?: string[] | undefined;
                user_ids?: string[] | undefined;
                start_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                end_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                room_ids?: string[] | undefined;
            } | undefined;
        }, {
            query: string;
            filter?: {
                chat_ids?: string[] | undefined;
                user_ids?: string[] | undefined;
                start_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                end_time?: {
                    date?: string | undefined;
                    timestamp?: string | undefined;
                    timezone?: string | undefined;
                } | undefined;
                room_ids?: string[] | undefined;
            } | undefined;
        }>;
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
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventSubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarEventUnsubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarList: {
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
            sync_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            sync_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            sync_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            summary: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            permissions: z.ZodOptional<z.ZodEnum<["private", "show_only_free_busy", "public"]>>;
            color: z.ZodOptional<z.ZodNumber>;
            summary_alias: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            color?: number | undefined;
            summary?: string | undefined;
            permissions?: "private" | "show_only_free_busy" | "public" | undefined;
            summary_alias?: string | undefined;
        }, {
            description?: string | undefined;
            color?: number | undefined;
            summary?: string | undefined;
            permissions?: "private" | "show_only_free_busy" | "public" | undefined;
            summary_alias?: string | undefined;
        }>>;
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarPrimary: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarSearch: {
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
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
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
export declare const calendarV4CalendarSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarSubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarUnsubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            calendar_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            calendar_id: string;
        }, {
            calendar_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4CalendarUnsubscription: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4ExchangeBindingCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            admin_account: z.ZodOptional<z.ZodString>;
            exchange_account: z.ZodOptional<z.ZodString>;
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
            admin_account?: string | undefined;
            exchange_account?: string | undefined;
        }, {
            user_id?: string | undefined;
            admin_account?: string | undefined;
            exchange_account?: string | undefined;
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
export declare const calendarV4ExchangeBindingDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            exchange_binding_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            exchange_binding_id: string;
        }, {
            exchange_binding_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4ExchangeBindingGet: {
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
            exchange_binding_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            exchange_binding_id: string;
        }, {
            exchange_binding_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4FreebusyList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            time_min: z.ZodString;
            time_max: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            room_id: z.ZodOptional<z.ZodString>;
            include_external_calendar: z.ZodOptional<z.ZodBoolean>;
            only_busy: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            time_min: string;
            time_max: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            include_external_calendar?: boolean | undefined;
            only_busy?: boolean | undefined;
        }, {
            time_min: string;
            time_max: string;
            user_id?: string | undefined;
            room_id?: string | undefined;
            include_external_calendar?: boolean | undefined;
            only_busy?: boolean | undefined;
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
export declare const calendarV4SettingGenerateCaldavConf: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            device_name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            device_name?: string | undefined;
        }, {
            device_name?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const calendarV4TimeoffEventCreate: {
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
            timezone: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            start_time: string;
            end_time: string;
            timezone: string;
            title?: string | undefined;
            description?: string | undefined;
        }, {
            user_id: string;
            start_time: string;
            end_time: string;
            timezone: string;
            title?: string | undefined;
            description?: string | undefined;
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
export declare const calendarV4TimeoffEventDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            timeoff_event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            timeoff_event_id: string;
        }, {
            timeoff_event_id: string;
        }>;
    };
};
export declare const calendarV4Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
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
            user_id: z.ZodString;
            timezone: z.ZodString;
            start_time: z.ZodString;
            end_time: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            start_time: string;
            end_time: string;
            timezone: string;
            title?: string | undefined;
            description?: string | undefined;
        }, {
            user_id: string;
            start_time: string;
            end_time: string;
            timezone: string;
            title?: string | undefined;
            description?: string | undefined;
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
            timeoff_event_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            timeoff_event_id: string;
        }, {
            timeoff_event_id: string;
        }>;
    };
})[];
