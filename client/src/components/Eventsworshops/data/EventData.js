// Put all the events for the calendar and the event list
// ALL EVENTS NEED TO HAVE A CATEGORY OF:
// workshop or parent-night or fundraiser or community

export const events = [
  {
    id: "meemaw-movie-craft-night",
    date: "2026-10-20",
    category: "fundraiser",
    label: "Fundraiser",
    city: "Rexburg",
    audience: "Ladies' night",
    title: "“Meemaw” Movie and Craft Night",
    shortTitle: "Meemaw Movie & Craft Night",
    time: "6–10 pm",
    venue: "FatCats Rexburg",
    details: "FatCats Rexburg, 475 N 2nd E · Tuesday, 6:00–10:00 pm · Tickets $20",
    actions: [
      { label: "Details", href: "/events/meemaw-movie-craft-night", solid: false },
      { label: "Buy tickets", href: "#", solid: true },
    ],
  },
  {
    id: "keep-rexburg-kids-safe",
    date: "2026-11-14",
    category: "workshop",
    label: "Free family workshop",
    city: "Rexburg",
    audience: "Parents, caregivers and community members",
    title: "Keep Rexburg Kids Safe in a Digital World",
    shortTitle: "Keep Rexburg Kids Safe workshop",
    time: "5–7 pm",
    venue: "Madison Jr. High",
    details: "Madison Jr. High, 134 Madison Ave · Saturday, 5:00–7:00 pm · Free",
    actions: [
      { label: "Details", href: "/events/keep-rexburg-kids-safe", solid: false },
      { label: "RSVP", href: "#", solid: true },
    ],
  },
];