import { Link } from "react-router-dom";

const DonationImpact = () => {
  return (
    <main className="w-full text-[#17345f]">
      {/* What Your Gift Does */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1074px] px-5">
          <h1 className="mb-4 text-3xl font-bold text-gray-950 sm:text-4xl">
            What your gift does
          </h1>

          <p className="mb-8 text-base leading-7">
            Every dollar stays in the Upper Valley and supports three things.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-t-[3px] border-gray-900 pt-4">
              <h2 className="mb-2 text-xl font-bold text-gray-950">
                Free workshops
              </h2>
              <p className="text-sm leading-6">
                Open to parents and educators throughout the region.
              </p>
            </div>

            <div className="border-t-[3px] border-gray-900 pt-4">
              <h2 className="mb-2 text-xl font-bold text-gray-950">
                Learning materials
              </h2>
              <p className="text-sm leading-6">
                High-quality resources for students and families.
              </p>
            </div>

            <div className="border-t-[3px] border-gray-900 pt-4">
              <h2 className="mb-2 text-xl font-bold text-gray-950">
                Youth engagement
              </h2>
              <p className="text-sm leading-6">
                Empowering children through interactive safety education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Section */}
      <section className="bg-[#f1f3f5] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1074px] grid-cols-1 items-center gap-10 px-5 md:grid-cols-[1.4fr_1fr]">
          {/* Left Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-950 sm:text-4xl">
              Stewardship you can trust
            </h2>

            <p className="mb-3 text-base leading-7">
              We recognize that community trust, donated resources, volunteer
              time and financial contributions are gifts entrusted to our care.
              We commit to managing them wisely and responsibly.
            </p>

            <p className="mb-6 text-base leading-7">
              As a volunteer-led nonprofit, we offer every program free of
              charge.
            </p>

            {/* Donation Allocation Bar */}
            <div
              className="mb-3 flex h-9 w-full overflow-hidden rounded-md border border-gray-400"
              aria-label="Donation allocation breakdown"
            >
              <div className="w-4/5 bg-[#15191c]"></div>
              <div className="w-[15%] bg-[#929ba3]"></div>
              <div className="w-[5%] bg-[#e1e5e8]"></div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-900">
              <span>[00%] programs</span>
              <span>[00%] operations</span>
              <span>[00%] fundraising</span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Replace these placeholders with verified financial allocation
              figures before publishing.
            </p>
          </div>

          {/* Right Information Card */}
          <div className="rounded-xl border border-[#d1d8e0] bg-white p-7 shadow-sm">
            <h3 className="mb-1 font-bold text-gray-950">Nonprofit</h3>

            <p className="mb-5 text-sm leading-6">
              Upper Valley SAFE Initiative · EIN 42-1825220
            </p>

            <h3 className="mb-1 font-bold text-gray-950">
              Questions about a gift?
            </h3>

            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-950 underline underline-offset-2 hover:text-[#41679c]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonationImpact;
