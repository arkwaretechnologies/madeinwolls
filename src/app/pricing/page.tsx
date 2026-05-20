import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuoteStrip from "@/components/QuoteStrip";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import FadeIn from "@/components/FadeIn";
import { PRICING_DATA, ADD_ONS } from "@/constants/pricing";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing | Made in Wolls Cleaning Services Sydney",
  description:
    "Transparent, flat-rate pricing for all cleaning services. Regular cleaning from $154, spring cleaning from $310, bond cleaning from $369.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <FadeIn variant="fade">
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <span>Pricing</span>
            </div>
          </FadeIn>
          <FadeIn variant="up" delay={0.1}>
            <h1 className={styles.heroTitle}>
              Transparent, <br />Flat-Rate Pricing
            </h1>
          </FadeIn>
          <FadeIn variant="up" delay={0.2}>
            <p className={styles.heroSub}>
              No hidden fees. No hourly surprises. Our pricing is straightforward —
              you know exactly what you&apos;re paying before we arrive. All prices
              include equipment, eco-friendly products and GST.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          {PRICING_DATA.map((cat, catIdx) => (
            <div 
              key={cat.service} 
              className={styles.category}
              data-tiers={cat.tiers.length}
            >
              <FadeIn variant="up" delay={0.1 * catIdx}>
                <div className={styles.catHeader}>
                  <Link href={cat.href} className={styles.catTitle}>
                    {cat.service}
                  </Link>
                </div>
              </FadeIn>
              
              <div className={styles.tierGrid}>
                {cat.tiers.map((tier, tierIdx) => (
                  <FadeIn 
                    key={tier.name} 
                    variant="up" 
                    delay={0.1 * (catIdx + 1) + (0.05 * tierIdx)}
                  >
                    <div className={`${styles.tierCard} ${tier.popular ? styles.popularTier : ""}`}>
                      {tier.popular && (
                        <div className={styles.popularBadge}>Most Popular</div>
                      )}
                      <div className={styles.tierName}>{tier.name}</div>
                      <div className={styles.tierPrice}>
                        {tier.price.startsWith("$") && (
                          <span className={styles.tierPricePrefix}>From</span>
                        )}
                        {tier.price}
                      </div>
                      {tier.desc && (
                        <div className={styles.tierDesc}>{tier.desc}</div>
                      )}
                      
                      {tier.features && (
                        <div className={styles.featureList}>
                          {tier.features.map((feature, fIdx) => (
                            <div key={fIdx} className={styles.featureItem}>
                              <span className={styles.checkIcon}>
                                <Icon name="checkCircle" size={14} />
                              </span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}

          <section className={styles.addOnSection}>
            <FadeIn variant="up">
              <h2 className={styles.addOnTitle}>Add-On Extras</h2>
              <div className={styles.addOnTableWrapper}>
                <table className={styles.addOnTable}>
                  <thead>
                    <tr>
                      <th>Add-On</th>
                      <th>Price (GST Incl.)</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADD_ONS.map((addon, i) => (
                      <tr key={i}>
                        <td className={styles.addOnItem}>{addon.item}</td>
                        <td className={styles.addOnPrice}>{addon.price}</td>
                        <td className={styles.addOnNotes}>{addon.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </section>

          <FadeIn variant="up">
            <div className={styles.note}>
              <div className={styles.noteIcon}>
                <Icon name="lightbulb" size={32} />
              </div>
              <div>
                <div className={styles.noteTitle}>Need a custom quote?</div>
                <p className={styles.noteText}>
                  Every home and workspace is different. If you need a tailored quote
                  or have specific requirements, contact us for a same-day response.
                  We offer site inspections for larger commercial spaces.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteStrip />
      <CTABlock />
      <Footer />
    </>
  );
}
