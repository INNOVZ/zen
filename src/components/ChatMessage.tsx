"use client";

import { memo } from "react";
import { Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageButton {
  text: string;
  value: string;
  type?: string;
}

export interface ChatMessageProps {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  sources?: string[];
  buttons?: MessageButton[];
  botColor?: string;
  onButtonClick?: (value: string) => void;
}

/**
 * Memoized Chat Message Component
 * Only re-renders when message content, buttons, or sources change
 */
export const ChatMessage = memo(
  function ChatMessage({
    type,
    content,
    sources,
    buttons,
    botColor,
    onButtonClick,
  }: ChatMessageProps) {
    return (
      <div
        className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-[85%] p-2 rounded-lg text-sm ${
            type === "user" ? "text-white ml-2" : "bg-gray-100 mr-2"
          }`}
          style={{
            backgroundColor: type === "user" ? botColor : undefined,
          }}
        >
          <div className="flex items-start gap-2">
            {type === "bot" && (
              <Bot className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
            )}
            {type === "user" && (
              <User className="h-3 w-3 text-white mt-0.5 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="whitespace-pre-wrap">{content}</p>

              {sources && sources.length > 0 && (
                <div className="mt-1 text-xs text-gray-500">
                  Sources: {sources.length} document(s)
                </div>
              )}

              {buttons && buttons.length > 0 && (
                <div className="mt-3 flex flex-col gap-2">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="outline"
                      className="w-full text-left justify-start hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => onButtonClick?.(button.value)}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison: only re-render if these specific props change
    return (
      prevProps.id === nextProps.id &&
      prevProps.content === nextProps.content &&
      prevProps.buttons?.length === nextProps.buttons?.length &&
      prevProps.sources?.length === nextProps.sources?.length &&
      prevProps.type === nextProps.type &&
      prevProps.botColor === nextProps.botColor
    );
  }
);
