// WhatsApp/Twilio Configuration API
import { fetchWithAuth } from "@/app/api/auth";
import type {
  WhatsAppConfig,
  WhatsAppConfigResponse,
  WhatsAppValidationResponse,
} from "./types/index";

// Re-export types for backward compatibility
export type {
  WhatsAppConfig,
  WhatsAppConfigResponse,
  WhatsAppValidationResponse,
};

export const whatsappApi = {
  /**
   * Get current WhatsApp configuration for the organization
   */
  getConfig: async (): Promise<WhatsAppConfigResponse> => {
    try {
      const response = await fetchWithAuth("/api/whatsapp/config");
      return response;
    } catch (error) {
      console.error("Error fetching WhatsApp configuration:", error);
      throw error;
    }
  },

  /**
   * Create or update WhatsApp configuration
   */
  updateConfig: async (
    config: WhatsAppConfig
  ): Promise<WhatsAppConfigResponse> => {
    try {
      const response = await fetchWithAuth("/api/whatsapp/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      });
      return response;
    } catch (error) {
      console.error("Error updating WhatsApp configuration:", error);
      throw error;
    }
  },

  /**
   * Validate WhatsApp configuration and test Twilio connection
   */
  validateConfig: async (): Promise<WhatsAppValidationResponse> => {
    try {
      const response = await fetchWithAuth("/api/whatsapp/validate");
      return response;
    } catch (error) {
      console.error("Error validating WhatsApp configuration:", error);
      throw error;
    }
  },

  /**
   * Send a test WhatsApp message
   */
  sendTestMessage: async (
    to: string,
    message: string,
    chatbotId?: string
  ): Promise<{ success: boolean; message_sid?: string; error?: string }> => {
    try {
      const response = await fetchWithAuth("/api/whatsapp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          message,
          chatbot_id: chatbotId,
        }),
      });
      return response;
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      throw error;
    }
  },
};

