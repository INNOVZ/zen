/**
 * Base API configuration and utilities
 * Shared across all API modules
 */

import { env } from "@/config/env";

export const BASE_URL = env.api.baseUrl;

// Re-export auth utilities for API modules
export { fetchWithAuth, getAuthInfo } from "@/api/auth";

// Re-export cache utilities
export { apiCache, createCacheKey } from "@/utils/cache";
