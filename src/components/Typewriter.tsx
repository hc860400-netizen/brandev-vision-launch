import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 55,
  startDelay = 300,
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  // null = not started yet → render full text (SSR/no-JS safe, no FOUC)
  const [i, setI] = useState<number | null>(null);

  useEffect(() => {
    const start = setTimeout(() => setI(0), startDelay);
    return () => clearTimeout(start);
  }, [startDelay]);

  useEffect(() => {
    if (i === null) return;
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);

  const started = i !== null;
  const done = started && i >= text.length;
  const shown = started ? text.slice(0, i!) : text;
  const hidden = started ? text.slice(i!) : "";

  return (
    <span className={className}>
      {shown}
      {/* preserve layout while typing, prevent jump */}
      {started && !done && (
        <span aria-hidden style={{ opacity: 0 }}>{hidden}</span>
      )}
      {started && !done && (
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: "0.08em",
            marginLeft: "0.06em",
            background: "#3b82f6",
            height: "0.95em",
            verticalAlign: "-0.12em",
            animation: "blink 1s steps(1) infinite",
          }}
        />
      )}
    </span>
  );
}
