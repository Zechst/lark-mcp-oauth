import { acsV1ToolName } from './zod/acs_v1';
import { adminV1ToolName } from './zod/admin_v1';
import { ailyV1ToolName } from './zod/aily_v1';
import { apaasV1ToolName } from './zod/apaas_v1';
import { applicationV5ToolName } from './zod/application_v5';
import { applicationV6ToolName } from './zod/application_v6';
import { approvalV4ToolName } from './zod/approval_v4';
import { attendanceV1ToolName } from './zod/attendance_v1';
import { authV3ToolName } from './zod/auth_v3';
import { authenV1ToolName } from './zod/authen_v1';
import { baikeV1ToolName } from './zod/baike_v1';
import { baseV2ToolName } from './zod/base_v2';
import { bitableV1ToolName } from './zod/bitable_v1';
import { boardV1ToolName } from './zod/board_v1';
import { calendarV4ToolName } from './zod/calendar_v4';
import { cardkitV1ToolName } from './zod/cardkit_v1';
import { compensationV1ToolName } from './zod/compensation_v1';
import { contactV3ToolName } from './zod/contact_v3';
import { corehrV1ToolName } from './zod/corehr_v1';
import { corehrV2ToolName } from './zod/corehr_v2';
import { directoryV1ToolName } from './zod/directory_v1';
import { docsV1ToolName } from './zod/docs_v1';
import { docxV1ToolName } from './zod/docx_v1';
import { driveV1ToolName } from './zod/drive_v1';
import { driveV2ToolName } from './zod/drive_v2';
import { ehrV1ToolName } from './zod/ehr_v1';
import { eventV1ToolName } from './zod/event_v1';
import { helpdeskV1ToolName } from './zod/helpdesk_v1';
import { hireV1ToolName } from './zod/hire_v1';
import { hireV2ToolName } from './zod/hire_v2';
import { humanAuthenticationV1ToolName } from './zod/human_authentication_v1';
import { imV1ToolName } from './zod/im_v1';
import { imV2ToolName } from './zod/im_v2';
import { lingoV1ToolName } from './zod/lingo_v1';
import { mailV1ToolName } from './zod/mail_v1';
import { mdmV1ToolName } from './zod/mdm_v1';
import { mdmV3ToolName } from './zod/mdm_v3';
import { minutesV1ToolName } from './zod/minutes_v1';
import { momentsV1ToolName } from './zod/moments_v1';
import { okrV1ToolName } from './zod/okr_v1';
import { opticalCharRecognitionV1ToolName } from './zod/optical_char_recognition_v1';
import { passportV1ToolName } from './zod/passport_v1';
import { payrollV1ToolName } from './zod/payroll_v1';
import { performanceV1ToolName } from './zod/performance_v1';
import { performanceV2ToolName } from './zod/performance_v2';
import { personalSettingsV1ToolName } from './zod/personal_settings_v1';
import { reportV1ToolName } from './zod/report_v1';
import { searchV2ToolName } from './zod/search_v2';
import { securityAndComplianceV1ToolName } from './zod/security_and_compliance_v1';
import { sheetsV3ToolName } from './zod/sheets_v3';
import { speechToTextV1ToolName } from './zod/speech_to_text_v1';
import { taskV1ToolName } from './zod/task_v1';
import { taskV2ToolName } from './zod/task_v2';
import { tenantV2ToolName } from './zod/tenant_v2';
import { translationV1ToolName } from './zod/translation_v1';
import { trustPartyV1ToolName } from './zod/trust_party_v1';
import { vcV1ToolName } from './zod/vc_v1';
import { verificationV1ToolName } from './zod/verification_v1';
import { wikiV1ToolName } from './zod/wiki_v1';
import { wikiV2ToolName } from './zod/wiki_v2';
import { workplaceV1ToolName } from './zod/workplace_v1';
export type ToolName = acsV1ToolName | adminV1ToolName | ailyV1ToolName | apaasV1ToolName | applicationV5ToolName | applicationV6ToolName | approvalV4ToolName | attendanceV1ToolName | authV3ToolName | authenV1ToolName | baikeV1ToolName | baseV2ToolName | bitableV1ToolName | boardV1ToolName | calendarV4ToolName | cardkitV1ToolName | compensationV1ToolName | contactV3ToolName | corehrV1ToolName | corehrV2ToolName | directoryV1ToolName | docsV1ToolName | docxV1ToolName | driveV1ToolName | driveV2ToolName | ehrV1ToolName | eventV1ToolName | helpdeskV1ToolName | hireV1ToolName | hireV2ToolName | humanAuthenticationV1ToolName | imV1ToolName | imV2ToolName | lingoV1ToolName | mailV1ToolName | mdmV1ToolName | mdmV3ToolName | minutesV1ToolName | momentsV1ToolName | okrV1ToolName | opticalCharRecognitionV1ToolName | passportV1ToolName | payrollV1ToolName | performanceV1ToolName | performanceV2ToolName | personalSettingsV1ToolName | reportV1ToolName | searchV2ToolName | securityAndComplianceV1ToolName | sheetsV3ToolName | speechToTextV1ToolName | taskV1ToolName | taskV2ToolName | tenantV2ToolName | translationV1ToolName | trustPartyV1ToolName | vcV1ToolName | verificationV1ToolName | wikiV1ToolName | wikiV2ToolName | workplaceV1ToolName;
export type ProjectName = 'acs' | 'admin' | 'aily' | 'apaas' | 'application' | 'approval' | 'attendance' | 'auth' | 'authen' | 'baike' | 'base' | 'bitable' | 'board' | 'calendar' | 'cardkit' | 'compensation' | 'contact' | 'corehr' | 'directory' | 'docs' | 'docx' | 'drive' | 'ehr' | 'event' | 'helpdesk' | 'hire' | 'human_authentication' | 'im' | 'lingo' | 'mail' | 'mdm' | 'minutes' | 'moments' | 'okr' | 'optical_char_recognition' | 'passport' | 'payroll' | 'performance' | 'personal_settings' | 'report' | 'search' | 'security_and_compliance' | 'sheets' | 'speech_to_text' | 'task' | 'tenant' | 'translation' | 'trust_party' | 'vc' | 'verification' | 'wiki' | 'workplace';
export declare const GenTools: ({
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: string[];
    schema: {};
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_id: import("zod").ZodString;
            app_secret: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_id: string;
            app_secret: string;
        }, {
            app_id: string;
            app_secret: string;
        }>;
    };
} | {
    project: string;
    name: string;
    sdkName: string;
    path: string;
    httpMethod: string;
    description: string;
    accessTokens: undefined;
    schema: {
        data: import("zod").ZodObject<{
            app_access_token: import("zod").ZodString;
            tenant_key: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            app_access_token: string;
            tenant_key: string;
        }, {
            app_access_token: string;
            tenant_key: string;
        }>;
    };
})[];
