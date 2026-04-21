import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <Image
              src="/images/MIW White Logo.png"
              alt="Made in Wolls — Cleaning & Property Care"
              width={180}
              height={90}
              className={styles.logo}
            />
            <p className={styles.brandDesc}>
              Crafting cleanliness in every corner. Premium cleaning services trusted
              by Sydney families since day one.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4>Services</h4>
              <Link href="/services/regular-cleaning">Regular Cleaning</Link>
              <Link href="/services/spring-cleaning">Spring &amp; Deep Clean</Link>
              <Link href="/services/end-of-lease-cleaning">End of Lease</Link>
              <Link href="/services/airbnb-cleaning">Airbnb Cleaning</Link>
              <Link href="/services/office-cleaning">Office Cleaning</Link>
              <Link href="/services/church-cleaning">Church Cleaning</Link>
              <Link href="/services/childcare-cleaning">Childcare Cleaning</Link>
            </div>

            <div className={styles.linkCol}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/about/our-team">Our Team</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.linkCol}>
              <h4>Contact</h4>
              <div className={styles.contactCol}>
                <div className={styles.contactItem}>
                  <Icon name="phone" size={16} /> <a href="tel:0410721027">0410 721 027</a>
                </div>
                <div className={styles.contactItem}>
                  <Icon name="mail" size={16} /> <a href="mailto:info@madeinwolls.com">info@madeinwolls.com</a>
                </div>
                <div className={styles.contactItem}>
                  <Icon name="mapPin" size={16} /> 8/18 Boronia St, Wollstonecraft NSW 2065
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.footerBottom}>
          <div className={styles.copy}>
            © 2026 Made in Wolls Cleaning Services 2 Pty Ltd. All rights reserved.
            <br />
            <a href="https://www.madeinwolls.com" style={{ color: "inherit" }}>
              www.madeinwolls.com
            </a>
          </div>
          <div className={styles.tagline}>We Clean, We Commit.</div>
        </div>
      </div>
    </footer>
  );
}
