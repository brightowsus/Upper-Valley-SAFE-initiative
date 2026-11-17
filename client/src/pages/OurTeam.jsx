
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurTeamHero from "../components/ourteam/OurTeamHero";

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Team | Rexburg, Idaho Child Abuse Prevention Nonprofit
        </title>

        <meta
          name="description"
          content="Meet the volunteers, founders, educators and community leaders behind Upper Valley SAFE Initiative in Rexburg, Idaho."
        />

        <meta
          property="og:title"
          content="Our Team | Upper Valley SAFE Initiative"
        />

        <meta
          property="og:description"
          content="Meet the dedicated team working to protect children and strengthen families across the Upper Valley."
        />
      </Helmet>

      <Navbar />
      <OurTeamHero />
      <Footer />
    </>
  );
};

export default OurTeam;
