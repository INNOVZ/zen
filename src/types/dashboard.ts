import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

// Dashboard Statistics Interface
export interface DashboardStats {
  totalChatbots: number;
  totalUploads: number;
  totalConversations: number;
  activeUsers: number;
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
  conversations: unknown[];
  totalConversations: number;
  loading: boolean;
  conversationCount?: number;
  conversationCountLoading?: boolean;
  onCreateClick: () => void;
}

export interface DashboardHeaderProps {
  user: {
    id: string;
    email: string;
    name?: string;
  } | null;
  userId: string;
  onTrainClick: () => void;
  onCustomizeClick: () => void;
}

export interface QuickActionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  onClick: () => void;
}

export interface QuickActionsGridProps {
  actions: QuickActionProps[];
}

export interface StatusGridProps {
  stats: DashboardStats;
  conversationsLoaded: boolean;
  conversations: unknown[];
  loading: boolean;
  conversationCount?: number;
  conversationCountLoading?: boolean;
  onCreateConversation: () => void;
}

// Dashboard Configuration
export const DASHBOARD_CONFIG = {
  SKELETON_ITEMS_COUNT: 4,
  STATS_GRID_CLASSES: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
  QUICK_ACTIONS_GRID_CLASSES: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
  CONTAINER_CLASSES: "mx-auto ml-[4.1vw] bg-white rounded-l-3xl space-y-6 shadow-lg",
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
