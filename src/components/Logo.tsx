export default function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className={large ? "h-14 w-14" : "h-9 w-9"}
        fill="none"
        stroke="currentColor"
        aria-hidden
      >
        <circle cx="20" cy="20" r="11" className="text-gold" strokeWidth="0.9" />
        <ellipse cx="20" cy="20" rx="19" ry="6" transform="rotate(-24 20 20)" className="text-gold-soft" strokeWidth="0.7" />
        <circle cx="34" cy="11" r="1.4" fill="currentColor" className="text-gold-soft" stroke="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`display ${large ? "text-5xl" : "text-2xl"} tracking-[0.12em] text-ivory`}>COSMOS</span>
      </span>
    </span>
  );
}
