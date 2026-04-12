"use client";

import { BookModalProvider } from "./BookModalProvider";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <BookModalProvider>{children}</BookModalProvider>;
}
