import { useState, useEffect, useCallback } from "react";
import { conversationApi } from "@/app/api/routes";

interface ConnectionState {
  isConnected: boolean;
  isChecking: boolean;
  lastChecked: Date | null;
  error: string | null;
}

export function useServerConnection(checkInterval: number = 30000) {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    isConnected: false,
    isChecking: true,
    lastChecked: null,
    error: null,
  });

  const checkConnection = useCallback(async () => {
    try {
      setConnectionState((prev) => ({
        ...prev,
        isChecking: true,
        error: null,
      }));

      const result = await conversationApi.testConnection();

      setConnectionState({
        isConnected: result.success,
        isChecking: false,
        lastChecked: new Date(),
        error: result.success ? null : "Connection test failed",
      });

      return result.success;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown connection error";

      setConnectionState({
        isConnected: false,
        isChecking: false,
        lastChecked: new Date(),
        error: errorMessage,
      });

      return false;
    }
  }, []);

  // Initial connection check
  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

  // Periodic connection checks
  useEffect(() => {
    if (checkInterval > 0) {
      const interval = setInterval(checkConnection, checkInterval);
      return () => clearInterval(interval);
    }
  }, [checkConnection, checkInterval]);

  const isConnectionError = useCallback((error: unknown): boolean => {
    if (!(error instanceof Error)) return false;

    return (
      error.message.includes("Unable to connect") ||
      error.message.includes("server unavailable") ||
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("network") ||
      error.message.includes("timeout")
    );
  }, []);

  const getConnectionErrorMessage = useCallback(
    (error: unknown): string => {
      if (!isConnectionError(error)) {
        return "An unexpected error occurred";
      }

      return "Unable to connect to server. Please check if the backend service is running.";
    },
    [isConnectionError]
  );

  return {
    ...connectionState,
    checkConnection,
    isConnectionError,
    getConnectionErrorMessage,
  };
}

// Simpler hook for just checking if an error is connection-related
export function useConnectionErrorHandler() {
  const isConnectionError = useCallback((error: unknown): boolean => {
    if (!(error instanceof Error)) return false;

    return (
      error.message.includes("Unable to connect") ||
      error.message.includes("server unavailable") ||
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("network") ||
      error.message.includes("timeout")
    );
  }, []);

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      if (!(error instanceof Error)) {
        return "An unexpected error occurred";
      }

      if (isConnectionError(error)) {
        return "Unable to connect to server. Please check if the backend service is running and try again.";
      }

      if (
        error.message.includes("Not authenticated") ||
        error.message.includes("Authentication expired")
      ) {
        return "Your session has expired. Please log in again.";
      }

      if (
        error.message.includes("Access denied") ||
        error.message.includes("Unauthorized")
      ) {
        return "You don't have permission to perform this action.";
      }

      if (error.message.includes("timeout")) {
        return "The request timed out. Please try again.";
      }

      return error.message || "An unexpected error occurred";
    },
    [isConnectionError]
  );

  return {
    isConnectionError,
    getErrorMessage,
  };
}
