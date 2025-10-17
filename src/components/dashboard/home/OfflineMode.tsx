"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WifiOff, Server, RefreshCw, ExternalLink } from "lucide-react";

interface OfflineModeProps {
  onRetry: () => void;
  isRetrying?: boolean;
}

export default function OfflineMode({
  onRetry,
  isRetrying = false,
}: OfflineModeProps) {
  return (
    <div className="mx-auto ml-[4.5vw] bg-white rounded-3xl p-8 space-y-6 shadow-lg">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 rounded-full">
            <WifiOff className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Unable to Connect to Server
          </h1>
          <p className="text-gray-600">
            The dashboard cannot connect to the backend server. Please check if
            the server is running.
          </p>
        </div>

        <Alert>
          <Server className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <p className="font-medium">Common solutions:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Make sure the backend server is running</li>
                <li>
                  • Check if the server URL is correct in your environment
                  variables
                </li>
                <li>• Verify your network connection</li>
                <li>• Check if any firewall is blocking the connection</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRetry}
            disabled={isRetrying}
            className="flex items-center gap-2"
          >
            <RefreshCw
              className={`h-4 w-4 ${isRetrying ? "animate-spin" : ""}`}
            />
            {isRetrying ? "Retrying..." : "Retry Connection"}
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("http://localhost:8001/docs", "_blank")}
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Check API Docs
          </Button>
        </div>

        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-lg">Development Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1">Expected server URL:</p>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                {process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001"}
              </code>
            </div>

            <div>
              <p className="font-medium text-sm mb-1">
                To start the backend server:
              </p>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                # Navigate to your backend directory and run:
                <br />
                python -m uvicorn main:app --reload --port 8001
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
