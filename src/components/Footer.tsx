import Link from "next/link";
import { contact, nav } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div className="space-y-6">
          <Logo large />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A luxury party house for those who believe an evening should feel like a story. Masquerades,
            soirées and private celebrations, designed down to the last candle.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-6">Explore</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ivory/80 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6">Private Line</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold" suppressHydrationWarning>{contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a>
            </li>
            <li className="text-muted">{contact.city}</li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">{contact.instagramHandle} ↗</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[0.65rem] uppercase tracking-[0.3em] text-muted md:flex-row md:px-10">
        <span>© 2026 Cosmos</span>
        <span>By invitation, by design</span>
      </div>
    </footer>
  );
}
