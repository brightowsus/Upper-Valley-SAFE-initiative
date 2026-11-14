const OurStory = () => {
  const milestones = [
    {
      date: "Early 2026",
      description:
        "Founded in Rexburg by Kristin and Dean Coleman; first public workshop",
    },
    {
      date: "Feb 2026",
      description: "Featured on BYU-Idaho Radio",
    },
    {
      date: "Apr 2026",
      description:
        "Keep Rexburg Kids Safe in a Digital World workshop at Madison Jr. High, with a keynote by board director Scott Pope",
    },
    {
      date: "July 2026",
      description:
        "Executive brief on child digital safety policy for Idaho",
    },
    {
      date: "Fall 2026",
      description:
        "Safety Heroes partnership with Madison School District; fall internship begins",
    },
    {
      date: "Oct 2026",
      description: 'First "Meemaw" Movie and Craft Night fundraiser',
    },
    {
      date: "Nov 2026",
      description:
        "Keep Rexburg Kids Safe in a Digital World workshop at Madison Jr. High",
    },
  ];

  return (
    <section className="w-full bg-[#f1f3f5] px-5 py-12 sm:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* Story and image */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr] md:gap-12">
          <div>
            <h2 className="mb-5 text-[28px] font-bold leading-tight tracking-[-0.6px] text-[#111827]">
              Our story
            </h2>

            <div className="space-y-3 text-[13px] leading-[1.75] text-[#203d63] sm:text-[14px]">
              <p>
                Upper Valley SAFE Initiative was founded on a simple yet
                urgent truth: the digital landscape is evolving faster than
                our ability to protect our most vulnerable. Co-founders
                Kristin and Dean Coleman saw a clear need for coordinated,
                community-based prevention education focused on child and
                family safety, and we began as a local collective of
                educators and parents who shared that vision.
              </p>

              <p>
                Our volunteers are professionals in fields like law
                enforcement, internet crimes investigation, education and
                medicine. We learn from experts, then turn that training
                into practical workshops for local families, free of charge.
              </p>

              <p>
                Our first public workshop, in early 2026, drew community
                leaders including the mayor, the county sheriff, the
                Rexburg police chief and ICAC Task Force representatives.
                [Add the date of the first workshop, and confirm names and
                titles.]
              </p>
            </div>
          </div>

          {/* Photo and founding belief */}
          <div>
            <div
              role="img"
              aria-label="Placeholder for a photo of Kristin and Dean Coleman"
              className="relative flex aspect-[1.38/1] w-full items-center justify-center overflow-hidden rounded-[10px] border border-[#cbd2d9] bg-[#e2e7eb]"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 290"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="290"
                  stroke="#d1d8df"
                  strokeWidth="1.5"
                />
                <line
                  x1="400"
                  y1="0"
                  x2="0"
                  y2="290"
                  stroke="#d1d8df"
                  strokeWidth="1.5"
                />
              </svg>

              <span className="relative bg-white px-2 py-1 text-[10px] text-[#203d63] shadow-sm">
                Photo: Kristin and Dean Coleman
              </span>
            </div>

            <blockquote className="mt-[18px] border-l-[3px] border-[#20252b] py-0.5 pl-4">
              <p className="text-[18px] font-bold leading-[1.35] tracking-[-0.3px] text-[#111827]">
                “Communities are safer when prevention comes before crisis.”
              </p>
            </blockquote>

            <p className="mt-2 pl-[19px] text-[12px] text-[#203d63]">
              Our founding belief
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 border-t border-[#303030] pt-5 sm:mt-12">
          <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article key={milestone.date}>
                <h3 className="mb-2 text-[18px] font-bold leading-tight text-[#111827]">
                  {milestone.date}
                </h3>

                <p className="text-[12px] leading-[1.65] text-[#203d63] sm:text-[13px]">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;