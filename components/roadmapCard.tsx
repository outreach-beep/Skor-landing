import React from "react";

type RoadmapCardProps = {
  month: string;
  title: string;
  features: string[];
};

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  month,
  title,
  features,
}) => {
  return (
    <div className="flex justify-between">
      <div className="lg:w-1/4 md:w-1/4 w-1/5 flex justify-center items-center">
        <div className="bg-[#423A36] lg:h-14 lg:w-14 md:h-14 md:w-14 h-7 w-7 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full bg-[#423A36] lg:p-8 md:p-8 p-4">
        <h1 className="font-chakra uppercase text-[#ff6b6b] lg:leading-[3.5rem] leading-7 text-[1.25rem] lg:text-secondary-md md:text-secondary-md font-bold ">
          {title}
        </h1>
        {/* <h2 className="text-[#ff6b6b] mt-2 font-semibold font-sora text-tertiary lg:text-tertiary-lg md:text-tertiary-md leading-relaxed">
          {title}
        </h2> */}
        <ul className="font-sora font-light mt-1 text-tertiary lg:text-tertiary-lg md:text-tertiary-md leading-relaxed text-white list-disc pl-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCard;
