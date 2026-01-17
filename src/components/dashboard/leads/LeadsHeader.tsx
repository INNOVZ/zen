import { memo } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";

interface LeadsHeaderProps {
  isRefreshing: boolean;
  onRefresh: () => void;
  onExport: () => void;
}

export const LeadsHeader = memo<LeadsHeaderProps>(
  ({ isRefreshing, onRefresh, onExport }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Captured Leads
        </h1>
        <p className="text-gray-600">
          View and manage leads captured from your chatbots
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
          Refresh
        </Button>
        <Button
          variant="outline"
          onClick={onExport}
          className="w-full sm:w-auto"
        >
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>
    </div>
  )
);

LeadsHeader.displayName = "LeadsHeader";
