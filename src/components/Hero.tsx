import Link from "next/link";
import BookOpenButton from "./BookOpenButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden="true">
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/images/REEL2_M.W-v2.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
      </div>
      <div className={styles.heroForeground}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Premium Cleaning Sydney</div>
            <h1 className={styles.title}>
              Premium House Cleaning Services Sydney —{" "}
              <span className={styles.titleAccent}>We Clean, We Commit.</span>
            </h1>
            <div className={styles.actions}>
              <BookOpenButton className={styles.btnGreen}>
                Book a Clean →
              </BookOpenButton>
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
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Trusted families</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9★</div>
              <div className={styles.statLabel}>Rating</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
