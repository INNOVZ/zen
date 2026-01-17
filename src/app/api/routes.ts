// Main API Routes - Re-exports all API modules
// This file maintains backward compatibility while organizing code into logical modules

// Import all API modules
export { chatbotApi } from './chatbot';
export { uploadsApi } from './uploads';
export { conversationApi } from './conversations';
export { organizationApi } from './organization';
export { whatsappApi } from './whatsapp';
export { apiUtils } from './utils';

// Re-export all types for convenience
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
} from './types';

// Re-export types from schemaTypes for convenience
export type { ConversationInfo } from "@/types/conversation";
export type { ChatbotInfo, UploadFile } from "@/app/api/types/chat";