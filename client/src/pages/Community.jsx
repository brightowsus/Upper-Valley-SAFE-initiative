
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurCommunity from "../components/community/OurCommunity";
import CommunityPartners from "../components/community/CommunityPartners";

const OurCommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Community | Rexburg, Idaho Child Abuse Prevention Nonprofit
        </title>

        <meta
          name="description"
          content="Discover the communities served by Upper Valley SAFE Initiative in Rexburg, Madison County, and across the Upper Valley."
        />

        <meta
          property="og:title"
          content="Our Community | Upper Valley SAFE Initiative"
        />

        <meta
          property="og:description"
          content="Learn about the Upper Valley communities served by Upper Valley SAFE Initiative and our commitment to protecting children and strengthening families."
        />
      </Helmet>

      <Navbar />
      <OurCommunity />
      <CommunityPartners />
      <Footer />
    </>
  );
};

export default OurCommunityPage;