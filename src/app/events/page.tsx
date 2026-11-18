import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EventFeature from "@/components/EventFeature";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { getUpcomingEvents } from "@/lib/events";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Cosmos nights in Bhopal and Indore. Capso Night featuring DJ Kapsology, Fri 27 Nov at Veer Villa, Airport Rd, Bhopal.",
};

export default async function Events() {
  const upcoming = await getUpcomingEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="On the calendar."
        italic="Be on the list."
        intro="Upcoming Cosmos nights, open to reserve. Tables go quickly — call ahead to hold yours."
        image="/images/dj-red.jpg"
        position="center 35%"
      />

      {upcoming.length > 0 ? (
        upcoming.map((e) => <EventFeature key={e.slug} event={e} />)
      ) : (
        <section className="mx-auto max-w-3xl px-5 py-28 text-center md:py-40">
          <Reveal>
            <p className="eyebrow mb-6">Nothing announced yet</p>
            <h2 className="display text-4xl text-ivory md:text-5xl">
              The next night is <em className="gold-text italic">being planned.</em>
            </h2>
            <p className="mt-6 text-muted">
              Follow{" "}
              <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-gold hover:underline">
                {contact.instagramHandle}
              </a>{" "}
              on Instagram or send an enquiry to hear first.
            </p>
            <Link href="/contact" className="btn-ghost mt-10">Enquire</Link>
          </Reveal>
        </section>
      )}

      <CtaBand />
    </>
  );
}
