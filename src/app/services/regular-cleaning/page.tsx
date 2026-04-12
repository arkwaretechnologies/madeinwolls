import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Regular Home Cleaning Sydney | Made in Wolls",
  description:
    "Professional regular home cleaning services across Sydney. Weekly, fortnightly or monthly. Police-checked, fully insured team. From $140.",
};

export default function RegularCleaningPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Regular Home Cleaning Sydney — Reliable, Thorough & Trusted"
        intro="A clean home should never be something you have to worry about. Made in Wolls provides professional regular cleaning services across Sydney's Lower North Shore, Northern Beaches and City of Sydney — delivering a consistently exceptional standard on every visit. Our regular cleaning service is tailored to your home and schedule. Whether you need a weekly, fortnightly or monthly clean, we work around you — bringing all equipment and eco-friendly products every time."
        inclusions={[
          "Full kitchen clean — benchtops, stovetop, appliances, sink and floor",
          "All bathrooms — toilet, shower, bath, sink, mirrors and tiles",
          "Bedrooms — dusting, vacuuming and linen change (if provided)",
          "Living and dining areas — dusting, vacuuming and mopping",
          "Laundry — wipe down and mop",
          "All floors vacuumed and mopped throughout",
          "Bins emptied and relined",
        ]}
        pricing={[
          { name: "Essential", price: "From $140", desc: "1 to 2 bedrooms" },
          { name: "Standard", price: "From $210", desc: "3 bedrooms" },
          { name: "Premium", price: "From $295", desc: "4 or more bedrooms" },
        ]}
        trustBadges={[
          { icon: "✅", text: "Police-Checked" },
          { icon: "🛡", text: "Fully Insured" },
          { icon: "⭐", text: "44 Google Reviews" },
          { icon: "📋", text: "Job Checklist Included" },
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
