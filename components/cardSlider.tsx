import React, { useState } from "react";

type Slide = {
  img: string;
  title: string;
  desc: string;
};

type CardSliderProps = {
  content: Slide[];
};

const CardSlider: React.FC<CardSliderProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  return (
    <div className="relative w-full mb-10 max-w-lg mx-auto overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={content[currentIndex].img}
          alt={content[currentIndex].title}
          className="w-full object-contain"
        />

        <div
          onClick={prevSlide}
          className="flex justify-center items-center absolute top-1/2 left-3 transform -translate-y-1/2 z-50 bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md"
        >
          <img
            src="/icons/right-arrow.svg"
            alt="live"
            className="rotate-45 w-1/2 transform scale-x-[-1]"
          />
        </div>

        <div
          onClick={nextSlide}
          className="flex justify-center items-center absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md"
        >
          <img
            src="/icons/right-arrow.svg"
            alt="live"
            className="-rotate-45 w-1/2"
          />
        </div>
      </div>

      <div className="py-2 px-6 text-tertiary leading-tight text-center">
        <h3 className="text-desc font-chakra uppercase font-semibold text-white">
          {content[currentIndex].title}
        </h3>
        <p className="text-[#D9D9D9]">{content[currentIndex].desc}</p>
      </div>
    </div>
  );
};

export default CardSlider;
