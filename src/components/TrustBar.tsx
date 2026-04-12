import styles from "./TrustBar.module.css";

const badges = [
  { icon: "✅", text: "Police-Checked Staff" },
  { icon: "🛡", text: "Fully Insured" },
  { icon: "⭐", text: "44 Google Reviews" },
  { icon: "🌿", text: "Eco-Friendly Products" },
  { icon: "📋", text: "Detailed Job Checklists" },
];

type TrustBarProps = {
  /** Sit on top of a banner image (no solid bar background). */
  onBanner?: boolean;
};

export default function TrustBar({ onBanner }: TrustBarProps) {
  return (
    <div
      className={`${styles.trustBar} ${onBanner ? styles.trustBarOnBanner : ""}`}
    >
      <div className={styles.trustBarInner}>
        {badges.map((badge) => (
          <div key={badge.text} className={styles.item}>
            <span className={styles.icon}>{badge.icon}</span>
            <span className={styles.text}>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
