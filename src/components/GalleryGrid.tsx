"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/site";

export default function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : gallery[index];

  return (
    <section className="mx-auto max-w-7xl px-3 py-20 md:px-10 md:py-28">
      <div className="columns-2 gap-3 md:columns-3 md:gap-5">
        {gallery.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-3 block w-full overflow-hidden md:mb-5"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-[1.6s] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />
            <span className="absolute inset-3 border border-gold/0 transition-colors duration-500 group-hover:border-gold/50" />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" onClick={close} className="absolute right-5 top-5 text-[0.7rem] uppercase tracking-[0.3em] text-gold" aria-label="Close">
            Close ✕
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} className="display absolute left-3 top-1/2 -translate-y-1/2 p-4 text-4xl text-gold md:left-8" aria-label="Previous image">
            ‹
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} className="display absolute right-3 top-1/2 -translate-y-1/2 p-4 text-4xl text-gold md:right-8" aria-label="Next image">
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-muted">
            {index! + 1} / {gallery.length}
          </p>
        </div>
      )}
    </section>
  );
}
