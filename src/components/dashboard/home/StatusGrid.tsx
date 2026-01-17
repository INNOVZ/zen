import { memo } from "react";
import { Users, CheckCircle2 } from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { StatusCard } from "./StatusCard";
import { ConversationsCard } from "./ConversationsCard";
import { StatusGridProps, DASHBOARD_CONFIG } from "@/types/dashboard";

export const StatusGrid = memo<StatusGridProps>(
  ({
    stats,
    conversationsLoaded,
    conversations,
    loading,
    conversationCount,
    conversationCountLoading,
    onCreateConversation,
    resolutionRate,
  }) => (
    <section
      aria-label="Dashboard Statistics"
      className={DASHBOARD_CONFIG.STATS_GRID_CLASSES}
    >
      {/* <h2 className="text-gray-500 font-bold sr-only">Dashboard Statistics</h2> */}

      <ConversationsCard
        conversationsLoaded={conversationsLoaded}
        conversations={conversations}
        totalConversations={stats.totalConversations}
        loading={loading}
        conversationCount={conversationCount}
        conversationCountLoading={conversationCountLoading}
        onCreateClick={onCreateConversation}
      />
      <StatusCard icon={Users} title="Total Leads" value={stats.totalLeads} />

      <StatusCard
        icon={CheckCircle2}
        title={"Resolution Rate (%)"}
        value={Math.round((resolutionRate ?? 85.2) * 10) / 10}
      />

      <StatusCard
        icon={RiRobot3Line}
        title="Total Chatbots"
        value={stats.totalChatbots}
      />
    </section>
  )
);

StatusGrid.displayName = "StatusGrid";
