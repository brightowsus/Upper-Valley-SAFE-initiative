import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventHero from "../components/Eventsworshops/EventHero";
import UpComingEvents from "../components/Eventsworshops/UpComing";
import ParentNight from "../components/Eventsworshops/ParentNight";
import Calendar from "../components/Eventsworshops/Calendar";
import AwarenessMonth from "../components/Eventsworshops/AwarenessMonth";
import FundCom from "../components/Eventsworshops/FundAndCom";
import RequestPres from "../components/Eventsworshops/RequestPres";
import PastEvents from "../components/Eventsworshops/PastEvents";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>
    Upper Valley SAFE Initiative | Events and Workshops
  </title>

  <meta
    name="description"
    content="The events and workshops of what the Upper Valley SAFE Initiative does."
  />
</Helmet>

function EventsAndWorkshops() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <EventHero />
        <UpComingEvents />
        <ParentNight />
        <Calendar />
        <AwarenessMonth />
        <FundCom />
        <RequestPres />
        <PastEvents />
        
      </main>

      <Footer />
    </>
  );
}

export default EventsAndWorkshops;