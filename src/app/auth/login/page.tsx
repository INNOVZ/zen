import { LoginForm } from "@/components/auth/LoginForm";
import Zaakiy from "../../../../public/zaakiy.svg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-svh grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <LoginForm />
      </div>
      <div className="w-full bg-color flex flex-col items-center justify-center">
        <Image src={Zaakiy} alt="Login" width={125} height={125} />
        <h1 className="text-5xl font-bold text-white">Welcome to Zaakiy</h1>
        <p className="mt-8 text-md text-white">
          Please log in to access your dashboard and manage your chatbot.
        </p>
      </div>
    </div>
  );
}
