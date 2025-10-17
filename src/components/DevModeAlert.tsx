"use client";

import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { InfoIcon, X } from "lucide-react";

interface DevModeAlertProps {
  show: boolean;
  onDismiss?: () => void;
}

export default function DevModeAlert({ show, onDismiss }: DevModeAlertProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    setIsDevelopment(process.env.NODE_ENV === "development");
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (!isDevelopment || !show || isDismissed) {
    return null;
  }

  return (
    <Alert className="border-blue-200 bg-blue-50 text-blue-800 mb-4">
      <InfoIcon className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <div>
          <span className="font-medium">Development Mode: </span>
          Backend server is not available. Some features will show placeholder
          data or be disabled.
          <br />
          <span className="text-sm">
            Start your backend server to enable full functionality.
          </span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleDismiss}
          className="ml-4 h-6 w-6 p-0 hover:bg-blue-100"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
