/**
 * Dashboard Statistics Types
 */

import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import type { UserInfo } from "../common/user";
import type { ConversationInfo } from "../conversation";

export interface DashboardStats {
  totalChatbots: number;
  totalLeads: number;
  totalConversations: number;
  activeUsers: number;
  totalUploads?: number;
}

export interface RecentActivity {
  id: string;
  type: "conversation" | "lead" | "upload" | "chatbot";
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface DashboardMetrics {
  totalQueries: number;
  avgResponseTime: number;
  successRate: number;
  totalUsers: number;
}

export interface DashboardSummary {
  stats: DashboardStats;
  recentActivity: RecentActivity[];
  metrics: DashboardMetrics;
}

// Component Props Interfaces
export interface StatusCardProps {
  icon: LucideIcon | IconType;
  title: string;
  value: number;
  className?: string;
  isLoading?: boolean;
}

export interface ConversationsCardProps {
  conversationsLoaded: boolean;
  conversations: ConversationInfo[];
  totalConversations: number;
  loading: boolean;
  conversationCount?: number;
  conversationCountLoading?: boolean;
  onCreateClick: () => void;
}

export interface DashboardHeaderProps {
  user: UserInfo | null;
  userId: string;
  onTrainClick: () => void;
  onCustomizeClick: () => void;
}

export interface QuickActionProps {
  id: string;
  icon: React.ComponentType<{ className?: string }> | LucideIcon;
  title: string;
  onClick: () => void;
}

export interface QuickActionsGridProps {
  actions: QuickActionProps[];
}

export interface StatusGridProps {
  stats: DashboardStats;
  conversationsLoaded: boolean;
  conversations: ConversationInfo[];
  loading: boolean;
  conversationCount?: number;
  conversationCountLoading?: boolean;
  onCreateConversation: () => void;
  resolutionRate?: number; // percentage value (e.g., 85.2)
}

// Dashboard Configuration
export const DASHBOARD_CONFIG = {
  SKELETON_ITEMS_COUNT: 4,
  STATS_GRID_CLASSES: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  QUICK_ACTIONS_GRID_CLASSES: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
  CONTAINER_CLASSES: "mx-auto p-3 ml-[5.3vw] bg-white/70 space-y-6 shadow-lg rounded-2xl",
} as const;

// Dashboard Sections for better organization
export enum DashboardSection {
  HEADER = "header",
  STATS = "stats",
  ANALYTICS = "analytics",
  QUICK_ACTIONS = "quickActions",
}

// Error types for better error handling
export interface DashboardError {
  section: DashboardSection;
  message: string;
  code?: string;
}



