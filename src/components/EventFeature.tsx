import Image from "next/image";
import { contact, telHref, type CosmosEvent } from "@/lib/site";
import Reveal from "./Reveal";


/** Full-width poster + details block for a single upcoming event. */
export default function EventFeature({ event, headingLevel = "h2" }: { event: CosmosEvent; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article
      id={event.slug}
      className="theme-dark relative scroll-mt-28 overflow-hidden bg-[linear-gradient(135deg,#2a070c,#0a0807_70%)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-20 md:px-10 md:py-28">
        <Reveal>
          <a
            href={event.poster.src}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto block max-w-md overflow-hidden shadow-[0_30px_80px_-20px_rgba(140,20,36,0.55)]"
            aria-label={`Open the ${event.name} poster`}
          >
            <Image
              src={event.poster.src}
              alt={`${event.name} poster — ${event.tagline}, ${event.dateLabel}, ${event.venue.name}, ${event.venue.area}`}
              width={event.poster.w}
              height={event.poster.h}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-3 border border-gold/30" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow mb-6 !text-[#e07a86]">Upcoming · Cosmos presents</p>
          <Heading className="display text-5xl text-ivory sm:text-6xl md:text-7xl">
            {event.name}
          </Heading>
          <p className="mt-4 text-lg text-ivory/85">
            Featuring{" "}
            <a href={event.artist.instagram} target="_blank" rel="noreferrer" className="italic text-[#e07a86] hover:underline">
              {event.artist.name}
            </a>
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-ivory/70">{event.description}</p>

          <dl className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            <div className="bg-ink/80 p-6">
              <dt className="eyebrow mb-2">When</dt>
              <dd className="text-ivory">
                <time dateTime={event.startsAt}>{event.dateLabel}</time>
                <span className="block text-sm text-muted">{event.timeLabel}</span>
              </dd>
            </div>
            <div className="bg-ink/80 p-6">
              <dt className="eyebrow mb-2">Where</dt>
              <dd className="text-ivory">
                {event.venue.name}, {event.venue.area}
                <span className="block text-sm text-muted">{event.venue.directions}</span>
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <p className="eyebrow mb-4">Reservations</p>
            <div className="flex flex-wrap gap-4">
              {event.reservations.map((n, i) => (
                // suppressHydrationWarning: click-to-call browser extensions (e.g. Twilio softphone)
                // decorate tel: links before React hydrates.
                <a key={n} href={telHref(n)} className={i === 0 ? "btn-gold" : "btn-ghost"} suppressHydrationWarning>
                  {n}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] uppercase tracking-[0.32em]">
              <a href={event.venue.mapUrl} target="_blank" rel="noreferrer" className="border-b border-gold pb-1 text-gold">
                Get directions ↗
              </a>
              <a href={event.artist.instagram} target="_blank" rel="noreferrer" className="border-b border-gold pb-1 text-gold">
                {event.artist.handle} ↗
              </a>
              <a href={contact.instagram} target="_blank" rel="noreferrer" className="border-b border-gold pb-1 text-gold">
                {contact.instagramHandle} ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
