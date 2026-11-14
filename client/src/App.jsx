import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import EventsAndWorkshops from "./pages/EventsAndWorkshops";
import NotFound from "./pages/NotFound";
import EventPage from "./pages/EventPage";
import RSVP from "./pages/RSVPPage";
import OurTeam from "./pages/OurTeam";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsAndWorkshops/>}></Route>
        <Route path="/events/:slug" element={<EventPage />}></Route>
        <Route path="/events/:slug/rsvp" element={<RSVP />}></Route>

        {/* Your other pages go here */}

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;