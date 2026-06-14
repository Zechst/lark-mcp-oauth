import { z } from 'zod';
export type wikiV2ToolName = 'wiki.v2.space.create' | 'wiki.v2.space.get' | 'wiki.v2.space.getNode' | 'wiki.v2.space.list' | 'wiki.v2.spaceMember.create' | 'wiki.v2.spaceMember.delete' | 'wiki.v2.spaceMember.list' | 'wiki.v2.spaceNode.copy' | 'wiki.v2.spaceNode.create' | 'wiki.v2.spaceNode.list' | 'wiki.v2.spaceNode.move' | 'wiki.v2.spaceNode.moveDocsToWiki' | 'wiki.v2.spaceNode.updateTitle' | 'wiki.v2.spaceSetting.update' | 'wiki.v2.task.get';
export declare const wikiV2SpaceCreate: {
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
            description: z.ZodOptional<z.ZodString>;
            open_sharing: z.ZodOptional<z.ZodEnum<["open", "closed"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            open_sharing?: "closed" | "open" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            open_sharing?: "closed" | "open" | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodOptional<z.ZodObject<{
            lang: z.ZodOptional<z.ZodEnum<["zh", "id", "de", "en", "es", "fr", "it", "pt", "vi", "ru", "hi", "th", "ko", "ja", "zh-HK", "zh-TW"]>>;
        }, "strip", z.ZodTypeAny, {
            lang?: "id" | "zh-HK" | "zh-TW" | "en" | "ja" | "zh" | "de" | "es" | "fr" | "it" | "pt" | "vi" | "ru" | "hi" | "th" | "ko" | undefined;
        }, {
            lang?: "id" | "zh-HK" | "zh-TW" | "en" | "ja" | "zh" | "de" | "es" | "fr" | "it" | "pt" | "vi" | "ru" | "hi" | "th" | "ko" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceGetNode: {
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
            obj_type: z.ZodOptional<z.ZodEnum<["doc", "docx", "sheet", "mindnote", "bitable", "file", "slides", "wiki"]>>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            obj_type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | undefined;
        }, {
            token: string;
            obj_type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceList: {
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
export declare const wikiV2SpaceMemberCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodString;
            member_id: z.ZodString;
            member_role: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: string;
            member_role: string;
        }, {
            member_id: string;
            member_type: string;
            member_role: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            need_notification?: boolean | undefined;
        }, {
            need_notification?: boolean | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceMemberDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            member_type: z.ZodString;
            member_role: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department"]>>;
        }, "strip", z.ZodTypeAny, {
            member_type: string;
            member_role: string;
            type?: "user" | "chat" | "department" | undefined;
        }, {
            member_type: string;
            member_role: string;
            type?: "user" | "chat" | "department" | undefined;
        }>;
        path: z.ZodObject<{
            space_id: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
            member_id: string;
        }, {
            space_id: string;
            member_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceMemberList: {
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
            space_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
        }, {
            space_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeCopy: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            target_parent_token: z.ZodOptional<z.ZodString>;
            target_space_id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }, {
            title?: string | undefined;
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
            node_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            obj_type: z.ZodEnum<["doc", "sheet", "mindnote", "bitable", "file", "docx", "slides"]>;
            parent_node_token: z.ZodOptional<z.ZodString>;
            node_type: z.ZodEnum<["origin", "shortcut"]>;
            origin_node_token: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            node_type: "shortcut" | "origin";
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            title?: string | undefined;
            parent_node_token?: string | undefined;
            origin_node_token?: string | undefined;
        }, {
            node_type: "shortcut" | "origin";
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            title?: string | undefined;
            parent_node_token?: string | undefined;
            origin_node_token?: string | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeList: {
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
            parent_node_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            parent_node_token?: string | undefined;
        }, {
            page_size?: number | undefined;
            page_token?: string | undefined;
            parent_node_token?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeMove: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            target_parent_token: z.ZodOptional<z.ZodString>;
            target_space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }, {
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            space_id: z.ZodString;
            node_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
            node_token: string;
        }, {
            space_id: string;
            node_token: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeMoveDocsToWiki: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            parent_wiki_token: z.ZodOptional<z.ZodString>;
            obj_type: z.ZodEnum<["doc", "sheet", "bitable", "mindnote", "docx", "file", "slides"]>;
            obj_token: z.ZodString;
            apply: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            obj_token: string;
            parent_wiki_token?: string | undefined;
            apply?: boolean | undefined;
        }, {
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            obj_token: string;
            parent_wiki_token?: string | undefined;
            apply?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            space_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
        }, {
            space_id: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceNodeUpdateTitle: {
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
        }, "strip", z.ZodTypeAny, {
            title: string;
        }, {
            title: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
            node_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2SpaceSettingUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            create_setting: z.ZodOptional<z.ZodString>;
            security_setting: z.ZodOptional<z.ZodString>;
            comment_setting: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            create_setting?: string | undefined;
            security_setting?: string | undefined;
            comment_setting?: string | undefined;
        }, {
            create_setting?: string | undefined;
            security_setting?: string | undefined;
            comment_setting?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2TaskGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            task_type: z.ZodLiteral<"move">;
        }, "strip", z.ZodTypeAny, {
            task_type: "move";
        }, {
            task_type: "move";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const wikiV2Tools: ({
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
            description: z.ZodOptional<z.ZodString>;
            open_sharing: z.ZodOptional<z.ZodEnum<["open", "closed"]>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            description?: string | undefined;
            open_sharing?: "closed" | "open" | undefined;
        }, {
            name?: string | undefined;
            description?: string | undefined;
            open_sharing?: "closed" | "open" | undefined;
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
            lang: z.ZodOptional<z.ZodEnum<["zh", "id", "de", "en", "es", "fr", "it", "pt", "vi", "ru", "hi", "th", "ko", "ja", "zh-HK", "zh-TW"]>>;
        }, "strip", z.ZodTypeAny, {
            lang?: "id" | "zh-HK" | "zh-TW" | "en" | "ja" | "zh" | "de" | "es" | "fr" | "it" | "pt" | "vi" | "ru" | "hi" | "th" | "ko" | undefined;
        }, {
            lang?: "id" | "zh-HK" | "zh-TW" | "en" | "ja" | "zh" | "de" | "es" | "fr" | "it" | "pt" | "vi" | "ru" | "hi" | "th" | "ko" | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
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
            token: z.ZodString;
            obj_type: z.ZodOptional<z.ZodEnum<["doc", "docx", "sheet", "mindnote", "bitable", "file", "slides", "wiki"]>>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            obj_type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | undefined;
        }, {
            token: string;
            obj_type?: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file" | "wiki" | undefined;
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
            member_type: z.ZodString;
            member_id: z.ZodString;
            member_role: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            member_id: string;
            member_type: string;
            member_role: string;
        }, {
            member_id: string;
            member_type: string;
            member_role: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            need_notification: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            need_notification?: boolean | undefined;
        }, {
            need_notification?: boolean | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
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
            member_type: z.ZodString;
            member_role: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["user", "chat", "department"]>>;
        }, "strip", z.ZodTypeAny, {
            member_type: string;
            member_role: string;
            type?: "user" | "chat" | "department" | undefined;
        }, {
            member_type: string;
            member_role: string;
            type?: "user" | "chat" | "department" | undefined;
        }>;
        path: z.ZodObject<{
            space_id: z.ZodString;
            member_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
            member_id: string;
        }, {
            space_id: string;
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
        data: z.ZodOptional<z.ZodObject<{
            target_parent_token: z.ZodOptional<z.ZodString>;
            target_space_id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }, {
            title?: string | undefined;
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
            node_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }, {
            space_id?: string | undefined;
            node_token?: string | undefined;
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
            obj_type: z.ZodEnum<["doc", "sheet", "mindnote", "bitable", "file", "docx", "slides"]>;
            parent_node_token: z.ZodOptional<z.ZodString>;
            node_type: z.ZodEnum<["origin", "shortcut"]>;
            origin_node_token: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            node_type: "shortcut" | "origin";
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            title?: string | undefined;
            parent_node_token?: string | undefined;
            origin_node_token?: string | undefined;
        }, {
            node_type: "shortcut" | "origin";
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            title?: string | undefined;
            parent_node_token?: string | undefined;
            origin_node_token?: string | undefined;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
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
            target_parent_token: z.ZodOptional<z.ZodString>;
            target_space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }, {
            target_parent_token?: string | undefined;
            target_space_id?: string | undefined;
        }>>;
        path: z.ZodObject<{
            space_id: z.ZodString;
            node_token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
            node_token: string;
        }, {
            space_id: string;
            node_token: string;
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
            parent_wiki_token: z.ZodOptional<z.ZodString>;
            obj_type: z.ZodEnum<["doc", "sheet", "bitable", "mindnote", "docx", "file", "slides"]>;
            obj_token: z.ZodString;
            apply: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            obj_token: string;
            parent_wiki_token?: string | undefined;
            apply?: boolean | undefined;
        }, {
            obj_type: "docx" | "doc" | "sheet" | "slides" | "bitable" | "mindnote" | "file";
            obj_token: string;
            parent_wiki_token?: string | undefined;
            apply?: boolean | undefined;
        }>;
        path: z.ZodObject<{
            space_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            space_id: string;
        }, {
            space_id: string;
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
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
        }, {
            title: string;
        }>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
            node_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
            node_token?: string | undefined;
        }, {
            space_id?: string | undefined;
            node_token?: string | undefined;
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
            create_setting: z.ZodOptional<z.ZodString>;
            security_setting: z.ZodOptional<z.ZodString>;
            comment_setting: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            create_setting?: string | undefined;
            security_setting?: string | undefined;
            comment_setting?: string | undefined;
        }, {
            create_setting?: string | undefined;
            security_setting?: string | undefined;
            comment_setting?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodObject<{
            space_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            space_id?: string | undefined;
        }, {
            space_id?: string | undefined;
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
            task_type: z.ZodLiteral<"move">;
        }, "strip", z.ZodTypeAny, {
            task_type: "move";
        }, {
            task_type: "move";
        }>;
        path: z.ZodOptional<z.ZodObject<{
            task_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            task_id?: string | undefined;
        }, {
            task_id?: string | undefined;
        }>>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
