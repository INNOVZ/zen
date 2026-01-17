/**
 * MCP Types - Compatibility Shim
 * 
 * @deprecated Import from '@/types/integration' instead
 * This file exists for backward compatibility with existing imports.
 * 
 * @example
 * ```typescript
 * // Old way (still works)
 * import type { CRMType, MCPTool } from '@/types/mcp';
 * 
 * // New way (preferred)
 * import type { CRMType } from '@/types/integration/crm';
 * import type { MCPTool } from '@/types/integration';
 * ```
 */

// Re-export MCP types from integration
export type {
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
  IntegrationProvider,
  GoogleIntegration,
  GoogleCalendarIntegration,
  GoogleSheetsIntegration,
  GoogleSheetsConfig,
  GoogleOAuthResponse,
  ZohoOAuthResponse,
  CRMConfig,
  LeadCaptureConfig,
} from "./integration/mcp";

// Re-export CRMType from integration/crm
export type { CRMType, CRMIntegration } from "./integration/crm";

// Re-export Shopify types
export type { ShopifyIntegration } from "./integration/shopify";



