import { cacheLife } from "next/cache";
import { events } from "./site";

/** Events that haven't finished yet, soonest first. Re-evaluated hourly so past nights drop off. */
export async function getUpcomingEvents() {
  "use cache";
  cacheLife("hours");

  const now = Date.now();
  return events
    .filter((e) => new Date(e.endsAt).getTime() > now)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}
