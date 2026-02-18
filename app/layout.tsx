import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nfkprod.vercel.app"),
  title: {
    default: "NFKPROD - Motion & CGI Designer",
    template: "%s | NFKPROD"
  },
  description: "Премиальный digital-портфель motion/CGI: кейсы, пакеты услуг и бриф-форма.",
  openGraph: {
    title: "NFKPROD - Motion & CGI Designer",
    description: "Премиальный digital-портфель и витрина услуг.",
    type: "website",
    locale: "ru_RU",
    siteName: "NFKPROD",
    images: [
      {
        url: "/og-nfk.png",
        width: 1024,
        height: 1024,
        alt: "NFKPROD"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NFKPROD - Motion & CGI Designer",
    description: "Премиальный digital-портфель и витрина услуг.",
    images: ["/og-nfk.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} font-body`}>
        <div className="site-shell">
          <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-8 pt-4 md:px-6">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
