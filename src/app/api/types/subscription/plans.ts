/**
 * Subscription Plan Types
 */

export type SubscriptionStatusType = "active" | "inactive" | "cancelled" | "expired" | "trial";

/**
 * Subscription status information
 */
export interface SubscriptionStatus {
  subscription_id: string;
  tokens_used_this_month: number;
  tokens_remaining: number;
  monthly_limit: number;
  usage_percentage: number;
  reset_date: string;
  plan_name?: string;
  status?: SubscriptionStatusType;
  has_subscription?: boolean;
}

export interface SubscriptionPlan {
  name: string;
  monthly_token_limit: number;
  price_per_month: number;
  max_chatbots: number;
  max_documents_per_chatbot: number;
  priority_support: boolean;
  custom_branding: boolean;
  api_access: boolean;
  analytics_retention_days: number;
}

export interface SubscriptionPlans {
  basic: SubscriptionPlan;
  professional: SubscriptionPlan;
  enterprise: SubscriptionPlan;
}

export type TokenOperationType = "chat" | "document_upload" | "document_processing" | "web_scraping" | "embedding_generation";

export interface TokenConsumptionRequest {
  operation_type: TokenOperationType;
  token_count: number;
  metadata?: Record<string, unknown>;
}

export interface TokenConsumptionResponse {
  success: boolean;
  tokens_consumed: number;
  tokens_remaining: number;
  monthly_limit: number;
  message?: string;
}

export interface TokenAvailabilityCheck {
  has_enough_tokens: boolean;
  tokens_available: number;
  tokens_required: number;
  monthly_limit: number;
  reset_date: string;
  success?: boolean;
  can_proceed?: boolean;
}

/**
 * User signup request
 */
export interface SignupRequest {
  entity_type: "user" | "organization";
  email: string;
  password: string;
  full_name: string;
  selected_plan: "basic" | "professional" | "enterprise";
  name?: string;
  organization?: string;
}

/**
 * Organization signup request (extends SignupRequest with organization-specific fields)
 */
export interface OrganizationSignupRequest extends SignupRequest {
  entity_type: "organization";
  organization_name: string;
  contact_phone?: string;
  business_type?: string;
}

/**
 * Signup response
 */
export interface SignupResponse {
  success: boolean;
  message: string;
  userId?: string;
  token?: string;
  email_confirmation_required?: boolean;
  email_sent_to?: string;
}

