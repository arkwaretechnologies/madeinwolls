import Icon, { type IconName } from "./Icon";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: IconName;
  name: string;
  price: string;
  desc: string;
  href: string;
  highlight?: boolean;
}

export default function ServiceCard({
  icon,
  name,
  price,
  desc,
  href,
  highlight = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`${styles.card} ${highlight ? styles.highlight : ""}`}
    >
      <div className={styles.iconWrap}>
        <Icon name={icon} size={32} className={styles.iconSvg} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.arrow}>›</div>
    </Link>
  );
}
