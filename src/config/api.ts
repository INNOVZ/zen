// Centralized API configuration
// This ensures consistent API URL across all components

export const getApiBaseUrl = (): string => {
  // Force HTTPS for production - always return HTTPS
  if (typeof window !== 'undefined') {
    // We're in the browser - always use HTTPS for production
    return 'https://zaakiy-production.up.railway.app';
  }
  
  // Server-side rendering fallback
  return 'https://zaakiy-production.up.railway.app';
};

// For backward compatibility, export a constant that calls the function
export const API_BASE_URL = getApiBaseUrl();

// Debug logging
if (typeof window !== 'undefined') {
  console.log('API Configuration:', {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    API_BASE_URL: API_BASE_URL,
    getApiBaseUrl_result: getApiBaseUrl(),
    timestamp: new Date().toISOString(),
  });
}
