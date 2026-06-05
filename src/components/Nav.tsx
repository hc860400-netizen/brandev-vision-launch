import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/brandev-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoAsset.url} alt="Brandev Solutions" className="h-8 w-8 rounded-lg" />
          <span className="font-semibold tracking-tight text-lg">Brandev<span className="text-[#3b82f6]">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-white/75 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-primary-hover hidden md:inline-flex text-sm py-2 px-4"
        >
          Book a Call
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden nav-blur border-t border-white/10">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-1"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-primary-hover text-sm mt-2"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
