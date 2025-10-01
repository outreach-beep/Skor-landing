"use client";
import { HeroSection } from "@/components/hero-section";
import { LvlMarquee } from "@/components/marquee";
import { AboutSection } from "@/components/sections/about-section";
import AgentPresSection from "@/components/sections/agent-precision";
import DiscoverSection from "@/components/sections/discover.section";
import FeaturesSection from "@/components/sections/features.section";
import Footer from "@/components/sections/footer";
import OurAgentSection from "@/components/sections/our-agents";
import PartnerSection from "@/components/sections/partners";
import RoadmapSection from "@/components/sections/roadmap.section";
import WorkSection from "@/components/sections/work-sections";
import React from "react";
import "../styles/marquee.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 relative bg-[#141110] overflow-hidden">
      {" "}
      <div className="sm:flex hidden absolute top-20 left-16 right-16 bottom-0 justify-between z-50 pointer-events-none">
        <span className="block w-[0.5px] h-full bg-white/20" />
        <span className="block w-[0.5px] h-full bg-white/20" />
      </div>
      <HeroSection />
      <AboutSection />
      <OurAgentSection />
      <AgentPresSection />
      <FeaturesSection />
      <WorkSection />
      {/* <SubscriptionChoice /> */}
      {/* <SignupSection /> */}
      <section className="relative">
        <div className="container relative mx-auto">
          <LvlMarquee />
        </div>
      </section>
      {/* <RoadmapSection /> */}
      <DiscoverSection />
      <PartnerSection />
      <Footer />
    </main>
  );
}
