import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | De Oppong Montessori School" },
      { name: "description", content: "Contact De Oppong Montessori School in Amamorley, Ga North Municipal. Call, WhatsApp, or send us a message." },
      { property: "og:title", content: "Contact — De Oppong Montessori" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="We would love to hear from you." subtitle="Reach out with any question — admissions, tours, or general enquiries." />
      <section className="container-page py-20 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            {[
              { i: MapPin, t: "Address", v: "Amamorley, Ga North Municipal,\nGreater Accra Region, Ghana" },
              { i: Phone, t: "Phone", v: "+233 244 527 406\n+233 549 775 212" },
              { i: Mail, t: "Email", v: "info@deoppongmontessori.edu.gh" },
              { i: MessageCircle, t: "WhatsApp", v: "+233 244 527 406" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground shrink-0">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold">{c.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{c.v}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Amamorley,+Ga+North+Municipal,+Ghana&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              (e.target as HTMLFormElement).reset();
              setTimeout(() => setSent(false), 4000);
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] space-y-5"
          >
            <h2 className="font-display font-bold text-2xl">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone</span>
                <input required type="tel" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Subject</span>
              <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary">
                <option>Admissions Enquiry</option>
                <option>Book a Campus Visit</option>
                <option>General Enquiry</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-95">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="text-sm text-primary font-medium">Thank you! We'll be in touch shortly.</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}
