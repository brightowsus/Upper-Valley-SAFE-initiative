
const ContactCTA = () => {
  return (
    <section className="w-full bg-[#17345f] px-5 py-12 text-white sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-[1074px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        {/* Text */}
        <div>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Want to learn more?
          </h2>

          <p className="text-sm leading-6 text-white sm:text-base">
            Ask a question, request a workshop or find out how to help.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#contact-form"
            className="rounded bg-white px-5 py-2.5 text-sm font-semibold text-[#17345f] transition hover:bg-gray-100"
          >
            Contact us
          </a>

          <a
            href="/get-involved"
            className="rounded border border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#17345f]"
          >
            Get involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
