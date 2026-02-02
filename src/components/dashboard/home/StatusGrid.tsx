import { memo } from "react";
import { Users, CheckCircle2 } from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { StatusCard } from "./StatusCard";
import { ConversationsCard } from "./ConversationsCard";
import { StatusGridProps, DASHBOARD_CONFIG } from "@/types/dashboard";
import { useTranslation } from "@/contexts/I18nContext";

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
  }) => {
    const { t } = useTranslation();
    return (
      <section
        aria-label={t("dashboard.statistics_aria")}
        className={DASHBOARD_CONFIG.STATS_GRID_CLASSES}
      >
        <ConversationsCard
          conversationsLoaded={conversationsLoaded}
          conversations={conversations}
          totalConversations={stats?.totalConversations ?? 0}
          loading={loading}
          conversationCount={conversationCount}
          conversationCountLoading={conversationCountLoading}
          onCreateClick={onCreateConversation}
        />
        <StatusCard icon={Users} title={t("leads.total_leads")} value={stats?.totalLeads ?? 0} />

        <StatusCard
          icon={CheckCircle2}
          title={t("dashboard.resolution_rate") + " (%)"}
          value={Math.round((resolutionRate ?? 0) * 10) / 10}
        />

        <StatusCard
          icon={RiRobot3Line}
          title={t("dashboard.total_chatbots")}
          value={stats?.totalChatbots ?? 0}
        />
      </section>
    );
  }
);

StatusGrid.displayName = "StatusGrid";
