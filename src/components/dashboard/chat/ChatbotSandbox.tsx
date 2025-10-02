"use client";

import { useState, useRef, useEffect } from "react";
import { FileText, Loader2 } from "lucide-react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { conversationApi, chatbotApi } from "@/api";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { DETACHED_MODE } from "@/config/detached-mode";

// Types
interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  sources?: Array<{
    title: string;
    content: string;
    url?: string;
  }>;
}

interface ChatbotSandboxProps {
  className?: string;
  chatbotId?: string; // Add chatbotId prop for detached mode
}

//

export default function ChatbotSandbox({
  className = "",
  chatbotId,
}: ChatbotSandboxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotConfig, setChatbotConfig] = useState({
    name: "ZaaKy",
    avatar_url: "",
    color_hex: "#6a8fff",
    tone: "helpful",
  });
  const [loadingChatbot, setLoadingChatbot] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chatbot configuration
  useEffect(() => {
    const loadChatbot = async () => {
      if (DETACHED_MODE && chatbotId) {
        try {
          // Fetch public chatbot config (no auth)
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/public/chatbot/${chatbotId}/config`
          );
          if (!response.ok) throw new Error("Failed to fetch chatbot config");
          const config = await response.json();
          setChatbotConfig({
            name: config.name,
            avatar_url: config.avatar_url,
            color_hex: config.color_hex,
            tone: config.tone || "helpful",
          });
          setMessages([
            {
              id: "1",
              type: "bot",
              content: config.greeting_message,
              timestamp: new Date(),
            },
          ]);
        } catch {
          setMessages([
            {
              id: "1",
              type: "bot",
              content: "Unable to load chatbot configuration.",
              timestamp: new Date(),
            },
          ]);
        } finally {
          setLoadingChatbot(false);
        }
        return;
      }
      try {
        const chatbots = await chatbotApi.getChatbots();
        if (chatbots && chatbots.length > 0) {
          // Find active chatbot or use first one
          const activeChatbot =
            chatbots.find((bot) => bot.chain_status === "active") ||
            chatbots[0];

          if (!activeChatbot) {
            throw new Error("No chatbots available");
          }

          const config = await chatbotApi.getChatbot(activeChatbot.id);

          setChatbotConfig({
            name: config.name || "ZaaKy",
            avatar_url: config.avatar_url || "",
            color_hex: config.color_hex || "#3B82F6",
            tone: config.tone || "helpful",
          });

          // Set initial greeting
          setMessages([
            {
              id: "1",
              type: "bot",
              content: `${config.greeting_message}`,
              timestamp: new Date(),
            },
          ]);
        }
      } catch (error) {
        console.error("Error loading chatbot config:", error);
        // Fall back to default greeting
        setMessages([
          {
            id: "1",
            type: "bot",
            content: "Hello! I'm your AI assistant. How can I help you today?",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setLoadingChatbot(false);
      }
    };

    loadChatbot();
  }, [chatbotId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsTyping(true);
    try {
      let botResponse: Message;
      if (DETACHED_MODE && chatbotId) {
        // Send message to public chat endpoint (no auth)
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/public/chat`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: currentMessage,
              chatbot_id: chatbotId,
              session_id: "anonymous",
            }),
          }
        );
        if (!response.ok) throw new Error("Failed to get chatbot reply");
        const data = await response.json();
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: data.response,
          timestamp: new Date(),
        };
        // Optionally update chatbot config if returned
        if (data.chatbot) {
          setChatbotConfig((prev) => ({ ...prev, ...data.chatbot }));
        }
      } else {
        // Get bot response from RAG API
        const response = await conversationApi.sendMessage(currentMessage);

        // Transform sources to handle both string[] and object[] formats
        const transformedSources =
          response.sources?.map(
            (
              source: string | { title: string; content: string; url?: string }
            ) => {
              if (typeof source === "string") {
                // Extract filename from path for better display
                const title = source.split("/").pop() || source;
                return { title, content: source, url: source };
              }
              return source;
            }
          ) || [];

        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: response.response,
          timestamp: new Date(),
          sources: transformedSources,
        };

        // Update chatbot config if it changed
        if (response.chatbot_config) {
          setChatbotConfig((prev) => ({
            ...prev,
            ...response.chatbot_config,
          }));
        }
      }
      setMessages((prev: Message[]) => [...prev, botResponse]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content:
            "I apologize, but I'm having trouble processing your request right now. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format source name from source object
  const formatSource = (source: {
    title: string;
    content: string;
    url?: string;
  }) => {
    if (!source || !source.title) return "Unknown source";

    return source.title.length > 30
      ? source.title.substring(0, 27) + "..."
      : source.title;
  };

  if (loadingChatbot) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-[600px] bg-gray-50 rounded-xl shadow-md ${className}`}
      >
        <Loader2 className="h-8 w-8 text-blue-400 animate-spin mb-4" />
        <p className="text-gray-500">Loading chatbot...</p>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col h-[80vh] w-full max-w-2xl mx-auto ${className}`}
    >
      {/* Chat Area */}
      <div
        className="flex-1 overflow-y-auto px-6 py-4 border-none"
        style={{ minHeight: "0" }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-3 ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl shadow-sm text-sm whitespace-pre-wrap ${
                message.type === "user"
                  ? "bg-[#5D7DDE] text-white"
                  : "bg-black  border border-gray-200 text-white"
              }`}
              style={
                message.type === "user"
                  ? { backgroundColor: chatbotConfig.color_hex }
                  : {}
              }
            >
              {message.content}
              {message.type === "bot" &&
                message.sources &&
                message.sources.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-400">
                      Sources:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {message.sources.map((source, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs flex items-center gap-1"
                        >
                          <FileText className="h-3 w-3" />
                          {formatSource(source)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              <span className="block text-[10px] text-gray-300 mt-1 text-right">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-3">
            <div className="bg-black text-white border border-gray-200 p-3 rounded-2xl shadow-sm max-w-[70%]">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full animate-bounce bg-blue-400" />
                <div className="w-2 h-2 rounded-full animate-bounce bg-blue-400 delay-100" />
                <div className="w-2 h-2 rounded-full animate-bounce bg-blue-400 delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="sticky bottom-0 bg-white px-6 py-4 border-t flex gap-2 items-center rounded-b-xl">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Send a message to ${chatbotConfig.name}...`}
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 border border-gray-200"
          disabled={isTyping}
        />
        <Button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isTyping}
          size="icon"
          style={{ backgroundColor: chatbotConfig.color_hex }}
          className="rounded-full shadow-md"
        >
          <PaperPlaneIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
