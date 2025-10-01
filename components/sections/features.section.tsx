"use client";
import CardSlider from "../cardSlider";
import CardCarousel from "../carousels/CardCarousel";
import Title from "../title";

const content = [
  {
    id: "item-1",
    title: "Aim Optimization",
    desc: "Enhance your aim with tailored training and live feedback to improve crosshair placement and precision.",
    img: "/features/item1.png",
  },
  {
    id: "item-2",
    title: "Utility Mastery",
    desc: "Get precise grenade, smoke, and flashbang lineups for maximum effectiveness in critical situations.",
    img: "/features/item2.png",
  },
  {
    id: "item-3",
    title: "Tactical Insights",
    desc: "Real-time suggestions for positioning, team coordination, and strategy adjustments to adapt to any match scenario.",
    img: "/features/item3.png",
  },
  {
    id: "item-4",
    title: "Economy and Loadout Recommendations",
    desc: "Optimize your purchases with tips based on team and enemy economy for strategic advantage.",
    img: "/features/item4.png",
  },
  {
    id: "item-5",
    title: "Dynamic Alerts and Reminders",
    desc: "Stay ahead with timely reminders for actions like planting or defusing bombs, tracking weapon noise, and maintaining health and armor.",
    img: "/features/item5.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-10 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <Title
          tagline={"our first agent"}
          title={"agent Precision Features"}
          align={1}
        />
        <div className="hidden lg:flex md:flex container mx-auto">
          <CardCarousel content={content} />
        </div>
        <div className="flex lg:hidden md:hidden container mx-auto">
          <CardSlider content={content} />
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

export default FeaturesSection;
