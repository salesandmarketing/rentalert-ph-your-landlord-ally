import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/resources", label: "Resources" },
  { to: "/legal-guide", label: "Legal Guide" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="container-tight flex h-16 items-center justify-between" aria-label="Primary">
        <Logo />
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="accent" size="sm" className="ml-3">
            <NavLink to="/resources">Free Legal Guide</NavLink>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-base font-medium ${
                    isActive ? "bg-secondary text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};