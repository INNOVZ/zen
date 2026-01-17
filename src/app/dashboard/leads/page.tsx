"use client";

import { useState, useEffect, useCallback } from "react";
import { DASHBOARD_CONFIG } from "@/types/dashboard";
import { leadsApi, type LeadInfo, type LeadsStats } from "@/app/api/leads";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  LeadsHeader,
  LeadsStatsGrid,
  LeadsFilters,
  LeadsTable,
  LeadsPagination,
  LeadsEmptyState,
} from "@/components/dashboard/leads";
import { useAuth } from "@/hooks/useAuthGuard";

export default function LeadsDashboardPage() {
  const { isLoading: isAuthLoading } = useAuth();
  const [leads, setLeads] = useState<LeadInfo[]>([]);
  const [stats, setStats] = useState<LeadsStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadLeads = useCallback(
    async (pageNum: number = 1) => {
      try {
        setIsLoading(pageNum === 1);
        setIsRefreshing(pageNum > 1);
        setError(null);

        const response = await leadsApi.getLeads(pageNum, pageSize);
        setLeads(response.leads);
        setTotal(response.total);
        setPage(response.page);
      } catch (err) {
        console.error("Failed to load leads:", err);
        setError("Failed to load leads. Please try again.");
        toast.error("Failed to load leads");
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [pageSize]
  );

  const loadStats = useCallback(async () => {
    try {
      const statsData = await leadsApi.getLeadsStats();
      setStats(statsData);
    } catch (err) {
      console.error("Failed to load leads stats:", err);
    }
  }, []);

  useEffect(() => {
    if (!isAuthLoading) {
      loadLeads(1);
      loadStats();
    }
  }, [loadLeads, loadStats, isAuthLoading]);

  const handleRefresh = () => {
    loadLeads(page);
    loadStats();
  };

  const handleDeleteLead = useCallback(
    async (leadId: string) => {
      const confirmed = window.confirm(
        "Delete this lead? This will permanently remove the conversation and related data."
      );
      if (!confirmed) {
        return;
      }

      try {
        await leadsApi.deleteLead(leadId);
        toast.success("Lead deleted");
        await loadLeads(page);
        await loadStats();
      } catch (err) {
        console.error("Failed to delete lead:", err);
        toast.error("Failed to delete lead");
      }
    },
    [loadLeads, loadStats, page]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= Math.ceil(total / pageSize)) {
        loadLeads(newPage);
      }
    },
    [total, pageSize, loadLeads]
  );

  const filteredLeads = leads.filter((lead) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      lead.name?.toLowerCase().includes(query) ||
      lead.email?.toLowerCase().includes(query) ||
      lead.phone?.toLowerCase().includes(query) ||
      lead.company?.toLowerCase().includes(query) ||
      lead.chatbot_name?.toLowerCase().includes(query)
    );
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const exportLeads = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Channel",
      "Captured To",
      "Captured At",
    ];
    const rows = filteredLeads.map((lead) => [
      lead.name || "",
      lead.email || "",
      lead.phone || "",
      lead.company || "",
      lead.channel || "website",
      lead.captured_to?.join(", ") || "",
      formatDate(lead.captured_at),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success("Leads exported successfully");
  };

  if (isLoading || isAuthLoading) {
    return (
      <div
        className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
      >
        <div className="container mx-auto p-8">
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p>Loading leads...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
    >
      <div className="container mx-auto p-8 space-y-6">
        <LeadsHeader
          isRefreshing={isRefreshing}
          onRefresh={handleRefresh}
          onExport={exportLeads}
        />

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <LeadsStatsGrid stats={stats} isLoading={isLoading} />

        <Card>
          <CardHeader>
            <CardTitle>Leads List</CardTitle>
            <CardDescription>{total} total leads captured</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LeadsFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {filteredLeads.length === 0 ? (
              <LeadsEmptyState searchQuery={searchQuery} />
            ) : (
              <>
                <LeadsTable
                  leads={filteredLeads}
                  onFormatDate={formatDate}
                  onDeleteLead={handleDeleteLead}
                />
                <LeadsPagination
                  page={page}
                  total={total}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
