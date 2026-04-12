import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FAQAccordion from "@/components/FAQAccordion";
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
      "Made in Wolls Cleaning Services is a premium, police-checked and fully insured cleaning company based in Wollstonecraft, servicing the Lower North Shore, Northern Beaches and City of Sydney. With 44+ Google reviews and a 100% satisfaction guarantee, we are trusted by families and professionals across Sydney.",
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
      "We service the Lower North Shore (Wollstonecraft, Crows Nest, Neutral Bay, Mosman, Cammeray, Kirribilli), Northern Beaches (Manly, Dee Why, Brookvale, Narrabeen, Mona Vale, Newport), City of Sydney and Inner City suburbs. Contact us if your suburb is not listed — we may still be able to help.",
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
  {
    question: "How do I book a clean?",
    answer:
      "You can book online through our website, call us directly on 0410 721 027, or email info@madeinwolls.com. We respond to all enquiries within 2 hours during business hours.",
  },
  {
    question: "Do you offer regular cleaning schedules?",
    answer:
      "Yes. We offer weekly, fortnightly and monthly regular cleaning services tailored to your home and schedule. Your regular cleaner will get to know your home and preferences over time.",
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
            Everything you need to know about Made in Wolls cleaning services.
            Can&apos;t find your answer? Call us on 0410 721 027.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock />
      <Footer />
    </>
  );
}
