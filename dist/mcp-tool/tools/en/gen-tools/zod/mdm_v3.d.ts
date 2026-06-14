import { z } from 'zod';
export type mdmV3ToolName = 'mdm.v3.batchCountryRegion.get' | 'mdm.v3.countryRegion.list';
export declare const mdmV3BatchCountryRegionGet: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            fields: z.ZodArray<z.ZodString, "many">;
            ids: z.ZodArray<z.ZodString, "many">;
            languages: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ids: string[];
            fields: string[];
            languages: string[];
        }, {
            ids: string[];
            fields: string[];
            languages: string[];
        }>;
    };
};
export declare const mdmV3CountryRegionList: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodOptional<z.ZodObject<{
            filter: z.ZodOptional<z.ZodObject<{
                logic: z.ZodString;
                expressions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodObject<{
                        string_value: z.ZodOptional<z.ZodString>;
                        bool_value: z.ZodOptional<z.ZodBoolean>;
                        int_value: z.ZodOptional<z.ZodString>;
                        string_list_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        int_list_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    }, {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }, {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            }, {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            }>>;
            common: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        }, "strip", z.ZodTypeAny, {
            filter?: {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            } | undefined;
            common?: {} | undefined;
        }, {
            filter?: {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            } | undefined;
            common?: {} | undefined;
        }>>;
        params: z.ZodObject<{
            languages: z.ZodArray<z.ZodString, "many">;
            fields: z.ZodArray<z.ZodString, "many">;
            limit: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
            return_count: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            fields: string[];
            languages: string[];
            offset?: number | undefined;
            page_token?: string | undefined;
            limit?: number | undefined;
            return_count?: boolean | undefined;
        }, {
            fields: string[];
            languages: string[];
            offset?: number | undefined;
            page_token?: string | undefined;
            limit?: number | undefined;
            return_count?: boolean | undefined;
        }>;
    };
};
export declare const mdmV3Tools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        params: z.ZodObject<{
            fields: z.ZodArray<z.ZodString, "many">;
            ids: z.ZodArray<z.ZodString, "many">;
            languages: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ids: string[];
            fields: string[];
            languages: string[];
        }, {
            ids: string[];
            fields: string[];
            languages: string[];
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
            filter: z.ZodOptional<z.ZodObject<{
                logic: z.ZodString;
                expressions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    field: z.ZodString;
                    operator: z.ZodString;
                    value: z.ZodObject<{
                        string_value: z.ZodOptional<z.ZodString>;
                        bool_value: z.ZodOptional<z.ZodBoolean>;
                        int_value: z.ZodOptional<z.ZodString>;
                        string_list_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        int_list_value: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    }, {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }, {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            }, {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            }>>;
            common: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        }, "strip", z.ZodTypeAny, {
            filter?: {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            } | undefined;
            common?: {} | undefined;
        }, {
            filter?: {
                logic: string;
                expressions?: {
                    value: {
                        bool_value?: boolean | undefined;
                        string_value?: string | undefined;
                        int_value?: string | undefined;
                        string_list_value?: string[] | undefined;
                        int_list_value?: string[] | undefined;
                    };
                    operator: string;
                    field: string;
                }[] | undefined;
            } | undefined;
            common?: {} | undefined;
        }>>;
        params: z.ZodObject<{
            languages: z.ZodArray<z.ZodString, "many">;
            fields: z.ZodArray<z.ZodString, "many">;
            limit: z.ZodOptional<z.ZodNumber>;
            offset: z.ZodOptional<z.ZodNumber>;
            return_count: z.ZodOptional<z.ZodBoolean>;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            fields: string[];
            languages: string[];
            offset?: number | undefined;
            page_token?: string | undefined;
            limit?: number | undefined;
            return_count?: boolean | undefined;
        }, {
            fields: string[];
            languages: string[];
            offset?: number | undefined;
            page_token?: string | undefined;
            limit?: number | undefined;
            return_count?: boolean | undefined;
        }>;
    };
})[];
