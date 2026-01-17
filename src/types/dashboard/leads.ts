/**
 * Lead Management Types - Compatibility Shim
 * 
 * @deprecated Import from '@/app/api/types' instead
 * This file exists for backward compatibility with existing imports.
 */

// Re-export Lead types from API types
export type {
  LeadSource,
  LeadStatus,
  LeadInfo,
  LeadsResponse,
  LeadsStats,
  CreateLeadRequest,
  UpdateLeadRequest,
} from "@/app/api/types";
