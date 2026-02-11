/**
 * MCP (Model Context Protocol) and Integration Types
 * Defines types for MCP tools and various integrations
 */

/**
 * MCP Tool definition
 */
export interface MCPTool {
  name: string;
  description: string;
  parameters?: Record<string, {
    type: string;
    description?: string;
    required?: boolean;
  }>;
  category?: string;
  icon?: string;
}

/**
 * Response from MCP tools endpoint
 */
export interface MCPToolsResponse {
  success?: boolean;
  tools: MCPTool[];
  language?: string;
  error?: string;
}

/**
 * Integration status information
 */
export interface IntegrationStatus {
  provider: string;
  enabled: boolean;
  configured: boolean;
  last_updated?: string;
  error?: string;
}

/**
 * Integration provider types
 */
export type IntegrationProvider =
  | "google"
  | "hubspot"
  | "salesforce"
  | "pipedrive"
  | "zoho"
  | "shopify"
  | "stripe"
  | "custom";

/**
 * Google Integration types
 */
export interface GoogleIntegration {
  provider: "google";
  access_token?: string;
  refresh_token?: string;
  token_expiry?: string;
  scopes?: string[];
}

export interface GoogleCalendarIntegration extends GoogleIntegration {
  calendar_id?: string;
  sync_enabled?: boolean;
}

export interface GoogleSheetsIntegration extends GoogleIntegration {
  spreadsheet_id?: string;
  sheet_name?: string;
}

export interface GoogleSheetsConfig {
  spreadsheet_id: string;
  sheet_name: string;
  header_row?: number;
  columns?: Record<string, string>;
}

/**
 * OAuth Response types
 */
export interface GoogleOAuthResponse {
  success: boolean;
  auth_url?: string;
  state?: string;
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  error?: string;
}

export interface ZohoOAuthResponse {
  success: boolean;
  auth_url?: string;
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  api_domain?: string;
  error?: string;
}

/**
 * CRM Configuration
 */
export interface CRMConfig {
  enabled?: boolean;
  crm_type?: "hubspot" | "salesforce" | "pipedrive" | "zoho" | "custom";
  api_key?: string;
  oauth_token?: string;
  refresh_token?: string;
  instance_url?: string; // for Salesforce
  pipeline_id?: string;
  custom_fields?: Record<string, string>;
  sync_settings?: {
    auto_sync?: boolean;
    sync_interval_minutes?: number;
    bidirectional?: boolean;
  };
  config?: Record<string, unknown>;
}

/**
 * Lead Capture Configuration
 */
export interface LeadCaptureConfig {
  enabled: boolean;
  form_fields?: Array<{
    name: string;
    label: string;
    type: "text" | "email" | "phone" | "select" | "textarea";
    required: boolean;
  }>;
  webhook_url?: string;
  auto_create_contact?: boolean;
  crm_integration?: CRMConfig;
  // Optional UI/config fields used by the dashboard
  google_sheets?: {
    enabled?: boolean;
    config?: GoogleSheetsConfig;
  };
  crm?: {
    enabled?: boolean;
    configured?: boolean;
    crm_type?: "hubspot" | "salesforce" | "pipedrive" | "zoho" | "custom";
  };
  min_confidence?: number;
  require_contact?: boolean;
  cta_visibility?: {
    show_enquiry_cta?: boolean | null;  // null = auto (based on integrations)
    show_booking_cta?: boolean | null;  // null = auto (based on integrations)
  };
}
