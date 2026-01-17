import { memo } from "react";
import { LeadInfo } from "@/app/api/leads";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mail, Phone, Calendar, CheckCircle2, Trash2 } from "lucide-react";

interface LeadsTableProps {
  leads: LeadInfo[];
  onFormatDate: (dateString: string) => string;
  onDeleteLead: (leadId: string) => void;
}

export const LeadsTable = memo<LeadsTableProps>(
  ({ leads, onFormatDate, onDeleteLead }) => {
  if (leads.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No leads match your search</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead>Captured To</TableHead>
            <TableHead>Captured At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">
                {lead.name || (
                  <span className="text-muted-foreground">Unknown</span>
                )}
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  {lead.email && (
                    <div className="flex items-center gap-1 text-sm">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <span>{lead.email}</span>
                    </div>
                  )}
                  {lead.phone && (
                    <div className="flex items-center gap-1 text-sm">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      <span>{lead.phone}</span>
                    </div>
                  )}
                  {!lead.email && !lead.phone && (
                    <span className="text-muted-foreground text-sm">
                      No contact info
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {lead.company || (
                  <span className="text-muted-foreground">-</span>
                )}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{lead.channel || "website"}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {lead.captured_to?.map((dest) => (
                    <Badge key={dest} variant="secondary" className="text-xs">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      {dest}
                    </Badge>
                  )) || (
                    <span className="text-muted-foreground">-</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {onFormatDate(lead.captured_at)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteLead(lead.id)}
                  aria-label="Delete lead"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
  }
);

LeadsTable.displayName = "LeadsTable";
