import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="theme-dark relative overflow-hidden py-36">
      <Image src="/images/martini-ribbons.jpg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow mb-6">Your evening awaits</p>
        <h2 className="display text-5xl text-ivory md:text-7xl">
          Let&apos;s write the night <em className="gold-text italic">they&apos;ll never forget</em>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-gold">Begin an enquiry</Link>
          <Link href="/experiences" className="btn-ghost">View experiences</Link>
        </div>
      </Reveal>
    </section>
  );
}
