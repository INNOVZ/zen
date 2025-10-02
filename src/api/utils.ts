/**
 * API Utilities Module
 * Shared utilities, user management, and support functions
 */

import { BASE_URL, fetchWithAuth, getAuthInfo, apiCache, createCacheKey } from "@/api/base";
import { createLogger } from "@/utils/logger";

const log = createLogger('API_UTILS');

// Local type definitions
interface UserResponse {
  id: string;
  email: string;
  name?: string;
  settings?: Record<string, unknown>;
}

interface ApiError {
  message: string;
  status: number;
  code?: string;
}

interface UserSettings {
  notifications: boolean;
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
}

interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  status: 'open' | 'closed' | 'pending';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export const apiUtils = {
  getUserInfo: async (): Promise<UserResponse> => {
    try {
      const cacheKey = createCacheKey("/api/user/info");

      // Check cache first
      const cached = apiCache.get<UserResponse>(cacheKey);
      if (cached) {
        return cached;
      }

      log.info("Fetching user info", { url: `${BASE_URL}/api/user/info` });

      const data = await fetchWithAuth("/api/user/info");

      // Cache for 5 minutes
      apiCache.set(cacheKey, data, 5 * 60 * 1000);

      return data;
    } catch (error) {
      log.error("Error fetching user info", error);
      throw error;
    }
  },

  updateUserSettings: async (settings: Partial<UserSettings>): Promise<{ success: boolean }> => {
    try {
      log.info("Updating user settings", { settingsKeys: Object.keys(settings) });

      const response = await fetchWithAuth("/api/user/settings", {
        method: "PATCH",
        body: JSON.stringify(settings),
      });

      // Invalidate user cache after successful update
      apiCache.deleteMatching("/api/user");

      return response;
    } catch (error) {
      log.error("Error updating user settings", error);
      throw error;
    }
  },

  deleteAccount: async (): Promise<{ success: boolean; message: string }> => {
    try {
      log.info("Deleting user account");

      const response = await fetchWithAuth("/api/user/delete", {
        method: "DELETE",
      });

      // Clear all cache after account deletion
      apiCache.clear();

      return response;
    } catch (error) {
      log.error("Error deleting account", error);
      throw error;
    }
  },

  submitSupportTicket: async (ticket: {
    subject: string;
    message: string;
    priority?: "low" | "medium" | "high";
  }): Promise<{ success: boolean; ticketId?: string }> => {
    try {
      log.info("Submitting support ticket", { 
        subject: ticket.subject,
        priority: ticket.priority || "medium" 
      });

      const response = await fetchWithAuth("/api/support/ticket", {
        method: "POST",
        body: JSON.stringify({
          ...ticket,
          priority: ticket.priority || "medium",
        }),
      });

      return response;
    } catch (error) {
      log.error("Error submitting support ticket", error);
      throw error;
    }
  },

  getSupportTickets: async (): Promise<SupportTicket[]> => {
    try {
      const cacheKey = createCacheKey("/api/support/tickets");

      // Check cache first
      const cached = apiCache.get<SupportTicket[]>(cacheKey);
      if (cached) {
        return cached;
      }

      log.info("Fetching support tickets");

      const data = await fetchWithAuth("/api/support/tickets");

      // Cache for 2 minutes
      apiCache.set(cacheKey, data.tickets || data || [], 2 * 60 * 1000);

      return data.tickets || data || [];
    } catch (error) {
      log.error("Error fetching support tickets", error);
      throw error;
    }
  },

  // Debug and health check utilities
  checkApiHealth: async (): Promise<{
    status: "healthy" | "unhealthy";
    timestamp: string;
    services: Record<string, boolean>;
  }> => {
    try {
      log.info("Checking API health");

      const response = await fetchWithAuth("/api/health", {
        method: "GET",
      });

      return response;
    } catch (error) {
      log.warn("Health check failed", { error });
      return {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        services: {
          api: false,
          database: false,
          auth: false,
        },
      };
    }
  },

  getApiVersion: async (): Promise<{ version: string; build: string }> => {
    try {
      const response = await fetchWithAuth("/api/version");
      return response;
    } catch (error) {
      log.warn("Failed to get API version", { error });
      return {
        version: "unknown",
        build: "unknown",
      };
    }
  },

  // Cache management utilities
  clearApiCache: (): void => {
    log.info("Clearing API cache");
    apiCache.clear();
  },

  getCacheStats: (): {
    size: number;
    keys: string[];
    hitRate?: number;
  } => {
    return {
      size: 0, // Cache doesn't expose size
      keys: [], // Cache doesn't expose keys
    };
  },

  // Authentication helpers
  getCurrentUser: async () => {
    try {
      const authInfo = await getAuthInfo();
      if (!authInfo.userId) {
        throw new Error("User not authenticated");
      }
      return {
        id: authInfo.userId,
        orgId: authInfo.orgId,
      };
    } catch (error) {
      log.error("Error getting current user", error);
      throw error;
    }
  },

  // Error handling utilities
  isApiError: (error: unknown): error is ApiError => {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      "status" in error
    );
  },

  formatApiError: (error: unknown): string => {
    if (apiUtils.isApiError(error)) {
      return `API Error (${error.status}): ${error.message}`;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return "An unexpected error occurred";
  },

  // Request utilities
  buildQueryString: (params: Record<string, string | number | boolean>): string => {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    
    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : "";
  },

  // Validation utilities
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validateUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
};
