import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Music2 } from "lucide-react";
import { Logo } from "./Logo";

const socials = [
  { href: "https://facebook.com/RentAlertPH", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com/RentAlertPH", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/RentAlertPH", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com/@RentAlertPH", icon: Youtube, label: "YouTube" },
  { href: "https://tiktok.com/@RentAlertPH", icon: Music2, label: "TikTok" },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-24">
    <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="bg-white inline-flex p-2 rounded-lg"><Logo /></div>
        <p className="mt-4 text-sm text-primary-foreground/80 max-w-md">
          The go-to resource for Filipino landlords dealing with non-paying renters.
          Huwag mag-alala, may solusyon tayo!
        </p>
        <div className="mt-5 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-colors"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent">Explore</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link to="/resources" className="hover:text-accent">Resources</Link></li>
          <li><Link to="/legal-guide" className="hover:text-accent">Legal Guide</Link></li>
          <li><Link to="/community" className="hover:text-accent">Community</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent">Legal</h3>
        <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
          <li>RA 9653 — Rent Control Act</li>
          <li>Rule 70 — Ejectment</li>
          <li>Katarungang Pambarangay</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-tight py-6 text-xs text-primary-foreground/70 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} RentAlert PH. All rights reserved.</p>
        <p className="max-w-3xl">
          Disclaimer: RentAlert PH provides informational content only. This is not legal advice.
          Consult a licensed Philippine attorney for your specific situation.
        </p>
      </div>
    </div>
  </footer>
);