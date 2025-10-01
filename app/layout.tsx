import AnalyticsTracker from "@/components/analyticsTracker";
import { SiteHeader } from "@/components/site-header";
import { ScrollProvider } from "@/context/ScrollContext";
import "@/styles/globals.css";
import { Chakra_Petch, Sora } from "next/font/google";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "SKOR AI - Your Personalised Gaming Coach",
  description: "A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games.",
  icons: {
    icon: [
      {
        url: "/favicon/16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "SKOR AI - Your Personalised Gaming Coach",
    description: "A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games.",
    url: "https://skoragents.ai",
    siteName: "Skor AI Agents",
    images: [
      {
        url: "https://skoragents.ai/logo/logo-bg.png",
        width: 1080,
        height: 1080,
        alt: "Skor AI Agents",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKOR AI - Your Personalised Gaming Coach",
    description: "A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games.",
    images: ["https://skoragents.ai/logo/logo-bg.png"],
    creator: "@theskorai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SKOR AI - Your Personalised Gaming Coach</title>
        <meta name="title" content="SKOR AI - Your Personalised Gaming Coach" />
        <meta name="description" content="A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skoragents.ai/" />
        <meta property="og:title" content="SKOR AI - Your Personalised Gaming Coach" />
        <meta property="og:description" content="A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games." />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skoragents.ai/" />
        <meta property="twitter:title" content="SKOR AI - Your Personalised Gaming Coach" />
        <meta property="twitter:description" content="A hub of advanced gaming agents enabling gamers of all levels from casual players to seasoned pros, streamers, and stakeholders to save time, optimize performance, earn rewards, and master their favorite games." />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
     <body>
          <h1>SKOR AI - Your Personalised Gaming Coach</h1>{" "}
        </body>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E0LJFXQ9J2" /> */}
        {/* <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E0LJFXQ9J2');
          `}
        </Script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6Z2CMZJ');
            `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-00EJ1M09K1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-00EJ1M09K1', {
        linker: {
          domains: ['skoragents.ai', 'app.skoragents.ai']
        }
      });
    `,
          }}
        />

        <meta name="apple-mobile-web-app-title" content="Skor" />
      </head>
      <body className={`${chakraPetch.variable} ${sora.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6Z2CMZJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollProvider>
          <SiteHeader />
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ScrollProvider>
        <AnalyticsTracker />
      </body>
    </html>
  );
}
