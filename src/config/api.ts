// Centralized API configuration
// This ensures consistent API URL across all components

export const getApiBaseUrl = (): string => {
  // Check for environment variable first, then fall back to production URL
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl = envUrl || 'https://zaakiy-production.up.railway.app';
  
  // Force HTTPS for production environments only
  if (typeof window !== 'undefined') {
    console.log('🔧 getApiBaseUrl called');
    // Only force HTTPS if not localhost
    if (!baseUrl.includes('localhost') && !baseUrl.startsWith('https://')) {
      return `https://${baseUrl.replace('http://', '')}`;
    }
  }
  
  return baseUrl;
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
