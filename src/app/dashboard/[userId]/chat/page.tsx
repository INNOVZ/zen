"use client";

import { useState, useEffect } from "react";
import ChatbotSandbox from "@/components/dashboard/chat/ChatbotSandbox";
import { chatbotApi, conversationApi } from "@/app/api/routes";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

export default function ChatTestPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [testStatus, setTestStatus] = useState<{
    auth: boolean;
    chatbots: boolean;
    vectors: boolean;
    message?: string;
  }>({
    auth: false,
    chatbots: false,
    vectors: false,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    testConnections();
  }, []);

  // Helper function to get Supabase token
  const getSupabaseToken = async (): Promise<string | null> => {
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token || null;
  };

  // ...existing code...

  const testConnections = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Test 1: Authentication - Use Supabase token
      const token = await getSupabaseToken();

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      console.log("Testing with token:", token.substring(0, 20) + "...");

      const authTest = await fetch("http://localhost:8001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const authStatus = authTest.ok;
      console.log("Auth test result:", authStatus);

      // Test 2: Chatbots available
      let chatbotsStatus = false;
      let chatbots: unknown[] = [];

      if (authStatus) {
        try {
          console.log("Testing chatbots endpoint...");
          chatbots = await chatbotApi.getChatbots();
          console.log("Chatbots response:", chatbots);
          chatbotsStatus = Array.isArray(chatbots) && chatbots.length > 0;
        } catch (e) {
          console.error("Chatbot test error:", e);
          // Don't fail the entire test - continue with vector test
        }
      }

      // Test 3: Vector search (send a test message)
      let vectorStatus = false;
      if (authStatus) {
        // Test vector even if no chatbots configured
        try {
          console.log("Testing vector search...");
          const testResponse = await conversationApi.sendMessage(
            "Test message to check if vectors are working"
          );
          console.log("Vector test response:", testResponse);
          vectorStatus = !!testResponse.response;
        } catch (e) {
          console.error("Vector test error:", e);
        }
      }

      setTestStatus({
        auth: authStatus,
        chatbots: chatbotsStatus,
        vectors: vectorStatus,
        message: vectorStatus
          ? "All systems operational!"
          : authStatus
          ? "Authentication successful, but some services need attention."
          : "Authentication failed. Please check your login status.",
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Error connecting to the backend. Please check the server is running."
      );
      console.error("Test connections error:", err);
    } finally {
      setIsLoading(false); // ✅ Fixed: This should be false
    }
  };

  // ...rest of your component...

  return (
    <div className="container mx-auto w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full pt-8">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">RAG Pipeline Test</h2>

            {isLoading ? (
              <div className="flex items-center justify-center p-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Connection Error</p>
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {testStatus.auth ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium">Authentication</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                      /api/auth/me
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {testStatus.chatbots ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium">Chatbot Configuration</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                      /api/chat/chatbots
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {testStatus.vectors ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium">Vector Search & RAG</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                      /api/chat/conversation
                    </span>
                  </div>
                </div>

                <div
                  className={`mt-6 p-3 rounded-md ${
                    testStatus.auth && testStatus.chatbots && testStatus.vectors
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-yellow-50 text-yellow-800 border border-yellow-200"
                  }`}
                >
                  <p className="font-medium">{testStatus.message}</p>
                </div>

                <div className="mt-6">
                  <Button onClick={testConnections} size="sm">
                    Re-run Tests
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-3">
              RAG Pipeline Overview
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                  1
                </div>
                <div>
                  <p className="font-medium">User Query</p>
                  <p className="text-gray-600">
                    User asks a question via the chat interface
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                  2
                </div>
                <div>
                  <p className="font-medium">Query Embedding</p>
                  <p className="text-gray-600">
                    Question converted to vector using OpenAI embeddings API
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                  3
                </div>
                <div>
                  <p className="font-medium">Vector Search</p>
                  <p className="text-gray-600">
                    Pinecone searches for similar document chunks in org
                    namespace
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                  4
                </div>
                <div>
                  <p className="font-medium">Context Building</p>
                  <p className="text-gray-600">
                    Top relevant document chunks combined into context
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                  5
                </div>
                <div>
                  <p className="font-medium">AI Response</p>
                  <p className="text-gray-600">
                    GPT-4 generates answer using context and chatbot personality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChatbotSandbox className="w-full" />
      </div>
    </div>
  );
}
