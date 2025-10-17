// Subscription System Types
// Based on backend SUBSCRIPTION_SYSTEM_GUIDE.md

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

export interface SubscriptionStatus {
  subscription_id: string;
  tokens_used_this_month: number;
  tokens_remaining: number;
  monthly_limit: number;
  usage_percentage: number;
  reset_date: string;
  plan_name?: string;
  // API response fields
  success?: boolean;
  has_subscription?: boolean;
  message?: string;
}

export interface TokenConsumptionRequest {
  entity_id: string;
  entity_type: 'user' | 'organization';
  tokens_consumed: number;
  operation_type: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation';
}

export interface TokenConsumptionResponse {
  success: boolean;
  tokens_consumed: number;
  tokens_remaining: number;
  monthly_limit: number;
  usage_percentage: number;
}

export interface TokenAvailabilityCheck {
  success: boolean;
  has_enough_tokens: boolean;
  tokens_required: number;
  tokens_available: number;
  can_proceed: boolean;
}

export interface ChannelInfo {
  name: string;
  description: string;
  icon: string;
  typical_use_cases: string[];
}

export interface SupportedChannels {
  website: ChannelInfo;
  whatsapp: ChannelInfo;
  messenger: ChannelInfo;
  instagram: ChannelInfo;
  api: ChannelInfo;
  mobile_app: ChannelInfo;
}

export interface ChannelConfiguration {
  enabled: boolean;
  rate_limit_per_minute: number;
  max_message_length: number;
  custom_token_multiplier: number;
  priority_level: number;
  webhook_url?: string;
  custom_settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface ChannelConfigurations {
  [channel: string]: ChannelConfiguration;
}

export interface ChannelUsage {
  channel: string;
  tokens_used: number;
  message_count: number;
  unique_users: number;
  avg_tokens_per_message: number;
  usage_share_percentage: number;
  peak_usage_hour: number;
}

export interface SubscriptionAnalytics {
  subscription_id: string;
  entity_id: string;
  entity_type: 'user' | 'organization';
  plan: 'basic' | 'professional' | 'enterprise';
  plan_name: string;
  total_tokens_used: number;
  total_tokens_limit: number;
  usage_percentage: number;
  tokens_remaining: number;
  channel_usage: ChannelUsage[];
  daily_usage: Record<string, number>;
  hourly_distribution: Record<string, number>;
  most_active_channel: string;
  least_active_channel: string;
  growth_rate: number;
  billing_cycle_start: string;
  billing_cycle_end: string;
  days_remaining: number;
  status: string;
  analytics_period_days: number;
}

export interface ChannelPerformance {
  tokens_used: number;
  message_count: number;
  unique_users: number;
  avg_tokens_per_message: number;
  usage_share_percentage: number;
  efficiency_score: number;
  peak_usage_hour: number;
  avg_response_time_ms: number;
  error_count: number;
  error_rate: number;
  days_active: number;
  performance_rating: string;
}

export interface ChannelComparison {
  [channel: string]: ChannelPerformance;
}

export interface ChannelTrends {
  daily_tokens: Array<{ date: string; value: number }>;
  daily_messages: Array<{ date: string; value: number }>;
  daily_users: Array<{ date: string; value: number }>;
  trend_direction: 'increasing' | 'decreasing' | 'stable';
  average_daily_tokens: number;
}

export interface UserSignupRequest {
  entity_type: 'user';
  full_name: string;
  email: string;
  selected_plan: 'basic' | 'professional' | 'enterprise';
  password: string;
}

export interface OrganizationSignupRequest {
  entity_type: 'organization';
  full_name: string;
  email: string;
  organization_name: string;
  contact_phone?: string;
  business_type?: string;
  selected_plan: 'basic' | 'professional' | 'enterprise';
  password: string;
}

export type SignupRequest = UserSignupRequest | OrganizationSignupRequest;

export interface SignupResponse {
  success: boolean;
  message: string;
  entity_id: string;
  entity_type: 'user' | 'organization';
  subscription_id: string;
  plan: 'basic' | 'professional' | 'enterprise';
  tokens_remaining: number;
  tokens_limit: number;
  email_confirmation_required: boolean;
  email_sent_to: string;
}

export interface TokenLimitError {
  error: 'Insufficient tokens';
  tokens_requested: number;
  tokens_available: number;
  monthly_limit: number;
  reset_date: string;
}

export interface ChannelConfigUpdateRequest {
  enabled?: boolean;
  rate_limit_per_minute?: number;
  webhook_url?: string;
  custom_settings?: Record<string, unknown>;
}

export interface ChannelConfigUpdateResponse {
  success: boolean;
  message: string;
  subscription_id: string;
  channel: string;
  updated_fields: string[];
}

// Frontend-specific types
export interface SubscriptionContextType {
  subscription: SubscriptionStatus | null;
  plans: SubscriptionPlans | null;
  isLoading: boolean;
  error: string | null;
  refreshSubscription: () => Promise<void>;
  checkTokenAvailability: (requiredTokens: number) => Promise<TokenAvailabilityCheck>;
  consumeTokens: (request: TokenConsumptionRequest) => Promise<TokenConsumptionResponse>;
}

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<unknown>;
  isCompleted: boolean;
  isActive: boolean;
}

export interface OnboardingState {
  currentStep: number;
  steps: OnboardingStep[];
  formData: Partial<SignupRequest>;
  selectedPlan: 'basic' | 'professional' | 'enterprise' | null;
  isLoading: boolean;
  error: string | null;
}

// Token estimation types
export interface TokenEstimate {
  operation_type: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation';
  estimated_tokens: number;
  message_length?: number;
  document_size?: number;
}

// Plan comparison types
export interface PlanComparison {
  feature: string;
  basic: boolean | string | number;
  professional: boolean | string | number;
  enterprise: boolean | string | number;
}

export interface PlanLimits {
  max_chatbots: number;
  max_documents_per_chatbot: number;
  monthly_tokens: number;
  supported_channels: string[];
  concurrent_conversations: number;
  webhook_support: boolean;
  white_label_options: boolean;
  advanced_analytics: boolean;
}
