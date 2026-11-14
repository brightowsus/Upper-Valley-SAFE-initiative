import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound.jsx";
import { useParams } from "react-router-dom";
import { getEventBySlug,  formatDateLong } from "../components/Eventsworshops/data/EventPageData";

function RSVPPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{event ? `RSVP for ${event.title}` : "Event not found"}</title>
        {event && <meta name="description" content={`RSVP for ${event.title}.`} />}
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {event ? <RSVPForm event={event} /> : <NotFound />}
      </main>

      <Footer />
    </div>
  );
}

const labelClass = "block text-sm font-semibold text-gray-900";
const inputClass =
  "mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 \
  transition focus:border-[#09234A] focus:outline-none focus:ring-2 focus:ring-[#09234A]/20";

function RSVPForm({ event }) {
  return (
    <section className="bg-[#F2F3F6]">
      <div className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Breadcrumb labeling where user at */}
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <a href="/" className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]">
              Home
            </a>{" "}
            /{" "}
            <a
              href="/events"
              className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]"
            >
              Events &amp; workshops
            </a>{" "}
            /{" "}
            <a
              href={`/events/${event.slug}`}
              className="text-[#09234A] underline underline-offset-2 hover:text-[#EE4024]"
            >
              {event.shortTitle}
            </a>{" "}
            / <span aria-current="page">RSVP</span>
          </nav>

          {/* Heading and what they're RSVPing for */}
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            RSVP for {event.title}
          </h1>
          <p className="mt-3 text-gray-600">
            {formatDateLong(event.date)} · {event.timeFull}
            <br />
            {event.venue}, {event.fullAddress}
          </p>

          {/* Form card */}
          <form className="mt-8 space-y-5 rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                First name
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  required
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                Last name
                <input
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  required
                  className={inputClass}
                />
              </label>
            </div>

            <label className={labelClass}>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className={inputClass}
              />
            </label>

            <input
              type="submit"
              value="Submit RSVP"
              className="w-full cursor-pointer rounded-lg bg-[#09234A] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#0d3169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09234A] sm:w-auto"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default RSVPPage;