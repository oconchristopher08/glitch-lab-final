import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhatIs from "@/components/WhatIs";
import CoreStructure from "@/components/CoreStructure";
import Ecosystem from "@/components/Ecosystem";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import Investor from "@/components/Investor";
import Outro from "@/components/Outro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <WhatIs />
      <CoreStructure />
      <Ecosystem />
      <HowItWorks />
      <Philosophy />
      <Investor />
      <Outro />
      <Footer />
    </div>
  );
}
