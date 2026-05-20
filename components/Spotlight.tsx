import React, {
  useRef,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
  type MouseEvent,
  type TouchEvent,
} from "react";

// ---------------------------------------------------------------------------
// Single-card Spotlight — local mouse/touch tracking on one element
// ---------------------------------------------------------------------------

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px */
  radius?: number;
  /** Color token: "primary" (cyan) | "accent" (purple) */
  color?: "primary" | "accent";
}

export function Spotlight({
  children,
  className = "",
  radius = 420,
  color = "primary",
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const applyCoords = (cx: number, cy: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${cx - r.left}px`);
    el.style.setProperty("--my", `${cy - r.top}px`);
  };

  const colorVar =
    color === "accent" ? "var(--color-accent)" : "var(--color-primary)";

  return (
    <div
      ref={ref}
      onMouseMove={(e: MouseEvent) => applyCoords(e.clientX, e.clientY)}
      onTouchMove={(e: TouchEvent) => applyCoords(e.touches[0].clientX, e.touches[0].clientY)}
      className={`group/spot relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(${radius}px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, ${colorVar} 18%, transparent), transparent 60%)`,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SpotlightText — radial gradient painted as text fill
// ---------------------------------------------------------------------------

interface SpotlightTextProps {
  children: ReactNode;
  className?: string;
  radius?: number;
  color?: "primary" | "accent";
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export function SpotlightText({
  children,
  className = "",
  radius = 220,
  color = "primary",
  as: Tag = "span",
}: SpotlightTextProps) {
  const ref = useRef<HTMLElement>(null);

  const applyCoords = (cx: number, cy: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${cx - r.left}px`);
    el.style.setProperty("--my", `${cy - r.top}px`);
  };

  const colorVar =
    color === "accent" ? "var(--color-accent)" : "var(--color-primary)";

  return (
    <Tag
      // @ts-expect-error generic ref on polymorphic tag
      ref={ref}
      onMouseMove={(e: MouseEvent) => applyCoords(e.clientX, e.clientY)}
      onTouchMove={(e: TouchEvent) => applyCoords(e.touches[0].clientX, e.touches[0].clientY)}
      className={className}
      style={{
        backgroundImage: `radial-gradient(${radius}px circle at var(--mx,50%) var(--my,50%), ${colorVar} 0%, var(--color-foreground) 70%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// SpotlightGrid + SpotlightCard — one shared light source across a grid
//
// SpotlightGrid tracks clientX/Y and broadcasts to every SpotlightCard via a
// stable Set of listeners (no React state → zero re-renders on mouse/touch move).
// Each SpotlightCard independently converts client coords to its own local
// coords and writes them as CSS custom properties.
// ---------------------------------------------------------------------------

type GridListeners = Set<(cx: number, cy: number) => void>;
const GridSpotlightCtx = createContext<GridListeners | null>(null);

interface SpotlightGridProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onTouchStart?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
}

export function SpotlightGrid({
  children,
  className = "",
  style,
  onTouchStart,
  onTouchEnd: onTouchEndProp,
}: SpotlightGridProps) {
  const listeners = useRef<GridListeners>(new Set());

  const broadcast = (cx: number, cy: number) =>
    listeners.current.forEach((fn) => fn(cx, cy));

  const onTouchEnd = (e: TouchEvent) => {
    // Push spotlight off-screen so it hides when finger lifts
    broadcast(-99999, -99999);
    onTouchEndProp?.(e);
  };

  return (
    <GridSpotlightCtx.Provider value={listeners.current}>
      <div
        onMouseMove={(e: MouseEvent) => broadcast(e.clientX, e.clientY)}
        onTouchMove={(e: TouchEvent) => broadcast(e.touches[0].clientX, e.touches[0].clientY)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={className}
        style={style}
      >
        {children}
      </div>
    </GridSpotlightCtx.Provider>
  );
}

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  radius?: number;
  color?: "primary" | "accent";
}

export function SpotlightCard({
  children,
  className = "",
  radius = 280,
  color = "primary",
}: SpotlightCardProps) {
  const listeners = useContext(GridSpotlightCtx);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listeners) return;
    const handler = (cx: number, cy: number) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${cx - r.left}px`);
      el.style.setProperty("--my", `${cy - r.top}px`);
    };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, [listeners]);

  const colorVar =
    color === "accent" ? "var(--color-accent)" : "var(--color-primary)";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(${radius}px circle at var(--mx,-9999px) var(--my,-9999px), color-mix(in oklab, ${colorVar} 18%, transparent), transparent 60%)`,
      }}
    >
      {children}
    </div>
  );
}
