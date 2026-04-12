"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Script from "next/script";
import styles from "./BookModal.module.css";

const BOOKING_IFRAME_SRC =
  "https://madeinwolls.bookingkoala.com/booknow?embed=true";
const BOOKING_EMBED_SCRIPT =
  "https://madeinwolls.bookingkoala.com/resources/embed.js";

type BookModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookModalContext = createContext<BookModalContextValue | null>(null);

export function useBookModal() {
  const ctx = useContext(BookModalContext);
  if (!ctx) {
    throw new Error("useBookModal must be used within BookModalProvider");
  }
  return ctx;
}

function BookModalView() {
  const { isOpen, close } = useBookModal();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={close}
      role="presentation"
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="book-modal-title" className={styles.title}>
            Book a clean
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={close}
            aria-label="Close booking"
          >
            ×
          </button>
        </div>
        <div className={styles.frameWrap}>
          <iframe
            src={BOOKING_IFRAME_SRC}
            className={styles.iframe}
            title="Book a cleaning appointment with Made in Wolls"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export function BookModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(
    () => ({ open, close, isOpen }),
    [open, close, isOpen],
  );

  return (
    <BookModalContext.Provider value={value}>
      <Script src={BOOKING_EMBED_SCRIPT} strategy="afterInteractive" />
      {children}
      <BookModalView />
    </BookModalContext.Provider>
  );
}
