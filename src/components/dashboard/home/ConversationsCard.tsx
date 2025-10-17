import { memo } from "react";
import { MessageSquare } from "lucide-react";
import { ConversationsCardProps } from "@/types/dashboard";

export const ConversationsCard = memo<ConversationsCardProps>(
  ({
    conversations,
    totalConversations,
    loading,
    conversationCount,
    conversationCountLoading,
  }) => (
    <div
      className="px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm"
      role="article"
      aria-label="Conversations statistics"
    >
      <div className="flex items-center justify-between">
        <div>
          <MessageSquare
            size={20}
            className="text-[#020617]"
            aria-hidden="true"
          />
          <p className="mt-2 text-sm font-medium text-[#0a0a60]">
            Conversations
          </p>
        </div>
        <div className="text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white">
          {conversationCountLoading ? (
            <div
              className="flex items-center space-x-1"
              role="status"
              aria-label="Loading conversation count"
            >
              <div className="animate-pulse bg-white/30 rounded-full w-4 h-4" />
              <span className="text-sm animate-pulse">0</span>
            </div>
          ) : typeof conversationCount === "number" && conversationCount > 0 ? (
            <span aria-label={`${conversationCount} conversations`}>
              {conversationCount}
            </span>
          ) : conversations.length > 0 ? (
            <span aria-label={`${totalConversations} conversations`}>
              {totalConversations}
            </span>
          ) : (
            <span className="text-md" aria-label="No conversations">
              0
            </span>
          )}
        </div>
      </div>
      {!loading && conversations.length === 0 && (
        <div className="mt-2 text-center"></div>
      )}
    </div>
  )
);

ConversationsCard.displayName = "ConversationsCard";
