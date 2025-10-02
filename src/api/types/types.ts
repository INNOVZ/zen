/**
 * Shared API Types
 * Common types used across all API modules
 */

// Basic response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Re-export chatbot types from schema
export type { ChatbotInfo } from "@/types/schemaTypes";

export interface CreateChatbotRequest {
  name: string;
  description?: string;
  avatar_url?: string;
  color_hex?: string;
  tone?: string;
  behavior?: string;
  greeting_message?: string;
  system_prompt?: string;
  fallback_message?: string;
  ai_model_config?: {
    model: string;
    temperature: number;
    max_tokens: number;
  };
  is_active?: boolean;
}

export interface UpdateChatbotRequest extends Partial<CreateChatbotRequest> {
  id: string;
}

// Upload related types
export interface UploadResponse {
  success: boolean;
  upload_id?: string;
  filename?: string;
  message?: string;
}

export interface DeleteUploadResponse {
  success: boolean;
  message?: string;
}

// Re-export UploadFile from schema types to avoid conflicts
export type { UploadFile } from "@/types/schemaTypes";

export interface RetrainResponse {
  success: boolean;
  message: string;
  job_id?: string;
}

// Organization related types
export interface OrganizationResponse {
  user: {
    email: string;
  };
  organization: {
    name: string;
    email: string;
    plan_id: string;
    contact_phone?: string;
    business_type?: string;
  };
}

export interface UpdateOrganizationRequest {
  name: string;
  email: string;
  contact_phone?: string;
  business_type?: string;
}

export interface UpdateOrganizationResponse {
  success: boolean;
  message: string;
  organization: {
    name: string;
    email: string;
  };
}

// Conversation related types
export interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface ConversationResponse {
  success: boolean;
  conversation_id?: string;
  messages?: ConversationMessage[];
  message?: string;
}

export interface ConversationInfo {
  id: string;
  title: string;
  messages: ConversationMessage[];
  chatbot_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ChatResponse {
  success: boolean;
  message: string;
  response: string;
  conversation_id: string;
  response_time?: number;
  sources?: Array<{
    title: string;
    content: string;
    url?: string;
  }>;
  chatbot_config?: {
    name: string;
    avatar_url: string;
    color_hex: string;
    tone: string;
  };
}

export interface SendMessageRequest {
  message: string;
  conversation_id?: string;
  chatbot_id?: string;
  context?: Record<string, unknown>;
}

export interface FeedbackRequest {
  conversation_id: string;
  message_id: string;
  rating: number;
  feedback?: string;
}

// Analytics types
export interface AnalyticsData {
  totalMessages: number;
  totalConversations: number;
  averageResponseTime: number;
  userSatisfaction: number;
  messagesByDay: Array<{
    date: string;
    count: number;
  }>;
  topIntents: Array<{
    intent: string;
    count: number;
  }>;
}

export interface PerformanceMetrics {
  summary: {
    total_queries: number;
    avg_response_time_ms: number;
    p95_response_time_ms: number;
    avg_context_quality: number;
    avg_satisfaction: number;
    period_days: number;
  };
  performance: {
    response_time: {
      average: number;
      median: number;
      p95: number;
      distribution: Record<string, number>;
    };
    context_quality: {
      average: number;
      distribution: Record<string, number>;
    };
    satisfaction: {
      average: number;
      total_feedback: number;
      distribution: Record<string, number>;
    };
  };
  usage_patterns: {
    hourly_distribution: Record<string, number>;
    model_usage: Record<string, number>;
    avg_sources_per_query: number;
    queries_per_day: number;
  };
  trends: {
    trends_available: boolean;
    response_time_change?: number;
    quality_change?: number;
    volume_change?: number;
  };
  quality_analysis: {
    best_performing_model?: string;
    optimal_source_count?: number;
    peak_quality_hours: Array<[number, number]>;
  };
  insights: Array<{
    type: "warning" | "success" | "info";
    category: "performance" | "quality" | "usage" | "satisfaction";
    title: string;
    description: string;
    recommendation: string;
  }>;
  generated_at: string;
}

// Context engineering types
export interface ContextEngineering {
  system_context: string;
  user_context: string;
  conversation_history_limit: number;
  response_guidelines: string[];
  fallback_responses: string[];
}

export interface ContextConfig {
  org_id: string;
  config_name: string;
  initial_retrieval_count: number;
  semantic_rerank_count: number;
  final_context_chunks: number;
  max_context_length: number;
  enable_query_rewriting: boolean;
  max_query_variants: number;
  conversation_context_turns: number;
  retrieval_strategy: "semantic_only" | "hybrid" | "keyword_only" | "domain_specific";
  semantic_weight: number;
  keyword_weight: number;
  model_tier: "fast" | "balanced" | "premium" | "enterprise";
  embedding_model: string;
  confidence_threshold: number;
  max_response_time_ms: number;
  enable_hallucination_check: boolean;
  enable_source_verification: boolean;
  enable_semantic_rerank: boolean;
  enable_caching: boolean;
  cache_ttl_minutes: number;
  rerank_model: string;
  domain_filters: Record<string, unknown>;
  business_context?: string;
  specialized_instructions?: string;
  enable_detailed_logging: boolean;
  log_user_queries: boolean;
  collect_feedback: boolean;
  created_at: string;
  updated_at: string;
  system_prompt?: string;
  user_context?: string;
  history_limit?: number;
  guidelines?: string[];
  fallback_responses?: string[];
}

export interface ContextAnalytics {
  context_usage: Record<string, number>;
  response_effectiveness: number;
  context_length_distribution: Array<{
    range: string;
    count: number;
  }>;
}

// Cache related types
export interface CacheEntry<T = unknown> {
  data: T;
  timestamp: number;
  ttl: number;
}

// Error types
export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: Record<string, unknown>;
}

// Authentication types
export interface UserContext {
  isAuthenticated: boolean;
  userId?: string;
  orgId?: string;
}

// Configuration types
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
  enableCache: boolean;
  cacheTimeout: number;
}

// Health check types
export interface HealthCheck {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: string;
  services: Record<string, boolean | string>;
  version?: string;
  error?: string;
}
