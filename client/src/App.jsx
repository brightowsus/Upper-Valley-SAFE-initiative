import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsAndWorkshops from "./pages/EventsAndWorkshops";
import NotFound from "./pages/NotFound";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsAndWorkshops/>}></Route>
        <Route path="/events/:slug" element={<EventPage />}></Route>

        {/* Your other pages go here */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;