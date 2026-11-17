"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { contact, experiences } from "@/lib/site";

const field =
  "w-full border-0 border-b border-ivory/20 bg-transparent px-0 py-3 text-ivory placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-0 transition-colors";
const label = "text-[0.65rem] uppercase tracking-[0.3em] text-muted";

export default function EnquiryForm() {
  const params = useSearchParams();
  const preset = params.get("experience") ?? "";
  const [sent, setSent] = useState(false);

  // No backend yet: this opens the visitor's email app with the enquiry pre-filled.
  // Swap for a Server Action or form service when ready.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-10 text-center">
        <p className="display gold-text text-5xl italic">Thank you</p>
        <p className="mt-4 text-muted">Your enquiry is on its way. We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
      <label className="block">
        <span className={label}>Full name</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="block">
        <span className={label}>Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="block">
        <span className={label}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+91" />
      </label>
      <label className="block">
        <span className={label}>Event date</span>
        <input name="date" type="date" className={`${field} [color-scheme:dark]`} />
      </label>
      <label className="block">
        <span className={label}>Experience</span>
        <select name="experience" defaultValue={preset} className={`${field} [&>option]:bg-ink`}>
          <option value="">Not sure yet</option>
          {experiences.map((x) => (
            <option key={x.slug} value={x.slug}>{x.name}</option>
          ))}
          <option value="bespoke">Something bespoke</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Guests</span>
        <select name="guests" defaultValue="" className={`${field} [&>option]:bg-ink`}>
          <option value="" disabled>Select</option>
          <option>Under 30</option>
          <option>30 – 100</option>
          <option>100 – 300</option>
          <option>300+</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Tell us about the night</span>
        <textarea name="message" rows={4} className={`${field} resize-none`} placeholder="The occasion, the mood, the venue, anything you're dreaming of…" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-gold">Send enquiry</button>
      </div>
    </form>
  );
}
