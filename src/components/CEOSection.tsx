import React from 'react';
import Image from 'next/image';
import styles from './CEOSection.module.css';
import FadeIn from './FadeIn';

const CEOSection = () => {
  return (
    <section className={styles.section}>
      {/* CEO Message Section */}
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <FadeIn variant="left" distance={40}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/Founder.JPG"
                  alt="Maychelle - CEO of Made in Wolls"
                  width={600}
                  height={800}
                  className={styles.image}
                />
                <div className={styles.imageDecor} />
              </div>
            </FadeIn>
          </div>
          <div className={styles.contentCol}>
            <FadeIn variant="right" distance={40} delay={0.2}>
              <div className={styles.contentCard}>
                <div className={styles.label}>Message from CEO</div>
                <h2 className={styles.title}>A Commitment to Excellence</h2>
                <div className={styles.quote}>
                  &ldquo;At Made in Wolls, we believe that actions speak louder than words.&rdquo;
                </div>
                <div className={styles.messageBody}>
                  <p>Dear Valued Clients,</p>
                  <p>
                    Today, I want to express our deepest gratitude for your unwavering trust and support in our journey. Your confidence in us has fueled our commitment to excellence, a commitment that is etched into the core of our values.
                  </p>
                  <p>
                    Our pursuit of excellence drives us to push boundaries and strive for perfection in everything we do. Your satisfaction is our North Star. Every interaction, every service, and every detail is meticulously crafted to ensure your complete contentment.
                  </p>
                  <p>
                    In the realm of professionalism, we stand as a beacon of trustworthiness and integrity. Innovation is the lifeblood of Made in Wolls. We are continuously exploring new horizons to bring you cutting-edge solutions and exciting possibilities.
                  </p>
                  <p>
                    Thank you for being more than just clients; you are our partners in this extraordinary journey.
                  </p>
                </div>
                <div className={styles.signature}>
                  <div className={styles.name}>Maychelle</div>
                  <div className={styles.role}>CEO, Made in Wolls</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className={styles.container} style={{ marginTop: '100px' }}>
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.imageCol}>
            <FadeIn variant="right" distance={40}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/Co-Founder.JPG"
                  alt="The Story of Made in Wolls"
                  width={600}
                  height={800}
                  className={styles.image}
                />
                <div className={styles.imageDecorAlt} />
              </div>
            </FadeIn>
          </div>
          <div className={styles.contentCol}>
            <FadeIn variant="left" distance={40} delay={0.2}>
              <div className={styles.contentCard}>
                <div className={styles.label}>Our Story</div>
                <h2 className={styles.title}>How It All Started</h2>
                <div className={styles.messageBody}>
                  <p>
                    Made in Wolls was founded by Maychelle, a Sydney-based entrepreneur who saw a clear gap in the market — clients wanted a cleaning service that was genuinely reliable, genuinely professional and genuinely cared about the result.
                  </p>
                  <p>
                    What started as a vision has grown into a trusted team of experienced, police-checked cleaners servicing some of Sydney&apos;s most prestigious homes and offices. Every job we take on is approached with the same attention to detail and commitment to quality that built our reputation.
                  </p>
                  <p>
                    We operate alongside co-owner Bruno, whose role focuses on operations and client coordination — ensuring every booking runs smoothly from confirmation to completion.
                  </p>
                  <p>
                    We are proud of what we have built, and we are proud of the team behind it.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
