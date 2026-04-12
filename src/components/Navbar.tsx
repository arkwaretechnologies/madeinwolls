"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BookOpenButton from "./BookOpenButton";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/images/madeinwollslogo.png"
              alt="Made in Wolls — Cleaning & Property Care"
              width={160}
              height={80}
              className={styles.logo}
              priority
            />
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <a href="tel:0410721027" className={styles.phoneLink}>
              📞 0410 721 027
            </a>
            <BookOpenButton className={styles.cta}>Book Now</BookOpenButton>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link
            href="/"
            className={styles.brand}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/madeinwollslogo.png"
              alt="Made in Wolls — Cleaning & Property Care"
              width={140}
              height={70}
              className={styles.logo}
            />
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <BookOpenButton
          className={styles.mobileCta}
          onBeforeOpen={() => setMenuOpen(false)}
        >
          Book a Clean →
        </BookOpenButton>
        <a href="tel:0410721027" className={styles.mobilePhone}>
          📞 0410 721 027
        </a>
      </div>
    </>
  );
}
