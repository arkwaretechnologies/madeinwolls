import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Office Cleaning Sydney | Commercial Cleaning | Made in Wolls",
  description:
    "Professional office and commercial cleaning across Sydney. After-hours available, zero disruption. Police-checked, fully insured team. From $150.",
};

export default function OfficeCleaningPage() {
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
        pricing={[
          { name: "Small Office", price: "From $150", desc: "Up to 10 desks" },
          { name: "Medium Office", price: "From $250", desc: "11 to 25 desks" },
          { name: "Large Office", price: "Quote on request", desc: "25 or more desks" },
        ]}
        trustBadges={[
          { icon: "✅", text: "Police-Checked" },
          { icon: "🛡", text: "Fully Insured" },
          { icon: "⏰", text: "After-Hours Available" },
          { icon: "📋", text: "Job Checklist Included" },
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
