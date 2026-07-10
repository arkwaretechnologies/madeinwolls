import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { type IconName } from "@/components/Icon";

import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Spring Cleaning Sydney | Deep Clean | Made in Wolls",
  description:
    "Comprehensive spring and deep cleaning across Sydney. Top to bottom, every surface, every corner. Police-checked team. From $499.",
};

const SPRING_POPULAR_ADD_ONS = [
  { item: "Inside fridge", price: "$90" },
  { item: "Rangehood", price: "$40" },
  { item: "Wall / door / door frame spot clean", price: "$40 (30 min) / $70 (1 hr)" },
];

export default function SpringCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "Spring & Deep Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Spring & Deep Cleaning Sydney — Top to Bottom, Spotless Every Time"
        intro="Sometimes a regular clean is not enough. Made in Wolls spring and deep cleaning service is a comprehensive, top-to-bottom clean designed for homes that need a thorough reset — whether after a long winter, before a special occasion, or simply when life gets busy. Our deep clean covers every surface, every corner and every appliance — the areas that standard cleaning often misses. All equipment and eco-friendly products included."
        heroImage={{
          src: "/MadeinWolls-images/MADEINWOLLS-57.JPG",
          alt: "Spring and deep cleaning service in Sydney",
          position: "center 18%",
        }}
        sideImages={[
          { src: "/MIW-imagesoutput/IMG_0160.jpeg", alt: "Deep cleaning detail" },
          { src: "/MIW-imagesoutput/IMG_0181.jpeg", alt: "Home refresh result" },
        ]}
        inclusions={[
          "Everything included in a regular clean — plus:",
          "Inside oven — racks, walls, door glass and seals",
          "Inside all cupboards and drawers throughout",
          "Ceiling fans and air vents",
          "All window tracks, frames and sills",
          "Behind and under all appliances",
          "Tile grout scrubbed in bathrooms",
        ]}
        popularAddOns={SPRING_POPULAR_ADD_ONS}
        pricing={serviceData?.tiers || []}
        pricingNote={serviceData?.pricingNote}
        trustBadges={[
          { icon: "checkCircle" as IconName, text: "Police-Checked" },
          { icon: "shield" as IconName, text: "Fully Insured" },
          { icon: "leaf" as IconName, text: "Eco-Friendly Products" },
          { icon: "clipboard" as IconName, text: "Job Checklist Included" },
        ]}
        suburbs={[
          "All suburbs across the Lower North Shore",
          "Northern Beaches",
          "City of Sydney",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
