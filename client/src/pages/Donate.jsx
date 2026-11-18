
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateHero from "../components/donate/DonateHero";
import DonationForm from "../components/donate/DonationForm";
import DonationImpact from "../components/donate/DonationImpact";

const Donate = () => {
  return (
    <>
      <Helmet>
        <title>Donate | Help Protect Children in Eastern Idaho</title>
        <meta
          name="description"
          content="Support Upper Valley SAFE Initiative. Your donations help fund child safety education, family workshops and prevention programs in Eastern Idaho."
        />
        <meta
          property="og:title"
          content="Donate | Upper Valley SAFE Initiative"
        />
        <meta
          property="og:description"
          content="Help protect children and strengthen families across the Upper Valley through your donation."
        />
      </Helmet>

      <Navbar />

      {/* Hero and donation form */}
      <main className="min-h-screen w-full bg-[#f1f3f5] py-10 text-[#17345f] sm:py-14">
        <div className="mx-auto grid max-w-[1074px] grid-cols-1 items-start gap-10 px-5 md:grid-cols-[1.2fr_0.9fr] md:gap-12 lg:gap-16 sm:px-8">
          <DonateHero />
          <DonationForm />
        </div>
      </main>

      {/* Full-width donation impact sections */}
      <DonationImpact />

      <Footer />
    </>
  );
};

export default Donate;
