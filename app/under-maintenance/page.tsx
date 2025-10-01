// File: app/under-maintenance/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";

function UnderMaintenancePageContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <div className="flex w-full min-h-screen font-chakra">
      <Image
        src="/image/hero-bg.png"
        alt="background"
        className="object-cover absolute inset-0 w-full h-full"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full p-4">
        <div className="w-full max-w-lg bg-[#1F1A18E5]/40 backdrop-blur-sm bg-opacity-90 p-8 rounded-lg shadow-lg">
          <Image
            src="/logo/logo-new.png"
            alt="logo"
            className="object-contain mx-auto mb-8"
            width={200}
            height={40}
            loading="lazy"
          />
          <h1 className="m-0 tracking-[0.00938em] text-4xl font-semibold text-center leading-[150%] uppercase text-white">
            Under Maintenance
          </h1>
          <p className="m-0 tracking-[0.00938em] text-base font-bold text-center leading-[150%] text-white mb-6 uppercase">
            We are currently working on this page. Please check back later.
          </p>
          <Link href="/" className="block w-full">
           <button className="w-full font-chakra px-4 py-4 text-black text-xl font-bold uppercase bg-gradient-to-r from-[#EE5D4B] to-[#ED4732] hover:scale-105 focus:outline-none focus:ring-2 focus:gradientEnd focus:ring-offset-2 transition-colors duration-200">
              <span className="mx-4">Back to Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function UnderMaintenancePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnderMaintenancePageContent />
    </Suspense>
  );
}
