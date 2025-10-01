"use client";
import CardSlider from "../cardSlider";
import CircleCarousel from "../carousels/CircleCarousel";
import CircleSlider from "../circleSlider";
import Title from "../title";

const content = [
  {
    id: "item-1",
    title: "Agent Precision",
    agent: "Personalized Gaming Coach",
    desc: "Intelligent in-game co-pilots delivering real-time strategies and insights to elevate performance and level up skills",
    img: "/image/agent.circle.png",
    thumbnail: "/image/presion.png",
    size: "30",
    mgTop: "0",
    mgLeft: "0",
    live: true,
    link: "https://app.skoragents.ai",
  },
  {
    id: "item-2",
    title: "",
    desc: "",
    agent: "",
    img: "/image/agent.circle.png",
    thumbnail: "/image/lock.png",
    size: "30",
    mgTop: "0",
    mgLeft: "0",
    live: false,
  },
  {
    id: "item-3",
    title: "Agent HUNTER",
    agent: "Your Reward Hunter",
    desc: "Reward seeking agents scanning the web to uncover money making opportunities, including\ntournaments,quests, and airdrops",
    img: "/image/agent.circle.png",
    thumbnail: "/image/hunter.png",
    size: "30",
    mgTop: "0",
    mgLeft: "0",
    live: true,
    link: "https://agent-hunter.skoragents.ai/",
  },
];

const OurAgentSection = () => {
  return (
    <section className="pt-10 z-50" id="our-agents">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <Title
          tagline={""}
          title={"OUR AI AGENTS"}
          align={1}
          isTaglineDisabled={true}
        />
        <div className="hidden lg:flex md:flex container mx-auto">
          <CircleCarousel content={content} />
        </div>
        <div className="flex lg:hidden md:hidden container mx-auto">
          <CircleSlider content={content} />
        </div>
      </div>
      <div className="lg:hidden  -mt-[12vw] md:hidden absolute block">
        <img
          src="/icons/mascots/mascot.bend.svg"
          alt="mascot"
          className="w-[20vw] scale-x-[-1] left-0 "
        />
      </div>
    </section>
  );
};

export default OurAgentSection;
