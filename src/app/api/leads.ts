// Leads API Client
import { fetchWithAuth } from "./auth";

export interface LeadInfo {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  notes?: string;
  conversation_id: string;
  chatbot_id?: string;
  chatbot_name?: string;
  channel?: string;
  captured_at: string;
  captured_to: string[];
  source: string;
}

export interface LeadsResponse {
  leads: LeadInfo[];
  total: number;
  page: number;
  page_size: number;
}

export interface LeadsStats {
  total_leads: number;
  leads_by_channel: Record<string, number>;
  leads_by_month: Record<string, number>;
}

export const leadsApi = {
  /**
   * Get captured leads with pagination
   */
  getLeads: async (
    page: number = 1,
    pageSize: number = 20
  ): Promise<LeadsResponse> => {
    try {
      const response = await fetchWithAuth(
        `/api/leads/list?page=${page}&page_size=${pageSize}`,
        {
          method: "GET",
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching leads:", error);
      throw error;
    }
  },

  /**
   * Get lead capture statistics
   */
  getLeadsStats: async (): Promise<LeadsStats> => {
    try {
      const response = await fetchWithAuth("/api/leads/stats", {
        method: "GET",
      });
      return response;
    } catch (error) {
      console.error("Error fetching leads stats:", error);
      throw error;
    }
  },
};

