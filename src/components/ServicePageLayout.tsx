import Link from "next/link";
import styles from "./ServicePageLayout.module.css";

interface PricingTier {
  name: string;
  price: string;
  desc?: string;
}

interface ServicePageLayoutProps {
  title: string;
  intro: string;
  inclusions: string[];
  pricing: PricingTier[];
  trustBadges: { icon: string; text: string }[];
  suburbs: string[];
  whyChoose?: { title: string; items: string[] };
}

export default function ServicePageLayout({
  title,
  intro,
  inclusions,
  pricing,
  trustBadges,
  suburbs,
  whyChoose,
}: ServicePageLayoutProps) {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
            <span>{title.split("—")[0].trim()}</span>
          </div>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSub}>{intro}</p>
          <Link href="/contact" className={styles.heroBtn}>
            Book This Service →
          </Link>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.sectionLabel}>What&apos;s Included</div>
          <h2 className={styles.sectionHeading}>Everything in Your Clean</h2>
          <div className={styles.includesList}>
            {inclusions.map((item, i) => (
              <div key={i} className={styles.includeItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {whyChoose && (
            <>
              <div className={styles.divider} />
              <div className={styles.sectionLabel}>{whyChoose.title}</div>
              <div className={styles.includesList}>
                {whyChoose.items.map((item, i) => (
                  <div key={i} className={styles.includeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={styles.divider} />
          <div className={styles.sectionLabel}>Pricing</div>
          <h2 className={styles.sectionHeading}>Transparent, Flat-Rate Pricing</h2>
          <div className={styles.pricingGrid}>
            {pricing.map((tier) => (
              <div key={tier.name} className={styles.pricingCard}>
                <div className={styles.pricingName}>{tier.name}</div>
                <div className={styles.pricingPrice}>{tier.price}</div>
                {tier.desc && (
                  <div className={styles.pricingDesc}>{tier.desc}</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.trustLine}>
            {trustBadges.map((badge) => (
              <div key={badge.text} className={styles.trustBadge}>
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/contact" className={styles.heroBtn}>
              Book This Service →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.suburbsSection}>
        <div className={styles.suburbsInner}>
          <div className={styles.sectionLabel}>Areas We Service</div>
          <h2 className={styles.sectionHeading}>Suburbs We Cover</h2>
          <div className={styles.suburbChips}>
            {suburbs.map((suburb) => (
              <span key={suburb} className={styles.suburbChip}>
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
