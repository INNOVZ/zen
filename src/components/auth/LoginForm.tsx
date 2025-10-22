"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import Zaakiy from "../../../public/zaakiybot.svg";
import Image from "next/image";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Check Supabase client initialization on mount
  useEffect(() => {
    console.log("🔍 Supabase Client Check:");
    console.log("   Client exists:", !!supabase);
    console.log(
      "   NEXT_PUBLIC_SUPABASE_URL:",
      process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"
    );
    console.log(
      "   NEXT_PUBLIC_SUPABASE_ANON_KEY:",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"
    );
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🔐 Login attempt started");
    console.log("📍 Current URL:", window.location.href);

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      console.log("📡 Calling Supabase signInWithPassword...");
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      console.log("📊 Supabase response:", {
        hasUser: !!data.user,
        userId: data.user?.id,
        hasSession: !!data.session,
        hasAccessToken: !!data.session?.access_token,
        error: error?.message,
      });

      if (error) {
        console.error("❌ Login error:", error);
        toast.error(error.message);
        setIsLoading(false);
        return;
      }

      if (data.user?.id && data.session) {
        console.log("✅ Login successful!");
        console.log("   User ID:", data.user.id);
        console.log("   Email:", data.user.email);
        console.log(
          "   Session access_token:",
          data.session.access_token.substring(0, 20) + "..."
        );
        console.log(
          "   Session refresh_token:",
          data.session.refresh_token.substring(0, 20) + "..."
        );

        // Check cookies immediately after login
        console.log("🍪 Checking cookies after login...");
        const allCookies = document.cookie;
        console.log("   All cookies:", allCookies);

        const supabaseCookies = allCookies
          .split(";")
          .filter(
            (c) => c.trim().startsWith("sb-") || c.trim().includes("supabase")
          );
        console.log(
          "   Supabase cookies:",
          supabaseCookies.length > 0 ? supabaseCookies : "❌ NONE FOUND!"
        );

        toast.success("Login successful!");

        // Wait longer for cookies to fully propagate
        console.log("⏳ Waiting 300ms for cookie propagation...");
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Check cookies again after waiting
        console.log("🍪 Checking cookies after wait...");
        const cookiesAfterWait = document.cookie;
        console.log("   Cookies after wait:", cookiesAfterWait);

        // Force refresh the session to ensure cookies are synced
        console.log("🔄 Refreshing session...");
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();
        console.log("   Session refresh result:", {
          hasSession: !!sessionData.session,
          error: sessionError?.message,
        });

        // Force a hard navigation to ensure middleware picks up the session
        const dashboardUrl = `/dashboard/${data.user.id}`;
        console.log("🚀 Redirecting to:", dashboardUrl);
        console.log("   Using window.location.href for hard navigation");
        console.log("   Browser will make new request with cookies");

        window.location.href = dashboardUrl;
      } else {
        console.error("❌ Login failed - missing user data or session");
        console.error("   Has user:", !!data.user);
        console.error("   Has user.id:", !!data.user?.id);
        console.error("   Has session:", !!data.session);
        toast.error("Login failed - no user data received");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("❌ Login exception:", err);
      toast.error("An unexpected error occurred during login");
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-[25vw] py-15">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl text-center">
            <Image src={Zaakiy} alt="Login" width={75} height={75} />
            <h1 className="text-2xl mt-5">Login</h1>
          </CardTitle>
          <CardDescription className="mt-5 text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full pointer"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
