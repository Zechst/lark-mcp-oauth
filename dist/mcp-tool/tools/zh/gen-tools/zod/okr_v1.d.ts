import { z } from 'zod';
export type okrV1ToolName = 'okr.v1.okr.batchGet' | 'okr.v1.periodRule.list' | 'okr.v1.period.create' | 'okr.v1.period.list' | 'okr.v1.period.patch' | 'okr.v1.progressRecord.create' | 'okr.v1.progressRecord.delete' | 'okr.v1.progressRecord.get' | 'okr.v1.progressRecord.update' | 'okr.v1.review.query' | 'okr.v1.userOkr.list';
export declare const okrV1OkrBatchGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            okr_ids: z.ZodArray<z.ZodString, "many">;
            lang: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            okr_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            lang?: string | undefined;
        }, {
            okr_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            lang?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const okrV1PeriodRuleList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
};
export declare const okrV1PeriodCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            period_rule_id: z.ZodString;
            start_month: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            period_rule_id: string;
            start_month: string;
        }, {
            period_rule_id: string;
            start_month: string;
        }>;
    };
};
export declare const okrV1PeriodList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
        }>>;
    };
};
export declare const okrV1PeriodPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            status: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: number;
        }, {
            status: number;
        }>;
        path: z.ZodObject<{
            period_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            period_id: string;
        }, {
            period_id: string;
        }>;
    };
};
export declare const okrV1ProgressRecordCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            source_title: z.ZodString;
            source_url: z.ZodString;
            target_id: z.ZodString;
            target_type: z.ZodNumber;
            content: z.ZodObject<{
                blocks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodOptional<z.ZodEnum<["paragraph", "gallery"]>>;
                    paragraph: z.ZodOptional<z.ZodObject<{
                        style: z.ZodOptional<z.ZodObject<{
                            list: z.ZodOptional<z.ZodObject<{
                                type: z.ZodOptional<z.ZodEnum<["number", "bullet", "checkBox", "checkedBox", "indent"]>>;
                                indentLevel: z.ZodOptional<z.ZodNumber>;
                                number: z.ZodOptional<z.ZodNumber>;
                            }, "strip", z.ZodTypeAny, {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            }, {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        }, {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        }>>;
                        elements: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            type: z.ZodOptional<z.ZodEnum<["textRun", "docsLink", "person"]>>;
                            textRun: z.ZodOptional<z.ZodObject<{
                                text: z.ZodOptional<z.ZodString>;
                                style: z.ZodOptional<z.ZodObject<{
                                    bold: z.ZodOptional<z.ZodBoolean>;
                                    strikeThrough: z.ZodOptional<z.ZodBoolean>;
                                    backColor: z.ZodOptional<z.ZodObject<{
                                        red: z.ZodOptional<z.ZodNumber>;
                                        green: z.ZodOptional<z.ZodNumber>;
                                        blue: z.ZodOptional<z.ZodNumber>;
                                        alpha: z.ZodOptional<z.ZodNumber>;
                                    }, "strip", z.ZodTypeAny, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }>>;
                                    textColor: z.ZodOptional<z.ZodObject<{
                                        red: z.ZodOptional<z.ZodNumber>;
                                        green: z.ZodOptional<z.ZodNumber>;
                                        blue: z.ZodOptional<z.ZodNumber>;
                                        alpha: z.ZodOptional<z.ZodNumber>;
                                    }, "strip", z.ZodTypeAny, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }>>;
                                    link: z.ZodOptional<z.ZodObject<{
                                        url: z.ZodOptional<z.ZodString>;
                                    }, "strip", z.ZodTypeAny, {
                                        url?: string | undefined;
                                    }, {
                                        url?: string | undefined;
                                    }>>;
                                }, "strip", z.ZodTypeAny, {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                }, {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                }>>;
                            }, "strip", z.ZodTypeAny, {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            }, {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            }>>;
                            docsLink: z.ZodOptional<z.ZodObject<{
                                url: z.ZodOptional<z.ZodString>;
                                title: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                title?: string | undefined;
                                url?: string | undefined;
                            }, {
                                title?: string | undefined;
                                url?: string | undefined;
                            }>>;
                            person: z.ZodOptional<z.ZodObject<{
                                openId: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                openId?: string | undefined;
                            }, {
                                openId?: string | undefined;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }, {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }, {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }>>;
                    gallery: z.ZodOptional<z.ZodObject<{
                        imageList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            fileToken: z.ZodOptional<z.ZodString>;
                            src: z.ZodOptional<z.ZodString>;
                            width: z.ZodOptional<z.ZodNumber>;
                            height: z.ZodOptional<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }, {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    }, {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }, {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            }, {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            }>;
            source_url_pc: z.ZodOptional<z.ZodString>;
            source_url_mobile: z.ZodOptional<z.ZodString>;
            progress_rate: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status?: number | undefined;
                percent?: number | undefined;
            }, {
                status?: number | undefined;
                percent?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            content: {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            };
            source_title: string;
            source_url: string;
            target_id: string;
            target_type: number;
            source_url_pc?: string | undefined;
            source_url_mobile?: string | undefined;
            progress_rate?: {
                status?: number | undefined;
                percent?: number | undefined;
            } | undefined;
        }, {
            content: {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            };
            source_title: string;
            source_url: string;
            target_id: string;
            target_type: number;
            source_url_pc?: string | undefined;
            source_url_mobile?: string | undefined;
            progress_rate?: {
                status?: number | undefined;
                percent?: number | undefined;
            } | undefined;
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
export declare const okrV1ProgressRecordDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            progress_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            progress_id: string;
        }, {
            progress_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const okrV1ProgressRecordGet: {
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
            progress_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            progress_id?: string | undefined;
        }, {
            progress_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const okrV1ProgressRecordUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            content: z.ZodObject<{
                blocks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodOptional<z.ZodEnum<["paragraph", "gallery"]>>;
                    paragraph: z.ZodOptional<z.ZodObject<{
                        style: z.ZodOptional<z.ZodObject<{
                            list: z.ZodOptional<z.ZodObject<{
                                type: z.ZodOptional<z.ZodEnum<["number", "bullet", "checkBox", "checkedBox", "indent"]>>;
                                indentLevel: z.ZodOptional<z.ZodNumber>;
                                number: z.ZodOptional<z.ZodNumber>;
                            }, "strip", z.ZodTypeAny, {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            }, {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        }, {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        }>>;
                        elements: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            type: z.ZodOptional<z.ZodEnum<["textRun", "docsLink", "person"]>>;
                            textRun: z.ZodOptional<z.ZodObject<{
                                text: z.ZodOptional<z.ZodString>;
                                style: z.ZodOptional<z.ZodObject<{
                                    bold: z.ZodOptional<z.ZodBoolean>;
                                    strikeThrough: z.ZodOptional<z.ZodBoolean>;
                                    backColor: z.ZodOptional<z.ZodObject<{
                                        red: z.ZodOptional<z.ZodNumber>;
                                        green: z.ZodOptional<z.ZodNumber>;
                                        blue: z.ZodOptional<z.ZodNumber>;
                                        alpha: z.ZodOptional<z.ZodNumber>;
                                    }, "strip", z.ZodTypeAny, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }>>;
                                    textColor: z.ZodOptional<z.ZodObject<{
                                        red: z.ZodOptional<z.ZodNumber>;
                                        green: z.ZodOptional<z.ZodNumber>;
                                        blue: z.ZodOptional<z.ZodNumber>;
                                        alpha: z.ZodOptional<z.ZodNumber>;
                                    }, "strip", z.ZodTypeAny, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }, {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    }>>;
                                    link: z.ZodOptional<z.ZodObject<{
                                        url: z.ZodOptional<z.ZodString>;
                                    }, "strip", z.ZodTypeAny, {
                                        url?: string | undefined;
                                    }, {
                                        url?: string | undefined;
                                    }>>;
                                }, "strip", z.ZodTypeAny, {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                }, {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                }>>;
                            }, "strip", z.ZodTypeAny, {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            }, {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            }>>;
                            docsLink: z.ZodOptional<z.ZodObject<{
                                url: z.ZodOptional<z.ZodString>;
                                title: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                title?: string | undefined;
                                url?: string | undefined;
                            }, {
                                title?: string | undefined;
                                url?: string | undefined;
                            }>>;
                            person: z.ZodOptional<z.ZodObject<{
                                openId: z.ZodOptional<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                openId?: string | undefined;
                            }, {
                                openId?: string | undefined;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }, {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }, {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }>>;
                    gallery: z.ZodOptional<z.ZodObject<{
                        imageList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            fileToken: z.ZodOptional<z.ZodString>;
                            src: z.ZodOptional<z.ZodString>;
                            width: z.ZodOptional<z.ZodNumber>;
                            height: z.ZodOptional<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }, {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    }, {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }, {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            }, {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            }>;
            progress_rate: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status?: number | undefined;
                percent?: number | undefined;
            }, {
                status?: number | undefined;
                percent?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            content: {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            };
            progress_rate?: {
                status?: number | undefined;
                percent?: number | undefined;
            } | undefined;
        }, {
            content: {
                blocks?: {
                    type?: "paragraph" | "gallery" | undefined;
                    paragraph?: {
                        elements?: {
                            type?: "person" | "textRun" | "docsLink" | undefined;
                            person?: {
                                openId?: string | undefined;
                            } | undefined;
                            textRun?: {
                                text?: string | undefined;
                                style?: {
                                    bold?: boolean | undefined;
                                    link?: {
                                        url?: string | undefined;
                                    } | undefined;
                                    strikeThrough?: boolean | undefined;
                                    backColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                    textColor?: {
                                        red?: number | undefined;
                                        green?: number | undefined;
                                        blue?: number | undefined;
                                        alpha?: number | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            docsLink?: {
                                title?: string | undefined;
                                url?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        style?: {
                            list?: {
                                number?: number | undefined;
                                type?: "number" | "bullet" | "checkBox" | "checkedBox" | "indent" | undefined;
                                indentLevel?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    gallery?: {
                        imageList?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            fileToken?: string | undefined;
                            src?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            };
            progress_rate?: {
                status?: number | undefined;
                percent?: number | undefined;
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
            progress_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            progress_id: string;
        }, {
            progress_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const okrV1ReviewQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            user_ids: z.ZodArray<z.ZodString, "many">;
            period_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            user_ids: string[];
            period_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }, {
            user_ids: string[];
            period_ids: string[];
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
        }>;
    };
};
export declare const okrV1UserOkrList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id", "people_admin_id"]>>;
            offset: z.ZodString;
            limit: z.ZodString;
            lang: z.ZodOptional<z.ZodString>;
            period_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            offset: string;
            limit: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            lang?: string | undefined;
            period_ids?: string[] | undefined;
        }, {
            offset: string;
            limit: string;
            user_id_type?: "user_id" | "union_id" | "open_id" | "people_admin_id" | undefined;
            lang?: string | undefined;
            period_ids?: string[] | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            user_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id?: string | undefined;
        }, {
            user_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const okrV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
}[];
