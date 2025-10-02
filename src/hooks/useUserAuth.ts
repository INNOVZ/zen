import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { User } from "@/types/schemaTypes";
import { User as SupabaseUser } from "@supabase/supabase-js";

export const useUserAuth = (userId: string, 
  setCurrentUser: (user: SupabaseUser | null) => void) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkUserAccess = async () => {
      try {
        setIsAuthLoading(true);
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        if (!session?.user) {
          router.replace("/auth/login");
          return;
        }

        // Check if the userId in URL matches the logged-in user
        if (session.user.id !== userId) {
          toast.error("Unauthorized access");
          router.replace(`/dashboard/${session.user.id}`);
          return;
        }

        const userData: User = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.name || session.user.email || "",
          display_name: session.user.user_metadata?.display_name || session.user.user_metadata?.name || session.user.email || "",
        };

        setUser(userData);
        setCurrentUser(session.user);
      } catch (error) {
        console.error("Error checking user access:", error);
        if (mounted) {
          router.replace("/auth/login");
        }
      } finally {
        if (mounted) {
          setIsAuthLoading(false);
        }
      }
    };

    checkUserAccess();

    return () => {
      mounted = false;
    };
  }, [userId, router, setCurrentUser]);

  return {
    user,
    isAuthLoading,
  };
};
