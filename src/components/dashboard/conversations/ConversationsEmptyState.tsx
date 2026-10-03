import { memo } from "react";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ConversationsEmptyStateProps {
  searchQuery: string;
}

export const ConversationsEmptyState = memo<ConversationsEmptyStateProps>(
  ({ searchQuery }) => {
    const { t } = useTranslation();
    return (
      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground font-medium">
          {searchQuery
            ? t("conversations.no_search_results")
            : t("conversations.no_conversations")}
        </p>
        {!searchQuery && (
          <p className="text-sm text-muted-foreground mt-2">
            {t("conversations.empty_hint")}
          </p>
        )}
      </div>
    );
  }
);

ConversationsEmptyState.displayName = "ConversationsEmptyState";
