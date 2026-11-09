// Event page
//
// This is to add pages for events
// Use this template
// {
//   slug: "event-slug", // This is the URL
//   title: "Event Title",
//   shortTitle: "Short Title for Calendar",
//   label: "Free family workshop", // This is to us as a tag
//   city: "Rexburg",
//   date: "2026-11-14",    // YYY-MM-DD
//   start: "17:00",      // Do 24 hours
//   end: "19:00",
//   venue: "Venue Name",
//   street: "123 Main St",
//   cost: "Free",
//   summary: "One or two sentences shown at the top of the page",
//   description: ["Paragraph one.", "Paragraph two."],
//   expect: ["Bullet", "bullet"], //"What do expect"
//   whoFor: ["Bullet", "Bullet"], // who is it for
//   cta: {label: "RSVP", href: "https://...."},
//   image: null, // This is for an image or photo
// },

const rawPages = [
  {
    slug: "meemaw-movie-craft-night",
    title: "“Meemaw” Movie and Craft Night",
    shortTitle: "Meemaw Movie & Craft Night",
    label: "Fundraiser",
    city: "Rexburg",
    date: "2026-10-20",
    start: "18:00",
    end: "22:00",
    venue: "FatCats Rexburg",
    street: "475 N 2nd E",
    cost: "Tickets $20",
    summary:
      "Ladies, grab your girl tribe and your crafts! Join us for our FIRST Ladies Meemaw Movie and \
      Craft Night at FatCats in Rexburg on Tuesday, October 20th.",
    description: [
      "Ladies, grab your girl tribe and your crafts! Join us for our FIRST Ladies Meemaw Movie and Craft \
      Night at FatCats in Rexburg on Tuesday, October 20th.",
      "Come craft, laugh, snack, sip, and enjoy the quintessential ladies' movie, Sense and Sensibility - \
      all while supporting a local cause. ",
      "Come early to secure your favorite spot, set up your crafts, and hear Anne Papworth, BYU-Idaho English \
      Professor, share about Jane Austen and the origins of the movie. (Seats are not assigned).",
      "Every movie ticket purchased enters you to win a $500 Meemaw gift basket! Additional raffle tickets \
      may be obtained by making a minimum donation to Upper Valley SAFE Initiative. Raffle winner will be \
      announced at 6:45 pm. Must be there to accept the prize.",
      "And the best part? Proceeds support the Safety Hero program, which is being taught to children \
      across Eastern Idaho to help protect them from child exploitation.",
      "Bring your favorite craft, bring your besties, and come bond with your ladies while helping \
      protect our kids.",
      "Registration opens Friday, October 2nd, and closes when the theater sells out!",
      "Craft. Connect. Watch. Protect.",
      "We can’t wait to see you there!",
    ],
    expect: [
      "Doors open at 6:00 pm",
      "Time to craft with friends",
      "Snacks and sips",
      "A showing of Sense and Sensibility",
    ],
    whoFor: [
      "Ladies of all ages who want a fun night out",
      "Anyone who wants to support our work in the community",
    ],
    cta: { label: "Buy tickets", href: "#" },
    image: null,
  },
  {
    slug: "keep-rexburg-kids-safe",
    title: "Keep Rexburg Kids Safe in a Digital World",
    shortTitle: "Keep Rexburg Kids Safe workshop",
    label: "Free family workshop",
    city: "Rexburg",
    date: "2026-11-14",
    start: "17:00",
    end: "19:00",
    venue: "Madison Jr. High",
    street: "134 Madison Ave",
    cost: "Free",
    summary: "What every parent in the Upper Valley should know.",
    description: [
      "A free workshop where parents, caregivers and community members learn the risks, settings and warning signs that matter right now, explained in practical, easy-to-understand language.",
    ],
    expect: [
      "Digital safety",
      "AI and what it means for kids",
      "Healthy screen use",
      "Exploitation warning signs",
    ],
    whoFor: [
      "Parents and caregivers",
      "Community members who care about kids",
    ],
    cta: { label: "RSVP", href: "#" },
    image: null,
  },

];


// This is to help with times and dates
export const toDate = (iso) => new Date(`${iso}T12:00:00`);
 
export const isPast = (iso) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return toDate(iso) < today;
};
 
const to12 = (t) => {
  const [h, m] = t.split(":").map(Number);
  return { h: h % 12 || 12, m, mer: h >= 12 ? "pm" : "am" };
};
 
// "5:00–7:00 pm"
export function formatTimeRange(start, end) {
  const a = to12(start);
  const b = to12(end);
  const fmt = (x) => `${x.h}:${String(x.m).padStart(2, "0")}`;
  return a.mer === b.mer
    ? `${fmt(a)}–${fmt(b)} ${b.mer}`
    : `${fmt(a)} ${a.mer}–${fmt(b)} ${b.mer}`;
}
 
export const formatDateLong = (iso) =>
  toDate(iso).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
 
export const eventPages = rawPages.map((e) => ({
  ...e,
  path: `/events/${e.slug}`,
  timeFull: formatTimeRange(e.start, e.end),
  fullAddress: `${e.street}, ${e.city}, ID`,
}));
 
export const getEventBySlug = (slug) => eventPages.find((e) => e.slug === slug);
 
// Link that adds the event to the visitor's Google Calendar
export function googleCalendarUrl(e) {
  const d = e.date.replaceAll("-", "");
  const t = (x) => `${x.replace(":", "")}00`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${d}T${t(e.start)}/${d}T${t(e.end)}`,
    details: e.summary,
    location: `${e.venue}, ${e.fullAddress}`,
    ctz: "America/Boise",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}