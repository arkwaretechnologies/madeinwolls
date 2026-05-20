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
        price: "$154", 
        desc: "1–2 bedrooms",
        features: ["Standard cleaning", "Kitchen & Bathrooms", "Living & Bedrooms", "Vacuum & Mop"]
      },
      { 
        name: "Standard", 
        price: "$231", 
        desc: "3 bedrooms",
        popular: true,
        features: ["Full house clean", "Deep kitchen sanitization", "All living areas", "Bins & Linen change"]
      },
      { 
        name: "Premium", 
        price: "$325", 
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
      { name: "Essential", price: "$310", desc: "1–2 bedrooms" },
      { name: "Standard", price: "$429", desc: "3 bedrooms" },
      { name: "Premium", price: "$572", desc: "4+ bedrooms" },
    ],
  },
  {
    service: "End of Lease & Bond Cleaning",
    icon: "key",
    href: "/services/end-of-lease-cleaning",
    tiers: [
      { name: "Studio / 1 Bed", price: "$369", desc: "" },
      { name: "2–3 Bedrooms", price: "$539", desc: "" },
      { name: "4+ Bedrooms", price: "$649", desc: "Quote on inspection" },
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
      { name: "Studio / 1 Bed", price: "$154", desc: "" },
      { name: "2–3 Bedrooms", price: "$231", desc: "" },
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
  { item: "Inside Oven Clean", price: "$99", notes: "Pre-book required" },
  { item: "Inside Fridge Clean", price: "$70", notes: "Must be emptied by client" },
  { item: "Inside All Cupboards & Drawers", price: "$65", notes: "Per floor level" },
  { item: "Wall Spot Clean", price: "$30", notes: "Scuffs & marks only" },
  { item: "Carpet Steam Cleaning", price: "$60 per room", notes: "" },
  { item: "Internal Windows (1–3 bed)", price: "$60", notes: "1 hr labour" },
  { item: "Internal Windows (4–6 bed)", price: "$120", notes: "2 hrs labour" },
  { item: "External Windows (1–3 bed)", price: "$60", notes: "1 hr labour" },
  { item: "External Windows (4–6 bed)", price: "$120", notes: "2 hrs labour" },
  { item: "Ironing", price: "$30/hr", notes: "Pre-book required" },
  { item: "Laundry / Wash & Fold", price: "$30/load", notes: "Pre-book required" },
];
