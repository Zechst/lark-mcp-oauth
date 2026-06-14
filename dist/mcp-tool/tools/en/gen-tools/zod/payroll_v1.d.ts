import { z } from 'zod';
export type payrollV1ToolName = 'payroll.v1.costAllocationDetail.list' | 'payroll.v1.costAllocationPlan.list' | 'payroll.v1.costAllocationReport.list' | 'payroll.v1.datasourceRecord.query' | 'payroll.v1.datasourceRecord.save' | 'payroll.v1.datasource.list';
export declare const payrollV1CostAllocationDetailList: {
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
            cost_allocation_plan_id: z.ZodString;
            pay_period: z.ZodString;
            report_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            cost_allocation_plan_id: string;
            pay_period: string;
            report_type: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            cost_allocation_plan_id: string;
            pay_period: string;
            report_type: number;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const payrollV1CostAllocationPlanList: {
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
            pay_period: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            pay_period: string;
            page_token?: string | undefined;
        }, {
            page_size: number;
            pay_period: string;
            page_token?: string | undefined;
        }>;
    };
};
export declare const payrollV1CostAllocationReportList: {
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
            cost_allocation_plan_id: z.ZodString;
            pay_period: z.ZodString;
            report_type: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            cost_allocation_plan_id: string;
            pay_period: string;
            report_type: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            cost_allocation_plan_id: string;
            pay_period: string;
            report_type: number;
            page_token?: string | undefined;
        }>;
    };
};
export declare const payrollV1DatasourceRecordQuery: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            source_code: z.ZodString;
            selected_fields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            field_filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_code: z.ZodString;
                field_values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_code: string;
                field_values?: string[] | undefined;
            }, {
                field_code: string;
                field_values?: string[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            source_code: string;
            selected_fields?: string[] | undefined;
            field_filters?: {
                field_code: string;
                field_values?: string[] | undefined;
            }[] | undefined;
        }, {
            source_code: string;
            selected_fields?: string[] | undefined;
            field_filters?: {
                field_code: string;
                field_values?: string[] | undefined;
            }[] | undefined;
        }>;
        params: z.ZodObject<{
            page_size: z.ZodNumber;
            page_token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const payrollV1DatasourceRecordSave: {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {
        data: z.ZodObject<{
            source_code: z.ZodString;
            records: z.ZodArray<z.ZodObject<{
                active_status: z.ZodNumber;
                field_values: z.ZodArray<z.ZodObject<{
                    field_code: z.ZodString;
                    value: z.ZodString;
                    field_type: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }, {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }, {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            records: {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }[];
            source_code: string;
        }, {
            records: {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }[];
            source_code: string;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const payrollV1DatasourceList: {
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
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
};
export declare const payrollV1Tools: ({
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
            pay_period: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            pay_period: string;
            page_token?: string | undefined;
        }, {
            page_size: number;
            pay_period: string;
            page_token?: string | undefined;
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
            source_code: z.ZodString;
            records: z.ZodArray<z.ZodObject<{
                active_status: z.ZodNumber;
                field_values: z.ZodArray<z.ZodObject<{
                    field_code: z.ZodString;
                    value: z.ZodString;
                    field_type: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }, {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }, {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            records: {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }[];
            source_code: string;
        }, {
            records: {
                active_status: number;
                field_values: {
                    value: string;
                    field_code: string;
                    field_type?: number | undefined;
                }[];
            }[];
            source_code: string;
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
        }, "strip", z.ZodTypeAny, {
            page_size: number;
            page_token?: string | undefined;
        }, {
            page_size: number;
            page_token?: string | undefined;
        }>;
        useUAT: z.ZodOptional<z.ZodBoolean>;
    };
})[];
