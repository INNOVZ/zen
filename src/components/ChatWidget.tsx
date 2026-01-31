"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { API_BASE_URL } from "@/config/api";
import { Send, Bot, MessageCircle, X, Minus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { conversationApi, chatbotApi } from "@/app/api/routes";
import type { ChatbotInfo } from "@/types";
import { useConnectionErrorHandler } from "@/hooks/useServerConnection";
import { mcpApi } from "@/app/api/mcp";
import Image from "next/image";
import { ChatMessage } from "@/components/ChatMessage";

interface MessageButton {
  text: string;
  value: string;
  type?: string;
}

interface CTAButton {
  id: string;
  label: string;
  message: string;
}

interface ProductCard {
  id?: string | number;
  name: string;
  price?: number;
  currency?: string;
  url?: string;
  image?: string;
  description?: string;
  inventory?: number;
  vendor?: string;
  type?: string;
}

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  sources?: { title: string; url: string; content?: string }[] | string[];
  buttons?: MessageButton[];
  productCards?: ProductCard[];
}

interface ChatWidgetProps {
  position?: "bottom-right" | "bottom-left";
  chatbotId?: string; // Specific chatbot ID to use
  showChatbotSelector?: boolean; // Allow users to switch between chatbots
  orgId?: string; // Organization ID (optional, will use current user's org)
}

/**
 * Memoized Chat Widget Component
 * Only re-renders when chatbotId, position, or showChatbotSelector changes
 */
const ChatWidget = memo(
  function ChatWidget({
    position = "bottom-right",
    chatbotId,
    showChatbotSelector = false,
  }: // orgId,
  ChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [conversationId, setConversationId] = useState<string>();
    const [availableChatbots, setAvailableChatbots] = useState<ChatbotInfo[]>(
      [],
    );
    const [selectedChatbot, setSelectedChatbot] = useState<ChatbotInfo | null>(
      null,
    );
    const [loadingChatbots, setLoadingChatbots] = useState(true);
    const [showChatbotDropdown, setShowChatbotDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
      null,
    );
    const [isClient, setIsClient] = useState(false);
    const [ctaButtons, setCtaButtons] = useState<CTAButton[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Connection error handling
    const { getErrorMessage } = useConnectionErrorHandler();

    // Ensure component only renders on client to prevent hydration issues
    useEffect(() => {
      setIsClient(true);

      // Detect language from localStorage or browser settings
      const storedLang =
        typeof window !== "undefined"
          ? localStorage.getItem("chatbot_language")
          : null;

      if (storedLang) {
        setCurrentLanguage(storedLang);
      } else if (typeof navigator !== "undefined") {
        const browserLang = navigator.language.split("-")[0];
        // Validate that it's a supported language
        const supportedLangs = ["en", "es", "fr", "de", "pt", "ar", "zh", "ja"];
        if (supportedLangs.includes(browserLang)) {
          setCurrentLanguage(browserLang);
        }
      }
    }, []);

    // Load CTA buttons based on active integrations and current language
    useEffect(() => {
      let mounted = true;

      const loadCTAButtons = async () => {
        try {
          if (!mounted) return;
          // Pass current language to API
          const buttons = await mcpApi.getCTAButtons(currentLanguage);
          if (!mounted) return;
          setCtaButtons(buttons.buttons || []);
        } catch (error) {
          console.warn("Failed to load CTA buttons:", error);
          if (!mounted) return;
          setCtaButtons([]);
        }
      };

      // Only load if authenticated
      if (isAuthenticated === true) {
        loadCTAButtons();
      }

      return () => {
        mounted = false;
      };
    }, [isAuthenticated, currentLanguage]);

    // Load organization's chatbots
    useEffect(() => {
      let mounted = true;

      const loadChatbots = async () => {
        try {
          if (!mounted) return;
          setLoadingChatbots(true);

          // Check authentication first
          const authCheck = await conversationApi.getCurrentUserContext();
          if (!mounted) return;
          setIsAuthenticated(authCheck.isAuthenticated);

          if (!authCheck.isAuthenticated) {
            if (!mounted) return;
            console.warn("ChatWidget: User not authenticated", {
              userId: authCheck.userId,
              orgId: authCheck.orgId,
              isAuthenticated: authCheck.isAuthenticated,
            });
            setMessages([
              {
                id: "greeting",
                type: "bot",
                content:
                  "Hello! To use the chat feature, please log in to your account first.",
                timestamp: new Date(),
              },
            ]);
            return;
          }

          const chatbots = await chatbotApi.getChatbots();
          if (!mounted) return;

          if (chatbots && chatbots.length > 0) {
            setAvailableChatbots(chatbots);

            // Select chatbot based on priority:
            // 1. Provided chatbotId
            // 2. Active chatbot
            // 3. First available chatbot
            let targetChatbot: ChatbotInfo | null = null;

            if (chatbotId) {
              targetChatbot =
                chatbots.find((bot) => bot.id === chatbotId) || null;
            }

            if (!targetChatbot) {
              targetChatbot =
                chatbots.find((bot) => bot.status === "active") || chatbots[0];
            }

            if (targetChatbot) {
              // Get full chatbot details
              const fullChatbot = await chatbotApi.getChatbot(targetChatbot.id);
              if (!mounted) return;
              setSelectedChatbot(fullChatbot);

              // Set initial greeting message
              setMessages([
                {
                  id: "greeting",
                  type: "bot",
                  content:
                    fullChatbot.greeting_message ||
                    `Hello! I'm ${fullChatbot.name}. How can I help you today?`,
                  timestamp: new Date(),
                },
              ]);
            }
          } else {
            // No chatbots available - show default message
            if (!mounted) return;
            setMessages([
              {
                id: "greeting",
                type: "bot",
                content:
                  "Hello! I'm your AI assistant. Please note that no chatbots are currently configured for your organization.",
                timestamp: new Date(),
              },
            ]);
          }
        } catch (error) {
          if (!mounted) return;
          console.error("Error loading chatbots:", error);

          // Check if it's an authentication error
          if (
            error instanceof Error &&
            (error.message.includes("Not authenticated") ||
              error.message.includes("Authentication service not available"))
          ) {
            setIsAuthenticated(false);
            const authErrorMessage = error.message.includes(
              "Authentication service not available",
            )
              ? "Authentication service is not properly configured. Please contact support."
              : "Hello! To use the chat feature, please log in to your account first.";

            setMessages([
              {
                id: "greeting",
                type: "bot",
                content: authErrorMessage,
                timestamp: new Date(),
              },
            ]);
          } else {
            // Use the connection error handler for consistent messaging
            const errorMessage = getErrorMessage(error);
            setMessages([
              {
                id: "greeting",
                type: "bot",
                content: `Hello! ${errorMessage}`,
                timestamp: new Date(),
              },
            ]);
          }
        } finally {
          if (mounted) {
            setLoadingChatbots(false);
          }
        }
      };

      loadChatbots();

      return () => {
        mounted = false;
      };
    }, [chatbotId, getErrorMessage]);

    // Handle chatbot selection change
    const handleChatbotChange = async (newChatbotId: string) => {
      try {
        const newChatbot = await chatbotApi.getChatbot(newChatbotId);
        setSelectedChatbot(newChatbot);
        setConversationId(undefined); // Reset conversation for new chatbot

        // Reset messages with new greeting
        setMessages([
          {
            id: "greeting",
            type: "bot",
            content:
              newChatbot.greeting_message ||
              `Hello! I'm ${newChatbot.name}. How can I help you today?`,
            timestamp: new Date(),
          },
        ]);

        setShowChatbotDropdown(false);
      } catch (error) {
        console.error("Error switching chatbot:", error);
      }
    };

    const scrollToBottom = useCallback(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
      scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSendMessage = useCallback(
      async (messageToSend?: string) => {
        const message = messageToSend || inputMessage;
        if (!message.trim() || isTyping || !isAuthenticated) return;

        const userMessage: Message = {
          id: Date.now().toString(),
          type: "user",
          content: message,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const currentMessage = message;
        if (!messageToSend) {
          setInputMessage(""); // Only clear input if not from button
        }
        setIsTyping(true);

        try {
          const response = await conversationApi.sendMessage(
            currentMessage,
            selectedChatbot?.id || chatbotId,
            conversationId,
          );

          console.log("Chat response received:", {
            hasResponse: !!response.response,
            hasConversationId: !!response.conversation_id,
            hasSources: !!response.sources,
            responseLength: response.response?.length,
            conversationId: response.conversation_id,
            isFallback: response.conversation_id?.startsWith("fallback-"),
            responsePreview: response.response?.substring(0, 100),
          });

          // Validate response structure
          if (!response || typeof response !== "object") {
            throw new Error("Invalid response format from server");
          }

          if (!response.response) {
            throw new Error("No response content received from server");
          }

          // Check if this is a fallback response (indicates backend error)
          if (response.conversation_id?.startsWith("fallback-")) {
            console.warn(
              "⚠️ Received fallback response from backend - chat service encountered an error",
            );
            console.warn("Backend error response:", response.response);
          }

          // CRITICAL: Always store and use conversation_id for state persistence
          // This ensures booking flow and other multi-turn flows work correctly
          if (response.conversation_id) {
            // Always update conversationId, even if it already exists
            // This handles cases where the ID might have changed
            if (conversationId !== response.conversation_id) {
              console.log("📝 Updating conversation ID:", {
                old: conversationId,
                new: response.conversation_id,
              });
              setConversationId(response.conversation_id);
            }
          } else {
            console.warn(
              "⚠️ Response missing conversation_id - state may not persist",
            );
          }

          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            type: "bot",
            content: response.response,
            timestamp: new Date(),
            sources: response.sources || [],
            buttons: response.buttons || [],
            productCards: response.product_links || [], // Include product cards from Shopify
          };

          console.log("Bot response with buttons:", {
            hasButtons: !!response.buttons,
            buttonCount: response.buttons?.length || 0,
            buttons: response.buttons,
          });

          setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
          console.error("Error getting bot response:", error);
          console.error("Error details:", {
            name: error instanceof Error ? error.name : "Unknown",
            message: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            type: typeof error,
          });

          // Handle authentication errors specially
          if (
            error instanceof Error &&
            (error.message.includes("Not authenticated") ||
              error.message.includes("Authentication expired"))
          ) {
            setIsAuthenticated(false);
          }

          // Use the connection error handler for consistent messaging
          const errorMessage = getErrorMessage(error);

          const errorResponse: Message = {
            id: (Date.now() + 1).toString(),
            type: "bot",
            content: `I apologize, but I encountered an issue: ${errorMessage}`,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, errorResponse]);
        } finally {
          setIsTyping(false);
        }
      },
      [
        inputMessage,
        isTyping,
        isAuthenticated,
        selectedChatbot,
        chatbotId,
        conversationId,
        getErrorMessage,
      ],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
        }
      },
      [handleSendMessage],
    );

    const positionClasses = {
      "bottom-right": "bottom-10 right-4",
      "bottom-left": "bottom-10 left-4",
    };

    // Don't render anything until client-side hydration is complete
    if (!isClient) {
      return null;
    }

    if (!isOpen) {
      return (
        <div className={`fixed ${positionClasses[position]} z-50`}>
          <Button
            onClick={() => setIsOpen(true)}
            className="pointer rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: selectedChatbot?.color_hex || "#3B82F6" }}
            disabled={loadingChatbots}
          >
            {loadingChatbots ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <MessageCircle className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      );
    }

    return (
      <div
        className={`fixed ${positionClasses[position]} flex flex-col p-0 z-50`}
      >
        <div
          className={`w-[25vw] flex flex-col shadow-2xl rounded-lg p-3 transition-all bg-white m-0 duration-300 ${
            isMinimized ? "h-14" : "h-[70vh]"
          }`}
        >
          <div
            className="flex-row items-center justify-between space-y-0 p-3 text-white rounded-lg shadow-md"
            style={{
              background: selectedChatbot?.color_hex
                ? `linear-gradient(135deg, ${selectedChatbot.color_hex}, ${selectedChatbot.color_hex}dd)`
                : "linear-gradient(135deg, #3B82F6, #2563EB)",
            }}
          >
            <div className="flex flex-row justify-between items-center gap-5 flex-1">
              <div className="flex flex-row items-center gap-2">
                <div className="w-9 h-9 rounded-full flex flex-row items-center justify-center bg-white/20">
                  {selectedChatbot?.avatar_url ? (
                    <Image
                      src={
                        selectedChatbot.avatar_url.includes(
                          "storage/v1/object/uploads/",
                        )
                          ? `${API_BASE_URL}/api/uploads/avatar/legacy/${
                              selectedChatbot.avatar_url.split(
                                "storage/v1/object/uploads/",
                              )[1]
                            }`
                          : selectedChatbot.avatar_url
                      }
                      alt={selectedChatbot.name}
                      width={30}
                      height={30}
                      unoptimized={true}
                      className="w-9 h-9 rounded-full"
                    />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>

                {showChatbotSelector && availableChatbots.length > 1 ? (
                  <div className="relative gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setShowChatbotDropdown(!showChatbotDropdown)
                      }
                      className="h-auto p-1 text-white hover:bg-white/20 flex items-center gap-1"
                    >
                      <span className="font-medium text-sm">
                        {selectedChatbot?.name || "Select Chatbot"}
                      </span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>

                    {showChatbotDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border z-10 min-w-48">
                        {availableChatbots.map((chatbot) => (
                          <button
                            key={chatbot.id}
                            onClick={() => handleChatbotChange(chatbot.id)}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: chatbot.color_hex || "#3B82F6",
                              }}
                            />
                            <span>{chatbot.name}</span>
                            {chatbot.status === "active" && (
                              <span className="text-xs text-green-600 ml-auto">
                                Active
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="font-medium text-sm">
                    {selectedChatbot?.name || "Assistant"}
                  </span>
                )}

                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="pointer h-7 w-7 rounded-lg p-0 text-white bg-white/20"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="pointer h-7 w-7 rounded-lg p-0 bg-white"
                >
                  <X
                    className="h-3 w-3"
                    style={{
                      color: selectedChatbot?.color_hex,
                    }}
                  />
                </Button>{" "}
              </span>
            </div>
          </div>

          {!isMinimized && (
            <div className="relative flex-1 flex flex-col overflow-scroll">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {/* Show login prompt if not authenticated */}
                {isAuthenticated === false && (
                  <div className="text-center py-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <Bot className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-medium text-blue-900 mb-2">
                        Login Required
                      </h3>
                      <p className="text-sm text-blue-700 mb-3">
                        Please log in to your account to start chatting with our
                        AI assistant.
                      </p>
                      <Button
                        size="sm"
                        onClick={() => (window.location.href = "/login")}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Go to Login
                      </Button>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    {...message}
                    botColor={selectedChatbot?.color_hex || "#3B82F6"}
                    onButtonClick={handleSendMessage}
                  />
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 mr-2 p-2 rounded-lg max-w-[85%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-3 w-3 text-blue-500" />
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-2 border-t bg-gray-50 ">
                {/* CTA Buttons - Show if authenticated and buttons available */}
                {isAuthenticated && ctaButtons.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-2">
                    {ctaButtons.map((button) => (
                      <Button
                        key={button.id}
                        size="sm"
                        variant="outline"
                        className="text-xs h-7 px-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        onClick={() => {
                          // Send the CTA message
                          handleSendMessage(button.message);
                        }}
                        disabled={isTyping || !selectedChatbot}
                      >
                        {button.label}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      !isAuthenticated
                        ? "Please log in to chat..."
                        : `Ask ${selectedChatbot?.name || "Assistant"}...`
                    }
                    className="flex-1 text-sm focus:ring-1 focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    style={
                      {
                        "--tw-ring-color":
                          selectedChatbot?.color_hex || "#3B82F6",
                      } as React.CSSProperties & { "--tw-ring-color": string }
                    }
                    disabled={isTyping || !selectedChatbot || !isAuthenticated}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={
                      !inputMessage.trim() ||
                      isTyping ||
                      !selectedChatbot ||
                      !isAuthenticated
                    }
                    size="sm"
                    className="px-3"
                    style={{
                      backgroundColor: selectedChatbot?.color_hex || "#3B82F6",
                    }}
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
                <p className="mt-3 text-xs text-right">Powered by Zaakiy</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison: only re-render when these props actually change
    return (
      prevProps.chatbotId === nextProps.chatbotId &&
      prevProps.position === nextProps.position &&
      prevProps.showChatbotSelector === nextProps.showChatbotSelector
    );
  },
);

export default ChatWidget;
