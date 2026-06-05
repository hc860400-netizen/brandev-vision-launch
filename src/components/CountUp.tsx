import { useEffect, useRef, useState } from "react";

export function CountUp({
  end,
  suffix = "",
  duration = 2000,
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const next = Math.round(end * eased);
        setVal(p >= 1 ? end : next);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    // Fallback: if already in viewport at mount but observer hasn't fired yet
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      // Give observer a tick; if it doesn't fire, force run
      const timer = setTimeout(() => run(), 200);
      return () => {
        clearTimeout(timer);
        io.disconnect();
        cancelAnimationFrame(raf);
      };
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
