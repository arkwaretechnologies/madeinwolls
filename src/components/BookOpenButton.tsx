"use client";

import { useBookModal } from "./BookModalProvider";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type BookOpenButtonProps = {
  className?: string;
  children: ReactNode;
  /** Runs before the modal opens (e.g. close mobile nav). */
  onBeforeOpen?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export default function BookOpenButton({
  className,
  children,
  onBeforeOpen,
  onClick,
  ...rest
}: BookOpenButtonProps) {
  const { open } = useBookModal();

  return (
    <button
      type="button"
      className={className}
      {...rest}
      onClick={(e) => {
        onBeforeOpen?.();
        onClick?.(e);
        open();
      }}
    >
      {children}
    </button>
  );
}
