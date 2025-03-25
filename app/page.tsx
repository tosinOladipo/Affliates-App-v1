import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="text-5xl flex flex-row gap-6">
      <SignInButton mode='modal'>
        <Button>Login</Button>
        </SignInButton>


        <SignUpButton mode='modal'>
        <Button>Register</Button>
        </SignUpButton>
      
      </div>
  );
}
