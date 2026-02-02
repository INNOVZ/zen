import { memo } from "react";
import { MessageSquare } from "lucide-react";
import { ConversationsCardProps } from "@/types/dashboard";
import { useTranslation } from "@/contexts/I18nContext";

export const ConversationsCard = memo<ConversationsCardProps>(
  ({
    conversations,
    totalConversations,
    loading,
    conversationCount,
    conversationCountLoading,
  }) => {
    const { t } = useTranslation();
    return (
      <div
        className="p-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 hover:shadow-blue-200 border shadow-sm"
        role="article"
        aria-label={t("dashboard.conversations_statistics_aria")}
      >
        <div className="flex items-center justify-between">
          <div>
            <MessageSquare
              size={20}
              className="text-[#020617]"
              aria-hidden="true"
            />
            <p className="mt-2 text-sm font-medium text-[#0a0a60]">
              {t("dashboard.active_conversations")}
            </p>
          </div>
          <div className="text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white">
            {conversationCountLoading ? (
              <div
                className="flex items-center space-x-1"
                role="status"
                aria-label={t("dashboard.loading_conversation_count_aria")}
              >
                <div className="animate-pulse bg-white/30 rounded-full w-4 h-4" />
                <span className="text-sm animate-pulse">0</span>
              </div>
            ) : typeof conversationCount === "number" && conversationCount > 0 ? (
              <span aria-label={t("dashboard.conversations_count_aria", { count: conversationCount.toString() })}>
                {conversationCount}
              </span>
            ) : conversations.length > 0 ? (
              <span aria-label={t("dashboard.conversations_count_aria", { count: totalConversations.toString() })}>
                {totalConversations}
              </span>
            ) : (
              <span className="text-md" aria-label={t("dashboard.no_conversations_aria")}>
                0
              </span>
            )}
          </div>
        </div>
        {!loading && conversations.length === 0 && (
          <div className="mt-2 text-center"></div>
        )}
      </div>
    );
  }
);

ConversationsCard.displayName = "ConversationsCard";
