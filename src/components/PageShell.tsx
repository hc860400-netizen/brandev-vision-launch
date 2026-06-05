import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: "#0a0f1e" }}>
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
