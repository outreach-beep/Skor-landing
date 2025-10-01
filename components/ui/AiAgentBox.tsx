import React, { useEffect, useState } from "react";

const COINGECKO_ID = "skor-ai";
const VS_CURRENCY = "usd";

const AiAgentBox: React.FC = () => {
  const [title, setTitle] = useState("SKOR AI");
  const [data, setData] = useState("Loading...");
  const [percentage, setPercentage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${COINGECKO_ID}&vs_currencies=${VS_CURRENCY}&include_24hr_change=true`
        );
        const json = await res.json();

        if (json[COINGECKO_ID]?.usd) {
          const price = json[COINGECKO_ID].usd;
          const priceChange = json[COINGECKO_ID].usd_24h_change;

          setData(`$${price.toFixed(5)}`);
          setPercentage(`${priceChange.toFixed(2)}%`);
        } else {
          console.error("Invalid response from CoinGecko:", json);
          setData("Price not found");
          setPercentage(null);
        }
      } catch (err) {
        console.error("Error fetching price:", err);
        setData("API Error");
        setPercentage(null);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#010001]/80 rounded-xl flex flex-col items-center justify-around px-[1rem] py-[1rem] shadow-lg transition-transform hover:scale-105 w-full border border-[#FF3B30]/30 relative overflow-hidden">
      <h3
        className="font-raleway text-[#F5D0C5] text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] font-medium leading-[100%] tracking-[10%] text-center" // Removed mb-[0.5rem]
        style={{
          background:
            "linear-gradient(166.34deg, #FFE2E0 44.45%, rgba(255, 255, 255, 0) 108.67%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h3>

      <div className="flex flex-col items-center justify-center w-full">
        <p className=" mt-2 font-inter text-[#D9D9D9] text-[0.8125rem] sm:text-[1rem] md:text-[1.25rem] font-bold pt-[0.1rem] italic leading-[100%] tracking-[0%] text-center"> {/* Adjusted pt */}
          {data}
        </p>

        {percentage !== null && (
          <span
            className={`${
              parseFloat(percentage) >= 0 ? "text-green-500" : "text-red-500"
            } font-bold text-[0.75rem] sm:text-[0.75rem] md:text-[1rem] pt-[0.1rem]`} // Adjusted pt
          >
            {percentage}
          </span>
        )}
      </div>
    </div>
  );
};

export default AiAgentBox;
