import { useMemo } from "react";
import { DashboardStats } from "@/types/dashboard";

export const useDashboardStats = (
  chatbots: unknown[],
  uploads: unknown[],
  conversations: unknown[],
  conversationCount?: number
): DashboardStats => {
  return useMemo(
    () => ({
      totalChatbots: chatbots.length,
      totalUploads: uploads.length,
      totalConversations: conversationCount || conversations.length,
      activeUsers: 0, // This could be calculated from analytics data
    }),
    [chatbots.length, uploads.length, conversations.length, conversationCount]
  );
};
