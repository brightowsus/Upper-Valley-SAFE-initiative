const SafeSection = () => {
  const safeValues = [
    {
      letter: "S",
      title: "Safety",
      description:
        "Every child and family deserves to live free from preventable harm. We identify risks early and teach practical protective skills.",
    },
    {
      letter: "A",
      title: "Awareness",
      description:
        "Understanding what is changing and what to watch for, shared in practical, easy-to-understand language.",
    },
    {
      letter: "F",
      title: "Freedom",
      description:
        "The knowledge, confidence and support to navigate digital and physical environments with less vulnerability.",
    },
    {
      letter: "E",
      title: "Education",
      description:
        "Our primary prevention strategy, delivered through programs, family workshops, mentorship and partnerships.",
    },
  ];

  const guidingValues = [
    {
      title: "Integrity",
      description:
        "Honest, ethical and accountable in every decision.",
    },
    {
      title: "Collaboration",
      description:
        "Partnerships that multiply community impact.",
    },
    {
      title: "Service",
      description:
        "We exist to serve the community.",
    },
    {
      title: "Respect",
      description:
        "Dignity, inclusion and professionalism for everyone.",
    },
    {
      title: "Stewardship",
      description:
        "Gifts of time and money managed wisely.",
    },
  ];

  return (
    <section className="w-full bg-white px-5 px-5 py-12 sm:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* SAFE heading */}
        <div className="mb-8">

          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.5px] text-[#111827] sm:text-[30px]">
            What SAFE stands for
          </h2>
        </div>

        {/* SAFE cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {safeValues.map((item) => (
            <article
              key={item.letter}
              className="min-h-[256px] rounded-[10px] border border-[#20252b] px-[22px] py-5 transition-shadow duration-200 hover:shadow-md"
            >
              <span className="mb-3 block text-[48px] font-bold leading-[1] tracking-tight text-[#20252b]">
                {item.letter}
              </span>

              <h3 className="mb-2 text-[16px] font-bold leading-tight text-[#111827]">
                {item.title}
              </h3>

              <p className="text-[12px] leading-[1.65] text-[#203d63]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Guiding values */}
        <div className="mt-11">
          <h2 className="mb-5 text-[18px] font-bold tracking-[-0.3px] text-[#111827]">
            We're also guided by
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {guidingValues.map((value) => (
              <article
                key={value.title}
                className="border-t-2 border-[#303030] pt-3"
              >
                <h3 className="mb-1 text-[13px] font-bold text-[#111827]">
                  {value.title}
                </h3>

                <p className="text-[12px] leading-[1.6] text-[#203d63]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeSection;