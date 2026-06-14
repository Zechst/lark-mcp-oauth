import { z } from 'zod';
export type driveV1ToolName = 'drive.v1.exportTask.create' | 'drive.v1.exportTask.get' | 'drive.v1.fileComment.batchQuery' | 'drive.v1.fileComment.create' | 'drive.v1.fileComment.get' | 'drive.v1.fileComment.list' | 'drive.v1.fileComment.patch' | 'drive.v1.fileCommentReply.delete' | 'drive.v1.fileCommentReply.list' | 'drive.v1.fileCommentReply.update' | 'drive.v1.file.copy' | 'drive.v1.file.createFolder' | 'drive.v1.file.createShortcut' | 'drive.v1.file.delete' | 'drive.v1.file.deleteSubscribe' | 'drive.v1.file.getSubscribe' | 'drive.v1.file.list' | 'drive.v1.file.move' | 'drive.v1.fileStatistics.get' | 'drive.v1.file.subscribe' | 'drive.v1.fileSubscription.create' | 'drive.v1.fileSubscription.get' | 'drive.v1.fileSubscription.patch' | 'drive.v1.file.taskCheck' | 'drive.v1.file.uploadFinish' | 'drive.v1.file.uploadPrepare' | 'drive.v1.fileVersion.create' | 'drive.v1.fileVersion.delete' | 'drive.v1.fileVersion.get' | 'drive.v1.fileVersion.list' | 'drive.v1.fileViewRecord.list' | 'drive.v1.importTask.create' | 'drive.v1.importTask.get' | 'drive.v1.media.batchGetTmpDownloadUrl' | 'drive.v1.media.uploadFinish' | 'drive.v1.media.uploadPrepare' | 'drive.v1.meta.batchQuery' | 'drive.v1.permissionMember.auth' | 'drive.v1.permissionMember.batchCreate' | 'drive.v1.permissionMember.create' | 'drive.v1.permissionMember.delete' | 'drive.v1.permissionMember.list' | 'drive.v1.permissionMember.transferOwner' | 'drive.v1.permissionMember.update' | 'drive.v1.permissionPublic.get' | 'drive.v1.permissionPublicPassword.create' | 'drive.v1.permissionPublicPassword.delete' | 'drive.v1.permissionPublicPassword.update' | 'drive.v1.permissionPublic.patch';
export declare const driveV1ExportTaskCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_extension: z.ZodEnum<["docx", "pdf", "xlsx", "csv"]>;
            token: z.ZodString;
            type: z.ZodEnum<["doc", "sheet", "bitable", "docx"]>;
            sub_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "bitable";
            token: string;
            file_extension: "docx" | "pdf" | "xlsx" | "csv";
            sub_id?: string | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "bitable";
            token: string;
            file_extension: "docx" | "pdf" | "xlsx" | "csv";
            sub_id?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1ExportTaskGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        path: z.ZodObject<{
            ticket: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            ticket: string;
        }, {
            ticket: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            comment_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            comment_ids: string[];
        }, {
            comment_ids: string[];
        }>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            reply_list: z.ZodOptional<z.ZodObject<{
                replies: z.ZodArray<z.ZodObject<{
                    content: z.ZodObject<{
                        elements: z.ZodArray<z.ZodObject<{
                            type: z.ZodEnum<["text_run", "docs_link", "person"]>;
                            text_run: z.ZodOptional<z.ZodObject<{
                                text: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                text: string;
                            }, {
                                text: string;
                            }>>;
                            docs_link: z.ZodOptional<z.ZodObject<{
                                url: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                url: string;
                            }, {
                                url: string;
                            }>>;
                            person: z.ZodOptional<z.ZodObject<{
                                user_id: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                user_id: string;
                            }, {
                                user_id: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }, {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    }, {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    }>;
                }, "strip", z.ZodTypeAny, {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }, {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            }, {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            reply_list?: {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            } | undefined;
        }, {
            reply_list?: {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            } | undefined;
        }>>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "sheet", "file", "docx"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            is_whole: z.ZodOptional<z.ZodBoolean>;
            is_solved: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            is_whole?: boolean | undefined;
            is_solved?: boolean | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            is_whole?: boolean | undefined;
            is_solved?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            is_solved: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            is_solved: boolean;
        }, {
            is_solved: boolean;
        }>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentReplyDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
            reply_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
            reply_id: string;
        }, {
            file_token: string;
            comment_id: string;
            reply_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentReplyList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCommentReplyUpdate: {
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
                elements: z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["text_run", "docs_link", "person"]>;
                    text_run: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                    }, {
                        text: string;
                    }>>;
                    docs_link: z.ZodOptional<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                    person: z.ZodOptional<z.ZodObject<{
                        user_id: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        user_id: string;
                    }, {
                        user_id: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }, {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                elements: {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }[];
            }, {
                elements: {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            content: {
                elements: {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }[];
            };
        }, {
            content: {
                elements: {
                    type: "text_run" | "docs_link" | "person";
                    text_run?: {
                        text: string;
                    } | undefined;
                    docs_link?: {
                        url: string;
                    } | undefined;
                    person?: {
                        user_id: string;
                    } | undefined;
                }[];
            };
        }>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
            reply_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
            reply_id: string;
        }, {
            file_token: string;
            comment_id: string;
            reply_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCopy: {
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
            type: z.ZodOptional<z.ZodEnum<["file", "doc", "sheet", "bitable", "docx", "mindnote", "slides"]>>;
            folder_token: z.ZodString;
            extra: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                key: string;
            }, {
                value: string;
                key: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            folder_token: string;
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | undefined;
            extra?: {
                value: string;
                key: string;
            }[] | undefined;
        }, {
            name: string;
            folder_token: string;
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | undefined;
            extra?: {
                value: string;
                key: string;
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
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCreateFolder: {
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
            folder_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            folder_token: string;
        }, {
            name: string;
            folder_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileCreateShortcut: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            parent_token: z.ZodString;
            refer_entity: z.ZodObject<{
                refer_token: z.ZodString;
                refer_type: z.ZodEnum<["file", "docx", "bitable", "doc", "sheet", "mindnote", "slides"]>;
            }, "strip", z.ZodTypeAny, {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            }, {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            }>;
        }, "strip", z.ZodTypeAny, {
            parent_token: string;
            refer_entity: {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            };
        }, {
            parent_token: string;
            refer_entity: {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            };
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
export declare const driveV1FileDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["file", "docx", "bitable", "folder", "doc", "sheet", "mindnote", "shortcut", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | "shortcut";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | "shortcut";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileDeleteSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "file", "folder", "slides"]>;
            event_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileGetSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "file", "folder", "slides"]>;
            event_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileList: {
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
            folder_token: z.ZodOptional<z.ZodString>;
            order_by: z.ZodOptional<z.ZodEnum<["EditedTime", "CreatedTime"]>>;
            direction: z.ZodOptional<z.ZodEnum<["ASC", "DESC"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            direction?: "ASC" | "DESC" | undefined;
            order_by?: "CreatedTime" | "EditedTime" | undefined;
            folder_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            direction?: "ASC" | "DESC" | undefined;
            order_by?: "CreatedTime" | "EditedTime" | undefined;
            folder_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileMove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodEnum<["file", "docx", "bitable", "doc", "sheet", "mindnote", "folder", "slides"]>>;
            folder_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | undefined;
            folder_token?: string | undefined;
        }, {
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | undefined;
            folder_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileStatisticsGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "sheet", "mindnote", "bitable", "wiki", "file", "docx"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
        }, {
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileSubscribe: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "file", "folder", "slides"]>;
            event_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileSubscriptionCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            subscription_id: z.ZodOptional<z.ZodString>;
            subscription_type: z.ZodLiteral<"comment_update">;
            is_subcribe: z.ZodOptional<z.ZodBoolean>;
            file_type: z.ZodEnum<["doc", "docx", "wiki"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "wiki";
            subscription_type: "comment_update";
            subscription_id?: string | undefined;
            is_subcribe?: boolean | undefined;
        }, {
            file_type: "docx" | "doc" | "wiki";
            subscription_type: "comment_update";
            subscription_id?: string | undefined;
            is_subcribe?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileSubscriptionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "wiki"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "wiki";
        }, {
            file_type: "docx" | "doc" | "wiki";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
            subscription_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
        }, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileSubscriptionPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            is_subscribe: z.ZodBoolean;
            file_type: z.ZodEnum<["doc", "docx", "wiki"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "wiki";
            is_subscribe: boolean;
        }, {
            file_type: "docx" | "doc" | "wiki";
            is_subscribe: boolean;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
            subscription_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
        }, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileTaskCheck: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileUploadFinish: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            upload_id: z.ZodString;
            block_num: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            upload_id: string;
            block_num: number;
        }, {
            upload_id: string;
            block_num: number;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileUploadPrepare: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_name: z.ZodString;
            parent_type: z.ZodLiteral<"explorer">;
            parent_node: z.ZodString;
            size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_name: string;
            size: number;
            parent_type: "explorer";
            parent_node: string;
        }, {
            file_name: string;
            size: number;
            parent_type: "explorer";
            parent_node: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileVersionCreate: {
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
            obj_type: z.ZodOptional<z.ZodEnum<["docx", "sheet"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            obj_type?: "docx" | "sheet" | undefined;
        }, {
            name?: string | undefined;
            obj_type?: "docx" | "sheet" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileVersionDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            obj_type: z.ZodEnum<["docx", "sheet"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            version_id: string;
        }, {
            file_token: string;
            version_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileVersionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            obj_type: z.ZodEnum<["docx", "sheet"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            version_id: string;
        }, {
            file_token: string;
            version_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileVersionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            obj_type: z.ZodEnum<["docx", "sheet"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            obj_type: "docx" | "sheet";
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size: number;
            obj_type: "docx" | "sheet";
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1FileViewRecordList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "mindnote", "wiki", "file"]>;
            viewer_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
            page_token?: string | undefined;
            viewer_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size: number;
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
            page_token?: string | undefined;
            viewer_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1ImportTaskCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_extension: z.ZodString;
            file_token: z.ZodString;
            type: z.ZodString;
            file_name: z.ZodOptional<z.ZodString>;
            point: z.ZodObject<{
                mount_type: z.ZodNumber;
                mount_key: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                mount_type: number;
                mount_key: string;
            }, {
                mount_type: number;
                mount_key: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            file_token: string;
            file_extension: string;
            point: {
                mount_type: number;
                mount_key: string;
            };
            file_name?: string | undefined;
        }, {
            type: string;
            file_token: string;
            file_extension: string;
            point: {
                mount_type: number;
                mount_key: string;
            };
            file_name?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1ImportTaskGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        path: z.ZodObject<{
            ticket: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            ticket: string;
        }, {
            ticket: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1MediaBatchGetTmpDownloadUrl: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            file_tokens: z.ZodArray<z.ZodString, "many">;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_tokens: string[];
            extra?: string | undefined;
        }, {
            file_tokens: string[];
            extra?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1MediaUploadFinish: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            upload_id: z.ZodString;
            block_num: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            upload_id: string;
            block_num: number;
        }, {
            upload_id: string;
            block_num: number;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1MediaUploadPrepare: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_name: z.ZodString;
            parent_type: z.ZodEnum<["doc_image", "docx_image", "sheet_image", "doc_file", "docx_file", "sheet_file", "vc_virtual_background", "bitable_image", "bitable_file", "moments", "ccm_import_open"]>;
            parent_node: z.ZodString;
            size: z.ZodNumber;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_name: string;
            size: number;
            parent_type: "ccm_import_open" | "doc_image" | "docx_image" | "sheet_image" | "doc_file" | "docx_file" | "sheet_file" | "vc_virtual_background" | "bitable_image" | "bitable_file" | "moments";
            parent_node: string;
            extra?: string | undefined;
        }, {
            file_name: string;
            size: number;
            parent_type: "ccm_import_open" | "doc_image" | "docx_image" | "sheet_image" | "doc_file" | "docx_file" | "sheet_file" | "vc_virtual_background" | "bitable_image" | "bitable_file" | "moments";
            parent_node: string;
            extra?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1MetaBatchQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            request_docs: z.ZodArray<z.ZodObject<{
                doc_token: z.ZodString;
                doc_type: z.ZodEnum<["doc", "sheet", "bitable", "mindnote", "file", "wiki", "docx", "folder", "synced_block"]>;
            }, "strip", z.ZodTypeAny, {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }, {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }>, "many">;
            with_url: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            request_docs: {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }[];
            with_url?: boolean | undefined;
        }, {
            request_docs: {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }[];
            with_url?: boolean | undefined;
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
export declare const driveV1PermissionMemberAuth: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
            action: z.ZodEnum<["view", "edit", "share", "comment", "export", "copy", "print", "manage_public"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            action: "comment" | "view" | "edit" | "share" | "export" | "copy" | "print" | "manage_public";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            action: "comment" | "view" | "edit" | "share" | "export" | "copy" | "print" | "manage_public";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberBatchCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                member_type: z.ZodEnum<["email", "openid", "unionid", "openchat", "opendepartmentid", "userid", "groupid", "wikispaceid"]>;
                member_id: z.ZodString;
                perm: z.ZodEnum<["view", "edit", "full_access"]>;
                perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
                type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
            }, "strip", z.ZodTypeAny, {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }, {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }[];
        }, {
            members: {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }[];
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodEnum<["email", "openid", "unionid", "openchat", "opendepartmentid", "userid", "groupid", "wikispaceid"]>;
            member_id: z.ZodString;
            perm: z.ZodEnum<["view", "edit", "full_access"]>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            member_id: string;
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            member_type: z.ZodEnum<["email", "openid", "openchat", "opendepartmentid", "userid", "unionid", "groupid", "wikispaceid"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            member_id: string;
        }, {
            token: string;
            member_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
            fields: z.ZodOptional<z.ZodString>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            fields?: string | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            fields?: string | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberTransferOwner: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodEnum<["email", "openid", "userid"]>;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: "email" | "openid" | "userid";
        }, {
            member_id: string;
            member_type: "email" | "openid" | "userid";
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides", "folder"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            remove_old_owner: z.ZodOptional<z.ZodBoolean>;
            stay_put: z.ZodOptional<z.ZodBoolean>;
            old_owner_perm: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
            remove_old_owner?: boolean | undefined;
            stay_put?: boolean | undefined;
            old_owner_perm?: string | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
            remove_old_owner?: boolean | undefined;
            stay_put?: boolean | undefined;
            old_owner_perm?: string | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionMemberUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodEnum<["email", "openid", "unionid", "openchat", "opendepartmentid", "userid", "groupid", "wikispaceid"]>;
            perm: z.ZodEnum<["view", "edit", "full_access"]>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
        }, "strip", z.ZodTypeAny, {
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>;
        params: z.ZodObject<{
            need_notification: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            need_notification?: boolean | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
            need_notification?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            member_id: string;
        }, {
            token: string;
            member_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionPublicGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionPublicPasswordCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionPublicPasswordDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionPublicPasswordUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1PermissionPublicPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            external_access: z.ZodOptional<z.ZodBoolean>;
            security_entity: z.ZodOptional<z.ZodEnum<["anyone_can_view", "anyone_can_edit", "only_full_access"]>>;
            comment_entity: z.ZodOptional<z.ZodEnum<["anyone_can_view", "anyone_can_edit"]>>;
            share_entity: z.ZodOptional<z.ZodEnum<["anyone", "same_tenant", "only_full_access"]>>;
            link_share_entity: z.ZodOptional<z.ZodEnum<["tenant_readable", "tenant_editable", "anyone_readable", "anyone_editable", "closed"]>>;
            invite_external: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            external_access?: boolean | undefined;
            security_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
            comment_entity?: "anyone_can_view" | "anyone_can_edit" | undefined;
            share_entity?: "only_full_access" | "anyone" | "same_tenant" | undefined;
            link_share_entity?: "tenant_editable" | "anyone_editable" | "tenant_readable" | "anyone_readable" | "closed" | undefined;
            invite_external?: boolean | undefined;
        }, {
            external_access?: boolean | undefined;
            security_entity?: "anyone_can_view" | "anyone_can_edit" | "only_full_access" | undefined;
            comment_entity?: "anyone_can_view" | "anyone_can_edit" | undefined;
            share_entity?: "only_full_access" | "anyone" | "same_tenant" | undefined;
            link_share_entity?: "tenant_editable" | "anyone_editable" | "tenant_readable" | "anyone_readable" | "closed" | undefined;
            invite_external?: boolean | undefined;
        }>>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const driveV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            file_extension: z.ZodEnum<["docx", "pdf", "xlsx", "csv"]>;
            token: z.ZodString;
            type: z.ZodEnum<["doc", "sheet", "bitable", "docx"]>;
            sub_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "bitable";
            token: string;
            file_extension: "docx" | "pdf" | "xlsx" | "csv";
            sub_id?: string | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "bitable";
            token: string;
            file_extension: "docx" | "pdf" | "xlsx" | "csv";
            sub_id?: string | undefined;
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
            comment_ids: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            comment_ids: string[];
        }, {
            comment_ids: string[];
        }>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
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
            reply_list: z.ZodOptional<z.ZodObject<{
                replies: z.ZodArray<z.ZodObject<{
                    content: z.ZodObject<{
                        elements: z.ZodArray<z.ZodObject<{
                            type: z.ZodEnum<["text_run", "docs_link", "person"]>;
                            text_run: z.ZodOptional<z.ZodObject<{
                                text: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                text: string;
                            }, {
                                text: string;
                            }>>;
                            docs_link: z.ZodOptional<z.ZodObject<{
                                url: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                url: string;
                            }, {
                                url: string;
                            }>>;
                            person: z.ZodOptional<z.ZodObject<{
                                user_id: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                user_id: string;
                            }, {
                                user_id: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }, {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    }, {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    }>;
                }, "strip", z.ZodTypeAny, {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }, {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            }, {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            reply_list?: {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            } | undefined;
        }, {
            reply_list?: {
                replies: {
                    content: {
                        elements: {
                            type: "text_run" | "docs_link" | "person";
                            text_run?: {
                                text: string;
                            } | undefined;
                            docs_link?: {
                                url: string;
                            } | undefined;
                            person?: {
                                user_id: string;
                            } | undefined;
                        }[];
                    };
                }[];
            } | undefined;
        }>>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            file_type: z.ZodEnum<["doc", "sheet", "file", "docx"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "file";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
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
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            is_whole: z.ZodOptional<z.ZodBoolean>;
            is_solved: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
            page_size: z.ZodOptional<z.ZodNumber>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            is_whole?: boolean | undefined;
            is_solved?: boolean | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            is_whole?: boolean | undefined;
            is_solved?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            is_solved: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            is_solved: boolean;
        }, {
            is_solved: boolean;
        }>;
        params: z.ZodObject<{
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
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
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
            reply_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
            reply_id: string;
        }, {
            file_token: string;
            comment_id: string;
            reply_id: string;
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
            page_size: z.ZodOptional<z.ZodNumber>;
            page_token: z.ZodOptional<z.ZodString>;
            file_type: z.ZodEnum<["doc", "docx", "sheet", "file", "slides"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "file";
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            comment_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            comment_id: string;
        }, {
            file_token: string;
            comment_id: string;
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
            name: z.ZodString;
            folder_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            folder_token: string;
        }, {
            name: string;
            folder_token: string;
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
            parent_token: z.ZodString;
            refer_entity: z.ZodObject<{
                refer_token: z.ZodString;
                refer_type: z.ZodEnum<["file", "docx", "bitable", "doc", "sheet", "mindnote", "slides"]>;
            }, "strip", z.ZodTypeAny, {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            }, {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            }>;
        }, "strip", z.ZodTypeAny, {
            parent_token: string;
            refer_entity: {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            };
        }, {
            parent_token: string;
            refer_entity: {
                refer_token: string;
                refer_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            };
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
        params: z.ZodObject<{
            type: z.ZodEnum<["file", "docx", "bitable", "folder", "doc", "sheet", "mindnote", "shortcut", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | "shortcut";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | "shortcut";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
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
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "file", "folder", "slides"]>;
            event_type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }, {
            file_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "file" | "folder";
            event_type?: string | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            folder_token: z.ZodOptional<z.ZodString>;
            order_by: z.ZodOptional<z.ZodEnum<["EditedTime", "CreatedTime"]>>;
            direction: z.ZodOptional<z.ZodEnum<["ASC", "DESC"]>>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            direction?: "ASC" | "DESC" | undefined;
            order_by?: "CreatedTime" | "EditedTime" | undefined;
            folder_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
            direction?: "ASC" | "DESC" | undefined;
            order_by?: "CreatedTime" | "EditedTime" | undefined;
            folder_token?: string | undefined;
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
            type: z.ZodOptional<z.ZodEnum<["file", "docx", "bitable", "doc", "sheet", "mindnote", "folder", "slides"]>>;
            folder_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | undefined;
            folder_token?: string | undefined;
        }, {
            type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "folder" | undefined;
            folder_token?: string | undefined;
        }>>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            file_type: z.ZodEnum<["doc", "sheet", "mindnote", "bitable", "wiki", "file", "docx"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
        }, {
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
        }, {
            file_token?: string | undefined;
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
            subscription_id: z.ZodOptional<z.ZodString>;
            subscription_type: z.ZodLiteral<"comment_update">;
            is_subcribe: z.ZodOptional<z.ZodBoolean>;
            file_type: z.ZodEnum<["doc", "docx", "wiki"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "wiki";
            subscription_type: "comment_update";
            subscription_id?: string | undefined;
            is_subcribe?: boolean | undefined;
        }, {
            file_type: "docx" | "doc" | "wiki";
            subscription_type: "comment_update";
            subscription_id?: string | undefined;
            is_subcribe?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            file_type: z.ZodEnum<["doc", "docx", "wiki"]>;
        }, "strip", z.ZodTypeAny, {
            file_type: "docx" | "doc" | "wiki";
        }, {
            file_type: "docx" | "doc" | "wiki";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            file_token: z.ZodOptional<z.ZodString>;
            subscription_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
        }, {
            file_token?: string | undefined;
            subscription_id?: string | undefined;
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
            task_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            task_id: string;
        }, {
            task_id: string;
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
            upload_id: z.ZodString;
            block_num: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            upload_id: string;
            block_num: number;
        }, {
            upload_id: string;
            block_num: number;
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
            file_name: z.ZodString;
            parent_type: z.ZodLiteral<"explorer">;
            parent_node: z.ZodString;
            size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_name: string;
            size: number;
            parent_type: "explorer";
            parent_node: string;
        }, {
            file_name: string;
            size: number;
            parent_type: "explorer";
            parent_node: string;
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
        data: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            obj_type: z.ZodOptional<z.ZodEnum<["docx", "sheet"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            obj_type?: "docx" | "sheet" | undefined;
        }, {
            name?: string | undefined;
            obj_type?: "docx" | "sheet" | undefined;
        }>>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            obj_type: z.ZodEnum<["docx", "sheet"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            obj_type: "docx" | "sheet";
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
            version_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
            version_id: string;
        }, {
            file_token: string;
            version_id: string;
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
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            obj_type: z.ZodEnum<["docx", "sheet"]>;
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            obj_type: "docx" | "sheet";
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size: number;
            obj_type: "docx" | "sheet";
            page_token?: string | undefined;
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
            file_type: z.ZodEnum<["doc", "docx", "sheet", "bitable", "mindnote", "wiki", "file"]>;
            viewer_id_type: z.ZodOptional<z.ZodEnum<["user_id", "union_id", "open_id"]>>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
            page_token?: string | undefined;
            viewer_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            page_size: number;
            file_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki";
            page_token?: string | undefined;
            viewer_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>;
        path: z.ZodObject<{
            file_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            file_token: string;
        }, {
            file_token: string;
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
            file_extension: z.ZodString;
            file_token: z.ZodString;
            type: z.ZodString;
            file_name: z.ZodOptional<z.ZodString>;
            point: z.ZodObject<{
                mount_type: z.ZodNumber;
                mount_key: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                mount_type: number;
                mount_key: string;
            }, {
                mount_type: number;
                mount_key: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            file_token: string;
            file_extension: string;
            point: {
                mount_type: number;
                mount_key: string;
            };
            file_name?: string | undefined;
        }, {
            type: string;
            file_token: string;
            file_extension: string;
            point: {
                mount_type: number;
                mount_key: string;
            };
            file_name?: string | undefined;
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
            ticket: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            ticket: string;
        }, {
            ticket: string;
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
            file_tokens: z.ZodArray<z.ZodString, "many">;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_tokens: string[];
            extra?: string | undefined;
        }, {
            file_tokens: string[];
            extra?: string | undefined;
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
            file_name: z.ZodString;
            parent_type: z.ZodEnum<["doc_image", "docx_image", "sheet_image", "doc_file", "docx_file", "sheet_file", "vc_virtual_background", "bitable_image", "bitable_file", "moments", "ccm_import_open"]>;
            parent_node: z.ZodString;
            size: z.ZodNumber;
            extra: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            file_name: string;
            size: number;
            parent_type: "ccm_import_open" | "doc_image" | "docx_image" | "sheet_image" | "doc_file" | "docx_file" | "sheet_file" | "vc_virtual_background" | "bitable_image" | "bitable_file" | "moments";
            parent_node: string;
            extra?: string | undefined;
        }, {
            file_name: string;
            size: number;
            parent_type: "ccm_import_open" | "doc_image" | "docx_image" | "sheet_image" | "doc_file" | "docx_file" | "sheet_file" | "vc_virtual_background" | "bitable_image" | "bitable_file" | "moments";
            parent_node: string;
            extra?: string | undefined;
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
            request_docs: z.ZodArray<z.ZodObject<{
                doc_token: z.ZodString;
                doc_type: z.ZodEnum<["doc", "sheet", "bitable", "mindnote", "file", "wiki", "docx", "folder", "synced_block"]>;
            }, "strip", z.ZodTypeAny, {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }, {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }>, "many">;
            with_url: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            request_docs: {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }[];
            with_url?: boolean | undefined;
        }, {
            request_docs: {
                doc_token: string;
                doc_type: "docx" | "doc" | "sheet" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "synced_block";
            }[];
            with_url?: boolean | undefined;
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
            members: z.ZodArray<z.ZodObject<{
                member_type: z.ZodEnum<["email", "openid", "unionid", "openchat", "opendepartmentid", "userid", "groupid", "wikispaceid"]>;
                member_id: z.ZodString;
                perm: z.ZodEnum<["view", "edit", "full_access"]>;
                perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
                type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
            }, "strip", z.ZodTypeAny, {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }, {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            members: {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }[];
        }, {
            members: {
                member_id: string;
                member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
                perm: "view" | "edit" | "full_access";
                type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
                perm_type?: "container" | "single_page" | undefined;
            }[];
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
            member_type: z.ZodEnum<["email", "openid", "unionid", "openchat", "opendepartmentid", "userid", "groupid", "wikispaceid"]>;
            member_id: z.ZodString;
            perm: z.ZodEnum<["view", "edit", "full_access"]>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            member_id: string;
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
            perm: "view" | "edit" | "full_access";
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
        data: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department", "group", "wiki_space_member", "wiki_space_viewer", "wiki_space_editor"]>>;
            perm_type: z.ZodOptional<z.ZodEnum<["container", "single_page"]>>;
        }, "strip", z.ZodTypeAny, {
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }, {
            type?: "user" | "group" | "chat" | "department" | "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor" | undefined;
            perm_type?: "container" | "single_page" | undefined;
        }>>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "folder", "mindnote", "minutes", "slides"]>;
            member_type: z.ZodEnum<["email", "openid", "openchat", "opendepartmentid", "userid", "unionid", "groupid", "wikispaceid"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            member_type: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "userid" | "groupid" | "wikispaceid";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            member_id: string;
        }, {
            token: string;
            member_id: string;
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
            member_type: z.ZodEnum<["email", "openid", "userid"]>;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: "email" | "openid" | "userid";
        }, {
            member_id: string;
            member_type: "email" | "openid" | "userid";
        }>;
        params: z.ZodObject<{
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides", "folder"]>;
            need_notification: z.ZodOptional<z.ZodBoolean>;
            remove_old_owner: z.ZodOptional<z.ZodBoolean>;
            stay_put: z.ZodOptional<z.ZodBoolean>;
            old_owner_perm: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
            remove_old_owner?: boolean | undefined;
            stay_put?: boolean | undefined;
            old_owner_perm?: string | undefined;
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "folder" | "minutes";
            need_notification?: boolean | undefined;
            remove_old_owner?: boolean | undefined;
            stay_put?: boolean | undefined;
            old_owner_perm?: string | undefined;
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
            type: z.ZodEnum<["doc", "sheet", "file", "wiki", "bitable", "docx", "mindnote", "minutes", "slides"]>;
        }, "strip", z.ZodTypeAny, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }, {
            type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | "minutes";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
