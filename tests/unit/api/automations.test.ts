import { automationsApi } from "@/app/api/automations";
import { fetchWithAuth } from "@/app/api/auth";

jest.mock("@/app/api/auth", () => ({ fetchWithAuth: jest.fn() }));

const mockedFetch = fetchWithAuth as jest.MockedFunction<typeof fetchWithAuth>;

describe("automationsApi", () => {
  beforeEach(() => mockedFetch.mockReset());

  it("loads tenant automations through the authenticated API", async () => {
    mockedFetch.mockResolvedValueOnce({ automations: [{ automation_key: "platform_test_v1" }] });
    await expect(automationsApi.list()).resolves.toEqual([
      { automation_key: "platform_test_v1" },
    ]);
    expect(mockedFetch).toHaveBeenCalledWith("/api/automations");
  });

  it("sends a versioned manual trigger without provider routing details", async () => {
    mockedFetch.mockResolvedValueOnce({ accepted: true });
    await automationsApi.trigger("platform_test_v1", {
      schema_version: 1,
      resource: { type: "system.test", id: "test-1" },
      payload: { message: "hello" },
      idempotency_key: "manual:test-1",
    });
    expect(mockedFetch).toHaveBeenCalledWith(
      "/api/automations/platform_test_v1/trigger",
      expect.objectContaining({ method: "POST" })
    );
    expect(JSON.parse(String(mockedFetch.mock.calls[0][1]?.body))).not.toHaveProperty(
      "webhook_url"
    );
  });

  it("uses the safe retry endpoint", async () => {
    mockedFetch.mockResolvedValueOnce({ accepted: true });
    await automationsApi.retry("execution/unsafe");
    expect(mockedFetch).toHaveBeenCalledWith(
      "/api/automations/executions/execution%2Funsafe/retry",
      { method: "POST" }
    );
  });

  it("creates a reviewed entry point without accepting a provider webhook", async () => {
    mockedFetch.mockResolvedValueOnce({ entrypoint_key: "book_table" });
    await automationsApi.createEntrypoint({
      entrypoint_key: "book_table",
      display_name: "Book a table",
      surface: "CHAT_WIDGET",
      trigger_mode: "CTA",
      cta_label: "Book now",
      cta_message: "I would like to book a table",
      intent_keys: [],
      engine_type: "N8N",
      automation_key: "restaurant_booking_v1",
      input_schema_version: 1,
      input_schema: {
        type: "object",
        properties: { message: { type: "string" } },
        additionalProperties: false,
      },
      customer_invocable: true,
      requires_confirmation: true,
      enabled: false,
      sort_order: 100,
    });

    const body = JSON.parse(String(mockedFetch.mock.calls[0][1]?.body));
    expect(mockedFetch).toHaveBeenCalledWith(
      "/api/automations/entrypoints",
      expect.objectContaining({ method: "POST" })
    );
    expect(body).not.toHaveProperty("webhook_url");
    expect(body).not.toHaveProperty("workflow_id");
  });

  it("invokes an entry point with an idempotency key and explicit confirmation", async () => {
    mockedFetch.mockResolvedValueOnce({ status: "ACCEPTED", engine_type: "N8N" });
    await automationsApi.invokeEntrypoint("book/table", {
      input_schema_version: 1,
      resource: { type: "conversation", id: "chat-1" },
      payload: { message: "Tomorrow at seven" },
      idempotency_key: "request-12345",
      confirmation_granted: true,
    });

    expect(mockedFetch).toHaveBeenCalledWith(
      "/api/automations/entrypoints/book%2Ftable/invoke",
      expect.objectContaining({ method: "POST" })
    );
  });
});
