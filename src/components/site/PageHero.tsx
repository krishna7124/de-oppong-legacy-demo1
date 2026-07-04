import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "48px 48px, 72px 72px" }} />
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">{eyebrow}</p>}
        <h1 className="mt-3 font-display font-bold text-4xl md:text-6xl max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
