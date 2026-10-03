"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  isAuthSessionMissingError,
  type Session,
  type User,
} from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { clearCurrentUserContext } from "@/app/api/auth";

interface AuthContextValue {
  isLoading: boolean;
  isAuthorized: boolean;
  session: Session | null;
  user: User | null;
  error: string | null;
  retry: () => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [restoreError, setRestoreError] = useState<string | null>(null);
  const [restoreAttempt, setRestoreAttempt] = useState(0);
  const userIdRef = useRef<string | null>(null);

  const retry = useCallback(() => {
    setRestoreError(null);
    setIsLoading(true);
    setRestoreAttempt((attempt) => attempt + 1);
  }, []);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    clearCurrentUserContext();
    userIdRef.current = null;
    setSession(null);
    router.replace("/auth/login");
    router.refresh();
  }, [router]);

  useEffect(() => {
    let active = true;
    let authEventObserved = false;
    const supabase = createClient();

    const applySession = (nextSession: Session | null) => {
      if (!active) return;

      const nextUserId = nextSession?.user.id ?? null;
      if (userIdRef.current !== nextUserId) {
        clearCurrentUserContext();
        userIdRef.current = nextUserId;
      }
      setSession(nextSession);
      setRestoreError(null);
      setIsLoading(false);

      if (!nextSession) {
        router.replace("/auth/login");
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        authEventObserved = true;
        applySession(nextSession);
      }
    );

    void supabase.auth.getSession().then(({ data, error }) => {
      if (!active || authEventObserved) return;

      if (error) {
        console.warn("[AuthProvider] Failed to restore the session", {
          name: error.name,
          message: error.message,
        });

        if (isAuthSessionMissingError(error)) {
          applySession(null);
          return;
        }

        setRestoreError(
          "We could not verify your session. Check your connection and try again."
        );
        setIsLoading(false);
        return;
      }

      applySession(data.session);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, [restoreAttempt, router]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoading,
      isAuthorized: Boolean(session),
      error: restoreError,
      retry,
      session,
      signOut,
      user: session?.user ?? null,
    }),
    [isLoading, restoreError, retry, session, signOut]
  );

  return (
    <AuthContext.Provider value={value}>
      {session ? (
        children
      ) : restoreError ? (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
          <section className="max-w-md rounded-xl bg-white p-6 text-center shadow-sm">
            <h1 className="text-lg font-semibold text-slate-900">
              Unable to verify your session
            </h1>
            <p className="mt-2 text-sm text-slate-600">{restoreError}</p>
            <button
              type="button"
              onClick={retry}
              className="mt-4 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              Try again
            </button>
          </section>
        </main>
      ) : null}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
