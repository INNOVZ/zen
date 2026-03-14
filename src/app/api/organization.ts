// Organization Management API
import type { ChatbotInfo } from "@/types";
import { fetchWithAuth } from "@/app/api/auth";
import { apiCache, createCacheKey } from "@/utils/cache";
import { 
  UpdateOrganizationRequest, 
  OrganizationResponse, 
  UpdateOrganizationResponse 
} from "./types";
import { getApiBaseUrl } from "@/config/api";
import { apiUtils } from "@/app/api/utils";
import { DETACHED_MODE } from "@/config/detached-mode";

const BASE_URL = getApiBaseUrl();

const getMockOrganizationInfo = (): OrganizationResponse => ({
  user: {
    email: "user@example.com"
  },
  organization: {
    id: "demo-org-id",
    name: "Demo Organization",
    email: "org@example.com",
    plan_id: "free",
    created_at: new Date().toISOString()
  }
});

const getMockOrganizationUpdateResponse = (
  request: UpdateOrganizationRequest
): UpdateOrganizationResponse => ({
  success: true,
  message: "Organization updated successfully (detached mode)",
  organization: {
    id: "mock-org",
    name: request.name || "Organization",
    email: request.email,
    created_at: new Date().toISOString()
  }
});

function useDetachedModeFallback<T>(label: string, error: unknown, fallbackFactory: () => T): T {
  if (!DETACHED_MODE) {
    throw error;
  }

  console.warn(`${label} failed, using detached mode fallback:`, error);
  return fallbackFactory();
}

export const organizationApi = {
  getOrganizationInfo: async (): Promise<OrganizationResponse> => {
    return apiUtils.withDeduplication('/api/org/info', async () => {
      try {
        const cacheKey = createCacheKey("/api/org/info");
        
        // Check cache first
        const cached = apiCache.get<OrganizationResponse>(cacheKey);
        if (cached) {
          return cached;
        }

        console.log("🔍 Fetching organization info from:", `${BASE_URL}/api/org/info`);
        
        try {
          const data = await fetchWithAuth("/api/org/info");

          // Cache for 5 minutes
          apiCache.set(cacheKey, data, 5 * 60 * 1000);

          return data;
        } catch (error) {
          const fallback = useDetachedModeFallback(
            "Fetching organization info",
            error,
            getMockOrganizationInfo
          );
          apiCache.set(cacheKey, fallback, 1 * 60 * 1000);
          return fallback;
        }
      } catch (error) {
        console.error("Error fetching organization info:", error);
        console.error("Error details:", {
          name: error instanceof Error ? error.name : 'Unknown',
          message: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined
        });
        throw error;
      }
    });
  },

  updateOrganization: async (
    request: UpdateOrganizationRequest
  ): Promise<UpdateOrganizationResponse> => {
    try {
      console.log("🏢 Updating organization:", {
        name: request.name,
        email: request.email ? request.email.substring(0, 3) + "***" : "Not provided" // Log partial email for security
      });

      // Debug: Log the full URL being called
      console.log("🔍 Calling organization update endpoint:", `${BASE_URL}/api/org/update`);

      try {
        const response = await fetchWithAuth("/api/org/update", {
          method: "PATCH",
          body: JSON.stringify(request),
        });

        console.log("✅ Organization update response:", response);

        if (
          !response ||
          typeof response !== "object" ||
          !("success" in response) ||
          response.success !== true
        ) {
          throw new Error("Organization update returned an unexpected response.");
        }

        // Invalidate organization cache after successful update
        apiCache.deleteMatching("/api/org");
        return response as UpdateOrganizationResponse;
      } catch (orgError) {
        return useDetachedModeFallback(
          "Updating organization",
          orgError,
          () => getMockOrganizationUpdateResponse(request)
        );
      }
    } catch (error) {
      console.error("Error updating organization:", error);
      console.error("Error details:", {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      });
      throw error;
    }
  },

  getChatbots: async (): Promise<ChatbotInfo[]> => {
    try {
      const data = await fetchWithAuth("/api/org/chatbots");
      return data.chatbots || data || [];
    } catch (error) {
      console.error("Error fetching organization chatbots:", error);
      throw error;
    }
  },
};
