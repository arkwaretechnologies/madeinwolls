import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./awards.module.css";

export const metadata: Metadata = {
  title: "Awards | Made in Wolls Cleaning Services Sydney",
  description:
    "Awards and recognitions for Made in Wolls Cleaning Services.",
};

type Award = {
  id: string;
  title: string;
  subtitle?: string;
  year?: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
};

const awards: Award[] = [
  {
    id: "miw-awards",
    title: "Awards & Recognition",
    subtitle: "Made in Wolls",
    year: "2026",
    imageSrc: "/images/MIW-AWARDS.png",
    imageAlt: "Made in Wolls awards and recognition",
    description:
      "We’re proud to be recognised for the standard of our work and the care we bring to every home and workplace.",
  },
];

export default function AwardsPage() {
  return (
    <>
      <Navbar />

      <div className={styles.banner}>
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/about">About</Link> /{" "}
              <span>Awards</span>
            </div>
            <h1 className={styles.heroTitle}>Awards</h1>
            <p className={styles.heroSub}>
              A growing list of recognitions we&apos;ve received over time.
            </p>
          </div>
        </section>
      </div>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.label}>Recognition</div>
          <h2 className={styles.heading}>What We&apos;re Proud Of</h2>
          <div className={styles.secondaryRule} />

          <div className={styles.grid}>
            {awards.map((award) => (
              <article key={award.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardTitleWrap}>
                    <h3 className={styles.cardTitle}>{award.title}</h3>
                    {(award.subtitle || award.year) && (
                      <div className={styles.cardMeta}>
                        {award.subtitle ? <span>{award.subtitle}</span> : null}
                        {award.subtitle && award.year ? (
                          <span className={styles.dot} aria-hidden="true">
                            •
                          </span>
                        ) : null}
                        {award.year ? <span>{award.year}</span> : null}
                      </div>
                    )}
                  </div>
                </div>

                <figure className={styles.figure}>
                  <Image
                    src={award.imageSrc}
                    alt={award.imageAlt}
                    width={1600}
                    height={1200}
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 900px"
                  />
                </figure>

                {award.description ? (
                  <p className={styles.bodyText}>{award.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
      <Footer />
    </>
  );
}

