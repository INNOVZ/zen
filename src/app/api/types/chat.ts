/**
 * Chat API Types
 */

import type { BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity } from "../../../types/common/base";

/**
 * Uploaded file information
 */
export interface UploadFile extends BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity {
  file_name: string;
  file_type: string;
  file_size: number;
  file_path: string;
  file_url?: string;
  url?: string;
  status: "pending" | "processing" | "completed" | "failed";
  metadata?: Record<string, unknown>;
}

/**
 * Deployment configuration for chatbot
 */
export interface DeploymentConfig {
  url?: string;
  headers?: Record<string, string>;
  method?: string;
}

/**
 * Chatbot information
 */
export interface ChatbotInfo extends BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity {
  id: string;
  name: string;
  description?: string;
  avatar_url?: string;
  settings?: Record<string, unknown>;
  is_active: boolean;
  status?: "active" | "inactive" | "pending" | "disabled";
  user_id?: string;
  ai_model_config?: Record<string, unknown>;
  model_config?: Record<string, unknown>;

  // UI and behavior configuration
  color_hex?: string;
  tone?: string;
  behavior?: string;
  system_prompt?: string;
  greeting_message?: string;
  fallback_message?: string;

  // Training and deployment
  chain_status?: "pending" | "ready" | "training" | "failed";
  trainer_at?: string;
  deployment_config?: DeploymentConfig;
}


