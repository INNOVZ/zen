/**
 * Channel Configuration Types
 * Defines types for communication channels (WhatsApp, Website, Messenger, etc.)
 */

/**
 * Information about a supported channel
 */
export interface ChannelInfo {
  name: string;
  description: string;
  icon: string;
  typical_use_cases: string[];
}

/**
 * Supported communication channels
 */
export interface SupportedChannels {
  website?: ChannelInfo;
  whatsapp?: ChannelInfo;
  messenger?: ChannelInfo;
  instagram?: ChannelInfo;
  api?: ChannelInfo;
  mobile_app?: ChannelInfo;
  [key: string]: ChannelInfo | undefined;
}

/**
 * Configuration for a specific channel
 */
export interface ChannelConfiguration {
  enabled: boolean;
  rate_limit_per_minute?: number;
  max_message_length?: number;
  custom_token_multiplier?: number;
  priority_level?: number;
  webhook_url?: string;
  custom_settings?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
}

/**
 * Collection of channel configurations
 */
export interface ChannelConfigurations {
  [channel: string]: ChannelConfiguration;
}

/**
 * Channel usage statistics
 */
export interface ChannelUsage {
  channel: string;
  messages_sent: number;
  messages_received: number;
  conversations: number;
  tokens_used: number;
  last_activity: string;
}
