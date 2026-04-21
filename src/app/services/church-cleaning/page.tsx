import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { type IconName } from "@/components/Icon";

import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Church Cleaning Sydney | Religious Facility Cleaning | Made in Wolls",
  description:
    "Professional church and religious facility cleaning across Sydney. Respectful, thorough and reliable. Police-checked team. Flexible scheduling.",
};

export default function ChurchCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "Church Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Church & Religious Facility Cleaning Sydney — Respectful, Thorough & Reliable"
        intro="A place of worship deserves the highest standard of care. Made in Wolls provides professional, respectful cleaning services for churches, chapels and religious facilities across Sydney's Lower North Shore and Northern Beaches — ensuring your community's space is immaculate, welcoming and safe for every gathering. We understand that cleaning a place of worship requires sensitivity, reliability and attention to detail. Our police-checked, professionally trained team works around your service schedule — before or after congregation times — with zero disruption to your community."
        heroImage={{
          src: "/MadeinWolls-images/MADEINWOLLS-91.JPG",
          alt: "Church and religious facility cleaning service",
        }}
        sideImages={[
          { src: "/MIW-imagesoutput/8EC9CAAD-4DAE-4DE3-83B1-9A426A3BB771.jpeg", alt: "Respectful, detailed cleaning" },
          { src: "/MIW-imagesoutput/8E2C9205-8933-427A-8EA1-E07BF17D07A4.jpeg", alt: "Clean and welcoming space" },
        ]}
        inclusions={[
          "Sanctuary and worship area — dusting, vacuuming, mopping and surface wipe-down",
          "Pews, chairs and seating areas cleaned and sanitised",
          "Entry, foyer and hallways",
          "Bathrooms — full sanitisation, restocked if supplies provided",
          "Kitchen or hall — benchtops, appliances, sink, floors",
          "Meeting rooms and function spaces",
          "All floors vacuumed and mopped throughout",
          "Bins emptied and relined",
          "Glass doors, windows and partitions cleaned",
        ]}
        pricing={serviceData?.tiers || []}
        trustBadges={[
          { icon: "checkCircle" as IconName, text: "Police-Checked Team" },
          { icon: "clock" as IconName, text: "Flexible Scheduling" },
          { icon: "shield" as IconName, text: "Fully Insured" },
          { icon: "leaf" as IconName, text: "Eco-Friendly Products" },
        ]}
        whyChoose={{
          title: "Why Churches Choose Made in Wolls",
          items: [
            "Police-checked team — trusted in your facility",
            "Flexible scheduling around service times and events",
            "Consistent and reliable — same standard every visit",
            "Eco-friendly, non-toxic cleaning products available",
            "Fully insured for your peace of mind",
          ],
        }}
        suburbs={[
          "Wollstonecraft", "Crows Nest", "Neutral Bay", "Mosman",
          "North Sydney", "Manly", "Dee Why", "Brookvale",
          "Frenchs Forest", "Narrabeen", "Mona Vale",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
