/**
 * Calendar Integration Types
 */

/**
 * Calendar event information
 */
export interface CalendarEvent {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  start: string; // ISO 8601 datetime
  end: string; // ISO 8601 datetime
  timezone?: string;
  location?: string;
  status?: string;
  organizer?: {
    name?: string;
    email?: string;
  };
  attendees?: Array<{
    name?: string;
    email: string;
    status?: "accepted" | "declined" | "tentative" | "needsAction";
  }>;
  metadata?: Record<string, unknown>;
}

/**
 * Calendar events response
 */
export interface CalendarEventsResponse {
  success: boolean;
  events?: CalendarEvent[];
  nextPageToken?: string;
  error?: string;
}

/**
 * Calendar booking request
 */
export interface CalendarBookingRequest {
  title: string;
  description?: string;
  start: string; // ISO 8601 datetime
  end: string; // ISO 8601 datetime
  timezone?: string;
  location?: string;
  attendees?: string[]; // Email addresses
}

/**
 * Calendar configuration
 */
export interface CalendarConfiguration {
  enabled: boolean;
  calendarId?: string;
  syncEvents?: boolean;
  eventNotifications?: boolean;
  config?: Record<string, unknown>;
}
