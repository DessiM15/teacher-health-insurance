"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CoverageOptions from "@/components/sections/CoverageOptions";
import NetworkSection from "@/components/sections/NetworkSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <CoverageOptions />
      <NetworkSection />
      <FeaturesSection />
    </>
  );
}
