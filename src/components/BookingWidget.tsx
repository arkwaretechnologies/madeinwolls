"use client";

import { useEffect, useRef } from "react";
import styles from "./BookingWidget.module.css";

const BOOKING_IFRAME_SRC =
  "https://madeinwolls.bookingkoala.com/booknow?embed=true";
const BOOKING_EMBED_SCRIPT =
  "https://madeinwolls.bookingkoala.com/resources/embed.js";
const BOOKING_IFRAME_ID = "iFrameResizer0";

type IframeResizeApi = {
  close?: () => void;
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

export default function BookingWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isBoundRef = useRef(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let pollId: ReturnType<typeof setInterval> | undefined;

    const bindIframeResize = () => {
      if (isBoundRef.current) return true;
      if (typeof window.iFrameResize !== "function") return false;
      try {
        window.iFrameResize(
          {
            checkOrigin: false,
            heightCalculationMethod: "bodyOffset",
          },
          iframe,
        );
      } catch {
        /* noop */
      }
      const isBound = !!getIframeBridge(iframe).iFrameResizer;
      if (isBound) isBoundRef.current = true;
      return isBound;
    };

    const onIframeLoad = () => {
      bindIframeResize();
    };

    iframe.addEventListener("load", onIframeLoad);

    const selector = `script[src="${BOOKING_EMBED_SCRIPT}"]`;
    if (!document.querySelector(selector)) {
      const s = document.createElement("script");
      s.src = BOOKING_EMBED_SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }

    let attempts = 0;
    pollId = setInterval(() => {
      attempts += 1;
      if (bindIframeResize() || attempts > 45) {
        if (pollId) clearInterval(pollId);
      }
    }, 150);

    return () => {
      iframe.removeEventListener("load", onIframeLoad);
      if (pollId) clearInterval(pollId);
      try {
        getIframeBridge(iframe).iFrameResizer?.close?.();
      } catch {
        /* noop */
      }
      isBoundRef.current = false;
    };
  }, []);

  return (
    <div className={styles.widgetShell}>
      <iframe
        ref={iframeRef}
        id={BOOKING_IFRAME_ID}
        src={BOOKING_IFRAME_SRC}
        className={styles.iframe}
        title="Book a cleaning appointment with Made in Wolls"
        width="100%"
        loading="lazy"
      />
    </div>
  );
}
