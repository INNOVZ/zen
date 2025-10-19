// Centralized API configuration
// This ensures consistent API URL across all components

const getApiBaseUrl = (): string => {
  // Check for environment variable first
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // Check if we're in production (Vercel deployment)
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    return 'https://zaakiy-production.up.railway.app';
  }
  
  // Development fallback
  return 'http://localhost:8001';
};

export const API_BASE_URL = getApiBaseUrl();

// Debug logging
if (typeof window !== 'undefined') {
  console.log('API Configuration:', {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    API_BASE_URL: API_BASE_URL,
  });
}
