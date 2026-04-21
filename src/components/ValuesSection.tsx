import Icon from "./Icon";
import FadeIn from "./FadeIn";
import styles from "./ValuesSection.module.css";

const values = [
  {
    icon: "handshake" as const,
    title: "Trust",
    text: "We do what we say, every single time. Your home is in safe hands.",
  },
  {
    icon: "sparkles" as const,
    title: "Excellence",
    text: "We never cut corners. Our clients notice the difference and so do we.",
  },
  {
    icon: "clock" as const,
    title: "Reliability",
    text: "On time, prepared and consistent — visit after visit.",
  },
  {
    icon: "heart" as const,
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
                <div className={styles.iconWrap}>
                  <Icon name={v.icon} size={32} />
                </div>
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
