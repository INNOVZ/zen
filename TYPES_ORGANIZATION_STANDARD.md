# TypeScript Types Organization - Industry Standard

## ✅ Current Organization (Industry Standard)

All TypeScript types are now organized according to industry best practices with a single source of truth.

### Directory Structure

```
src/types/
├── index.ts                    # 🎯 MAIN ENTRY POINT - Use this!
├── common/                     # Shared base types
│   ├── index.ts
│   ├── base.ts                 # Base entities, pagination, API responses
│   ├── utility.ts              # Utility types (Nullable, Optional, etc.)
│   └── user.ts                 # User and Organization types
├── api/                        # API-related types
│   ├── index.ts
│   ├── chat.ts                 # Chat, ChatbotInfo, UploadFile
│   ├── context.ts              # Context engine types
│   ├── analytics.ts            # Analytics and metrics
│   ├── organization.ts         # Organization management
│   └── health.ts               # Health check types
├── integration/                # Third-party integration types
│   ├── index.ts
│   ├── mcp.ts                  # MCP and Google integrations
│   ├── crm.ts                  # CRM integrations (HubSpot, Salesforce, etc.)
│   ├── shopify.ts              # Shopify integration
│   ├── whatsapp.ts             # WhatsApp integration
│   ├── channels.ts             # Multi-channel support
│   └── calendar.ts             # Calendar integration
├── subscription/               # Subscription and billing types
│   ├── index.ts
│   ├── plans.ts                # Subscription plans
│   ├── tokens.ts               # Token management
│   └── analytics.ts            # Subscription analytics
├── conversation/               # Conversation domain types
│   ├── index.ts
│   └── conversation.ts         # Message, ConversationInfo
├── dashboard/                  # Dashboard and analytics types
│   ├── index.ts
│   ├── stats.ts                # Dashboard statistics
│   └── leads.ts                # Lead management
│
├── ChatbotInfo.ts             # ⚠️ Compatibility shim (deprecated)
├── schemaTypes.ts             # ⚠️ Compatibility shim (deprecated)
└── mcp.ts                     # ⚠️ Compatibility shim (deprecated)
```

## 🎯 Import Patterns

### ✅ Recommended (Industry Standard)

```typescript
// Single import from main index - PREFERRED
import type {
  ChatResponse,
  LeadInfo,
  SubscriptionStatus,
  User,
  ConversationInfo,
  CRMType,
} from "@/types";
```

### ✅ Domain-Specific Imports

```typescript
// Import from specific domains when needed
import type { IntentAnalytics } from "@/types/api";
import type { LeadInfo } from "@/types/dashboard";
import type { SubscriptionStatus } from "@/types/subscription";
import type { CRMType } from "@/types/integration";
```

### ⚠️ Legacy Paths (Still Work, But Deprecated)

```typescript
// These still work via compatibility shims, but prefer @/types
import type { ChatbotInfo } from "@/types/ChatbotInfo";
import type { User } from "@/types/schemaTypes";
import type { CRMType } from "@/types/mcp";
import type { ChatResponse } from "@/app/api/types";
```

## 📋 Type Categories

### Common Types (`/common`)

- **Base entities**: `BaseEntity`, `BaseEntityWithTimestamps`, `BaseOrganizationEntity`
- **User types**: `User`, `Organization`
- **Pagination**: `PaginationParams`, `PaginatedResponse`
- **API responses**: `ApiResponse`, `ApiError`
- **Utility types**: `Nullable`, `Optional`, `DeepPartial`, etc.

### API Types (`/api`)

- **Chat**: `ChatResponse`, `ChatbotInfo`, `MessageButton`, `UploadFile`
- **Context**: `ContextConfig`, `ContextAnalytics`
- **Analytics**: `PerformanceMetrics`, `IntentAnalytics`
- **Organization**: `OrganizationInfo`, `UpdateOrganizationRequest`
- **Health**: `HealthCheck`

### Integration Types (`/integration`)

- **MCP**: `MCPTool`, `IntegrationStatus`, `GoogleSheetsConfig`
- **CRM**: `CRMType`, `CRMConfig`, `LeadCaptureConfig`
- **Shopify**: `ShopifyIntegration`, `ShopifyProduct`
- **WhatsApp**: `WhatsAppConfig`, `WhatsAppValidationResponse`
- **Channels**: `ChannelType`, `ChannelConfiguration`
- **Calendar**: `CalendarEvent`, `CalendarBookingRequest`

### Subscription Types (`/subscription`)

- **Plans**: `SubscriptionPlan`, `SubscriptionStatus`
- **Tokens**: `TokenConsumptionRequest`, `TokenAvailabilityCheck`
- **Analytics**: `SubscriptionAnalytics`, `ChannelComparison`

### Conversation Types (`/conversation`)

- `Message`, `ConversationInfo`, `ConversationWithMessages`

### Dashboard Types (`/dashboard`)

- **Stats**: `DashboardStats`, `DashboardMetrics`
- **Leads**: `LeadInfo`, `LeadsStats`, `CreateLeadRequest`

## 🔄 Migration Guide

### For New Code

Always use the main index:

```typescript
import type { YourType } from "@/types";
```

### For Existing Code

1. **No immediate action needed** - old imports still work via compatibility shims
2. **When updating files**, migrate to `@/types`:
   - `@/types/ChatbotInfo` → `@/types`
   - `@/types/schemaTypes` → `@/types`
   - `@/types/mcp` → `@/types/integration` or `@/types`
   - `@/app/api/types` → `@/types`

### Migration Checklist

- [x] Removed duplicate `src/api/types/` directory
- [x] Created compatibility shims for legacy imports
- [x] Updated key files to use standard imports
- [x] Added User type to common types
- [x] Updated barrel exports
- [x] Verified no breaking changes

## ✨ Benefits

1. **Single Source of Truth**: All types in `src/types/`
2. **Clear Domain Separation**: Types grouped by feature/domain
3. **Barrel Exports**: Simple import statements
4. **Industry Standard**: Follows Next.js and TypeScript best practices
5. **Backward Compatible**: Old imports still work via shims
6. **Scalable**: Easy to add new type domains
7. **Maintainable**: Clear hierarchy makes finding types easier

## 📝 Adding New Types

When adding new types:

1. **Choose the right module** based on domain
2. **Create a new file** if needed (e.g., `types/api/newfeature.ts`)
3. **Export from module index** (e.g., `types/api/index.ts`)
4. **Export from main index** (`types/index.ts`)
5. **Document with JSDoc** comments

Example:

```typescript
// types/api/newfeature.ts
/**
 * New feature configuration
 */
export interface NewFeatureConfig {
  enabled: boolean;
  settings: Record<string, unknown>;
}

// types/api/index.ts
export type { NewFeatureConfig } from "./newfeature";

// types/index.ts
export type { NewFeatureConfig } from "./api";
```

## 🚫 What Was Removed

- ❌ Duplicate `src/api/types/` directory (removed - was causing confusion)
- ❌ Inconsistent import paths (standardized to `@/types`)
- ❌ Duplicate type definitions in `src/app/api/*` files (now import from `@/types`)

## 🔧 API Client Files Organization

API client files in `src/app/api/` now follow industry standards:

### ✅ Current Pattern (Industry Standard)

```typescript
// src/app/api/mcp.ts
import type {
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
  // ... other types
} from "@/types/integration";

// Re-export for backward compatibility
export type {
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
};

// API client functions use imported types
export const mcpApi = {
  listTools: async (): Promise<MCPToolsResponse> => { ... }
};
```

### ❌ Old Pattern (Removed)

```typescript
// ❌ DON'T define types in API client files
export interface MCPTool { ... }
export interface MCPToolsResponse { ... }
```

### Files Updated

- ✅ `src/app/api/mcp.ts` - Now imports from `@/types/integration`
- ✅ `src/app/api/leads.ts` - Now imports from `@/types/dashboard`
- ✅ `src/app/api/calendar.ts` - Now imports from `@/types/integration`
- ✅ `src/app/api/whatsapp.ts` - Now imports from `@/types/integration`
- ✅ `src/app/api/routes.ts` - Already imports from `@/types`

### Internal Types (OK to Keep)

Some types are implementation details and can stay in API files:

- `ApiError` in `auth.ts` - Internal error handling
- `PendingRequest` in `utils.ts` - Internal request deduplication

These don't need to be in centralized types as they're not shared across the codebase.

## ✅ What Was Added

- ✅ User type in `types/common/user.ts`
- ✅ Compatibility shims for legacy imports
- ✅ Consistent import paths throughout codebase
- ✅ Updated barrel exports

## 📊 Statistics

- **Total type definition files**: 27 TypeScript files
- **Domain modules**: 6 (common, api, integration, subscription, conversation, dashboard)
- **Barrel export files**: 7 (1 root + 6 domain)
- **Compatibility shims**: 3 (ChatbotInfo.ts, schemaTypes.ts, mcp.ts)
- **Status**: ✅ Production Ready
