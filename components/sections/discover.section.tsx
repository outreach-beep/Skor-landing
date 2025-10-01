"use client";

import React from "react";
import { Button } from "../button";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <section className="relative z-10 w-3/4 mx-auto">
      <div
        className="flex flex-col container h-[60vh] mx-auto lg:px-16 lg:bg-cover md:bg-cover bg-contain bg-center bg-no-repeat text-white items-center justify-center"
        style={{
          backgroundImage: "url('/icons/globe.bg.svg')",
          backgroundSize: "90%",
        }}
      >
        <h1 className="lg:text-title-lg text-center md:text-title-md text-title leading-tight uppercase font-chakra font-bold text-white whitespace-pre-line">
          Discover the SKOR Ecosystem
        </h1>
        <p className="text-white/80 mb-4 lg:w-2/3 md:w-2/3 w-full mt-4 text-center font-sora text-tertiary lg:text-tertiary-lg md:text-tertiary-md leading-relaxed">
          SKOR is a Gaming infrastructure platform designed to launch and scale
          projects through community building and engagement tools. We’ve built
          the world’s first 3D live-streaming platform, a robust tournament
          engine, and a powerful distribution network reaching over 600 million
          gamers. Whether you're a player, brand, or developer, SKOR is your
          destination.
        </p>
        <Link
          href="https://skormetaverse.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Explore More" />
        </Link>
      </div>
      <div className="lg:hidden right-0 -mt-[16vw] -mr-[10vw] md:hidden absolute block">
        <img
          src="/icons/mascots/mascot.wave.svg"
          alt="mascot"
          className="w-[20vw] scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default DiscoverSection;
