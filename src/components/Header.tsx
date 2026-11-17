"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock page scroll, close on Escape, and close if resized up to desktop
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          open
            ? "bg-transparent"
            : scrolled
              ? "border-b border-line bg-ink/85 backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/" onClick={() => setOpen(false)} aria-label="The Cosmos — home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.slice(0, -1).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.7rem] uppercase tracking-[0.32em] transition-colors duration-300 hover:text-gold ${
                    active ? "text-gold" : "text-ivory/80"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                      active ? "w-6" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
            <Link href="/contact" className="btn-gold !px-6 !py-3">
              Enquire
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`h-px w-7 bg-gold transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-7 bg-gold transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu — kept outside <header> so backdrop-filter can't trap this fixed layer */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(140,20,36,0.22),transparent_60%)]" />

        <nav className="relative flex flex-1 flex-col justify-center px-8 pt-20">
          <p className="eyebrow mb-8">Menu</p>
          <ul className="space-y-1">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className={`border-b border-line transition-all duration-700 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className={`display text-[2.6rem] ${active ? "gold-text italic" : "text-ivory"}`}>
                      {item.label}
                    </span>
                    <span className="text-[0.65rem] tracking-[0.3em] text-gold">0{i + 1}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`relative space-y-2 px-8 pb-10 text-sm text-muted transition-opacity delay-500 duration-700 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href={`mailto:${contact.email}`} className="block text-ivory/80 hover:text-gold">{contact.email}</a>
          <p>{contact.city}</p>
        </div>
      </div>
    </>
  );
}
