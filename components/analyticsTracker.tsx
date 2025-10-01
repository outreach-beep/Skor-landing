"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window?.gtag) {
      window?.gtag("config", "G-E0LJFXQ9J2", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}