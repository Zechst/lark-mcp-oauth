import { z } from 'zod';
export type lingoV1ToolName = 'lingo.v1.classification.list' | 'lingo.v1.draft.create' | 'lingo.v1.draft.update' | 'lingo.v1.entity.create' | 'lingo.v1.entity.delete' | 'lingo.v1.entity.get' | 'lingo.v1.entity.highlight' | 'lingo.v1.entity.list' | 'lingo.v1.entity.match' | 'lingo.v1.entity.search' | 'lingo.v1.entity.update' | 'lingo.v1.repo.list';
export declare const lingoV1ClassificationList: {
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
            repo_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            repo_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            repo_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1DraftCreate: {
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
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            outer_info: z.ZodOptional<z.ZodObject<{
                provider: z.ZodString;
                outer_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                provider: string;
                outer_id: string;
            }, {
                provider: string;
                outer_id: string;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            id?: string | undefined;
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            id?: string | undefined;
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            repo_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1DraftUpdate: {
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
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            id?: string | undefined;
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            id?: string | undefined;
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            draft_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            draft_id: string;
        }, {
            draft_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntityCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            outer_info: z.ZodOptional<z.ZodObject<{
                provider: z.ZodString;
                outer_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                provider: string;
                outer_id: string;
            }, {
                provider: string;
                outer_id: string;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            repo_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }>>;
    };
};
export declare const lingoV1EntityDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            provider: z.ZodOptional<z.ZodString>;
            outer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            provider?: string | undefined;
            outer_id?: string | undefined;
        }, {
            provider?: string | undefined;
            outer_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            entity_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entity_id: string;
        }, {
            entity_id: string;
        }>;
    };
};
export declare const lingoV1EntityGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            provider: z.ZodOptional<z.ZodString>;
            outer_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
            outer_id?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
            outer_id?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            entity_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            entity_id?: string | undefined;
        }, {
            entity_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntityHighlight: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntityList: {
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
            provider: z.ZodOptional<z.ZodString>;
            repo_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
            repo_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
            repo_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntityMatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            word: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            word: string;
        }, {
            word: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            repo_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            repo_id?: string | undefined;
        }, {
            repo_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntitySearch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            query: z.ZodOptional<z.ZodString>;
            classification_filter: z.ZodOptional<z.ZodObject<{
                include: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                exclude: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
            }, {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
            }>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            creators: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            query?: string | undefined;
            classification_filter?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
            } | undefined;
            sources?: number[] | undefined;
            creators?: string[] | undefined;
        }, {
            query?: string | undefined;
            classification_filter?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
            } | undefined;
            sources?: number[] | undefined;
            creators?: string[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            repo_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const lingoV1EntityUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            outer_info: z.ZodOptional<z.ZodObject<{
                provider: z.ZodString;
                outer_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                provider: string;
                outer_id: string;
            }, {
                provider: string;
                outer_id: string;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            entity_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            entity_id?: string | undefined;
        }, {
            entity_id?: string | undefined;
        }>>;
    };
};
export declare const lingoV1RepoList: {
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
export declare const lingoV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            outer_info: z.ZodOptional<z.ZodObject<{
                provider: z.ZodString;
                outer_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                provider: string;
                outer_id: string;
            }, {
                provider: string;
                outer_id: string;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            repo_id: z.ZodOptional<z.ZodString>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            repo_id?: string | undefined;
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
            provider: z.ZodOptional<z.ZodString>;
            outer_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            provider?: string | undefined;
            outer_id?: string | undefined;
        }, {
            provider?: string | undefined;
            outer_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            entity_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entity_id: string;
        }, {
            entity_id: string;
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
            main_keys: z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">;
            aliases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                display_status: z.ZodObject<{
                    allow_highlight: z.ZodBoolean;
                    allow_search: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }, {
                    allow_highlight: boolean;
                    allow_search: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }, {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }>, "many">>;
            description: z.ZodOptional<z.ZodString>;
            related_meta: z.ZodOptional<z.ZodObject<{
                users: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    title?: string | undefined;
                }, {
                    id: string;
                    title?: string | undefined;
                }>, "many">>;
                chats: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                oncalls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>, "many">>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodOptional<z.ZodString>;
                    url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    title?: string | undefined;
                    url?: string | undefined;
                }, {
                    title?: string | undefined;
                    url?: string | undefined;
                }>, "many">>;
                abbreviations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                }, {
                    id?: string | undefined;
                }>, "many">>;
                classifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    father_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    father_id?: string | undefined;
                }, {
                    id: string;
                    father_id?: string | undefined;
                }>, "many">>;
                images: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    token: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }, {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            }>>;
            outer_info: z.ZodOptional<z.ZodObject<{
                provider: z.ZodString;
                outer_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                provider: string;
                outer_id: string;
            }, {
                provider: string;
                outer_id: string;
            }>>;
            rich_text: z.ZodOptional<z.ZodString>;
            i18n_descs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                language: z.ZodNumber;
                description: z.ZodOptional<z.ZodString>;
                rich_text: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }, {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }, {
            main_keys: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[];
            description?: string | undefined;
            aliases?: {
                key: string;
                display_status: {
                    allow_highlight: boolean;
                    allow_search: boolean;
                };
            }[] | undefined;
            related_meta?: {
                users?: {
                    id: string;
                    title?: string | undefined;
                }[] | undefined;
                links?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                chats?: {
                    id: string;
                }[] | undefined;
                docs?: {
                    title?: string | undefined;
                    url?: string | undefined;
                }[] | undefined;
                oncalls?: {
                    id: string;
                }[] | undefined;
                abbreviations?: {
                    id?: string | undefined;
                }[] | undefined;
                classifications?: {
                    id: string;
                    father_id?: string | undefined;
                }[] | undefined;
                images?: {
                    token: string;
                }[] | undefined;
            } | undefined;
            outer_info?: {
                provider: string;
                outer_id: string;
            } | undefined;
            rich_text?: string | undefined;
            i18n_descs?: {
                language: number;
                description?: string | undefined;
                rich_text?: string | undefined;
            }[] | undefined;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            entity_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            entity_id?: string | undefined;
        }, {
            entity_id?: string | undefined;
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
