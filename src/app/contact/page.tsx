import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description: "Begin planning your luxury party or private event with The Cosmos.",
};

const faqs = [
  { q: "How far in advance should we book?", a: "For large productions we recommend three to six months. Intimate dinners can often be arranged in three to four weeks." },
  { q: "Do you travel?", a: "Yes. We design events across India and at destination venues abroad." },
  { q: "Can you work with our venue?", a: "Absolutely. We can transform a venue you love, or source one from our private collection." },
];

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-20">
        <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden lg:block">
            <Image src="/images/place-setting.jpg" alt="Place card and lace mask on a dinner table" fill preload sizes="45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/20 to-ink" />
            <div className="light-scrim theme-dark absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="theme-dark absolute bottom-12 left-12 right-12">
              <p className="display text-4xl leading-tight text-ivory">
                &ldquo;Every unforgettable night begins with <em className="gold-text italic">a conversation.</em>&rdquo;
              </p>
            </div>
          </div>

          <div className="px-5 py-20 md:px-16 md:py-24">
            <Reveal>
              <p className="eyebrow mb-6">Enquire</p>
              <h1 className="display text-5xl text-ivory md:text-7xl">
                Tell us about <em className="gold-text italic">your evening</em>
              </h1>
              <p className="mt-6 max-w-lg leading-relaxed text-muted">
                Share a few details and a member of our team will reply personally within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-14">
              <Suspense fallback={null}>
                <EnquiryForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Private Line</p>
            <ul className="space-y-6">
              <li>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">Call</p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="display text-3xl text-ivory hover:text-gold" suppressHydrationWarning>{contact.phone}</a>
              </li>
              <li>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">Write</p>
                <a href={`mailto:${contact.email}`} className="display text-3xl text-ivory hover:text-gold">{contact.email}</a>
              </li>
              <li>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">Studios</p>
                <p className="display text-3xl text-ivory">{contact.city}</p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-6">Questions</p>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="display text-2xl text-ivory md:text-3xl">{f.q}</span>
                    <span className="text-xl text-gold transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
