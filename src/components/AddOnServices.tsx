import type { CSSProperties } from "react";
import Icon, { type IconName } from "./Icon";
import styles from "./AddOnServices.module.css";

export type AddOnItem = {
  icon: IconName;
  title: string;
  price: string;
};

type Props = {
  items: AddOnItem[];
};

export default function AddOnServices({ items }: Props) {
  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>
        Please check our checklist to see what is included and what is not, so you can
        choose your add-ons as required.
      </p>
      <h2 className={styles.heading}>Optional add-ons</h2>
      <p className={styles.sub}>
        Available when you book — pricing applies as listed unless noted.
      </p>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <article
            key={`${item.title}-${item.price}`}
            className={styles.card}
            style={
              {
                "--enter-delay": `${Math.min(index, 24) * 38}ms`,
              } as CSSProperties
            }
          >
            <div className={styles.iconWrap}>
              <Icon name={item.icon} size={26} className={styles.iconSvg} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>{item.price}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
