/**
 * WhatsApp/Twilio Integration Types
 */

/**
 * WhatsApp configuration
 */
export interface WhatsAppConfig {
  twilio_account_sid: string;
  twilio_auth_token: string;
  twilio_phone_number: string;
  webhook_url?: string;
  is_active?: boolean;
}

/**
 * WhatsApp configuration response
 */
export interface WhatsAppConfigResponse {
  success: boolean;
  message?: string;
  config?: WhatsAppConfig;
  error?: string;
}

/**
 * WhatsApp validation response
 */
export interface WhatsAppValidationResponse {
  success: boolean;
  message?: string;
  validation?: {
    valid: boolean;
    account_status?: string;
    error?: string;
  };
  error?: string;
}
