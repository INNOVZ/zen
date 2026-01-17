/**
 * User Types
 * 
 * Types related to user accounts and authentication.
 */

import type { BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity } from "./base";

// Re-export base types for convenience
export type { BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity } from "./base";

/**
 * Organization information
 */
export interface Organization extends BaseEntity {
  name: string;
  plan_id: string;
}

/**
 * User account information
 */
export interface UserInfo extends BaseEntity, BaseEntityWithTimestamps, BaseOrganizationEntity {
  user_id: string;
  email: string;
  role: string;
  full_name?: string;
  display_name?: string;
  name?: string;// Alias for full_name for compatibility
  organization: Organization | null;
  last_login?: string;
  current_subscription_id?: string;
}

