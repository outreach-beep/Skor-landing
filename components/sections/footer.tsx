"use client";
import React from "react";
import Link from "next/link";
import { navigation } from "@/constant/navConfig";


const Footer = () => {

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col gap-10 lg:w-3/4 md:w-3/4 w-[92%] mt-20 text-white">
      <div className="flex lg:flex-row md:flex-row flex-col gap-4 justify-between items-center">
        <div className="flex flex-col lg:items-start md:items-start items-center">
          <img
            src="/logo/logo-new.png"
            alt="Skor AI Logo"
            className="w-1/4 mb-4"
          />
          <p className="font-sora text-tagline lg:text-tagline-lg md:text-tagline-md lg:w-full w-3/4 lg:text-left md:text-left text-center font-light">
            Real-Time AI Coach for CS2 <br /> Play Smarter, Not Harder
          </p>
        </div>
        <div className="flex lg:gap-20 md:gap-20 gap-14">
          <div>
            <h4 className="font-chakra font-medium uppercase text-tertiary lg:text-tertiary-lg md:text-tertiary-md mb-2">
              NAVIGATE
            </h4>
            <ul className="font-sora space-y-3 text-tagline lg:text-tagline-lg md:text-tagline-md font-extralight">
            {navigation.map((item) => (
                    <li key={item.id}>
                      {item.type === 'link' ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => handleScroll(item.id)}
                          className="hover:underline"
                        >
                          {item.name}
                        </button>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between pb-20 font-sora font-extralight text-xs">
        <div className="lg:hidden gap-2 md:hidden flex mb-4">
          <Link
            href="https://x.com/theskorai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/x.svg" alt="x" />
          </Link>
          <Link
            href="https://t.me/theSkorAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/telegram.svg" alt="telegram" />
          </Link>
          <Link
            href="https://discord.com/invite/wYfw3sSzyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/discord.svg" alt="discord" />
          </Link>
          <Link
            href="https://www.instagram.com/theskorai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/instagram.svg" alt="instagram" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/skorai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/linkedin.svg" alt="linkedin" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/privacy-policy" className="pr-4 hover:underline">
            Privacy policy
          </Link>
          <Link href="/terms-and-conditions" className="border-l border-gray-600 px-4 hover:underline">
            Terms & Conditions
          </Link>
        </div>
        <div className="lg:pt-0 md:pt-0 pt-2">©All rights Reserved</div>
        <div className="lg:flex gap-2 md:flex hidden">
          <Link
            href="https://x.com/theskorai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/x.svg" alt="x" />
          </Link>
          <Link
            href="https://t.me/theSkorAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/telegram.svg" alt="telegram" />
          </Link>
          <Link
            href="https://discord.com/invite/wYfw3sSzyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/discord.svg" alt="discord" />
          </Link>
          <Link
            href="https://www.instagram.com/theskorai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/instagram.svg" alt="instagram" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/skorai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/social/linkedin.svg" alt="linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div>
<h4 className="font-chakra font-medium uppercase text-tertiary lg:text-tertiary-lg md:text-tertiary-md mb-2">
  Miscellaneous
</h4>
<ul className="font-sora space-y-3 text-tagline lg:text-tagline-lg md:text-tagline-md font-extralight">
  <li>
    <Link
      href="#how-it-works"
      scroll={false}
      className="hover:underline"
    >
      Community
    </Link>
  </li>
  <li>
    <Link
      href="#stake-earn"
      scroll={false}
      className="hover:underline"
    >
      FAQs
    </Link>
  </li>
  <li>
    <Link
      href="#roadmap"
      scroll={false}
      className="hover:underline"
    >
      License
    </Link>
  </li>
  <li>
    <Link
      href="#partners"
      scroll={false}
      className="hover:underline"
    >
      Privacy
    </Link>
  </li>
  <li>
    <Link href="#signup" scroll={false} className="hover:underline">
      Contact Us
    </Link>
  </li>
</ul>
</div> */
}
