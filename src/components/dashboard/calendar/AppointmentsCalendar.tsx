"use client";

import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarApi, type CalendarEvent } from "@/app/api/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Loader2, RefreshCw, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useTranslation } from "@/contexts/I18nContext";

interface EventClickInfo {
  event: {
    id: string;
    title: string;
    start: Date | null;
    end: Date | null;
    extendedProps: {
      description?: string;
      location?: string;
      attendees?: string[];
      status?: string;
    };
  };
}

export default function AppointmentsCalendar() {
  const { t, language } = useTranslation();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    EventClickInfo["event"] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const isTokenExpiredError = (error: unknown): boolean => {
    if (!error) return false;
    const errorStr = String(error).toLowerCase();
    const errorObj = error as {
      response?: { data?: { detail?: string }; status?: number };
      message?: string;
      status?: number;
    };

    // Check for 401 status
    if (errorObj.response?.status === 401 || errorObj.status === 401) {
      return true;
    }

    // Check error message for token expiry indicators
    const detail =
      errorObj.response?.data?.detail || errorObj.message || errorStr;
    return (
      detail.toLowerCase().includes("invalid_grant") ||
      detail.toLowerCase().includes("token has been expired") ||
      detail.toLowerCase().includes("token has expired") ||
      detail.toLowerCase().includes("revoked") ||
      detail.toLowerCase().includes("reconnect") ||
      detail.toLowerCase().includes("credentials are incomplete") ||
      detail.toLowerCase().includes("credentials are corrupted") ||
      detail.toLowerCase().includes("necessary fields")
    );
  };

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setIsTokenExpired(false);
      const data = await calendarApi.getEvents(60);
      setEvents(data.events || []);
    } catch (err: unknown) {
      console.error("Failed to load calendar events:", err);

      // Check if this is a token expiry error
      if (isTokenExpiredError(err)) {
        setIsTokenExpired(true);
        setError(
          t("calendar.google_credentials_error")
        );
        return;
      }

      let errorMessage = t("calendar.google_credentials_error");

      if (err && typeof err === "object") {
        const errorObj = err as {
          response?: { data?: { detail?: string } };
          message?: string;
        };

        if (errorObj.response?.data?.detail) {
          errorMessage = errorObj.response.data.detail;
        } else if (errorObj.message) {
          errorMessage = errorObj.message;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  useEffect(() => {
    const links = [
      "https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.19/main.min.css",
      "https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.19/main.min.css",
      "https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.19/main.min.css",
    ];

    links.forEach((href) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) {
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.summary || event.title,
    start: event.start,
    end: event.end,
    description: event.description,
    location: event.location,
    extendedProps: {
      attendees: event.attendees?.map((a) => a.email),
      status: event.status,
      description: event.description,
      location: event.location,
    },
  }));

  const handleEventClick = (info: EventClickInfo) => {
    setSelectedEvent(info.event);
    setIsDialogOpen(true);
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) {
      return;
    }

    const confirmed = window.confirm(
      "Delete this appointment? This action cannot be undone." // TODO: add translation
    );
    if (!confirmed) {
      return;
    }

    try {
      setIsDeleting(true);
      await calendarApi.deleteEvent(selectedEvent.id);
      setEvents((prev) =>
        prev.filter((event) => event.id !== selectedEvent.id)
      );
      setIsDialogOpen(false);
      setSelectedEvent(null);
      toast.success("Appointment deleted");
    } catch (err) {
      console.error("Failed to delete appointment:", err);
      toast.error("Failed to delete appointment");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <CardTitle>{t("calendar.appointments_calendar")}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {t("common.loading")}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <CardTitle>{t("calendar.appointments_calendar")}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-96">
          <div className="text-center max-w-md">
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-left">{error}</AlertDescription>
            </Alert>
            {isTokenExpired ? (
              <Button
                onClick={() => {
                  window.location.href = `/dashboard/settings`;
                }}
                variant="default"
                className="w-full"
              >
                Go to Settings to Reconnect
              </Button>
            ) : (
              <Button onClick={loadEvents} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                {t("common.retry")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#5d7dde]" />
              <div>
                <CardTitle>{t("sidebar.calendar")}</CardTitle>
                <CardDescription>
                  View and manage your calendar events
                </CardDescription>
              </div>
            </div>
            <Button
              onClick={loadEvents}
              variant="outline"
              size="sm"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              {t("common.refresh")}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="fullcalendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              locale={language === "ar" ? "ar" : language}
              direction="ltr"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              events={calendarEvents}
              eventClick={handleEventClick}
              height="auto"
              eventTimeFormat={{
                hour: "2-digit",
                minute: "2-digit",
                meridiem: "short",
              }}
              slotMinTime="06:00:00"
              slotMaxTime="22:00:00"
              nowIndicator={true}
              editable={false}
              selectable={false}
              dayMaxEvents={3}
              moreLinkClick="popover"
            />
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedEvent?.title}
              {selectedEvent?.extendedProps.status && (
                <Badge variant="outline">
                  {selectedEvent.extendedProps.status}
                </Badge>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedEvent?.start &&
                selectedEvent.start.toLocaleString(language === "ar" ? "ar-EG" : language === "es" ? "es-ES" : "en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              {selectedEvent?.end &&
                ` - ${selectedEvent.end.toLocaleString(language === "ar" ? "ar-EG" : language === "es" ? "es-ES" : "en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {selectedEvent?.extendedProps.description && (
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {selectedEvent.extendedProps.description}
                </p>
              </div>
            )}
            {selectedEvent?.extendedProps.location && (
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedEvent.extendedProps.location}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              disabled={isDeleting}
            >
              {t("common.cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteEvent}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : t("leads.delete")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .fullcalendar-container {
          font-family: inherit;
        }
        .fc {
          font-family: inherit;
        }
        .fc-event {
          cursor: pointer;
        }
        .fc-event:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
