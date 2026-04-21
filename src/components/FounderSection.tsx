import Image from "next/image";
import styles from "./FounderSection.module.css";
import FadeIn from "./FadeIn";

const founders = [
  {
    name: "Maychelle Anlap",
    role: "Founder & CEO",
    bio: "Maychelle founded Made in Wolls with a vision to redefine premium cleaning in Sydney. Her commitment to quality and client satisfaction has built the company's reputation for excellence. With a background in high-end hospitality, she ensures every home receives the 'premium' touch.",
    image: "/images/Founder.JPG",
  },
  {
    name: "Bruno",
    role: "Co-Owner & Operations Manager",
    bio: "Bruno oversees the day-to-day operations and client coordination, ensuring every booking runs smoothly from confirmation to completion. He manages our dedicated team of cleaners and maintains the high standards of reliability that our clients trust.",
    image: "/images/Co-Founder.JPG",
  },
];

export default function FounderSection() {
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <FadeIn variant="up">
          <div className={styles.label}>Leadership</div>
          <h2 className={styles.heading}>Meet the Founders</h2>
          <div className={styles.secondaryRule} />
          <p className={styles.introText}>
            The faces behind Made in Wolls. We are a family-run business
            committed to bringing a higher standard of care to Sydney homes.
          </p>
        </FadeIn>

        <div className={styles.founderGrid}>
          {founders.map((founder, index) => (
            <FadeIn
              key={founder.name}
              variant="up"
              delay={0.1 * (index + 1)}
              className={styles.founderCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={400}
                  height={500}
                  className={styles.profileImage}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <p className={styles.founderRole}>{founder.role}</p>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
