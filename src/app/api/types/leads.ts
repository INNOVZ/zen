/**
 * Lead Management Types
 */

export type LeadSource = "chatbot" | "form" | "api" | "manual" | "import";

export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";

export interface LeadInfo {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  source: LeadSource;
  status?: LeadStatus;
  captured_at: string;
  chatbot_name?: string;
  chatbot_id?: string;
  channel?: string;
  captured_to?: string[];
  metadata?: Record<string, unknown>;
}

export interface LeadsResponse {
  leads: LeadInfo[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface LeadsStats {
  total_leads: number;
  new_leads: number;
  contacted_leads: number;
  qualified_leads: number;
  converted_leads: number;
  leads_by_source: Record<LeadSource, number>;
  leads_by_month: Record<string, number>;
  leads_by_channel: Record<string, number>;
  this_month_leads?: number;
}

export interface CreateLeadRequest {
  name?: string;
  email?: string;
  phone?: string;
  source: LeadSource;
  metadata?: Record<string, unknown>;
}

export interface UpdateLeadRequest {
  name?: string;
  email?: string;
  phone?: string;
  status?: LeadStatus;
  metadata?: Record<string, unknown>;
}

