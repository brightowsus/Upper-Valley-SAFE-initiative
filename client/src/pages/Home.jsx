import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default Home;