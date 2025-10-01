"use client";

import { PartnerMarquee } from "../marquee";

const PartnerSection = () => {
  const rowOne = [
    {
      image: "/partners/egihome.png",
      link: "https://ebullientgaming.com/EGI/",
    },
    { image: "/partners/companeons.png", link: "https://companeons.io/" },
    {
      image: "/partners/marcos-gaming.png",
      link: "https://www.marcosgaming.com/#/",
    },
    { image: "/partners/helaSpace.png", link: "https://helalabs.com/" },
    { image: "/partners/daemons.png", link: "https://daemons.app/" },
    { image: "/partners/stan.png", link: "https://getstan.app/" },
    {
      image: "/partners/upthrust.png",
      link: "https://www.upthrustesports.com/",
    },
    {
      image: "/partners/whistlingwood.png",
      link: "https://www.whistlingwoods.net/",
    },
    { image: "/partners/NuroX.png", link: "https://www.nurox.me/" },
    {
      image: "/partners/trfour.png",
      link: "https://x.com/tr4ck3rgg?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
  ];

  const rowTwo = [
    {
      image: "/partners/altura.png",
      link: "https://x.com/altura?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/ambrus-studio.png",
      link: "https://x.com/ambrusstudio?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    { image: "/partners/dazn.png", link: "https://www.dazn.com/" },
    {
      image: "/partners/gamin.grid.png",
      link: "https://x.com/gaminggridx?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/hunters.png",
      link: "https://x.com/huntersofweb3?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/kanto.png",
      link: "https://x.com/kantolabs?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/kgen.png",
      link: "https://x.com/kgen_io?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/lfg.png",
      link: "https://x.com/lfgincorporated?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/lime.png",
      link: "https://x.com/limelight_gg?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/tribally.png",
      link: "https://x.com/triballygames?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
  ];

  const rowThree = [
    { image: "/partners/magic.square.png", link: "https://magicsquare.io/" },
    {
      image: "/partners/oyabun.png",
      link: "https://x.com/oyabungame?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/piratesofarr.png",
      link: "https://x.com/arrlandgame?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    { image: "/partners/playember.png", link: "#" },
    {
      image: "/partners/royale.png",
      link: "https://x.com/royaleweb3?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/shelter.png",
      link: "https://x.com/play_soe?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/spacerush.png",
      link: "https://x.com/kgen_io?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/tdd.png",
      link: "https://x.com/tropadadrih?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/lime.png",
      link: "https://x.com/limelight_gg?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
    {
      image: "/partners/vortex.png",
      link: "https://x.com/vortex_global?s=21&t=YZTuY_B0B0m7-jePTb1AgA",
    },
  ];

  return (
    <section id="partners" className="relative">
      <div className="lg:block ml-[4vw] left-0 -mt-[5.5vw] md:block absolute hidden">
        <img
          src="/icons/mascots/mascot.wave.svg"
          alt="mascot"
          className="w-[12vw]"
        />
      </div>
      <div className="container relative mx-auto">
        <div className="relative max-w-[998px] mx-auto text-center">
          <div className="mb-8">
            <h2 className="lg:text-title-lg md:text-title-md text-title leading-tight uppercase font-chakra font-bold text-white whitespace-pre-line">
              Network of 500+ Projects
            </h2>
          </div>
        </div>
        <div className="container flex flex-col mx-auto">
          <PartnerMarquee partnerImages={rowOne} direction="right" />
          <PartnerMarquee partnerImages={rowTwo} direction="left" />
          <PartnerMarquee partnerImages={rowThree} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
