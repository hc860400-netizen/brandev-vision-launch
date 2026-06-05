import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Variant = "fade-up" | "slide-left" | "slide-right" | "fade-in";

const variantClass: Record<Variant, string> = {
  "fade-up": "animate-fade-up",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "fade-in": "animate-fade-in",
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = { animationDelay: `${delay}ms` };

  const Comp = As as any;
  return (
    <Comp
      ref={ref as any}
      style={seen ? style : { opacity: 0 }}
      className={`${seen ? variantClass[variant] : ""} ${className}`}
    >
      {children}
    </Comp>
  );
}
