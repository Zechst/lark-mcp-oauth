import { z } from 'zod';
export type baikeV1ToolName = 'baike.v1.classification.list' | 'baike.v1.draft.create' | 'baike.v1.draft.update' | 'baike.v1.entity.create' | 'baike.v1.entity.extract' | 'baike.v1.entity.get' | 'baike.v1.entity.highlight' | 'baike.v1.entity.list' | 'baike.v1.entity.match' | 'baike.v1.entity.search' | 'baike.v1.entity.update';
export declare const baikeV1ClassificationList: {
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
export declare const baikeV1DraftCreate: {
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
export declare const baikeV1DraftUpdate: {
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
export declare const baikeV1EntityCreate: {
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
export declare const baikeV1EntityExtract: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
        }, {
            text?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const baikeV1EntityGet: {
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
export declare const baikeV1EntityHighlight: {
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
export declare const baikeV1EntityList: {
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
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            provider?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const baikeV1EntityMatch: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const baikeV1EntitySearch: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const baikeV1EntityUpdate: {
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
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const baikeV1Tools: ({
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
        data: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
        }, {
            text?: string | undefined;
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
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
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
            word: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            word: string;
        }, {
            word: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
