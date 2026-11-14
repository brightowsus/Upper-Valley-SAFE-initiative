
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationSuccess from "../components/donate/DonationSuccess";

const DonateSuccess = () => {
  return (
    <>
      <Helmet>
        <title>Thank You for Your Support | Upper Valley SAFE Initiative</title>
        <meta
          name="description"
          content="Thank you for supporting Upper Valley SAFE Initiative and helping protect children and strengthen families."
        />
      </Helmet>

      <Navbar />

      <main>
        <DonationSuccess />
      </main>

      <Footer />
    </>
  );
};

export default DonateSuccess;
