"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className={styles.questionText}>{item.question}</span>
            <span
              className={`${styles.chevron} ${openIndex === index ? styles.chevronOpen : ""}`}
            >
              ▾
            </span>
          </button>
          <div
            className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ""}`}
          >
            <div className={styles.answerInner}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
