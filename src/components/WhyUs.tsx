import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: "✅",
    title: "Police-Checked",
    text: "Every team member verified before their first job",
  },
  {
    icon: "🛡",
    title: "Fully Insured",
    text: "Complete peace of mind for every clean",
  },
  {
    icon: "📋",
    title: "Detailed Checklist",
    text: "Signed off on every single visit",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly",
    text: "Safe for your family, pets and home",
  },
  {
    icon: "⭐",
    title: "44 Reviews",
    text: "4.8 stars on Google from real clients",
  },
  {
    icon: "💯",
    title: "Guaranteed",
    text: "100% satisfaction or we return free",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.label}>Why Choose Us</div>
        <div className={styles.heading}>The Made in Wolls Difference</div>
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <span className={styles.cardIcon}>{r.icon}</span>
              <div className={styles.cardTitle}>{r.title}</div>
              <div className={styles.cardText}>{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
