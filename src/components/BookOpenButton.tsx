"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type BookOpenButtonProps = {
  className?: string;
  children: ReactNode;
  href?: string;
  /** Runs before navigation (e.g. close mobile nav). */
  onBeforeOpen?: () => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function BookOpenButton({
  className,
  children,
  href = "/book-now",
  onBeforeOpen,
  onClick,
  ...rest
}: BookOpenButtonProps) {
  return (
    <a
      href={href}
      className={className}
      {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onBeforeOpen?.();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
