import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValuesSection from "@/components/ValuesSection";
import ServiceCard from "@/components/ServiceCard";
import QuoteStrip from "@/components/QuoteStrip";
import AreaChips from "@/components/AreaChips";
import ReviewCard from "@/components/ReviewCard";
import WhyUs from "@/components/WhyUs";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import AboutIntroVideo from "@/components/AboutIntroVideo";
import { type IconName } from "@/components/Icon";
import styles from "./home.module.css";

const services: { icon: IconName; name: string; price: string; desc: string; href: string; highlight?: boolean }[] = [
  {
    icon: "key",
    name: "End of Lease & Bond Cleaning",
    price: "From $369 — Inspection ready",
    desc: "Checklist, sign-off & photos included",
    href: "/services/end-of-lease-cleaning",
    highlight: true,
  },
  {
    icon: "home",
    name: "Regular Home Cleaning",
    price: "From $154",
    desc: "Weekly, fortnightly or monthly",
    href: "/services/regular-cleaning",
  },
  {
    icon: "sparkles",
    name: "Spring & Deep Clean",
    price: "From $310",
    desc: "Top to bottom, every corner",
    href: "/services/spring-cleaning",
  },
  {
    icon: "house",
    name: "Airbnb Cleaning",
    price: "From $154",
    desc: "Fast turnaround, guest-ready",
    href: "/services/airbnb-cleaning",
  },
  {
    icon: "building",
    name: "Office & Commercial",
    price: "From $150",
    desc: "After-hours available",
    href: "/services/office-cleaning",
  },
  {
    icon: "church",
    name: "Church Cleaning",
    price: "Quote required",
    desc: "Respectful, reliable, flexible",
    href: "/services/church-cleaning",
  },
  {
    icon: "baby",
    name: "Childcare Cleaning",
    price: "Quote required",
    desc: "Child-safe, compliant products",
    href: "/services/childcare-cleaning",
  },
  {
    icon: "broom",
    name: "Carpet Cleaning",
    price: "Quote required",
    desc: "Steam & dry cleaning available",
    href: "/services",
  },
];

const reviews = [
  {
    text: "OMG Maychelle, I could cry! Everything looks great, you girls did such an amazing job. Thank you so much for making my life that little bit easier.",
    author: "John Ibbet",
    suburb: "Wollstonecraft",
  },
  {
    text: "My hubby said: the bathroom and shower are so sparkly I almost don't want to use them. Thank you so much!",
    author: "Kelly Cameron",
    suburb: "Neutral Bay",
  },
  {
    text: "The house is spotless and smells amazing! Very appreciative of Laiza's amazing work!",
    author: "Taylor White",
    suburb: "Mosman",
  },
  {
    text: "Was so lovely coming home to such a clean house. I am very happy with everything! Thank you!",
    author: "Luke Martin",
    suburb: "Crows Nest",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />

      {/* Introduction */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLayout}>
            <FadeIn variant="up">
              <AboutIntroVideo
                mediaClassName={styles.introMedia}
                videoClassName={styles.introVideo}
              />
            </FadeIn>
            <div className={styles.introText}>
              <FadeIn variant="up">
                <div className={styles.label}>About Us</div>
                <h2 className={styles.heading}>
                  Premium Care for Sydney&apos;s Finest Homes
                </h2>
              </FadeIn>
              <FadeIn variant="fade" delay={0.15}>
                <div className={styles.secondaryRule} />
              </FadeIn>
              <FadeIn variant="up" delay={0.2}>
                <p className={styles.bodyText}>
                  Made in Wolls Cleaning Services is a premium residential and commercial
                  cleaning company based in Wollstonecraft, Sydney. Founded by Maychelle
                  we specialise in regular home cleaning, spring and deep cleans,
                  end of lease and bond cleans, office cleaning and Airbnb turnaround
                  cleans.
                </p>
              </FadeIn>
              <FadeIn variant="up" delay={0.3}>
                <p className={styles.bodyText}>
                  Our police-checked, fully insured team services the Lower North Shore,
                  Northern Beaches and City of Sydney — delivering consistent, high-quality
                  results backed by a 100% satisfaction guarantee.
                </p>
              </FadeIn>
              <FadeIn variant="up" delay={0.4}>
                <p className={styles.bodyText}>
                  We are not a marketplace or an app. We are a real, locally owned cleaning
                  business with a dedicated team, structured processes and a genuine
                  commitment to the homes and businesses we care for.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      

      <ValuesSection />

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <FadeIn variant="up">
            <div className={styles.label}>What We Do</div>
            <h2 className={styles.heading}>Sydney&apos;s Premium Cleaning Services</h2>
            <p className={styles.bodyText}>
              From weekly home maintenance to full bond cleans and commercial spaces,
              Made in Wolls delivers a consistently exceptional standard of cleaning
              across Sydney. Every service is backed by our detailed job checklist,
              satisfaction guarantee and police-checked team.
            </p>
          </FadeIn>
          <div className={styles.serviceList}>
            {services.map((svc, i) => (
              <FadeIn key={svc.name} variant="up" staggerIndex={i} staggerDelay={0.06}>
                <ServiceCard {...svc} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn variant="up">
        <QuoteStrip />
      </FadeIn>
      <AreaChips />

      {/* Reviews */}
      <section className={styles.reviews}>
        <div className={styles.reviewsInner}>
          <FadeIn variant="up">
            <div className={styles.label}>Client Reviews</div>
            <h2 className={styles.heading}>Trusted by Sydney Families</h2>
          </FadeIn>
          <div className={styles.reviewStack}>
            {reviews.map((review, i) => (
              <FadeIn key={review.author} variant="up" staggerIndex={i} staggerDelay={0.1}>
                <ReviewCard {...review} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <FadeIn variant="scale">
        <CTABlock />
      </FadeIn>
      <Footer />
    </>
  );
}
