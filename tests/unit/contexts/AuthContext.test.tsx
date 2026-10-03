import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AuthProvider, useAuthContext } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase/client";
import { clearCurrentUserContext } from "@/app/api/auth";
import { AuthSessionMissingError } from "@supabase/supabase-js";

const replace = jest.fn();
const refresh = jest.fn();
const router = { refresh, replace };

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

jest.mock("@/lib/supabase/client", () => ({
  createClient: jest.fn(),
}));

jest.mock("@/app/api/auth", () => ({
  clearCurrentUserContext: jest.fn(),
}));

describe("AuthProvider", () => {
  const getSession = jest.fn();
  const signOut = jest.fn();
  const unsubscribe = jest.fn();
  let authStateCallback: (event: string, session: unknown) => void;

  beforeEach(() => {
    jest.clearAllMocks();
    authStateCallback = jest.fn();
    (createClient as jest.Mock).mockReturnValue({
      auth: {
        getSession,
        signOut,
        onAuthStateChange: jest.fn((callback) => {
          authStateCallback = callback;
          return { data: { subscription: { unsubscribe } } };
        }),
      },
    });
  });

  function SignOutButton() {
    const auth = useAuthContext();
    return <button onClick={() => void auth.signOut()}>Sign out</button>;
  }

  it("restores one shared session and renders protected children", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    render(
      <AuthProvider>
        <div>Protected dashboard</div>
      </AuthProvider>
    );

    expect(await screen.findByText("Protected dashboard")).toBeInTheDocument();
    expect(getSession).toHaveBeenCalledTimes(1);
    expect(replace).not.toHaveBeenCalled();
  });

  it("removes protected children and redirects when Supabase signs out", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });

    render(
      <AuthProvider>
        <div>Protected dashboard</div>
      </AuthProvider>
    );
    await screen.findByText("Protected dashboard");

    act(() => authStateCallback("SIGNED_OUT", null));

    await waitFor(() =>
      expect(screen.queryByText("Protected dashboard")).not.toBeInTheDocument()
    );
    expect(replace).toHaveBeenCalledWith("/auth/login");
  });

  it("clears cached identity when signing out through the provider", async () => {
    getSession.mockResolvedValue({
      data: {
        session: {
          access_token: "access-token",
          user: { id: "user-id" },
        },
      },
      error: null,
    });
    signOut.mockResolvedValue({ error: null });

    render(
      <AuthProvider>
        <SignOutButton />
      </AuthProvider>
    );

    fireEvent.click(await screen.findByRole("button", { name: "Sign out" }));

    await waitFor(() => expect(signOut).toHaveBeenCalledTimes(1));
    expect(clearCurrentUserContext).toHaveBeenCalled();
    expect(replace).toHaveBeenCalledWith("/auth/login");
    expect(refresh).toHaveBeenCalled();
  });

  it("offers recovery instead of logging out during a transient session failure", async () => {
    getSession
      .mockResolvedValueOnce({
        data: { session: null },
        error: new Error("temporary auth outage"),
      })
      .mockResolvedValueOnce({
        data: {
          session: {
            access_token: "access-token",
            user: { id: "user-id" },
          },
        },
        error: null,
      });

    render(
      <AuthProvider>
        <div>Protected dashboard</div>
      </AuthProvider>
    );

    expect(
      await screen.findByRole("heading", { name: "Unable to verify your session" })
    ).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(await screen.findByText("Protected dashboard")).toBeInTheDocument();
    expect(getSession).toHaveBeenCalledTimes(2);
  });

  it("redirects when session restoration reports a missing session", async () => {
    getSession.mockResolvedValue({
      data: { session: null },
      error: new AuthSessionMissingError(),
    });

    render(
      <AuthProvider>
        <div>Protected dashboard</div>
      </AuthProvider>
    );

    await waitFor(() => expect(replace).toHaveBeenCalledWith("/auth/login"));
    expect(
      screen.queryByRole("heading", { name: "Unable to verify your session" })
    ).not.toBeInTheDocument();
  });

  it("does not let a stale startup read overwrite a newer auth event", async () => {
    let resolveSessionRead: ((value: unknown) => void) | undefined;
    getSession.mockReturnValue(
      new Promise((resolve) => {
        resolveSessionRead = resolve;
      })
    );

    render(
      <AuthProvider>
        <div>Protected dashboard</div>
      </AuthProvider>
    );

    act(() =>
      authStateCallback("SIGNED_IN", {
        access_token: "new-access-token",
        user: { id: "new-user-id" },
      })
    );
    expect(await screen.findByText("Protected dashboard")).toBeInTheDocument();

    await act(async () => {
      resolveSessionRead?.({ data: { session: null }, error: null });
    });

    expect(screen.getByText("Protected dashboard")).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });
});
