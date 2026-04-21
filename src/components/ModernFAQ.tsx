"use client";

import { useState } from "react";
import styles from "./ModernFAQ.module.css";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

interface FAQItem {
  question: string;
  answer: string;
}

interface ModernFAQProps {
  items: FAQItem[];
}

export default function ModernFAQ({ items }: ModernFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqGrid}>
        {items.map((item, index) => (
          <FadeIn
            key={index}
            variant="up"
            delay={0.05 * index}
            className={`${styles.faqCard} ${openIndex === index ? styles.activeCard : ""}`}
          >
            <button
              className={styles.questionButton}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <div className={styles.questionHeader}>
                <div className={styles.iconWrapper}>
                  <Icon name={openIndex === index ? "minus" : "plus"} size={18} />
                </div>
                <h3 className={styles.questionText}>{item.question}</h3>
              </div>
            </button>
            
            <div
              className={`${styles.answerWrapper} ${openIndex === index ? styles.answerVisible : ""}`}
            >
              <div className={styles.answerContent}>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
