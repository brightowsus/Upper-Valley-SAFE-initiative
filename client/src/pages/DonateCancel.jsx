
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationCancel from "../components/donate/DonationCancel";

const DonateCancel = () => {
  return (
    <>
      <Helmet>
        <title>Donation Cancelled | Upper Valley SAFE Initiative</title>

        <meta
          name="description"
          content="Your donation was not completed. You can return to Upper Valley SAFE Initiative's donation page whenever you're ready."
        />
      </Helmet>

      <Navbar />

      <main>
        <DonationCancel />
      </main>

      <Footer />
    </>
  );
};

export default DonateCancel;
