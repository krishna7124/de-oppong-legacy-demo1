import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Trophy, Music, Palette, BookOpen, MapPin, Users } from "lucide-react";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import graduation from "@/assets/graduation.jpg";
import kindergarten from "@/assets/kindergarten.jpg";
import nursery from "@/assets/nursery.jpg";
import primary from "@/assets/primary.jpg";

export const Route = createFileRoute("/school-life")({
  head: () => ({
    meta: [
      { title: "School Life | De Oppong Montessori" },
      { name: "description", content: "Sports, arts, music, leadership, clubs and educational trips at De Oppong Montessori School." },
      { property: "og:title", content: "School Life — De Oppong Montessori" },
      { property: "og:image", content: sports },
    ],
  }),
  component: SchoolLife,
});

const activities = [
  { i: Trophy, t: "Sports", d: "Football, athletics, and inter-house games that build teamwork and confidence.", img: sports },
  { i: Music, t: "Music", d: "Choir, drumming and instrumental sessions that bring out every child's rhythm.", img: arts },
  { i: Palette, t: "Arts", d: "Painting, drawing, and craft that nurture creativity and self-expression.", img: nursery },
  { i: Users, t: "Leadership", d: "Prefectorial roles, speaking opportunities and mentorship programs.", img: graduation },
  { i: BookOpen, t: "Clubs", d: "Reading, Science, Debate, French, and ICT clubs after school.", img: kindergarten },
  { i: MapPin, t: "Educational Trips", d: "Excursions that bring learning to life outside the classroom.", img: primary },
];

function SchoolLife() {
  return (
    <>
      <PageHero eyebrow="School Life" title="Learning that goes far beyond the classroom." subtitle="Sports, arts, leadership and community — a full and joyful school experience." />
      <section className="container-page py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((a, i) => (
          <Reveal key={a.t} delay={i * 70}>
            <div className="group h-full rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.img} alt={a.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground">
                    <a.i className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl">{a.t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{a.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
