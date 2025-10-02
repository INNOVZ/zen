/**
 * Global Error Boundary Component
 * Catches and handles React errors gracefully
 */

"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { createLogger } from "@/utils/logger";
import { env } from "@/config/env";

const log = createLogger("ERROR_BOUNDARY");

interface Props {
  children: ReactNode;
  fallback?: ((error: Error, errorInfo: ErrorInfo) => ReactNode) | undefined;
  onError?: ((error: Error, errorInfo: ErrorInfo) => void) | undefined;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error
    log.error("React Error Boundary caught an error", error, {
      errorInfo: errorInfo.componentStack,
      stack: error.stack,
    });

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report to error monitoring service in production
    if (env.app.isProduction) {
      // Add your error reporting service here (e.g., Sentry, LogRocket, etc.)
      console.error("Production error:", error, errorInfo);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback(this.state.error!, this.state.errorInfo!);
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-xl">Something went wrong</CardTitle>
              <CardDescription>
                We&apos;re sorry, but something unexpected happened. Please try
                again.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {env.app.isDevelopment && this.state.error && (
                <div className="rounded-md bg-red-50 border border-red-200 p-4">
                  <h4 className="text-sm font-medium text-red-800 mb-2">
                    Error Details (Development Only)
                  </h4>
                  <div className="text-xs text-red-600 font-mono bg-red-100 p-2 rounded overflow-auto max-h-32">
                    <div className="font-semibold mb-1">
                      {this.state.error.name}:
                    </div>
                    <div className="mb-2">{this.state.error.message}</div>
                    {this.state.error.stack && (
                      <div className="text-xs opacity-75">
                        {this.state.error.stack
                          .split("\\n")
                          .slice(0, 5)
                          .join("\\n")}
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Button onClick={this.handleRetry} className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  onClick={this.handleGoHome}
                  className="w-full"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook to create a custom error boundary for specific components
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: (error: Error, errorInfo: ErrorInfo) => ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  const WrappedComponent = (props: P) => (
    <GlobalErrorBoundary
      fallback={fallback || undefined}
      onError={onError || undefined}
    >
      <Component {...props} />
    </GlobalErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}

/**
 * Simple error boundary for specific sections
 */
export function ErrorBoundary({
  children,
  fallback,
  onError,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}) {
  return (
    <GlobalErrorBoundary
      fallback={fallback ? () => fallback : undefined}
      onError={onError || undefined}
    >
      {children}
    </GlobalErrorBoundary>
  );
}
