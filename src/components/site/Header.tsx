import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/school-life", label: "School Life" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="De Oppong Montessori School crest" className="h-16 w-16 shrink-0" />
          <div className="min-w-0 leading-tight">
            <div className="font-display font-bold text-primary text-[15px] sm:text-base truncate">
              De Oppong Montessori
            </div>
            <div className="text-[11px] text-muted-foreground truncate">Your Education, Our Concern</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary bg-primary/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-95 transition"
          >
            Apply Now
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium rounded-md hover:bg-muted"
                activeProps={{ className: "text-primary bg-primary/5" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
            >
              Apply Now
            </Link>
            <a
              href="tel:+233244527406"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> +233 244 527 406
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
