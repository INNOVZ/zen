"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCustomizeStore } from "@/stores/customizeStore";
import { supabase } from "@/lib/supabase";
import ContextEngineering from "@/components/dashboard/customize/ContextEngineering";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Settings,
  AlertTriangle,
  WifiOff,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";

export default function AIConfigurationPage() {
  const router = useRouter();
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const {
    connectionStatus,
    error,
    contextConfig,
    setCurrentUser,
    setError,
    initializeStore,
    testConnection,
    loadContextConfig,
  } = useCustomizeStore();

  // Enhanced connection testing
  const checkConnection = useCallback(async () => {
    try {
      const isConnected = await testConnection();
      if (!isConnected && retryCount < 3) {
        setRetryCount((prev) => prev + 1);
        // Auto-retry after a delay
        setTimeout(() => {
          checkConnection();
        }, 2000 * Math.pow(2, retryCount)); // Exponential backoff
      } else if (isConnected) {
        setRetryCount(0);
        setError(null);
      }
    } catch (error) {
      console.error("Connection check failed:", error);
    }
  }, [testConnection, retryCount, setError]);

  const initializePage = useCallback(async () => {
    try {
      setLoading(true);

      // Get current user session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        toast.error("Authentication required");
        router.replace("/auth/login");
        return;
      }

      // Check if the userId in URL matches the logged-in user
      if (session.user.id !== userId) {
        toast.error("Unauthorized access");
        router.replace(`/dashboard/${session.user.id}/ai`);
        return;
      }

      setCurrentUser(session.user);

      // Initialize store with minimal data needed for context config
      try {
        await initializeStore();
        // Load context configuration specifically
        await loadContextConfig();
      } catch (storeError) {
        console.warn(
          "Store initialization failed, continuing with limited functionality:",
          storeError
        );
        setError("Some features may be limited. Please check your connection.");
      }
    } catch (error) {
      console.error("Error initializing AI configuration page:", error);
      setError(
        "Failed to initialize the AI configuration. Please refresh the page."
      );
    } finally {
      setLoading(false);
    }
  }, [
    initializeStore,
    setCurrentUser,
    router,
    userId,
    setError,
    loadContextConfig,
  ]);

  // Load initial data
  useEffect(() => {
    initializePage();
  }, [initializePage]);

  // Periodic connection check
  useEffect(() => {
    if (connectionStatus === "disconnected") {
      const interval = setInterval(checkConnection, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, [connectionStatus, checkConnection]);

  // Enhanced retry mechanism
  const handleRetryConnection = async () => {
    setRetryCount(0);
    await checkConnection();
    if (connectionStatus === "disconnected") {
      await initializePage();
    }
  };

  if (loading) {
    return (
      <div className="mx-auto ml-[4.5vw] bg-white rounded-3xl p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600">Loading AI Configuration...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto ml-[4.5vw] bg-white rounded-3xl p-8">
      {/* Connection Status Banner */}
      {connectionStatus === "disconnected" && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <WifiOff className="h-4 w-4 text-red-600" />
          <AlertDescription className="flex items-center justify-between">
            <span>
              Connection to AI services lost. Some features may be unavailable.
            </span>
            <Button
              onClick={handleRetryConnection}
              variant="outline"
              size="sm"
              className="ml-4"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Error Banner */}
      {error && (
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                AI Configuration Center
              </h1>
              <p className="text-gray-600 mt-1">
                Configure advanced AI behavior, model settings, and retrieval
                strategies
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                connectionStatus === "connected" ? "default" : "destructive"
              }
              className="flex items-center gap-1"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  connectionStatus === "connected"
                    ? "bg-green-400"
                    : "bg-red-400"
                }`}
              />
              {connectionStatus === "connected" ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Current Configuration Summary */}
      {contextConfig && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Current Configuration Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Model Tier:</span>
                <p className="capitalize">
                  {contextConfig.model_tier || "balanced"}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Retrieval Strategy:
                </span>
                <p className="capitalize">
                  {contextConfig.retrieval_strategy || "hybrid"}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Confidence Threshold:
                </span>
                <p>
                  {Math.round(
                    (contextConfig.confidence_threshold || 0.7) * 100
                  )}
                  %
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Context Chunks:
                </span>
                <p>{contextConfig.final_context_chunks || 5}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Configuration Component */}
      <ContextEngineering />
    </div>
  );
}
