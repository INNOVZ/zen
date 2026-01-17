import { useMemo, useEffect, useState } from "react";
import { DashboardStats } from "@/types/dashboard";
import { leadsApi } from "@/app/api/leads";
import type { ChatbotInfo, UploadFile, ConversationInfo } from "@/types";

export const useDashboardStats = (
  chatbots: ChatbotInfo[],
  uploads: UploadFile[],
  conversations: ConversationInfo[],
  conversationCount?: number
): DashboardStats => {
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    const fetchLeadsStats = async () => {
      try {
        const stats = await leadsApi.getLeadsStats();
        setTotalLeads(stats.total_leads);
      } catch (error) {
        console.error("Error fetching leads stats:", error);
        setTotalLeads(0);
      }
    };

    fetchLeadsStats();
  }, []);

  return useMemo(
    () => ({
      totalChatbots: chatbots.length,
      totalLeads: totalLeads,
      totalConversations: conversationCount || conversations.length,
      activeUsers: 0, // This could be calculated from analytics data
    }),
    [chatbots.length, totalLeads, conversations.length, conversationCount]
  );
};
