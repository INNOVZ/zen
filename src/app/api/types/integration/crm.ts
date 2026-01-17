/**
 * CRM Integration Types
 * Defines types for CRM-specific integrations
 */

/**
 * CRM Type identifier
 */
export type CRMType = "hubspot" | "salesforce" | "pipedrive" | "zoho" | "custom";

/**
 * CRM Integration definition
 */
export interface CRMIntegration {
  id: string;
  crm_type: CRMType;
  name: string;
  enabled: boolean;
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
  last_sync?: string;
  created_at?: string;
  updated_at?: string;
  error?: string;
}
