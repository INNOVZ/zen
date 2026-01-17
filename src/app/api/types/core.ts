/**
 * API Types - Centralized type definitions for API responses
 */

export interface TokenHandler {
  getToken: () => Promise<string | null>;
  refreshToken: () => Promise<string | null>;
  wrapApiCall: <T>(
    call: () => Promise<T>,
    operation: string,
    tokenCount?: number,
    metadata?: number | Record<string, unknown>
  ) => Promise<T>;
}

export interface ChatResponse {
  response: string;
  conversation_id: string;
  message_id?: string;
  sources?: Source[];
  buttons?: Array<{ text: string; value: string; type?: string }>;
  metadata?: Record<string, unknown>;
}

export interface Source {
  title: string;
  url: string;
  content?: string;
  similarity?: number;
}

export interface ContextConfig {
  // Basic configuration
  org_id?: string;
  config_name?: string;

  // Legacy/Simple config (for backward compatibility)
  top_k?: number;
  temperature?: number;
  max_tokens?: number;
  model?: string;
  custom_settings?: Record<string, unknown>;

  // Advanced retrieval configuration
  initial_retrieval_count?: number;
  semantic_rerank_count?: number;
  final_context_chunks?: number;
  max_context_length?: number;

  // Query processing
  enable_query_rewriting?: boolean;
  max_query_variants?: number;
  conversation_context_turns?: number;

  // Retrieval strategy
  retrieval_strategy?:
  | "hybrid"
  | "semantic"
  | "keyword"
  | "vector"
  | "semantic_only"
  | "keyword_boost"
  | "keyword_only"
  | "domain_specific";
  semantic_weight?: number;
  keyword_weight?: number;

  // Model configuration
  model_tier?: "fast" | "balanced" | "quality" | "premium" | "enterprise";
  embedding_model?: string;
  rerank_model?: string;

  // Feature flags
  enable_semantic_rerank?: boolean;
  enable_hallucination_check?: boolean;
  enable_source_verification?: boolean;
  enable_caching?: boolean;
  enable_detailed_logging?: boolean;
  log_user_queries?: boolean;
  collect_feedback?: boolean;

  // Quality and performance
  confidence_threshold?: number;
  max_response_time_ms?: number;
  cache_ttl_minutes?: number;

  // Context and filtering
  domain_filters?: Record<string, unknown>;
  business_context?: string;
  specialized_instructions?: string;

  // Timestamps
  created_at?: string;
  updated_at?: string;
}

export interface PerformanceMetrics {
  summary: {
    total_queries: number;
    avg_response_time_ms: number;
    avg_context_quality: number;
    avg_satisfaction: number;
  };
  performance: {
    response_time: {
      distribution: Record<string, number>;
      p50_ms: number;
      p95_ms: number;
      p99_ms: number;
    };
    satisfaction: {
      total_feedback: number;
      positive_feedback: number;
      negative_feedback: number;
    };
  };
  usage_patterns: {
    queries_per_day: number;
    avg_sources_per_query: number;
    model_usage: Record<string, number>;
  };
  trends: {
    volume_change: number;
    response_time_change: number;
    quality_change: number;
  };
  insights: Array<{
    type: "warning" | "success" | "info";
    title: string;
    description: string;
    recommendation: string;
  }>;
}

export interface FeedbackRequest {
  message_id: string;
  rating: number;
  feedback_text?: string;
}

export interface HealthCheck {
  status: "healthy" | "degraded" | "unhealthy";
  version: string;
  timestamp: string;
  checks: Record<string, {
    status: "ok" | "error";
    message?: string;
  }>;
}

export interface PerformanceRecommendation {
  type: "optimization" | "warning" | "info";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  action: string;
}

export interface PerformanceInsights {
  metrics: PerformanceMetrics;
  recommendations: PerformanceRecommendation[];
  generated_at: string;
}

export interface ContextAnalytics {
  query_id: string;
  timestamp: string;
  quality_score: number;
  retrieval_time_ms: number;
  sources_count: number;
  model: string;
  top_k: number;
}

export interface IntentAnalytics {
  summary: {
    total_queries: number;
    queries_with_intent: number;
    queries_without_intent: number;
  };
  intent_distribution: Record<string, number>;
  intent_trends: Array<{
    date: string;
    total: number;
    intents: Record<string, number>;
  }>;
  intent_performance: Record<string, {
    total_queries: number;
    avg_retrieval_time_ms: number; // rename from avg_response_time_ms?
    avg_quality_score: number;
    avg_confidence: number;
    avg_sources_used: number; // rename from avg_sources
  }>;
  intent_confidence: Record<string, number>; // rename from confidence_distribution
  detection_methods: Record<string, number>;
  intent_fulfillment: Record<string, {
    queries_with_feedback: number;
    satisfaction_rate: number;
    avg_rating: number;
    positive_feedback: number;
  }>;
}

export interface IntentAnalyticsResponse {
  success: boolean;
  analytics: IntentAnalytics;
  period_days: number;
}

export interface IntentDetails {
  intent_type: string;
  total_queries: number;
  performance: {
    avg_retrieval_time_ms: number;
    avg_quality_score: number;
    avg_confidence: number;
    avg_sources_used: number;
  };
  confidence: {
    average: number;
    distribution: Record<string, number>;
  };
  detection_methods: Record<string, number>;
  samples?: string[];
  top_sources?: Array<{
    title: string;
    url: string;
    usage_count: number;
  }>;
}

export interface IntentDetailsResponse {
  success: boolean;
  details: IntentDetails;
}

export interface UpdateOrganizationRequest {
  name?: string;
  email?: string;
  contact_phone?: string;
  business_type?: string;
  settings?: Record<string, unknown>;
}

export interface OrganizationInfo {
  id: string;
  name: string;
  email?: string;
  plan_id?: string;
  created_at: string;
  settings?: Record<string, unknown>;
  business_type?: string;
  contact_phone?: string;
}

export interface OrganizationResponse {
  success?: boolean;
  user?: {
    email: string;
  };
  organization: OrganizationInfo;
}

export interface UpdateOrganizationResponse {
  success: boolean;
  organization: OrganizationInfo;
  message?: string;
}

export interface RetrainResponse {
  success: boolean;
  message: string;
  job_id?: string;
}

/**
 * Analytics data export response
 */
export interface AnalyticsDataExport {
  format: "json" | "csv";
  data: Array<Record<string, unknown>>;
  count: number;
  error?: string;
}


