import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import EventsAndWorkshops from "./pages/EventsAndWorkshops";
import NotFound from "./pages/NotFound";
import OurTeam from "./pages/OurTeam";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import DonateSuccess from "./pages/DonateSuccess";
import DonateCancel from "./pages/DonateCancel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsAndWorkshops />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/success" element={<DonateSuccess />} />
        <Route path="/donate/cancel" element={<DonateCancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;