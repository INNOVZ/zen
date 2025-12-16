// Centralized API configuration with memoization
// This ensures consistent API URL across all components

// Cache the computed API base URL to avoid repeated computation
let cachedBaseUrl: string | null = null;

export const getApiBaseUrl = (): string => {
  // Return cached value if available
  if (cachedBaseUrl !== null) {
    return cachedBaseUrl;
  }

  // Check for environment variable first, then fall back to production URL
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  let baseUrl = envUrl || 'https://zaakiy-production.up.railway.app';
  
  // Force HTTPS for production environments only
  if (typeof window !== 'undefined') {
    // Only force HTTPS if not localhost
    if (!baseUrl.includes('localhost') && !baseUrl.startsWith('https://')) {
      baseUrl = `https://${baseUrl.replace('http://', '')}`;
    }
  }
  
  // Cache the result
  cachedBaseUrl = baseUrl;
  
  // Only log in development mode to reduce production noise
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    console.log('🔧 API Base URL configured:', baseUrl);
  }
  
  return baseUrl;
};

// For backward compatibility, export a constant that calls the function
export const API_BASE_URL = getApiBaseUrl();

// Debug logging - only in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  console.log('API Configuration:', {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_BASE_URL: API_BASE_URL,
  });
}
