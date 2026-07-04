import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Phone, MapPin, Download, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | De Oppong Montessori School" },
      { name: "description", content: "How to apply to De Oppong Montessori School — from your first call to enrollment." },
      { property: "og:title", content: "Admissions — De Oppong Montessori School" },
    ],
  }),
  component: Admissions,
});

const steps = [
  { t: "Contact School", d: "Call or WhatsApp us to introduce your family and ask any questions." },
  { t: "Visit Campus", d: "Tour our classrooms, meet a teacher, and see the environment first-hand." },
  { t: "Complete Application", d: "Fill in the admission form and submit required documents." },
  { t: "Assessment", d: "A gentle age-appropriate assessment for placement." },
  { t: "Enrollment", d: "Pay fees, receive your welcome pack, and prepare for a great start." },
];

const requirements = [
  "Completed admission form",
  "Copy of child's birth certificate",
  "2 recent passport-size photos",
  "Immunisation / health record",
  "Previous school report (if applicable)",
  "Parent/guardian ID copy",
];

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="We would love to meet your family." subtitle="A simple, welcoming process to help your child begin the journey.">
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="tel:+233244527406" className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-bold"><Phone className="h-4 w-4" /> Call Admissions</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold"><Download className="h-4 w-4" /> Download Form</a>
        </div>
      </PageHero>

      <section className="container-page py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">The Process</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">From first hello to first day.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 relative hover-lift">
                <div className="text-gold font-display font-bold text-5xl leading-none opacity-80">0{i + 1}</div>
                <h3 className="mt-4 font-display font-bold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Requirements</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">What to bring.</h2>
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>{r}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-10 shadow-[var(--shadow-elegant)]">
              <h3 className="font-display font-bold text-3xl">Ready to apply?</h3>
              <p className="mt-4 text-primary-foreground/85">Our admissions team is available Monday to Friday, 8am – 4pm.</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex gap-3 items-start"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Amamorley, Ga North Municipal, Greater Accra</div>
                <div className="flex gap-3 items-start"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +233 244 527 406</div>
                <div className="flex gap-3 items-start"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +233 549 775 212</div>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-bold hover:opacity-95">
                Book a Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
