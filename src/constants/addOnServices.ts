import type { IconName } from "@/components/Icon";

/** Optional extras available when booking — shown on the All Services page */
export const ADD_ON_SERVICES: {
  icon: IconName;
  title: string;
  price: string;
}[] = [
  {
    icon: "sparkles",
    title: "Toilet mould treatment",
    price: "Quoted when booking",
  },
  {
    icon: "clipboard",
    title: "Oven deep clean",
    price: "Quoted when booking",
  },
  {
    icon: "house",
    title: "Fridge deep clean",
    price: "Quoted when booking",
  },
  {
    icon: "broom",
    title: "Carpet steam clean (per room or area)",
    price: "$40 / room",
  },
  {
    icon: "minus",
    title: "Wet wipes roller / plantation shutters blinds",
    price: "$10 / blind",
  },
  {
    icon: "minus",
    title: "Wet wipes Venetian / vertical / timber blinds (per blind)",
    price: "$20 / blind",
  },
  {
    icon: "eye",
    title: "Exterior windows (levelled house only)",
    price: "$60",
  },
  {
    icon: "building",
    title: "Garage sweep & tidy",
    price: "$30",
  },
  {
    icon: "mapPin",
    title: "Small balcony / patio / deck (up to 12 m²)",
    price: "$30",
  },
  {
    icon: "mapPin",
    title: "Large balcony / patio / deck (above 12 m²)",
    price: "$60",
  },
  {
    icon: "house",
    title: "Inside fridge",
    price: "$60",
  },
  {
    icon: "checkCircle",
    title: "Spot clean walls — free 15 minutes",
    price: "$0",
  },
  {
    icon: "checkCircle",
    title: "Spot clean walls — 30 minutes",
    price: "$30",
  },
  {
    icon: "checkCircle",
    title: "Spot clean walls — 1 hour",
    price: "$60",
  },
  {
    icon: "checkCircle",
    title: "Spot clean walls — 2 hours",
    price: "$120",
  },
  {
    icon: "checkCircle",
    title: "Spot clean walls — 3 hours",
    price: "$180",
  },
  {
    icon: "shield",
    title: "End of lease flea treatment (pest control)",
    price: "$140",
  },
  {
    icon: "key",
    title: "Keys pickup or drop off (1–10 km)",
    price: "$30",
  },
  {
    icon: "key",
    title: "Keys pickup or drop off (11–20 km)",
    price: "$60",
  },
];
