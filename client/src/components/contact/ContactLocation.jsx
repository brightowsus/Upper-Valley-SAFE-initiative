
const ContactLocation = () => {
  return (
    <section className="w-full bg-[#f1f3f5] px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1074px] grid-cols-1 items-center gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-10">
        <div className="h-[260px] w-full overflow-hidden rounded-lg border border-[#d1d8e0] sm:h-[300px]">
          <iframe
            title="Map showing Rexburg, Idaho"
            src="https://www.google.com/maps?q=Rexburg%2C%20Idaho&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="md:pl-5">
          <h2 className="mb-3 text-2xl font-bold text-[#111827] sm:text-3xl">
            We come to you
          </h2>

          <p className="mb-4 text-base leading-7 text-[#203d63]">
            We're based in Rexburg and work with schools, churches and
            community groups across the Upper Valley.
          </p>

          <a
            href="/community"
            className="text-sm font-semibold text-[#17345f] underline underline-offset-4 hover:text-[#41679c]"
          >
            See our community
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
