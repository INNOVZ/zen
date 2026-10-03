import { memo, useEffect, useRef } from "react";
import type { ConversationWithMessages } from "@/types";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageSquare, Loader2 } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ChatAreaProps {
  conversationDetails: ConversationWithMessages | null;
  isLoading: boolean;
  onDelete: () => void;
  onCloseMobile?: () => void;
}

export const ChatArea = memo<ChatAreaProps>(
  ({ conversationDetails, isLoading, onDelete, onCloseMobile }) => {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages load
    useEffect(() => {
      if (scrollRef.current && conversationDetails?.messages) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [conversationDetails?.messages]);

    if (isLoading) {
      return (
        <div className="flex-1 flex flex-col h-full bg-muted/10 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      );
    }

    if (!conversationDetails) {
      return (
        <div className="flex-1 flex flex-col h-full bg-muted/10 items-center justify-center p-8 text-center">
          <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
            <MessageSquare className="h-10 w-10 text-muted-foreground/50" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Zentria Chat</h2>
          <p className="text-muted-foreground max-w-md">
            Select a conversation from the list to view the full message history.
          </p>
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col h-full bg-muted/10 relative">
        <ChatHeader
          conversation={conversationDetails}
          onDelete={onDelete}
          onCloseMobile={onCloseMobile}
        />
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {conversationDetails.messages?.length === 0 ? (
            <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
              No messages in this conversation.
            </div>
          ) : (
            conversationDetails.messages?.map((msg: any) => {
              const isBot = msg.sender === "chatbot" || msg.role === "assistant" || msg.role === "system";
              return (
                <ChatMessage
                  key={msg.id}
                  id={msg.id}
                  type={isBot ? "bot" : "user"}
                  content={msg.content}
                  timestamp={new Date(msg.created_at)}
                  botColor="#2563eb" // standard primary color
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
);

ChatArea.displayName = "ChatArea";
