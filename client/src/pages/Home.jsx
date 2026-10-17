import Navbar from "../components/Navbar";
import Hero from "../components/homepage/Hero";
import Footer from "../components/Footer";
import WhereToStart from "../components/homepage/WhereToStart";
import WhatWeTeach from "../components/homepage/WhatWeTeach";

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <WhereToStart />
        <WhatWeTeach />
      </main>

      <Footer />
    </>
  );
}

export default Home;