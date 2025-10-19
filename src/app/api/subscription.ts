// Subscription API Client
// Based on backend SUBSCRIPTION_SYSTEM_GUIDE.md

import { getAuthInfo, fetchWithAuth } from "@/app/api/auth";
import { apiCache, createCacheKey } from "@/utils/cache";
import type {
  SubscriptionPlans,
  SubscriptionStatus,
  TokenConsumptionRequest,
  TokenConsumptionResponse,
  TokenAvailabilityCheck,
  SupportedChannels,
  ChannelConfigurations,
  SubscriptionAnalytics,
  ChannelComparison,
  ChannelTrends,
  SignupRequest,
  SignupResponse,
  ChannelConfigUpdateRequest,
  ChannelConfigUpdateResponse,
} from "@/types/subscription";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://zaakiy-production.up.railway.app";

export const subscriptionApi = {
  // ==========================================
  // SUBSCRIPTION PLANS
  // ==========================================

  getPlans: async (): Promise<SubscriptionPlans> => {
    const cacheKey = createCacheKey("/api/onboarding/plans");

    // Check cache first
    const cached = apiCache.get<SubscriptionPlans>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const data = await fetchWithAuth("/api/onboarding/plans");
      const plans = data.plans || data;

      // Cache for 1 hour (plans don't change frequently)
      apiCache.set(cacheKey, plans, 60 * 60 * 1000);

      return plans;
    } catch (error) {
      console.error("Error fetching subscription plans:", error);

      // Return mock plans for development
      const mockPlans: SubscriptionPlans = {
        basic: {
          name: "Basic Plan",
          monthly_token_limit: 10000,
          price_per_month: 29.99,
          max_chatbots: 3,
          max_documents_per_chatbot: 50,
          priority_support: false,
          custom_branding: false,
          api_access: false,
          analytics_retention_days: 30,
        },
        professional: {
          name: "Professional Plan",
          monthly_token_limit: 50000,
          price_per_month: 99.99,
          max_chatbots: 10,
          max_documents_per_chatbot: 200,
          priority_support: true,
          custom_branding: true,
          api_access: true,
          analytics_retention_days: 90,
        },
        enterprise: {
          name: "Enterprise Plan",
          monthly_token_limit: 200000,
          price_per_month: 299.99,
          max_chatbots: 50,
          max_documents_per_chatbot: 1000,
          priority_support: true,
          custom_branding: true,
          api_access: true,
          analytics_retention_days: 365,
        },
      };

      // Cache mock data for 5 minutes
      apiCache.set(cacheKey, mockPlans, 5 * 60 * 1000);
      return mockPlans;
    }
  },

  // ==========================================
  // USER/ORGANIZATION SIGNUP
  // ==========================================

  signup: async (request: SignupRequest): Promise<SignupResponse> => {
    try {
      const data = await fetchWithAuth("/api/onboarding/admin/signup", {
        method: "POST",
        body: JSON.stringify(request),
      });
      return data;
    } catch (error) {
      console.error("Error during signup:", error);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error(
          "Request timed out. Please check if the server is running."
        );
      }
      throw error;
    }
  },

  // ==========================================
  // SUBSCRIPTION STATUS
  // ==========================================

  getSubscriptionStatus: async (
    entityType: "user" | "organization",
    entityId: string
  ): Promise<SubscriptionStatus> => {
    const cacheKey = createCacheKey(
      `/api/onboarding/subscription/${entityType}/${entityId}`
    );

    // Check cache first
    const cached = apiCache.get<SubscriptionStatus>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const data = await fetchWithAuth(
        `/api/onboarding/subscription/${entityType}/${entityId}`
      );

      // Cache for 30 seconds (status changes frequently)
      apiCache.set(cacheKey, data, 30 * 1000);

      return data;
    } catch (error) {
      console.error("Error fetching subscription status:", error);

      // Return mock status for development - indicating no subscription
      const mockStatus: SubscriptionStatus = {
        subscription_id: "",
        tokens_used_this_month: 0,
        tokens_remaining: 0,
        monthly_limit: 0,
        usage_percentage: 0,
        reset_date: "",
      };

      // Cache mock data for 1 minute
      apiCache.set(cacheKey, mockStatus, 60 * 1000);
      return mockStatus;
    }
  },

  // ==========================================
  // TOKEN MANAGEMENT
  // ==========================================

  consumeTokens: async (
    request: TokenConsumptionRequest
  ): Promise<TokenConsumptionResponse> => {
    try {
      const data = await fetchWithAuth("/api/onboarding/tokens/consume", {
        method: "POST",
        body: JSON.stringify(request),
      });

      // Invalidate subscription status cache
      apiCache.deleteMatching("/api/onboarding/subscription");

      return data;
    } catch (error) {
      console.error("Error consuming tokens:", error);
      throw error;
    }
  },

  checkTokenAvailability: async (
    entityType: "user" | "organization",
    entityId: string,
    requiredTokens: number
  ): Promise<TokenAvailabilityCheck> => {
    try {
      const data = await fetchWithAuth(
        `/api/onboarding/tokens/check/${entityType}/${entityId}/${requiredTokens}`
      );
      return data;
    } catch (error) {
      console.error("Error checking token availability:", error);

      // Return mock availability for development
      return {
        success: true,
        has_enough_tokens: true,
        tokens_required: requiredTokens,
        tokens_available: 7500,
        can_proceed: true,
      };
    }
  },

  // ==========================================
  // CHANNEL MANAGEMENT
  // ==========================================

  getSupportedChannels: async (): Promise<SupportedChannels> => {
    const cacheKey = createCacheKey("/api/onboarding/channels");

    // Check cache first
    const cached = apiCache.get<SupportedChannels>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/onboarding/channels`);

      if (!response.ok) {
        throw new Error(`Failed to fetch channels: ${response.status}`);
      }

      const data = await response.json();
      const channels = data.channels || data;

      // Cache for 1 hour
      apiCache.set(cacheKey, channels, 60 * 60 * 1000);

      return channels;
    } catch (error) {
      console.error("Error fetching supported channels:", error);

      // Return mock channels for development
      const mockChannels: SupportedChannels = {
        website: {
          name: "Website Chat",
          description: "Embedded chat widget on websites",
          icon: "🌐",
          typical_use_cases: ["Customer support", "Lead generation", "FAQ"],
        },
        whatsapp: {
          name: "WhatsApp Business",
          description: "WhatsApp Business API integration",
          icon: "📱",
          typical_use_cases: ["Customer service", "Order updates", "Marketing"],
        },
        messenger: {
          name: "Facebook Messenger",
          description: "Facebook Messenger integration",
          icon: "💬",
          typical_use_cases: [
            "Social commerce",
            "Customer support",
            "Engagement",
          ],
        },
        instagram: {
          name: "Instagram Direct",
          description: "Instagram Direct Messages integration",
          icon: "📸",
          typical_use_cases: [
            "Brand engagement",
            "Product inquiries",
            "Support",
          ],
        },
        api: {
          name: "REST API",
          description: "API integration for custom applications",
          icon: "🔌",
          typical_use_cases: [
            "Custom apps",
            "System integration",
            "Automation",
          ],
        },
        mobile_app: {
          name: "Mobile App",
          description: "Mobile application integration",
          icon: "📲",
          typical_use_cases: [
            "In-app support",
            "User onboarding",
            "Feature guidance",
          ],
        },
      };

      // Cache mock data for 1 hour
      apiCache.set(cacheKey, mockChannels, 60 * 60 * 1000);
      return mockChannels;
    }
  },

  getChannelConfigurations: async (
    subscriptionId: string
  ): Promise<ChannelConfigurations> => {
    const cacheKey = createCacheKey(
      `/api/onboarding/subscription/${subscriptionId}/channels/config`
    );

    // Check cache first
    const cached = apiCache.get<ChannelConfigurations>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/api/onboarding/subscription/${subscriptionId}/channels/config`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch channel configurations: ${response.status}`
        );
      }

      const data = await response.json();
      const configurations = data.configurations || data;

      // Cache for 5 minutes
      apiCache.set(cacheKey, configurations, 5 * 60 * 1000);

      return configurations;
    } catch (error) {
      console.error("Error fetching channel configurations:", error);
      throw error;
    }
  },

  updateChannelConfiguration: async (
    subscriptionId: string,
    channel: string,
    request: ChannelConfigUpdateRequest
  ): Promise<ChannelConfigUpdateResponse> => {
    try {
      const { token, userId, orgId } = await getAuthInfo();

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-User-ID": userId,
      };

      if (orgId) {
        headers["X-Org-ID"] = orgId;
      }

      const response = await fetch(
        `${BASE_URL}/api/onboarding/subscription/${subscriptionId}/channels/${channel}/config`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify(request),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail ||
            `Channel configuration update failed: ${response.status}`
        );
      }

      const data = await response.json();

      // Invalidate channel configuration cache
      apiCache.deleteMatching(
        `/api/onboarding/subscription/${subscriptionId}/channels`
      );

      return data;
    } catch (error) {
      console.error("Error updating channel configuration:", error);
      throw error;
    }
  },

  // ==========================================
  // ANALYTICS
  // ==========================================

  getSubscriptionAnalytics: async (
    subscriptionId: string,
    daysBack: number = 30
  ): Promise<SubscriptionAnalytics> => {
    if (!subscriptionId) {
      throw new Error("Subscription ID is required");
    }

    const cacheKey = createCacheKey(
      `/api/onboarding/analytics/${subscriptionId}?days_back=${daysBack}`
    );

    // Check cache first
    const cached = apiCache.get<SubscriptionAnalytics>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const { token } = await getAuthInfo();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(
        `${BASE_URL}/api/onboarding/analytics/${subscriptionId}?days_back=${daysBack}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.detail || `Failed to fetch analytics: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const analytics = data.analytics || data;

      // Cache for 5 minutes
      apiCache.set(cacheKey, analytics, 5 * 60 * 1000);

      return analytics;
    } catch (error) {
      console.error("Error fetching subscription analytics:", error);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error(
          "Request timed out. Please check if the server is running."
        );
      }
      throw error;
    }
  },

  getChannelComparison: async (
    subscriptionId: string,
    daysBack: number = 30
  ): Promise<ChannelComparison> => {
    const cacheKey = createCacheKey(
      `/api/onboarding/analytics/${subscriptionId}/channels/comparison?days_back=${daysBack}`
    );

    // Check cache first
    const cached = apiCache.get<ChannelComparison>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const { token } = await getAuthInfo();
      const response = await fetch(
        `${BASE_URL}/api/onboarding/analytics/${subscriptionId}/channels/comparison?days_back=${daysBack}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch channel comparison: ${response.status}`
        );
      }

      const data = await response.json();
      const comparison = data.comparison || data;

      // Cache for 5 minutes
      apiCache.set(cacheKey, comparison, 5 * 60 * 1000);

      return comparison;
    } catch (error) {
      console.error("Error fetching channel comparison:", error);
      throw error;
    }
  },

  getChannelTrends: async (
    subscriptionId: string,
    channel: string,
    daysBack: number = 30
  ): Promise<ChannelTrends> => {
    const cacheKey = createCacheKey(
      `/api/onboarding/analytics/${subscriptionId}/channels/${channel}/trends?days_back=${daysBack}`
    );

    // Check cache first
    const cached = apiCache.get<ChannelTrends>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const { token } = await getAuthInfo();
      const response = await fetch(
        `${BASE_URL}/api/onboarding/analytics/${subscriptionId}/channels/${channel}/trends?days_back=${daysBack}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch channel trends: ${response.status}`);
      }

      const data = await response.json();
      const trends = data.trends || data;

      // Cache for 5 minutes
      apiCache.set(cacheKey, trends, 5 * 60 * 1000);

      return trends;
    } catch (error) {
      console.error("Error fetching channel trends:", error);
      throw error;
    }
  },

  // ==========================================
  // UTILITY METHODS
  // ==========================================

  estimateTokensForOperation: (
    operationType:
      | "chat"
      | "document_upload"
      | "document_processing"
      | "web_scraping"
      | "embedding_generation",
    messageLength?: number,
    documentSize?: number
  ): number => {
    switch (operationType) {
      case "chat":
        return 100 + (messageLength || 0) / 4;
      case "document_upload":
        return 500 + (documentSize || 0) / 100;
      case "document_processing":
        return 200;
      case "web_scraping":
        return 300;
      case "embedding_generation":
        return 50;
      default:
        return 100;
    }
  },

  // Helper to invalidate subscription-related cache
  invalidateSubscriptionCache: () => {
    apiCache.deleteMatching("/api/onboarding");
    console.log("Subscription cache invalidated");
  },

  // Debug function to test subscription endpoints
  debugSubscriptionEndpoints: async () => {
    try {
      const { userId, orgId } = await getAuthInfo();
      console.log("🔍 Debug: Testing subscription endpoints", { userId: userId.substring(0, 8) + "...", orgId: orgId?.substring(0, 8) + "..." || "none" });

      const results: {
        backendHealth: boolean;
        backendUrl: string;
        userSubscription: SubscriptionStatus | null;
        orgSubscription: SubscriptionStatus | null;
        plans: SubscriptionPlans | null;
        errors: Array<{ type: string; error: string }>;
      } = {
        backendHealth: false,
        backendUrl: BASE_URL,
        userSubscription: null,
        orgSubscription: null,
        plans: null,
        errors: []
      };

      // Test backend health first
      try {
        console.log("🔍 Testing backend health at:", BASE_URL);
        const healthResponse = await fetch(`${BASE_URL}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        results.backendHealth = healthResponse.ok;
        console.log("✅ Backend health:", results.backendHealth, "Status:", healthResponse.status);
        
        if (!healthResponse.ok) {
          const errorText = await healthResponse.text();
          console.log("❌ Backend response:", errorText);
          results.errors.push({ type: "backend", error: `Backend returned ${healthResponse.status}: ${errorText}` });
        }
      } catch (error) {
        console.error("❌ Backend health error:", error);
        results.errors.push({ type: "backend", error: error instanceof Error ? error.message : String(error) });
      }

      // Test user subscription
      try {
        console.log("🔍 Testing user subscription endpoint...");
        results.userSubscription = await subscriptionApi.getSubscriptionStatus("user", userId);
        console.log("✅ User subscription result:", results.userSubscription);
      } catch (error) {
        console.error("❌ User subscription error:", error);
        results.errors.push({ type: "user", error: error instanceof Error ? error.message : String(error) });
      }

      // Test organization subscription if orgId exists
      if (orgId) {
        try {
          console.log("🔍 Testing organization subscription endpoint...");
          results.orgSubscription = await subscriptionApi.getSubscriptionStatus("organization", orgId);
          console.log("✅ Organization subscription result:", results.orgSubscription);
        } catch (error) {
          console.error("❌ Organization subscription error:", error);
          results.errors.push({ type: "organization", error: error instanceof Error ? error.message : String(error) });
        }
      }

      // Test plans endpoint
      try {
        console.log("🔍 Testing plans endpoint...");
        results.plans = await subscriptionApi.getPlans();
        console.log("✅ Plans result:", results.plans);
      } catch (error) {
        console.error("❌ Plans error:", error);
        results.errors.push({ type: "plans", error: error instanceof Error ? error.message : String(error) });
      }

      console.log("🔍 Debug results summary:", results);
      return results;
    } catch (error) {
      console.error("❌ Debug function error:", error);
      return { error: error instanceof Error ? error.message : String(error) };
    }
  },
};
