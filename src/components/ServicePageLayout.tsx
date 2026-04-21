import Icon, { type IconName } from "./Icon";
import Link from "next/link";
import BookOpenButton from "./BookOpenButton";
import FadeIn from "./FadeIn";
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
  trustBadges: { icon: IconName; text: string }[];
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
          <FadeIn variant="fade">
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
              <span>{title.split("—")[0].trim()}</span>
            </div>
          </FadeIn>
          <FadeIn variant="up" delay={0.1}>
            <h1 className={styles.heroTitle}>{title}</h1>
          </FadeIn>
          <FadeIn variant="up" delay={0.25}>
            <p className={styles.heroSub}>{intro}</p>
          </FadeIn>
          <FadeIn variant="up" delay={0.4}>
            <BookOpenButton className={styles.heroBtn}>
              Book This Service →
            </BookOpenButton>
          </FadeIn>
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
            {pricing.map((tier, i) => (
              <FadeIn key={tier.name} variant="up" staggerIndex={i} staggerDelay={0.08}>
                <div className={styles.pricingCard}>
                  <div className={styles.pricingName}>{tier.name}</div>
                  <div className={styles.pricingPrice}>
                    {tier.price.includes("$") && !tier.price.startsWith("From") && (
                      <span className={styles.pricingPricePrefix}>From </span>
                    )}
                    {tier.price}
                  </div>
                  {tier.desc && (
                    <div className={styles.pricingDesc}>{tier.desc}</div>
                  )}
                  <div className={styles.pricingCheckmark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Professional Service</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className={styles.trustLine}>
            {trustBadges.map((badge) => (
              <div key={badge.text} className={styles.trustBadge}>
                <span className={styles.trustIcon}>
                  <Icon name={badge.icon} size={18} />
                </span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <BookOpenButton className={styles.heroBtn}>
              Book This Service →
            </BookOpenButton>
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
