"use client";

import { useEffect, useState } from "react";

/** Auto-advances an index 0..length-1; pauses when the user prefers reduced motion. */
export function useCycle(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [length, intervalMs, paused]);

  return { index, setIndex, setPaused };
}
