// MCP Integration Types

export type CRMType = "hubspot" | "salesforce" | "pipedrive" | "zoho";

export interface IntegrationProvider {
  id: string;
  name: string;
  description: string;
  icon?: string;
  category: "calendar" | "sheets" | "crm" | "ecommerce" | "scraping";
  requires_oauth: boolean;
  requires_api_key: boolean;
  status: "enabled" | "disabled" | "pending";
}

export interface GoogleIntegration {
  calendar: {
    enabled: boolean;
    authenticated: boolean;
  };
  sheets: {
    enabled: boolean;
    authenticated: boolean;
    leads_spreadsheet_id?: string;
    leads_sheet_name?: string;
  };
}

export interface CRMIntegration {
  enabled: boolean;
  type: CRMType | null;
  configured: boolean;
  credentials_set: boolean;
}

export interface ShopifyIntegration {
  enabled: boolean;
  store_url?: string;
  api_key?: string;
  configured: boolean;
}

export interface LeadCaptureSettings {
  enabled: boolean;
  google_sheets: {
    enabled: boolean;
    spreadsheet_id?: string;
    sheet_name?: string;
  };
  crm: {
    enabled: boolean;
    crm_type?: CRMType;
  };
  min_confidence: number;
  require_contact: boolean;
}

