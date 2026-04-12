import FadeIn from "./FadeIn";
import styles from "./ValuesSection.module.css";

const values = [
  {
    icon: "🤝",
    title: "Trust",
    text: "We do what we say, every single time. Your home is in safe hands.",
  },
  {
    icon: "✨",
    title: "Excellence",
    text: "We never cut corners. Our clients notice the difference and so do we.",
  },
  {
    icon: "⏰",
    title: "Reliability",
    text: "On time, prepared and consistent — visit after visit.",
  },
  {
    icon: "💚",
    title: "Care",
    text: "We treat every home as if it were our own. That is our standard.",
  },
];

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <FadeIn variant="up">
          <div className={styles.label}>Our Values</div>
          <div className={styles.heading}>What We Stand For</div>
        </FadeIn>
        <div className={styles.grid}>
          {values.map((v, i) => (
            <FadeIn key={v.title} variant="up" staggerIndex={i} staggerDelay={0.1}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>{v.icon}</div>
                <div>
                  <div className={styles.cardTitle}>{v.title}</div>
                  <div className={styles.cardText}>{v.text}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
