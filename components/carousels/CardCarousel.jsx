import React, { useState } from "react";
import "../../styles/carousel.css";

const CardCarousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = content.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative w-full  wrapper">
      <div className="carousel">
        {content.map((item, index) => {
          let className = "carousel__item";
          let transformStyle = "";

          if (index === currentIndex) {
            className += " active";
            transformStyle = "scale(1)";
          } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
            className += " previous";
            transformStyle = "scale(0.97)";
          } else if (index === (currentIndex + 1) % totalItems) {
            className += " next";
            transformStyle = "scale(0.97)";
          }

          return (
            <div className={className} key={item.id}>
              <div
                className="carousel__item-content relative"
                style={{
                  transform: transformStyle,
                }}
              >
                <img src={item.img} alt={item.title} />
                {index === currentIndex && (
                  <div className="absolute text-center bg-black bg-opacity-70 text-white h-[28%] bottom-0 left-0 right-0">
                    <h3 className="text-desc lg:text-desc-lg md:text-desc-md font-chakra font-bold opacity-100 z-10 pt-1 uppercase">
                      {item.title}
                    </h3>
                    <div className="flex justify-center text-center w-full">
                      <p className="font-sora text-tagline lg:text-tagline-lg md:text-tagline-md font-light leading-4 text-center">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        onClick={handlePrev}
        className="flex justify-center items-center absolute left-[20%] top-1/4 z-50 transform mt-[2vh] bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md"
      >
        <img
          src="/icons/right-arrow.svg"
          alt="live"
          className="rotate-45 w-1/2 transform scale-x-[-1]"
        />
      </div>
      <div
        onClick={handleNext}
        className="flex justify-center items-center absolute right-[20%] top-1/4 z-50 transform mt-[2vh] bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md"
      >
        <img
          src="/icons/right-arrow.svg"
          alt="live"
          className="-rotate-45 w-1/2"
        />
      </div>
    </div>
  );
};

export default CardCarousel;
