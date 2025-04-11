import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Header from "@/components/home/Header";
import Container from "@/components/global/Container";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main>
     <Header/> 
    <Container className="w-[90%] md:w-[70%] mx-auto">
        <Hero/>
    </Container>
      </main>
  );
}
