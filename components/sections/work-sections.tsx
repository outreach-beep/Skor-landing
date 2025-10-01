"use client";

import React from "react";
import Title from "../title";

const WorkSection = () => {
  return (
    <section id="how-it-works" className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-8 max-w-[1440px]">
        <div className="relative max-w-[998px] mx-auto text-center">
          <Title
            tagline={"three simple steps"}
            title={"how it works"}
            align={1}
          />
        </div>

        <div className="container  mx-auto">
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-6 w-full text-white py-2">
            <div className="flex lg:border-r-[0.5px] lg:border-l-[0.5px] lg:border-b-[0.5px] lg:border-t-[0.5px] md:border-t-[0.5px] border-t-0 border-white/20 relative flex-col w-full justify-center items-center lg:py-12">
              <img src="/icons/features/play.svg" alt="play" />
              <h1 className="font-chakra mt-3 font-bold uppercase text-white text-2xl">
                Play Your Match
              </h1>
              <p className="text-[#D9D9D9]font-sora text-sm lg:text-base font-light">
                AI observes your gameplay in real time
              </p>
              <div className="hidden md:flex lg:flex lg:w-14 mx-auto lg:h-14 md:w-14 md:h-14 w-10 h-10  justify-center items-center lg:absolute md:absolute bg-white right-0 lg:-mr-7 md:-mr-7 rotate-45">
                <img
                  src="/icons/right-arrow.svg"
                  alt="live"
                  className="lg:-rotate-45 md:-rotate-45 rotate-45 w-1/2"
                />
              </div>
            </div>
            <div className="lg:hidden md:hidden flex lg:w-14 mx-auto lg:h-14 md:w-14 md:h-14 w-10 h-10  justify-center items-center lg:absolute md:absolute bg-white right-0 lg:-mr-7 md:-mr-7 rotate-45">
              <img
                src="/icons/right-arrow.svg"
                alt="live"
                className="lg:-rotate-45 md:-rotate-45 rotate-45 w-1/2"
              />
            </div>
            <div className="flex border-white/20 lg:border-r-[0.5px] lg:border-t-[0.5px] lg:border-b-[0.5px] md:border-b-[0.5px] relative  flex-col w-full justify-center items-center">
              <div className={`flex justify-center items-center gap-2`}>
                <img src="/decorative/about/decHL.svg" alt="side-left" />
                <img src="/icons/features/live.svg" alt="live" />
                <img src="/decorative/about/decHR.svg" alt="side-right" />
              </div>

              <h1 className="font-chakra mt-3 font-bold uppercase text-white text-2xl">
                Get live insights
              </h1>
              <p className="text-[#D9D9D9] w-3/4 text-center font-sora text-sm lg:text-base font-light">
                Live Callouts and Tactical tips
              </p>
              <div className="hidden md:flex lg:flex lg:w-14 mx-auto lg:h-14 md:w-14 md:h-14 w-10 h-10  justify-center items-center lg:absolute md:absolute bg-white right-0 lg:-mr-7 md:-mr-7 rotate-45">
                <img
                  src="/icons/right-arrow.svg"
                  alt="live"
                  className="lg:-rotate-45 md:-rotate-45 rotate-45 w-1/2"
                />
              </div>
            </div>
            <div className="lg:hidden md:hidden flex lg:w-14 mx-auto lg:h-14 md:w-14 md:h-14 w-10 h-10  justify-center items-center lg:absolute md:absolute bg-white right-0 lg:-mr-10 md:-mr-10 rotate-45">
              <img
                src="/icons/right-arrow.svg"
                alt="live"
                className="lg:-rotate-45 md:-rotate-45 rotate-45 w-1/2"
              />
            </div>
            <div className="flex flex-col lg:border-r-[0.5px] lg:border-t-[0.5px] lg:border-b-[0.5px] md:border-b-[0.5px] border-b-0 border-white/20 lg:pb-0 md:pb-0 pb-0 w-full justify-center items-center">
              <img src="/icons/features/learn.svg" alt="learn" />
              <h1 className="font-chakra mt-3 font-bold uppercase text-white text-2xl">
                learn & improve
              </h1>
              <p className="text-[#D9D9D9] font-sora text-sm lg:text-base font-light">
                Post match breakdown with stats
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
