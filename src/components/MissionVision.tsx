import React from 'react';
import styles from './MissionVision.module.css';
import FadeIn from './FadeIn';
import Icon from './Icon';

const MissionVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FadeIn variant="up" delay={0.1}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name="eye" size={32} className={styles.icon} />
              </div>
              <h2 className={styles.title}>Our Vision</h2>
              <div className={styles.divider} />
              <p className={styles.text}>
                To be the premier provider of home and commercial cleaning services, setting the industry standard for excellence, and becoming the first choice for clients seeking a clean and comfortable living environment.
              </p>
            </div>
          </FadeIn>

          <FadeIn variant="up" delay={0.2}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name="target" size={32} className={styles.icon} />
              </div>
              <h2 className={styles.title}>Our Mission</h2>
              <div className={styles.divider} />
              <p className={styles.text}>
                At Made in Wolls Cleaning Services, our mission is to consistently deliver exceptional home cleaning services that our clients are not only satisfied with but are also enthusiastic to recommend to others.
              </p>
              <p className={styles.text}>
                We are committed to upholding the highest standards of cleanliness, professionalism, and customer satisfaction. Through our dedicated team, innovative solutions, and environmentally-friendly practices, we aim to create a healthier, more enjoyable space for our valued clients.
              </p>
              <p className={styles.text}>
                Our mission is driven by a passion for perfection, a dedication to customer happiness, and a commitment to making homes cleaner, safer, and happier places to live.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
