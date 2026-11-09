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
    icon: [{ url: "/brand/favicon-v2.ico" }, { url: "/brand/icon-v2.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/brand/apple-touch-icon-v2.png", sizes: "180x180" }],
  },
  title: {
    default: "NFKPROD - Motion, CGI, AI",
    template: "%s | NFKPROD",
  },
  openGraph: {
    title: "NFKPROD - Motion, CGI, AI",
    type: "website",
    locale: "ru_RU",
    siteName: "NFKPROD",
    images: [
      {
        url: "/brand/nfk-mark-v2.png",
        width: 1024,
        height: 1024,
        alt: "NFKPROD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFKPROD - Motion, CGI, AI",
    images: ["/brand/nfk-mark-v2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
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
