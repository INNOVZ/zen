import { memo } from "react";
import { Button } from "@/components/ui/button";

interface LeadsPaginationProps {
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
}

export const LeadsPagination = memo<LeadsPaginationProps>(
  ({ page, total, pageSize, onPageChange }) => {
    if (total <= pageSize) return null;

    const totalPages = Math.ceil(total / pageSize);
    const startRecord = (page - 1) * pageSize + 1;
    const endRecord = Math.min(page * pageSize, total);

    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
        <div className="text-sm text-muted-foreground">
          Showing {startRecord} to {endRecord} of {total} leads
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="w-full sm:w-auto"
          >
            Previous
          </Button>
          <div className="flex items-center justify-center px-3 py-2 text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="w-full sm:w-auto"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
);

LeadsPagination.displayName = "LeadsPagination";
