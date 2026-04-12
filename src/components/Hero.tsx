import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Premium Cleaning Sydney</div>
          <h1 className={styles.title}>
            Premium House Cleaning Services Sydney —{" "}
            <span className={styles.titleAccent}>We Clean, We Commit.</span>
          </h1>
          <p className={styles.subtitle}>
            ⭐ 4.8/5 from 44 Google Reviews | Police-Checked Team | Fully Insured |
            100% Satisfaction Guarantee
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnGreen}>
              Book a Clean →
            </Link>
            <Link href="/services" className={styles.btnGhost}>
              View Our Services →
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles.rule} />
      <div className={styles.heroInner}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>44</div>
            <div className={styles.statLabel}>Google Reviews</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.8★</div>
            <div className={styles.statLabel}>Rating</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
