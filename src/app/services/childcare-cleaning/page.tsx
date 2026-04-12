import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Childcare Cleaning Sydney | Early Learning Centre Cleaning | Made in Wolls",
  description:
    "Professional childcare and early learning centre cleaning across Sydney. Child-safe, non-toxic products. Police-checked and Working with Children checked staff.",
};

export default function ChildcareCleaningPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Childcare & Early Learning Centre Cleaning Sydney — Safe, Hygienic & Compliant"
        intro="The cleanliness of a childcare or early learning centre is not just about appearances — it directly impacts the health and safety of the children and staff in your care. Made in Wolls provides professional, thorough and hygienic cleaning services for childcare centres, early learning facilities and kindergartens across Sydney's Lower North Shore and Northern Beaches. Our team uses child-safe, non-toxic, hospital-grade disinfectants to ensure every surface is not just clean but genuinely safe. We understand Australian childcare compliance standards and clean to a level that supports your regulatory obligations."
        inclusions={[
          "All classrooms and learning areas — sanitise surfaces, tables, chairs and equipment",
          "Play areas and toys — disinfected with child-safe, non-toxic products",
          "Bathrooms and nappy change areas — full sanitisation to compliance standard",
          "Kitchen and food preparation areas — full clean and sanitise",
          "Sleep rooms — cots, surfaces and floors sanitised",
          "Entry, reception and hallways",
          "Outdoor areas sweep-down where applicable",
          "All floors vacuumed and mopped with child-safe products",
          "Bins emptied and relined with hygienic disposal",
          "Detailed job checklist completed and signed off on every visit",
        ]}
        pricing={[
          {
            name: "Childcare & Early Learning",
            price: "Quote required",
            desc: "Based on facility size, number of rooms and frequency",
          },
        ]}
        trustBadges={[
          { icon: "👶", text: "Child-Safe Products" },
          { icon: "✅", text: "Police & WWC Checked" },
          { icon: "📋", text: "Compliance Standard" },
          { icon: "🛡", text: "Fully Insured" },
        ]}
        whyChoose={{
          title: "Why Childcare Centres Choose Made in Wolls",
          items: [
            "Child-safe, non-toxic and eco-friendly cleaning products used throughout",
            "Police-checked and Working with Children checked staff",
            "Cleaning to Australian childcare compliance and hygiene standards",
            "Flexible scheduling — after hours, early morning or weekends",
            "Fully insured with detailed checklist sign-off every visit",
            "Consistent standard — same team, same process, every visit",
          ],
        }}
        suburbs={[
          "Wollstonecraft", "Crows Nest", "Neutral Bay", "Mosman", "Cammeray",
          "North Sydney", "Manly", "Dee Why", "Brookvale", "Frenchs Forest",
          "Collaroy", "Narrabeen", "Mona Vale", "Newport",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
