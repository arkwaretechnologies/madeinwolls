import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Book | Made in Wolls Cleaning Services Sydney",
  description:
    "Book a clean or get a same-day quote. Call 0410 721 027 or email info@madeinwolls.com. Made in Wolls — We Clean, We Commit.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Contact</span>
          </div>
          <h1 className={styles.heroTitle}>Book a Clean or Get a Quote</h1>
          <p className={styles.heroSub}>
            Ready to experience the Made in Wolls difference? Get in touch today.
            We respond to all enquiries within 2 hours during business hours.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <div className={styles.label}>Get in Touch</div>
              <h2 className={styles.heading}>Contact Details</h2>

              <div className={styles.contactCard}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <a href="tel:0410721027" className={styles.contactValue}>
                      0410 721 027
                    </a>
                    <div className={styles.contactNote}>Mon–Sat · 8am–6pm</div>
                  </div>
                </div>

                <div className={styles.contactDivider} />

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a
                      href="mailto:info@madeinwolls.com"
                      className={styles.contactValue}
                    >
                      info@madeinwolls.com
                    </a>
                    <div className={styles.contactNote}>
                      We respond within 2 hours
                    </div>
                  </div>
                </div>

                <div className={styles.contactDivider} />

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <div>
                    <div className={styles.contactLabel}>Address</div>
                    <div className={styles.contactValue}>
                      8/18 Boronia St
                      <br />
                      Wollstonecraft NSW 2065
                    </div>
                  </div>
                </div>

                <div className={styles.contactDivider} />

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🌐</span>
                  <div>
                    <div className={styles.contactLabel}>Website</div>
                    <a
                      href="https://www.madeinwolls.com"
                      className={styles.contactValue}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.madeinwolls.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <div className={styles.label}>Quick Enquiry</div>
              <h2 className={styles.heading}>Send Us a Message</h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
