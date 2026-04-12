import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Made in Wolls — Premium House Cleaning Services Sydney",
  description:
    "Premium house cleaning services in Sydney. Police-checked, fully insured team. Regular, spring, end of lease, office, Airbnb cleaning. 4.8/5 from 44 Google Reviews. We Clean, We Commit.",
  keywords:
    "premium house cleaning Sydney, house cleaning services Sydney, professional cleaners Sydney, cleaning services North Shore, cleaning services Northern Beaches, home cleaning Wollstonecraft, police checked cleaners Sydney",
  openGraph: {
    title: "Made in Wolls — Premium House Cleaning Services Sydney",
    description:
      "Police-checked, fully insured cleaning team servicing Sydney. 4.8/5 from 44 Google Reviews.",
    url: "https://www.madeinwolls.com",
    siteName: "Made in Wolls",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${dmSerif.variable}`}
    >
      <body style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
