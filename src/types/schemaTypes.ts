
// DB types

// Base types
export interface BaseEntity {
  id: string;
}

// User types
export interface User extends BaseEntity {
  email: string;
  name?: string;
  display_name?: string;
  avatar_url?: string;
  user_metadata?: Record<string, unknown>;
}

export interface Organization extends BaseEntity {
  name: string;
  email: string;
  plan_id: string;
  owner_id: string;
}

export interface UserProfile extends User {
  role: 'admin' | 'user' | 'viewer';
  org_id?: string;
  organization?: Organization;
}

// Chatbot types
export interface ChatbotInfo extends BaseEntity {
  org_id?: string;
  name: string;
  avatar_url?: string;
  color_hex: string;
  tone: string;
  behavior: string;
  chain_status: string;
  trainer_at: string;
  created_at: string;
  description: string;  
  system_prompt?: string;
  greeting_message?: string;
  fallback_message?: string;
  ai_model_config: {
    model: string;
    temperature: number;
    max_tokens: number;
  };
  user_id?: string;
  status: string;
deployment_config: {
  url: string;
  headers: Record<string, string>;
  method: string;
};
  is_active: boolean;
  template_id?: string;
}

// Upload types
export interface UploadFile extends BaseEntity {
    id: string;
  filename: string;
  size: number;
  uploadDate: string;
  url: string;
  type?: string;
  source?: string;
  created_at?: string;
//   org_id: string;
  source_url?: string;
  status: string;
  error_message?: string | unknown;
  pinecone_namespace?: string;
  organization_id?: string;
}
export interface ConversationInfo {
  id: string;
  org_id: string;
  chatbot_id: string;
  session_id: string;
  user_identifier?: string;
  channel: string;
  title?: string;
  status: "active" | "closed" | "archived";
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  last_message_at: string;
  message_count?: number;
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
// API Response types
// export interface ApiResponse<T = any> {
//   data: T;
//   message?: string;
//   success: boolean;
// }

// export interface PaginatedResponse<T> extends ApiResponse<T[]> {
//   pagination: {
//     page: number;
//     limit: number;
//     total: number;
//     totalPages: number;
//   };
// }

// // Chat types
// export interface ChatMessage {
//   id: string;
//   content: string;
//   role: 'user' | 'assistant';
//   timestamp: string;
//   conversation_id: string;
// }

// export interface ChatResponse {
//   response: string;
//   conversation_id?: string;
//   sources?: string[];
// }

// // Component props types
// export interface DashboardStats {
//   totalChatbots: number;
//   totalUploads: number;
//   totalConversations: number;
//   activeUsers: number;
// }

// // Form types
// export interface ChatbotFormData {
//   name: string;
//   description?: string;
//   greeting_message?: string;
//   color_hex: string;
//   tone: string;
//   behavior: string;
// }

// // Error types
// export interface ApiError {
//   message: string;
//   code?: string;
//   status?: number;
//   details?: Record<string, any>;
// }