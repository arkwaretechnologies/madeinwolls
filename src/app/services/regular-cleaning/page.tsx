import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { type IconName } from "@/components/Icon";

import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Regular Home Cleaning Sydney | Made in Wolls",
  description:
    "Professional regular home cleaning services across Sydney. Weekly, fortnightly or monthly. Police-checked, fully insured team. From $140.",
};

export default function RegularCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "Regular Home Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Regular Home Cleaning Sydney — Reliable, Thorough & Trusted"
        intro="A clean home should never be something you have to worry about. Made in Wolls provides professional regular cleaning services across Sydney's Lower North Shore, Northern Beaches and City of Sydney — delivering a consistently exceptional standard on every visit. Our regular cleaning service is tailored to your home and schedule. Whether you need a weekly, fortnightly or monthly clean, we work around you — bringing all equipment and eco-friendly products every time."
        heroImage={{
          src: "/MadeinWolls-images/MADEINWOLLS-3.JPG",
          alt: "Regular home cleaning in Sydney",
          position: "center 22%",
        }}
        sideImages={[
          { src: "/MIW-imagesoutput/IMG_0158.jpeg", alt: "Cleaning detail work" },
          { src: "/MIW-imagesoutput/IMG_0159.jpeg", alt: "Fresh, tidy home finish" },
        ]}
        inclusions={[
          "Full kitchen clean — benchtops, stovetop, appliances, sink and floor",
          "All bathrooms — toilet, shower, bath, sink, mirrors and tiles",
          "Bedrooms — dusting, vacuuming and linen change (if provided)",
          "Living and dining areas — dusting, vacuuming and mopping",
          "Laundry — wipe down and mop",
          "All floors vacuumed and mopped throughout",
          "Bins emptied and relined",
        ]}
        pricing={serviceData?.tiers || []}
        trustBadges={[
          { icon: "checkCircle" as IconName, text: "Police-Checked" },
          { icon: "shield" as IconName, text: "Fully Insured" },
          { icon: "star" as IconName, text: "125 Google Reviews" },
          { icon: "clipboard" as IconName, text: "Job Checklist Included" },
        ]}
        suburbs={[
          "Wollstonecraft", "Crows Nest", "Neutral Bay", "Mosman", "Cammeray",
          "Kirribilli", "Manly", "Dee Why", "Brookvale", "Woollahra",
          "Surry Hills", "CBD", "Newtown", "Glebe",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
