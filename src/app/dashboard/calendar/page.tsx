"use client";

import { Suspense } from "react";
import AppointmentsCalendar from "@/components/dashboard/calendar/AppointmentsCalendar";
import UpcomingAppointments from "@/components/dashboard/calendar/UpcomingAppointments";
import { LoadingSkeleton } from "@/components/dashboard/home/LoadingSkeleton";
import ErrorBoundary, { SimpleErrorFallback } from "@/components/ErrorBoundary";
import type { CalendarEvent } from "@/app/api/types/integration/calendar";
import { DASHBOARD_CONFIG } from "@/types/dashboard";
import { useAuth } from "@/hooks/useAuthGuard";

export default function CalendarPage() {
  const { user, isLoading: isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-muted-foreground">Loading calendar...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <p className="text-muted-foreground">Authentication required</p>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEventClick = (_event: CalendarEvent) => {
    // Currently unused, but kept for future functionality
  };

  return (
    <div className={DASHBOARD_CONFIG.CONTAINER_CLASSES}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ErrorBoundary fallback={SimpleErrorFallback}>
            <Suspense fallback={<LoadingSkeleton />}>
              <UpcomingAppointments />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div className="lg:col-span-2">
          <ErrorBoundary fallback={SimpleErrorFallback}>
            <Suspense fallback={<LoadingSkeleton />}>
              <AppointmentsCalendar />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
