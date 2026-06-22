import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Services from "@/components/landing/Services";
import Portfolio from "@/components/landing/Portfolio";
import Packages from "@/components/landing/Packages";
import Process from "@/components/landing/Process";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <Packages />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
