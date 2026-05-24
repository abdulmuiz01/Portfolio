import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  trigger?: "mount" | "view";
}

export function TextScramble({ text, className, delay = 0, trigger = "mount" }: Props) {
  const [out, setOut] = useState(text.replace(/\S/g, " "));
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    started.current = false;

    const start = () => {
      if (started.current) return;
      started.current = true;

      const from = ref.current?.innerHTML.replace(/<[^>]*>/g, "") ?? out;
      const to = text;
      const length = Math.max(from.length, to.length);
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
      for (let i = 0; i < length; i++) {
        const f = from[i] || "";
        const t = to[i] || "";
        const s = Math.floor(Math.random() * 30);
        const e = s + Math.floor(Math.random() * 30);
        queue.push({ from: f, to: t, start: s, end: e });
      }
      let frame = 0;
      let raf = 0;
      const update = () => {
        let output = "";
        let complete = 0;
        for (const q of queue) {
          if (frame >= q.end) {
            complete++;
            output += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) {
              q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            output += `<span style="opacity:.55;color:var(--color-primary)">${q.char}</span>`;
          } else {
            output += q.from;
          }
        }
        if (ref.current) ref.current.innerHTML = output;
        if (complete === queue.length) {
          setOut(to);
          return;
        }
        frame++;
        raf = requestAnimationFrame(update);
      };
      update();
      return () => cancelAnimationFrame(raf);
    };

    if (trigger === "mount") {
      const id = window.setTimeout(start, delay);
      return () => window.clearTimeout(id);
    }

    const el = ref.current;
    if (!el) return;

    // If already visible (e.g. language was switched while section is shown), run immediately
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      start();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(start, delay);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {out}
    </span>
  );
}
