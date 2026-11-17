import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { experiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Masquerade balls, Gatsby soirées, private dining, after-dark productions and jazz lounges by The Cosmos.",
};

const extras = [
  "Venue sourcing", "Custom invitations", "Floral design", "Lighting design",
  "Live entertainment", "Photography & film", "Bespoke cocktails", "Guest concierge",
];

export default function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Five worlds."
        italic="One unforgettable night."
        intro="Each signature experience is a starting point. We tailor every element to your guest list, your venue and your story."
        image="/images/red-lasers.jpg"
        position="center 40%"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        {experiences.map((x, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={x.slug}
              id={x.slug}
              className="grid scroll-mt-28 items-center gap-10 border-b border-line py-16 last:border-0 md:grid-cols-2 md:gap-20 md:py-24"
            >
              <Reveal className={flip ? "md:order-2" : ""}>
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <Image src={x.image} alt={x.name} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-[1.6s] group-hover:scale-105" />
                  <div className="absolute inset-3 border border-gold/30" />
                </div>
              </Reveal>
              <Reveal delay={120} className={flip ? "md:order-1" : ""}>
                <span className="display gold-text text-7xl">0{i + 1}</span>
                <p className="eyebrow mt-4">{x.tagline}</p>
                <h2 className="display mt-4 text-5xl text-ivory md:text-6xl">{x.name}</h2>
                <p className="mt-6 max-w-lg leading-relaxed text-muted">{x.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {x.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ivory/85">
                      <span className="text-[0.6rem] text-gold">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?experience=${x.slug}`} className="btn-ghost mt-10">Enquire about this</Link>
              </Reveal>
            </section>
          );
        })}
      </div>

      <section className="bg-ink-2 py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow mb-6">Full service</p>
            <h2 className="display text-5xl text-ivory md:text-6xl">Everything, <em className="gold-text italic">handled</em></h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
            {extras.map((e, i) => (
              <Reveal key={e} delay={(i % 4) * 80} className="h-full bg-ink-2 px-6 py-10 text-center">
                <span className="display text-2xl text-ivory md:text-3xl">{e}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
