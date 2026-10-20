import heroImage from "../../assets/images/hero_image.avif";

const AboutHero = ({
  homeHref = "/",
  teamHref = "#team",
  workshopHref = "#workshops",
}) => {
  return (
    <section className="w-full bg-white px-5 py-10 text-gray-900 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-[1074px]">
        {/* Breadcrumb */}
        <nav
          className="mb-10 flex items-center gap-1.5 text-sm text-[#17345f]"
          aria-label="Breadcrumb"
        >
          <a
            href={homeHref}
            className="underline underline-offset-2 transition hover:text-[#41679c]"
          >
            Home
          </a>
          <span>/</span>
          <span aria-current="page">About us</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.12fr_1fr] lg:gap-[54px]">
          {/* Left content */}
          <div className="min-w-0">

            <h1 className="mb-6 text-[36px] font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              A Rexburg nonprofit working to prevent child abuse across the
              Upper Valley
            </h1>

            <p className="max-w-[510px] text-base leading-7 text-[#203d63] sm:text-lg sm:leading-[1.6]">
              Upper Valley SAFE Initiative is a volunteer-led nonprofit that
              protects children, strengthens families and builds safer,
              resilient communities by preventing exploitation before it
              happens.
            </p>

            <div className="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
              <a
                href={teamHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-md border-2 border-[#17345f] bg-[#17345f] px-5 py-3 text-center text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#254b7d] hover:bg-[#254b7d]"
              >
                Meet our team
              </a>

              <a
                href={workshopHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-md border-2 border-gray-900 bg-white px-5 py-3 text-center text-sm font-bold text-gray-900 transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Bring a workshop to your group
              </a>
            </div>
          </div>

          {/* Right image collage */}
          <div className="grid h-[300px] min-w-0 grid-cols-2 gap-3 sm:h-[397px] sm:gap-4">
            {/* Main image */}
            <div className="min-h-0 overflow-hidden rounded-xl">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Upper Valley SAFE Initiative family workshop"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-gray-300 bg-gray-200">
                  <div className="absolute h-[150%] w-px rotate-[32deg] bg-gray-300" />
                  <div className="absolute h-[150%] w-px -rotate-[32deg] bg-gray-300" />
                  <span className="relative z-10 max-w-[80%] border border-gray-300 bg-white px-3 py-2 text-center text-xs leading-5 text-[#35506f]">
                  </span>
                </div>
              )}
            </div>

            {/* Two smaller images */}
            <div className="grid min-h-0 grid-rows-2 gap-3 sm:gap-4">
              <div className="min-h-0 overflow-hidden rounded-xl">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt="Safety Heroes lesson"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-gray-300 bg-gray-200">
                    <div className="absolute h-[150%] w-px rotate-45 bg-gray-300" />
                    <div className="absolute h-[150%] w-px -rotate-45 bg-gray-300" />
                    <span className="relative z-10 max-w-[80%] border border-gray-300 bg-white px-3 py-2 text-center text-xs leading-5 text-[#35506f]">
                    </span>
                  </div>
                )}
              </div>

              <div className="min-h-0 overflow-hidden rounded-xl">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt="Upper Valley SAFE Initiative volunteers"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-gray-300 bg-gray-200">
                    <div className="absolute h-[150%] w-px rotate-45 bg-gray-300" />
                    <div className="absolute h-[150%] w-px -rotate-45 bg-gray-300" />
                    <span className="relative z-10 max-w-[80%] border border-gray-300 bg-white px-3 py-2 text-center text-xs leading-5 text-[#35506f]">
                      Photo: UVSI volunteers
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
