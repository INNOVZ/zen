import { memo } from "react";
import type { ConversationInfo } from "@/types";
import { ConversationsFilters } from "./ConversationsFilters";
import { ConversationItem } from "./ConversationItem";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/I18nContext";
import { Loader2 } from "lucide-react";

interface ConversationsSidebarProps {
  conversations: ConversationInfo[];
  activeId: string | null;
  searchQuery: string;
  isLoadingMore: boolean;
  hasMore: boolean;
  onSearchChange: (query: string) => void;
  onSelect: (id: string) => void;
  onLoadMore: () => void;
  onFormatDate: (dateString: string) => string;
}

export const ConversationsSidebar = memo<ConversationsSidebarProps>(
  ({
    conversations,
    activeId,
    searchQuery,
    isLoadingMore,
    hasMore,
    onSearchChange,
    onSelect,
    onLoadMore,
    onFormatDate,
  }) => {
    const { t } = useTranslation();

    return (
      <div className="w-full md:w-80 lg:w-96 flex flex-col border-r h-full bg-background">
        <div className="p-4 border-b">
          <ConversationsFilters
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground text-sm">
              {searchQuery
                ? t("conversations.no_search_results")
                : t("conversations.no_conversations")}
            </div>
          ) : (
            <div className="flex flex-col">
              {conversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={conv.id === activeId}
                  onClick={() => onSelect(conv.id)}
                  onFormatDate={onFormatDate}
                />
              ))}
              {hasMore && (
                <div className="p-4 flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onLoadMore}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t("conversations.load_more")}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ConversationsSidebar.displayName = "ConversationsSidebar";
