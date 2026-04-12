import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import QuoteStrip from "@/components/QuoteStrip";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Cleaning Services Sydney | Made in Wolls",
  description:
    "Premium cleaning services across Sydney. Regular, spring, end of lease, office, Airbnb, church and childcare cleaning. Police-checked, fully insured team.",
};

const services = [
  {
    icon: "🏠",
    name: "Regular Home Cleaning",
    price: "From $140",
    desc: "Weekly, fortnightly or monthly — tailored to your schedule",
    href: "/services/regular-cleaning",
  },
  {
    icon: "🌸",
    name: "Spring & Deep Cleaning",
    price: "From $280",
    desc: "Top to bottom, every surface, every corner",
    href: "/services/spring-cleaning",
  },
  {
    icon: "🔑",
    name: "End of Lease & Bond Cleaning",
    price: "From $320",
    desc: "Inspection-ready with checklist, sign-off and photos",
    href: "/services/end-of-lease-cleaning",
    highlight: true,
  },
  {
    icon: "🏢",
    name: "Office & Commercial Cleaning",
    price: "From $150",
    desc: "After-hours available, zero disruption to your business",
    href: "/services/office-cleaning",
  },
  {
    icon: "⛪",
    name: "Church & Religious Facility Cleaning",
    price: "Quote required",
    desc: "Respectful, reliable and flexible around service times",
    href: "/services/church-cleaning",
  },
  {
    icon: "👶",
    name: "Childcare & Early Learning Cleaning",
    price: "Quote required",
    desc: "Child-safe, non-toxic, compliance-standard products",
    href: "/services/childcare-cleaning",
  },
  {
    icon: "🏡",
    name: "Airbnb Cleaning",
    price: "From $140",
    desc: "Fast turnaround, guest-ready between every booking",
    href: "/services/airbnb-cleaning",
  },
  {
    icon: "🧹",
    name: "Carpet Cleaning",
    price: "Quote required",
    desc: "Steam and dry cleaning available as standalone or add-on",
    href: "/services",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Sydney&apos;s Premium Cleaning Services
          </h1>
          <p className={styles.heroSub}>
            From weekly home maintenance to full bond cleans and commercial spaces,
            Made in Wolls delivers a consistently exceptional standard of cleaning
            across Sydney. Every service is backed by our detailed job checklist,
            satisfaction guarantee and police-checked team.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.serviceGrid}>
            {services.map((svc) => (
              <ServiceCard key={svc.name} {...svc} />
            ))}
          </div>
        </div>
      </section>

      <QuoteStrip />
      <CTABlock />
      <Footer />
    </>
  );
}
