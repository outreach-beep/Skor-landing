import React from "react";

type HighighBoxProps = {
  isVideo: boolean;
};

const HighighBox: React.FC<HighighBoxProps> = ({ isVideo }) => {
  return (
    <div className="relative w-full mx-auto md:mx-0">
      <div
        className="absolute hidden lg:flex md:flex w-full bg-transparent aspect-[5/3]  lg:aspect-video"
        style={{
          transform: "translate(8px, 8px)",
          borderRight: "6px solid #ED4732",
          borderBottom: "6px solid #ED4732",
          zIndex: "1",
        }}
      />
      <div
        className="absolute lg:hidden flex w-full bg-transparent aspect-[5/3]  lg:aspect-video"
        style={{
          transform: "translate(4px, 4px)",
          borderRight: "3px solid #ED4732",
          borderBottom: "3px solid #ED4732",
          zIndex: "1",
        }}
      />
      <div className="relative w-full overflow-hidden aspect-[5/3] lg:aspect-video z-10">
        {isVideo ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EHYPhjbr2n0?si=l-d1Fgj7T2IYQxt3"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src="/image/about.png" alt="about" className="-mt-16" />
        )}
      </div>
    </div>
  );
};

export default HighighBox;
