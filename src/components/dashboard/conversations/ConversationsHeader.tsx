import { memo } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ConversationsHeaderProps {
  isRefreshing: boolean;
  onRefresh: () => void;
}

export const ConversationsHeader = memo<ConversationsHeaderProps>(
  ({ isRefreshing, onRefresh }) => {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("conversations.title")}
          </h1>
          <p className="text-gray-600">
            {t("conversations.subtitle")}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="w-full sm:w-auto"
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
            />
            {t("conversations.refresh")}
          </Button>
        </div>
      </div>
    );
  }
);

ConversationsHeader.displayName = "ConversationsHeader";
