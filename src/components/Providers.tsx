"use client";

import type { ReactNode } from "react";
import TawkVisibility from "@/components/TawkVisibility";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <TawkVisibility />
      {children}
    </>
  );
}
