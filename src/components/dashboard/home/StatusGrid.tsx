import { memo } from "react";
import { Brain } from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { StatusCard } from "./StatusCard";
import { ConversationsCard } from "./ConversationsCard";
import { TokenUsageCard } from "./TokenUsageCard";
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
  }) => (
    <section
      aria-label="Dashboard Statistics"
      className={DASHBOARD_CONFIG.STATS_GRID_CLASSES}
    >
      {/* <h2 className="text-gray-500 font-bold sr-only">Dashboard Statistics</h2> */}

      <StatusCard
        icon={RiRobot3Line}
        title="Total Chatbots"
        value={stats.totalChatbots}
      />

      <StatusCard
        icon={Brain}
        title="Training Files"
        value={stats.totalUploads}
        className="glass-b text-white"
      />

      <ConversationsCard
        conversationsLoaded={conversationsLoaded}
        conversations={conversations}
        totalConversations={stats.totalConversations}
        loading={loading}
        conversationCount={conversationCount}
        conversationCountLoading={conversationCountLoading}
        onCreateClick={onCreateConversation}
      />

      <TokenUsageCard />
    </section>
  )
);

StatusGrid.displayName = "StatusGrid";
