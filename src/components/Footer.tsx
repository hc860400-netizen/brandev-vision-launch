import { Link } from "@tanstack/react-router";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL, INSTAGRAM_URL } from "@/lib/constants";
import { Calendar, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/brandev-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Brandev Solutions" className="h-8 w-8 rounded-lg" />
            <span className="font-semibold text-lg">Brandev<span className="text-[#3b82f6]">.</span></span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">Building the future, one app at a time.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><Link to="/services" className="hover:text-white">Mobile Apps</Link></li>
            <li><Link to="/services" className="hover:text-white">MVP Development</Link></li>
            <li><Link to="/services" className="hover:text-white">AI Integration</Link></li>
            <li><Link to="/services" className="hover:text-white">PWA</Link></li>
            <li><Link to="/services" className="hover:text-white">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-white">UX Design</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" title="Book a Call" aria-label="Book a Call"
              className="inline-flex items-center justify-center rounded-lg text-white/85 hover:text-white hover:bg-white/5 transition-colors"
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)" }}>
              <Calendar size={16} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-lg text-white/85 hover:text-white hover:bg-white/5 transition-colors"
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)" }}>
              <Linkedin size={16} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-lg text-white/85 hover:text-white hover:bg-white/5 transition-colors"
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)" }}>
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/45">
          <span>© 2025 Brandev Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
