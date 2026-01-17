/**
 * Integration Domain Types Barrel Export
 */

// MCP and core integration types
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
} from "./mcp";

// CRM specific types
export type {
  CRMType,
  CRMIntegration,
} from "./crm";

// Shopify types
export type {
  ShopifyIntegration,
} from "./shopify";

// Calendar types
export type {
  CalendarEvent,
  CalendarEventsResponse,
  CalendarBookingRequest,
  CalendarConfiguration,
} from "./calendar";

// WhatsApp types
export type {
  WhatsAppConfig,
  WhatsAppConfigResponse,
  WhatsAppValidationResponse,
} from "./whatsapp";
