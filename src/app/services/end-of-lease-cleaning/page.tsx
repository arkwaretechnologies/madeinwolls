import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageLayout from "@/components/ServicePageLayout";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import { PRICING_DATA } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "End of Lease Cleaning Sydney | Bond Clean | Made in Wolls",
  description:
    "Professional end of lease and bond cleaning across Sydney. Inspection-ready standard with checklist, sign-off and photos. From $320.",
};

export default function EndOfLeaseCleaningPage() {
  const serviceData = PRICING_DATA.find(p => p.service === "End of Lease & Bond Cleaning");
  
  return (
    <>
      <Navbar />
      <ServicePageLayout
        title="End of Lease Cleaning Sydney — Bond Clean Standard, Inspection Ready"
        intro="Moving out is stressful enough without worrying about your bond. Made in Wolls specialises in end of lease and bond cleaning across Sydney — cleaning to full rental inspection standard so you can hand back the keys with complete confidence. We work directly with tenants, landlords and property managers across the Lower North Shore, Northern Beaches and City of Sydney. Every bond clean includes a detailed job checklist, before and after photos on request, and a signed sign-off document."
        heroImage={{
          src: "/MadeinWolls-images/MADEINWOLLS-46.JPG",
          alt: "End of lease and bond cleaning service",
        }}
        sideImagesLayout="compare"
        sideImages={[
          { src: "/Services-images/End%20of%20Lease/Before.jpg", alt: "Example — before bond clean" },
          { src: "/Services-images/End%20of%20Lease/After.jpg", alt: "Example — after bond clean, inspection ready" },
        ]}
        showPostPricingFooter={false}
        inclusions={[
          "Full kitchen deep clean — inside oven, inside fridge, inside all cupboards and drawers",
          "Bathrooms — tiles, grout, shower screens, toilet, vanity, exhaust fans",
          "All windows inside — glass, sills, tracks and frames",
          "Inside all wardrobes — shelves, rails and drawers",
          "Walls spot cleaned — all marks and scuffs addressed",
          "All floors vacuumed and mopped throughout",
          "Carpets vacuumed — steam cleaning available as an add-on",
          "Detailed checklist completed and signed off",
          "Before and after photos available on request",
        ]}
        pricing={serviceData?.tiers || []}
        suburbs={[
          "Wollstonecraft", "Crows Nest", "Neutral Bay", "Mosman", "Cammeray",
          "Kirribilli", "Manly", "Dee Why", "Brookvale", "Collaroy",
          "Narrabeen", "Mona Vale", "Newport", "North Sydney", "St Leonards",
        ]}
      />
      <CTABlock />
      <Footer />
    </>
  );
}
