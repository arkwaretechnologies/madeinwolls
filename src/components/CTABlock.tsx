import Link from "next/link";
import styles from "./CTABlock.module.css";

export default function CTABlock() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.eyebrow}>Ready to Book?</div>
        <div className={styles.heading}>Your Perfect Clean Awaits</div>
        <p className={styles.sub}>
          Book online in 60 seconds. Same-day quotes available. Police-checked,
          insured team ready to serve you across Sydney.
        </p>
        <Link href="/contact" className={styles.btnMain}>
          Book a Clean Now →
        </Link>
        <div className={styles.orText}>— or call us directly —</div>
        <div className={styles.phoneRow}>
          <span className={styles.phoneIcon}>📞</span>
          <a href="tel:0410721027" className={styles.phoneLink}>
            <div className={styles.phoneText}>0410 721 027</div>
            <div className={styles.phoneSub}>Mon–Sat · 8am–6pm</div>
          </a>
        </div>
      </div>
    </section>
  );
}
