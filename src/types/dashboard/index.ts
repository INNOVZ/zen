/**
 * Dashboard Types Barrel Export
 * 
 * Centralized export for all dashboard-related types.
 */

// Dashboard statistics
export type {
    DashboardStats,
    RecentActivity,
    DashboardMetrics,
    DashboardSummary,
    StatusCardProps,
    ConversationsCardProps,
    DashboardHeaderProps,
    QuickActionProps,
    QuickActionsGridProps,
    StatusGridProps,
    DashboardError,
} from "./stats";

export { DASHBOARD_CONFIG, DashboardSection } from "./stats";

// Lead management
export type {
    LeadSource,
    LeadStatus,
    LeadInfo,
    LeadsResponse,
    LeadsStats,
    CreateLeadRequest,
    UpdateLeadRequest,
} from "./leads";
