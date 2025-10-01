import { handleLogout } from "@/helpers/apiHelpers";

type SignUpButtonProps = {
  handleClick: () => void;
};

export function SignUpButton({ handleClick }: SignUpButtonProps) {

  return (
    <div className="relative lg:inline-block md:inline-block hidden">
      <button
        onClick={handleClick}
        className="relative flex items-center border border-black bg-gradient-to-r from-[#EE5D4B] to-[#ED4732]"
      >
        <img
          src="/decorative/signup/Group1.svg"
          alt=""
          className="h-6 w-6 sm:h-10 sm:w-8"
          aria-hidden="true"
        />

        <span className="font-chakra px-4 py-3 text-black text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">
          TRY NOW
        </span>

        <img
          src="/decorative/signup/Group2.svg"
          alt=""
          className="h-6 w-6 sm:h-10 sm:w-8"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
