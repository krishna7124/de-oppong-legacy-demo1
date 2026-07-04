import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap, Shield, Award, HeartHandshake, Users, Sparkles,
  ArrowRight, Play, Star, MapPin, Phone, CheckCircle2, ChevronRight,
  BookOpen, Trophy, Music, Palette, Quote,
} from "lucide-react";
import hero from "@/assets/hero-students.jpg";
import founder from "@/assets/founder.jpg";
import creche from "@/assets/creche.jpg";
import nursery from "@/assets/nursery.jpg";
import kindergarten from "@/assets/kindergarten.jpg";
import primary from "@/assets/primary.jpg";
import jhs from "@/assets/jhs.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import graduation from "@/assets/graduation.jpg";
import campus from "@/assets/campus.jpg";
import logo from "@/assets/logo.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const levels = [
  { name: "Crèche", age: "3 months – 2 yrs", img: creche, blurb: "Loving care and sensory play in a secure, home-like environment.", skills: ["Sensory play", "Motor skills", "Bonding"] },
  { name: "Nursery", age: "2 – 3 yrs", img: nursery, blurb: "Discovery through Montessori materials, songs, art, and story time.", skills: ["Language", "Creativity", "Social play"] },
  { name: "Kindergarten", age: "4 – 5 yrs", img: kindergarten, blurb: "Reading, numeracy and confidence built through guided exploration.", skills: ["Phonics", "Numeracy", "Confidence"] },
  { name: "Primary", age: "6 – 11 yrs", img: primary, blurb: "Strong academic foundations paired with character and leadership.", skills: ["Core academics", "Leadership", "Discipline"] },
  { name: "Junior High", age: "12 – 15 yrs", img: jhs, blurb: "BECE preparation, science, ICT and pathway to top secondary schools.", skills: ["Science & ICT", "Critical thinking", "BECE ready"] },
];

const whyUs = [
  { icon: GraduationCap, title: "Qualified Teachers", body: "Trained, caring educators who know each child by name." },
  { icon: Shield, title: "Safe Environment", body: "Secure campus, careful supervision, and child-first policies." },
  { icon: Award, title: "Academic Excellence", body: "A proven curriculum that builds mastery from crèche to JHS." },
  { icon: HeartHandshake, title: "Moral Training", body: "Discipline, respect and integrity woven into daily life." },
  { icon: Users, title: "Leadership Development", body: "Clubs, prefects and speaking opportunities that grow confidence." },
  { icon: Sparkles, title: "Child-Centered Learning", body: "Hands-on Montessori methods that follow each child's pace." },
];

const testimonials = [
  { name: "Mrs. Adjoa Mensah", child: "Parent, Primary 3", quote: "My daughter has grown so confident. The teachers truly know her and celebrate her progress every week.", rating: 5 },
  { name: "Mr. Kwame Boateng", child: "Parent, KG 2", quote: "A safe, warm, and disciplined environment. We can see the character formation, not just academics.", rating: 5 },
  { name: "Mrs. Efua Owusu", child: "Parent, JHS 1", quote: "The Montessori foundation gave my son a real love for learning. He arrived at JHS ready to lead.", rating: 5 },
];

const events = [
  { date: "15 Jul", title: "Open Day & Campus Tour", desc: "Meet our teachers and walk through classrooms with your child." },
  { date: "02 Aug", title: "Speech & Prize Giving", desc: "Celebrating our top-performing pupils across every level." },
  { date: "20 Aug", title: "New Term Begins", desc: "Fresh start, new opportunities. Uniform check and orientation." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Happy pupils learning at De Oppong Montessori" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container-page relative py-24 md:py-36 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Since 2019 · Amamorley, Ga North
            </div>
            <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[1.02]">
              Nurturing Young Minds, <span className="text-gradient-gold">Building Bright Futures</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Since 2019, De Oppong Montessori School has provided quality education in a safe, caring, and inspiring
              environment where every child is encouraged to learn, grow, and succeed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/admissions" className="group inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-bold shadow-[var(--shadow-gold)] hover:opacity-95 transition">
                Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-4 text-sm font-semibold hover:bg-white/20 transition">
                <Play className="h-4 w-4" /> Book a School Visit
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { n: 6, s: "+", l: "Years of Excellence" },
                { n: 5, s: "", l: "Levels: Crèche → JHS" },
                { n: 500, s: "+", l: "Happy Pupils" },
                { n: 100, s: "%", l: "Parent Satisfaction" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-gold"><Counter end={s.n} suffix={s.s} /></div>
                  <div className="text-xs md:text-sm text-primary-foreground/80 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src={logo} alt="" aria-hidden className="hidden md:block absolute right-8 bottom-8 h-28 w-28 opacity-30 animate-float" />
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-cream">
        <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs md:text-sm font-medium text-muted-foreground">
          {["Founded 2019", "Crèche to JHS", "Experienced Teachers", "Safe Environment", "Academic Excellence"].map((t) => (
            <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t}</div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Why Choose Us</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">A school parents trust, children love.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Six commitments that shape everyday life at De Oppong Montessori.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-elegant)]">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STUDENT JOURNEY */}
      <section className="bg-gradient-to-b from-cream to-background py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Student Journey</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">From first steps to bright futures.</h2>
            <p className="mt-4 text-muted-foreground text-lg">A carefully designed pathway from crèche through junior high — each stage building on the last.</p>
          </Reveal>

          <div className="mt-16 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary/40 md:-translate-x-1/2" />
            <div className="space-y-10 md:space-y-16">
              {levels.map((lv, i) => (
                <Reveal key={lv.name} delay={i * 60}>
                  <div className={`relative grid md:grid-cols-2 gap-6 md:gap-14 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="pl-16 md:pl-0">
                      <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 h-5 w-5 rounded-full bg-gold ring-4 ring-background shadow-[var(--shadow-gold)]" />
                      <div className="rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover-lift">
                        <div className="flex items-center gap-3">
                          <span className="text-gold font-display font-bold text-4xl">0{i + 1}</span>
                          <div>
                            <h3 className="font-display font-bold text-2xl">{lv.name}</h3>
                            <p className="text-sm text-muted-foreground">{lv.age}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-muted-foreground leading-relaxed">{lv.blurb}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {lv.skills.map((s) => (
                            <span key={s} className="text-xs font-medium rounded-full bg-primary/10 text-primary px-3 py-1">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pl-16 md:pl-0">
                      <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] aspect-[4/3]">
                        <img src={lv.img} alt={lv.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl bg-gold/25 -z-10" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-2xl bg-primary/15 -z-10" />
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/5]">
                <img src={founder} alt="Mrs. Perpetual Oppong, Founder" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl bg-background/95 backdrop-blur px-5 py-4 shadow-lg border border-border">
                <div className="font-display font-bold text-primary">Mrs. Perpetual Oppong</div>
                <div className="text-xs text-muted-foreground">Founder & Proprietress</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Founder's Story</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">A Vision Built on Care and Excellence</h2>
            <Quote className="mt-6 h-8 w-8 text-gold" />
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              De Oppong Montessori School was founded in 2019 with a dream of creating a safe, nurturing, and
              academically excellent environment where every child can discover their full potential and prepare for a
              successful future.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every classroom, every lesson, every conversation is shaped by that dream — because your child's
              education is our concern.
            </p>
            <p className="mt-8 font-display italic text-2xl text-primary" style={{ fontFamily: "'Brush Script MT', cursive" }}>Perpetual Oppong</p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold transition">
                Read the full story <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-hero-gradient text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        <div className="container-page relative grid gap-8 md:grid-cols-2">
          {[
            { t: "Our Vision", body: "To become one of the best schools in Ghana by raising confident, responsible, and successful learners.", i: Sparkles },
            { t: "Our Mission", body: "To provide quality education that develops every child academically, socially, morally, and emotionally.", i: HeartHandshake },
          ].map((m, i) => (
            <Reveal key={m.t} delay={i * 120}>
              <div className="h-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-10 hover:bg-white/15 transition">
                <m.i className="h-10 w-10 text-gold" />
                <h3 className="mt-6 font-display font-bold text-3xl">{m.t}</h3>
                <p className="mt-4 text-primary-foreground/90 text-lg leading-relaxed">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-page py-24">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Academic Programs</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">Programs for every stage of growth.</h2>
          </div>
          <Link to="/academics" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold self-start">
            View all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {levels.map((lv, i) => (
            <Reveal key={lv.name} delay={i * 60}>
              <div className="group h-full rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={lv.img} alt={lv.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold text-gold uppercase tracking-wider">{lv.age}</div>
                  <h3 className="mt-1 font-display font-bold text-lg">{lv.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{lv.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SCHOOL LIFE */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">School Life</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">More than lessons — a full life.</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-2 md:h-[520px]">
            {[
              { img: sports, label: "Sports", icon: Trophy, span: "md:col-span-3 md:row-span-2" },
              { img: arts, label: "Arts & Music", icon: Music, span: "md:col-span-2" },
              { img: graduation, label: "Graduation", icon: GraduationCap, span: "md:col-span-1" },
              { img: kindergarten, label: "Clubs", icon: BookOpen, span: "md:col-span-1" },
              { img: nursery, label: "Creativity", icon: Palette, span: "md:col-span-2" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className={`group relative rounded-2xl overflow-hidden ${s.span}`}>
                <div className="absolute inset-0">
                  <img src={s.img} alt={s.label} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                </div>
                <div className="relative h-full min-h-40 p-5 flex items-end text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <s.icon className="h-5 w-5 text-gold" />
                    <span className="font-display font-bold text-lg">{s.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Parent Testimonials</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">Loved by families across Amamorley.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover-lift flex flex-col">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold" />)}
                </div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed italic flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-bold">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.child}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWS & EVENTS */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">News & Events</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">What's happening at school.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <article className="h-full rounded-2xl bg-card border border-border overflow-hidden hover-lift">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-6 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold font-semibold">Upcoming</div>
                      <div className="font-display font-bold text-2xl mt-1">{e.date}</div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gold/25 grid place-items-center">
                      <Sparkles className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS PROCESS */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Admissions</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">Five steps to join our family.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {[
            "Contact School", "Visit Campus", "Complete Application", "Assessment", "Enrollment",
          ].map((step, i) => (
            <Reveal key={step} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 relative hover-lift">
                <div className="text-gold font-display font-bold text-5xl leading-none opacity-80">0{i + 1}</div>
                <div className="mt-4 font-display font-bold text-lg">{step}</div>
                {i < 4 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-bold shadow-[var(--shadow-elegant)] hover:opacity-95">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-7 py-4 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
            Download Admission Form
          </a>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={campus} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/75" />
        </div>
        <div className="container-page relative text-primary-foreground grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Visit Us</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">Come see the school in person.</h2>
            <p className="mt-4 text-primary-foreground/85 text-lg">Book a tour and experience the warmth and care of our campus.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5 text-gold" /> Amamorley, Ga North Municipal,<br/>Greater Accra Region, Ghana</div>
              <div className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5 text-gold" /> <a href="tel:+233244527406" className="hover:text-gold">+233 244 527 406</a> · <a href="tel:+233549775212" className="hover:text-gold">+233 549 775 212</a></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/233244527406" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-bold hover:opacity-95">Chat on WhatsApp</a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/20">Contact Form</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-[var(--shadow-elegant)] aspect-video bg-black/20">
            <iframe
              title="School location"
              src="https://www.google.com/maps?q=Amamorley,+Ga+North+Municipal,+Ghana&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
