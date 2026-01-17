// Leads API Client
import { fetchWithAuth } from "./auth";
import type {
  LeadInfo,
  LeadsResponse,
  LeadsStats,
} from "./types";

// Re-export types for backward compatibility
export type {
  LeadInfo,
  LeadsResponse,
  LeadsStats,
};

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

  /**
   * Delete a lead by conversation id
   */
  deleteLead: async (conversationId: string): Promise<{ deleted: boolean }> => {
    try {
      const response = await fetchWithAuth(`/api/leads/${conversationId}`, {
        method: "DELETE",
      });
      return response;
    } catch (error) {
      console.error("Error deleting lead:", error);
      throw error;
    }
  },
};
