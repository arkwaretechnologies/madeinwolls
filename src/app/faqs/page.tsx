import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ModernFAQ from "@/components/ModernFAQ";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./faqs.module.css";

export const metadata: Metadata = {
  title: "FAQs | Made in Wolls Cleaning Services Sydney",
  description:
    "Frequently asked questions about Made in Wolls cleaning services. Pricing, areas serviced, police checks, end of lease cleaning, Airbnb cleaning and more.",
};

const faqs = [
  {
    question: "What is the best house cleaning service in Sydney?",
    answer:
      "Made in Wolls Cleaning Services is a premium, police-checked and fully insured cleaning company based in Wollstonecraft, servicing the Lower North Shore, Northern Beaches and City of Sydney. Trusted by 100+ families and backed by a 100% satisfaction guarantee, we are trusted by families and professionals across Sydney.",
  },
  {
    question: "How much does a house clean cost in Sydney?",
    answer:
      "Our flat-rate regular cleans start from $140 for a 1 to 2 bedroom home, $210 for 3 bedrooms and $295 for 4 or more bedrooms. End of lease bond cleans start from $320. Visit our pricing page for a full breakdown or book directly for an instant quote.",
  },
  {
    question: "Do you offer end of lease cleaning on the North Shore?",
    answer:
      "Yes. We specialise in end of lease and bond cleans across the Lower North Shore including Wollstonecraft, Crows Nest, Neutral Bay, Mosman, Cammeray and surrounding suburbs. Every bond clean is completed to rental inspection standard.",
  },
  {
    question: "Are your cleaners police checked?",
    answer:
      "Yes. Every Made in Wolls team member undergoes a thorough police check before commencing work. We are also fully insured for your complete peace of mind.",
  },
  {
    question: "Do you clean Airbnb properties?",
    answer:
      "Yes. We provide fast, professional Airbnb turnaround cleaning services across Sydney's Lower North Shore and Northern Beaches. We work within your checkout and check-in window and provide before and after photos as standard.",
  },
  {
    question: "What areas do you service in Sydney?",
    answer:
      "We service the Lower North Shore (Wollstonecraft, Crows Nest, Neutral Bay, Mosman, Cammeray, Kirribilli), Northern Beaches (Bondi, Double Bay, Paddington, Woollahra, Coogee, Randwick), City of Sydney and Inner City suburbs. Contact us if your suburb is not listed — we may still be able to help.",
  },
  {
    question: "How can I find professional cleaners near me in Sydney?",
    answer:
      "Made in Wolls provides professional cleaning services near you across the North Shore and Northern Beaches. Our team is locally based, ensuring we can provide reliable, high-quality house cleaners Sydney residents trust for their homes and offices.",
  },
  {
    question: "Do you provide your own cleaning products and equipment?",
    answer:
      "Yes. We bring all equipment and eco-friendly, high-quality cleaning products to every job. If you have preferred products you would like us to use, we are happy to accommodate that as well.",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer:
      "If something is not right, contact us within 24 hours and we will return to make it right — at no extra cost. We are committed to delivering exceptional results on every clean.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>FAQs</span>
          </div>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSub}>
            Looking for the <strong>best house cleaning service in Sydney</strong>? 
            Find answers to common questions about <strong>house cleaning cost Sydney</strong>, 
            <strong>bond cleaning North Shore</strong>, and how we deliver the premium results 
            <strong>house cleaners Sydney</strong> families trust.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <ModernFAQ items={faqs} />
        </div>
      </section>

      <CTABlock />
      <Footer />
    </>
  );
}
