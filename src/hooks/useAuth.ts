/**
 * Centralized authentication hook
 * Consolidates all auth-related logic and provides consistent interface
 */

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { createLogger } from '@/utils/logger';
import { toast } from 'sonner';
import type { User, Session, AuthError } from '@supabase/supabase-js';

const log = createLogger('AUTH_HOOK');

export interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: AuthError | null;
}

export interface AuthActions {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, metadata?: Record<string, unknown>) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  clearError: () => void;
}

export interface UseAuthOptions {
  redirectTo?: string;
  requireAuth?: boolean;
  allowedRoles?: string[];
}

export function useAuth(options: UseAuthOptions = {}): AuthState & AuthActions {
  const { redirectTo, requireAuth = false, allowedRoles } = options;
  const router = useRouter();

  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
  });

  // Initialize auth state
  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (!mounted) return;

        if (error) {
          log.error('Failed to get session', error);
          setState(prev => ({
            ...prev,
            error,
            isLoading: false,
          }));
          return;
        }

        setState(prev => ({
          ...prev,
          user: session?.user || null,
          session,
          isAuthenticated: Boolean(session?.user),
          isLoading: false,
          error: null,
        }));

        // Handle authentication requirements
        if (requireAuth && !session?.user) {
          log.debug('Authentication required but user not authenticated, redirecting to login');
          router.replace('/auth/login');
          return;
        }

        // Handle role-based access
        if (session?.user && allowedRoles && allowedRoles.length > 0) {
          const userRole = session.user.user_metadata?.role;
          if (!allowedRoles.includes(userRole)) {
            log.warn('User role not authorized', { userRole, allowedRoles });
            toast.error('You do not have permission to access this page');
            router.replace('/dashboard');
            return;
          }
        }

        // Handle redirect after successful auth
        if (session?.user && redirectTo) {
          log.debug('User authenticated, redirecting', { redirectTo });
          router.replace(redirectTo);
        }

      } catch (error) {
        log.error('Error initializing auth', error);
        if (mounted) {
          setState(prev => ({
            ...prev,
            error: error as AuthError,
            isLoading: false,
          }));
        }
      }
    };

    initializeAuth();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        log.debug('Auth state changed', { event, userId: session?.user?.id });

        setState(prev => ({
          ...prev,
          user: session?.user || null,
          session,
          isAuthenticated: Boolean(session?.user),
          error: null,
        }));

        // Handle different auth events
        switch (event) {
          case 'SIGNED_IN':
            log.info('User signed in', { userId: session?.user?.id });
            toast.success('Successfully signed in');
            if (redirectTo) {
              router.replace(redirectTo);
            } else if (session?.user?.id) {
              router.replace(`/dashboard/${session.user.id}`);
            }
            break;

          case 'SIGNED_OUT':
            log.info('User signed out');
            toast.success('Successfully signed out');
            router.replace('/auth/login');
            break;

          case 'TOKEN_REFRESHED':
            log.debug('Token refreshed');
            break;

          case 'USER_UPDATED':
            log.debug('User updated');
            break;
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [requireAuth, allowedRoles, redirectTo, router]);

  // Sign in function
  const signIn = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      try {
        log.userAction('Sign in attempt', { email });

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          log.error('Sign in failed', error);
          return { success: false, error: error.message };
        }

        if (!data.user) {
          return { success: false, error: 'Sign in failed - no user returned' };
        }

        log.info('Sign in successful', { userId: data.user.id });
        return { success: true };

      } catch (error) {
        log.error('Sign in error', error);
        return { success: false, error: 'An unexpected error occurred' };
      }
    },
    []
  );

  // Sign up function
  const signUp = useCallback(
    async (
      email: string,
      password: string,
      metadata?: Record<string, unknown>
    ): Promise<{ success: boolean; error?: string }> => {
      try {
        log.userAction('Sign up attempt', { email });

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          ...(metadata && {
            options: {
              data: metadata,
            },
          }),
        });

        if (error) {
          log.error('Sign up failed', error);
          return { success: false, error: error.message };
        }

        if (!data.user) {
          return { success: false, error: 'Sign up failed - no user returned' };
        }

        log.info('Sign up successful', { userId: data.user.id });
        
        if (data.user.email_confirmed_at) {
          toast.success('Account created successfully');
        } else {
          toast.success('Please check your email to confirm your account');
        }

        return { success: true };

      } catch (error) {
        log.error('Sign up error', error);
        return { success: false, error: 'An unexpected error occurred' };
      }
    },
    []
  );

  // Sign out function
  const signOut = useCallback(async (): Promise<void> => {
    try {
      log.userAction('Sign out');
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        log.error('Sign out failed', error);
        toast.error('Failed to sign out');
      }
    } catch (error) {
      log.error('Sign out error', error);
      toast.error('An error occurred while signing out');
    }
  }, []);

  // Refresh session function
  const refreshSession = useCallback(async (): Promise<void> => {
    try {
      log.debug('Refreshing session');
      const { error } = await supabase.auth.refreshSession();
      
      if (error) {
        log.error('Session refresh failed', error);
      }
    } catch (error) {
      log.error('Session refresh error', error);
    }
  }, []);

  // Clear error function
  const clearError = useCallback((): void => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    signIn,
    signUp,
    signOut,
    refreshSession,
    clearError,
  };
}

/**
 * Hook for components that require authentication
 * Automatically redirects to login if not authenticated
 */
export function useRequireAuth(redirectTo?: string) {
  return useAuth({ 
    requireAuth: true, 
    ...(redirectTo && { redirectTo }) 
  });
}

/**
 * Hook for protected routes with role-based access
 */
export function useRoleAuth(allowedRoles: string[], redirectTo?: string) {
  return useAuth({ 
    requireAuth: true, 
    allowedRoles, 
    ...(redirectTo && { redirectTo }) 
  });
}

/**
 * Simple hook to check if user is authenticated
 * Does not redirect, just provides auth state
 */
export function useAuthState() {
  return useAuth({ requireAuth: false });
}
