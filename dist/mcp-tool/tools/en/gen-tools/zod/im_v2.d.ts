import { z } from 'zod';
export type imV2ToolName = 'im.v2.appFeedCardBatch.delete' | 'im.v2.appFeedCardBatch.update' | 'im.v2.appFeedCard.create' | 'im.v2.bizEntityTagRelation.create' | 'im.v2.bizEntityTagRelation.get' | 'im.v2.bizEntityTagRelation.update' | 'im.v2.chatButton.update' | 'im.v2.feedCard.botTimeSentive' | 'im.v2.feedCard.patch' | 'im.v2.tag.create' | 'im.v2.tag.patch' | 'im.v2.urlPreview.batchUpdate';
export declare const imV2AppFeedCardBatchDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            feed_cards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                biz_id: z.ZodString;
                user_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                biz_id: string;
            }, {
                user_id: string;
                biz_id: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            feed_cards?: {
                user_id: string;
                biz_id: string;
            }[] | undefined;
        }, {
            feed_cards?: {
                user_id: string;
                biz_id: string;
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const imV2AppFeedCardBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            feed_cards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                app_feed_card: z.ZodObject<{
                    biz_id: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    avatar_key: z.ZodOptional<z.ZodString>;
                    preview: z.ZodOptional<z.ZodString>;
                    status_label: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        type: z.ZodEnum<["primary", "secondary", "success", "danger"]>;
                    }, "strip", z.ZodTypeAny, {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    }, {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    }>>;
                    buttons: z.ZodOptional<z.ZodObject<{
                        buttons: z.ZodArray<z.ZodObject<{
                            multi_url: z.ZodOptional<z.ZodObject<{
                                url: z.ZodOptional<z.ZodString>;
                                android_url: z.ZodOptional<z.ZodString>;
                                ios_url: z.ZodOptional<z.ZodString>;
                                pc_url: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            }, {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            }>>;
                            action_type: z.ZodEnum<["url_page", "webhook"]>;
                            text: z.ZodObject<{
                                text: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                text: string;
                            }, {
                                text: string;
                            }>;
                            button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                            action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    }, {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    }>>;
                    link: z.ZodOptional<z.ZodObject<{
                        link: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        link?: string | undefined;
                    }, {
                        link?: string | undefined;
                    }>>;
                    time_sensitive: z.ZodOptional<z.ZodBoolean>;
                    notify: z.ZodOptional<z.ZodObject<{
                        close_notify: z.ZodOptional<z.ZodBoolean>;
                        custom_sound_text: z.ZodOptional<z.ZodString>;
                        with_custom_sound: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    }, {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                }, {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                }>;
                user_id: z.ZodString;
                update_fields: z.ZodArray<z.ZodEnum<["1", "2", "3", "10", "11", "12", "13", "101", "102", "103"]>, "many">;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }, {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            feed_cards?: {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }[] | undefined;
        }, {
            feed_cards?: {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }[] | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const imV2AppFeedCardCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            app_feed_card: z.ZodOptional<z.ZodObject<{
                biz_id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                avatar_key: z.ZodOptional<z.ZodString>;
                preview: z.ZodOptional<z.ZodString>;
                status_label: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    type: z.ZodEnum<["primary", "secondary", "success", "danger"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                }, {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                }>>;
                buttons: z.ZodOptional<z.ZodObject<{
                    buttons: z.ZodArray<z.ZodObject<{
                        multi_url: z.ZodOptional<z.ZodObject<{
                            url: z.ZodOptional<z.ZodString>;
                            android_url: z.ZodOptional<z.ZodString>;
                            ios_url: z.ZodOptional<z.ZodString>;
                            pc_url: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        }, {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        }>>;
                        action_type: z.ZodEnum<["url_page", "webhook"]>;
                        text: z.ZodObject<{
                            text: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            text: string;
                        }, {
                            text: string;
                        }>;
                        button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                        action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                }, {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                }>>;
                link: z.ZodOptional<z.ZodObject<{
                    link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    link?: string | undefined;
                }, {
                    link?: string | undefined;
                }>>;
                time_sensitive: z.ZodOptional<z.ZodBoolean>;
                notify: z.ZodOptional<z.ZodObject<{
                    close_notify: z.ZodOptional<z.ZodBoolean>;
                    custom_sound_text: z.ZodOptional<z.ZodString>;
                    with_custom_sound: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                }, {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            }, {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            }>>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            app_feed_card?: {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            } | undefined;
        }, {
            user_ids?: string[] | undefined;
            app_feed_card?: {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            } | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
};
export declare const imV2BizEntityTagRelationCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tag_biz_type: z.ZodLiteral<"chat">;
            biz_entity_id: z.ZodString;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
        }, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
        }>;
    };
};
export declare const imV2BizEntityTagRelationGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            tag_biz_type: z.ZodLiteral<"chat">;
            biz_entity_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tag_biz_type: "chat";
            biz_entity_id: string;
        }, {
            tag_biz_type: "chat";
            biz_entity_id: string;
        }>;
    };
};
export declare const imV2BizEntityTagRelationUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            tag_biz_type: z.ZodLiteral<"chat">;
            biz_entity_id: z.ZodString;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
        }, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
        }>;
    };
};
export declare const imV2ChatButtonUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            chat_id: z.ZodString;
            buttons: z.ZodOptional<z.ZodObject<{
                buttons: z.ZodArray<z.ZodObject<{
                    multi_url: z.ZodOptional<z.ZodObject<{
                        url: z.ZodOptional<z.ZodString>;
                        android_url: z.ZodOptional<z.ZodString>;
                        ios_url: z.ZodOptional<z.ZodString>;
                        pc_url: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    }, {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    }>>;
                    action_type: z.ZodEnum<["url_page", "webhook"]>;
                    text: z.ZodObject<{
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                    }, {
                        text: string;
                    }>;
                    button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                    action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            }, {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
            user_ids?: string[] | undefined;
            buttons?: {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            } | undefined;
        }, {
            chat_id: string;
            user_ids?: string[] | undefined;
            buttons?: {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
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
export declare const imV2FeedCardBotTimeSentive: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            time_sensitive: z.ZodBoolean;
            user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            time_sensitive: boolean;
        }, {
            user_ids: string[];
            time_sensitive: boolean;
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
    };
};
export declare const imV2FeedCardPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            time_sensitive: z.ZodBoolean;
            user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            time_sensitive: boolean;
        }, {
            user_ids: string[];
            time_sensitive: boolean;
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }>;
        path: z.ZodObject<{
            feed_card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            feed_card_id: string;
        }, {
            feed_card_id: string;
        }>;
    };
};
export declare const imV2TagCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            create_tag: z.ZodObject<{
                tag_type: z.ZodLiteral<"tenant">;
                name: z.ZodString;
                i18n_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    locale: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    locale: string;
                    name?: string | undefined;
                }, {
                    locale: string;
                    name?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            create_tag: {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            };
        }, {
            create_tag: {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            };
        }>;
    };
};
export declare const imV2TagPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            patch_tag: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                i18n_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    locale: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    locale: string;
                    name?: string | undefined;
                }, {
                    locale: string;
                    name?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            patch_tag?: {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            patch_tag?: {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        path: z.ZodObject<{
            tag_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tag_id: string;
        }, {
            tag_id: string;
        }>;
    };
};
export declare const imV2UrlPreviewBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            preview_tokens: z.ZodArray<z.ZodString, "many">;
            open_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            preview_tokens: string[];
            open_ids?: string[] | undefined;
        }, {
            preview_tokens: string[];
            open_ids?: string[] | undefined;
        }>;
    };
};
export declare const imV2Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            feed_cards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                biz_id: z.ZodString;
                user_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                biz_id: string;
            }, {
                user_id: string;
                biz_id: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            feed_cards?: {
                user_id: string;
                biz_id: string;
            }[] | undefined;
        }, {
            feed_cards?: {
                user_id: string;
                biz_id: string;
            }[] | undefined;
        }>>;
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
            feed_cards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                app_feed_card: z.ZodObject<{
                    biz_id: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    avatar_key: z.ZodOptional<z.ZodString>;
                    preview: z.ZodOptional<z.ZodString>;
                    status_label: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        type: z.ZodEnum<["primary", "secondary", "success", "danger"]>;
                    }, "strip", z.ZodTypeAny, {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    }, {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    }>>;
                    buttons: z.ZodOptional<z.ZodObject<{
                        buttons: z.ZodArray<z.ZodObject<{
                            multi_url: z.ZodOptional<z.ZodObject<{
                                url: z.ZodOptional<z.ZodString>;
                                android_url: z.ZodOptional<z.ZodString>;
                                ios_url: z.ZodOptional<z.ZodString>;
                                pc_url: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            }, {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            }>>;
                            action_type: z.ZodEnum<["url_page", "webhook"]>;
                            text: z.ZodObject<{
                                text: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                text: string;
                            }, {
                                text: string;
                            }>;
                            button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                            action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                        }, "strip", z.ZodTypeAny, {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }, {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    }, {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    }>>;
                    link: z.ZodOptional<z.ZodObject<{
                        link: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        link?: string | undefined;
                    }, {
                        link?: string | undefined;
                    }>>;
                    time_sensitive: z.ZodOptional<z.ZodBoolean>;
                    notify: z.ZodOptional<z.ZodObject<{
                        close_notify: z.ZodOptional<z.ZodBoolean>;
                        custom_sound_text: z.ZodOptional<z.ZodString>;
                        with_custom_sound: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    }, {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                }, {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                }>;
                user_id: z.ZodString;
                update_fields: z.ZodArray<z.ZodEnum<["1", "2", "3", "10", "11", "12", "13", "101", "102", "103"]>, "many">;
            }, "strip", z.ZodTypeAny, {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }, {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            feed_cards?: {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }[] | undefined;
        }, {
            feed_cards?: {
                user_id: string;
                update_fields: ("1" | "2" | "3" | "10" | "11" | "12" | "13" | "101" | "102" | "103")[];
                app_feed_card: {
                    link?: {
                        link?: string | undefined;
                    } | undefined;
                    title?: string | undefined;
                    avatar_key?: string | undefined;
                    biz_id?: string | undefined;
                    preview?: string | undefined;
                    status_label?: {
                        type: "secondary" | "primary" | "success" | "danger";
                        text: string;
                    } | undefined;
                    buttons?: {
                        buttons: {
                            text: {
                                text: string;
                            };
                            action_type: "url_page" | "webhook";
                            multi_url?: {
                                url?: string | undefined;
                                pc_url?: string | undefined;
                                ios_url?: string | undefined;
                                android_url?: string | undefined;
                            } | undefined;
                            button_type?: "default" | "primary" | "success" | undefined;
                            action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                        }[];
                    } | undefined;
                    time_sensitive?: boolean | undefined;
                    notify?: {
                        close_notify?: boolean | undefined;
                        custom_sound_text?: string | undefined;
                        with_custom_sound?: boolean | undefined;
                    } | undefined;
                };
            }[] | undefined;
        }>>;
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
            app_feed_card: z.ZodOptional<z.ZodObject<{
                biz_id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                avatar_key: z.ZodOptional<z.ZodString>;
                preview: z.ZodOptional<z.ZodString>;
                status_label: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    type: z.ZodEnum<["primary", "secondary", "success", "danger"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                }, {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                }>>;
                buttons: z.ZodOptional<z.ZodObject<{
                    buttons: z.ZodArray<z.ZodObject<{
                        multi_url: z.ZodOptional<z.ZodObject<{
                            url: z.ZodOptional<z.ZodString>;
                            android_url: z.ZodOptional<z.ZodString>;
                            ios_url: z.ZodOptional<z.ZodString>;
                            pc_url: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        }, {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        }>>;
                        action_type: z.ZodEnum<["url_page", "webhook"]>;
                        text: z.ZodObject<{
                            text: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            text: string;
                        }, {
                            text: string;
                        }>;
                        button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                        action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                    }, "strip", z.ZodTypeAny, {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }, {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                }, {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                }>>;
                link: z.ZodOptional<z.ZodObject<{
                    link: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    link?: string | undefined;
                }, {
                    link?: string | undefined;
                }>>;
                time_sensitive: z.ZodOptional<z.ZodBoolean>;
                notify: z.ZodOptional<z.ZodObject<{
                    close_notify: z.ZodOptional<z.ZodBoolean>;
                    custom_sound_text: z.ZodOptional<z.ZodString>;
                    with_custom_sound: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                }, {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            }, {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            }>>;
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            user_ids?: string[] | undefined;
            app_feed_card?: {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            } | undefined;
        }, {
            user_ids?: string[] | undefined;
            app_feed_card?: {
                link?: {
                    link?: string | undefined;
                } | undefined;
                title?: string | undefined;
                avatar_key?: string | undefined;
                biz_id?: string | undefined;
                preview?: string | undefined;
                status_label?: {
                    type: "secondary" | "primary" | "success" | "danger";
                    text: string;
                } | undefined;
                buttons?: {
                    buttons: {
                        text: {
                            text: string;
                        };
                        action_type: "url_page" | "webhook";
                        multi_url?: {
                            url?: string | undefined;
                            pc_url?: string | undefined;
                            ios_url?: string | undefined;
                            android_url?: string | undefined;
                        } | undefined;
                        button_type?: "default" | "primary" | "success" | undefined;
                        action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                    }[];
                } | undefined;
                time_sensitive?: boolean | undefined;
                notify?: {
                    close_notify?: boolean | undefined;
                    custom_sound_text?: string | undefined;
                    with_custom_sound?: boolean | undefined;
                } | undefined;
            } | undefined;
        }>>;
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
            tag_biz_type: z.ZodLiteral<"chat">;
            biz_entity_id: z.ZodString;
            tag_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
        }, {
            tag_biz_type: "chat";
            biz_entity_id: string;
            tag_ids?: string[] | undefined;
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
            tag_biz_type: z.ZodLiteral<"chat">;
            biz_entity_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tag_biz_type: "chat";
            biz_entity_id: string;
        }, {
            tag_biz_type: "chat";
            biz_entity_id: string;
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
            user_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            chat_id: z.ZodString;
            buttons: z.ZodOptional<z.ZodObject<{
                buttons: z.ZodArray<z.ZodObject<{
                    multi_url: z.ZodOptional<z.ZodObject<{
                        url: z.ZodOptional<z.ZodString>;
                        android_url: z.ZodOptional<z.ZodString>;
                        ios_url: z.ZodOptional<z.ZodString>;
                        pc_url: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    }, {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    }>>;
                    action_type: z.ZodEnum<["url_page", "webhook"]>;
                    text: z.ZodObject<{
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                    }, {
                        text: string;
                    }>;
                    button_type: z.ZodOptional<z.ZodEnum<["default", "primary", "success"]>>;
                    action_map: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
                }, "strip", z.ZodTypeAny, {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }, {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            }, {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            chat_id: string;
            user_ids?: string[] | undefined;
            buttons?: {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
            } | undefined;
        }, {
            chat_id: string;
            user_ids?: string[] | undefined;
            buttons?: {
                buttons: {
                    text: {
                        text: string;
                    };
                    action_type: "url_page" | "webhook";
                    multi_url?: {
                        url?: string | undefined;
                        pc_url?: string | undefined;
                        ios_url?: string | undefined;
                        android_url?: string | undefined;
                    } | undefined;
                    button_type?: "default" | "primary" | "success" | undefined;
                    action_map?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
                }[];
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
        data: z.ZodObject<{
            time_sensitive: z.ZodBoolean;
            user_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            time_sensitive: boolean;
        }, {
            user_ids: string[];
            time_sensitive: boolean;
        }>;
        params: z.ZodObject<{
            user_id_type: z.ZodEnum<["open_id", "union_id", "user_id"]>;
        }, "strip", z.ZodTypeAny, {
            user_id_type: "user_id" | "union_id" | "open_id";
        }, {
            user_id_type: "user_id" | "union_id" | "open_id";
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
            create_tag: z.ZodObject<{
                tag_type: z.ZodLiteral<"tenant">;
                name: z.ZodString;
                i18n_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    locale: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    locale: string;
                    name?: string | undefined;
                }, {
                    locale: string;
                    name?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            create_tag: {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            };
        }, {
            create_tag: {
                name: string;
                tag_type: "tenant";
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            };
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
            patch_tag: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                i18n_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    locale: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    locale: string;
                    name?: string | undefined;
                }, {
                    locale: string;
                    name?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            patch_tag?: {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            patch_tag?: {
                id?: string | undefined;
                name?: string | undefined;
                i18n_names?: {
                    locale: string;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        path: z.ZodObject<{
            tag_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tag_id: string;
        }, {
            tag_id: string;
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
            preview_tokens: z.ZodArray<z.ZodString, "many">;
            open_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            preview_tokens: string[];
            open_ids?: string[] | undefined;
        }, {
            preview_tokens: string[];
            open_ids?: string[] | undefined;
        }>;
    };
})[];
