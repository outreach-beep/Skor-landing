import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import HighighBox from "./highighBox";
import Title from "./title";
import AiAgentBox from "./ui/AiAgentBox";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

type TokenData = {
  price: number;
  marketcap: number;
  circulating: number;
  tvl: number;
  allTimeHigh: number;
  allTimeLow: number;
};

export function HeroSection() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const firstPrice: number = 0.0075;
  const percentageChange =
    tokenData && typeof tokenData.price === "number" && firstPrice !== 0
      ? `${((tokenData.price - firstPrice) / firstPrice > 0 ? "+" : "")}${(
          ((tokenData.price - firstPrice) / firstPrice) *
          100
        ).toFixed(2)}%`
      : "";

  useEffect(() => {
    fetch("https://app.skoragents.ai/api/token")
      .then((res) => res.json())
      .then((data) => setTokenData(data))
      .catch(() => setTokenData(null));
  }, []);

  const formatNumber = (num: number) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const aiAgents = [
    {
      title: "TVL",
      data: tokenData ? `$${formatNumber(tokenData.tvl)}` : "--",
    },
    {
      title: "Current MC",
      data: tokenData ? `$${formatNumber(tokenData.marketcap)}` : "--",
    },
    {
      title: "Price",
      data: tokenData ? `$${tokenData.price}` : "--",
    },
    {
      title: "A.T. HIGH",
      data: tokenData ? `$${tokenData.allTimeHigh}` : "--",
    },
    {
      title: "A.T. LOW",
      data: tokenData ? `$${tokenData.allTimeLow}` : "--",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover sm:object-center md:object-center lg:object-cover xl:object-cover object-[70%_20%] lg:mt-0 md:mt-0 -mt-10 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/image/cover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-transparent to-transparent z-0" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Absolute Price & Buy Now Box */}
      <div
        className="
          hidden sm:flex
          absolute
          top-20 right-[5.5rem]
          sm:top-24 sm:right-6
          flex-col items-center gap-4 sm:gap-6
          rounded-xl shadow-lg
          w-96
          mr-10
          pr-3
          sm:max-w-none sm:w-auto
          z-20
          min-h-[150px]
        "
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)", width: "300px" }}
      >
        <div className="flex flex-col items-center w-full flex-1 justify-center gap-4">
          
          <AiAgentBox docId="agentBox" />

          <Link
            href="https://www.mexc.co/en-IN/price/SKORAI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <button className="bg-[#ee5946] border-[#FF3B30]/30 rounded-md px-4 py-2 text-black font-semibold text-sm hover:bg-[#ee5946]/70 transition w-[90%]">
              Buy $SKORAI To Stake
            </button>
          </Link>
        </div>
      </div>

      {/* AI Agents Section */}
      <div className="relative z-10 lg:mt-0 md:mt-72 w-full mt-[15vh] px-4 sm:px-6 mx-auto text-center font-chakra">
        <div className="sm:hidden flex flex-col items-center gap-2 sm:gap-3 mb-6 w-full max-w-xs mx-auto">
          <AiAgentBox docId="agentBox" />
          <Link
            href="https://www.mexc.co/en-IN/price/SKORAI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <button className="bg-[#ee5946] border-[#FF3B30]/30 rounded-md px-4 py-2 text-black font-semibold text-sm hover:bg-[#ee5946]/70 transition w-[90%]">
              Buy $SKORAI To Stake
            </button>
          </Link>
        </div>

        <h1 className="text-primary lg:text-primary-lg md:text-primary-md font-bold text-white leading-[1.1] tracking-wide mb-4 sm:mb-6">
          <span className="block">Your Ultimate AI</span>
          <span className="block">Gaming Hub</span>
        </h1>

        <p className="font-sora text-secondary lg:text-secondary-lg md:text-secondary-md text-white font-light leading-normal sm:leading-10 mb-4">
          AI Agents for All Your Gaming Needs
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollTo("about")}
        className="hidden cursor-pointer sm:flex absolute left-4 sm:left-8 bottom-1/4 sm:bottom-1/3 z-10 flex-col items-center gap-2 sm:gap-4"
      >
        <p className="text-white text-sm sm:text-base [writing-mode:vertical-lr] rotate-180">
          SCROLL DOWN
        </p>
        <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-gradientStart" />
      </div>

      {/* AI Watch Section */}
      <div className="lg:hidden z-10 mt-24 px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 xl:gap-24 mb-12 md:mb-16 xl:mb-20">
        <div className="w-full mx-auto md:mx-0">
          <Title
            tagline="AGENT PRECISION IN ACTION"
            title={"WATCH OUR FIRST\nAI AGENT IN ACTION"}
            align={0}
          />
          <div className="bg-[#38261E] py-3 px-4 rounded flex items-center gap-6">
            <img
              src="/icons/presion.svg"
              alt="presion Logo"
              className="w-32 sm:w-36 md:w-28 lg:w-[180px] flex-shrink-0"
            />
            <div className="flex flex-col">
              <p className="text-[#D9D9D9] font-sora lg:text-tagline-lg md:text-tagline-md text-tagline font-light">
                Meet Agent Precision for Counter-Strike 2, delivering real time
                tips to help you crush the competition and rack up those wins!
              </p>
              <img
                src="/decorative/about/decV.svg"
                alt=""
                className="h-2 w-36 mt-2"
              />
            </div>
          </div>
        </div>
        <HighighBox isVideo={true} />
      </div>
    </section>
  );
}
