/**
 * Integration identifiers
 * Centralized constants to avoid magic strings throughout the codebase
 */
export const INTEGRATION_IDS = {
    WHATSAPP: 'whatsapp',
    GOOGLE: 'google',
    CRM: 'crm',
    SHOPIFY: 'shopify',
    LEAD_CAPTURE: 'lead-capture',
} as const;

export type IntegrationId = typeof INTEGRATION_IDS[keyof typeof INTEGRATION_IDS];
