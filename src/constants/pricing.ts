import { IconName } from "@/components/Icon";

export interface PricingTier {
  name: string;
  price: string;
  desc?: string;
  features?: string[];
  popular?: boolean;
}

export interface PricingCategory {
  service: string;
  icon: IconName;
  href: string;
  tiers: PricingTier[];
}

export const PRICING_DATA: PricingCategory[] = [
  {
    service: "Regular Home Cleaning",
    icon: "home",
    href: "/services/regular-cleaning",
    tiers: [
      { 
        name: "Essential", 
        price: "$140", 
        desc: "1–2 bedrooms",
        features: ["Standard cleaning", "Kitchen & Bathrooms", "Living & Bedrooms", "Vacuum & Mop"]
      },
      { 
        name: "Standard", 
        price: "$210", 
        desc: "3 bedrooms",
        popular: true,
        features: ["Full house clean", "Deep kitchen sanitization", "All living areas", "Bins & Linen change"]
      },
      { 
        name: "Premium", 
        price: "$295", 
        desc: "4+ bedrooms",
        features: ["Large home specialist", "Extended kitchen/bath time", "Detailed dusting", "Priority scheduling"]
      },
    ],
  },
  {
    service: "Spring & Deep Cleaning",
    icon: "sparkles",
    href: "/services/spring-cleaning",
    tiers: [
      { name: "Essential", price: "$280", desc: "1–2 bedrooms" },
      { name: "Standard", price: "$390", desc: "3 bedrooms" },
      { name: "Premium", price: "$520", desc: "4+ bedrooms" },
    ],
  },
  {
    service: "End of Lease & Bond Cleaning",
    icon: "key",
    href: "/services/end-of-lease-cleaning",
    tiers: [
      { name: "Studio / 1 Bed", price: "$320", desc: "" },
      { name: "2–3 Bedrooms", price: "$450", desc: "" },
      { name: "4+ Bedrooms", price: "From $600", desc: "Quote on inspection" },
    ],
  },
  {
    service: "Office & Commercial Cleaning",
    icon: "building",
    href: "/services/office-cleaning",
    tiers: [
      { name: "Small Office", price: "$150", desc: "Up to 10 desks" },
      { name: "Medium Office", price: "$250", desc: "11–25 desks" },
      { name: "Large Office", price: "Quote", desc: "25+ desks" },
    ],
  },
  {
    service: "Airbnb Cleaning",
    icon: "house",
    href: "/services/airbnb-cleaning",
    tiers: [
      { name: "Studio / 1 Bed", price: "$140", desc: "" },
      { name: "2–3 Bedrooms", price: "$210", desc: "" },
      { name: "4+ Bedrooms", price: "Quote", desc: "" },
    ],
  },
  {
    service: "Church Cleaning",
    icon: "church",
    href: "/services/church-cleaning",
    tiers: [
      {
        name: "Custom Quote",
        price: "Contact Us",
        desc: "Based on size, frequency and scope",
      },
    ],
  },
  {
    service: "Childcare Cleaning",
    icon: "baby",
    href: "/services/childcare-cleaning",
    tiers: [
      {
        name: "Custom Quote",
        price: "Contact Us",
        desc: "Based on facility size and rooms",
      },
    ],
  },
];

export const ADD_ONS = [
  { item: "Inside Oven Clean", price: "$45", notes: "Pre-book required" },
  { item: "Inside Fridge Clean", price: "$35", notes: "Must be emptied by client" },
  { item: "Internal Window Clean", price: "$15 per window", notes: "Tracks & frames included" },
  { item: "External Window Clean", price: "$20 per window", notes: "Ground floor only" },
  { item: "Inside All Cupboards & Drawers", price: "$50", notes: "Per floor level" },
  { item: "Carpet Steam Cleaning", price: "POA", notes: "Quote on request" },
  { item: "Wall Spot Clean", price: "$25", notes: "Scuffs & marks only" },
  { item: "Ironing", price: "$30/hr", notes: "Pre-book required" },
  { item: "Laundry / Wash & Fold", price: "$30/load", notes: "Pre-book required" },
];
