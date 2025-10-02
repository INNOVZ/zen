import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Bot, Upload, MessageSquare, TrendingUp } from "lucide-react";
import { QuickActionProps } from "@/types/dashboard";

export const useDashboardNavigation = (userId: string) => {
  const router = useRouter();

  // Memoized navigation handlers
  const handleTrainClick = useCallback(() => {
    router.push(`/dashboard/${userId}/train`);
  }, [router, userId]);

  const handleCustomizeClick = useCallback(() => {
    router.push(`/dashboard/${userId}/customize`);
  }, [router, userId]);

  const handleChatClick = useCallback(() => {
    router.push(`/dashboard/${userId}/chat`);
  }, [router, userId]);

  const handleSettingsClick = useCallback(() => {
    router.push(`/dashboard/${userId}/settings`);
  }, [router, userId]);

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
