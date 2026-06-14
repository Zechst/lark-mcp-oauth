import { z } from 'zod';
export type ailyV1ToolName = 'aily.v1.ailySessionAilyMessage.create' | 'aily.v1.ailySessionAilyMessage.get' | 'aily.v1.ailySessionAilyMessage.list' | 'aily.v1.ailySession.create' | 'aily.v1.ailySession.delete' | 'aily.v1.ailySession.get' | 'aily.v1.ailySessionRun.cancel' | 'aily.v1.ailySessionRun.create' | 'aily.v1.ailySessionRun.get' | 'aily.v1.ailySessionRun.list' | 'aily.v1.ailySession.update' | 'aily.v1.appDataAssetTag.list' | 'aily.v1.appDataAsset.create' | 'aily.v1.appDataAsset.delete' | 'aily.v1.appDataAsset.get' | 'aily.v1.appDataAsset.list' | 'aily.v1.appSkill.get' | 'aily.v1.appSkill.list' | 'aily.v1.appSkill.start';
export declare const ailyV1AilySessionAilyMessageCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            idempotent_id: z.ZodString;
            content_type: z.ZodEnum<["MDX", "TEXT", "CLIP", "SmartCard", "JSON"]>;
            content: z.ZodString;
            file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            quote_message_id: z.ZodOptional<z.ZodString>;
            mentions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                entity_id: z.ZodOptional<z.ZodString>;
                identity_provider: z.ZodOptional<z.ZodEnum<["AILY", "FEISHU"]>>;
                key: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                aily_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                entity_id?: string | undefined;
                identity_provider?: "AILY" | "FEISHU" | undefined;
                key?: string | undefined;
                aily_id?: string | undefined;
            }, {
                name?: string | undefined;
                entity_id?: string | undefined;
                identity_provider?: "AILY" | "FEISHU" | undefined;
                key?: string | undefined;
                aily_id?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            idempotent_id: string;
            content_type: "MDX" | "TEXT" | "CLIP" | "SmartCard" | "JSON";
            file_ids?: string[] | undefined;
            quote_message_id?: string | undefined;
            mentions?: {
                name?: string | undefined;
                entity_id?: string | undefined;
                identity_provider?: "AILY" | "FEISHU" | undefined;
                key?: string | undefined;
                aily_id?: string | undefined;
            }[] | undefined;
        }, {
            content: string;
            idempotent_id: string;
            content_type: "MDX" | "TEXT" | "CLIP" | "SmartCard" | "JSON";
            file_ids?: string[] | undefined;
            quote_message_id?: string | undefined;
            mentions?: {
                name?: string | undefined;
                entity_id?: string | undefined;
                identity_provider?: "AILY" | "FEISHU" | undefined;
                key?: string | undefined;
                aily_id?: string | undefined;
            }[] | undefined;
        }>;
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionAilyMessageGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
            aily_message_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
            aily_message_id: string;
        }, {
            aily_session_id: string;
            aily_message_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionAilyMessageList: {
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
            run_id: z.ZodOptional<z.ZodString>;
            with_partial_message: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            run_id?: string | undefined;
            with_partial_message?: boolean | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            run_id?: string | undefined;
            with_partial_message?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            channel_context: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
        }, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionRunCancel: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
            run_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
            run_id: string;
        }, {
            aily_session_id: string;
            run_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionRunCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            app_id: z.ZodString;
            skill_id: z.ZodOptional<z.ZodString>;
            skill_input: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            metadata?: string | undefined;
            skill_id?: string | undefined;
            skill_input?: string | undefined;
        }, {
            app_id: string;
            metadata?: string | undefined;
            skill_id?: string | undefined;
            skill_input?: string | undefined;
        }>;
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionRunGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
            run_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
            run_id: string;
        }, {
            aily_session_id: string;
            run_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionRunList: {
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
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AilySessionUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            channel_context: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
        }, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
        }>>;
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppDataAssetTagList: {
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
            keyword: z.ZodOptional<z.ZodString>;
            data_asset_tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            data_asset_tag_ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            data_asset_tag_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppDataAssetCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            connect_type: z.ZodEnum<["import", "direct"]>;
            source_type: z.ZodEnum<["file", "lark_wiki_space", "lark_doc", "lark_helpdesk"]>;
            import_knowledge_setting: z.ZodOptional<z.ZodObject<{
                chunk_setting: z.ZodOptional<z.ZodObject<{
                    rule_type: z.ZodEnum<["separator", "intelligent"]>;
                    separate_type: z.ZodOptional<z.ZodEnum<["paragraph", "title"]>>;
                    size: z.ZodOptional<z.ZodNumber>;
                    overlap: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                }, {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                }>>;
                file: z.ZodOptional<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    token: z.ZodOptional<z.ZodString>;
                    content: z.ZodOptional<z.ZodString>;
                    mime_type: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                }, {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                }>>;
                lark_doc: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<["doc", "file", "wiki", "docx", "folder"]>;
                    token: z.ZodString;
                    with_sub_docs: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                }, {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                }>>;
                lark_wiki_space: z.ZodOptional<z.ZodObject<{
                    space_id: z.ZodString;
                    sub_docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodLiteral<"wiki">;
                        token: z.ZodString;
                        url: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }, {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }>, "many">>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                }, {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                }>>;
                lark_helpdesk: z.ZodOptional<z.ZodObject<{
                    helpdesk_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    helpdesk_id: string;
                }, {
                    helpdesk_id: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            }, {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            }>>;
            description: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            connect_type: "import" | "direct";
            source_type: "file" | "lark_wiki_space" | "lark_doc" | "lark_helpdesk";
            import_knowledge_setting?: {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            } | undefined;
            description?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
        }, {
            connect_type: "import" | "direct";
            source_type: "file" | "lark_wiki_space" | "lark_doc" | "lark_helpdesk";
            import_knowledge_setting?: {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            } | undefined;
            description?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            tenant_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenant_type?: string | undefined;
        }, {
            tenant_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppDataAssetDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            tenant_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenant_type?: string | undefined;
        }, {
            tenant_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            data_asset_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            data_asset_id: string;
        }, {
            app_id: string;
            data_asset_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppDataAssetGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            with_data_asset_item: z.ZodOptional<z.ZodBoolean>;
            with_connect_status: z.ZodOptional<z.ZodBoolean>;
            tenant_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenant_type?: string | undefined;
            with_data_asset_item?: boolean | undefined;
            with_connect_status?: boolean | undefined;
        }, {
            tenant_type?: string | undefined;
            with_data_asset_item?: boolean | undefined;
            with_connect_status?: boolean | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            data_asset_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            data_asset_id: string;
        }, {
            app_id: string;
            data_asset_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppDataAssetList: {
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
            keyword: z.ZodOptional<z.ZodString>;
            data_asset_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            data_asset_tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            with_data_asset_item: z.ZodOptional<z.ZodBoolean>;
            with_connect_status: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            data_asset_tag_ids?: string[] | undefined;
            with_data_asset_item?: boolean | undefined;
            with_connect_status?: boolean | undefined;
            data_asset_ids?: string[] | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            keyword?: string | undefined;
            data_asset_tag_ids?: string[] | undefined;
            with_data_asset_item?: boolean | undefined;
            with_connect_status?: boolean | undefined;
            data_asset_ids?: string[] | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppSkillGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            app_id: z.ZodString;
            skill_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            skill_id: string;
        }, {
            app_id: string;
            skill_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppSkillList: {
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
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1AppSkillStart: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            global_variable: z.ZodOptional<z.ZodObject<{
                query: z.ZodOptional<z.ZodString>;
                files: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channel: z.ZodOptional<z.ZodObject<{
                    variables: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    variables?: string | undefined;
                }, {
                    variables?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                query?: string | undefined;
                files?: string[] | undefined;
                channel?: {
                    variables?: string | undefined;
                } | undefined;
            }, {
                query?: string | undefined;
                files?: string[] | undefined;
                channel?: {
                    variables?: string | undefined;
                } | undefined;
            }>>;
            input: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            global_variable?: {
                query?: string | undefined;
                files?: string[] | undefined;
                channel?: {
                    variables?: string | undefined;
                } | undefined;
            } | undefined;
            input?: string | undefined;
        }, {
            global_variable?: {
                query?: string | undefined;
                files?: string[] | undefined;
                channel?: {
                    variables?: string | undefined;
                } | undefined;
            } | undefined;
            input?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            skill_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            skill_id: string;
        }, {
            app_id: string;
            skill_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const ailyV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            channel_context: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
        }, {
            channel_context?: string | undefined;
            metadata?: string | undefined;
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
        path: z.ZodObject<{
            aily_session_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aily_session_id: string;
        }, {
            aily_session_id: string;
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
            connect_type: z.ZodEnum<["import", "direct"]>;
            source_type: z.ZodEnum<["file", "lark_wiki_space", "lark_doc", "lark_helpdesk"]>;
            import_knowledge_setting: z.ZodOptional<z.ZodObject<{
                chunk_setting: z.ZodOptional<z.ZodObject<{
                    rule_type: z.ZodEnum<["separator", "intelligent"]>;
                    separate_type: z.ZodOptional<z.ZodEnum<["paragraph", "title"]>>;
                    size: z.ZodOptional<z.ZodNumber>;
                    overlap: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                }, {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                }>>;
                file: z.ZodOptional<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    token: z.ZodOptional<z.ZodString>;
                    content: z.ZodOptional<z.ZodString>;
                    mime_type: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                }, {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                }>>;
                lark_doc: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<["doc", "file", "wiki", "docx", "folder"]>;
                    token: z.ZodString;
                    with_sub_docs: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                }, {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                }>>;
                lark_wiki_space: z.ZodOptional<z.ZodObject<{
                    space_id: z.ZodString;
                    sub_docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodLiteral<"wiki">;
                        token: z.ZodString;
                        url: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }, {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }>, "many">>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                }, {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                }>>;
                lark_helpdesk: z.ZodOptional<z.ZodObject<{
                    helpdesk_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    helpdesk_id: string;
                }, {
                    helpdesk_id: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            }, {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            }>>;
            description: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            connect_type: "import" | "direct";
            source_type: "file" | "lark_wiki_space" | "lark_doc" | "lark_helpdesk";
            import_knowledge_setting?: {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            } | undefined;
            description?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
        }, {
            connect_type: "import" | "direct";
            source_type: "file" | "lark_wiki_space" | "lark_doc" | "lark_helpdesk";
            import_knowledge_setting?: {
                file?: {
                    content?: string | undefined;
                    title?: string | undefined;
                    token?: string | undefined;
                    mime_type?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                lark_wiki_space?: {
                    space_id: string;
                    url?: string | undefined;
                    sub_docs?: {
                        type: "wiki";
                        token: string;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lark_doc?: {
                    type: "docx" | "doc" | "file" | "wiki" | "folder";
                    token: string;
                    with_sub_docs?: boolean | undefined;
                } | undefined;
                lark_helpdesk?: {
                    helpdesk_id: string;
                } | undefined;
                chunk_setting?: {
                    rule_type: "separator" | "intelligent";
                    separate_type?: "paragraph" | "title" | undefined;
                    size?: number | undefined;
                    overlap?: number | undefined;
                } | undefined;
            } | undefined;
            description?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            tenant_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenant_type?: string | undefined;
        }, {
            tenant_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
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
            tenant_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenant_type?: string | undefined;
        }, {
            tenant_type?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
            data_asset_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            data_asset_id: string;
        }, {
            app_id: string;
            data_asset_id: string;
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
        path: z.ZodObject<{
            app_id: z.ZodString;
            skill_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
            skill_id: string;
        }, {
            app_id: string;
            skill_id: string;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            app_id: string;
        }, {
            app_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
