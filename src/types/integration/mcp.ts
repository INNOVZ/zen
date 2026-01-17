/**
 * MCP Integration Types - Compatibility Shim
 * 
 * @deprecated Import from '@/app/api/types' or '@/app/api/types/integration' instead
 * This file exists for backward compatibility with existing imports.
 */

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
} from "@/app/api/types/integration/mcp";
