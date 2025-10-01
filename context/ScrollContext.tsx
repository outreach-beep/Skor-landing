"use client"
import React, { createContext, useContext, useRef } from "react";

type ScrollContextType = {
  scrollToSignup: () => void;
  setSignupRef: (ref: HTMLElement | null) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const signupRef = useRef<HTMLElement | null>(null);

  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setSignupRef = (ref: HTMLElement | null) => {
    signupRef.current = ref;
  };

  return (
    <ScrollContext.Provider value={{ scrollToSignup, setSignupRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};