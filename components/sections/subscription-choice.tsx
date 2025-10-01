import Title from "../title"

export default function SubscriptionChoice() {
  return (
    <div>
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
      {/* <div className="max-w-[1200px] mx-auto"> */}
        {/* Header Section */}
        <div className="relative mb-16 lg:mb-32">
          <div className="relative z-10">
            <Title tagline={"EARN WHILE YOU PLAY"} title={"CHOOSE YOUR PATH:\nSUBSCRIBE OR STAKE"} align={0} />

            <div className="max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              <p className="text-white/80 font-sora text-tertiary font-light lg:text-tertiary-lg md:text-tertiary-md leading-relaxed text-center lg:text-left">
                With SKOR AI Agents, you can earn rewards not just by staking your
                <br className="hidden md:block" />
                SKOR tokens but also by leveling up your gameplay
              </p>
            </div>
          </div>

          {/* Badge positioning for different breakpoints */}
          <div className="absolute hidden lg:block top-0 right-0 w-72 h-72">
            <img src="/icons/subscription/choose.svg" alt="choose" className="w-full h-full" />
          </div>

          <div className="hidden md:hidden lg:hidden absolute -top-12 right-0 w-56 h-56">
            <img src="/icons/subscription/choose.svg" alt="choose" className="w-full h-full" />
          </div>

          <div className="flex justify-center mt-6 md:hidden">
            <img src="/icons/subscription/choose.svg" alt="choose" className="w-72 h-72" />
          </div>
        </div>
        </div>

        <div className="inset-x-0 flex border-t-[0.5px] lg:border-b-[0.5px] md:border-b-[0.5px] border-white/20 pt-14 pb-28 md:pb-20 relative flex-col w-full justify-center items-center">
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[0.5px] bg-white/20 transform -translate-x-1/2"></div>

<div className="container relative mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
        <div className="grid md:grid-cols-2 gap-20 md:gap-12 lg:gap-24 max-w-2xl lg:max-w-none mx-auto text-white">
          {/* Stake Option */}
          <div className="relative">
            <div className="flex md:flex lg:block">
              <div className="w-[60%] md:w-[60%] lg:w-[65%] md:flex-grow lg:pr-16">
                <h2 className="text-[40px] md:text-4xl font-bold tracking-wide mb-6 md:mb-8 font-chakra">STAKE</h2>
                <ul className="space-y-2 md:space-y-4 text-xl md:text-lg font-sora">
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 leading-[1.6] md:leading-tight text-[13.6px] md:text-base">
                      Stake your tokens to enjoy advanced features.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 leading-[1.6] md:leading-tight text-[13.6px] md:text-base">
                      Earn APY, revenue share, and additional exclusive rewards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 leading-[1.6] md:leading-tight text-[13.6px] md:text-base">
                      Actively participate in the platform's success and share in its growth.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-[40%] md:w-[40%] lg:w-[45%] flex items-center justify-center lg:absolute lg:right-0 lg:top-0">
                <img src="/icons/subscription/stake.png" alt="stake" className="w-28 md:w-44" />
              </div>
            </div>
          </div>
          {/* Subscribe Option */}
          <div className="relative">
            <div className="flex md:flex lg:block">
              <div className="w-[60%] md:w-[60%] lg:w-[65%] md:flex-grow lg:pr-16">
                <h2 className="text-[40px] md:text-4xl font-bold tracking-wide mb-6 md:mb-8 font-chakra">SUBSCRIBE</h2>
                <ul className="space-y-2 md:space-y-4 text-xl md:text-lg font-sora">
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 text-[13.6px] md:text-base leading-[1.6] md:leading-tight">
                      Unlock all premium features with a monthly fee.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 leading-[1.6] md:leading-tight text-[13.6px] md:text-base">
                      Pay in USD, USDT, or the equivalent value in Skorai tokens.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 text-2xl">•</span>
                    <span className="text-gray-300 leading-[1.6] md:leading-tight text-[13.6px] md:text-base">
                      All subscription proceeds go equally to token burns, staking pools, and ecosystem growth.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-[40%] md:w-[40%] lg:w-[45%] flex items-center justify-center lg:absolute lg:right-0 lg:top-0">
                <img src="/icons/subscription/subscribe.png" alt="subscribe" className="w-28 md:w-44" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    </div>
  )
}

