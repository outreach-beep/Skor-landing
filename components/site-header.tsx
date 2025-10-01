// File: components/site-header.tsx

"use client";

import { navigation } from "@/constant/navConfig";
import { useScrollContext } from "@/context/ScrollContext";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { SignUpButton } from "./sign-up-button";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    scrollTo("our-agents");
  };

  return (
    <header className="fixed top-0 z-[99] w-screen bg-[#1F1A1899] backdrop-blur-sm flex items-center justify-center">
      <div className="flex w-[95%] py-2 justify-between">
        <div>
          <Link href="/" className="flex items-center">
            <img
              src="/logo/logo-new.png"
              alt="Logo"
              className="lg:w-[4.5em] md:[8rem] w-[3.5em]"
            />
          </Link>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <SignUpButton handleClick={handleClick} />
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden absolute md:flex text-white items-center space-x-4 lg:space-x-8 font-chakra">
        {navigation.map((item) => (
          <span key={item.id}>
            {item.type === 'link' ? (
              <a
                href={item.href}
                className="hover:underline"
              >
                {item.name}
              </a>
            ) : (
              <button
                onClick={() => scrollTo(item.id)}
                className="hover:underline"
              >
                {item.name}
              </button>
            )}
          </span>
        ))}
      </nav>
      {isOpen && (
        <div className="fixed inset-0 h-screen bg-black bg-opacity-70 flex justify-end z-50">
          <div className="w-full max-w-xs bg-[#1F1A18] h-full p-6 flex flex-col">
            <button
              className="self-end text-white mb-8"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>

            <div className="flex flex-col font-chakra space-y-6 mt-20 text-center items-center">
              <button
                className="text-[#ff6b6b] text-xl font-semibold transition-colors"
                onClick={handleClick}
              >
                TRY NOW
              </button>
              {navigation.map((item) => (
                <span key={item.id}>
                  {item.type === 'link' ? (
                    <a
                      href={item.href}
                      className="text-[#ff6b6b] text-xl font-semibold transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-[#ff6b6b] text-xl font-semibold transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
