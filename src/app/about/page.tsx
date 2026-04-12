import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Made in Wolls — Premium Cleaning Services, Sydney",
  description:
    "Learn about Made in Wolls Cleaning Services. Founded by Maychelle Anlap, we are a premium, locally owned cleaning company based in Wollstonecraft, Sydney.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>About</span>
          </div>
          <h1 className={styles.heroTitle}>
            About Made in Wolls — Premium Cleaning Services, Sydney
          </h1>
          <p className={styles.heroSub}>
            A locally owned cleaning business built on trust, reliability and a
            genuine commitment to every home we care for.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.label}>Our Story</div>
          <h2 className={styles.heading}>How It All Started</h2>
          <div className={styles.goldRule} />
          <p className={styles.bodyText}>
            Made in Wolls Cleaning Services was founded on a simple but powerful
            belief — that a professionally cleaned home changes how you feel about
            the space you live in. We built this business to deliver that feeling,
            consistently and reliably, to every home and workplace we care for.
          </p>
          <p className={styles.bodyText}>
            Based in Wollstonecraft on Sydney&apos;s Lower North Shore, we service
            families, professionals and businesses across the Northern Beaches,
            North Shore and City of Sydney.
          </p>

          <div className={styles.divider} />

          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.bodyText}>
            Made in Wolls was founded by Maychelle Anlap, a Sydney-based
            entrepreneur who saw a clear gap in the market — clients wanted a
            cleaning service that was genuinely reliable, genuinely professional
            and genuinely cared about the result.
          </p>
          <p className={styles.bodyText}>
            What started as a vision has grown into a trusted team of experienced,
            police-checked cleaners servicing some of Sydney&apos;s most prestigious
            homes and offices. Every job we take on is approached with the same
            attention to detail and commitment to quality that built our reputation.
          </p>
          <p className={styles.bodyText}>
            We operate alongside co-owner Bruno, whose role focuses on operations
            and client coordination — ensuring every booking runs smoothly from
            confirmation to completion.
          </p>
          <p className={styles.bodyText}>
            We are proud of what we have built, and we are proud of the team behind
            it.
          </p>

          <div className={styles.divider} />

          <div className={styles.label}>Why Choose Us</div>
          <h2 className={styles.heading}>Why Choose Made in Wolls</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>✅</div>
              <h3 className={styles.whyTitle}>Police-Checked &amp; Fully Insured</h3>
              <p className={styles.whyText}>
                Every member of our team undergoes a thorough background check
                before their first job. We are fully insured for your peace of mind.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📋</div>
              <h3 className={styles.whyTitle}>Detailed Job Checklists</h3>
              <p className={styles.whyText}>
                Every clean follows a structured checklist specific to the service
                type. Nothing is missed. You receive a signed checklist on completion.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💯</div>
              <h3 className={styles.whyTitle}>100% Satisfaction Guarantee</h3>
              <p className={styles.whyText}>
                If something is not right, contact us within 24 hours and we will
                return to make it right — at no extra cost.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌿</div>
              <h3 className={styles.whyTitle}>Eco-Friendly Products</h3>
              <p className={styles.whyText}>
                We use high-quality, environmentally conscious cleaning products
                that are safe for your family, pets and home.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⏰</div>
              <h3 className={styles.whyTitle}>Consistent &amp; Reliable</h3>
              <p className={styles.whyText}>
                We work to your schedule, communicate proactively and show up
                prepared — every single time.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⭐</div>
              <h3 className={styles.whyTitle}>Trusted by 44+ Sydney Clients</h3>
              <p className={styles.whyText}>
                Our clients recommend us because we deliver. Read our Google reviews
                to see what they say.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <CTABlock />
      <Footer />
    </>
  );
}
