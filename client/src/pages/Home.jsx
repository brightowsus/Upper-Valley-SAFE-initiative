import Navbar from "../components/Navbar";
import Hero from "../components/homepage/Hero";
import Footer from "../components/Footer";
import WhereToStart from "../components/homepage/WhereToStart";
import WhatWeTeach from "../components/homepage/WhatWeTeach";
import SaferFuture from "../components/homepage/SaferFuture";
import FeaturedProgram from "../components/homepage/Featuredprogram";
import UpcomingEvents from "../components/homepage/Upcomingevents";
import Testimonials from "../components/homepage/Quotes";
import Partners from "../components/homepage/Partners";
import CrisisHelp from "../components/homepage/Crisishelp";

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <WhereToStart />
        <WhatWeTeach />
        <FeaturedProgram />
        <SaferFuture />
        <UpcomingEvents />
        <Testimonials />
        <Partners />
        <CrisisHelp />
      </main>

      <Footer />
    </>
  );
}

export default Home;