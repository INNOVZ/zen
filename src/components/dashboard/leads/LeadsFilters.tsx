import { memo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface LeadsFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const LeadsFilters = memo<LeadsFiltersProps>(
  ({ searchQuery, onSearchChange }) => {
    const { t } = useTranslation();
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder={t("leads.search_placeholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
          aria-label={t("leads.search_aria")}
        />
      </div>
    );
  }
);

LeadsFilters.displayName = "LeadsFilters";
