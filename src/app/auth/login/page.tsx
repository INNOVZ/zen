import { LoginForm } from "@/components/auth/LoginForm";
import Zaakiy from "../../../../public/zaakiy.svg";
import Image from "next/image";

// Force this page to be dynamic (not pre-rendered at build time)
// This is required because authentication state is client-side
export const dynamic = "force-dynamic";

interface LoginPageProps {
  searchParams: Promise<{ returnTo?: string }>;
}

export default async function Page({ searchParams }: LoginPageProps) {
  const { returnTo } = await searchParams;
  const safeReturnTo =
    (returnTo === "/dashboard" || returnTo?.startsWith("/dashboard/")) &&
    !returnTo.startsWith("//")
      ? returnTo
      : "/dashboard";

  return (
    <div className="min-h-svh grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <LoginForm returnTo={safeReturnTo} />
      </div>
      <div className="w-full bg-color flex flex-col items-center justify-center">
        <Image src={Zaakiy} alt="Login" className="h-auto w-[125px]" />
        <h1 className="text-5xl font-bold text-white">Welcome to Zaakiy</h1>
        <p className="mt-8 text-md text-white">
          Please log in to access your dashboard and manage your chatbot.
        </p>
      </div>
    </div>
  );
}
