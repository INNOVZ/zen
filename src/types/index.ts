/**
 * Main Types Barrel Export
 * 
 * Centralized export for all types across the application.
 * This provides a single import point for commonly used types.
 */

// API Types (from app/api/types.ts)
export type {
  TokenHandler,
  ChatResponse,
  ContextConfig,
  PerformanceMetrics,
  FeedbackRequest,
  HealthCheck,
  PerformanceRecommendation,
  PerformanceInsights,
  ContextAnalytics,
  IntentAnalytics,
  IntentAnalyticsResponse,
  IntentDetails,
  IntentDetailsResponse,
  UpdateOrganizationRequest,
  OrganizationInfo,
  OrganizationResponse,
  UpdateOrganizationResponse,
  RetrainResponse,
  AnalyticsDataExport,
} from "@/app/api/types";

// Dashboard Types
export type {
  DashboardStats,
  RecentActivity,
  DashboardMetrics,
  DashboardSummary,
  StatusCardProps,
  ConversationsCardProps,
  DashboardHeaderProps,
  QuickActionProps,
  QuickActionsGridProps,
  StatusGridProps,
  DashboardError,
  LeadSource,
  LeadStatus,
  LeadInfo,
  LeadsResponse,
  LeadsStats,
  CreateLeadRequest,
  UpdateLeadRequest,
} from "./dashboard";

export { DASHBOARD_CONFIG, DashboardSection } from "./dashboard";

// Conversation Types
export type {
  Message,
  ConversationInfo,
  ConversationWithMessages,
  ConversationSummary,
} from "./conversation";

// Common Types
export type {
  UserInfo,
  Organization,
  BaseEntity,
  BaseEntityWithTimestamps,
  BaseOrganizationEntity,
} from "./common";

// Integration Types
export type {
  CRMType,
  CRMIntegration,
  CRMConfig,
  IntegrationProvider,
  GoogleIntegration,
  GoogleCalendarIntegration,
  GoogleSheetsIntegration,
  GoogleSheetsConfig,
  ShopifyIntegration,
  LeadCaptureConfig,
  MCPTool,
  MCPToolsResponse,
  IntegrationStatus,
  GoogleOAuthResponse,
  ZohoOAuthResponse,
  ChannelInfo,
  SupportedChannels,
  ChannelConfiguration,
  ChannelConfigurations,
  ChannelUsage,
  WhatsAppConfig,
  WhatsAppConfigResponse,
  WhatsAppValidationResponse,
} from "./integration";

// Subscription Types
export type {
  SubscriptionPlan,
  SubscriptionPlans,
  SubscriptionStatus,
  TokenOperationType,
  TokenConsumptionRequest,
  TokenConsumptionResponse,
  TokenAvailabilityCheck,
  SignupRequest,
  OrganizationSignupRequest,
  SignupResponse,
} from "./subscription";

// API Chat Types
export type {
  ChatbotInfo,
  UploadFile,
  DeploymentConfig,
} from "./api/chat";
