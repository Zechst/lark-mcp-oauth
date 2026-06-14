import { z } from 'zod';
export type imV1ToolName = 'im.v1.batchMessage.delete' | 'im.v1.batchMessage.getProgress' | 'im.v1.batchMessage.readUser' | 'im.v1.chatAnnouncement.get' | 'im.v1.chatAnnouncement.patch' | 'im.v1.chat.create' | 'im.v1.chat.delete' | 'im.v1.chat.get' | 'im.v1.chat.link' | 'im.v1.chat.list' | 'im.v1.chatManagers.addManagers' | 'im.v1.chatManagers.deleteManagers' | 'im.v1.chatMembers.create' | 'im.v1.chatMembers.delete' | 'im.v1.chatMembers.get' | 'im.v1.chatMembers.isInChat' | 'im.v1.chatMembers.meJoin' | 'im.v1.chatMenuItem.patch' | 'im.v1.chatMenuTree.create' | 'im.v1.chatMenuTree.delete' | 'im.v1.chatMenuTree.get' | 'im.v1.chatMenuTree.sort' | 'im.v1.chatModeration.get' | 'im.v1.chatModeration.update' | 'im.v1.chat.search' | 'im.v1.chatTab.create' | 'im.v1.chatTab.deleteTabs' | 'im.v1.chatTab.listTabs' | 'im.v1.chatTab.sortTabs' | 'im.v1.chatTab.updateTabs' | 'im.v1.chatTopNotice.deleteTopNotice' | 'im.v1.chatTopNotice.putTopNotice' | 'im.v1.chat.update' | 'im.v1.message.create' | 'im.v1.message.delete' | 'im.v1.message.forward' | 'im.v1.message.get' | 'im.v1.message.list' | 'im.v1.message.mergeForward' | 'im.v1.message.patch' | 'im.v1.message.pushFollowUp' | 'im.v1.messageReaction.create' | 'im.v1.messageReaction.delete' | 'im.v1.messageReaction.list' | 'im.v1.message.readUsers' | 'im.v1.message.reply' | 'im.v1.message.update' | 'im.v1.message.urgentApp' | 'im.v1.message.urgentPhone' | 'im.v1.message.urgentSms' | 'im.v1.pin.create' | 'im.v1.pin.delete' | 'im.v1.pin.list' | 'im.v1.thread.forward';
export declare const imV1BatchMessageDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            batch_message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batch_message_id: string;
        }, {
            batch_message_id: string;
        }>;
    };
};
export declare const imV1BatchMessageGetProgress: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            batch_message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batch_message_id: string;
        }, {
            batch_message_id: string;
        }>;
    };
};
export declare const imV1BatchMessageReadUser: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            batch_message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batch_message_id: string;
        }, {
            batch_message_id: string;
        }>;
    };
};
export declare const imV1ChatAnnouncementGet: {
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
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatAnnouncementPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            revision: z.ZodString;
            requests: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            revision: string;
            requests?: string[] | undefined;
        }, {
            revision: string;
            requests?: string[] | undefined;
        }>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            avatar: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            i18n_names: z.ZodOptional<z.ZodObject<{
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
            owner_id: z.ZodOptional<z.ZodString>;
            user_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            bot_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            group_message_type: z.ZodOptional<z.ZodEnum<["chat", "thread"]>>;
            chat_mode: z.ZodOptional<z.ZodString>;
            chat_type: z.ZodOptional<z.ZodString>;
            join_message_visibility: z.ZodOptional<z.ZodString>;
            leave_message_visibility: z.ZodOptional<z.ZodString>;
            membership_approval: z.ZodOptional<z.ZodString>;
            restricted_mode_setting: z.ZodOptional<z.ZodObject<{
                status: z.ZodOptional<z.ZodBoolean>;
                screenshot_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                download_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                message_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }>>;
            urgent_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            video_conference_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            edit_permission: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            hide_member_count_setting: z.ZodOptional<z.ZodEnum<["all_members", "only_owner"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            user_id_list?: string[] | undefined;
            avatar?: string | undefined;
            bot_id_list?: string[] | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_mode?: string | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: "all_members" | "only_owner" | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            user_id_list?: string[] | undefined;
            avatar?: string | undefined;
            bot_id_list?: string[] | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_mode?: string | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: "all_members" | "only_owner" | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            set_bot_manager: z.ZodOptional<z.ZodBoolean>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            uuid?: string | undefined;
            set_bot_manager?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            uuid?: string | undefined;
            set_bot_manager?: boolean | undefined;
        }>>;
    };
};
export declare const imV1ChatDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatGet: {
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
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatLink: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            validity_period: z.ZodOptional<z.ZodEnum<["week", "year", "permanently"]>>;
        }, "strip", z.ZodTypeAny, {
            validity_period?: "week" | "year" | "permanently" | undefined;
        }, {
            validity_period?: "week" | "year" | "permanently" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatList: {
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
            sort_type: z.ZodOptional<z.ZodEnum<["ByCreateTimeAsc", "ByActiveTimeDesc"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByActiveTimeDesc" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByActiveTimeDesc" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatManagersAddManagers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            manager_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            manager_ids?: string[] | undefined;
        }, {
            manager_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "app_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatManagersDeleteManagers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            manager_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            manager_ids?: string[] | undefined;
        }, {
            manager_ids?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "app_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMembersCreate: {
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
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "app_id"]>>;
            succeed_type: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
            succeed_type?: number | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
            succeed_type?: number | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMembersDelete: {
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
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "app_id"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }, {
            member_id_type?: "user_id" | "union_id" | "open_id" | "app_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMembersGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            member_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            member_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMembersIsInChat: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMembersMeJoin: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatMenuItemPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            update_fields: z.ZodArray<z.ZodEnum<["ICON", "NAME", "I18N_NAME", "REDIRECT_LINK"]>, "many">;
            chat_menu_item: z.ZodObject<{
                action_type: z.ZodOptional<z.ZodEnum<["NONE", "REDIRECT_LINK"]>>;
                redirect_link: z.ZodOptional<z.ZodObject<{
                    common_url: z.ZodOptional<z.ZodString>;
                    ios_url: z.ZodOptional<z.ZodString>;
                    android_url: z.ZodOptional<z.ZodString>;
                    pc_url: z.ZodOptional<z.ZodString>;
                    web_url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                }, {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                }>>;
                image_key: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                i18n_names: z.ZodOptional<z.ZodObject<{
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
                name?: string | undefined;
                action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                i18n_names?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                redirect_link?: {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                } | undefined;
                image_key?: string | undefined;
            }, {
                name?: string | undefined;
                action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                i18n_names?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                redirect_link?: {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                } | undefined;
                image_key?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            update_fields: ("ICON" | "NAME" | "I18N_NAME" | "REDIRECT_LINK")[];
            chat_menu_item: {
                name?: string | undefined;
                action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                i18n_names?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                redirect_link?: {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                } | undefined;
                image_key?: string | undefined;
            };
        }, {
            update_fields: ("ICON" | "NAME" | "I18N_NAME" | "REDIRECT_LINK")[];
            chat_menu_item: {
                name?: string | undefined;
                action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                i18n_names?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                redirect_link?: {
                    pc_url?: string | undefined;
                    common_url?: string | undefined;
                    ios_url?: string | undefined;
                    android_url?: string | undefined;
                    web_url?: string | undefined;
                } | undefined;
                image_key?: string | undefined;
            };
        }>;
        path: z.ZodOptional<z.ZodObject<{
            chat_id: z.ZodOptional<z.ZodString>;
            menu_item_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
            menu_item_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
            menu_item_id?: string | undefined;
        }>>;
    };
};
export declare const imV1ChatMenuTreeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            menu_tree: z.ZodObject<{
                chat_menu_top_levels: z.ZodArray<z.ZodObject<{
                    chat_menu_item: z.ZodObject<{
                        action_type: z.ZodEnum<["NONE", "REDIRECT_LINK"]>;
                        redirect_link: z.ZodOptional<z.ZodObject<{
                            common_url: z.ZodOptional<z.ZodString>;
                            ios_url: z.ZodOptional<z.ZodString>;
                            android_url: z.ZodOptional<z.ZodString>;
                            pc_url: z.ZodOptional<z.ZodString>;
                            web_url: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        }, {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        }>>;
                        image_key: z.ZodOptional<z.ZodString>;
                        name: z.ZodString;
                        i18n_names: z.ZodOptional<z.ZodObject<{
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
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    }, {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    }>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        chat_menu_item: z.ZodOptional<z.ZodObject<{
                            action_type: z.ZodOptional<z.ZodEnum<["NONE", "REDIRECT_LINK"]>>;
                            redirect_link: z.ZodOptional<z.ZodObject<{
                                common_url: z.ZodOptional<z.ZodString>;
                                ios_url: z.ZodOptional<z.ZodString>;
                                android_url: z.ZodOptional<z.ZodString>;
                                pc_url: z.ZodOptional<z.ZodString>;
                                web_url: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            }, {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            }>>;
                            image_key: z.ZodOptional<z.ZodString>;
                            name: z.ZodOptional<z.ZodString>;
                            i18n_names: z.ZodOptional<z.ZodObject<{
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
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        }, {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }, {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }, {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                chat_menu_top_levels: {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }[];
            }, {
                chat_menu_top_levels: {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            menu_tree: {
                chat_menu_top_levels: {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }[];
            };
        }, {
            menu_tree: {
                chat_menu_top_levels: {
                    chat_menu_item: {
                        name: string;
                        action_type: "NONE" | "REDIRECT_LINK";
                        i18n_names?: {
                            zh_cn?: string | undefined;
                            en_us?: string | undefined;
                            ja_jp?: string | undefined;
                        } | undefined;
                        redirect_link?: {
                            pc_url?: string | undefined;
                            common_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                            web_url?: string | undefined;
                        } | undefined;
                        image_key?: string | undefined;
                    };
                    children?: {
                        chat_menu_item?: {
                            name?: string | undefined;
                            action_type?: "NONE" | "REDIRECT_LINK" | undefined;
                            i18n_names?: {
                                zh_cn?: string | undefined;
                                en_us?: string | undefined;
                                ja_jp?: string | undefined;
                            } | undefined;
                            redirect_link?: {
                                pc_url?: string | undefined;
                                common_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                                web_url?: string | undefined;
                            } | undefined;
                            image_key?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }[];
            };
        }>;
        path: z.ZodOptional<z.ZodObject<{
            chat_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
        }>>;
    };
};
export declare const imV1ChatMenuTreeDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            chat_menu_top_level_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            chat_menu_top_level_ids: string[];
        }, {
            chat_menu_top_level_ids: string[];
        }>;
        path: z.ZodOptional<z.ZodObject<{
            chat_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
        }>>;
    };
};
export declare const imV1ChatMenuTreeGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            chat_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
        }>>;
    };
};
export declare const imV1ChatMenuTreeSort: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            chat_menu_top_level_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            chat_menu_top_level_ids: string[];
        }, {
            chat_menu_top_level_ids: string[];
        }>;
        path: z.ZodOptional<z.ZodObject<{
            chat_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
        }>>;
    };
};
export declare const imV1ChatModerationGet: {
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
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
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatModerationUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            moderation_setting: z.ZodOptional<z.ZodString>;
            moderator_added_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            moderator_removed_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            moderation_setting?: string | undefined;
            moderator_added_list?: string[] | undefined;
            moderator_removed_list?: string[] | undefined;
        }, {
            moderation_setting?: string | undefined;
            moderator_added_list?: string[] | undefined;
            moderator_removed_list?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatSearch: {
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
            query: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            query?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            query?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTabCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            chat_tabs: z.ZodArray<z.ZodObject<{
                tab_name: z.ZodOptional<z.ZodString>;
                tab_type: z.ZodEnum<["message", "doc_list", "doc", "pin", "meeting_minute", "chat_announcement", "url", "file", "files_resources", "images_videos", "task"]>;
                tab_content: z.ZodOptional<z.ZodObject<{
                    url: z.ZodOptional<z.ZodString>;
                    doc: z.ZodOptional<z.ZodString>;
                    meeting_minute: z.ZodOptional<z.ZodString>;
                    task: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                }, {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                }>>;
                tab_config: z.ZodOptional<z.ZodObject<{
                    icon_key: z.ZodOptional<z.ZodString>;
                    is_built_in: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                }, {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
            }, {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            chat_tabs: {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
            }[];
        }, {
            chat_tabs: {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTabDeleteTabs: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tab_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            tab_ids: string[];
        }, {
            tab_ids: string[];
        }>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTabListTabs: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTabSortTabs: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            tab_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tab_ids?: string[] | undefined;
        }, {
            tab_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTabUpdateTabs: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            chat_tabs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                tab_id: z.ZodOptional<z.ZodString>;
                tab_name: z.ZodOptional<z.ZodString>;
                tab_type: z.ZodEnum<["message", "doc_list", "doc", "pin", "meeting_minute", "chat_announcement", "url", "file", "files_resources", "images_videos", "task"]>;
                tab_content: z.ZodOptional<z.ZodObject<{
                    url: z.ZodOptional<z.ZodString>;
                    doc: z.ZodOptional<z.ZodString>;
                    meeting_minute: z.ZodOptional<z.ZodString>;
                    task: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                }, {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                }>>;
                tab_config: z.ZodOptional<z.ZodObject<{
                    icon_key: z.ZodOptional<z.ZodString>;
                    is_built_in: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                }, {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
                tab_id?: string | undefined;
            }, {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
                tab_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            chat_tabs?: {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
                tab_id?: string | undefined;
            }[] | undefined;
        }, {
            chat_tabs?: {
                tab_type: "message" | "doc" | "file" | "url" | "task" | "doc_list" | "pin" | "meeting_minute" | "chat_announcement" | "files_resources" | "images_videos";
                tab_name?: string | undefined;
                tab_content?: {
                    doc?: string | undefined;
                    url?: string | undefined;
                    task?: string | undefined;
                    meeting_minute?: string | undefined;
                } | undefined;
                tab_config?: {
                    icon_key?: string | undefined;
                    is_built_in?: boolean | undefined;
                } | undefined;
                tab_id?: string | undefined;
            }[] | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTopNoticeDeleteTopNotice: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatTopNoticePutTopNotice: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            chat_top_notice: z.ZodArray<z.ZodObject<{
                action_type: z.ZodOptional<z.ZodEnum<["1", "2"]>>;
                message_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                action_type?: "1" | "2" | undefined;
                message_id?: string | undefined;
            }, {
                action_type?: "1" | "2" | undefined;
                message_id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            chat_top_notice: {
                action_type?: "1" | "2" | undefined;
                message_id?: string | undefined;
            }[];
        }, {
            chat_top_notice: {
                action_type?: "1" | "2" | undefined;
                message_id?: string | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ChatUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            avatar: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            i18n_names: z.ZodOptional<z.ZodObject<{
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
            add_member_permission: z.ZodOptional<z.ZodString>;
            share_card_permission: z.ZodOptional<z.ZodString>;
            at_all_permission: z.ZodOptional<z.ZodString>;
            edit_permission: z.ZodOptional<z.ZodString>;
            owner_id: z.ZodOptional<z.ZodString>;
            join_message_visibility: z.ZodOptional<z.ZodString>;
            leave_message_visibility: z.ZodOptional<z.ZodString>;
            membership_approval: z.ZodOptional<z.ZodString>;
            restricted_mode_setting: z.ZodOptional<z.ZodObject<{
                status: z.ZodOptional<z.ZodBoolean>;
                screenshot_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                download_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                message_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }>>;
            chat_type: z.ZodOptional<z.ZodString>;
            group_message_type: z.ZodOptional<z.ZodEnum<["chat", "thread"]>>;
            urgent_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            video_conference_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            hide_member_count_setting: z.ZodOptional<z.ZodEnum<["all_members", "only_owner"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            avatar?: string | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: string | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
            add_member_permission?: string | undefined;
            share_card_permission?: string | undefined;
            at_all_permission?: string | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            avatar?: string | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: string | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
            add_member_permission?: string | undefined;
            share_card_permission?: string | undefined;
            at_all_permission?: string | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessageCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            receive_id: z.ZodString;
            msg_type: z.ZodString;
            content: z.ZodString;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            msg_type: string;
            receive_id: string;
            uuid?: string | undefined;
        }, {
            content: string;
            msg_type: string;
            receive_id: string;
            uuid?: string | undefined;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "union_id", "user_id", "email", "chat_id"]>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email";
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email";
        }>;
    };
};
export declare const imV1MessageDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessageForward: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            receive_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
        }, {
            receive_id: string;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "user_id", "union_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageGet: {
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
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            container_id_type: z.ZodString;
            container_id: z.ZodString;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            sort_type: z.ZodOptional<z.ZodEnum<["ByCreateTimeAsc", "ByCreateTimeDesc"]>>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            container_id_type: string;
            container_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByCreateTimeDesc" | undefined;
        }, {
            container_id_type: string;
            container_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByCreateTimeDesc" | undefined;
        }>;
    };
};
export declare const imV1MessageMergeForward: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            receive_id: z.ZodString;
            message_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
            message_id_list: string[];
        }, {
            receive_id: string;
            message_id_list: string[];
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "user_id", "union_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }>;
    };
};
export declare const imV1MessagePatch: {
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
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessagePushFollowUp: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            follow_ups: z.ZodArray<z.ZodObject<{
                content: z.ZodString;
                i18n_contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                    language: z.ZodEnum<["en_us", "zh_cn", "zh_hk", "zh_tw", "ja_jp", "id_id", "vi_vn", "th_th", "pt_br", "es_es", "ko_kr", "de_de", "fr_fr", "it_it", "ru_ru", "ms_my"]>;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }, {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }, {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            follow_ups: {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }[];
        }, {
            follow_ups: {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageReactionCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            reaction_type: z.ZodObject<{
                emoji_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                emoji_type: string;
            }, {
                emoji_type: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            reaction_type: {
                emoji_type: string;
            };
        }, {
            reaction_type: {
                emoji_type: string;
            };
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessageReactionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            message_id: z.ZodString;
            reaction_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
            reaction_id: string;
        }, {
            message_id: string;
            reaction_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessageReactionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            reaction_type: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            reaction_type?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            reaction_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1MessageReadUsers: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageReply: {
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
            msg_type: z.ZodString;
            reply_in_thread: z.ZodOptional<z.ZodBoolean>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            msg_type: string;
            uuid?: string | undefined;
            reply_in_thread?: boolean | undefined;
        }, {
            content: string;
            msg_type: string;
            uuid?: string | undefined;
            reply_in_thread?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            msg_type: z.ZodString;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
            msg_type: string;
        }, {
            content: string;
            msg_type: string;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageUrgentApp: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id_list: string[];
        }, {
            user_id_list: string[];
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageUrgentPhone: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id_list: string[];
        }, {
            user_id_list: string[];
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1MessageUrgentSms: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id_list: string[];
        }, {
            user_id_list: string[];
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
    };
};
export declare const imV1PinCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1PinDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1PinList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            chat_id: z.ZodString;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
        }, {
            chat_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const imV1ThreadForward: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            receive_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
        }, {
            receive_id: string;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "union_id", "user_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            thread_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            thread_id: string;
        }, {
            thread_id: string;
        }>;
    };
};
export declare const imV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            batch_message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batch_message_id: string;
        }, {
            batch_message_id: string;
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
            avatar: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            i18n_names: z.ZodOptional<z.ZodObject<{
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
            owner_id: z.ZodOptional<z.ZodString>;
            user_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            bot_id_list: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            group_message_type: z.ZodOptional<z.ZodEnum<["chat", "thread"]>>;
            chat_mode: z.ZodOptional<z.ZodString>;
            chat_type: z.ZodOptional<z.ZodString>;
            join_message_visibility: z.ZodOptional<z.ZodString>;
            leave_message_visibility: z.ZodOptional<z.ZodString>;
            membership_approval: z.ZodOptional<z.ZodString>;
            restricted_mode_setting: z.ZodOptional<z.ZodObject<{
                status: z.ZodOptional<z.ZodBoolean>;
                screenshot_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                download_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
                message_has_permission_setting: z.ZodOptional<z.ZodEnum<["all_members", "not_anyone"]>>;
            }, "strip", z.ZodTypeAny, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }, {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            }>>;
            urgent_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            video_conference_setting: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            edit_permission: z.ZodOptional<z.ZodEnum<["only_owner", "all_members"]>>;
            hide_member_count_setting: z.ZodOptional<z.ZodEnum<["all_members", "only_owner"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            user_id_list?: string[] | undefined;
            avatar?: string | undefined;
            bot_id_list?: string[] | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_mode?: string | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: "all_members" | "only_owner" | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            owner_id?: string | undefined;
            i18n_names?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            user_id_list?: string[] | undefined;
            avatar?: string | undefined;
            bot_id_list?: string[] | undefined;
            group_message_type?: "chat" | "thread" | undefined;
            chat_mode?: string | undefined;
            chat_type?: string | undefined;
            join_message_visibility?: string | undefined;
            leave_message_visibility?: string | undefined;
            membership_approval?: string | undefined;
            restricted_mode_setting?: {
                status?: boolean | undefined;
                screenshot_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                download_has_permission_setting?: "all_members" | "not_anyone" | undefined;
                message_has_permission_setting?: "all_members" | "not_anyone" | undefined;
            } | undefined;
            urgent_setting?: "all_members" | "only_owner" | undefined;
            video_conference_setting?: "all_members" | "only_owner" | undefined;
            edit_permission?: "all_members" | "only_owner" | undefined;
            hide_member_count_setting?: "all_members" | "only_owner" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            set_bot_manager: z.ZodOptional<z.ZodBoolean>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            uuid?: string | undefined;
            set_bot_manager?: boolean | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            uuid?: string | undefined;
            set_bot_manager?: boolean | undefined;
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
            chat_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
        }, {
            chat_id: string;
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
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            sort_type: z.ZodOptional<z.ZodEnum<["ByCreateTimeAsc", "ByActiveTimeDesc"]>>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByActiveTimeDesc" | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByActiveTimeDesc" | undefined;
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
            chat_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id?: string | undefined;
        }, {
            chat_id?: string | undefined;
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
            query: z.ZodOptional<z.ZodString>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            query?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            query?: string | undefined;
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
            receive_id: z.ZodString;
            msg_type: z.ZodString;
            content: z.ZodString;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            msg_type: string;
            receive_id: string;
            uuid?: string | undefined;
        }, {
            content: string;
            msg_type: string;
            receive_id: string;
            uuid?: string | undefined;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "union_id", "user_id", "email", "chat_id"]>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email";
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email";
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
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            receive_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
        }, {
            receive_id: string;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "user_id", "union_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            container_id_type: z.ZodString;
            container_id: z.ZodString;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            sort_type: z.ZodOptional<z.ZodEnum<["ByCreateTimeAsc", "ByCreateTimeDesc"]>>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            container_id_type: string;
            container_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByCreateTimeDesc" | undefined;
        }, {
            container_id_type: string;
            container_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            sort_type?: "ByCreateTimeAsc" | "ByCreateTimeDesc" | undefined;
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
            receive_id: z.ZodString;
            message_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
            message_id_list: string[];
        }, {
            receive_id: string;
            message_id_list: string[];
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "user_id", "union_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
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
            follow_ups: z.ZodArray<z.ZodObject<{
                content: z.ZodString;
                i18n_contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                    language: z.ZodEnum<["en_us", "zh_cn", "zh_hk", "zh_tw", "ja_jp", "id_id", "vi_vn", "th_th", "pt_br", "es_es", "ko_kr", "de_de", "fr_fr", "it_it", "ru_ru", "ms_my"]>;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }, {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }, {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            follow_ups: {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }[];
        }, {
            follow_ups: {
                content: string;
                i18n_contents?: {
                    content: string;
                    language: "zh_cn" | "en_us" | "ja_jp" | "zh_hk" | "zh_tw" | "id_id" | "vi_vn" | "th_th" | "pt_br" | "es_es" | "ko_kr" | "de_de" | "fr_fr" | "it_it" | "ru_ru" | "ms_my";
                }[] | undefined;
            }[];
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            msg_type: z.ZodString;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
            msg_type: string;
        }, {
            content: string;
            msg_type: string;
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            user_id_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_id_list: string[];
        }, {
            user_id_list: string[];
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
        path: z.ZodObject<{
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message_id: string;
        }, {
            message_id: string;
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
            chat_id: z.ZodString;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
        }, {
            chat_id: string;
            page_size?: number | undefined;
            page_token?: string | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
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
            receive_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            receive_id: string;
        }, {
            receive_id: string;
        }>;
        params: z.ZodObject<{
            receive_id_type: z.ZodEnum<["open_id", "union_id", "user_id", "email", "chat_id", "thread_id"]>;
            uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }, {
            receive_id_type: "user_id" | "union_id" | "open_id" | "chat_id" | "email" | "thread_id";
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            thread_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            thread_id: string;
        }, {
            thread_id: string;
        }>;
    };
})[];
