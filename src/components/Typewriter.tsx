import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 40, className = "" }: { text: string; speed?: number; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);
  return (
    <span className={className}>
      {text.slice(0, i)}
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
    </span>
  );
}
