import { z } from 'zod';
export type personalSettingsV1ToolName = 'personal_settings.v1.systemStatus.batchClose' | 'personal_settings.v1.systemStatus.batchOpen' | 'personal_settings.v1.systemStatus.create' | 'personal_settings.v1.systemStatus.delete' | 'personal_settings.v1.systemStatus.list' | 'personal_settings.v1.systemStatus.patch';
export declare const personalSettingsV1SystemStatusBatchClose: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_list: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_list: string[];
        }, {
            user_list: string[];
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            system_status_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            system_status_id?: string | undefined;
        }, {
            system_status_id?: string | undefined;
        }>>;
    };
};
export declare const personalSettingsV1SystemStatusBatchOpen: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_list: z.ZodArray<z.ZodObject<{
                user_id: z.ZodString;
                end_time: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                end_time: string;
            }, {
                user_id: string;
                end_time: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            user_list: {
                user_id: string;
                end_time: string;
            }[];
        }, {
            user_list: {
                user_id: string;
                end_time: string;
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
            system_status_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            system_status_id?: string | undefined;
        }, {
            system_status_id?: string | undefined;
        }>>;
    };
};
export declare const personalSettingsV1SystemStatusCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            title: z.ZodString;
            i18n_title: z.ZodOptional<z.ZodObject<{
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
            icon_key: z.ZodEnum<["GeneralDoNotDisturb", "GeneralInMeetingBusy", "Coffee", "GeneralBusinessTrip", "GeneralWorkFromHome", "StatusEnjoyLife", "GeneralTravellingCar", "StatusBus", "StatusInFlight", "Typing", "EatingFood", "SICK", "GeneralSun", "GeneralMoonRest", "StatusReading", "Status_PrivateMessage", "StatusFlashOfInspiration", "GeneralVacation"]>;
            color: z.ZodOptional<z.ZodEnum<["BLUE", "GRAY", "INDIGO", "WATHET", "GREEN", "TURQUOISE", "YELLOW", "LIME", "RED", "ORANGE", "PURPLE", "VIOLET", "CARMINE"]>>;
            priority: z.ZodOptional<z.ZodNumber>;
            sync_setting: z.ZodOptional<z.ZodObject<{
                is_open_by_default: z.ZodOptional<z.ZodBoolean>;
                title: z.ZodOptional<z.ZodString>;
                i18n_title: z.ZodOptional<z.ZodObject<{
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
                explain: z.ZodOptional<z.ZodString>;
                i18n_explain: z.ZodOptional<z.ZodObject<{
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
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            }, {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
            color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
            priority?: number | undefined;
            i18n_title?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            sync_setting?: {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            title: string;
            icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
            color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
            priority?: number | undefined;
            i18n_title?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            sync_setting?: {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            } | undefined;
        }>;
    };
};
export declare const personalSettingsV1SystemStatusDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            system_status_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            system_status_id?: string | undefined;
        }, {
            system_status_id?: string | undefined;
        }>>;
    };
};
export declare const personalSettingsV1SystemStatusList: {
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
export declare const personalSettingsV1SystemStatusPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            system_status: z.ZodObject<{
                title: z.ZodString;
                i18n_title: z.ZodOptional<z.ZodObject<{
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
                icon_key: z.ZodEnum<["GeneralDoNotDisturb", "GeneralInMeetingBusy", "Coffee", "GeneralBusinessTrip", "GeneralWorkFromHome", "StatusEnjoyLife", "GeneralTravellingCar", "StatusBus", "StatusInFlight", "Typing", "EatingFood", "SICK", "GeneralSun", "GeneralMoonRest", "StatusReading", "Status_PrivateMessage", "StatusFlashOfInspiration", "GeneralVacation"]>;
                color: z.ZodOptional<z.ZodEnum<["BLUE", "GRAY", "INDIGO", "WATHET", "GREEN", "TURQUOISE", "YELLOW", "LIME", "RED", "ORANGE", "PURPLE", "VIOLET", "CARMINE"]>>;
                priority: z.ZodOptional<z.ZodNumber>;
                sync_setting: z.ZodOptional<z.ZodObject<{
                    is_open_by_default: z.ZodOptional<z.ZodBoolean>;
                    title: z.ZodOptional<z.ZodString>;
                    i18n_title: z.ZodOptional<z.ZodObject<{
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
                    explain: z.ZodOptional<z.ZodString>;
                    i18n_explain: z.ZodOptional<z.ZodObject<{
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
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                }, {
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
                color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
                priority?: number | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                sync_setting?: {
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                } | undefined;
            }, {
                title: string;
                icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
                color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
                priority?: number | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                sync_setting?: {
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                } | undefined;
            }>;
            update_fields: z.ZodArray<z.ZodEnum<["TITLE", "I18N_TITLE", "ICON", "COLOR", "PRIORITY", "SYNC_SETTING"]>, "many">;
        }, "strip", z.ZodTypeAny, {
            update_fields: ("ICON" | "TITLE" | "I18N_TITLE" | "COLOR" | "PRIORITY" | "SYNC_SETTING")[];
            system_status: {
                title: string;
                icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
                color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
                priority?: number | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                sync_setting?: {
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                } | undefined;
            };
        }, {
            update_fields: ("ICON" | "TITLE" | "I18N_TITLE" | "COLOR" | "PRIORITY" | "SYNC_SETTING")[];
            system_status: {
                title: string;
                icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
                color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
                priority?: number | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                sync_setting?: {
                    title?: string | undefined;
                    i18n_title?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    is_open_by_default?: boolean | undefined;
                    explain?: string | undefined;
                    i18n_explain?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                } | undefined;
            };
        }>;
        path: z.ZodOptional<z.ZodObject<{
            system_status_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            system_status_id?: string | undefined;
        }, {
            system_status_id?: string | undefined;
        }>>;
    };
};
export declare const personalSettingsV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            title: z.ZodString;
            i18n_title: z.ZodOptional<z.ZodObject<{
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
            icon_key: z.ZodEnum<["GeneralDoNotDisturb", "GeneralInMeetingBusy", "Coffee", "GeneralBusinessTrip", "GeneralWorkFromHome", "StatusEnjoyLife", "GeneralTravellingCar", "StatusBus", "StatusInFlight", "Typing", "EatingFood", "SICK", "GeneralSun", "GeneralMoonRest", "StatusReading", "Status_PrivateMessage", "StatusFlashOfInspiration", "GeneralVacation"]>;
            color: z.ZodOptional<z.ZodEnum<["BLUE", "GRAY", "INDIGO", "WATHET", "GREEN", "TURQUOISE", "YELLOW", "LIME", "RED", "ORANGE", "PURPLE", "VIOLET", "CARMINE"]>>;
            priority: z.ZodOptional<z.ZodNumber>;
            sync_setting: z.ZodOptional<z.ZodObject<{
                is_open_by_default: z.ZodOptional<z.ZodBoolean>;
                title: z.ZodOptional<z.ZodString>;
                i18n_title: z.ZodOptional<z.ZodObject<{
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
                explain: z.ZodOptional<z.ZodString>;
                i18n_explain: z.ZodOptional<z.ZodObject<{
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
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            }, {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
            color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
            priority?: number | undefined;
            i18n_title?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            sync_setting?: {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            title: string;
            icon_key: "GeneralDoNotDisturb" | "GeneralInMeetingBusy" | "Coffee" | "GeneralBusinessTrip" | "GeneralWorkFromHome" | "StatusEnjoyLife" | "GeneralTravellingCar" | "StatusBus" | "StatusInFlight" | "Typing" | "EatingFood" | "SICK" | "GeneralSun" | "GeneralMoonRest" | "StatusReading" | "Status_PrivateMessage" | "StatusFlashOfInspiration" | "GeneralVacation";
            color?: "BLUE" | "GRAY" | "INDIGO" | "WATHET" | "GREEN" | "TURQUOISE" | "YELLOW" | "LIME" | "RED" | "ORANGE" | "PURPLE" | "VIOLET" | "CARMINE" | undefined;
            priority?: number | undefined;
            i18n_title?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            sync_setting?: {
                title?: string | undefined;
                i18n_title?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
                is_open_by_default?: boolean | undefined;
                explain?: string | undefined;
                i18n_explain?: {
                    zh_cn?: string | undefined;
                    en_us?: string | undefined;
                    ja_jp?: string | undefined;
                } | undefined;
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
        path: z.ZodOptional<z.ZodObject<{
            system_status_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            system_status_id?: string | undefined;
        }, {
            system_status_id?: string | undefined;
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
})[];
