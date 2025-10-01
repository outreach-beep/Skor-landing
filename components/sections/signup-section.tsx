"use client";

import Title from "../title";
// import { signIn } from "next-auth/react";
import { useScrollContext } from "@/context/ScrollContext";
import { useRouter } from "next/navigation";
import "../../styles/google.css";
import "../../styles/email.css";

export function SignupSection() {
  const { setSignupRef } = useScrollContext();
  const router = useRouter();

  return (
    <section ref={setSignupRef}>
      <div className="flex lg:border-t-[0.5px] md:border-t-[0.5px] border-t-0 lg:border-b-[0.5px] md:border-b-[0.5px] border-white/20 lg:pb-28 md:pb-18 pb:16 pt-12 relative flex-col w-full justify-center items-center">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-16 xl:px-8">
          <div className="relative max-w-[998px] mx-auto text-center">
            <Title
              tagline="TRY AGENT PRECISION"
              title={"SIGN-UP FOR EARLY ACCESS"}
              align={1}
            />
            <div className="max-w-screen-md mt-10 mx-auto space-y-4 font-sora">
              {/* <button
                className="w-full h-12 border-y-[0.5px] border-white/15 bg-[#1F1A18E5]/90 text-white flex items-center justify-center gap-2 hover:bg-gray-100 hover:text-[#1F1A18E5] transition-colors"
                onClick={() => signIn("google")}
              >
                <img
                  src="/icons/signup/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="  font-light">Continue With Google</span>
              </button> */}
              <button
                className="gsi-material-button"
                // onClick={() => signIn("google")}
              >
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ display: "block" }}
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      ></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="gsi-material-button-contents display: none;">
                    Continue with Google
                  </span>
                  {/* <span className="display: none;">Continue with Google</span> */}
                </div>
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-[0.5px] bg-white/15"></div>
                <span className="text-white/60 text-sm font-light px-4">
                  Or
                </span>
                <div className="flex-1 h-[0.5px] bg-white/15"></div>
              </div>
              <button
                className="email-button"
                onClick={() => router.push("/email")}
              >
                <div className="email-button-state"></div>
                <div className="email-button-content-wrapper">
                  <div className="email-button-icon">
                    <img
                      src="/icons/signup/email.svg"
                      alt="email"
                      // className="w-6 h-6"
                    />
                  </div>
                  <span className="email-button-contents display: none;">
                    Continue With Email
                  </span>
                </div>
              </button>
              {/* <button
                className="w-full h-12  border-y-[0.5px] border-white/15 bg-[#1F1A18E5]/90 text-white flex items-center justify-center gap-2 hover:bg-[#38261E]/80 transition-colors"
                onClick={() => router.push("/email")}            >
                <img
                  src="/icons/signup/email.svg"
                  alt="email"
                  className="w-6 h-6"
                />
                <span className="font-light ">Continue With Email</span>
              </button> */}
            </div>
            <div className="lg:block -mr-[6vw] right-0 -mt-[4vw] md:block absolute hidden">
              <img
                src="/icons/mascots/mascot.wave.svg"
                alt="mascot"
                className="w-[12vw] scale-x-[-1] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
