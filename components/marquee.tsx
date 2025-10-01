import Link from "next/link";
import React from "react";

export const LvlMarquee = () => {
  return (
    <div className="relative w-full font-chakra overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap items-center uppercase text-primary lg:text-primary-lg md:text-primary-md font-bold text-white leading-[1.1] tracking-wide">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <img
              src="/icons/level.carousel.svg"
              alt="level"
              className="h-[1em] w-auto mx-6"
            />
            <span className="px-6">level up your game</span>
            <img
              src="/icons/level.carousel.svg"
              alt="level"
              className="h-[1em] w-auto mx-6"
            />
            <span className="px-6 text-gray-700">level up your game</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

interface PartnerMarqueeProps {
  partnerImages: { image: string; link: string }[];
  direction?: "left" | "right";
}

export function PartnerMarquee({ partnerImages, direction = "left" }: PartnerMarqueeProps) {
  const isLeft = direction === "left";
  const repeatedImages = [
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
    ...partnerImages,
  ];

  return (
    <div className="relative w-full font-chakra overflow-hidden border-t border-b border-white">
      <div className="flex w-full items-center">
        <div
          className={`flex items-center uppercase font-bold text-white leading-[1.1] whitespace-nowrap`}
          style={{
            animation: `scroll ${partnerImages.length * 5}s linear infinite ${isLeft ? "" : "reverse"
              }`,
          }}
        >
          {
            repeatedImages.map((partner, index) => (
              <React.Fragment key={index}>
                <Link href={partner.link} passHref legacyBehavior target="_blank">
                  <img
                    src={partner.image}
                    alt={`Partner logo ${index + 1}`}
                    className="w-[10em] px-6 py-3 border-r cursor-pointer"
                    loading="lazy"
                  />
                </Link>
                <div className="w-[0.5px] h-[2em] bg-white"></div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
};
