import { memo } from "react";
import type { ConversationInfo } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash2, MessageSquare, X } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ChatHeaderProps {
  conversation: ConversationInfo;
  onDelete: () => void;
  onCloseMobile?: () => void;
}

export const ChatHeader = memo<ChatHeaderProps>(
  ({ conversation, onDelete, onCloseMobile }) => {
    const { t } = useTranslation();

    return (
      <div className="h-16 flex items-center justify-between px-4 border-b bg-background shrink-0">
        <div className="flex items-center gap-3">
          {onCloseMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onCloseMobile}
              className="md:hidden mr-1"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
          <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold">
              {conversation.title ||
                conversation.session_id?.slice(0, 12) + "..." ||
                t("conversations.untitled")}
            </h2>
            <p className="text-xs text-muted-foreground">
              {conversation.user_identifier || "Anonymous User"} • Channel:{" "}
              {conversation.channel || "website"}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="text-muted-foreground hover:text-destructive"
          title={t("conversations.delete_aria")}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    );
  }
);

ChatHeader.displayName = "ChatHeader";
