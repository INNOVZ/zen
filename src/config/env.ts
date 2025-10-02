/**
 * Environment configuration with runtime validation
 * This ensures all required environment variables are available and properly typed
 */

interface EnvironmentConfig {
  // Supabase Configuration
  supabase: {
    url: string;
    anonKey: string;
  };
  
  // API Configuration
  api: {
    baseUrl: string;
  };
  
  // Application Configuration
  app: {
    nodeEnv: 'development' | 'production' | 'test';
    isDevelopment: boolean;
    isProduction: boolean;
  };
}

/**
 * Validates and returns environment configuration
 * Throws detailed error if any required variables are missing
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  const missingVars: string[] = [];
  
  // Required environment variables
  const requiredVars = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  
  // Check for missing required variables
  Object.entries(requiredVars).forEach(([key, value]) => {
    if (!value || value.trim() === '') {
      missingVars.push(key);
    }
  });
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    );
  }
  
  const nodeEnv = (process.env.NODE_ENV as EnvironmentConfig['app']['nodeEnv']) || 'development';
  
  return {
    supabase: {
      url: requiredVars.NEXT_PUBLIC_SUPABASE_URL!,
      anonKey: requiredVars.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    },
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001',
    },
    app: {
      nodeEnv,
      isDevelopment: nodeEnv === 'development',
      isProduction: nodeEnv === 'production',
    },
  };
}

/**
 * Validated environment configuration instance
 * Use this instead of directly accessing process.env
 */
export const env = getEnvironmentConfig();

/**
 * Type-safe environment variable access
 * @deprecated Use env object instead for better type safety
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value || defaultValue!;
}
