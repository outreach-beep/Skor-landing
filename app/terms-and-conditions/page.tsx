"use client"

import Image from "next/image"
import Link from "next/link"

const TermsAndConditionsPage = () => {
    return (
        <div className="flex w-full min-h-screen font-chakra bg-[#141110] ">
            <div className="absolute inset-0 bg-opacity-50" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full p-4 overflow-y-auto">
                <div className="w-full max-w-4xl bg-[#1F1A18E5]/40 backdrop-blur-sm bg-opacity-90 p-8 rounded-lg shadow-lg">
                    <h1 className="m-0 tracking-[0.00938em] text-3xl font-semibold text-center leading-[150%] uppercase text-white mb-8">
                        Terms and Conditions
                    </h1>
                    <p className="mb-6 text-gray-300">Effective Date: 23 January, 2025</p>
                    <p className="mb-6 text-white text-sm">
                        Welcome to SKOR AI Agent's website (the "Site"). By accessing or using our Site, you agree to comply with
                        these Terms and Conditions. If you do not agree, please do not use the Site.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">1. Use of the Site</h2>
                        <p className="text-gray-300 text-sm">
                            You agree to use the Site for lawful purposes only and not to engage in any activity that could harm the
                            Site, its functionality, or other users.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">2. Intellectual Property</h2>
                        <p className="text-gray-300 text-sm">
                            All content, trademarks, and other intellectual property on the Site are owned by SKOR or its licensors.
                            You may not reproduce, distribute, or modify any materials without prior permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">3. User Accounts</h2>
                        <p className="text-gray-300 text-sm">
                            To access certain features, you may need to create an account. You are responsible for maintaining the
                            confidentiality of your account and agree to notify us immediately if you suspect unauthorized access.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
                        <p className="text-gray-300 text-sm">
                            SKOR is not liable for any damages arising from your use of the Site, including but not limited to data
                            loss or service interruptions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">5. Third-Party Links</h2>
                        <p className="text-gray-300 text-sm">
                            The Site may contain links to third-party websites. We are not responsible for the content or practices of
                            these external sites.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">6. Modification of Terms</h2>
                        <p className="text-gray-300 text-sm">
                            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on the Site,
                            and continued use constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">7. Governing Law</h2>
                        <p className="text-gray-300 text-sm">
                            These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales.
                            Any disputes shall be resolved exclusively in the courts of England and Wales.
                        </p>
                    </section>

                    <p className="mt-8 text-center text-gray-400">
                        If you have any questions, please contact us at{" "}
                        <a
                            href="mailto:info@footballrare.com"
                            className="text-[#EE5D4B] hover:text-[#ED4732] transition-colors duration-200"
                        >
                            info@footballrare.com
                        </a>
                    </p>

                    <div className="mt-8 text-center">
                        <Link
                            href="/"
                            className="inline-block px-6 py-3 text-black text-xl font-bold uppercase bg-gradient-to-r from-[#EE5D4B] to-[#ED4732] hover:bg-gradient-to-r hover:from-[#ED4732] hover:to-[#EE5D4B] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
                        >
                            <span className="font-chakra px-4 py-3 text-black text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">
                                BACK TO HOME
                            </span>            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditionsPage

