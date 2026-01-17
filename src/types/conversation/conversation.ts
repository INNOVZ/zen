/**
 * Conversation Domain Types
 */

import { BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity } from "../common";

/**
 * Message information in conversation
 */
export interface Message extends BaseEntity, BaseEntityWithTimestamps {
  conversation_id: string;
  content: string;
  sender: "user" | "chatbot";
  metadata: Record<string, unknown>;
}

/**
 * Conversation information and metadata
 */
export interface ConversationInfo
  extends BaseEntity,
  BaseEntityWithTimestamps,
  BaseOrganizationEntity {
  chatbot_id: string;
  session_id: string;
  user_identifier?: string;
  channel: string;
  title?: string;
  status: "active" | "closed" | "archived";
  metadata: Record<string, unknown>;
  last_message_at: string;
  message_count?: number;
}

/**
 * Conversation with full message history
 */
export interface ConversationWithMessages extends ConversationInfo {
  messages: Message[];
}

/**
 * Conversation summary for listing/display
 */
export interface ConversationSummary
  extends Omit<ConversationInfo, "metadata"> {
  last_message_preview?: string;
}
