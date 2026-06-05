import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
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
            <li>Mobile Apps</li>
            <li>MVP Development</li>
            <li>AI Integration</li>
            <li>PWA</li>
            <li>Web Development</li>
            <li>UX Design</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
          </ul>
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
