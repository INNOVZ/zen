import { AuthSessionMissingError } from "@supabase/supabase-js";
import {
  AuthenticationUnavailableError,
  ApiRequestError,
  clearCurrentUserContext,
  fetchWithAuth,
  getAuthInfo,
  getCurrentUserContext,
  UnauthenticatedError,
} from "@/app/api/auth";
import { createClient } from "@/lib/supabase/client";

jest.mock("@/lib/supabase/client", () => ({
  createClient: jest.fn(),
}));

describe("getAuthInfo", () => {
  const getSession = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    clearCurrentUserContext();
    (createClient as jest.Mock).mockReturnValue({
      auth: { getSession },
    });
  });

  it("treats a missing session as an expected unauthenticated state", async () => {
    getSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    await expect(getAuthInfo()).rejects.toBeInstanceOf(UnauthenticatedError);
    expect(console.error).not.toHaveBeenCalled();
  });

  it("normalizes AuthSessionMissingError returned while restoring the session", async () => {
    getSession.mockResolvedValue({
      error: new AuthSessionMissingError(),
      data: { session: null },
    });

    await expect(getAuthInfo()).rejects.toBeInstanceOf(UnauthenticatedError);
    expect(console.error).not.toHaveBeenCalled();
  });

  it("keeps transient session failures distinct from logout", async () => {
    getSession.mockResolvedValue({
      data: { session: null },
      error: new Error("temporary auth outage"),
    });

    await expect(getAuthInfo()).rejects.toBeInstanceOf(
      AuthenticationUnavailableError
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  it("uses the restored session without a second remote user lookup", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    await expect(getAuthInfo()).resolves.toEqual({
      token: "access-token",
      userId: "user-id",
    });
    expect(getSession).toHaveBeenCalledTimes(1);
  });

  it("preserves retryable HTTP status without misclassifying Error as empty", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    const fetchMock = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      statusText: "Service Unavailable",
      headers: new Headers({ "content-type": "application/json" }),
      text: jest.fn().mockResolvedValue(
        JSON.stringify({
          detail: "Authentication service is temporarily unavailable. Please retry.",
        })
      ),
    } as unknown as Response);
    Object.defineProperty(global, "fetch", {
      configurable: true,
      writable: true,
      value: fetchMock,
    });

    const request = fetchWithAuth("/api/integrations/cta-buttons");

    await expect(request).rejects.toMatchObject({
      name: "ApiRequestError",
      status: 503,
      message: "Authentication service is temporarily unavailable. Please retry.",
    });
    await expect(request).rejects.toBeInstanceOf(ApiRequestError);
    expect(console.warn).not.toHaveBeenCalledWith(
      expect.stringContaining("Empty error object detected")
    );

    Reflect.deleteProperty(global, "fetch");
  });

  it("preserves a backend resource-not-found message instead of calling it a missing endpoint", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    Object.defineProperty(global, "fetch", {
      configurable: true,
      writable: true,
      value: jest.fn().mockResolvedValue({
        ok: false,
        status: 404,
        statusText: "Not Found",
        headers: new Headers({ "content-type": "application/json" }),
        text: jest
          .fn()
          .mockResolvedValue(JSON.stringify({ detail: "Conversation not found" })),
      } as unknown as Response),
    });

    await expect(
      fetchWithAuth("/api/chat/conversations/conversation-id")
    ).rejects.toMatchObject({
      status: 404,
      message: "Conversation not found",
    });

    Reflect.deleteProperty(global, "fetch");
  });

  it("deduplicates backend-validated tenant context requests", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": "application/json" }),
      text: jest.fn().mockResolvedValue(
        JSON.stringify({
          user: {
            user_id: "user-id",
            user_data: { org_id: "org-id" },
          },
        })
      ),
    } as unknown as Response);
    Object.defineProperty(global, "fetch", {
      configurable: true,
      writable: true,
      value: fetchMock,
    });

    await expect(
      Promise.all([getCurrentUserContext(), getCurrentUserContext()])
    ).resolves.toEqual([
      { userId: "user-id", orgId: "org-id" },
      { userId: "user-id", orgId: "org-id" },
    ]);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    Reflect.deleteProperty(global, "fetch");
  });
});
