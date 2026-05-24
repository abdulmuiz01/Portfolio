"use client";

import { useRef, type ReactNode, type MouseEvent, type TouchEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { dragState } from "@/lib/dragState";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const transform = useTransform(
    [srx, sry],
    ([a, b]) => `perspective(1200px) rotateX(${a}deg) rotateY(${b}deg)`
  );

  const applyTilt = (cx: number, cy: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rx.set(-((cy - r.top)  / r.height - 0.5) * 14);
    ry.set( ((cx - r.left) / r.width  - 0.5) * 14);
  };

  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e: MouseEvent) => applyTilt(e.clientX, e.clientY)}
      onMouseLeave={reset}
      onTouchMove={(e: TouchEvent) => { dragState.active = true; applyTilt(e.touches[0].clientX, e.touches[0].clientY); }}
      onTouchEnd={reset}
      style={{ transform }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
