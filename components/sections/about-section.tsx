"use client";

import Image from "next/image";
import Title from "../title";
import HighighBox from "../highighBox";

export function AboutSection() {
  return (
    <section id="about" className="z-10">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <div className="hidden -mt-36 lg:grid md:grid-cols-2 gap-8 md:gap-16 xl:gap-24 mb-12 md:mb-16 xl:mb-20">
          <HighighBox isVideo={true} />
          <div className="w-full md:max-w-[350px] lg:max-w-[723.28px] mx-auto md:mx-0">
            <Title
              tagline="AGENT PRECISION IN ACTION"
              title={"WATCH OUR FIRST\nAI AGENT IN ACTION"}
              align={0}
            />
            <div className="bg-[#38261E] py-3 px-4 rounded flex items-center gap-6">
              <Image
                src="/icons/presion.svg"
                alt="presion Logo"
                width={226}
                height={121}
                className="w-32 sm:w-36 md:w-28 lg:w-[180px] flex-shrink-0"
              />
              <div className="flex flex-col">
                <p className="text-[#D9D9D9] font-sora lg:text-[1rem] md:text-tagline-md text-tagline font-light">
                  Meet Agent Precision for Counter-Strike 2, delivering real
                  time tips to help you crush the competition and rack up those
                  wins!
                </p>
                <img
                  src="/decorative/about/decV.svg"
                  alt=""
                  className="h-2 w-36 mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        <Title
          tagline="KNOW ABOUT SKOR AI AGENTS"
          title={"ABOUT US"}
          align={1}
        />
        <div className="grid md:grid-cols-2 gap-8 mt-6 md:gap-16 xl:gap-24">
          <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-8 w-full md:max-w-[350px] lg:max-w-[723.28px] mx-auto md:mx-0">
            <p className="text-white/80 lg:text-left text-center font-sora text-tertiary font-light lg:text-tertiary-lg md:text-tertiary-md leading-relaxed">
              A hub of advanced gaming agents enabling gamers of all levels –
              from casual players to seasoned pros, streamers, and stakeholders
              – to save time, optimize performance, earn rewards, and master
              their favorite games. Join us and experience the future of gaming!
            </p>
          </div>

          <HighighBox isVideo={false} />
        </div>
      </div>
      <div className="lg:block ml-[2vw] -mt-[4vw] md:block absolute hidden">
        <img
          src="/icons/mascots/mascot.bend.svg"
          alt="mascot"
          className="w-[16vw] scale-x-[-1] "
        />
      </div>
    </section>
  );
}
