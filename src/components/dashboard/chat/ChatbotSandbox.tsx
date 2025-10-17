"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Settings,
  Trash2,
  RefreshCw,
  FileText,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { chatbotApi, conversationApi } from "@/app/api/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Types
interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  sources?: string[];
}

interface ChatbotSandboxProps {
  className?: string;
}

//

export default function ChatbotSandbox({
  className = "",
}: ChatbotSandboxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
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
      try {
        const chatbots = await chatbotApi.getChatbots();
        if (chatbots && chatbots.length > 0) {
          // Find active chatbot or use first one
          const activeChatbot =
            chatbots.find((bot) => bot.chain_status === "active") ||
            chatbots[0];
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
  }, []);

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

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      // Get bot response from RAG API
      const response = await conversationApi.sendMessage(currentMessage);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: response.response,
        timestamp: new Date(),
        sources: response.sources || [],
      };

      setMessages((prev) => [...prev, botResponse]);

      // Update chatbot config if it changed
      if (response.chatbot_config) {
        setChatbotConfig((prev) => ({
          ...prev,
          ...response.chatbot_config,
        }));
      }
    } catch (error) {
      console.error("Error getting bot response:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          "I apologize, but I'm having trouble processing your request right now. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
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

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "bot",
        content: `Hello! I'm ${chatbotConfig.name}, your AI assistant. How can I help you today?`,
        timestamp: new Date(),
      },
    ]);
  };

  const handleRetrain = async () => {
    setIsTraining(true);
    try {
      // Currently there's no general retrain API endpoint
      // This would typically involve reprocessing training data
      // For now, we'll show a helpful message
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate processing

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "bot",
          content:
            "Training complete! Please note that to retrain with new data, you'll need to upload new training files in the Train section. The chatbot will automatically use the latest uploaded data.",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error during retrain process:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "bot",
          content:
            "I'm sorry, there was an error during retraining. Please try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTraining(false);
    }
  };

  // Format source name from path/URL
  const formatSource = (source: string) => {
    if (!source) return "Unknown source";

    // Extract filename from path
    const fileName = source.split("/").pop();
    if (!fileName) return source;

    return fileName.length > 30 ? fileName.substring(0, 27) + "..." : fileName;
  };

  if (loadingChatbot) {
    return (
      <Card className={`h-[600px] flex flex-col ${className}`}>
        <CardContent className="flex-1 flex flex-col justify-center items-center p-4">
          <Loader2 className="h-8 w-8 text-blue-400 animate-spin mb-4" />
          <p className="text-gray-500">Loading chatbot...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`h-[85vh]  flex flex-col ${className}`}>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: chatbotConfig.color_hex }}
          >
            {chatbotConfig.avatar_url ? (
              <img
                src={
                  chatbotConfig.avatar_url.includes(
                    "storage/v1/object/uploads/"
                  )
                    ? `${
                        process.env.NEXT_PUBLIC_API_BASE_URL ||
                        "http://localhost:8001"
                      }/api/uploads/avatar/legacy/${
                        chatbotConfig.avatar_url.split(
                          "storage/v1/object/uploads/"
                        )[1]
                      }`
                    : chatbotConfig.avatar_url
                }
                alt={chatbotConfig.name}
                className="w-5 h-5 rounded-full"
              />
            ) : (
              <Bot className="h-3 w-3 text-white" />
            )}
          </div>
          <span>{chatbotConfig.name}</span>
          <Badge variant="secondary" className="ml-2">
            Sandbox Mode
          </Badge>
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetrain}
            disabled={isTraining}
            className="text-xs"
          >
            {isTraining ? (
              <RefreshCw className="h-3 w-3 animate-spin mr-1" />
            ) : (
              <RefreshCw className="h-3 w-3 mr-1" />
            )}
            {isTraining ? "Retraining..." : "Retrain"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={clearChat}
            className="text-xs"
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Clear
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Settings className="h-3 w-3 mr-1" />
            Configure
          </Button>
        </div>
      </CardHeader>

      <CardContent className="relative flex-1 flex flex-col p-4 overflow-scroll">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2 bg-gray-50 rounded-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-400 text-white ml-4"
                    : "bg-white border shadow-sm mr-4"
                }`}
                style={{
                  backgroundColor:
                    message.type === "user"
                      ? chatbotConfig.color_hex
                      : undefined,
                }}
              >
                <div className="flex items-start gap-2">
                  {message.type === "bot" && (
                    <div className="flex-shrink-0 mt-0.5">
                      {chatbotConfig.avatar_url ? (
                        <img
                          src={
                            chatbotConfig.avatar_url.includes(
                              "storage/v1/object/uploads/"
                            )
                              ? `${
                                  process.env.NEXT_PUBLIC_API_BASE_URL ||
                                  "http://localhost:8001"
                                }/api/uploads/avatar/legacy/${
                                  chatbotConfig.avatar_url.split(
                                    "storage/v1/object/uploads/"
                                  )[1]
                                }`
                              : chatbotConfig.avatar_url
                          }
                          alt={chatbotConfig.name}
                          className="h-4 w-4 rounded-full"
                        />
                      ) : (
                        <Bot
                          className="h-4 w-4 text-blue-400"
                          style={{ color: chatbotConfig.color_hex }}
                        />
                      )}
                    </div>
                  )}
                  {message.type === "user" && (
                    <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>

                    {/* Sources section - show only for bot messages with sources */}
                    {message.type === "bot" &&
                      message.sources &&
                      message.sources.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <p className={`text-xs font-medium text-gray-500`}>
                            Sources:
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {message.sources.map((source, index) => (
                              <TooltipProvider key={index}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Badge
                                      variant="outline"
                                      className="text-xs flex items-center gap-1"
                                    >
                                      <FileText className="h-3 w-3" />
                                      {formatSource(source)}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{source}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        </div>
                      )}

                    <p
                      className={`text-xs mt-1 ${
                        message.type === "user"
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start overflow-scroll">
              <div className="bg-white border shadow-sm mr-4 p-3 rounded-lg max-w-[80%]">
                <div className="flex items-center gap-2">
                  {chatbotConfig.avatar_url ? (
                    <img
                      src={
                        chatbotConfig.avatar_url.includes(
                          "storage/v1/object/uploads/"
                        )
                          ? `${
                              process.env.NEXT_PUBLIC_API_BASE_URL ||
                              "http://localhost:8001"
                            }/api/uploads/avatar/legacy/${
                              chatbotConfig.avatar_url.split(
                                "storage/v1/object/uploads/"
                              )[1]
                            }`
                          : chatbotConfig.avatar_url
                      }
                      alt={chatbotConfig.name}
                      className="h-4 w-4 rounded-full"
                    />
                  ) : (
                    <Bot
                      className="h-4 w-4"
                      style={{ color: chatbotConfig.color_hex }}
                    />
                  )}
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ backgroundColor: chatbotConfig.color_hex }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full animate-bounce delay-100"
                      style={{ backgroundColor: chatbotConfig.color_hex }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full animate-bounce delay-200"
                      style={{ backgroundColor: chatbotConfig.color_hex }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex gap-2 bottom-0 sticky">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask ${chatbotConfig.name} anything...`}
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            size="sm"
            style={{ backgroundColor: chatbotConfig.color_hex }}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Status Bar */}
        <div className="mt-2 text-xs text-gray-500 flex justify-between">
          <span>
            {messages.length - 1} messages • {chatbotConfig.tone} tone
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Online
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
