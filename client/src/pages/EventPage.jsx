
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getEventBySlug,
  formatDateLong,
  googleCalendarUrl,
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

        {event && (
          <meta name="description" content={event.summary} />
        )}
      </Helmet>

      <Navbar />

      <main className="flex-1 bg-[#F2F3F6]">

        {event ? (
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-20">

            {/* Back to events */}
            <Link
              to="/events"
              className="inline-flex items-center font-semibold text-[#09234A] hover:underline"
            >
              ← Back to events
            </Link>

            {/* Event heading */}
            <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm sm:p-12">

              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#09234A]">
                {event.label}
              </span>

              <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-5xl">
                {event.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {event.summary}
              </p>

              {/* Event information */}
              <div className="mt-8 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2">

                <div>
                  <h2 className="font-bold text-gray-900">Date</h2>
                  <p className="mt-1 text-gray-600">
                    {formatDateLong(event.date)}
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">Time</h2>
                  <p className="mt-1 text-gray-600">
                    {event.timeFull}
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">Location</h2>
                  <p className="mt-1 text-gray-600">
                    {event.venue}
                  </p>
                  <p className="text-gray-600">
                    {event.fullAddress}
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">Cost</h2>
                  <p className="mt-1 text-gray-600">
                    {event.cost}
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">Who is this for?</h2>
                  <p className="mt-1 text-gray-600">
                    {event.audience}
                  </p>
                </div>

              </div>

              {/* Event description */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  About This Event
                </h2>

                <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                  {event.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  What to Expect
                </h2>

                <ul className="mt-4 space-y-3">
                  {event.expect.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <span className="font-bold text-[#EE4024]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who should attend */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  Who Should Attend?
                </h2>

                <ul className="mt-4 space-y-3">
                  {event.whoFor.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <span className="font-bold text-[#EE4024]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration */}
              <div className="mt-10 rounded-xl bg-[#09234A] p-8 text-white">
                <h2 className="text-2xl font-bold">
                  Join Us!
                </h2>

                <p className="mt-3 text-blue-100">
                  We would love to see you there. Register or purchase your tickets below.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">

                  <a
                    href={event.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#EE4024] px-6 py-3 font-bold text-white transition hover:bg-[#d9341c]"
                  >
                    {event.cta.label}
                  </a>

                  <a
                    href={googleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#09234A]"
                  >
                    Add to Google Calendar
                  </a>

                </div>
              </div>

            </div>
          </div>

        ) : (
          <section className="px-6 py-24 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Event Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              We couldn't find that event. It may have moved or been removed.
            </p>

            <Link
              to="/events"
              className="mt-8 inline-block rounded-lg bg-[#09234A] px-6 py-3 font-semibold text-white hover:bg-[#0d3169]"
            >
              See All Events
            </Link>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default EventPage;
