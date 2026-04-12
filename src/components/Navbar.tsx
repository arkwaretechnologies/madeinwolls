"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            <div className={styles.brandName}>Made in Wolls</div>
            <div className={styles.brandSub}>Cleaning &amp; Property Care</div>
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
            <Link href="/contact" className={styles.cta}>
              Book Now
            </Link>
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
            <div className={styles.brandName}>Made in Wolls</div>
            <div className={styles.brandSub}>Cleaning &amp; Property Care</div>
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
        <Link
          href="/contact"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Book a Clean →
        </Link>
        <a href="tel:0410721027" className={styles.mobilePhone}>
          📞 0410 721 027
        </a>
      </div>
    </>
  );
}
