import { LarkOAuth2OAuthServerProvider } from '../../src/auth/provider/oauth';

const makeProvider = (scope?: string[]) =>
  new LarkOAuth2OAuthServerProvider({
    domain: 'https://open.larksuite.com',
    host: 'localhost',
    port: 3000,
    appId: 'cli_test',
    appSecret: 'secret_test',
    callbackUrl: 'https://lark-mcp-oauth.onrender.com/callback',
    scope,
  });

const makeRes = () => {
  const captured: { url: string } = { url: '' };
  const res = {
    redirect: (u: string) => {
      captured.url = u;
    },
  } as any;
  return { res, captured };
};

const client = { client_id: 'c1', redirect_uris: ['https://client.example/cb'] } as any;

describe('LarkOAuth2OAuthServerProvider authorize() scope fallback', () => {
  it('uses the configured scope when the client (connector) requests none', async () => {
    const provider = makeProvider(['im:message:readonly', 'im:chat:readonly']);
    const { res, captured } = makeRes();
    await provider.authorize(client, { codeChallenge: 'cc', scopes: [] } as any, res);
    const scope = new URL(captured.url).searchParams.get('scope');
    expect(scope).toBe('im:message:readonly im:chat:readonly');
  });

  it('prefers the client-requested scopes when they are provided', async () => {
    const provider = makeProvider(['im:message:readonly']);
    const { res, captured } = makeRes();
    await provider.authorize(client, { codeChallenge: 'cc', scopes: ['docx:document'] } as any, res);
    expect(new URL(captured.url).searchParams.get('scope')).toBe('docx:document');
  });

  it('sets no scope when neither client nor config supplies one', async () => {
    const provider = makeProvider(undefined);
    const { res, captured } = makeRes();
    await provider.authorize(client, { codeChallenge: 'cc' } as any, res);
    expect(new URL(captured.url).searchParams.get('scope')).toBeNull();
  });
});
