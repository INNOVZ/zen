import { memo } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface LeadsHeaderProps {
  isRefreshing: boolean;
  onRefresh: () => void;
  onExport: () => void;
}

export const LeadsHeader = memo<LeadsHeaderProps>(
  ({ isRefreshing, onRefresh, onExport }) => {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("leads.title")}
          </h1>
          <p className="text-gray-600">
            {t("leads.subtitle")}
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
            {t("leads.refresh_list")}
          </Button>
          <Button
            variant="outline"
            onClick={onExport}
            className="w-full sm:w-auto"
          >
            <Download className="h-4 w-4 mr-2" />
            {t("leads.export_csv")}
          </Button>
        </div>
      </div>
    );
  }
);

LeadsHeader.displayName = "LeadsHeader";
