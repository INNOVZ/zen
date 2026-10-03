import { memo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ConversationsFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ConversationsFilters = memo<ConversationsFiltersProps>(
  ({ searchQuery, onSearchChange }) => {
    const { t } = useTranslation();
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder={t("conversations.search_placeholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
          aria-label={t("conversations.search_placeholder")}
        />
      </div>
    );
  }
);

ConversationsFilters.displayName = "ConversationsFilters";
