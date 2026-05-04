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
import styles from "./BookModal.module.css";

const BOOKING_IFRAME_SRC =
  "https://madeinwolls.bookingkoala.com/booknow?embed=true";
const BOOKING_EMBED_SCRIPT =
  "https://madeinwolls.bookingkoala.com/resources/embed.js";

/** BK embed.js expects this id for scroll helpers (`setPopupPosi`, etc.) */
const BOOKING_IFRAME_ID = "iFrameResizer0";

type IframeResizeApi = {
  close?: () => void;
  resize?: () => void;
};

declare global {
  interface Window {
    iFrameResize?: (
      options: {
        checkOrigin?: boolean;
        heightCalculationMethod?: string;
        resizedCallback?: () => void;
      },
      iframe: HTMLIFrameElement,
    ) => void;
  }
}

function getIframeBridge(iframe: HTMLIFrameElement | null) {
  return iframe as HTMLIFrameElement & { iFrameResizer?: IframeResizeApi };
}

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
  const frameWrapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  /**
   * Booking Koala's embed listens to *window* scroll and postMessages `bodyscroll`
   * into the iframe so the booking summary can stick. Our modal scrolls `.frameWrap`
   * instead, so we mirror that behaviour here (same payload shape as BK's winScroll).
   */
  const syncBookingIframeScroll = useCallback(() => {
    const wrap = frameWrapRef.current;
    const iframe = iframeRef.current;
    const cw = iframe?.contentWindow;
    if (!wrap || !cw) return;

    let t = iframe.offsetTop;
    const scrollTop = wrap.scrollTop;
    const h =
      wrap.clientHeight ||
      Math.min(window.innerHeight, window.screen.availHeight - 90);

    const marginTop = parseInt(
      window.getComputedStyle(document.body).getPropertyValue("margin-top"),
      10,
    );
    if (!Number.isNaN(marginTop) && marginTop > 0) {
      t += marginTop;
    }

    const posi = scrollTop > t ? scrollTop - t : 0;

    cw.postMessage(
      {
        bodyscroll: true,
        posi,
        top: t,
        scrollTop,
        height: h,
      },
      "*",
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const iframe = iframeRef.current;
    const wrap = frameWrapRef.current;
    if (!iframe || !wrap) return;

    let pollId: ReturnType<typeof setInterval> | undefined;

    const bindIframeResize = () => {
      const bridge = getIframeBridge(iframe);
      if (bridge.iFrameResizer) return true;
      if (typeof window.iFrameResize !== "function") return false;
      try {
        window.iFrameResize(
          {
            checkOrigin: false,
            heightCalculationMethod: "bodyOffset",
            resizedCallback: syncBookingIframeScroll,
          },
          iframe,
        );
      } catch {
        /* already bound elsewhere */
      }
      return !!getIframeBridge(iframe).iFrameResizer;
    };

    const onIframeLoad = () => {
      bindIframeResize();
      syncBookingIframeScroll();
      requestAnimationFrame(() => {
        getIframeBridge(iframe).iFrameResizer?.resize?.();
        syncBookingIframeScroll();
      });
    };

    iframe.addEventListener("load", onIframeLoad);

    let attempts = 0;
    if (!bindIframeResize()) {
      pollId = setInterval(() => {
        attempts += 1;
        if (bindIframeResize()) {
          syncBookingIframeScroll();
          if (pollId) clearInterval(pollId);
        } else if (attempts > 45) {
          if (pollId) clearInterval(pollId);
        }
      }, 150);
    }

    wrap.addEventListener("scroll", syncBookingIframeScroll, { passive: true });
    const ro = new ResizeObserver(() => {
      getIframeBridge(iframe).iFrameResizer?.resize?.();
      syncBookingIframeScroll();
    });
    ro.observe(wrap);

    const onWinResize = () => {
      getIframeBridge(iframe).iFrameResizer?.resize?.();
      syncBookingIframeScroll();
    };
    window.addEventListener("resize", onWinResize);

    return () => {
      iframe.removeEventListener("load", onIframeLoad);
      wrap.removeEventListener("scroll", syncBookingIframeScroll);
      window.removeEventListener("resize", onWinResize);
      ro.disconnect();
      if (pollId) clearInterval(pollId);
      try {
        getIframeBridge(iframe).iFrameResizer?.close?.();
      } catch {
        /* noop */
      }
    };
  }, [isOpen, syncBookingIframeScroll]);

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
        <div ref={frameWrapRef} className={styles.frameWrap}>
          <iframe
            ref={iframeRef}
            id={BOOKING_IFRAME_ID}
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
  const embedInjectedRef = useRef(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(
    () => ({ open, close, isOpen }),
    [open, close, isOpen],
  );

  /**
   * Load BK embed only after the modal opens so `#iFrameResizer0` exists when the
   * script runs (BK caches `fe = getElementById(...)` at parse time). Avoids window
   * scroll handlers touching a null iframe on the rest of the site.
   */
  useEffect(() => {
    if (!isOpen || embedInjectedRef.current) return;
    const selector = `script[src="${BOOKING_EMBED_SCRIPT}"]`;
    if (document.querySelector(selector)) {
      embedInjectedRef.current = true;
      return;
    }
    embedInjectedRef.current = true;
    const s = document.createElement("script");
    s.src = BOOKING_EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, [isOpen]);

  return (
    <BookModalContext.Provider value={value}>
      {children}
      <BookModalView />
    </BookModalContext.Provider>
  );
}
