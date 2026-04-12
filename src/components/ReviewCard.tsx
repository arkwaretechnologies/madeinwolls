import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  text: string;
  author: string;
  suburb: string;
}

export default function ReviewCard({ text, author, suburb }: ReviewCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.stars}>★★★★★</div>
        <div className={styles.source}>Google Review</div>
      </div>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.author}>
        {author} <span className={styles.suburb}>· {suburb}</span>
      </div>
    </div>
  );
}
