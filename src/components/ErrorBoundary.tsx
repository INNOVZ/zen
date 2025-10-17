"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent error={this.state.error} retry={this.retry} />
        );
      }

      return (
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <Button
              onClick={this.retry}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}

// Simple functional error fallback component
export const SimpleErrorFallback: React.FC<{
  error?: Error;
  retry: () => void;
}> = ({ error, retry }) => (
  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
    <div className="flex items-center gap-2 text-red-600 mb-2">
      <AlertTriangle className="h-4 w-4" />
      <span className="font-medium">Error loading component</span>
    </div>
    <p className="text-sm text-gray-600 mb-3">
      {error?.message || "Something went wrong"}
    </p>
    <Button size="sm" onClick={retry} variant="outline">
      Retry
    </Button>
  </div>
);

export default ErrorBoundary;
