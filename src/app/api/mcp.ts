// MCP Integration API Client
import { fetchWithAuth } from "./auth";
import { getApiBaseUrl } from "@/config/api";

export interface MCPTool {
  name: string;
  description: string;
  provider?: string;
  rate_limit: number;
  parameters?: Record<string, any>;
}

export interface MCPToolsResponse {
  tools: MCPTool[];
  count: number;
}

export interface IntegrationStatus {
  provider: string;
  enabled: boolean;
  configured: boolean;
  last_sync?: string;
}

export interface GoogleSheetsConfig {
  spreadsheet_id?: string;
  sheet_name?: string;
  leads_spreadsheet_id?: string;
  leads_sheet_name?: string;
}

export interface CRMConfig {
  enabled: boolean;
  crm_type?: "hubspot" | "salesforce" | "pipedrive" | "zoho";
  api_key?: string;
  config?: Record<string, any>;
}

export interface LeadCaptureConfig {
  enabled: boolean;
  google_sheets?: GoogleSheetsConfig;
  crm?: CRMConfig;
  min_confidence?: number;
  require_contact?: boolean;
}

export interface GoogleOAuthResponse {
  auth_url: string;
  state: string;
}

export interface ZohoOAuthResponse {
  auth_url: string;
  state: string;
}

export const mcpApi = {
  /**
   * List all available MCP tools for the organization
   */
  listTools: async (): Promise<MCPToolsResponse> => {
    return fetchWithAuth("/api/mcp/tools", {
      method: "GET",
    });
  },

  /**
   * Execute an MCP tool
   */
  executeTool: async (
    toolName: string,
    parameters: Record<string, any> = {}
  ): Promise<any> => {
    return fetchWithAuth("/api/mcp/tools/execute", {
      method: "POST",
      body: JSON.stringify({
        tool_name: toolName,
        parameters,
      }),
    });
  },

  /**
   * Get all integration statuses at once
   */
  getAllIntegrationStatuses: async (): Promise<{
    statuses: IntegrationStatus[];
  }> => {
    try {
      const response = await fetchWithAuth("/api/integrations/status", {
        method: "GET",
      });
      return response;
    } catch (error) {
      console.warn("Failed to get all integration statuses:", error);
      // Return default statuses for all providers
      const providers = ["google", "hubspot", "salesforce", "pipedrive", "zoho", "shopify"];
      return {
        statuses: providers.map((provider) => ({
          provider,
          enabled: false,
          configured: false,
        })),
      };
    }
  },

  /**
   * Get integration status for a single provider
   */
  getIntegrationStatus: async (
    provider: string
  ): Promise<IntegrationStatus> => {
    try {
      const response = await fetchWithAuth(
        `/api/integrations/${provider}/status`,
        {
          method: "GET",
        }
      );
      return response;
    } catch (error) {
      // If endpoint doesn't exist, return default
      return {
        provider,
        enabled: false,
        configured: false,
      };
    }
  },

  /**
   * Enable/disable an integration
   */
  toggleIntegration: async (
    provider: string,
    enabled: boolean
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        `/api/integrations/${provider}/toggle`,
        {
          method: "POST",
          body: JSON.stringify({ enabled }),
        }
      );
      return response.success || false;
    } catch (error) {
      console.error(`Failed to toggle integration ${provider}:`, error);
      return false;
    }
  },

  /**
   * Get Google OAuth URL
   */
  getGoogleOAuthUrl: async (scopes: string[]): Promise<GoogleOAuthResponse> => {
    try {
      const response = await fetchWithAuth("/api/integrations/google/oauth/authorize", {
        method: "POST",
        body: JSON.stringify({ scopes }),
      });
      return response;
    } catch (error: any) {
      console.error("Google OAuth authorize error:", {
        error,
        message: error?.message,
        response: error?.response,
        status: error?.response?.status,
        data: error?.response?.data,
      });
      
      // Extract detailed error from response
      let errorMessage = "Failed to get Google OAuth URL";
      
      if (error?.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error?.detail) {
        errorMessage = error.detail;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      // Create a more detailed error object
      const detailedError: any = new Error(errorMessage);
      detailedError.response = error?.response;
      detailedError.status = error?.response?.status;
      detailedError.originalError = error;
      
      throw detailedError;
    }
  },

  /**
   * Store Google OAuth credentials (after callback)
   */
  storeGoogleCredentials: async (
    code: string,
    state: string
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/google/oauth/callback",
        {
          method: "POST",
          body: JSON.stringify({ code, state }),
        }
      );
      return response.success || false;
    } catch (error) {
      console.error("Failed to store Google credentials:", error);
      return false;
    }
  },

  /**
   * Configure tenant-specific Google OAuth app
   */
  configureGoogleOAuthApp: async (config: {
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
  }): Promise<{ success: boolean; message: string }> => {
    return fetchWithAuth("/api/integrations/google/oauth/app/configure", {
      method: "POST",
      body: JSON.stringify(config),
    });
  },

  /**
   * Get tenant-specific Google OAuth app configuration
   */
  getGoogleOAuthAppConfig: async (): Promise<{
    configured: boolean;
    client_id?: string;
    redirect_uri?: string;
  }> => {
    return fetchWithAuth("/api/integrations/google/oauth/app/config");
  },

  /**
   * Get Zoho OAuth URL
   */
  getZohoOAuthUrl: async (region: string = "com"): Promise<ZohoOAuthResponse> => {
    try {
      const response = await fetchWithAuth("/api/integrations/zoho/oauth/authorize", {
        method: "POST",
        body: JSON.stringify({ region }),
      });
      return response;
    } catch (error: any) {
      console.error("Zoho OAuth authorize error:", error);
      let errorMessage = "Failed to get Zoho OAuth URL";
      
      if (error?.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error?.detail) {
        errorMessage = error.detail;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      const detailedError: any = new Error(errorMessage);
      detailedError.response = error?.response;
      detailedError.status = error?.response?.status;
      detailedError.originalError = error;
      
      throw detailedError;
    }
  },

  /**
   * Configure tenant-specific Zoho OAuth app
   */
  configureZohoOAuthApp: async (config: {
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
  }): Promise<{ success: boolean; message: string }> => {
    return fetchWithAuth("/api/integrations/zoho/oauth/app/configure", {
      method: "POST",
      body: JSON.stringify(config),
    });
  },

  /**
   * Get tenant-specific Zoho OAuth app configuration
   */
  getZohoOAuthAppConfig: async (): Promise<{
    configured: boolean;
    client_id?: string;
    redirect_uri?: string;
  }> => {
    return fetchWithAuth("/api/integrations/zoho/oauth/app/config");
  },

  /**
   * Configure Google Sheets for lead capture
   */
  configureGoogleSheets: async (
    config: GoogleSheetsConfig
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/google/sheets/configure",
        {
          method: "POST",
          body: JSON.stringify(config),
        }
      );
      return response.success || false;
    } catch (error) {
      console.error("Failed to configure Google Sheets:", error);
      return false;
    }
  },

  /**
   * Configure CRM integration
   */
  configureCRM: async (config: CRMConfig): Promise<boolean> => {
    try {
      const response = await fetchWithAuth("/api/integrations/crm/configure", {
        method: "POST",
        body: JSON.stringify(config),
      });
      return response.success || false;
    } catch (error) {
      console.error("Failed to configure CRM:", error);
      return false;
    }
  },

  /**
   * Get lead capture configuration
   */
  getLeadCaptureConfig: async (): Promise<LeadCaptureConfig> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/lead-capture/config",
        {
          method: "GET",
        }
      );
      return response;
    } catch (error) {
      // Return default config if not found
      return {
        enabled: false,
        require_contact: true,
        min_confidence: 0.4,
      };
    }
  },

  /**
   * Update lead capture configuration
   */
  updateLeadCaptureConfig: async (
    config: LeadCaptureConfig
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/lead-capture/config",
        {
          method: "POST",
          body: JSON.stringify(config),
        }
      );
      return response.success || false;
    } catch (error) {
      console.error("Failed to update lead capture config:", error);
      return false;
    }
  },

  /**
   * Get CRM configuration with masked credentials
   */
  getCRMConfig: async (): Promise<{
    success: boolean;
    configured: boolean;
    crm_type?: string;
    credentials?: Record<string, any>;
  }> => {
    try {
      const response = await fetchWithAuth("/api/integrations/crm/config", {
        method: "GET",
      });
      return response;
    } catch (error) {
      console.error("Failed to get CRM config:", error);
      return {
        success: false,
        configured: false,
      };
    }
  },

  /**
   * Test CRM connection
   */
  testCRMConnection: async (crmType: string): Promise<boolean> => {
    try {
      const response = await fetchWithAuth("/api/integrations/crm/test", {
        method: "POST",
        body: JSON.stringify({ crm_type: crmType }),
      });
      return response.success || false;
    } catch (error) {
      console.error("Failed to test CRM connection:", error);
      return false;
    }
  },

  /**
   * Get CTA buttons for active integrations
   */
  getCTAButtons: async (): Promise<{
    buttons: Array<{
      id: string;
      label: string;
      message: string;
    }>;
    count: number;
  }> => {
    try {
      const response = await fetchWithAuth("/api/integrations/cta-buttons", {
        method: "GET",
      });
      return response;
    } catch (error) {
      console.warn("Failed to get CTA buttons:", error);
      return { buttons: [], count: 0 };
    }
  },
};

