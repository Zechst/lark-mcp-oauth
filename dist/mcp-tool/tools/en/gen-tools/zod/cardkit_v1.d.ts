import { z } from 'zod';
export type cardkitV1ToolName = 'cardkit.v1.card.batchUpdate' | 'cardkit.v1.card.create' | 'cardkit.v1.cardElement.content' | 'cardkit.v1.cardElement.create' | 'cardkit.v1.cardElement.delete' | 'cardkit.v1.cardElement.patch' | 'cardkit.v1.cardElement.update' | 'cardkit.v1.card.idConvert' | 'cardkit.v1.card.settings' | 'cardkit.v1.card.update';
export declare const cardkitV1CardBatchUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
            actions: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            actions: string;
            uuid?: string | undefined;
        }, {
            sequence: number;
            actions: string;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
        }>;
    };
};
export declare const cardkitV1CardCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            type: z.ZodString;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            data: string;
        }, {
            type: string;
            data: string;
        }>;
    };
};
export declare const cardkitV1CardElementContent: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            content: z.ZodString;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            content: string;
            sequence: number;
            uuid?: string | undefined;
        }, {
            content: string;
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
            element_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
            element_id: string;
        }, {
            card_id: string;
            element_id: string;
        }>;
    };
};
export declare const cardkitV1CardElementCreate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            type: z.ZodEnum<["insert_before", "insert_after", "append"]>;
            target_element_id: z.ZodOptional<z.ZodString>;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
            elements: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "insert_before" | "insert_after" | "append";
            sequence: number;
            elements: string;
            uuid?: string | undefined;
            target_element_id?: string | undefined;
        }, {
            type: "insert_before" | "insert_after" | "append";
            sequence: number;
            elements: string;
            uuid?: string | undefined;
            target_element_id?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
        }>;
    };
};
export declare const cardkitV1CardElementDelete: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            uuid?: string | undefined;
        }, {
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
            element_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
            element_id: string;
        }, {
            card_id: string;
            element_id: string;
        }>;
    };
};
export declare const cardkitV1CardElementPatch: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            partial_element: z.ZodString;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            partial_element: string;
            uuid?: string | undefined;
        }, {
            sequence: number;
            partial_element: string;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
            element_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
            element_id: string;
        }, {
            card_id: string;
            element_id: string;
        }>;
    };
};
export declare const cardkitV1CardElementUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            element: z.ZodString;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            element: string;
            uuid?: string | undefined;
        }, {
            sequence: number;
            element: string;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
            element_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
            element_id: string;
        }, {
            card_id: string;
            element_id: string;
        }>;
    };
};
export declare const cardkitV1CardIdConvert: {
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
    };
};
export declare const cardkitV1CardSettings: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            settings: z.ZodString;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            settings: string;
            sequence: number;
            uuid?: string | undefined;
        }, {
            settings: string;
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
        }>;
    };
};
export declare const cardkitV1CardUpdate: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            card: z.ZodObject<{
                type: z.ZodLiteral<"card_json">;
                data: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "card_json";
                data: string;
            }, {
                type: "card_json";
                data: string;
            }>;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            card: {
                type: "card_json";
                data: string;
            };
            sequence: number;
            uuid?: string | undefined;
        }, {
            card: {
                type: "card_json";
                data: string;
            };
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
        }>;
    };
};
export declare const cardkitV1Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
            actions: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            actions: string;
            uuid?: string | undefined;
        }, {
            sequence: number;
            actions: string;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
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
            type: z.ZodString;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            data: string;
        }, {
            type: string;
            data: string;
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
            type: z.ZodEnum<["insert_before", "insert_after", "append"]>;
            target_element_id: z.ZodOptional<z.ZodString>;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
            elements: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "insert_before" | "insert_after" | "append";
            sequence: number;
            elements: string;
            uuid?: string | undefined;
            target_element_id?: string | undefined;
        }, {
            type: "insert_before" | "insert_after" | "append";
            sequence: number;
            elements: string;
            uuid?: string | undefined;
            target_element_id?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
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
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sequence: number;
            uuid?: string | undefined;
        }, {
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
            element_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
            element_id: string;
        }, {
            card_id: string;
            element_id: string;
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
            settings: z.ZodString;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            settings: string;
            sequence: number;
            uuid?: string | undefined;
        }, {
            settings: string;
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
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
            card: z.ZodObject<{
                type: z.ZodLiteral<"card_json">;
                data: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "card_json";
                data: string;
            }, {
                type: "card_json";
                data: string;
            }>;
            uuid: z.ZodOptional<z.ZodString>;
            sequence: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            card: {
                type: "card_json";
                data: string;
            };
            sequence: number;
            uuid?: string | undefined;
        }, {
            card: {
                type: "card_json";
                data: string;
            };
            sequence: number;
            uuid?: string | undefined;
        }>;
        path: z.ZodObject<{
            card_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            card_id: string;
        }, {
            card_id: string;
        }>;
    };
})[];
