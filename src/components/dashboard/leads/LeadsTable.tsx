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
import { useTranslation } from "@/contexts/I18nContext";

interface LeadsTableProps {
  leads: LeadInfo[];
  onFormatDate: (dateString: string) => string;
  onDeleteLead: (leadId: string) => void;
}

export const LeadsTable = memo<LeadsTableProps>(
  ({ leads, onFormatDate, onDeleteLead }) => {
    const { t } = useTranslation();

    if (leads.length === 0) {
      return (
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">{t("leads.no_leads")}</p>
        </div>
      );
    }

    return (
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("leads.table_name")}</TableHead>
              <TableHead>{t("leads.table_contact")}</TableHead>
              <TableHead>{t("leads.table_company")}</TableHead>
              <TableHead>{t("leads.table_channel")}</TableHead>
              <TableHead>{t("leads.table_captured_to")}</TableHead>
              <TableHead>{t("leads.table_captured_at")}</TableHead>
              <TableHead className="text-right">{t("leads.table_actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">
                  {lead.name || (
                    <span className="text-muted-foreground">{t("leads.unknown_name")}</span>
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
                        {t("leads.no_contact_info")}
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
                  <Badge variant="outline">{lead.channel || t("leads.channel_website")}</Badge>
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
                    aria-label={t("leads.delete_lead_aria")}
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
