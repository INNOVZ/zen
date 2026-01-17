# Types Initialization — Frontend Codebase

## Scope

This document explains where types live in the frontend, how they are exported and consumed, and recommended initialization patterns for React state and API call responses.

## Primary type locations

- Central API types barrel: [src/app/api/types/index.ts](src/app/api/types/index.ts)
- Core API types (chat, analytics, auth): [src/app/api/types/core.ts](src/app/api/types/core.ts)
- Integration-specific types (MCP, CRM, Google Sheets): [src/app/api/types/integration/mcp.ts](src/app/api/types/integration/mcp.ts)
- Back-compat MCP shim: [src/types/mcp.ts](src/types/mcp.ts)
- Project-wide types barrel: [src/types/index.ts](src/types/index.ts)

## Why these matters

- The app imports API types primarily from [src/app/api/types/index.ts](src/app/api/types/index.ts) (used by API clients such as `mcpApi` and `conversationApi`).
- UI components sometimes import types from [src/types/index.ts](src/types/index.ts) for broader domain models.
- Keep types stable and prefer adding optional fields when extending types used by the UI.

## Common initialization patterns

1. useState for complex config objects

- When a component holds a typed config object, initialize with a minimal object that satisfies required properties and provides sensible defaults for optional fields. Example (Lead Capture):

```ts
const [config, setConfig] = useState<LeadCaptureConfig>({
  enabled: false,
  // optional fields may be included to match UI expectations
  google_sheets: { enabled: false },
  crm: { enabled: false },
  min_confidence: 0.4,
  require_contact: true,
});
```

2. Returning defaults from API wrappers

- API helper functions that promise typed responses should return an object that conforms to the declared return type even on error/fallback paths. Example from `mcpApi.getLeadCaptureConfig()`:

```ts
// function signature: Promise<LeadCaptureConfig>
return {
  enabled: false,
  // include any optional fields expected by the UI:
  google_sheets: { enabled: false },
  crm: { enabled: false },
  min_confidence: 0.4,
  require_contact: true,
};
```

3. Partial updates and sanitization

- When sending Partial<T> updates to the server, sanitize out `undefined` values and validate types before encoding. The `conversationApi.updateContextConfig()` demonstrates filtering out undefined keys before sending.

4. TokenHandler usage

- Wrap API calls that may consume tokens with the `TokenHandler` interface:

```ts
if (tokenHandler) {
  return tokenHandler.wrapApiCall(
    () => conversationApi.sendMessage(message, chatbotId, conversationId),
    "chat",
    message.length
  );
}
```

## Where to add or extend types

- Add integration-specific types in [src/app/api/types/integration/\*](src/app/api/types/integration/).
- Re-export new types in [src/app/api/types/index.ts](src/app/api/types/index.ts) for convenient imports.
- If a type is shared across the UI outside API clients, re-export it from [src/types/index.ts](src/types/index.ts) for backward compatibility.

## Best practices & rules

- Prefer optional properties for UI-driven extensions. This prevents type errors when API doesn't provide fields.
- Keep API response interfaces (e.g., `ChatResponse`, `IntentDetailsResponse`) aligned with server contract. If you add optional UI fields, add them as optional in the type definitions.
- When returning defaults from an API helper catch block, always return a value matching the function's declared return type.
- Avoid widening types too early. Use `Record<string, unknown>` or `unknown` only when the schema is truly dynamic.

## Examples: common types and initialization

- `ChatResponse` (defined in [src/app/api/types/core.ts](src/app/api/types/core.ts#L16))

```ts
interface ChatResponse {
  response: string;
  conversation_id: string;
  message_id?: string;
  sources?: Source[];
  buttons?: Array<{ text: string; value: string; type?: string }>;
  metadata?: Record<string, unknown>;
}
```

- Initializing a message response in a store or state:

```ts
const initialChat: ChatResponse = {
  response: "",
  conversation_id: "",
};
const [messages, setMessages] = useState<ChatResponse[]>([initialChat]);
```

- `LeadCaptureConfig` (defined in [src/app/api/types/integration/mcp.ts](src/app/api/types/integration/mcp.ts)). When the UI expects additional optional fields, add them as optional on the type. Example fields added in the repo:

  - `google_sheets?: { enabled?: boolean; config?: GoogleSheetsConfig }`
  - `crm?: { enabled?: boolean; configured?: boolean }`
  - `min_confidence?: number`
  - `require_contact?: boolean`

This allows the UI to safely read and write these keys while keeping the server contract intact.

## How to verify changes

- Run the TypeScript build/typecheck locally:

```bash
npm run build
# or
npm run type-check
```

- Look for `tsc` type errors referencing mismatched object literals or missing properties.

## Next steps I can take

- Update any API helpers or components that returned objects missing optional fields (done for `LeadCaptureConfig` in the codebase earlier).
- Run a full type-check build and report remaining errors.

## File added

- [docs/TYPES_INITIALIZATION.md](docs/TYPES_INITIALIZATION.md)

If you want, I can now run the TypeScript build to verify there are no remaining type errors. Please confirm if you'd like me to run it.
