import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "The House",
  description: "The story, philosophy and craft behind Cosmos luxury party house.",
};

const values = [
  { title: "Discretion", text: "Guest lists stay private. Our team signs NDAs as standard, and every detail of your night stays yours." },
  { title: "Obsession", text: "We count candles, steam linens twice and test every light cue before a single guest arrives." },
  { title: "Theatre", text: "Each event is directed like a production, with an arc, a reveal and a final scene worth staying for." },
  { title: "Hospitality", text: "Luxury is how people feel. Our hosts anticipate before anyone has to ask." },
];

const stats = [
  { k: "120+", v: "Evenings staged" },
  { k: "18k", v: "Guests hosted" },
  { k: "40", v: "Artisans & partners" },
  { k: "1", v: "Standard: unforgettable" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The House"
        title="Born of a love for"
        italic="extraordinary nights"
        intro="Cosmos is a luxury party house that treats every celebration as a work of art: conceived, designed and directed by one devoted team."
        image="/images/masked-guests.jpg"
        position="center 62%"
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-28 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-40">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/chandelier-salon.jpg" alt="Guest in a candlelit salon" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={150} className="flex flex-col justify-center">
          <p className="eyebrow mb-6">Our Story</p>
          <h2 className="display text-5xl text-ivory md:text-6xl">
            A universe of its own, <em className="gold-text italic">for one night only</em>
          </h2>
          <div className="mt-8 space-y-6 leading-relaxed text-muted">
            <p>
              We named ourselves Cosmos because every great party is its own universe, with its own
              light, its own gravity and its own rules. For a few hours, the outside world disappears.
            </p>
            <p>
              Our founders came from hospitality, set design and nightlife. They saw too many events that
              looked expensive but felt forgettable, and built Cosmos to do the opposite: evenings
              where every texture, sound and moment is chosen on purpose.
            </p>
            <p>
              Today we design masquerade balls, Gatsby soirées, private dinners and after-dark
              productions for families, founders and brands who want to be remembered.
            </p>
          </div>
          <p className="display gold-text mt-10 text-3xl italic">Cosmos Team</p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 100} className="border-line px-4 py-14 text-center [&:not(:last-child)]:md:border-r">
              <p className="display gold-text text-6xl md:text-7xl">{s.k}</p>
              <p className="eyebrow mt-4 !text-muted">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
        <Reveal className="mb-20 max-w-2xl">
          <p className="eyebrow mb-6">What we stand for</p>
          <h2 className="display text-5xl text-ivory md:text-6xl">Four promises, <em className="gold-text italic">kept every time</em></h2>
        </Reveal>
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 120} className="border-t border-line pt-8">
              <div className="flex items-baseline gap-6">
                <span className="text-xs tracking-[0.3em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="display text-4xl text-ivory">{v.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4">
        {["/images/champagne-pour.jpg", "/images/black-tie.jpg", "/images/champagne-toast.jpg", "/images/gatsby-gowns.jpg"].map((src, i) => (
          <Reveal key={src} delay={i * 100}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-[1.6s] hover:scale-105" />
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
