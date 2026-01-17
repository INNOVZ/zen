// Detached mode configuration
export const DETACHED_MODE = process.env.NEXT_PUBLIC_DETACHED_MODE === "true";

// Mock data for detached mode
export const mockChatbots = [
  {
    id: "mock-chatbot-1",
    name: "Demo Assistant",
    description: "A demo chatbot for testing purposes",
    color_hex: "#3B82F6",
    avatar_url: "",
    greeting_message:
      "Hello! I'm a demo chatbot. This is running in detached mode without a backend.",
    tone: "helpful",
    status: "active",
    chain_status: "ready",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: "mock-user",
    org_id: "mock-org",
  },
  {
    id: "mock-chatbot-2",
    name: "Support Bot",
    description: "Customer support chatbot",
    color_hex: "#10B981",
    avatar_url: "",
    greeting_message:
      "Hi! I'm your support assistant. How can I help you today?",
    tone: "professional",
    status: "inactive",
    chain_status: "ready",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: "mock-user",
    org_id: "mock-org",
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
  return mockResponses[Math.floor(Math.random() * mockResponses.length)];
}

export function createMockChatResponse(message: string) {
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
    chatbot_config: {
      name: "Demo Assistant",
      avatar_url: "",
      color_hex: "#3B82F6",
      tone: "helpful",
    },
  };
}
