/**
 * Base Entity Types
 * 
 * Common base interfaces for all entities in the system.
 */

/**
 * Base entity with just an ID
 */
export interface BaseEntity {
  id: string;
}

/**
 * Base entity with ID and timestamps
 */
export interface BaseEntityWithTimestamps extends BaseEntity {
  created_at: string;
  updated_at?: string;
}

/**
 * Base entity with organization context
 */
export interface BaseOrganizationEntity {
  org_id: string;
}



