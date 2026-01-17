import { memo } from "react";
import { Users } from "lucide-react";

interface LeadsEmptyStateProps {
  searchQuery: string;
}

export const LeadsEmptyState = memo<LeadsEmptyStateProps>(({ searchQuery }) => (
  <div className="text-center py-12">
    <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
    <p className="text-muted-foreground font-medium">
      {searchQuery ? "No leads match your search" : "No leads captured yet"}
    </p>
    {!searchQuery && (
      <p className="text-sm text-muted-foreground mt-2">
        Leads will appear here once captured from your chatbots
      </p>
    )}
  </div>
));

LeadsEmptyState.displayName = "LeadsEmptyState";
