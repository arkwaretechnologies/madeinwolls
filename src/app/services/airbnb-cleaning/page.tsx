import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { type IconName } from "@/components/Icon";

import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Airbnb Cleaning Sydney | Fast Turnaround | Made in Wolls",
  description:
    "Professional Airbnb turnaround cleaning across Sydney. Fast, guest-ready between every booking. Before and after photos included. Police-checked team.",
};

export default function AirbnbCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "Airbnb Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Airbnb Cleaning Sydney — Guest-Ready Turnaround, Every Time"
        intro="As an Airbnb host, your reviews depend on first impressions. Made in Wolls provides fast, professional Airbnb turnaround cleaning services across Sydney's Lower North Shore and Northern Beaches — ensuring your property is immaculate and guest-ready between every booking. We understand that timing is everything for short-term rental hosts. Our team works efficiently within your checkout and check-in window, leaving your property spotless, fresh and staged for the next guest."
        heroImage={{
          src: "/MadeinWolls-images/MADEINWOLLS-99.JPG",
          alt: "Airbnb turnaround cleaning service",
        }}
        sideImages={[
          { src: "/Services-images/Airbnb/airbnb1.jpg", alt: "Airbnb sample clean - living and bedroom ready" },
          { src: "/Services-images/Airbnb/airbnb2.jpg", alt: "Airbnb sample clean - guest-ready kitchen and bath" },
          { src: "/Services-images/Airbnb/airbnb3.jpg", alt: "Airbnb sample clean - fresh setup for check-in" },
        ]}
        inclusions={[
          "Full property clean to hotel standard",
          "Linen change and bed making — if linen is provided by host",
          "Bathroom restock — toiletries topped up if supplies are left",
          "Kitchen reset — dishes, surfaces, appliances",
          "Rubbish removal and bin reline",
          "Before and after photos provided as standard",
          "Flexible scheduling around your booking calendar",
        ]}
        pricing={serviceData?.tiers || []}
        trustBadges={[
          { icon: "clock" as IconName, text: "Fast Turnaround" },
          { icon: "camera" as IconName, text: "Before & After Photos" },
          { icon: "checkCircle" as IconName, text: "Police-Checked" },
          { icon: "shield" as IconName, text: "Fully Insured" },
        ]}
        whyChoose={{
          title: "Why Airbnb Hosts Choose Us",
          items: [
            "Reliable and on time — we understand your check-in deadlines",
            "Same-day bookings available for urgent turnarounds",
            "Direct communication — you are always kept informed",
            "Consistent standard — every clean to the same high level",
          ],
        }}
        suburbs={[
          "Wollstonecraft", "Neutral Bay", "Mosman", "Kirribilli",
          "Lavender Bay", "Bondi", "Bondi Beach", "Double Bay",
          "Rose Bay", "Paddington", "Surry Hills", "CBD", "Pyrmont",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
