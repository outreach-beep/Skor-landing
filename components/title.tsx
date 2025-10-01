import React from "react";

type TitleProps = {
  tagline: string;
  title: string;
  align: any;
};

const Title: React.FC<TitleProps> = ({
  tagline,
  title,
  align,
  isTaglineDisabled,
}) => {
  const alignObj = ["justify-start", "justify-center", "justify-end"];

  return (
    <div className="relative mx-auto mb-3">
      {!isTaglineDisabled && (
        <div
          className={`flex lg:${alignObj[align]} justify-center items-center gap-2 mb-4`}
        >
          <img src="/decorative/about/decHL.svg" alt="side-left" />{" "}
          <p className="text-[#ff6b6b] font-sora uppercase lg:text-tagline-lg md:text-tagline-md text-tagline font-light tracking-wider whitespace-nowrap">
            {tagline}
          </p>
          <img src="/decorative/about/decHR.svg" alt="side-right" />
        </div>
      )}
      <h2
        className={`flex lg:${alignObj[align]} md:${alignObj[align]} lg:text-left text-center justify-center lg:text-title-lg md:text-title-md text-title leading-tight uppercase font-chakra font-bold text-white whitespace-pre-line`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
