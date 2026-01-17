"use client";

import { useEffect, useCallback, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Bot,
  Upload,
  Copy,
  ExternalLink,
  Plus,
  ArrowLeft,
  Settings,
  BarChart3,
  AlertTriangle,
  Trash2,
  WifiOff,
  Wifi,
  RefreshCw,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuthGuard";
import { useCustomizeStore } from "@/stores/customizeStore";
import { chatbotApi } from "@/app/api/routes";
import type { ChatbotInfo } from "@/types";
import ChatbotConfiguration from "@/components/dashboard/customize/ChatbotConfiguration";

export default function EnhancedCustomizePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const chatbotId = searchParams?.get("id") ?? null;

  const { isLoading: authLoading, user: authUser } = useAuth();

  const [retryCount, setRetryCount] = useState(0);
  const [lastConnectionCheck, setLastConnectionCheck] = useState<Date | null>(
    null
  );

  const {
    loading,
    orgChatbots,
    selectedChatbot,
    showCreateForm,
    uploads,
    embedCode,
    showEmbedModal,
    deletingChatbotId,
    contextConfig,
    connectionStatus,
    error,
    setCurrentUser,
    setSelectedChatbot,
    setIsEditMode,
    setShowCreateForm,
    setShowEmbedModal,
    deleteChatbot: deleteChatbotFromStore,
    generateEmbedCode: generateEmbedCodeFromStore,
    initializeStore,
    testConnection,
    setError,
  } = useCustomizeStore();

  const loadSpecificChatbot = useCallback(
    async (chatbotId: string) => {
      try {
        const chatbot = await chatbotApi.getChatbot(chatbotId);
        setSelectedChatbot(chatbot);
      } catch (error) {
        console.error("Error loading specific chatbot:", error);
        toast.error("Failed to load chatbot configuration");
      }
    },
    [setSelectedChatbot]
  );

  const checkConnection = useCallback(async () => {
    try {
      const isConnected = await testConnection();
      setLastConnectionCheck(new Date());
      if (!isConnected && retryCount < 3) {
        setRetryCount((prev) => prev + 1);
        setTimeout(() => checkConnection(), 2000 * Math.pow(2, retryCount));
      } else if (isConnected) {
        setRetryCount(0);
        setError(null);
      }
    } catch (error) {
      console.error("Connection check failed:", error);
    }
  }, [testConnection, retryCount, setError]);

  const initializePage = useCallback(async () => {
    if (!authUser) return;

    try {
      setCurrentUser(authUser);
      try {
        await initializeStore();
      } catch (storeError) {
        console.warn("Store initialization failed:", storeError);
      }

      if (chatbotId) {
        await loadSpecificChatbot(chatbotId);
        setIsEditMode(true);
      }
    } catch (error) {
      console.error("Error initializing page:", error);
      setError(
        "Failed to initialize the application. Please refresh the page."
      );
    }
  }, [
    authUser,
    initializeStore,
    setCurrentUser,
    setIsEditMode,
    chatbotId,
    loadSpecificChatbot,
    setError,
  ]);

  useEffect(() => {
    if (authLoading || !authUser) return;
    initializePage();
  }, [authLoading, authUser, initializePage]);

  useEffect(() => {
    if (connectionStatus === "disconnected") {
      const interval = setInterval(checkConnection, 30000);
      return () => clearInterval(interval);
    }
  }, [connectionStatus, checkConnection]);

  const handleChatbotSelect = (chatbot: ChatbotInfo) => {
    setSelectedChatbot(chatbot);
    setIsEditMode(true);
    setShowCreateForm(false);
    router.push(`/dashboard/customize?id=${chatbot.id}`);
  };

  const handleCreateNew = () => {
    setSelectedChatbot(null);
    setIsEditMode(false);
    setShowCreateForm(true);
    router.push(`/dashboard/customize`);
  };

  const handleDeleteChatbot = async (
    chatbotId: string,
    chatbotName: string
  ) => {
    if (
      !confirm(
        `Are you sure you want to delete "${chatbotName}"? This action cannot be undone.`
      )
    )
      return;

    await deleteChatbotFromStore(chatbotId);

    if (selectedChatbot?.id === chatbotId) {
      setSelectedChatbot(null);
      setIsEditMode(false);
      setShowCreateForm(false);
      router.push(`/dashboard/customize`);
    }
  };

  const handleGenerateEmbedCode = () => {
    if (!selectedChatbot?.id) {
      toast.error("Please save the chatbot first");
      return;
    }
    generateEmbedCodeFromStore(selectedChatbot.id);
  };

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard!");
  };

  const handleRetryConnection = async () => {
    setRetryCount(0);
    await checkConnection();
    if (connectionStatus === "disconnected") {
      await initializePage();
    }
  };

  if (authLoading || !authUser) {
    return (
      <div className="container mx-auto w-full max-w-7xl px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto w-full max-w-7xl px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto ml-[5.3vw] overflow-y-scroll bg-white/80 rounded-xl p-4">
      {connectionStatus === "disconnected" && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <WifiOff className="h-4 w-4 text-red-600" />
          <AlertDescription className="flex items-center justify-between">
            <div>
              <strong>Connection Lost:</strong> Unable to connect to the backend
              services.
              {lastConnectionCheck && (
                <span className="text-sm text-red-600 ml-2">
                  Last checked: {lastConnectionCheck.toLocaleTimeString()}
                </span>
              )}
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRetryConnection}
              className="ml-4"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Retry ({retryCount}/3)
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription>
            <div className="flex items-center justify-between">
              <div>
                <strong>Error:</strong> {error}
              </div>
              {error.includes("Failed to initialize application") && (
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => initializeStore()}
                    className="text-orange-700 border-orange-300 hover:bg-orange-100"
                  >
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Retry
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setError(null);
                      window.location.reload();
                    }}
                    className="text-orange-700 border-orange-300 hover:bg-orange-100"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Refresh
                  </Button>
                </div>
              )}
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className="pb-3">
        <div className="flex pb-3 items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font text-3xl font-bold">AI Chatbot Management</h1>
              {connectionStatus === "connected" && (
                <div className="flex items-center gap-1 text-green-600">
                  <Wifi className="w-4 h-4" />
                  <span className="text-sm">Connected</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-1">
              Create, configure, optimize, and monitor your AI assistants
            </p>
          </div>
          <Button
            onClick={handleCreateNew}
            className="flex items-center gap-2"
            disabled={connectionStatus === "disconnected"}
          >
            <Plus className="w-4 h-4" />
            Create New Chatbot
          </Button>
        </div>

        {orgChatbots.length > 0 && !showCreateForm && (
          <Card className="mb-6 border-1 bg-white">
            <CardHeader>
              <CardTitle className="font text-lg flex items-center gap-2">
                <Bot className="font w-5 h-5" />
                Your Organization&apos;s Chatbots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orgChatbots.map((chatbot) => (
                  <div
                    key={chatbot.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedChatbot?.id === chatbot.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleChatbotSelect(chatbot)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium truncate">{chatbot.name}</h3>
                      <Badge
                        variant={
                          chatbot.status === "active" ? "default" : "secondary"
                        }
                        className="ml-2"
                      >
                        {chatbot.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {chatbot.description || "No description"}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: chatbot.color_hex || "#3B82F6",
                          }}
                        />
                        <span className="text-xs text-gray-500 capitalize">
                          {chatbot.tone || "helpful"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              `/dashboard/chat?chatbot=${chatbot.id}`,
                              "_blank"
                            );
                          }}
                          title="Test Chatbot"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteChatbot(chatbot.id, chatbot.name);
                          }}
                          disabled={deletingChatbotId === chatbot.id}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          title="Delete Chatbot"
                        >
                          {deletingChatbotId === chatbot.id ? (
                            <div className="w-3 h-3 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
                          ) : (
                            <Trash2 className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {orgChatbots.length === 0 && !loading && (
          <Card className="mb-6 border-dashed border-2">
            <CardContent className="text-center py-12">
              <Bot className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Chatbots Yet</h3>
              <p className="font mb-4">
                Create your first chatbot to get started with AI-powered
                customer support.
              </p>
              <Button
                onClick={handleCreateNew}
                className="flex items-center gap-2"
                disabled={connectionStatus === "disconnected"}
              >
                <Plus className="w-4 h-4" />
                Create Your First Chatbot
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {(selectedChatbot || showCreateForm) && (
        <div>
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center gap-4">
              {!showCreateForm && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedChatbot(null);
                    setIsEditMode(false);
                    router.push(`/dashboard/customize`);
                  }}
                  className="pointer flex items-center gap-2 hover:bg-[#5D7DDE] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to List
                </Button>
              )}
              <h2 className="text-2xl font-bold">
                {showCreateForm
                  ? "Create New Chatbot"
                  : `Edit: ${selectedChatbot?.name}`}
              </h2>
            </div>

            {selectedChatbot && !showCreateForm && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      `/dashboard/chat?chatbot=${selectedChatbot.id}`,
                      "_blank"
                    )
                  }
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Test Chatbot
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    handleDeleteChatbot(
                      selectedChatbot.id,
                      selectedChatbot.name
                    )
                  }
                  disabled={deletingChatbotId === selectedChatbot.id}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300"
                >
                  {deletingChatbotId === selectedChatbot.id ? (
                    <div className="w-4 h-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  Delete Chatbot
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-3">
              <ChatbotConfiguration />
            </div>

            <div className="space-y-6">
              <Card className="bg-linear-to-r/shorter from-indigo-100 to-blue-100 py-4">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    📊 Knowledge Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Total documents:
                      </span>
                      <Badge variant="outline">{uploads.length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Active sources:
                      </span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700"
                      >
                        {uploads.filter((u) => u.status === "completed").length}
                      </Badge>
                    </div>
                    <Progress
                      value={
                        (uploads.filter((u) => u.status === "completed")
                          .length /
                          Math.max(uploads.length, 1)) *
                        100
                      }
                      className="mb-3"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full pointer"
                      onClick={() => router.push(`/dashboard/train`)}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Manage Knowledge Base
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-linear-to-r/shorter from-indigo-100 to-blue-100 py-4">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    🧠 Context Engine Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Model Tier:</span>
                      <Badge variant="secondary" className="capitalize">
                        {contextConfig.model_tier}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Strategy:</span>
                      <Badge variant="outline" className="capitalize">
                        {contextConfig.retrieval_strategy}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full pointer"
                      onClick={() => router.push(`/dashboard/context-settings`)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Configure Engine
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-linear-to-r/shorter from-indigo-300 to-blue-300 py-4">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    🚀 Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Your chatbot is optimized and ready for deployment.
                  </p>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={handleGenerateEmbedCode}
                      disabled={!selectedChatbot?.id}
                    >
                      Generate Embed Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full pointer"
                      onClick={() => router.push(`/dashboard`)}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {showEmbedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Embed Code</h3>
            <p className="text-sm text-gray-600 mb-3">
              Copy this code and paste it into your website:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                {embedCode}
              </pre>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setShowEmbedModal(false)}
              >
                Close
              </Button>
              <Button
                onClick={copyEmbedCode}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Code
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
