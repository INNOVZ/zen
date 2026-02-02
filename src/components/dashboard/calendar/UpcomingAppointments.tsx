"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { calendarApi, type CalendarEvent } from "@/app/api/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  RefreshCw,
  AlertCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/I18nContext";

interface UpcomingAppointmentsProps {
  onEventClick?: (event: CalendarEvent) => void;
}

export default function UpcomingAppointments({
  onEventClick,
}: UpcomingAppointmentsProps) {
  const { t, language } = useTranslation();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const isTokenExpiredError = useCallback((error: unknown): boolean => {
    if (!error) return false;
    const errorStr = String(error).toLowerCase();
    const errorObj = error as {
      response?: {
        data?: { detail?: string };
        status?: number;
        headers?: Record<string, string>;
      };
      message?: string;
      status?: number;
    };

    // Check for 401 status or token-expired header
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
  }, []);

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setIsTokenExpired(false);
      const data = await calendarApi.getEvents(60); // 60 days ahead
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
  }, [isTokenExpiredError, t]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Sort events by start time (upcoming first) and filter out past events
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    return events
      .filter((event) => {
        const startDate = new Date(event.start);
        return startDate >= now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        return dateA.getTime() - dateB.getTime();
      });
  }, [events]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfterTomorrow = new Date(now);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    dayAfterTomorrow.setHours(0, 0, 0, 0);

    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);

    if (eventDate.getTime() === now.setHours(0, 0, 0, 0)) {
      return t("calendar.today");
    } else if (eventDate.getTime() === tomorrow.getTime()) {
      return t("calendar.tomorrow");
    } else if (eventDate.getTime() === dayAfterTomorrow.getTime()) {
      return dayAfterTomorrow.toLocaleDateString(language === "ar" ? "ar-EG" : language === "es" ? "es-ES" : "en-US", { weekday: "short" });
    } else {
      return date.toLocaleDateString(language === "ar" ? "ar-EG" : language === "es" ? "es-ES" : "en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(language === "ar" ? "ar-EG" : language === "es" ? "es-ES" : "en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getTimeUntilEvent = (dateString: string) => {
    const now = new Date();
    const eventDate = new Date(dateString);
    const diffMs = eventDate.getTime() - now.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays}d`;
    } else if (diffHours > 0) {
      return `${diffHours}h`;
    } else if (diffMins > 0) {
      return `${diffMins}m`;
    } else {
      return "Now";
    }
  };

  // Extract contact details from event (email from attendees, phone/email from description for backward compatibility)
  const extractContactDetails = (event: CalendarEvent) => {
    const contacts: { email?: string; phone?: string } = {};

    // Get email from attendees (first attendee email)
    if (event.attendees && event.attendees.length > 0) {
      contacts.email = event.attendees[0].email;
    }

    // Parse description for backward compatibility with existing events
    if (event.description) {
      const emailMatch = event.description.match(/Email:\s*([^\n\r]+)/i);
      const phoneMatch = event.description.match(/Phone:\s*([^\n\r]+)/i);

      if (emailMatch && emailMatch[1]) {
        contacts.email = emailMatch[1].trim();
      }
      if (phoneMatch && phoneMatch[1]) {
        contacts.phone = phoneMatch[1].trim();
      }
    }

    return contacts;
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("calendar.upcoming_appointments")}</CardTitle>
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
          <CardTitle>{t("calendar.upcoming_appointments")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">{error}</AlertDescription>
          </Alert>
          {isTokenExpired ? (
            <Link href="/dashboard/settings">
              <Button variant="default" size="sm" className="mt-4 w-full">
                {t("calendar.go_to_settings")}
              </Button>
            </Link>
          ) : (
            <Button
              onClick={loadEvents}
              variant="outline"
              size="sm"
              className="mt-4 w-full"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> {t("common.retry")}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{t("calendar.upcoming_appointments")}</CardTitle>
            <CardDescription>
              {upcomingEvents.length > 0
                ? t("calendar.upcoming_count", { count: upcomingEvents.length.toString() })
                : t("calendar.no_upcoming_desc")}
            </CardDescription>
          </div>
          <Button
            onClick={loadEvents}
            variant="outline"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {upcomingEvents.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">{t("calendar.no_upcoming")}</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
            {upcomingEvents.map((event) => {
              // Check if it's an all-day event (date only, no time component - no 'T' in ISO string)
              const isAllDay = !event.start.includes("T");
              const contacts = extractContactDetails(event);

              return (
                <div
                  key={event.id}
                  className={cn(
                    "p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer",
                    onEventClick && "hover:shadow-md"
                  )}
                  onClick={() => onEventClick?.(event)}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-sm leading-tight flex-1">
                      {event.summary || event.title || "No Title"}
                    </h4>
                    {event.status && event.status !== "confirmed" && (
                      <Badge variant="outline" className="text-xs">
                        {event.status}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">
                        {formatDate(event.start)}
                        {!isAllDay && ` • ${formatTime(event.start)}`}
                        {event.end && !isAllDay && (
                          <span> - {formatTime(event.end)}</span>
                        )}
                      </span>
                      <span className="text-xs font-medium text-blue-600">
                        {getTimeUntilEvent(event.start)}
                      </span>
                    </div>

                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}

                    {(contacts.email || contacts.phone) && (
                      <div className="flex flex-col gap-1 pt-1">
                        {contacts.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate text-xs">
                              {contacts.email}
                            </span>
                          </div>
                        )}
                        {contacts.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate text-xs">
                              {contacts.phone}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
