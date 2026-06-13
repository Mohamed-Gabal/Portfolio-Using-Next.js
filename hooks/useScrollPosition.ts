"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(threshold: number): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const handler = () => {
      setPassed(window.scrollY >= threshold);
    };

    handler(); // set initial state on mount
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return passed;
}