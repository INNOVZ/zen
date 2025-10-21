"use client";
import { useState, ChangeEvent } from "react";
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
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "sonner";
import Zaakiy from "../../../public/zaakiybot.svg";
import Image from "next/image";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        console.error("Login error:", error);
        toast.error(error.message);
        setIsLoading(false);
        return;
      }

      if (data.user?.id && data.session) {
        console.log("Login successful, user ID:", data.user.id);
        toast.success("Login successful!");

        // Wait a moment for cookies to be set
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Force a hard navigation to ensure middleware picks up the session
        // Using window.location ensures a full page reload with proper cookie sync
        window.location.href = `/dashboard/${data.user.id}`;
      } else {
        toast.error("Login failed - no user data received");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login exception:", err);
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
