import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spring Cleaning Sydney | Deep Clean | Made in Wolls",
  description:
    "Comprehensive spring and deep cleaning across Sydney. Top to bottom, every surface, every corner. Police-checked team. From $280.",
};

export default function SpringCleaningPage() {
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="Spring & Deep Cleaning Sydney — Top to Bottom, Spotless Every Time"
        intro="Sometimes a regular clean is not enough. Made in Wolls spring and deep cleaning service is a comprehensive, top-to-bottom clean designed for homes that need a thorough reset — whether after a long winter, before a special occasion, or simply when life gets busy. Our deep clean covers every surface, every corner and every appliance — the areas that standard cleaning often misses. All equipment and eco-friendly products included."
        inclusions={[
          "Everything included in a regular clean — plus:",
          "Inside oven — racks, walls, door glass and seals",
          "Inside fridge — shelves, drawers and door seals",
          "Inside all cupboards and drawers throughout",
          "Ceiling fans, air vents and exhaust fans",
          "All window tracks, frames and sills",
          "Behind and under all appliances",
          "Tile grout scrubbed in bathrooms",
          "Spot clean all walls, doors and door frames",
        ]}
        pricing={[
          { name: "Essential", price: "From $280", desc: "1 to 2 bedrooms" },
          { name: "Standard", price: "From $390", desc: "3 bedrooms" },
          { name: "Premium", price: "From $520", desc: "4 or more bedrooms" },
        ]}
        trustBadges={[
          { icon: "✅", text: "Police-Checked" },
          { icon: "🛡", text: "Fully Insured" },
          { icon: "🌿", text: "Eco-Friendly Products" },
          { icon: "📋", text: "Job Checklist Included" },
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
