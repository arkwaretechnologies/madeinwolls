import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import styles from "./book-now.module.css";

export const metadata: Metadata = {
  title: "Book Now | Made in Wolls Cleaning Services Sydney",
  description:
    "Book your Made in Wolls cleaning service online. Choose your service, extras, date and address through our secure BookingKoala form.",
};

export default function BookNowPage() {
  return (
    <>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Book Now</span>
          </div>
          <h1 className={styles.heroTitle}>Book a Clean</h1>
          <p className={styles.heroSub}>
            Choose your cleaning service, preferred time and extras below.
          </p>
        </div>
      </section>

      <main className={styles.content}>
        <div className={styles.contentInner}>
          <BookingWidget />
        </div>
      </main>
      <Footer />
    </>
  );
}
