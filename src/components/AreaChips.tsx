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
      "Glebe",
      "Erskineville",
      "Alexandria",
      "Chippendale",
    ],
    highlighted: [],
  },
  {
    name: "North Shore",
    suburbs: [
      "Mosman",
      "Cremorne",
      "Cremorne Point",
      "Northbridge",
      "North Sydney",
    ],
    highlighted: ["Mosman"],
  },
];

export default function AreaChips() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <FadeIn variant="up">
          <div className={styles.label}>Where We Clean</div>
          <div className={styles.heading}>
            Servicing Sydney&apos;s Premium Suburbs
          </div>
          <p className={styles.intro}>
            Made in Wolls provides professional cleaning services across
            Sydney&apos;s most sought-after neighbourhoods. Whether you&apos;re in
            the Lower North Shore, Northern Beaches or City of Sydney, our team is
            ready to deliver.
          </p>
        </FadeIn>
        {regions.map((region, ri) => (
          <FadeIn key={region.name} variant="up" staggerIndex={ri} staggerDelay={0.12}>
            <div>
              <div className={styles.regionTitle}>{region.name}</div>
              <div className={styles.chipGrid}>
                {region.suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className={`${styles.chip} ${
                      region.highlighted.includes(suburb) ? styles.chipGreen : ""
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
    </section>
  );
}
