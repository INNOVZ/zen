/**
 * Shopify Integration Types
 */

/**
 * Shopify Integration configuration
 */
export interface ShopifyIntegration {
  type: "shopify";
  enabled: boolean;
  storeUrl?: string;
  apiKey?: string;
  accessToken?: string;
  config?: Record<string, unknown>;
}
