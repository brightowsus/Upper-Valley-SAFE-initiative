import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/Eventsworshops/EventsDetails";
import { getEventBySlug } from "../components/Eventsworshops/eventsPage";
 
// Route: /events/:slug  → looks the event up in eventPages.js
function EventPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);
 
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>
          {event ? `${event.title} | Upper Valley SAFE Initiative` : "Event not found | Upper Valley SAFE Initiative"}
        </title>
        {event && <meta name="description" content={event.summary} />}
      </Helmet>
 
      <Navbar />
 
      <main className="flex-1">
        {event ? (
          <EventDetail event={event} />
        ) : (
          <section className="w-full px-6 py-24 text-center sm:px-10 lg:px-16">
            <h1 className="text-4xl font-extrabold text-gray-900">Event not found</h1>
            <p className="mt-4 text-gray-600">
              We couldn’t find that event. It may have moved or been removed.
            </p>
            <a
              href="/events"
              className="mt-8 inline-block rounded-lg bg-[#09234A] px-6 py-3 font-semibold text-white transition hover:bg-[#0d3169]"
            >
              See all events
            </a>
          </section>
        )}
      </main>
 
      <Footer />
    </div>
  );
}
 
export default EventPage;