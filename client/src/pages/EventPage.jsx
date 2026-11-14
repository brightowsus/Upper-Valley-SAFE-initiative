import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaCheckCircle,
  FaCalendarPlus,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getEventBySlug,
  formatDateLong,
  googleCalendarUrl,
  isPast,
  toDate,
} from "../components/Eventsworshops/data/EventPageData";

function EventPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>
          {event
            ? `${event.title} | Upper Valley SAFE Initiative`
            : "Event not found | Upper Valley SAFE Initiative"}
        </title>
        {event && <meta name="description" content={event.summary} />}
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {event ? <EventContent event={event} /> : <NotFound />}
      </main>

      <Footer />
    </div>
  );
}

function EventContent({ event }) {
  const past = isPast(event.date);
  const d = toDate(event.date);
  const ctaIsExternal = event.cta.href.startsWith("http");

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

  return (
    <>
      {/* All the stuff at the top: title, img, date, etc.*/}
      <section className="bg-white">
        <div className="w-full px-6 pb-14 pt-6 sm:px-10 lg:px-16 lg:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <a
              href="/"
              className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]"
            >
              Home
            </a>{" "}
            /{" "}
            <a
              href="/events"
              className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]"
            >
              Events &amp; workshops
            </a>{" "}
            / <span aria-current="page">{event.shortTitle}</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold text-gray-600">
                {event.label} · {event.city}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl">
                {event.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                {event.summary}
              </p>

              {past && (
                <p className="mt-6 inline-block rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
                  This event has passed.{" "}
                  <Link
                    to="/events"
                    className="text-[#09234A] underline underline-offset-2"
                  >
                    See upcoming events
                  </Link>
                </p>
              )}

              <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                {facts.map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#09234A]/10 text-[#09234A]">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold text-gray-500">
                        {label}
                      </dt>
                      <dd className="font-semibold text-gray-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {!past && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={event.cta.href}
                    {...(ctaIsExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="rounded-lg bg-[#09234A] px-6 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-[#0d3169]"
                  >
                    {event.cta.label}
                  </a>

                  <a
                    href={googleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#09234A] px-6 py-3.5 font-semibold text-[#09234A] transition hover:bg-[#09234A]/5"
                  >
                    <FaCalendarPlus aria-hidden="true" />
                    Add to calendar
                  </a>
                </div>
              )}
            </div>

            {/* photo if there is one, otherwise the date panel */}
            {event.image ? (
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d3169] 
              via-[#09234A] to-[#061a38] p-3 shadow-xl sm:p-4 lg:p-5">
                <img
                  src={event.image}
                  alt={event.title}
                  className="relative aspect-[5/4] w-full rounded-3xl object-cover object-top
                   shadow-2xl ring-4 ring-white/10"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="flex aspect-[5/4] w-full flex-col items-center justify-center rounded-[2rem] bg-[#09234A] text-white shadow-xl"
              >
                <span className="text-lg font-bold tracking-widest">
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

      {/* ── Body: description + details card ── */}
      <section className="bg-[#F2F3F5]">
        <div className="grid w-full gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 lg:py-20">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              About this event
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-gray-600">
              {event.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-gray-900">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3">
              {event.expect.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle
                    className="mt-1 shrink-0 text-[#EE4024]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-gray-900">
              Who it&rsquo;s for
            </h2>
            <ul className="mt-4 space-y-3">
              {event.whoFor.map((item, index) => (
                <li
                  key={index}
                  className="border-l-4 border-[#EE4024] pl-4 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Details card */}
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
                    className="mt-1 inline-block font-bold text-[#09234A] underline underline-offset-4 hover:text-[#EE4024]"
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
                  {...(ctaIsExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="mt-6 block rounded-lg bg-[#09234A] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#0d3169]"
                >
                  {event.cta.label}
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="w-full px-6 py-24 text-center sm:px-10 lg:px-16">
      <h1 className="text-4xl font-extrabold text-gray-900">Event not found</h1>
      <p className="mt-4 text-gray-600">
        We couldn’t find that event. It may have moved or been removed.
      </p>
      <Link
        to="/events"
        className="mt-8 inline-block rounded-lg bg-[#09234A] px-6 py-3 font-semibold text-white transition hover:bg-[#0d3169]"
      >
        See all events
      </Link>
    </section>
  );
}

export default EventPage;