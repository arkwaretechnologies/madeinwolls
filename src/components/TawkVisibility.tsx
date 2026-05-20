"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Routes where the chat bubble overlaps booking UI (e.g. summary total). */
const HIDE_TAWK_PATHS = ["/book-now"];

declare global {
  interface Window {
    Tawk_API?: {
      hideWidget?: () => void;
      showWidget?: () => void;
      onLoad?: () => void;
    };
  }
}

function shouldHideTawk(pathname: string) {
  return HIDE_TAWK_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function setTawkVisible(visible: boolean) {
  const api = window.Tawk_API;
  if (!api?.hideWidget || !api?.showWidget) return false;
  if (visible) api.showWidget();
  else api.hideWidget();
  return true;
}

function applyTawkVisibility(pathname: string) {
  const visible = !shouldHideTawk(pathname);
  if (setTawkVisible(visible)) return;

  window.Tawk_API = window.Tawk_API || {};
  const previousOnLoad = window.Tawk_API.onLoad;
  window.Tawk_API.onLoad = function () {
    previousOnLoad?.();
    setTawkVisible(visible);
  };
}

export default function TawkVisibility() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    applyTawkVisibility(pathname);
  }, [pathname]);

  return null;
}
