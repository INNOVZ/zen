"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { conversationApi } from "@/api";

export default function AuthTestPage() {
  const [authStatus, setAuthStatus] = useState<{
    isAuthenticated: boolean;
    userId?: string;
    orgId?: string;
    loading: boolean;
    error?: string;
  }>({
    isAuthenticated: false,
    loading: true,
  });

  const checkAuth = async () => {
    setAuthStatus((prev) => ({ ...prev, loading: true }));

    try {
      const userContext = await conversationApi.getCurrentUserContext();
      setAuthStatus({
        isAuthenticated: userContext.isAuthenticated,
        userId: userContext.userId,
        ...(userContext.orgId && { orgId: userContext.orgId }),
        loading: false,
      });
    } catch (error) {
      setAuthStatus({
        isAuthenticated: false,
        loading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication Test
          </h1>
          <p className="text-gray-600">
            Check your authentication status for the chat widget
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Authentication Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {authStatus.loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="h-6 w-6 animate-spin text-blue-500 mr-2" />
                <span>Checking authentication...</span>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {authStatus.isAuthenticated ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                  <div>
                    <Badge
                      variant={
                        authStatus.isAuthenticated ? "default" : "destructive"
                      }
                      className="mb-1"
                    >
                      {authStatus.isAuthenticated
                        ? "Authenticated"
                        : "Not Authenticated"}
                    </Badge>
                    <p className="text-sm text-gray-600">
                      {authStatus.isAuthenticated
                        ? "You are logged in and can use the chat widget"
                        : "You need to log in to use the chat widget"}
                    </p>
                  </div>
                </div>

                {authStatus.isAuthenticated && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">
                      User Details
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="font-medium">User ID:</span>{" "}
                        <code className="bg-green-100 px-1 rounded">
                          {authStatus.userId?.substring(0, 8)}...
                        </code>
                      </div>
                      {authStatus.orgId && (
                        <div>
                          <span className="font-medium">Organization ID:</span>{" "}
                          <code className="bg-green-100 px-1 rounded">
                            {authStatus.orgId.substring(0, 8)}...
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {authStatus.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Error</h4>
                    <p className="text-sm text-red-700">{authStatus.error}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={checkAuth} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Status
                  </Button>

                  {!authStatus.isAuthenticated && (
                    <Button onClick={() => (window.location.href = "/login")}>
                      Go to Login
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chat Widget Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                The chat widget should appear in the bottom-right corner.
                {authStatus.isAuthenticated
                  ? " You should be able to send messages."
                  : " You'll need to log in first to send messages."}
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">
                  Testing Instructions
                </h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
                  <li>Check your authentication status above</li>
                  <li>If not authenticated, click Go to Login to log in</li>
                  <li>Once logged in, refresh this page</li>
                  <li>Click the chat bubble in the bottom-right corner</li>
                  <li>Try sending a message to test the chatbot</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
