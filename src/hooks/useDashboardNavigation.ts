import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Bot, Upload, MessageSquare, TrendingUp } from "lucide-react";
import { QuickActionProps } from "@/types/dashboard";

export const useDashboardNavigation = () => {
  const router = useRouter();

  // Memoized navigation handlers - no userId needed in URLs
  const handleTrainClick = useCallback(() => {
    router.push(`/dashboard/train`);
  }, [router]);

  const handleCustomizeClick = useCallback(() => {
    router.push(`/dashboard/customize`);
  }, [router]);

  const handleChatClick = useCallback(() => {
    router.push(`/dashboard/chat`);
  }, [router]);

  const handleSettingsClick = useCallback(() => {
    router.push(`/dashboard/settings`);
  }, [router]);

  // Configuration-driven quick actions
  const quickActions = useMemo<QuickActionProps[]>(
    () => [
      {
        id: "create-chatbot",
        icon: Bot,
        title: "Create Chatbot",
        onClick: handleCustomizeClick,
      },
      {
        id: "upload-data",
        icon: Upload,
        title: "Upload Data",
        onClick: handleTrainClick,
      },
      {
        id: "test-chat",
        icon: MessageSquare,
        title: "Test Chat",
        onClick: handleChatClick,
      },
      {
        id: "view-analytics",
        icon: TrendingUp,
        title: "View Analytics",
        onClick: handleSettingsClick,
      },
    ],
    [handleCustomizeClick, handleTrainClick, handleChatClick, handleSettingsClick]
  );

  return {
    handleTrainClick,
    handleCustomizeClick,
    handleChatClick,
    handleSettingsClick,
    quickActions,
  };
};
