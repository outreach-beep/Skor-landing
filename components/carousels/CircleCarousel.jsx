import React, { useEffect, useState } from "react";
import "../../styles/carousel.css";

const CircleCarousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = content.length;

  // target date (8 March 2025 + 49 days)
  const targetDate = new Date(Date.UTC(2025, 2, 8));
  targetDate.setDate(targetDate.getDate() + 49);

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

  return (
    <div className="relative w-full circle-wrapper mx-auto mb-28 -mt-10">
      <div className="circle-carousel">
        {content.map((item, index) => {
          let className = "circle-carousel__item ";
          let transformStyle = "";
          let itemSize = {
            height: `${item.size}vw`,
            width: `${item.size}vw`,
          };

          if (index === currentIndex) {
            className += " active";
            transformStyle = "scale(1.4) translateY(80px)";
          } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
            className += " previous";
            transformStyle = "scale(1.25) translateX(-80%)";
          } else if (index === (currentIndex + 1) % totalItems) {
            className += " next";
            transformStyle = "scale(1.25) translateX(80%)";
          }

          return (
            <div
              className={className}
              key={item.id}
              style={{ transform: transformStyle, ...itemSize }}
              onClick={() => handleItemClick(index)}
            >
              <div
                className="circle-carousel__item-content relative select-none flex items-center justify-center"
                style={itemSize}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ height: "19vw", width: "19vw" }}
                  className="relative mt-2 mr-2"
                />
                <div className="absolute inset-0 lg:flex md:flex hidden flex-wrap items-center justify-center text-white font-bold text-lg border border-[#272731] rounded-full bg-opacity-50 w-[75%] h-[75%] ml-[3.5vw] mt-[4vw]"></div>
                <div className="absolute lg:flex md:flex hidden text-center text-white w-[60%] h-[60%] flex-col justify-center items-center px-2">
                  <div className="flex justify-center items-center w-full">
                    <div
                      className={`w-[50%] ${
                        index === currentIndex ? "-mt-14" : "-mt-7"
                      }`}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className={`w-full h-full ${
                          (index === 2 || index === 3) && "-ml-[5px]"
                        } ${index === 0 && "-ml-[5px]"}`}
                      />
                    </div>
                  </div>
                  {index !== 1 && (
                    <div
                      className={`text-center ${
                        index === currentIndex ? "mt-8" : "mt-6"
                      }`}
                    >
                      <div className="font-sora text-[0.75rem] mt-1 font-light leading-[0.85rem] text-center px-9">
                        {item.desc.split("\n").map((line, index) => (
                          <div key={index} className="-mt-3.5">
                            <br />
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {index === currentIndex && (
                <div
                  className="absolute cursor-pointer bg-[#1F1F1F] bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center font-sora text-[1rem] text-white min-w-max px-4 py-2 min-h-[2rem] bg-cover bg-center rounded-lg"
                  style={{
                    boxShadow: "0px 2px 10px 2px #EE5D4B",
                  }}
                  onClick={() => {
                    if (item.live && item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                >
                  {index === 4 ? (
                    <div className="w-full font-sora flex justify-center items-center gap-1">
                      {["Days", "Hours", "Mins"].map((label, index) => {
                        const value = [days, hours, minutes][index];

                        return (
                          <div
                            key={label}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="text-[1rem] font-medium -mb-1 text-center text-white px-1 rounded-md">
                              {String(value).padStart(2, "0")}
                            </div>
                            <span className="text-[0.65rem] font-light text-white text-center">
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : item.live ? (
                    <> 🔴 Live Now</>
                  ) : (
                    <>Coming Soon</>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleCarousel;
