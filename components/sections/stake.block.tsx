import React from "react";
import BaseCard from "../base.card";

const StakeBlock = () => {
  return (
    <section className="relative py-20 z-10">
      <div className="container items-center justify-between flex mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <div className="space-y-4 sm:space-y-6 xl:space-y-8 w-full md:max-w-[350px] lg:max-w-[723.28px] mx-auto md:mx-0">
          <div className="flex items-center gap-2">
            <img
              src="/decorative/about/decHL.svg"
              alt=""
              className="h-6 w-4 sm:h-8 sm:w-6 xl:h-10 xl:w-8"
            />
            <p className="text-[#ff6b6b] text-xs uppercase sm:text-sm font-light tracking-wider whitespace-nowrap">
              Earn While You Play
            </p>
            <img
              src="/decorative/about/decHR.svg"
              alt=""
              className="h-6 w-4 sm:h-8 sm:w-6 xl:h-10 xl:w-8"
            />
          </div>
          <h2 className="text-3xl font-chakra uppercase sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white">
            Staking and Rewards with SKOR AI Agents
          </h2>
          <p className="text-white/80 font-sora text-sm md:text-base xl:text-lg leading-relaxed">
            SKOR AI Agents is your personalized real time AI coach designed to
            help you play smarter and level up your skills. We&apos;re kicking
            things off with CSGO, with Agent Precision.
          </p>
        </div>
        <div className="relative h-full flex items-center justify-end">
          <img src="/icons/stake.reward.svg" alt="stake" className="w-3/4" />
        </div>
      </div>
      <div className="container  items-center justify-between flex mx-auto py-28 px-4 sm:px-6 lg:px-16 xl:px-8">
        <BaseCard
          title={"Stake to Earn"}
          desc={
            "Support the development of SKOR AI Agents by staking your SKOR tokens. In return, earn a share of the revenue generated from other players purchasing and using the agents."
          }
          icon={"user.earn.svg"}
        />
        <BaseCard
          title={"Play to Earn"}
          desc={
            "As you use the agent, unlock rewards by achieving gameplay milestones. A portion of the revenue from agent purchases goes into a player rewards pool, ensuring you earn tokens while improving your skills."
          }
          icon={"milestone.svg"}
        />
      </div>
    </section>
  );
};

export default StakeBlock;
