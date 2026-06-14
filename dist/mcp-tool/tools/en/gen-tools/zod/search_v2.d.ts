import { z } from 'zod';
export type searchV2ToolName = 'search.v2.app.create' | 'search.v2.dataSource.create' | 'search.v2.dataSource.delete' | 'search.v2.dataSource.get' | 'search.v2.dataSourceItem.create' | 'search.v2.dataSourceItem.delete' | 'search.v2.dataSourceItem.get' | 'search.v2.dataSource.list' | 'search.v2.dataSource.patch' | 'search.v2.message.create' | 'search.v2.schema.create' | 'search.v2.schema.delete' | 'search.v2.schema.get' | 'search.v2.schema.patch';
export declare const searchV2AppCreate: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const searchV2DataSourceCreate: {
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
            state: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            icon_url: z.ZodOptional<z.ZodString>;
            template: z.ZodOptional<z.ZodString>;
            searchable_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            i18n_name: z.ZodOptional<z.ZodObject<{
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
            i18n_description: z.ZodOptional<z.ZodObject<{
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
            schema_id: z.ZodOptional<z.ZodString>;
            app_id: z.ZodOptional<z.ZodString>;
            connect_type: z.ZodOptional<z.ZodNumber>;
            connector_param: z.ZodOptional<z.ZodObject<{
                callback_user_id_type: z.ZodOptional<z.ZodNumber>;
                callback_endpoint: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }>>;
            enable_answer: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            app_id?: string | undefined;
            connect_type?: number | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            schema_id?: string | undefined;
            icon_url?: string | undefined;
            template?: string | undefined;
            searchable_fields?: string[] | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
        }, {
            name: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            app_id?: string | undefined;
            connect_type?: number | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            schema_id?: string | undefined;
            icon_url?: string | undefined;
            template?: string | undefined;
            searchable_fields?: string[] | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
        }>;
    };
};
export declare const searchV2DataSourceDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            data_source_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data_source_id: string;
        }, {
            data_source_id: string;
        }>;
    };
};
export declare const searchV2DataSourceGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            data_source_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data_source_id: string;
        }, {
            data_source_id: string;
        }>;
    };
};
export declare const searchV2DataSourceItemCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            id: z.ZodString;
            acl: z.ZodArray<z.ZodObject<{
                access: z.ZodOptional<z.ZodEnum<["allow", "deny"]>>;
                value: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodEnum<["user_id", "open_id", "union_id", "department_id", "open_department_id", "group_id", "app_group_id", "user", "group"]>>;
            }, "strip", z.ZodTypeAny, {
                value?: string | undefined;
                type?: "user" | "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "group_id" | "group" | "app_group_id" | undefined;
                access?: "allow" | "deny" | undefined;
            }, {
                value?: string | undefined;
                type?: "user" | "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "group_id" | "group" | "app_group_id" | undefined;
                access?: "allow" | "deny" | undefined;
            }>, "many">;
            metadata: z.ZodObject<{
                title: z.ZodString;
                source_url: z.ZodString;
                create_time: z.ZodOptional<z.ZodNumber>;
                update_time: z.ZodOptional<z.ZodNumber>;
                source_url_mobile: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                source_url: string;
                update_time?: number | undefined;
                create_time?: number | undefined;
                source_url_mobile?: string | undefined;
            }, {
                title: string;
                source_url: string;
                update_time?: number | undefined;
                create_time?: number | undefined;
                source_url_mobile?: string | undefined;
            }>;
            structured_data: z.ZodString;
            content: z.ZodOptional<z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<["html", "plaintext"]>>;
                content_data: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                format?: "html" | "plaintext" | undefined;
                content_data?: string | undefined;
            }, {
                format?: "html" | "plaintext" | undefined;
                content_data?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            metadata: {
                title: string;
                source_url: string;
                update_time?: number | undefined;
                create_time?: number | undefined;
                source_url_mobile?: string | undefined;
            };
            acl: {
                value?: string | undefined;
                type?: "user" | "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "group_id" | "group" | "app_group_id" | undefined;
                access?: "allow" | "deny" | undefined;
            }[];
            structured_data: string;
            content?: {
                format?: "html" | "plaintext" | undefined;
                content_data?: string | undefined;
            } | undefined;
        }, {
            id: string;
            metadata: {
                title: string;
                source_url: string;
                update_time?: number | undefined;
                create_time?: number | undefined;
                source_url_mobile?: string | undefined;
            };
            acl: {
                value?: string | undefined;
                type?: "user" | "user_id" | "union_id" | "open_id" | "department_id" | "open_department_id" | "group_id" | "group" | "app_group_id" | undefined;
                access?: "allow" | "deny" | undefined;
            }[];
            structured_data: string;
            content?: {
                format?: "html" | "plaintext" | undefined;
                content_data?: string | undefined;
            } | undefined;
        }>;
        path: z.ZodObject<{
            data_source_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data_source_id: string;
        }, {
            data_source_id: string;
        }>;
    };
};
export declare const searchV2DataSourceItemDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            data_source_id: z.ZodString;
            item_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            item_id: string;
            data_source_id: string;
        }, {
            item_id: string;
            data_source_id: string;
        }>;
    };
};
export declare const searchV2DataSourceItemGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodOptional<z.ZodObject<{
            data_source_id: z.ZodOptional<z.ZodString>;
            item_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            item_id?: string | undefined;
            data_source_id?: string | undefined;
        }, {
            item_id?: string | undefined;
            data_source_id?: string | undefined;
        }>>;
    };
};
export declare const searchV2DataSourceList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            view: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view?: number | undefined;
        }>>;
    };
};
export declare const searchV2DataSourcePatch: {
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
            state: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            icon_url: z.ZodOptional<z.ZodString>;
            i18n_name: z.ZodOptional<z.ZodObject<{
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
            i18n_description: z.ZodOptional<z.ZodObject<{
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
            connector_param: z.ZodOptional<z.ZodObject<{
                callback_user_id_type: z.ZodOptional<z.ZodNumber>;
                callback_endpoint: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }>>;
            enable_answer: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            icon_url?: string | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
        }, {
            name?: string | undefined;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            icon_url?: string | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            data_source_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data_source_id: string;
        }, {
            data_source_id: string;
        }>;
    };
};
export declare const searchV2MessageCreate: {
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
            from_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            chat_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            message_type: z.ZodOptional<z.ZodEnum<["file", "image", "media"]>>;
            at_chatter_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            from_type: z.ZodOptional<z.ZodEnum<["bot", "user"]>>;
            chat_type: z.ZodOptional<z.ZodEnum<["group_chat", "p2p_chat"]>>;
            start_time: z.ZodOptional<z.ZodString>;
            end_time: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            query: string;
            chat_ids?: string[] | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            chat_type?: "group_chat" | "p2p_chat" | undefined;
            from_ids?: string[] | undefined;
            message_type?: "file" | "image" | "media" | undefined;
            at_chatter_ids?: string[] | undefined;
            from_type?: "user" | "bot" | undefined;
        }, {
            query: string;
            chat_ids?: string[] | undefined;
            start_time?: string | undefined;
            end_time?: string | undefined;
            chat_type?: "group_chat" | "p2p_chat" | undefined;
            from_ids?: string[] | undefined;
            message_type?: "file" | "image" | "media" | undefined;
            at_chatter_ids?: string[] | undefined;
            from_type?: "user" | "bot" | undefined;
        }>;
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const searchV2SchemaCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            properties: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodEnum<["text", "int", "tag", "timestamp", "double", "tinytext", "user_ids"]>;
                is_searchable: z.ZodOptional<z.ZodBoolean>;
                is_sortable: z.ZodOptional<z.ZodBoolean>;
                is_returnable: z.ZodOptional<z.ZodBoolean>;
                sort_options: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                }, {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                }>>;
                type_definitions: z.ZodOptional<z.ZodObject<{
                    tag: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        color: z.ZodEnum<["red", "green", "blue", "grey", "yellow"]>;
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }, {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }>, "many">>;
                    user_ids: z.ZodOptional<z.ZodObject<{
                        id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
                    }, "strip", z.ZodTypeAny, {
                        id_type: "user_id" | "union_id" | "open_id";
                    }, {
                        id_type: "user_id" | "union_id" | "open_id";
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                }, {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                }>>;
                search_options: z.ZodOptional<z.ZodObject<{
                    enable_semantic_match: z.ZodOptional<z.ZodBoolean>;
                    enable_exact_match: z.ZodOptional<z.ZodBoolean>;
                    enable_prefix_match: z.ZodOptional<z.ZodBoolean>;
                    enable_number_suffix_match: z.ZodOptional<z.ZodBoolean>;
                    enable_camel_match: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                }, {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                }>>;
                is_filterable: z.ZodOptional<z.ZodBoolean>;
                filter_options: z.ZodOptional<z.ZodObject<{
                    display_name: z.ZodString;
                    i18n_display_name: z.ZodOptional<z.ZodObject<{
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
                    option_mode: z.ZodOptional<z.ZodEnum<["single", "multiple"]>>;
                    associated_smart_filter: z.ZodOptional<z.ZodEnum<["from", "date"]>>;
                    filter_type: z.ZodOptional<z.ZodEnum<["user", "time", "searchable", "predefine_enum"]>>;
                    predefine_enum_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                        name: string;
                    }, {
                        text: string;
                        name: string;
                    }>, "many">>;
                    enable_client_filter: z.ZodOptional<z.ZodBoolean>;
                    reference_datasource_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                }, {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                }>>;
                answer_option: z.ZodOptional<z.ZodObject<{
                    is_searchable: z.ZodOptional<z.ZodBoolean>;
                    is_returnable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }>>;
                desc: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }, {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }>, "many">;
            display: z.ZodObject<{
                card_key: z.ZodLiteral<"search_common_card">;
                fields_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    display_field: z.ZodString;
                    data_field: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    display_field: string;
                    data_field: string;
                }, {
                    display_field: string;
                    data_field: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }>;
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
            properties: {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[];
            display: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            };
        }, {
            schema_id: string;
            properties: {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[];
            display: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            validate_only: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            validate_only?: boolean | undefined;
        }, {
            validate_only?: boolean | undefined;
        }>>;
    };
};
export declare const searchV2SchemaDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
        }, {
            schema_id: string;
        }>;
    };
};
export declare const searchV2SchemaGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
        }, {
            schema_id: string;
        }>;
    };
};
export declare const searchV2SchemaPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            display: z.ZodOptional<z.ZodObject<{
                card_key: z.ZodLiteral<"search_common_card">;
                fields_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    display_field: z.ZodString;
                    data_field: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    display_field: string;
                    data_field: string;
                }, {
                    display_field: string;
                    data_field: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }>>;
            properties: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                desc: z.ZodOptional<z.ZodString>;
                answer_option: z.ZodOptional<z.ZodObject<{
                    is_searchable: z.ZodOptional<z.ZodBoolean>;
                    is_returnable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                desc?: string | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }, {
                name: string;
                desc?: string | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            properties?: {
                name: string;
                desc?: string | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            display?: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            } | undefined;
        }, {
            properties?: {
                name: string;
                desc?: string | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            display?: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            } | undefined;
        }>>;
        path: z.ZodObject<{
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
        }, {
            schema_id: string;
        }>;
    };
};
export declare const searchV2Tools: ({
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
            state: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            icon_url: z.ZodOptional<z.ZodString>;
            template: z.ZodOptional<z.ZodString>;
            searchable_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            i18n_name: z.ZodOptional<z.ZodObject<{
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
            i18n_description: z.ZodOptional<z.ZodObject<{
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
            schema_id: z.ZodOptional<z.ZodString>;
            app_id: z.ZodOptional<z.ZodString>;
            connect_type: z.ZodOptional<z.ZodNumber>;
            connector_param: z.ZodOptional<z.ZodObject<{
                callback_user_id_type: z.ZodOptional<z.ZodNumber>;
                callback_endpoint: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }, {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            }>>;
            enable_answer: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            app_id?: string | undefined;
            connect_type?: number | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            schema_id?: string | undefined;
            icon_url?: string | undefined;
            template?: string | undefined;
            searchable_fields?: string[] | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
        }, {
            name: string;
            i18n_name?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            app_id?: string | undefined;
            connect_type?: number | undefined;
            description?: string | undefined;
            i18n_description?: {
                zh_cn?: string | undefined;
                en_us?: string | undefined;
                ja_jp?: string | undefined;
            } | undefined;
            state?: number | undefined;
            schema_id?: string | undefined;
            icon_url?: string | undefined;
            template?: string | undefined;
            searchable_fields?: string[] | undefined;
            connector_param?: {
                callback_user_id_type?: number | undefined;
                callback_endpoint?: string | undefined;
            } | undefined;
            enable_answer?: boolean | undefined;
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
            data_source_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data_source_id: string;
        }, {
            data_source_id: string;
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
            data_source_id: z.ZodOptional<z.ZodString>;
            item_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            item_id?: string | undefined;
            data_source_id?: string | undefined;
        }, {
            item_id?: string | undefined;
            data_source_id?: string | undefined;
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
            view: z.ZodOptional<z.ZodNumber>;
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view?: number | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            view?: number | undefined;
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
            properties: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodEnum<["text", "int", "tag", "timestamp", "double", "tinytext", "user_ids"]>;
                is_searchable: z.ZodOptional<z.ZodBoolean>;
                is_sortable: z.ZodOptional<z.ZodBoolean>;
                is_returnable: z.ZodOptional<z.ZodBoolean>;
                sort_options: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                }, {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                }>>;
                type_definitions: z.ZodOptional<z.ZodObject<{
                    tag: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        color: z.ZodEnum<["red", "green", "blue", "grey", "yellow"]>;
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }, {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }>, "many">>;
                    user_ids: z.ZodOptional<z.ZodObject<{
                        id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
                    }, "strip", z.ZodTypeAny, {
                        id_type: "user_id" | "union_id" | "open_id";
                    }, {
                        id_type: "user_id" | "union_id" | "open_id";
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                }, {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                }>>;
                search_options: z.ZodOptional<z.ZodObject<{
                    enable_semantic_match: z.ZodOptional<z.ZodBoolean>;
                    enable_exact_match: z.ZodOptional<z.ZodBoolean>;
                    enable_prefix_match: z.ZodOptional<z.ZodBoolean>;
                    enable_number_suffix_match: z.ZodOptional<z.ZodBoolean>;
                    enable_camel_match: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                }, {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                }>>;
                is_filterable: z.ZodOptional<z.ZodBoolean>;
                filter_options: z.ZodOptional<z.ZodObject<{
                    display_name: z.ZodString;
                    i18n_display_name: z.ZodOptional<z.ZodObject<{
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
                    option_mode: z.ZodOptional<z.ZodEnum<["single", "multiple"]>>;
                    associated_smart_filter: z.ZodOptional<z.ZodEnum<["from", "date"]>>;
                    filter_type: z.ZodOptional<z.ZodEnum<["user", "time", "searchable", "predefine_enum"]>>;
                    predefine_enum_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                        name: string;
                    }, {
                        text: string;
                        name: string;
                    }>, "many">>;
                    enable_client_filter: z.ZodOptional<z.ZodBoolean>;
                    reference_datasource_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                }, {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                }>>;
                answer_option: z.ZodOptional<z.ZodObject<{
                    is_searchable: z.ZodOptional<z.ZodBoolean>;
                    is_returnable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }, {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                }>>;
                desc: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }, {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }>, "many">;
            display: z.ZodObject<{
                card_key: z.ZodLiteral<"search_common_card">;
                fields_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    display_field: z.ZodString;
                    data_field: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    display_field: string;
                    data_field: string;
                }, {
                    display_field: string;
                    data_field: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }, {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            }>;
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
            properties: {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[];
            display: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            };
        }, {
            schema_id: string;
            properties: {
                type: "text" | "user_ids" | "timestamp" | "tag" | "int" | "double" | "tinytext";
                name: string;
                desc?: string | undefined;
                sort_options?: {
                    order?: "asc" | "desc" | undefined;
                    priority?: number | undefined;
                } | undefined;
                is_searchable?: boolean | undefined;
                is_sortable?: boolean | undefined;
                is_returnable?: boolean | undefined;
                type_definitions?: {
                    user_ids?: {
                        id_type: "user_id" | "union_id" | "open_id";
                    } | undefined;
                    tag?: {
                        text: string;
                        name: string;
                        color: "red" | "green" | "blue" | "grey" | "yellow";
                    }[] | undefined;
                } | undefined;
                search_options?: {
                    enable_semantic_match?: boolean | undefined;
                    enable_exact_match?: boolean | undefined;
                    enable_prefix_match?: boolean | undefined;
                    enable_number_suffix_match?: boolean | undefined;
                    enable_camel_match?: boolean | undefined;
                } | undefined;
                is_filterable?: boolean | undefined;
                filter_options?: {
                    display_name: string;
                    i18n_display_name?: {
                        zh_cn?: string | undefined;
                        en_us?: string | undefined;
                        ja_jp?: string | undefined;
                    } | undefined;
                    option_mode?: "multiple" | "single" | undefined;
                    associated_smart_filter?: "date" | "from" | undefined;
                    filter_type?: "user" | "time" | "searchable" | "predefine_enum" | undefined;
                    predefine_enum_values?: {
                        text: string;
                        name: string;
                    }[] | undefined;
                    enable_client_filter?: boolean | undefined;
                    reference_datasource_id?: string | undefined;
                } | undefined;
                answer_option?: {
                    is_searchable?: boolean | undefined;
                    is_returnable?: boolean | undefined;
                } | undefined;
            }[];
            display: {
                card_key: "search_common_card";
                fields_mapping?: {
                    display_field: string;
                    data_field: string;
                }[] | undefined;
            };
        }>;
        params: z.ZodOptional<z.ZodObject<{
            validate_only: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            validate_only?: boolean | undefined;
        }, {
            validate_only?: boolean | undefined;
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
            schema_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            schema_id: string;
        }, {
            schema_id: string;
        }>;
    };
})[];
