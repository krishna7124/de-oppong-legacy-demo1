import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import creche from "@/assets/creche.jpg";
import nursery from "@/assets/nursery.jpg";
import kindergarten from "@/assets/kindergarten.jpg";
import primary from "@/assets/primary.jpg";
import jhs from "@/assets/jhs.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import graduation from "@/assets/graduation.jpg";
import campus from "@/assets/campus.jpg";
import hero from "@/assets/hero-students.jpg";

const images = [
  { src: hero, alt: "Classroom learning", h: "row-span-2" },
  { src: sports, alt: "Sports day", h: "" },
  { src: graduation, alt: "Graduation celebration", h: "" },
  { src: arts, alt: "Arts performance", h: "row-span-2" },
  { src: primary, alt: "Primary classroom", h: "" },
  { src: kindergarten, alt: "Kindergarten reading", h: "" },
  { src: jhs, alt: "JHS science lab", h: "row-span-2" },
  { src: nursery, alt: "Nursery painting", h: "" },
  { src: creche, alt: "Crèche play", h: "" },
  { src: campus, alt: "Campus", h: "col-span-2" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | De Oppong Montessori School" },
      { name: "description", content: "A visual look at life at De Oppong Montessori — classrooms, events, sports, graduation and more." },
      { property: "og:title", content: "Gallery — De Oppong Montessori" },
      { property: "og:image", content: hero },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments that make us who we are." />
      <section className="container-page py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 40} className={`${img.h} overflow-hidden rounded-2xl group shadow-[var(--shadow-card)]`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
