import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import EventFeature from "@/components/EventFeature";
import { experiences } from "@/lib/site";
import { getUpcomingEvents } from "@/lib/events";

const pillars = [
  { n: "I", title: "Concept", text: "Every evening begins with a story: a theme, a palette, a feeling we want your guests to carry home." },
  { n: "II", title: "Craft", text: "Set builds, florals, lighting, stationery and sound, designed in-house and finished by hand." },
  { n: "III", title: "Ceremony", text: "On the night, our hosts run every cue, from the first coupe poured to the last song played." },
];

const marquee = ["Masquerade Balls", "Gatsby Soirées", "Private Dining", "After Dark", "Jazz Lounges", "Milestone Birthdays", "Brand Launches"];

export default async function Home() {
  const [nextEvent] = await getUpcomingEvents();

  return (
    <>
      {/* HERO */}
      <section className="theme-dark relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/candlelit-dinner.jpg"
          alt="Candlelit banquet table with disco balls and black linens"
          fill
          preload
          sizes="100vw"
          className="drift object-cover object-[center_55%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,8,7,0.35),rgba(10,8,7,0.92)_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-32 pt-28 text-center md:px-10">
          <p className="eyebrow mb-8">Luxury Party &amp; Event House</p>
          <h1 className="display text-[3.6rem] text-ivory sm:text-8xl md:text-[9rem]">
            <em className="gold-text italic">Cosmos</em>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Evenings of candlelight, masks and champagne, designed for those who never settle for an ordinary night.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Plan your evening</Link>
            <Link href="/experiences" className="btn-ghost">Our experiences</Link>
          </div>

          {nextEvent && (
            <Link
              href={`/events#${nextEvent.slug}`}
              className="group mx-auto mt-14 flex max-w-md items-center gap-4 border border-[#e07a86]/40 bg-[linear-gradient(135deg,rgba(42,7,12,0.85),rgba(10,8,7,0.85))] p-3 pr-5 text-left backdrop-blur-sm transition-colors duration-500 hover:border-[#e07a86]"
            >
              <span className="relative block aspect-[4/5] w-16 shrink-0 overflow-hidden">
                <Image src={nextEvent.poster.src} alt="" fill sizes="64px" className="object-cover" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.32em] text-[#e07a86]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e07a86] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e07a86]" />
                  </span>
                  Upcoming
                </span>
                <span className="display mt-1 block text-2xl leading-tight text-ivory">
                  {nextEvent.name} <em className="text-base italic text-ivory/70">ft. {nextEvent.artist.name}</em>
                </span>
                <span className="mt-1 block truncate text-xs text-muted">
                  {nextEvent.dateLabel} · {nextEvent.venue.name}, {nextEvent.venue.area}
                </span>
              </span>
              <span className="text-gold transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-muted">
          <span>Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-ink-2 py-6">
        <div className="marquee flex w-max gap-14 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="display flex items-center gap-14 text-2xl text-ivory/70 md:text-3xl">
              {m} <span className="text-base text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* UPCOMING EVENT */}
      {nextEvent && <EventFeature event={nextEvent} />}

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow mb-6">The House</p>
          <h2 className="display text-5xl text-ivory md:text-6xl">
            We don&apos;t plan parties. <em className="gold-text italic">We stage legends.</em>
          </h2>
          <p className="mt-8 max-w-lg leading-relaxed text-muted">
            Cosmos was born from a simple belief: the best nights feel cinematic. Lace masks at every
            place setting. A champagne tower catching candlelight. A DJ who knows exactly when to turn the
            room red. We obsess over the details so you can lose yourself in the evening.
          </p>
          <Link href="/about" className="mt-10 inline-block border-b border-gold pb-1 text-[0.7rem] uppercase tracking-[0.32em] text-gold">
            Discover our story
          </Link>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/curtain-dancer.jpg" alt="Guest in a gold gown before red velvet curtains" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden aspect-[3/4] w-44 overflow-hidden border-4 border-ink md:block">
            <Image src="/images/martini-ribbons.jpg" alt="Martini glasses tied with crimson ribbon" fill sizes="176px" className="object-cover" />
          </div>
          <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-gold/60" />
        </Reveal>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-ink-2 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6">Signature Experiences</p>
              <h2 className="display text-5xl text-ivory md:text-6xl">Choose your <em className="gold-text italic">night</em></h2>
            </div>
            <Link href="/experiences" className="btn-ghost self-start md:self-auto">All experiences</Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {experiences.slice(0, 3).map((x, i) => (
              <Reveal key={x.slug} delay={i * 120}>
                <Link href={`/experiences#${x.slug}`} className="theme-dark group relative block aspect-[3/4] overflow-hidden">
                  <Image src={x.image} alt={x.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="eyebrow mb-3 !text-gold-soft">{x.tagline}</p>
                    <h3 className="display text-3xl text-ivory md:text-4xl">{x.name}</h3>
                    <span className="mt-5 block h-px w-10 bg-gold transition-all duration-700 group-hover:w-24" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow mb-6">Cosmos Method</p>
          <h2 className="display text-5xl text-ivory md:text-6xl">From first idea to <em className="gold-text italic">final toast</em></h2>
        </Reveal>
        <div className="grid gap-px bg-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 120} className="h-full bg-ink p-10 md:p-12">
              <span className="display gold-text text-6xl">{p.n}</span>
              <h3 className="display mt-6 text-3xl text-ivory">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AFTER DARK FEATURE */}
      <section className="theme-dark relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60vh]">
            <Image src="/images/red-lasers.jpg" alt="Red lasers over a dance floor" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative flex items-center bg-[linear-gradient(135deg,#2a070c,#0a0807_70%)] px-5 py-24 md:px-16">
            <Reveal>
              <p className="eyebrow mb-6 !text-[#e07a86]">After Dark</p>
              <h2 className="display text-5xl text-ivory md:text-6xl">When the candles burn low, <em className="italic text-[#e07a86]">the lights turn red.</em></h2>
              <p className="mt-8 max-w-md leading-relaxed text-ivory/70">
                Headline DJs, laser architecture and club-grade sound. Our late-night productions turn any
                venue into the city&apos;s most exclusive room.
              </p>
              <Link href="/experiences#after-dark" className="btn-ghost mt-10">Explore After Dark</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-4xl px-5 py-28 text-center md:py-40">
        <Reveal>
          <span className="display gold-text text-8xl leading-none">&ldquo;</span>
          <blockquote className="display -mt-6 text-3xl leading-snug text-ivory md:text-5xl">
            Our guests are still talking about the champagne tower. It felt less like a party and more like
            stepping into a film.
          </blockquote>
          <p className="eyebrow mt-10">Private client · Masquerade Ball</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
