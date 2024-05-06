import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center bg-sky-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl text-white font-semibold drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton >
            <Button variant="secondary" size="lg">
              SignIn
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
