import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
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
    "Premium house cleaning services in Sydney. Police-checked, fully insured team. Regular, spring, end of lease, office, Airbnb cleaning. 4.9/5 from 125 Google Reviews. We Clean, We Commit.",
  keywords:
    "premium house cleaning Sydney, house cleaning services Sydney, professional cleaners Sydney, cleaning services North Shore, cleaning services Northern Beaches, home cleaning Wollstonecraft, police checked cleaners Sydney",
  openGraph: {
    title: "Made in Wolls — Premium House Cleaning Services Sydney",
    description:
      "Police-checked, fully insured cleaning team servicing Sydney. 4.9/5 from 125 Google Reviews.",
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
      data-scroll-behavior="smooth"
    >
      <body style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
        <Providers>{children}</Providers>
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69e792bdd45a3c1c33e99e3a/1jmo9adbe';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
