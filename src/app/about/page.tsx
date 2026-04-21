import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
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
      <div className={styles.aboutBanner}>
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <span>About</span>
            </div>
            <h1 className={styles.heroTitle}>
              About Made in Wolls — Premium Cleaning Services, Sydney
            </h1>
            <p className={styles.heroSub}>
              Made in Wolls Cleaning Services was founded on a simple but powerful
              belief — that a professionally cleaned home changes how you feel about
              the space you live in. We built this business to deliver that feeling,
              consistently and reliably, to every home and workplace we care for.
            </p>
            <p className={styles.heroSub} style={{ marginTop: "16px", opacity: 0.8 }}>
              Based in Wollstonecraft on Sydney&apos;s Lower North Shore, we service
              families, professionals and businesses across the Northern Beaches,
              North Shore and City of Sydney.
            </p>
          </div>
        </section>

        <TrustBar onBanner />
      </div>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.label}>Our Story</div>
          <h2 className={styles.heading}>How It All Started</h2>
          <div className={styles.secondaryRule} />
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

          <figure className={styles.featureFigure}>
            <Image
              src="/images/Untitled-design-30.png"
              alt="Made in Wolls — premium cleaning services, Sydney"
              width={384}
              height={384}
              className={styles.featureImage}
              sizes="(max-width: 800px) 100vw, 800px"
              priority
            />
          </figure>

          <div className={styles.divider} />

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
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.label}>Why Choose Us</div>
          <h2 className={styles.heading}>Why Choose Made in Wolls</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="checkCircle" size={32} /></div>
              <h3 className={styles.whyTitle}>Police-Checked &amp; Fully Insured</h3>
              <p className={styles.whyText}>
                Every member of our team undergoes a thorough background check
                before their first job. We are fully insured for your peace of mind.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="clipboard" size={32} /></div>
              <h3 className={styles.whyTitle}>Detailed Job Checklists</h3>
              <p className={styles.whyText}>
                Every clean follows a structured checklist specific to the service
                type. Nothing is missed. You receive a signed checklist on completion.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="award" size={32} /></div>
              <h3 className={styles.whyTitle}>100% Satisfaction Guarantee</h3>
              <p className={styles.whyText}>
                If something is not right, contact us within 24 hours and we will
                return to make it right — at no extra cost.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="leaf" size={32} /></div>
              <h3 className={styles.whyTitle}>Eco-Friendly Products</h3>
              <p className={styles.whyText}>
                We use high-quality, environmentally conscious cleaning products
                that are safe for your family, pets and home.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="clock" size={32} /></div>
              <h3 className={styles.whyTitle}>Consistent &amp; Reliable</h3>
              <p className={styles.whyText}>
                We work to your schedule, communicate proactively and show up
                prepared — every single time.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><Icon name="star" size={32} /></div>
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
