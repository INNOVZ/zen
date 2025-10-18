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
import { supabase } from "@/app/api/SupabaseClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Zaakiy from "../../../public/zaakiybot.svg";
import Image from "next/image";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        router.replace(`/dashboard/${session.user.id}`);
      }
    });

    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const token = session?.access_token;
      console.log(token);
    };

    const callBackend = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) return;

      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8001";
      const response = await fetch(`${backendUrl}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(token);
      const data = await response.json();
      console.log(data);
    };
    callBackend();
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt started", { email });

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Login error:", error);
        toast.error(error.message);
      } else if (data.user?.id) {
        console.log("Login successful, redirecting to dashboard");
        toast.success("Login successful!");
        // Redirect to user-specific dashboard
        router.replace(`/dashboard/${data.user.id}`);
      } else {
        console.error("No user data received");
        toast.error("Login failed - no user data received");
      }
    } catch (err) {
      console.error("Login exception:", err);
      toast.error("An unexpected error occurred during login");
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
              <Button type="submit" className="w-full pointer">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
