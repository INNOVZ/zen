// API Types and Interfaces
// This file contains all TypeScript interfaces used across the API modules

export interface TokenHandler {
  wrapApiCall<T>(
    apiCall: () => Promise<T>,
    operationType:
      | "chat"
      | "document_upload"
      | "document_processing"
      | "web_scraping"
      | "embedding_generation",
    messageLength?: number,
    documentSize?: number
  ): Promise<T | null>;
}

export interface ProductLink {
  [key: string]: unknown;
}

export interface MessageButton {
  text: string;
  value: string;
  type?: string;
}

export interface ChatResponse {
  response: string;
  sources: string[];
  product_links: ProductLink[]; // List of product links from backend
  conversation_id: string;
  message_id?: string;
  processing_time_ms: number;
  buttons?: MessageButton[]; // Add buttons support
  context_quality: {
    context_length?: number;
    has_context?: boolean;
    coverage_score?: number;
    quality_tier?: string;
    timestamp?: string;
    [key: string]: unknown;
  };
  chatbot_config: {
    name: string;
    avatar_url?: string;
    color_hex: string;
    tone?: string;
    id?: string;
  };
}

// Updated to match backend ContextEngineeringConfig exactly
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
  retrieval_strategy:
    | "semantic_only"
    | "hybrid"
    | "keyword_boost"
    | "keyword_only"
    | "domain_specific";
  semantic_weight: number;
  keyword_weight: number;
  model_tier: "fast" | "balanced" | "premium" | "enterprise";
  embedding_model: string;
  rerank_model: string;
  enable_semantic_rerank: boolean;
  enable_hallucination_check: boolean;
  enable_source_verification: boolean;
  confidence_threshold: number;
  max_response_time_ms: number;
  enable_caching: boolean;
  cache_ttl_minutes: number;
  domain_filters: Record<string, unknown>;
  business_context: string;
  specialized_instructions: string;
  enable_detailed_logging: boolean;
  log_user_queries: boolean;
  collect_feedback: boolean;
  created_at: string;
  updated_at: string;
}

export interface PerformanceRecommendation {
  type: "performance" | "quality" | "usage";
  issue: string;
  recommendation: string;
  suggested_changes: Record<string, unknown>;
}

export interface PerformanceInsights {
  recommendations: PerformanceRecommendation[];
  confidence: number;
  analysis_date: string;
}

export interface ContextAnalytics {
  org_id: string;
  conversation_id: string;
  message_id: string;
  query_original: string;
  query_enhanced?: string;
  documents_retrieved: number;
  context_length: number;
  context_quality_score: number;
  retrieval_time_ms: number;
  response_time_ms: number;
  model_used: string;
  sources_count: number;
  user_satisfaction?: number;
  feedback_text?: string;
  timestamp: string;
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

// Intent Analytics Types
export interface IntentAnalytics {
  summary: {
    total_queries: number;
    queries_with_intent: number;
    intent_coverage: number;
    unique_intents: number;
    period_days: number;
  };
  intent_distribution: Record<string, number>;
  intent_performance: Record<
    string,
    {
      total_queries: number;
      avg_retrieval_time_ms: number;
      avg_quality_score: number;
      avg_sources_used: number;
      avg_confidence: number;
    }
  >;
  intent_confidence: Record<string, number>;
  detection_methods: Record<string, number>;
  intent_trends: Array<{
    date: string;
    intents: Record<string, number>;
    total: number;
  }>;
  intent_fulfillment: Record<
    string,
    {
      total_queries: number;
      queries_with_feedback: number;
      positive_feedback: number;
      avg_rating: number;
      satisfaction_rate: number;
    }
  >;
  generated_at: string;
}

export interface IntentDetails {
  intent_type: string;
  total_queries: number;
  confidence: {
    average: number;
    min: number;
    max: number;
    distribution: Record<string, number>;
  };
  performance: {
    avg_retrieval_time_ms: number;
    avg_quality_score: number;
    avg_sources_used: number;
  };
  detection_methods: Record<string, number>;
  period_days: number;
  generated_at: string;
  error?: string;
}

export interface IntentAnalyticsResponse {
  success: boolean;
  analytics: IntentAnalytics;
}

export interface IntentDetailsResponse {
  success: boolean;
  details: IntentDetails;
}

export interface FeedbackRequest {
  message_id: string;
  rating: 1 | -1;
  feedback_text?: string;
  feedback_type?: "quality" | "accuracy" | "helpfulness" | "other";
}

export interface RetrainResponse {
  message: string;
  status: string;
}

export interface HealthCheck {
  status: "healthy" | "degraded";
  timestamp: string;
  services: {
    database: "healthy" | "error";
    chat_service: "healthy" | "error";
    context_engine: "healthy" | "error";
  };
  version: string;
  error?: string;
}

// Organization API Types
export interface UpdateOrganizationRequest {
  name: string;
  email: string;
  contact_phone?: string;
  business_type?: string;
}

export interface OrganizationInfo {
  name: string;
  email: string;
  plan_id: string | null;
  contact_phone?: string;
  business_type?: string;
}

export interface OrganizationResponse {
  user: {
    email: string;
  };
  organization: OrganizationInfo;
}

export interface UpdateOrganizationResponse {
  success: boolean;
  message: string;
  organization: {
    name: string;
    email: string;
  };
}
