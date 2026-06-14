# Lark MCP — Remote Per-User OAuth Deployment

A patched fork of [`larksuite/lark-openapi-mcp`](https://github.com/larksuite/lark-openapi-mcp)
that runs as a **remote, multi-user MCP server** where **each user authenticates as their own
Lark account** (per-user `user_access_token`), usable from **claude.ai** (custom connector) and
**Claude Code** (`claude mcp add --transport http`).

## What was patched vs. upstream

Upstream's OAuth mode only works on `localhost` and can't be hosted publicly. This fork makes
exactly three changes (see `git log`):

1. **`src/auth/handler/handler.ts`** — OAuth issuer/callback/authorize URLs now honor a
   `PUBLIC_BASE_URL` env var (the public HTTPS origin) instead of being hardcoded to
   `http://localhost:port`. This is what lets claude.ai / Claude Code complete the OAuth dance.
2. **`src/auth/utils/storage-manager.ts`** — the AES key for the encrypted token store is read
   from `LARK_MCP_ENCRYPTION_KEY` instead of the OS keychain (`keytar`), which fails in a
   headless container. `keytar` removed from dependencies (no native build needed).
3. **`src/auth/config.ts`** — token storage dir can be overridden with `LARK_MCP_STORAGE_DIR`
   (point it at a mounted disk for durable tokens).

## Environment variables

| Var | Required | Description |
|---|---|---|
| `PUBLIC_BASE_URL` | yes | Public HTTPS origin of this service, e.g. `https://lark-mcp-oauth.onrender.com`. No trailing slash. |
| `LARK_MCP_ENCRYPTION_KEY` | yes (for token persistence) | 64-char hex (32 bytes). Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. Keep stable — changing it invalidates stored tokens. If unset, the server runs with an in-memory store (everyone re-auths on every restart). |
| `APP_ID` | yes | Lark app App ID (`cli_...`). |
| `APP_SECRET` | yes | Lark app App Secret. |
| `LARK_DOMAIN` | yes | `https://open.larksuite.com` (Lark international) or `https://open.feishu.cn` (Feishu China). |
| `LARK_MCP_STORAGE_DIR` | no | Override token storage dir; set to a mounted disk path (e.g. `/data`) for durable tokens. |

Server endpoint: `POST <PUBLIC_BASE_URL>/mcp`. OAuth callback: `<PUBLIC_BASE_URL>/callback`.

---

## Step 1 — Lark Open Platform console

1. Create a **Custom App** at https://open.larksuite.com/app → copy **App ID** + **App Secret**.
2. **Add App Capability** → enable **Bot** (needed for messaging tools; optional for docs/base only).
3. **Permissions & Scopes** → add these **User-token** scopes (verify exact strings in console):
   `wiki:wiki`, `docx:document`, `bitable:app`, `drive:drive`, `offline_access`.
   (`offline_access` is required for refresh tokens.)
4. **Security Settings → Redirect URL** → add `https://<your-service>.onrender.com/callback`
   (must exactly match `PUBLIC_BASE_URL` + `/callback`). You can add a localhost URL too for local dev.
5. **Version Management & Release** → create a version → **release** → get **admin approval**.
   Scopes do not take effect until released and approved.

## Step 2 — Deploy on Render

**Option A — Blueprint:** push this repo, then in Render: New → Blueprint → select the repo
(`render.yaml` is picked up). Fill in the `sync:false` env vars when prompted.

**Option B — manual web service:**
- New → Web Service → connect the GitHub repo.
- Runtime: **Node**. Build: `yarn install && yarn build`.
  Start: see `startCommand` in `render.yaml`.
- Plan: **Free** (Phase 1). Set env vars from the table above. `PUBLIC_BASE_URL` must equal the
  service's own `https://<name>.onrender.com` URL (you know the name before first deploy).
- After deploy, hit `https://<name>.onrender.com/.well-known/oauth-authorization-server` —
  the `issuer` should be your HTTPS URL. If it says `http://0.0.0.0:...`, `PUBLIC_BASE_URL` is unset.

**Keep it warm (free tier):** add an [UptimeRobot](https://uptimerobot.com) HTTP monitor pinging
`https://<name>.onrender.com/health` every 5 min to avoid the 15-min idle spin-down. The
`/health` endpoint is unauthenticated and returns `{"status":"ok"}`. (Not needed on paid plans.)

## Step 3 — Connect clients

**Claude Code:**
```bash
claude mcp add --transport http --scope user lark https://<name>.onrender.com/mcp
```
Then run `/mcp` in Claude Code → it gets a 401, discovers the OAuth metadata, opens a browser
for you to log into Lark and consent → you're connected as yourself.

**claude.ai (Pro/Max/Team/Enterprise):**
Settings → Connectors → **Add custom connector** → paste `https://<name>.onrender.com/mcp` → Add →
**Connect** → log into Lark + consent. (Team/Enterprise: an owner enables it first, then each
member clicks Connect to auth individually.) Dynamic client registration is automatic.

## Step 4 — Validate

- Read: ask it to read a Wiki page or list Base records.
- Write: ask it to create a Base record and create/import a doc.
- Multi-user: a second person connects → acts as their own Lark identity.
- Free-tier expectation: tokens persist while warm, are lost on redeploy/restart.

---

## Phase 2 — Durable tokens (paid)

Free Render has no persistent disk, so tokens are lost on restart. To make them durable:

1. Upgrade the service to **Starter ($7/mo)** (always-on, no spin-down — drop UptimeRobot).
2. Add a **persistent disk** (1 GB is plenty), mount path `/data`.
3. Set env `LARK_MCP_STORAGE_DIR=/data`. Keep `LARK_MCP_ENCRYPTION_KEY` stable.
4. Note: disk-attached services run a **single instance** (no horizontal scaling) and have
   brief downtime on each deploy. Fine for a team-sized deployment.

## Caveats

- The upstream tool is **Beta**; editing the body of an *existing* Lark Doc is not supported
  (create/import + read only). Base/Bitable has full read+write.
- This is a fork on an unofficial path — re-test the OAuth flow after pulling upstream changes
  (`git fetch upstream && git merge upstream/main`, re-apply if conflicts touch the patched files).
