export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The House" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Enquire" },
] as const;

// Placeholder contact details: replace with the real ones
export const contact = {
  phone: "+91 00000 00000",
  email: "hello@thecosmos.events",
  city: "Bhopal · Indore",
  instagram: "https://instagram.com/",
};

export const experiences = [
  {
    slug: "masquerade",
    name: "The Masquerade Ball",
    tagline: "Mystery, lace and candlelight",
    image: "/images/masked-ballroom.jpg",
    description:
      "An evening behind the mask. Gilded ballrooms, lace masks at every place setting, string quartets that give way to midnight DJs, and a champagne tower at the heart of it all.",
    includes: ["Bespoke masks for every guest", "Candlelit banquet styling", "Live strings & DJ handover", "Champagne tower ceremony"],
  },
  {
    slug: "gatsby",
    name: "The Gatsby Soirée",
    tagline: "Old money, new night",
    image: "/images/black-tie.jpg",
    description:
      "Black tie, pearls and a roaring jazz band. We recreate the glamour of the twenties with crystal coupes, art-deco staging and a dance floor that refuses to close.",
    includes: ["Art-deco set design", "Live jazz ensemble", "Signature cocktail bar", "Vintage photo booth"],
  },
  {
    slug: "private-dining",
    name: "Private Dining",
    tagline: "A table worth remembering",
    image: "/images/place-setting.jpg",
    description:
      "Intimate dinners for twelve to one hundred. Hand-lettered place cards, layered linens, taper candles and a chef's menu paired course by course.",
    includes: ["Curated chef's tasting menu", "Hand-lettered stationery", "Florals & tablescape design", "Sommelier pairing"],
  },
  {
    slug: "after-dark",
    name: "After Dark",
    tagline: "When the lights turn red",
    image: "/images/dj-red.jpg",
    description:
      "Club-grade sound, laser architecture and headline DJs. For birthdays, launches and nights that are meant to be talked about for years.",
    includes: ["Headline DJ booking", "Laser & LED stage design", "Club-grade sound system", "VIP host & guest list"],
  },
  {
    slug: "jazz-lounge",
    name: "The Jazz Lounge",
    tagline: "Velvet, smoke and saxophone",
    image: "/images/jazz-table.jpg",
    description:
      "A speakeasy built for one night. Red velvet drapes, low lamps, a vinyl corner and a crooner on the mic while martinis are shaken to order.",
    includes: ["Speakeasy set build", "Live vocalist & trio", "Classic cocktail menu", "Cigar & vinyl corner"],
  },
] as const;

export const gallery = [
  { src: "/images/masked-guests.jpg", alt: "Guests in masks and gold gowns at sunset", w: 736, h: 1308 },
  { src: "/images/champagne-pour.jpg", alt: "Champagne poured over a coupe tower", w: 403, h: 672 },
  { src: "/images/red-lasers.jpg", alt: "Red laser show over a crowded dance floor", w: 736, h: 981 },
  { src: "/images/masked-ballroom.jpg", alt: "Masked guests dancing in a gilded ballroom", w: 657, h: 495 },
  { src: "/images/table-masks.jpg", alt: "Lace masks laid on a white banquet table", w: 736, h: 1308 },
  { src: "/images/curtain-dancer.jpg", alt: "Guest in a gold gown before red velvet curtains", w: 547, h: 668 },
  { src: "/images/place-setting.jpg", alt: "Place card and black lace mask on a dinner setting", w: 1080, h: 1350 },
  { src: "/images/black-tie.jpg", alt: "Black tie guests in masks", w: 441, h: 576 },
  { src: "/images/club-night.jpg", alt: "Club night under red neon geometry", w: 736, h: 981 },
  { src: "/images/champagne-toast.jpg", alt: "Champagne coupes raised in a toast", w: 541, h: 783 },
  { src: "/images/candlelit-dinner.jpg", alt: "Candlelit dinner with disco balls and black linens", w: 1200, h: 2133 },
  { src: "/images/martini-ribbons.jpg", alt: "Martini glasses tied with crimson ribbon", w: 564, h: 710 },
  { src: "/images/chandelier-salon.jpg", alt: "Guest in a candlelit salon", w: 594, h: 795 },
  { src: "/images/dj-booth.jpg", alt: "DJ booth under draped violet lighting", w: 736, h: 981 },
  { src: "/images/tower-gold.jpg", alt: "Golden champagne tower", w: 317, h: 590 },
  { src: "/images/gatsby-gowns.jpg", alt: "Guests in black gowns and fur", w: 398, h: 533 },
  { src: "/images/dj-performance.png", alt: "DJ performing in front of a red light wall", w: 720, h: 1280 },
] as const;
