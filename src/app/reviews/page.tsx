import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReviewCard from "@/components/ReviewCard";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Reviews | Made in Wolls Cleaning Services Sydney",
  description:
    "Read what our clients say about Made in Wolls. 4.9/5 from 125 Google Reviews. Trusted by Sydney families.",
};

const allReviews = [
  {
    text: "OMG Maychelle, I could cry! Everything looks great, you girls did such an amazing job. Thank you so much for making my life that little bit easier. I will transfer right away.",
    author: "John Ibbet",
    suburb: "Wollstonecraft",
  },
  {
    text: "Was so lovely coming home to such a clean house. I know it was a big job and a little tough with so many toys and accessories around from our 3 year old! I am very happy with everything! Thank you!",
    author: "Luke Martin",
    suburb: "Crows Nest",
  },
  {
    text: "The house is spotless and smells amazing! It's been lovely being at home this evening! I am very appreciative of Laiza's amazing work!",
    author: "Taylor White",
    suburb: "Mosman",
  },
  {
    text: "My hubby just said to me: the bathroom and shower are so sparkly that I almost don't want to use them. Thank you once again. Have a great evening.",
    author: "Kelly Cameron",
    suburb: "Neutral Bay",
  },
  {
    text: "Maychelle and her team are absolutely wonderful. They have been cleaning our home for over a year now and we couldn't be happier. Highly recommend!",
    author: "Sarah Mitchell",
    suburb: "Kirribilli",
  },
  {
    text: "We used Made in Wolls for our end of lease clean and got our full bond back. Thorough, professional and great communication throughout.",
    author: "James Chen",
    suburb: "St Leonards",
  },
  {
    text: "Fantastic Airbnb turnaround service. Our guests always comment on how clean the apartment is. Reliable and consistent every single time.",
    author: "Amanda Richards",
    suburb: "Manly",
  },
  {
    text: "The attention to detail is what sets Made in Wolls apart. They truly care about the quality of their work. Our office has never looked better.",
    author: "David Park",
    suburb: "North Sydney",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Reviews</span>
          </div>
          <h1 className={styles.heroTitle}>What Our Clients Say</h1>
          <p className={styles.heroSub}>
            With 125+ Google reviews and a 4.9/5 rating, our clients trust us to
            deliver exceptional results every time. Here&apos;s what they have to say.
          </p>
          <div className={styles.ratingBadge}>
            <span className={styles.ratingStars}>★★★★★</span>
            <span className={styles.ratingNumber}>4.9/5</span>
            <span className={styles.ratingSource}>from 125 Google Reviews</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.reviewGrid}>
            {allReviews.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
      <Footer />
    </>
  );
}
