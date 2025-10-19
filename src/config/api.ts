// Centralized API configuration
// This ensures consistent API URL across all components

export const getApiBaseUrl = (): string => {
  const baseUrl = 'https://zaakiy-production.up.railway.app';
  
  // Force HTTPS for all environments
  if (typeof window !== 'undefined') {
    console.log('🔧 getApiBaseUrl called - forcing HTTPS');
    // Ensure URL starts with https://
    if (!baseUrl.startsWith('https://')) {
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
