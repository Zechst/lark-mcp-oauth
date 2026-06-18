/**
 * Tools that MUST run with the user access token, even though their generated
 * `accessTokens` also lists `tenant`. These are operations that only make sense
 * under the logged-in person's identity and that the tenant (app) token cannot
 * realistically perform.
 *
 * Example: reading a person's own mailbox. The gen-tools mark
 * `userMailboxMessage.*` as `['tenant','user']`, but reading a user mailbox via
 * the tenant token is an admin-restricted capability most tenants disable — in
 * practice you read your own inbox with your own token. Without this, auto mode
 * would default these to the tenant token and fail on a personal inbox.
 *
 * Consumed at call time in mcp-tool.ts: a tool listed here forces useUAT=true
 * regardless of token mode or the per-call `useUAT`. (Tools already declared
 * `['user']`-only are forced by resolveShouldUseUAT already and need not be
 * listed here.)
 */
export const userRequiredToolNames: Set<string> = new Set<string>([
  // Personal mailbox reads — only meaningful as the logged-in user.
  'mail.v1.userMailboxMessage.list',
  'mail.v1.userMailboxMessage.get',
  'mail.v1.userMailboxMessage.getByCard',
  'mail.v1.userMailboxMessageAttachment.downloadUrl',
]);
