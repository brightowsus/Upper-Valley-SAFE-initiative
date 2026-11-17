
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import AboutHero from "../components/aboutpage/AboutHero";
import Footer from "../components/Footer";
import MissionSection from "../components/aboutpage/MissionVision";
import SafeSection from "../components/aboutpage/SafeSection";
import OurStory from "../components/aboutpage/OurStory";
import WhoWeServe from "../components/aboutpage/WhoWeServe";
import HowWeWork from "../components/aboutpage/HowWeWork";
import NewsSection from "../components/aboutpage/NewsSection";
import FAQSection from "../components/aboutpage/FAQSection";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Rexburg, Idaho Child Abuse Prevention Nonprofit</title>

        <meta
          name="description"
          content="Upper Valley SAFE Initiative is a volunteer-led Rexburg nonprofit that protects children and strengthens families by preventing exploitation before it happens."
        />

        <meta
          property="og:title"
          content="About Us | Rexburg, Idaho Child Abuse Prevention Nonprofit"
        />

        <meta
          property="og:description"
          content="Discover our mission, team, and work to protect children and strengthen families across the Upper Valley."
        />
      </Helmet>

      <Navbar />
      <AboutHero />
      <MissionSection />
      <SafeSection />
      <OurStory />
      <WhoWeServe />
      <HowWeWork />
      <NewsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default About;
