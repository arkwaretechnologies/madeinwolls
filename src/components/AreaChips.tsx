import FadeIn from "./FadeIn";
import styles from "./AreaChips.module.css";

const regions = [
  {
    name: "Lower North Shore",
    suburbs: [
      "Wollstonecraft",
      "Crows Nest",
      "St Leonards",
      "Waverton",
      "Kirribilli",
      "Lavender Bay",
      "Neutral Bay",
      "Cammeray",
      "McMahons Point",
      "Milsons Point",
    ],
    highlighted: ["Wollstonecraft"],
  },
  {
    name: "Northern Beaches",
    suburbs: [
      "Manly",
      "Dee Why",
      "Brookvale",
      "Frenchs Forest",
      "Narraweena",
      "Collaroy",
      "Narrabeen",
      "Mona Vale",
      "Newport",
      "Avalon",
      "Palm Beach",
      "Warriewood",
    ],
    highlighted: ["Manly", "Mona Vale"],
  },
  {
    name: "City of Sydney & Inner City",
    suburbs: [
      "CBD",
      "Pyrmont",
      "Darlinghurst",
      "Surry Hills",
      "Newtown",
      "Paddington",
      "Glebe",
      "Erskineville",
      "Alexandria",
      "Chippendale",
      "Bondi",
    ],
    highlighted: ["Bondi", "Paddington"],
  },
  {
    name: "North Shore",
    suburbs: [
      "Mosman",
      "Cremorne",
      "Cremorne Point",
      "Northbridge",
      "Neutral Bay",
      "North Sydney",
    ],
    highlighted: ["Mosman"],
  },
];

export default function AreaChips() {
  return (
    <section className={styles.section} id="service-areas">
      <div className={styles.sectionInner}>
        <FadeIn variant="up">
          <div className={styles.label}>Where We Clean</div>
          <h2 className={styles.heading}>
            Servicing Sydney&apos;s Premium Suburbs
          </h2>
          <p className={styles.intro}>
            Made in Wolls provides professional cleaning services across
            Sydney&apos;s most sought-after neighbourhoods. Whether you&apos;re in
            the Lower North Shore, Northern Beaches or City of Sydney, our team is
            ready to deliver.
          </p>
        </FadeIn>

        <div className={styles.regionsGrid}>
          {regions.map((region, ri) => (
            <FadeIn
              key={region.name}
              variant="up"
              staggerIndex={ri}
              staggerDelay={0.1}
            >
              <div className={styles.regionCard}>
                <h3 className={styles.regionTitle}>{region.name}</h3>
                <div className={styles.chipGrid}>
                  {region.suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className={`${styles.chip} ${
                        region.highlighted.includes(suburb)
                          ? styles.chipHighlight
                          : ""
                      }`}
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn variant="up" delay={0.4}>
          <div className={styles.seoFooter}>
            <p>
              Looking for trusted <strong>cleaning services in Mosman</strong>,{" "}
              <strong>Neutral Bay</strong>, or <strong>Crows Nest</strong>? We
              specialise in premium <strong>house cleaning in the Lower North Shore</strong>{" "}
              and <strong>Northern Beaches</strong>. Whether you need a regular
              clean or <strong>end of lease cleaning in the North Shore</strong>,{" "}
              <strong>Paddington</strong>, or <strong>Bondi</strong>, our
              professional team ensures your home is spotless and
              <strong> North Sydney</strong> ready.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
