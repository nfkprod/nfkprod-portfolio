import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RouteTransition from "@/components/RouteTransition";
import MotionPreference from "@/components/MotionPreference";
import "lenis/dist/lenis.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nfkprod.ru"),
  icons: {
    icon: [{ url: "/brand/icon-wordmark-v4.svg", type: "image/svg+xml" }, { url: "/brand/favicon-wordmark-v4.ico" }, { url: "/brand/icon-wordmark-v4.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/brand/apple-wordmark-v4.png", sizes: "180x180" }],
  },
  title: {
    default: "NFKPROD - Motion, CGI, VFX & AI",
    template: "%s | NFKPROD",
  },
  openGraph: {
    title: "NFKPROD - Motion, CGI, VFX & AI",
    type: "website",
    locale: "ru_RU",
    siteName: "NFKPROD",
    images: [
      {
        url: "/brand/og-wordmark-v4.png",
        width: 1200,
        height: 630,
        alt: "NFKPROD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFKPROD - Motion, CGI, VFX & AI",
    images: ["/brand/og-wordmark-v4.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem("nfk-theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){}})();` }} /></head>
      <body className={`${manrope.variable} font-body`}>
        <MotionPreference>
        <RouteTransition>
        <div className="site-shell">
          <div className="site-container">
            <Navbar />
            <div id="main-content" tabIndex={-1}>
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <BackToTop />
        </RouteTransition>
        </MotionPreference>
      </body>
    </html>
  );
}
