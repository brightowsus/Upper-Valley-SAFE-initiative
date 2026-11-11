import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaCheckCircle,
  FaCalendarPlus,
  FaArrowRight,
} from "react-icons/fa";
import {
  eventPages,
  isPast,
  toDate,
  formatDateLong,
  googleCalendarUrl,
} from "./eventsPage";
 
// The reusable event page template. Give it one event object from eventPages.js.
function EventDetail({ event }) {
  const past = isPast(event.date);
  const d = toDate(event.date);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${event.venue}, ${event.fullAddress}`
  )}`;
 
  const facts = [
    { Icon: FaCalendarAlt, label: "Date", value: formatDateLong(event.date) },
    { Icon: FaClock, label: "Time", value: event.timeFull },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      value: `${event.venue}, ${event.fullAddress}`,
    },
    { Icon: FaTicketAlt, label: "Cost", value: event.cost },
  ];
 
  // Other upcoming events (not this one)
  const more = eventPages
    .filter((e) => e.slug !== event.slug && !isPast(e.date))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);
 
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="w-full px-6 pb-14 pt-6 sm:px-10 lg:px-16 lg:pb-20">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <a href="/" className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]">
              Home
            </a>{" "}
            /{" "}
            <a href="/events" className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]">
              Events &amp; workshops
            </a>{" "}
            / <span aria-current="page">{event.shortTitle}</span>
          </nav>
 
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-gray-600">
                {event.label} · {event.city}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight 
              text-gray-900 sm:text-5xl">
                {event.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                {event.summary}
              </p>
 
              {past && (
                <p className="mt-6 inline-block rounded-lg bg-gray-100 px-4 py-3 text-sm 
                font-semibold text-gray-700">
                  This event has passed.{" "}
                  <a href="/events" className="text-[#09234A] underline underline-offset-2">
                    See upcoming events
                  </a>
                </p>
              )}
 
              <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                {facts.map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center 
                    rounded-full bg-[#09234A]/10 text-[#09234A]">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold text-gray-500">{label}</dt>
                      <dd className="font-semibold text-gray-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
 
              {!past && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={event.cta.href}
                    className="rounded-lg bg-[#09234A] px-6 py-3.5 text-center font-semibold 
                    text-white shadow-sm transition hover:bg-[#0d3169]"
                  >
                    {event.cta.label}
                  </a>
                  <a
                    href={googleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 
                    border-[#09234A] px-6 py-3.5 font-semibold text-[#09234A] transition 
                    hover:bg-[#09234A]/5"
                  >
                    <FaCalendarPlus aria-hidden="true" />
                    Add to calendar
                  </a>
                </div>
              )}
            </div>
 
            {/* Photo (or a date panel when there's no photo yet) */}
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full flex-col items-center justify-center 
                rounded-2xl bg-gradient-to-br from-[#09234A] to-[#0d3169] text-white shadow-xl"
              >
                <span className="text-lg font-bold uppercase tracking-widest">
                  {d.toLocaleString("en-US", { month: "long" })}
                </span>
                <span className="text-8xl font-extrabold leading-none">
                  {d.getDate()}
                </span>
                <span className="mt-2 text-lg">{d.getFullYear()}</span>
              </div>
            )}
          </div>
        </div>
      </section>
 
      {/* ── Body ── */}
      <section className="bg-[#F2F3F5]">
        <div className="grid w-full gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr]
         lg:gap-16 lg:px-16 lg:py-20">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              About this event
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-gray-600">
              {event.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
 
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-gray-900">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3">
              {event.expect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#EE4024]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
 
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-gray-900">
              Who it&rsquo;s for
            </h2>
            <ul className="mt-4 space-y-3">
              {event.whoFor.map((item) => (
                <li key={item} className="border-l-4 border-[#EE4024] pl-4 text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
 
          {/* Sidebar */}
          <aside>
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-gray-900">Event details</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-gray-500">When</dt>
                  <dd className="mt-0.5 text-gray-900">
                    {formatDateLong(event.date)}
                    <br />
                    {event.timeFull}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Where</dt>
                  <dd className="mt-0.5 text-gray-900">
                    {event.venue}
                    <br />
                    {event.fullAddress}
                  </dd>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-bold text-[#09234A] underline 
                    underline-offset-4 hover:text-[#EE4024]"
                  >
                    Get directions
                  </a>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Cost</dt>
                  <dd className="mt-0.5 text-gray-900">{event.cost}</dd>
                </div>
              </dl>
 
              {!past && (
                <a
                  href={event.cta.href}
                  className="mt-6 block rounded-lg bg-[#09234A] px-6 py-3 text-center 
                  font-semibold text-white transition hover:bg-[#0d3169]"
                >
                  {event.cta.label}
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
 
      {/* ── More events ── */}
      {more.length > 0 && (
        <section className="bg-white">
          <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                More events
              </h2>
              <a
                href="/events"
                className="shrink-0 text-sm font-bold text-[#09234A] underline 
                underline-offset-4 hover:text-[#EE4024]"
              >
                See all events
              </a>
            </div>
 
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((e) => {
                const md = toDate(e.date);
                return (
                  <a
                    key={e.slug}
                    href={e.path}
                    className="group flex gap-4 rounded-xl border-2 border-gray-200 
                    bg-white p-5 transition hover:-translate-y-1 hover:border-[#09234A] hover:shadow-lg"
                  >
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 flex-col items-center justify-center 
                      rounded-lg border-2 border-[#09234A] text-[#09234A]"
                    >
                      <span className="text-xs font-bold uppercase">
                        {md.toLocaleString("en-US", { month: "short" })}
                      </span>
                      <span className="text-2xl font-extrabold leading-none">{md.getDate()}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">{e.label}</p>
                      <h3 className="mt-1 font-bold leading-snug text-gray-900">{e.title}</h3>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold 
                      text-[#09234A] group-hover:text-[#EE4024]">
                        View details <FaArrowRight className="text-xs" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
 
export default EventDetail;