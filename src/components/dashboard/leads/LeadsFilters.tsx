import { memo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface LeadsFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const LeadsFilters = memo<LeadsFiltersProps>(
  ({ searchQuery, onSearchChange }) => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        placeholder="Search by name, email, phone, company..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10"
        aria-label="Search leads"
      />
    </div>
  )
);

LeadsFilters.displayName = "LeadsFilters";
