"use client"

import Link from "next/link"

const PrivacyPolicyPage = () => {
  return (
    <div className="flex w-full min-h-screen font-chakra bg-[#141110]">
      <div className="absolute inset-0 bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full p-4 overflow-y-auto">
        <div className="w-full max-w-4xl bg-[#1F1A18E5]/40 backdrop-blur-sm bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="m-0 tracking-[0.00938em] text-3xl font-semibold text-center leading-[150%] uppercase text-white mb-8">
            Privacy Policy
          </h1>
          <p className="mb-6 text-gray-300">Effective Date: 23rd January, 2025</p>
          <p className="mb-6 text-white text-sm">
            SKOR AI Agent ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit our website.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-300 text-sm">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-2">
              <li>
                Personal Information: Your name, email address, and any details you provide when you register,
                subscribe, or contact us.
              </li>
              <li>
                Usage Data: Information about your interaction with the Site, including IP address, browser type, device
                type, and pages visited.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300 text-sm">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-2">
              <li>Provide, maintain, and improve our Site and services.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send promotional updates or newsletters (only if you have opted in).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">3. Sharing Your Information</h2>
            <p className="text-gray-300 text-sm">
              We will not sell, rent, or trade your personal information to third parties. However, we may share your
              information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-2">
              <li>Service Providers: Third-party vendors who assist us in operating the Site.</li>
              <li>Legal Authorities: If required to comply with applicable laws, regulations, or legal processes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">4. Cookies</h2>
            <p className="text-gray-300 text-sm">
              We use cookies to enhance your experience on the Site. Cookies help us understand user behavior and
              improve functionality. You can control or disable cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">5. Data Security</h2>
            <p className="text-gray-300 text-sm">
              We take reasonable steps to secure your personal data against unauthorized access, alteration, disclosure,
              or destruction. However, no method of transmission over the Internet is entirely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-gray-300 text-sm">
              As a user based in the UK, you have the following rights under applicable data protection laws:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mt-2">
              <li>Access your personal data.</li>
              <li>Request corrections or updates to your data.</li>
              <li>Request the deletion of your personal data ("Right to be Forgotten").</li>
              <li>Object to data processing or withdraw consent where applicable.</li>
            </ul>
            <p className="text-gray-300 text-sm mt-2">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:info@footballrare.com"
                className="text-[#EE5D4B] hover:text-[#ED4732] transition-colors duration-200"
              >
                info@footballrare.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">7. Retention of Data</h2>
            <p className="text-gray-300 text-sm">
              We will retain your personal data only for as long as is necessary to fulfill the purposes outlined in
              this Privacy Policy or to comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">8. Changes to this Policy</h2>
            <p className="text-gray-300 text-sm">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised
              effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">9. Contact Us</h2>
            <p className="text-gray-300 text-sm">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact
              us at:{" "}
              <a
                href="mailto:info@footballrare.com"
                className="text-[#EE5D4B] hover:text-[#ED4732] transition-colors duration-200"
              >
                info@footballrare.com
              </a>
            </p>
          </section>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 text-black text-xl font-bold uppercase bg-gradient-to-r from-[#EE5D4B] to-[#ED4732] hover:bg-gradient-to-r hover:from-[#ED4732] hover:to-[#EE5D4B] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
            >
              <span className="font-chakra px-4 py-3 text-black text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">
                BACK TO HOME
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

