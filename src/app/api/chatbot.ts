// Chatbot Management API
import { ChatbotInfo } from "@/types/schemaTypes";
import { fetchWithAuth, getAuthInfo } from "@/app/api/auth";
import { apiCache, createCacheKey } from "@/utils/cache";
import { apiUtils } from "@/app/api/utils";

export const chatbotApi = {
  // ==========================================
  // CHATBOT MANAGEMENT
  // ==========================================

  getChatbots: async (): Promise<ChatbotInfo[]> => {
    return apiUtils.withDeduplication('/api/chat/chatbots', async () => {
      const cacheKey = createCacheKey("/api/chat/chatbots");

      // Check cache first 
      const cached = apiCache.get<ChatbotInfo[]>(cacheKey);
      if (cached) {
        return cached;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort(new Error("Request timeout after 10 seconds"));
        }, 10000);

        const data = await fetchWithAuth("/api/chat/chatbots", {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const result = data.chatbots || data || [];

        // Cache for 2 minutes
        apiCache.set(cacheKey, result, 2 * 60 * 1000);

        return result;
      } catch (error) {
        console.error("Error fetching chatbots:", error);
        if (
          error instanceof Error &&
          (error.name === "AbortError" || error.message.includes("timeout"))
        ) {
          throw new Error("Request timed out. Please try again.");
        }
        throw error;
      }
    });
  },

  getChatbot: async (chatbotId: string): Promise<ChatbotInfo> => {
    return fetchWithAuth(`/api/chat/chatbots/${chatbotId}`);
  },

  createChatbot: async (config: ChatbotInfo): Promise<ChatbotInfo> => {
    const { userId, orgId } = await getAuthInfo();

    // Ensure org_id is always present - use a default if not set
    const finalOrgId = orgId || `user_${userId}_org`;

    // Map frontend ai_model_config to backend model_config format
    const backendConfig: Required<ChatbotInfo> = {
      ...config,
      user_id: userId,
      org_id: finalOrgId,
    } as Required<ChatbotInfo>;

    // Map ai_model_config to what backend expects
    if (config.ai_model_config) {
      backendConfig.ai_model_config = config.ai_model_config;
      // Backend stores this as model_config internally
    }

    console.log("🤖 Creating chatbot with config:", {
      ...backendConfig,
      user_id: userId.substring(0, 8) + "...",
      org_id: finalOrgId.substring(0, 12) + "...",
    });

    const response = await fetchWithAuth("/api/chat/chatbots", {
      method: "POST",
      body: JSON.stringify(backendConfig),
    });

    return response.chatbot || response;
  },

  updateChatbot: async (
    chatbotId: string,
    config: ChatbotInfo
  ): Promise<ChatbotInfo> => {
    const response = await fetchWithAuth(`/api/chat/chatbots/${chatbotId}`, {
      method: "PUT",
      body: JSON.stringify(config),
    });

    return response.chatbot || response;
  },

  deleteChatbot: async (chatbotId: string): Promise<void> => {
    await fetchWithAuth(`/api/chat/chatbots/${chatbotId}`, {
      method: "DELETE",
    });
  },

  activateChatbot: async (chatbotId: string): Promise<void> => {
    await fetchWithAuth(`/api/chat/chatbots/${chatbotId}/activate`, {
      method: "POST",
    });
  },

  // ==========================================
  // HEALTH CHECK & SYSTEM STATUS
  // ==========================================

  healthCheck: async (): Promise<{
    status: "healthy" | "degraded";
    timestamp: string;
    services: {
      database: "healthy" | "error";
      chat_service: "healthy" | "error";
      context_engine: "healthy" | "error";
    };
    version: string;
    error?: string;
  }> => {
    try {
      return await fetchWithAuth("/api/chat/health");
    } catch (error) {
      console.warn("Health check failed:", error);
      return {
        status: "degraded",
        timestamp: new Date().toISOString(),
        services: {
          database: "error",
          chat_service: "error",
          context_engine: "error",
        },
        version: "unknown",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },
};
