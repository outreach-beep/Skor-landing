"use client";

type Buttonprops = {
  text: string;
  handleClick?: any
};

const Button: React.FC<Buttonprops> = ({ text , handleClick }) => {
  return (
    <div onClick={handleClick} className="relative inline-block">
      <div className="absolute inset-0 backdrop-blur-[12px]"></div>

      <button className="relative flex items-center border border-black bg-gradient-to-r from-[#EE5D4B] to-[#ED4732]">
        <img
          src="/decorative/signup/Group1.svg"
          alt=""
          className="h-8 w-6 sm:h-10 sm:w-8"
          aria-hidden="true"
        />

        <span className="font-chakra uppercase px-2 sm:px-4 py-2 sm:py-4 text-black text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">
          {text}
        </span>

        <img
          src="/decorative/signup/Group2.svg"
          alt=""
          className="h-8 w-6 sm:h-10 sm:w-8"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export {Button}
