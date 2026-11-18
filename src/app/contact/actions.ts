"use server";

import { experiences } from "@/lib/site";

export type EnquiryState = { status: "idle" | "success" | "error"; message?: string };

const MAX = { name: 120, email: 200, phone: 40, date: 20, experience: 60, guests: 20, message: 3000 };

function field(data: FormData, key: keyof typeof MAX) {
  return String(data.get(key) ?? "").trim().slice(0, MAX[key]);
}

/**
 * Saves an enquiry as a new row in the Google Sheet via the Apps Script web app
 * in scripts/enquiries-apps-script.gs. Runs on the server, so the webhook URL
 * and secret never reach the browser.
 */
export async function submitEnquiry(_prev: EnquiryState, data: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field
  if (String(data.get("company") ?? "") !== "") return { status: "success" };

  const name = field(data, "name");
  const email = field(data, "email");
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please add your name and a valid email." };
  }

  const slug = field(data, "experience");
  const experience =
    experiences.find((x) => x.slug === slug)?.name ?? (slug === "bespoke" ? "Something bespoke" : "Not sure yet");

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  const secret = process.env.ENQUIRY_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("Enquiry not saved: ENQUIRY_WEBHOOK_URL / ENQUIRY_WEBHOOK_SECRET are not set");
    return { status: "error", message: "We couldn't send your enquiry just now." };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      // text/plain keeps Apps Script from needing a CORS preflight; the body is still JSON
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        secret,
        name,
        email,
        phone: field(data, "phone"),
        date: field(data, "date"),
        experience,
        guests: field(data, "guests"),
        message: field(data, "message"),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const out = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !out?.ok) throw new Error(out?.error ?? `HTTP ${res.status}`);
    return { status: "success" };
  } catch (err) {
    console.error("Enquiry not saved:", err);
    return { status: "error", message: "We couldn't send your enquiry just now." };
  }
}
