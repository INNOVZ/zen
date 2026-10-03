import { memo } from "react";
import type { ConversationInfo } from "@/types";
import { MessageSquare, Clock } from "lucide-react";

interface ConversationItemProps {
  conversation: ConversationInfo;
  isActive: boolean;
  onClick: () => void;
  onFormatDate: (dateString: string) => string;
}

export const ConversationItem = memo<ConversationItemProps>(
  ({ conversation, isActive, onClick, onFormatDate }) => {
    return (
      <div
        onClick={onClick}
        className={`flex items-start gap-3 p-3 cursor-pointer border-b transition-colors ${
          isActive
            ? "bg-primary/10 border-l-4 border-l-primary"
            : "hover:bg-muted/50 border-l-4 border-l-transparent"
        }`}
      >
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
          }`}
        >
          <MessageSquare className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-semibold text-sm truncate pr-2">
              {conversation.title ||
                conversation.session_id?.slice(0, 12) + "..." ||
                "Untitled"}
            </h3>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {conversation.last_message_at
                ? onFormatDate(conversation.last_message_at)
                : ""}
            </span>
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {conversation.user_identifier || "Anonymous User"} • {conversation.status}
          </p>
        </div>
      </div>
    );
  }
);

ConversationItem.displayName = "ConversationItem";
