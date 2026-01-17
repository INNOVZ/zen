/**
 * Unit Tests for Calendar API Client
 */
import { calendarApi } from "@/app/api/calendar";
import { fetchWithAuth } from "@/app/api/auth";

// Mock fetchWithAuth
jest.mock("@/app/api/auth", () => ({
  fetchWithAuth: jest.fn(),
}));

describe("calendarApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getEvents", () => {
    it("calls fetchWithAuth with correct URL and default parameters", async () => {
      const mockResponse = {
        events: [],
        count: 0,
        time_range: {
          start: new Date().toISOString(),
          end: new Date(Date.now() + 86400000 * 30).toISOString(),
        },
      };

      (fetchWithAuth as jest.Mock).mockResolvedValue(mockResponse);

      const result = await calendarApi.getEvents();

      expect(fetchWithAuth).toHaveBeenCalledWith(
        expect.stringContaining("/api/calendar/events"),
        { method: "GET" }
      );

      const callUrl = (fetchWithAuth as jest.Mock).mock.calls[0][0];
      expect(callUrl).toContain("days_ahead=30");
      expect(callUrl).toContain("calendar_id=primary");
      expect(callUrl).toContain("max_results=100");

      expect(result).toEqual(mockResponse);
    });

    it("calls fetchWithAuth with custom parameters", async () => {
      const mockResponse = {
        events: [],
        count: 0,
        time_range: {
          start: new Date().toISOString(),
          end: new Date(Date.now() + 86400000 * 60).toISOString(),
        },
      };

      (fetchWithAuth as jest.Mock).mockResolvedValue(mockResponse);

      const result = await calendarApi.getEvents(60, "custom-calendar-id", 50);

      const callUrl = (fetchWithAuth as jest.Mock).mock.calls[0][0];
      expect(callUrl).toContain("days_ahead=60");
      expect(callUrl).toContain("calendar_id=custom-calendar-id");
      expect(callUrl).toContain("max_results=50");

      expect(result).toEqual(mockResponse);
    });

    it("handles API errors correctly", async () => {
      const error = new Error("Failed to fetch calendar events");
      (fetchWithAuth as jest.Mock).mockRejectedValue(error);

      await expect(calendarApi.getEvents()).rejects.toThrow(
        "Failed to fetch calendar events"
      );
    });

    it("handles HTTP errors with detail message", async () => {
      const error = {
        response: {
          data: {
            detail: "Google Calendar connection has expired. Please reconnect.",
          },
        },
      };
      (fetchWithAuth as jest.Mock).mockRejectedValue(error);

      await expect(calendarApi.getEvents()).rejects.toEqual(error);
    });
  });
});

