const NewsSection = () => {
  const newsItems = [
    {
      category: "BYU-Idaho Radio",
      date: "February 13, 2026",
      title:
        "Upper Valley SAFE Initiative seeks to inform community about digital safety",
    },
    {
      category: "Executive brief",
      date: "July 2026",
      title:
        "Child Digital Safety: a legislative policy framework for protecting children in the digital age",
    },
    {
      category: "Video",
      date: "April 25, 2026",
      title:
        "Keynote: Scott Pope on The Anxious Generation, screen time and kids' mental health",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* Section heading */}
        <h2 className="mb-8 text-[26px] font-bold leading-tight tracking-[-0.5px] text-[#111827] sm:text-[28px]">
          In the news and in policy
        </h2>

        {/* News cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="border-t-2 border-[#555555] pt-3"
            >
              <p className="mb-2 text-[11px] leading-[1.5] text-[#203d63]">
                {item.category} · {item.date}
              </p>

              <h3 className="text-[15px] font-bold leading-[1.7] tracking-[-0.2px] text-[#111827]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;