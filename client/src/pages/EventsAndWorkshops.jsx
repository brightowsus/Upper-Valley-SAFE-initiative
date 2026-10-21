import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventHero from "../components/Eventsworshops/EventHero";
import UpComing from "../components/Eventsworshops/UpComing";

function EventsAndWorkshops() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <EventHero />
        <UpComing />
        
      </main>

      <Footer />
    </>
  );
}

export default EventsAndWorkshops;