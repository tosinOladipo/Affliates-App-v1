import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Container from "../global/Container";
import { fetchProfileDetails } from "@/utils/actions";

async function Header() {
  const profile = await fetchProfileDetails()
  return (
    <header className="py-4 border-b-2 w-full">
      <Container className="mx-auto w-[90%] md:w-[70%]">
        <nav className="flex flex-col gap-4 md:flex-row md:justify-between content-center">
          <Link href="/" className="content-center"><Image src={logo} alt="logo" className="w-[25px] h-[27px]  content-center" /></Link>
          <div className="flex gap-4 flex-row content-center">
            <Link href="/" className="content-center">
              Features
            </Link>
            <Link href="/" className="content-center">
              Help
            </Link>
            <Link href="/" className="content-center">
              Contact
            </Link>
            {profile? 
            <SignedIn>
              <Button className="cursor-pointer rounded-4xl py-6" asChild>
                <Link href="/admin/dashboard">Dashboard</Link>
              </Button>
            </SignedIn> : ''}
            <SignedOut>
              <div className="auth-nav flex gap-4">
                <SignInButton mode="modal">
                  <Button variant="secondary" className="cursor-pointer">
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="cursor-pointer">Get Started</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
