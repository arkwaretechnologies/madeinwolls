import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import FounderExperimental from "@/components/FounderExperimental";
import TeamPhotoGallery from "@/components/TeamPhotoGallery";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Meet the Team | Made in Wolls Cleaning Services Sydney",
  description:
    "Meet the team behind Made in Wolls. Police-checked, professionally trained and genuinely proud of the work they do.",
};

const teamPhotos: { src: string; alt: string }[] = [
  { src: "/images/TeamPhoto/TeamPhoto.JPG", alt: "Made in Wolls cleaning team" },
  { src: "/images/TeamPhoto/Teamphoto2.JPG", alt: "Made in Wolls professional cleaners" },
  { src: "/images/TeamPhoto/Teamphoto3.JPG", alt: "Made in Wolls team" },
];

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <div className={styles.teamBanner}>
        <Image 
          src="/MadeinWolls-images/TeamPhoto.JPG"
          alt="Made in Wolls Team"
          fill
          priority
          quality={100}
          className={styles.bannerImage}
        />
        <div className={styles.overlay} />
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/about">About</Link> /{" "}
              <span>Our Team</span>
            </div>
            <h1 className={styles.heroTitle}>Meet the Team Behind Made in Wolls</h1>
            <p className={styles.heroSub}>
              When you invite a cleaner into your home, you deserve to know who they
              are. At Made in Wolls, we believe transparency and trust go hand in
              hand. Every member of our team is police-checked, professionally trained
              and genuinely proud of the work they do.
            </p>
          </div>
        </section>
      </div>

      {/* ── Founder Section ── */}
      <FounderExperimental />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.teamSection}>
            <div className={styles.label}>Our Professionals</div>
            <h2 className={styles.heading}>The Cleaning Team</h2>
            <p className={styles.bodyText}>
              Our cleaning team is made up of experienced, dedicated professionals
              who take pride in their work. Every team member completes a thorough
              background check and training process before their first job with Made
              in Wolls.
            </p>

            <TeamPhotoGallery photos={teamPhotos} />
          </div>
        </div>
      </section>

      <CTABlock />
      <Footer />
    </>
  );
}

