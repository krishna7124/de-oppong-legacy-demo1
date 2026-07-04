import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="School crest" className="h-14 w-14 bg-white/10 rounded-lg p-1" />
            <div>
              <div className="font-display font-bold">De Oppong Montessori</div>
              <div className="text-xs text-primary-foreground/70">Since 2019</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            Nurturing young minds and building bright futures in a safe, caring, and academically excellent environment.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gold transition">Academics</Link></li>
            <li><Link to="/school-life" className="hover:text-gold transition">School Life</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link to="/admissions" className="hover:text-gold transition">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Amamorley, Ga North Municipal, Greater Accra, Ghana</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> <a href="tel:+233244527406" className="hover:text-gold">+233 244 527 406</a></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> <a href="tel:+233549775212" className="hover:text-gold">+233 549 775 212</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> info@deoppongmontessori.edu.gh</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-primary transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-primary transition"><Instagram className="h-4 w-4" /></a>
          </div>
          <a
            href="https://wa.me/233244527406"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-95"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} De Oppong Montessori School. All rights reserved.</p>
          <p className="italic">"Your Education, Our Concern"</p>
        </div>
      </div>
    </footer>
  );
}
