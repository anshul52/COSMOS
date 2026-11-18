"use client";

import { useSearchParams } from "next/navigation";
import { startTransition, useActionState, type FormEvent } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { contact, experiences } from "@/lib/site";

const field =
  "w-full border-0 border-b border-ivory/20 bg-transparent px-0 py-3 text-ivory placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-0 transition-colors";
const label = "text-[0.65rem] uppercase tracking-[0.3em] text-muted";

const initial: EnquiryState = { status: "idle" };

export default function EnquiryForm() {
  const params = useSearchParams();
  const preset = params.get("experience") ?? "";
  // Each submission is saved as a row in the Google Sheet (see app/contact/actions.ts)
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  // Submit manually instead of <form action> so React doesn't clear the fields
  // when sending fails and the visitor needs to retry.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  }

  if (state.status === "success") {
    return (
      <div className="border border-line p-10 text-center">
        <p className="display gold-text text-5xl italic">Thank you</p>
        <p className="mt-4 text-muted">Your enquiry has reached us. We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
      {/* Honeypot for spam bots: hidden from people and screen readers */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
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
        <input name="date" type="date" className={field} />
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
        <button type="submit" disabled={pending} className="btn-gold disabled:cursor-wait disabled:opacity-60">
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        {state.status === "error" && (
          <p role="alert" className="mt-5 text-sm text-error">
            {state.message} Please try again, or write to us at{" "}
            <a href={`mailto:${contact.email}`} className="underline hover:text-gold">{contact.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
