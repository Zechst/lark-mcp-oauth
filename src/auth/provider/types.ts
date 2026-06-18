export interface LarkProxyOAuthServerProviderOptions {
  domain: string;
  host: string;
  port: number;
  appId: string;
  appSecret: string;
  callbackUrl: string;
  // Configured LARK_OAUTH_SCOPE. Used as the fallback scope on a client-initiated
  // login (e.g. the MCP connector) when the client itself requests no scope, so the
  // issued user_access_token carries the full granted scopes instead of only Lark's
  // default identity scope.
  scope?: string[];
}
