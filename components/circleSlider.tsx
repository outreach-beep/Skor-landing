import React, { useEffect, useState } from "react";

type Slide = {
  img: string;
  thumbnail: string;
  title: string;
  agent: string;
  desc: string;
  live: boolean;
  link?: string;
};

type CardSliderProps = {
  content: Slide[];
};

const CircleSlider: React.FC<CardSliderProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const targetDate = new Date(Date.UTC(2025, 2, 8));
  targetDate.setDate(targetDate.getDate() + 49);

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  return (
    <div className="relative w-full transition-all duration-500 max-w-lg mx-auto overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={content[currentIndex].img}
          alt={content[currentIndex].title}
          className="w-[62vw] h-[94vw] mx-auto object-contain"
        />

        <div
          onClick={prevSlide}
          className="flex justify-center items-center absolute top-1/2 left-3 transform -translate-y-1/2 z-50 bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md cursor-pointer"
        >
          <img
            src="/icons/right-arrow.svg"
            alt="prev"
            className="rotate-45 w-1/2 transform scale-x-[-1]"
          />
        </div>
        <div
          onClick={nextSlide}
          className="flex justify-center items-center absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white lg:h-12 md:w-12 md:h-12 w-10 h-10 shadow-md cursor-pointer"
        >
          <img
            src="/icons/right-arrow.svg"
            alt="next"
            className="-rotate-45 w-1/2"
          />
        </div>
      </div>

      <div className="absolute flex flex-col justify-center items-center z-50 h-[60%] w-[60%] mx-auto my-auto inset-0 text-tertiary leading-tight text-center">
        <div
          className={`${currentIndex == 2 ? "w-[45%]" : "w-[50%]"} ${
            currentIndex == 0 && "-mt-8"
          } ${currentIndex == 2 && "-mt-6"} mx-auto`}
        >
          <img
            src={content[currentIndex].thumbnail}
            alt={content[currentIndex].title}
            className={`w-full h-full `}
          />
        </div>
        <p
          className={`text-[#D9D9D9] font-sora text-[0.75rem] px-7 leading-3 ${
            currentIndex == 2 ? "mt-3" : "mt-4"
          } `}
        >
          {content[currentIndex].desc}
        </p>
      </div>

      {currentIndex !== 3 && (
        <div
          className="absolute cursor-pointer bg-[#1F1F1F] bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center font-sora text-[1rem] text-white min-w-max px-4 py-2 min-h-[2.5rem] bg-cover bg-center rounded-lg overflow-visible"
          id="TryNowLandingButton"
          style={{
            boxShadow: "0px 2px 5px 2px #EE5D4B",
          }}
          onClick={() => {
            if (content[currentIndex].live && content[currentIndex].link) {
              window.open(content[currentIndex].link, "_blank");
            }
          }}
        >
          {currentIndex === 4 ? (
            <div className="w-full font-sora flex justify-center items-center gap-1">
              {["Days", "Hours", "Mins"].map((label, idx) => {
                const value = [days, hours, minutes][idx];

                return (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="text-[0.8rem] font-medium -mb-1 text-center text-white px-1 rounded-md">
                      {String(value).padStart(2, "0")}
                    </div>
                    <span className="text-[0.55rem] font-light text-white text-center">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : content[currentIndex].live ? (
            <span id="TryNowLanding"> 🔴 Live Now </span>
          ) : (
            <>Coming Soon</>
          )}
        </div>
      )}
    </div>
  );
};

export default CircleSlider;
