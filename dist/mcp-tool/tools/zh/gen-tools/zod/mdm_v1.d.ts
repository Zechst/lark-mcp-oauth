import { z } from 'zod';
export type mdmV1ToolName = 'mdm.v1.userAuthDataRelation.bind' | 'mdm.v1.userAuthDataRelation.unbind';
export declare const mdmV1UserAuthDataRelationBind: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            root_dimension_type: z.ZodString;
            sub_dimension_types: z.ZodArray<z.ZodString, "many">;
            authorized_user_ids: z.ZodArray<z.ZodString, "many">;
            uams_app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
        }, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
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
export declare const mdmV1UserAuthDataRelationUnbind: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            root_dimension_type: z.ZodString;
            sub_dimension_types: z.ZodArray<z.ZodString, "many">;
            authorized_user_ids: z.ZodArray<z.ZodString, "many">;
            uams_app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
        }, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
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
export declare const mdmV1Tools: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            root_dimension_type: z.ZodString;
            sub_dimension_types: z.ZodArray<z.ZodString, "many">;
            authorized_user_ids: z.ZodArray<z.ZodString, "many">;
            uams_app_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
        }, {
            root_dimension_type: string;
            sub_dimension_types: string[];
            authorized_user_ids: string[];
            uams_app_id: string;
        }>;
        params: z.ZodOptional<z.ZodObject<{
            user_id_type: z.ZodOptional<z.ZodEnum<["open_id", "union_id", "user_id"]>>;
        }, "strip", z.ZodTypeAny, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }, {
            user_id_type?: "user_id" | "union_id" | "open_id" | undefined;
        }>>;
    };
}[];
