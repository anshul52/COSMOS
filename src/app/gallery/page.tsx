import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from Cosmos: masquerades, candlelit dinners, champagne towers and after-dark nights.",
};

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments in"
        italic="candlelight"
        intro="A glimpse into the worlds we build: lace and crystal, gold and crimson, laughter at three in the morning."
        image="/images/table-masks.jpg"
        position="center 45%"
      />
      <GalleryGrid />
      <CtaBand />
    </>
  );
}
