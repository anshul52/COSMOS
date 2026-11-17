import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  image,
  position = "center",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro: string;
  image: string;
  position?: string;
}) {
  return (
    <section className="theme-dark relative flex min-h-[78vh] items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="drift object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="display max-w-4xl text-5xl text-ivory sm:text-7xl md:text-8xl">
          {title}
          {italic && (
            <>
              {" "}
              <em className="gold-text italic">{italic}</em>
            </>
          )}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75">{intro}</p>
      </div>
    </section>
  );
}
