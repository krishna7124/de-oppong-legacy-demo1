import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import creche from "@/assets/creche.jpg";
import nursery from "@/assets/nursery.jpg";
import kindergarten from "@/assets/kindergarten.jpg";
import primary from "@/assets/primary.jpg";
import jhs from "@/assets/jhs.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | De Oppong Montessori School" },
      { name: "description", content: "From Crèche to Junior High School — a Montessori-inspired curriculum built on academic excellence and character." },
      { property: "og:title", content: "Academics — De Oppong Montessori School" },
      { property: "og:image", content: primary },
    ],
  }),
  component: Academics,
});

const programs = [
  { name: "Crèche", age: "3 months – 2 yrs", img: creche, curriculum: "Sensory play, motor skills, songs, storytelling and gentle daily routines.", approach: "Warm, responsive care in a home-like setting.", activities: ["Sensory bins", "Music & movement", "Nap & feeding routines"] },
  { name: "Nursery", age: "2 – 3 yrs", img: nursery, curriculum: "Practical life, language building, early numeracy and creative arts.", approach: "Hands-on Montessori materials that follow the child's pace.", activities: ["Practical life", "Art & craft", "Outdoor play"] },
  { name: "Kindergarten", age: "4 – 5 yrs", img: kindergarten, curriculum: "Phonics, reading, numeracy, environmental studies and social skills.", approach: "Play-based learning transitioning into structured lessons.", activities: ["Reading circles", "Number games", "Drama & rhymes"] },
  { name: "Primary", age: "6 – 11 yrs", img: primary, curriculum: "English, Mathematics, Science, Social Studies, ICT, French, RME & Ghanaian Language.", approach: "Strong academic foundations paired with leadership and character.", activities: ["Debates", "Science fairs", "Sports & clubs"] },
  { name: "Junior High School", age: "12 – 15 yrs", img: jhs, curriculum: "Full JHS curriculum with BECE preparation across all core subjects.", approach: "Rigorous academics, mentorship, and preparation for top SHS placement.", activities: ["Lab practicals", "ICT projects", "Career guidance"] },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="A curriculum that builds mastery — and character." subtitle="Every level is designed to unlock potential and prepare children for the next chapter." />
      <section className="container-page py-20 space-y-20">
        {programs.map((p, i) => (
          <Reveal key={p.name}>
            <div className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3]">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">{p.age}</div>
                <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl">{p.name}</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{p.curriculum}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-cream border border-border p-5">
                    <div className="text-xs font-semibold uppercase text-primary tracking-wider">Approach</div>
                    <div className="mt-2 text-sm">{p.approach}</div>
                  </div>
                  <div className="rounded-xl bg-cream border border-border p-5">
                    <div className="text-xs font-semibold uppercase text-primary tracking-wider">Activities</div>
                    <ul className="mt-2 text-sm space-y-1">
                      {p.activities.map((a) => <li key={a}>• {a}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
