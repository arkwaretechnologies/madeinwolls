import Icon, { type IconName } from "./Icon";
import styles from "./TrustBar.module.css";

const badges = [
  { icon: "checkCircle" as const, text: "Police-Checked Staff" },
  { icon: "shield" as const, text: "Fully Insured" },
  { icon: "star" as const, text: "125 Google Reviews" },
  { icon: "leaf" as const, text: "Eco-Friendly Products" },
  { icon: "clipboard" as const, text: "Detailed Job Checklists" },
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
        {badges.map((badge: { icon: IconName; text: string }) => (
          <div key={badge.text} className={styles.item}>
            <span className={styles.icon}>
              <Icon name={badge.icon} size={16} />
            </span>
            <span className={styles.text}>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
