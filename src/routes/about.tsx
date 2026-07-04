import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Quote, Sparkles, HeartHandshake, Award, Users, Shield, GraduationCap } from "lucide-react";
import founder from "@/assets/founder.jpg";
import campus from "@/assets/campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About De Oppong Montessori School | Our Story & Values" },
      { name: "description", content: "Founded in 2019 by Mrs. Perpetual Oppong, De Oppong Montessori serves families in Amamorley with quality, character-first education." },
      { property: "og:title", content: "About De Oppong Montessori School" },
      { property: "og:description", content: "Our story, mission, vision and values." },
      { property: "og:image", content: campus },
    ],
  }),
  component: About,
});

const values = [
  { i: Award, t: "Excellence", b: "We hold ourselves to the highest academic standards." },
  { i: HeartHandshake, t: "Care", b: "Every child is known, valued and supported." },
  { i: Shield, t: "Discipline", b: "Respect and responsibility guide daily life." },
  { i: Users, t: "Community", b: "Parents and teachers as one team for the child." },
  { i: Sparkles, t: "Creativity", b: "Curiosity and imagination are nurtured, not silenced." },
  { i: GraduationCap, t: "Leadership", b: "We raise confident learners ready to lead." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A school built on love, discipline, and academic excellence." subtitle="Since 2019, we have been a home away from home for children in Amamorley and across the Ga North Municipal." />
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <img src={founder} alt="Mrs. Perpetual Oppong" loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/5] object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Our Story</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">Rooted in a mother's dream.</h2>
          <Quote className="mt-6 h-8 w-8 text-gold" />
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            De Oppong Montessori School was established in 2019 by Mrs. Perpetual Oppong with a vision of providing
            quality education in a safe, caring, and supportive environment. What began as a small community school
            has grown into a trusted institution serving families from Crèche through Junior High.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We focus on academic excellence, moral development, discipline, leadership, creativity, and confidence —
            because a great school builds more than knowledge; it shapes character.
          </p>
        </Reveal>
      </section>

      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-10">
            <Sparkles className="h-8 w-8 text-gold" />
            <h3 className="mt-6 font-display font-bold text-3xl">Our Vision</h3>
            <p className="mt-4 text-primary-foreground/90 text-lg">To become one of the best schools in Ghana by raising confident, responsible, and successful learners.</p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-10">
            <HeartHandshake className="h-8 w-8 text-gold" />
            <h3 className="mt-6 font-display font-bold text-3xl">Our Mission</h3>
            <p className="mt-4 text-primary-foreground/90 text-lg">To provide quality education that develops every child academically, socially, morally, and emotionally.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Core Values</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">What guides us every day.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover-lift shadow-[var(--shadow-card)]">
                <v.i className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display font-bold text-xl">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-bold hover:opacity-95">
            Join Our Family
          </Link>
        </div>
      </section>
    </>
  );
}
