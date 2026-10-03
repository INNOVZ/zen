"use client";

import { useState, useEffect, useCallback } from "react";
import { DASHBOARD_CONFIG } from "@/types/dashboard";
import { conversationApi } from "@/app/api/conversations";
import type { ConversationInfo, ConversationWithMessages } from "@/types";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  ConversationsSidebar,
  ChatArea,
  ConversationsHeader,
} from "@/components/dashboard/conversations";
import { useTranslation } from "@/contexts/I18nContext";

export default function ConversationsPage() {
  const { t, language } = useTranslation();
  
  // Sidebar state
  const [conversations, setConversations] = useState<ConversationInfo[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [hasMore, setHasMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listError, setListError] = useState<string | null>(null);

  // Chat Area state
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [activeDetails, setActiveDetails] = useState<ConversationWithMessages | null>(null);
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const loadConversations = useCallback(
    async (pageNum: number = 1, append: boolean = false) => {
      try {
        if (!append) setIsLoadingList(true);
        else setIsLoadingMore(true);
        setListError(null);

        const response = await conversationApi.getConversationsPaginated(
          pageNum,
          pageSize
        );
        
        if (append) {
          setConversations(prev => [...prev, ...response.conversations]);
        } else {
          setConversations(response.conversations);
        }
        
        setHasMore(pageNum * pageSize < response.total);
        setPage(pageNum);
      } catch (err) {
        console.error("Failed to load conversations:", err);
        setListError(t("common.error_loading"));
        toast.error(t("common.error_loading"));
      } finally {
        setIsLoadingList(false);
        setIsLoadingMore(false);
      }
    },
    [pageSize, t]
  );

  useEffect(() => {
    let active = true;
    void Promise.resolve().then(() => {
      if (active) void loadConversations(1, false);
    });

    return () => {
      active = false;
    };
  }, [loadConversations]);

  // Load chat details when active conversation changes
  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async (id: string) => {
      setIsLoadingChat(true);
      try {
        const details = await conversationApi.getConversationDetails(id);
        if (isMounted) setActiveDetails(details);
      } catch (err) {
        console.warn("Failed to load conversation details:", err);
        toast.error("Failed to load chat history");
        if (isMounted) setActiveDetails(null);
      } finally {
        if (isMounted) setIsLoadingChat(false);
      }
    };

    if (activeConversationId) void fetchDetails(activeConversationId);
    
    return () => { isMounted = false; };
  }, [activeConversationId]);

  const handleSelectConversation = (id: string) => {
    setActiveDetails(null);
    setActiveConversationId(id);
    setIsMobileChatOpen(true);
  };

  const handleLoadMore = () => {
    if (hasMore && !isLoadingMore) {
      loadConversations(page + 1, true);
    }
  };

  const handleDeleteConversation = useCallback(async () => {
    if (!activeConversationId) return;
    
    const confirmed = window.confirm(t("conversations.confirm_delete"));
    if (!confirmed) return;

    try {
      await conversationApi.deleteConversation(activeConversationId);
      toast.success(t("conversations.delete_success"));
      // Clear active selection
      setActiveConversationId(null);
      setActiveDetails(null);
      setIsMobileChatOpen(false);
      // Reload list from page 1 to refresh
      await loadConversations(1, false);
    } catch (err) {
      console.error("Failed to delete conversation:", err);
      toast.error(t("conversations.delete_failed"));
    }
  }, [activeConversationId, loadConversations, t]);

  const filteredConversations = conversations.filter((conv) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      conv.title?.toLowerCase().includes(query) ||
      conv.session_id?.toLowerCase().includes(query) ||
      conv.user_identifier?.toLowerCase().includes(query) ||
      conv.channel?.toLowerCase().includes(query) ||
      conv.status?.toLowerCase().includes(query)
    );
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const locales: Record<string, string> = {
        ar: "ar-EG",
        es: "es-ES",
        de: "de-DE",
        it: "it-IT",
        en: "en-US",
      };

      const locale = locales[language] || "en-US";

      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}>
      <div className="container mx-auto p-4 sm:p-8 space-y-4 flex flex-col h-[85vh]">
        <ConversationsHeader
          isRefreshing={isLoadingList || isLoadingMore}
          onRefresh={() => loadConversations(1, false)}
        />

        {listError && (
          <Alert variant="destructive" className="shrink-0">
            <AlertDescription>{listError}</AlertDescription>
          </Alert>
        )}

        <div className="flex-1 rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex relative min-h-0">
          {/* Sidebar - hidden on mobile when chat is open */}
          <div className={`${isMobileChatOpen ? 'hidden md:flex' : 'flex'} h-full shrink-0 border-r w-full md:w-80 lg:w-96`}>
            {isLoadingList && conversations.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <ConversationsSidebar
                conversations={filteredConversations}
                activeId={activeConversationId}
                searchQuery={searchQuery}
                isLoadingMore={isLoadingMore}
                hasMore={hasMore && !searchQuery} // Only show Load More if not searching
                onSearchChange={setSearchQuery}
                onSelect={handleSelectConversation}
                onLoadMore={handleLoadMore}
                onFormatDate={formatDate}
              />
            )}
          </div>

          {/* Chat Area - hidden on mobile when list is shown */}
          <div className={`${!isMobileChatOpen ? 'hidden md:flex' : 'flex'} flex-1 h-full min-w-0 absolute inset-0 md:static`}>
            <ChatArea
              conversationDetails={activeDetails}
              isLoading={isLoadingChat}
              onDelete={handleDeleteConversation}
              onCloseMobile={() => setIsMobileChatOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
