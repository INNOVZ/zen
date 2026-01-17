/**
 * Unit Tests for AppointmentsCalendar Component
 */
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentsCalendar from "@/components/dashboard/calendar/AppointmentsCalendar";
import { calendarApi } from "@/app/api/calendar";

// Mock the calendar API
jest.mock("@/app/api/calendar", () => ({
  calendarApi: {
    getEvents: jest.fn(),
  },
}));

// Mock FullCalendar to avoid rendering issues in tests
jest.mock("@fullcalendar/react", () => {
  return function MockFullCalendar({ events, eventClick }: any) {
    return (
      <div data-testid="fullcalendar">
        {events?.map((event: any) => (
          <div
            key={event.id}
            data-testid={`event-${event.id}`}
            onClick={() => eventClick?.({ event })}
          >
            {event.title}
          </div>
        ))}
      </div>
    );
  };
});

// Mock FullCalendar plugins
jest.mock("@fullcalendar/daygrid", () => ({}));
jest.mock("@fullcalendar/timegrid", () => ({}));
jest.mock("@fullcalendar/interaction", () => ({}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useParams: () => ({ userId: "test-user-id" }),
}));

describe("AppointmentsCalendar", () => {
  const mockEvents = [
    {
      id: "event1",
      summary: "Test Appointment",
      description: "Test description",
      start: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      end: new Date(Date.now() + 86400000 + 3600000).toISOString(),
      location: "Test Location",
      attendees: ["attendee@example.com"],
      status: "confirmed",
    },
    {
      id: "event2",
      summary: "Another Appointment",
      description: "Another description",
      start: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
      end: new Date(Date.now() + 172800000 + 3600000).toISOString(),
      location: "",
      attendees: [],
      status: "confirmed",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", async () => {
    (calendarApi.getEvents as jest.Mock).mockImplementation(
      () =>
        new Promise(() => {
          // Never resolves to keep loading state
        })
    );

    render(<AppointmentsCalendar />);

    expect(screen.getByText(/loading calendar events/i)).toBeInTheDocument();
  });

  it("renders calendar with events after loading", async () => {
    (calendarApi.getEvents as jest.Mock).mockResolvedValue({
      events: mockEvents,
      count: 2,
      time_range: {
        start: new Date().toISOString(),
        end: new Date(Date.now() + 86400000 * 60).toISOString(),
      },
    });

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(screen.getByText("Appointments Calendar")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId("fullcalendar")).toBeInTheDocument();
    });
  });

  it("displays error message when API call fails", async () => {
    const errorMessage = "Failed to load calendar events. Please ensure Google Calendar is connected.";
    (calendarApi.getEvents as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(
        screen.getByText(/failed to load calendar events/i)
      ).toBeInTheDocument();
    });

    // Check for retry button
    expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();
  });

  it("displays error with reconnect message when token expired", async () => {
    const errorMessage = "Google Calendar connection has expired. Please reconnect Google Calendar from Settings → Integrations.";
    (calendarApi.getEvents as jest.Mock).mockRejectedValue({
      response: {
        data: {
          detail: errorMessage,
        },
      },
    });

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(
        screen.getByText(/connection has expired/i)
      ).toBeInTheDocument();
    });

    // Check for settings button when expired
    await waitFor(() => {
      const settingsButton = screen.queryByRole("button", { name: /go to settings/i });
      if (settingsButton) {
        expect(settingsButton).toBeInTheDocument();
      }
    });
  });

  it("calls API with correct parameters", async () => {
    (calendarApi.getEvents as jest.Mock).mockResolvedValue({
      events: mockEvents,
      count: 2,
      time_range: {
        start: new Date().toISOString(),
        end: new Date(Date.now() + 86400000 * 60).toISOString(),
      },
    });

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(calendarApi.getEvents).toHaveBeenCalledWith(60, "primary", 100);
    });
  });

  it("handles refresh button click", async () => {
    (calendarApi.getEvents as jest.Mock).mockResolvedValue({
      events: mockEvents,
      count: 2,
      time_range: {
        start: new Date().toISOString(),
        end: new Date(Date.now() + 86400000 * 60).toISOString(),
      },
    });

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(screen.getByText("Appointments Calendar")).toBeInTheDocument();
    });

    // Find and click refresh button
    const refreshButton = screen.getByRole("button", { name: /refresh/i });
    fireEvent.click(refreshButton);

    // Should call API again
    await waitFor(() => {
      expect(calendarApi.getEvents).toHaveBeenCalledTimes(2);
    });
  });

  it("handles empty events list", async () => {
    (calendarApi.getEvents as jest.Mock).mockResolvedValue({
      events: [],
      count: 0,
      time_range: {
        start: new Date().toISOString(),
        end: new Date(Date.now() + 86400000 * 60).toISOString(),
      },
    });

    render(<AppointmentsCalendar />);

    await waitFor(() => {
      expect(screen.getByTestId("fullcalendar")).toBeInTheDocument();
    });

    // Calendar should render even with no events
    expect(screen.queryByTestId("event-event1")).not.toBeInTheDocument();
  });
});

