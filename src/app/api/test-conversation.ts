// Test conversation API endpoint
import { conversationApi } from './routes';

export async function testConversationAPI() {
  try {
    console.log("Testing conversation API...");
    
    // Test authentication
    const authCheck = await conversationApi.getCurrentUserContext();
    console.log("Auth check result:", authCheck);
    
    if (!authCheck.isAuthenticated) {
      return {
        success: false,
        error: "User not authenticated",
        authCheck
      };
    }
    
    // Test sending a message
    const response = await conversationApi.sendMessage("test message", undefined, undefined);
    console.log("Conversation API response:", response);
    
    return {
      success: true,
      response,
      authCheck
    };
  } catch (error) {
    console.error("Conversation API test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    };
  }
}
