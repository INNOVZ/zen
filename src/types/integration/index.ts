/**
 * Integration Domain Types Barrel Export
 * 
 * Compatibility shim that re-exports all integration types from the centralized
 * API types location in @/app/api/types/integration
 */

// Re-export all integration types from centralized location
export type {
  // MCP and core integration types
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
  // CRM specific types
  CRMType,
  CRMIntegration,
  // Shopify types
  ShopifyIntegration,
  // Calendar types
  CalendarEvent,
  CalendarEventsResponse,
  CalendarBookingRequest,
  CalendarConfiguration,
  // Channel types
  ChannelInfo,
  SupportedChannels,
  ChannelConfiguration,
  ChannelConfigurations,
  ChannelUsage,
  // WhatsApp types
  WhatsAppConfig,
  WhatsAppConfigResponse,
  WhatsAppValidationResponse,
} from "@/app/api/types/index";
