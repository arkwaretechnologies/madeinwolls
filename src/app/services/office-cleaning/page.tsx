import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { type IconName } from "@/components/Icon";

import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Office Cleaning Sydney | Commercial Cleaning | Made in Wolls",
  description:
    "Professional office and commercial cleaning across Sydney. After-hours available, zero disruption. Police-checked, fully insured team. From $150.",
};

export default function OfficeCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "Office & Commercial Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Office & Commercial Cleaning Sydney — Professional, Reliable & Disruption-Free"
        intro="A clean workspace is not just about appearances — it reflects your professionalism and creates an environment where your team can perform at their best. Made in Wolls provides reliable office and commercial cleaning services across Sydney, tailored to your schedule and requirements. We work around your business hours — early morning, after hours or weekends — to ensure zero disruption to your operations."
        inclusions={[
          "Reception, common areas and meeting rooms",
          "Workstation dusting — without disturbing papers or personal items",
          "Kitchen and break room — benchtops, appliances, sink, floor",
          "Bathrooms — full sanitisation, restock of supplies if provided",
          "All floors vacuumed and mopped",
          "Bins emptied and relined throughout",
          "Internal glass and partitions cleaned",
        ]}
        pricing={serviceData?.tiers || []}
        trustBadges={[
          { icon: "checkCircle" as IconName, text: "Police-Checked" },
          { icon: "shield" as IconName, text: "Fully Insured" },
          { icon: "clock" as IconName, text: "After-Hours Available" },
          { icon: "clipboard" as IconName, text: "Job Checklist Included" },
        ]}
        suburbs={[
          "City of Sydney CBD", "North Sydney", "Crows Nest", "St Leonards",
          "Neutral Bay", "Pyrmont", "Surry Hills", "Darlinghurst",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
