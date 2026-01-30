// MCP Integration API Client
import { fetchWithAuth } from "./auth";
import type {
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
  GoogleSheetsConfig,
  CRMConfig,
  LeadCaptureConfig,
  GoogleOAuthResponse,
  ZohoOAuthResponse,
} from "./types/integration";

// Re-export types for backward compatibility
export type {
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
  GoogleSheetsConfig,
  CRMConfig,
  LeadCaptureConfig,
  GoogleOAuthResponse,
  ZohoOAuthResponse,
};

// Error response types
interface ApiErrorResponse {
  detail?: string;
  message?: string;
  status?: number;
  response?: {
    data?: {
      detail?: string;
      message?: string;
    };
    status?: number;
  };
}

interface ToolExecuteResponse {
  success?: boolean;
  result?: string | number | boolean | Record<string, unknown> | unknown[];
  error?: string;
  message?: string;
  [key: string]:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | unknown[]
    | undefined;
}

export const mcpApi = {
  /**
   * List all available MCP tools for the organization with multilingual descriptions
   *
   * @param language - Language code (en, es, fr, de, pt, ar, zh, ja). Defaults to 'en'
   * @returns Promise with tools array and metadata
   */
  listTools: async (
    language: string = "en",
  ): Promise<MCPToolsResponse & { language?: string }> => {
    try {
      const params = new URLSearchParams();
      params.append("language", language);

      return fetchWithAuth(`/api/mcp/tools?${params.toString()}`, {
        method: "GET",
      });
    } catch (error) {
      console.warn("Failed to list MCP tools:", error);
      return { success: false, tools: [] };
    }
  },

  /**
   * Execute an MCP tool
   */
  executeTool: async (
    toolName: string,
    parameters: Record<string, unknown> = {},
  ): Promise<ToolExecuteResponse> => {
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
      const providers = [
        "google",
        "hubspot",
        "salesforce",
        "pipedrive",
        "zoho",
        "shopify",
      ];
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
    provider: string,
  ): Promise<IntegrationStatus> => {
    try {
      const response = await fetchWithAuth(
        `/api/integrations/${provider}/status`,
        {
          method: "GET",
        },
      );
      return response;
    } catch {
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
    enabled: boolean,
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        `/api/integrations/${provider}/toggle`,
        {
          method: "POST",
          body: JSON.stringify({ enabled }),
        },
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
      const response = await fetchWithAuth(
        "/api/integrations/google/oauth/authorize",
        {
          method: "POST",
          body: JSON.stringify({ scopes }),
        },
      );
      return response;
    } catch (error: unknown) {
      console.error("Google OAuth authorize error:", {
        error,
        message: error instanceof Error ? error.message : String(error),
        response: (error as ApiErrorResponse)?.response,
        status: (error as ApiErrorResponse)?.response?.status,
        data: (error as ApiErrorResponse)?.response?.data,
      });

      // Extract detailed error from response
      let errorMessage = "Failed to get Google OAuth URL";
      const apiError = error as ApiErrorResponse;

      if (apiError?.response?.data?.detail) {
        errorMessage = apiError.response.data.detail;
      } else if (apiError?.detail) {
        errorMessage = apiError.detail;
      } else if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }

      // Create a more detailed error object
      const detailedError = new Error(errorMessage) as Error & {
        response?: ApiErrorResponse["response"];
        status?: number;
        originalError?: unknown;
      };
      detailedError.response = apiError?.response;
      detailedError.status = apiError?.response?.status;
      detailedError.originalError = error;

      throw detailedError;
    }
  },

  /**
   * Store Google OAuth credentials (after callback)
   */
  storeGoogleCredentials: async (
    code: string,
    state: string,
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/google/oauth/callback",
        {
          method: "POST",
          body: JSON.stringify({ code, state }),
        },
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
  getZohoOAuthUrl: async (
    region: string = "com",
  ): Promise<ZohoOAuthResponse> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/zoho/oauth/authorize",
        {
          method: "POST",
          body: JSON.stringify({ region }),
        },
      );
      return response;
    } catch (error: unknown) {
      console.error("Zoho OAuth authorize error:", error);
      let errorMessage = "Failed to get Zoho OAuth URL";
      const apiError = error as ApiErrorResponse;

      if (apiError?.response?.data?.detail) {
        errorMessage = apiError.response.data.detail;
      } else if (apiError?.detail) {
        errorMessage = apiError.detail;
      } else if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }

      const detailedError = new Error(errorMessage) as Error & {
        response?: ApiErrorResponse["response"];
        status?: number;
        originalError?: unknown;
      };
      detailedError.response = apiError?.response;
      detailedError.status = apiError?.response?.status;
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
    config: GoogleSheetsConfig,
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/google/sheets/configure",
        {
          method: "POST",
          body: JSON.stringify(config),
        },
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
        },
      );
      return response;
    } catch {
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
    config: LeadCaptureConfig,
  ): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/lead-capture/config",
        {
          method: "POST",
          body: JSON.stringify(config),
        },
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
    credentials?: Record<string, unknown>;
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

  // ============================================================================
  // Shopify Integration API
  // ============================================================================

  /**
   * Configure Shopify integration
   */
  configureShopify: async (config: {
    store_url: string;
    api_key: string;
    enabled: boolean;
  }): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/shopify/configure",
        {
          method: "POST",
          body: JSON.stringify(config),
        },
      );
      return response;
    } catch (error) {
      console.error("Failed to configure Shopify:", error);
      return { success: false, message: "Failed to configure Shopify" };
    }
  },

  /**
   * Get Shopify configuration
   */
  getShopifyConfig: async (): Promise<{
    success: boolean;
    configured: boolean;
    store_url?: string;
    api_key?: string;
    enabled?: boolean;
  }> => {
    try {
      const response = await fetchWithAuth("/api/integrations/shopify/config", {
        method: "GET",
      });
      return response;
    } catch (error) {
      console.error("Failed to get Shopify config:", error);
      return { success: false, configured: false };
    }
  },

  /**
   * Initialize Shopify OAuth flow - returns authorization URL
   */
  initShopifyOAuth: async (
    shop: string,
  ): Promise<{ success: boolean; auth_url?: string; message?: string }> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/shopify/oauth/init",
        {
          method: "POST",
          body: JSON.stringify({ shop }),
        },
      );
      return response;
    } catch (error) {
      console.error("Failed to init Shopify OAuth:", error);
      return { success: false, message: "Failed to start Shopify connection" };
    }
  },

  /**
   * Disconnect Shopify integration
   */
  disconnectShopify: async (): Promise<{
    success: boolean;
    message?: string;
  }> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/shopify/disconnect",
        {
          method: "DELETE",
        },
      );
      return response;
    } catch (error) {
      console.error("Failed to disconnect Shopify:", error);
      return { success: false, message: "Failed to disconnect Shopify" };
    }
  },

  /**
   * Save Shopify app credentials (Client ID and Secret) - multi-tenant
   */
  saveShopifyAppCredentials: async (
    clientId: string,
    clientSecret: string,
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/shopify/app-credentials",
        {
          method: "POST",
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
          }),
        },
      );
      return response;
    } catch (error) {
      console.error("Failed to save Shopify app credentials:", error);
      return { success: false, message: "Failed to save credentials" };
    }
  },

  /**
   * Get Shopify app credentials status - multi-tenant
   */
  getShopifyAppCredentials: async (): Promise<{
    success: boolean;
    configured: boolean;
    client_id?: string;
    has_secret?: boolean;
  }> => {
    try {
      const response = await fetchWithAuth(
        "/api/integrations/shopify/app-credentials",
        {
          method: "GET",
        },
      );
      return response;
    } catch (error) {
      console.error("Failed to get Shopify app credentials:", error);
      return { success: false, configured: false };
    }
  },

  // ============================================================================
  // Calendar Settings API
  // ============================================================================

  /**
   * Get calendar/appointment settings for the organization
   */
  getCalendarSettings: async (): Promise<{
    appointment_durations: number[];
    default_duration: number;
    business_hours: { start_hour: number; end_hour: number };
    working_days: number[];
    buffer_minutes: number;
    max_advance_days: number;
    min_advance_hours: number;
    timezone: string | null;
  }> => {
    try {
      return await fetchWithAuth("/api/integrations/calendar/settings", {
        method: "GET",
      });
    } catch (error) {
      console.error("Failed to get calendar settings:", error);
      // Return defaults
      return {
        appointment_durations: [15, 30, 45, 60],
        default_duration: 30,
        business_hours: { start_hour: 9, end_hour: 17 },
        working_days: [1, 2, 3, 4, 5],
        buffer_minutes: 0,
        max_advance_days: 60,
        min_advance_hours: 1,
        timezone: null,
      };
    }
  },

  /**
   * Update calendar/appointment settings for the organization
   */
  updateCalendarSettings: async (settings: {
    appointment_durations?: number[];
    default_duration?: number;
    business_hours?: { start_hour: number; end_hour: number };
    working_days?: number[];
    buffer_minutes?: number;
    max_advance_days?: number;
    min_advance_hours?: number;
    timezone?: string | null;
  }): Promise<{ success: boolean; updated?: string[]; message?: string }> => {
    try {
      return await fetchWithAuth("/api/integrations/calendar/settings", {
        method: "PUT",
        body: JSON.stringify(settings),
      });
    } catch (error) {
      console.error("Failed to update calendar settings:", error);
      throw error;
    }
  },

  /**
   * Get CTA buttons for active integrations with multilingual support
   *
   * @param language - Language code (en, es, fr, de, pt, ar, zh, ja). Defaults to 'en'
   * @returns Promise with buttons array and metadata
   */
  getCTAButtons: async (
    language: string = "en",
  ): Promise<{
    buttons: Array<{
      id: string;
      label: string;
      message: string;
      integration?: string;
    }>;
    count: number;
    language: string;
    supported_languages?: Record<string, string>;
  }> => {
    try {
      const params = new URLSearchParams();
      params.append("language", language);

      const response = await fetchWithAuth(
        `/api/integrations/cta-buttons?${params.toString()}`,
        {
          method: "GET",
        },
      );
      return response;
    } catch (error) {
      console.warn("Failed to get CTA buttons:", error);
      return { buttons: [], count: 0, language };
    }
  },
};
