"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FounderExperimental.module.css";
import FadeIn from "./FadeIn";

interface FounderData {
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  image: string;
  quote: string;
  reversed?: boolean;
}

const founders: FounderData[] = [
  {
    name: "Maychelle Anlap",
    role: "Founder & CEO",
    bio: "Founded Made in Wolls with a singular mission to deliver premium cleaning services that empower families and transform homes into spaces of comfort and calm.",
    shortBio: "Founded Made in Wolls with a mission to deliver premium cleaning that transforms homes into spaces of comfort.",
    image: "/images/Founder Transparent.png",
    quote:
      "I believe a clean home should feel like a breath of fresh air — calming, inviting, and effortlessly perfect.",
    reversed: false,
  },
  {
    name: "Bruno",
    role: "Co-Owner & Operations",
    bio: "Bruno oversees the day-to-day operations and client coordination, ensuring every booking runs smoothly from confirmation to completion. His operational excellence keeps Made in Wolls running like clockwork.",
    shortBio: "Bruno oversees operations, ensuring every booking runs smoothly with operational excellence.",
    image: "/images/Co-Founder Transparent.png",
    quote:
      "Every detail matters. From scheduling to the final inspection — we hold ourselves to the same standard our clients expect.",
    reversed: true,
  },
];

export default function FounderExperimental() {
  return (
    <section className={styles.expSection} id="founder-experimental">
      {/* Background decorations */}
      <div className={styles.bgDecorations}>
        <div className={`${styles.dotGrid} ${styles.dotGrid1}`} />
        <div className={`${styles.dotGrid} ${styles.dotGrid2}`} />
        <div className={`${styles.bgCircle} ${styles.bgCircle1}`} />
        <div className={`${styles.bgCircle} ${styles.bgCircle2}`} />
        <div className={`${styles.bgBlob} ${styles.bgBlob1}`} />
        <div className={`${styles.bgBlob} ${styles.bgBlob2}`} />
      </div>

      <div className={styles.expContainer}>
        {/* Header */}
        <FadeIn variant="up">
          <div className={styles.expHeader}>
            <div className={styles.expChip}>
              <span className={styles.chipIcon}>👤</span>
              Founder
            </div>
            <h2 className={styles.expTitle}>
              Vision. Innovation.{" "}
              <span className={styles.expTitleAccent}>The Future.</span>
            </h2>
            <p className={styles.expSubtitle}>
              Meet the founders who turned a passion for pristine spaces into
              Sydney&apos;s most trusted premium cleaning service.
            </p>
          </div>
        </FadeIn>

        {/* Founder Blocks */}
        {founders.map((founder, index) => (
          <div key={founder.name}>
            <FadeIn variant="up" delay={0.1} distance={40}>
              <div className={styles.founderBlock}>
                <div
                  className={`${styles.stageCard} ${
                    founder.reversed ? styles.textRight : ""
                  }`}
                >
                  {/* Text content */}
                  <div className={styles.textContent}>
                    <div className={styles.founderLabel}>{founder.role}</div>
                    <h3 className={styles.founderName}>{founder.name}</h3>
                    <p className={styles.founderBioDesktop}>{founder.bio}</p>
                    <p className={styles.founderBioMobile}>{founder.shortBio}</p>

                    <div className={styles.signatureArea}>
                      <span className={styles.signatureName}>
                        {founder.name}
                      </span>
                      <span className={styles.signatureRole}>
                        {founder.role}, Made in Wolls
                      </span>
                    </div>

                  </div>

                  {/* THE BREAKOUT FIGURE — no box, no frame */}
                  <div className={styles.figureClipWrapper}>
                    <div className={styles.spotlightBg} />
                    <div className={styles.founderFigure}>
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={480}
                        height={640}
                        quality={90}
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Floating Quote Card */}
                  <div className={styles.quoteFloat}>
                    <div className={styles.quoteOpenMark}>&ldquo;</div>
                    <p className={styles.quoteBody}>{founder.quote}</p>
                    <p className={styles.quoteAttrib}>{founder.name}</p>
                  </div>

                </div>
              </div>
            </FadeIn>

            {/* Divider between blocks */}
            {index < founders.length - 1 && (
              <FadeIn variant="fade" delay={0.2}>
                <div className={styles.blockDivider}>
                  <div className={styles.blockDividerLine} />
                  <div className={styles.blockDividerDot} />
                  <div className={styles.blockDividerLine} />
                </div>
              </FadeIn>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
