"use client";

import { motion, useSpring, useTransform, type MotionValue } from "framer-motion";

interface Props {
  /** The zoom MotionValue from the page (ranges 0 → total-1) */
  zoom: MotionValue<number>;
  total: number;
}

export function ScrollProgress({ zoom, total }: Props) {
  const scaleX = useTransform(zoom, [0, total - 1], [0, 1]);
  const smoothScaleX = useSpring(scaleX, { stiffness: 160, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX: smoothScaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[80] h-[2px]
                 bg-gradient-to-r from-primary via-accent to-primary
                 shadow-[0_0_18px_var(--color-primary)]"
      aria-hidden
    />
  );
}
