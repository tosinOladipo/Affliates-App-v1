import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "@/components/home/Header";
import Container from "@/components/global/Container";
import Hero from "@/components/home/Hero";
import WelcomeCard from "@/components/home/WelcomeCard";
import { fetchProfileDetails } from "@/utils/actions";
import dash from "@/public/images/dashboard.png";

export default async function HomePage() {
  const profile = await fetchProfileDetails();

  return (
    <section className="hero-section bg-[#F7F9FB]">
      <Header />
      <Container className="w-[90%] md:w-[70%] mx-auto pt-8">
        <Hero />
        <SignedIn>{!profile ? <WelcomeCard /> : ""}</SignedIn>
        <Image
          src={dash}
          alt="dashboard"
          className="w-[100%] mx-auto"
        />
      </Container>
    </section>
  );
}
