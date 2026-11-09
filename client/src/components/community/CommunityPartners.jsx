

const partners = [
  "Madison School District",
  "ICAC Task Force",
  "[Law enforcement partner]",
  "[Law enforcement partner]",
  "[Healthcare partner]",
  "[Mental health partner]",
  "[Faith community partner]",
  "[Business sponsor]",
];

const CommunityPartners = () => {
  return (
    <section className="w-full bg-white px-5 py-16 text-gray-900 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1074px]">

        {/* Heading and introduction */}
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[540px]">
            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#111827] sm:text-[26px]">
              Community partners
            </h2>

            <p className="text-[14px] leading-[1.65] text-[#203d63]">
              We partner with schools, law enforcement, therapists and
              practitioners, case managers, healthcare and mental health
              professionals, faith communities and local community leaders,
              all dedicated to child and family well-being. We don't replace
              existing services. We support and strengthen them by filling
              gaps and reinforcing shared goals across our community.
            </p>
          </div>

          <a
            href="mailto:info@uppervalleysafe.org?subject=Community%20Partnership"
            className="inline-flex shrink-0 items-center justify-center rounded-[4px] border border-[#111827] px-5 py-2.5 text-[12px] font-semibold text-[#111827] transition hover:bg-[#17345f] hover:text-white"
          >
            Become a partner
          </a>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative flex h-[66px] items-center justify-center overflow-hidden border border-[#cbd2d9] bg-[#e3e7eb]"
            >
              {/* Placeholder diagonal lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 66"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="66"
                  stroke="#cbd2d9"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="0"
                  y2="66"
                  stroke="#cbd2d9"
                  strokeWidth="1"
                />
              </svg>

              <span className="relative z-10 bg-white px-2 py-1 text-center text-[10px] text-[#41679c]">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityPartners;
