import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import EventsAndWorkshops from "./pages/EventsAndWorkshops";
import NotFound from "./pages/NotFound";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsAndWorkshops />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;