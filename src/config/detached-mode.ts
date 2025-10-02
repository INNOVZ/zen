// Detached mode configuration
export const DETACHED_MODE = process.env.NEXT_PUBLIC_DETACHED_MODE === "true";

// Mock data for detached mode
export const mockChatbots = [
  {
    id: "3d861cd5-4067-4538-8417-1b49ee2fadfa",
    name: "Custom Deployed Bot",
    description: "A chatbot for detached deployment on any website.",
    color_hex: "#F59E42",
    avatar_url: "",
    greeting_message:
      "Welcome! This is your custom deployed chatbot running in detached mode.",
    tone: "friendly",
    chain_status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: "detached-user",
    org_id: "detached-org",
  },
];

export const mockUserContext = {
  isAuthenticated: true,
  userId: "mock-user-123",
  orgId: "mock-org-456",
};

// Mock responses for different message types
export const mockResponses = [
  "That's an interesting question! In detached mode, I can provide basic responses.",
  "I'm running in demo mode, so my responses are simulated. In production, I'd be connected to your knowledge base.",
  "Thanks for testing the chat widget! This response is generated locally without a backend.",
  "I understand you're asking about that topic. In a real deployment, I'd have access to your organization's data.",
  "Great question! The chat widget is working perfectly in standalone mode.",
  "I'm here to help! Note that this is a demonstration - real responses would come from your trained AI model.",
];

export function getRandomMockResponse(): string {
  const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
  return response || "I'm here to help!";
}

export function createMockChatResponse(message: string, chatbotId?: string) {
  const config = chatbotId
    ? mockChatbots.find((bot) => bot.id === chatbotId)
    : mockChatbots.find((bot) => bot.chain_status === "active") || mockChatbots[0];
  return {
    response: getRandomMockResponse(),
    sources: ["demo-document.pdf", "sample-knowledge-base.txt"],
    conversation_id: "mock-conversation-" + Date.now(),
    message_id: "mock-message-" + Date.now(),
    processing_time_ms: Math.floor(Math.random() * 500) + 200,
    user_message: message,
    context_quality: {
      context_length: 1500,
      has_context: true,
      coverage_score: 0.85,
      quality_tier: "good",
      timestamp: new Date().toISOString(),
    },
    chatbot_config: config
      ? {
          name: config.name,
          avatar_url: config.avatar_url,
          color_hex: config.color_hex,
          tone: config.tone,
        }
      : {
          name: "Demo Assistant",
          avatar_url: "",
          color_hex: "#3B82F6",
          tone: "helpful",
        },
  };
}
