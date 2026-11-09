


const OurCommunity = () => {
  return (
    <section className="w-full bg-[#f1f3f5] px-4 py-12 sm:px-8 sm:py-16 lg:py-[70px]">
      <div className="mx-auto grid w-full max-w-[1074px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

        {/* Interactive Map */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-[#d1d8e0] shadow-sm sm:h-[310px]">
          <iframe
            title="Map of Rexburg and the Upper Valley service area"
            src="https://www.google.com/maps?q=Rexburg,Idaho&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Community Information */}
        <div className="max-w-[440px]">
          <h2 className="mb-4 text-[26px] font-bold leading-tight tracking-tight text-[#111827] sm:text-[30px]">
            Our community
          </h2>

          <p className="mb-3 text-[14px] leading-[1.8] text-[#203d63] sm:text-[15px]">
            We're based in Rexburg, in Madison County, and serve families
            across the Upper Valley.
          </p>

          <p className="text-[13px] leading-[1.8] text-[#52647c] sm:text-[14px]">
            Our community includes families, educators, professionals,
            and local organizations working together to protect children
            and strengthen families throughout the Upper Valley.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Rexburg%2C+Idaho"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#17345f] transition-colors duration-300 hover:text-[#41679c]"
          >
            Explore our location
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurCommunity;
