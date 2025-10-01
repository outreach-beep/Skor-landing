import React from "react";

type BaseCardrops = {
  title: string;
  desc: string;
  icon: any
};

const BaseCard: React.FC<BaseCardrops> = ({ title, desc, icon }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col text-white w-2/3">
        <h1 className="text-lg font-chakra sm:text-lg md:text-2xl xl:text-4xl font-bold text-white">
          {title}
        </h1>
        <p className="text-white/80 mt-4 font-sora text-sm md:text-base xl:text-lg leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="flex  justify-end items-center w-1/4">
        <img src={`/icons/${icon}`} alt="stake" className="w-2/3" />
      </div>
    </div>
  );
};

export default BaseCard;
