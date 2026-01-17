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
  // Use environment variable, or fall back to localhost in dev, or empty string (which should prompt config)
  let baseUrl = envUrl || (process.env.NODE_ENV === 'development' ? 'http://localhost:8001' : '');

  if (!baseUrl && typeof window !== 'undefined') {
    console.warn('⚠️ NEXT_PUBLIC_API_URL is not set! API calls will fail.');
  }

  // Force HTTPS for production environments only
  // NOTE: If using an AWS ALB (Load Balancer) without a domain+cert, it might be http only.
  // We only upgrade if it looks like a domain name missing a protocol.
  if (typeof window !== 'undefined') {
    // Only force HTTPS if not localhost AND it doesn't already start with http/https
    if (!baseUrl.includes('localhost') && !baseUrl.startsWith('http')) {
      baseUrl = `https://${baseUrl}`;
    }
    // If it starts with http:// (not https) and we are on a https page, warn about mixed content
    if (baseUrl.startsWith('http://') && window.location.protocol === 'https:') {
      console.warn('⚠️ MIXED CONTENT WARNING: Your frontend is HTTPS but backend is HTTP. The browser MAY block this request. Please configure SSL on your backend.');
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
