import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import { getUserFirstName, type DisplayUser } from "@/utils/userUtils";
import { useTranslation } from "@/contexts/I18nContext";

interface DashboardHeaderProps {
  user: DisplayUser | null;
  userId: string;
  onTrainClick: () => void;
  onCustomizeClick: () => void;
}

export function DashboardHeader({
  user,
  onTrainClick,
  onCustomizeClick,
}: DashboardHeaderProps) {
  const firstName = getUserFirstName(user);
  const { t } = useTranslation();

  return (
    <header className="flex justify-between lg:flex-row flex-col items-center bg-[#5d7dde] p-8 rounded-2xl">
      <div>
        <h1 className="text-3xl text-white font-bold">
          {t("dashboard.welcome_user", { name: firstName })}
        </h1>
        <p className="text-white mt-1">{t("dashboard.welcome_subtitle")}</p>
      </div>
      <div
        className="flex gap-2 mt-5 lg:mt-0"
        role="group"
        aria-label="Primary actions"
      >
        <Button
          onClick={onTrainClick}
          variant="outline"
          className="pointer flex items-center gap-2"
          aria-label="Add training data"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          {t("train.data_ingestion")}
        </Button>
        <Button
          onClick={onCustomizeClick}
          className="pointer flex items-center gap-2"
          aria-label="Create new chatbot"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          {t("dashboard.create_chatbot")}
        </Button>
      </div>
    </header>
  );
}
