// Calendar API Client
import { fetchWithAuth } from "./auth";
import type {
  CalendarEvent,
  CalendarEventsResponse,
  CalendarBookingRequest,
  CalendarConfiguration
} from "./types/integration/calendar";

// Re-export types for usage in components
export type {
  CalendarEvent,
  CalendarEventsResponse,
  CalendarBookingRequest,
  CalendarConfiguration
};

export const calendarApi = {
  /**
   * Get calendar events for the authenticated user's organization
   * @param daysAhead Number of days ahead to fetch events (default: 30)
   * @param calendarId Calendar ID (default: 'primary')
   * @param maxResults Maximum number of events to return (default: 100)
   */
  async getEvents(
    daysAhead: number = 30,
    calendarId: string = "primary",
    maxResults: number = 100
  ): Promise<CalendarEventsResponse> {
    const params = new URLSearchParams({
      days_ahead: daysAhead.toString(),
      calendar_id: calendarId,
      max_results: maxResults.toString(),
    });

    return fetchWithAuth(`/api/calendar/events?${params.toString()}`, {
      method: "GET",
    });
  },

  /**
   * Delete a calendar event
   */
  async deleteEvent(
    eventId: string,
    calendarId: string = "primary"
  ): Promise<{ deleted: boolean; event_id: string }> {
    const params = new URLSearchParams({
      calendar_id: calendarId,
    });

    return fetchWithAuth(
      `/api/calendar/events/${eventId}?${params.toString()}`,
      {
        method: "DELETE",
      }
    );
  },
};
