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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "NFKPROD - Motion & CGI Designer",
    template: "%s | NFKPROD"
  },
  description: "Портфолио моушен и CGI-дизайнера: кейсы, пакеты услуг и форма брифа.",
  openGraph: {
    title: "NFKPROD - Motion & CGI Designer",
    description: "Премиальный digital-портфель и витрина услуг.",
    images: ["/placeholder/og-cover.svg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NFKPROD - Motion & CGI Designer",
    description: "Премиальный digital-портфель и витрина услуг.",
    images: ["/placeholder/og-cover.svg"]
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
