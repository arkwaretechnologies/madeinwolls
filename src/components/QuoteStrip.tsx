import BookOpenButton from "./BookOpenButton";
import styles from "./QuoteStrip.module.css";

export default function QuoteStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.stripInner}>
        <div className={styles.icon}>💬</div>
        <div className={styles.text}>
          <div className={styles.title}>Get a Same-Day Quote</div>
          <div className={styles.sub}>We respond within 2 hours</div>
        </div>
        <BookOpenButton className={styles.btn}>Get Quote</BookOpenButton>
      </div>
    </div>
  );
}
