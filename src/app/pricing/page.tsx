import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuoteStrip from "@/components/QuoteStrip";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing | Made in Wolls Cleaning Services Sydney",
  description:
    "Transparent, flat-rate pricing for all cleaning services. Regular cleaning from $140, spring cleaning from $280, bond cleaning from $320.",
};

const pricingCategories = [
  {
    service: "Regular Home Cleaning",
    icon: "🏠",
    href: "/services/regular-cleaning",
    tiers: [
      { name: "Essential", price: "$140", desc: "1–2 bedrooms" },
      { name: "Standard", price: "$210", desc: "3 bedrooms" },
      { name: "Premium", price: "$295", desc: "4+ bedrooms" },
    ],
  },
  {
    service: "Spring & Deep Cleaning",
    icon: "🌸",
    href: "/services/spring-cleaning",
    tiers: [
      { name: "Essential", price: "$280", desc: "1–2 bedrooms" },
      { name: "Standard", price: "$390", desc: "3 bedrooms" },
      { name: "Premium", price: "$520", desc: "4+ bedrooms" },
    ],
  },
  {
    service: "End of Lease & Bond Cleaning",
    icon: "🔑",
    href: "/services/end-of-lease-cleaning",
    tiers: [
      { name: "Studio / 1 Bed", price: "$320", desc: "" },
      { name: "2–3 Bedrooms", price: "$450", desc: "" },
      { name: "4+ Bedrooms", price: "From $600", desc: "Quote on inspection" },
    ],
  },
  {
    service: "Office & Commercial Cleaning",
    icon: "🏢",
    href: "/services/office-cleaning",
    tiers: [
      { name: "Small Office", price: "$150", desc: "Up to 10 desks" },
      { name: "Medium Office", price: "$250", desc: "11–25 desks" },
      { name: "Large Office", price: "Quote", desc: "25+ desks" },
    ],
  },
  {
    service: "Airbnb Cleaning",
    icon: "🏡",
    href: "/services/airbnb-cleaning",
    tiers: [
      { name: "Studio / 1 Bed", price: "$140", desc: "" },
      { name: "2–3 Bedrooms", price: "$210", desc: "" },
      { name: "4+ Bedrooms", price: "Quote", desc: "" },
    ],
  },
  {
    service: "Church Cleaning",
    icon: "⛪",
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
    icon: "👶",
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

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Pricing</span>
          </div>
          <h1 className={styles.heroTitle}>
            Transparent, Flat-Rate Pricing
          </h1>
          <p className={styles.heroSub}>
            No hidden fees. No hourly surprises. Our pricing is straightforward —
            you know exactly what you&apos;re paying before we arrive. All prices
            include equipment, eco-friendly products and GST.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          {pricingCategories.map((cat) => (
            <div key={cat.service} className={styles.category}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <Link href={cat.href} className={styles.catTitle}>
                  {cat.service}
                </Link>
              </div>
              <div className={styles.tierGrid}>
                {cat.tiers.map((tier) => (
                  <div key={tier.name} className={styles.tierCard}>
                    <div className={styles.tierName}>{tier.name}</div>
                    <div className={styles.tierPrice}>
                      {tier.price.startsWith("$") ? `From ${tier.price}` : tier.price}
                    </div>
                    {tier.desc && (
                      <div className={styles.tierDesc}>{tier.desc}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.note}>
            <div className={styles.noteIcon}>💡</div>
            <div>
              <div className={styles.noteTitle}>Need a custom quote?</div>
              <p className={styles.noteText}>
                Every home and workspace is different. If you need a tailored quote
                or have specific requirements, contact us for a same-day response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteStrip />
      <CTABlock />
      <Footer />
    </>
  );
}
