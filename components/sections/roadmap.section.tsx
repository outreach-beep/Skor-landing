import React from "react";
import RoadmapCard from "../roadmapCard";
import Title from "../title";

const roadmapData = [
  {
    month: "February",
    title: "Q1: Launch & Community growth",
    features: [
      "Agent Precision",
      "Community Ambassador Program",
      "Beta Launch",
      "Agent Precision - Updates and Enhancements",
    ],
  },
  {
    month: "March",
    title: "q2: Product evolution & Engagement",
    features: [
      "Token Generation Event",
      "Listing - MEXC & LBank",
      "Agent Hunter",
      "Intelligent NFTs - Genesis NFT Collection",
    ],
  },
  {
    month: "April",
    title: "q3: Expansion & Ecosystem integration",
    features: [
      "Listing - Gate.io",
      "Integration with SKOR Metaverse",
      "Agent Precision - Expansion for Dota2",
      "Agent Lore",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="pt-10">
      <div className="lg:block mr-[2vw] right-0 -mt-[4vw] md:block absolute hidden">
        <img
          src="/icons/mascots/mascot.bend.svg"
          alt="mascot"
          className="w-[16vw]"
        />
      </div>
      <div className="container mx-auto">
        <Title tagline={"our vision"} title={"roadmap"} align={1} />
        <div className="container mx-auto">
          <div className="flex justify-center lg:w-3/4 md:w-3/4 w-11/12 mx-auto">
            <div className="flex w-full flex-col lg:gap-10 md:gap-10 gap-4 lg:border-l-8 md:border-l-8 border-l-4 border-[#423A36]">
              {roadmapData.map((data, index) => (
                <RoadmapCard key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
