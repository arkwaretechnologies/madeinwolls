import Icon from "./Icon";
import FadeIn from "./FadeIn";
import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: "checkCircle" as const,
    title: "Police-Checked",
    text: "Every team member verified before their first job",
  },
  {
    icon: "shield" as const,
    title: "Fully Insured",
    text: "Complete peace of mind for every clean",
  },
  {
    icon: "clipboard" as const,
    title: "Detailed Checklist",
    text: "Signed off on every single visit",
  },
  {
    icon: "leaf" as const,
    title: "Eco-Friendly",
    text: "Safe for your family, pets and home",
  },
  {
    icon: "star" as const,
    title: "Trusted by 100+ families",
    text: "4.9/5 rating from real Sydney clients",
  },
  {
    icon: "award" as const,
    title: "Guaranteed",
    text: "100% satisfaction or we return free",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <FadeIn variant="up">
          <div className={styles.label}>Why Choose Us</div>
          <div className={styles.heading}>The Made in Wolls Difference</div>
        </FadeIn>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <FadeIn key={r.title} variant="up" staggerIndex={i} staggerDelay={0.07}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon name={r.icon} size={32} />
                </span>
                <div className={styles.cardTitle}>{r.title}</div>
                <div className={styles.cardText}>{r.text}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
