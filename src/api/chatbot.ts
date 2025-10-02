/**
 * Chatbot API Module
 * Handles all chatbot-related operations
 */

import { fetchWithAuth, getAuthInfo, apiCache, createCacheKey } from "@/api/base";
import { createLogger } from "@/utils/logger";
import type { ChatbotInfo, HealthCheck } from "@/api/types/index";

const log = createLogger('CHATBOT_API');

export const chatbotApi = {
  // ==========================================
  // CHATBOT MANAGEMENT
  // ==========================================

  getChatbots: async (): Promise<ChatbotInfo[]> => {
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
      log.error("Error fetching chatbots", error);
      if (
        error instanceof Error &&
        (error.name === "AbortError" || error.message.includes("timeout"))
      ) {
        throw new Error("Request timed out. Please try again.");
      }
      throw error;
    }
  },

  getChatbot: async (chatbotId: string): Promise<ChatbotInfo> => {
    return fetchWithAuth(`/api/chat/chatbots/${chatbotId}`);
  },

  createChatbot: async (config: ChatbotInfo): Promise<ChatbotInfo> => {
    const { userId, orgId } = await getAuthInfo();

    // Ensure org_id is always present - use a default if not set
    const finalOrgId = orgId || `user_${userId}_org`;

    // Map frontend config to backend CreateChatbotRequest format
    const backendConfig = {
      name: config.name,
      description: config.description,
      color_hex: config.color_hex,
      tone: config.tone,
      behavior: config.behavior,
      system_prompt: config.system_prompt,
      greeting_message: config.greeting_message,
      fallback_message: config.fallback_message,
      ai_model_config: config.ai_model_config,
      is_active: config.is_active,
      avatar_url: config.avatar_url,
    };

    log.info("Creating chatbot", {
      name: config.name,
      userId: userId.substring(0, 8) + "...",
      orgId: finalOrgId.substring(0, 12) + "...",
    });

    try {
      const response = await fetchWithAuth(
        "/api/chat/chatbots?args=%5B%5D&kwargs=%7B%7D",
        {
          method: "POST",
          body: JSON.stringify(backendConfig),
        }
      );

      return response.chatbot || response;
    } catch (error) {
      log.error("Chatbot creation failed", error, {
        config: backendConfig,
        url: "/api/chat/chatbots?args=%5B%5D&kwargs=%7B%7D",
      });
      throw error;
    }
  },

  updateChatbot: async (
    chatbotId: string,
    config: ChatbotInfo
  ): Promise<ChatbotInfo> => {
    // Map frontend config to backend UpdateChatbotRequest format
    const backendConfig = {
      name: config.name,
      description: config.description,
      color_hex: config.color_hex,
      tone: config.tone,
      behavior: config.behavior,
      system_prompt: config.system_prompt,
      greeting_message: config.greeting_message,
      fallback_message: config.fallback_message,
      ai_model_config: config.ai_model_config,
      is_active: config.is_active,
      avatar_url: config.avatar_url,
    };

    const response = await fetchWithAuth(`/api/chat/chatbots/${chatbotId}`, {
      method: "PUT",
      body: JSON.stringify(backendConfig),
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

  healthCheck: async (): Promise<HealthCheck> => {
    try {
      return await fetchWithAuth("/api/chat/health");
    } catch (error) {
      log.warn("Health check failed", { error });
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
