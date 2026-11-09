const FAQSection = () => {
  const faqs = [
    {
      question: "What does SAFE stand for?",
      answer:
        "Safety, Awareness, Freedom and Education. It reflects our commitment to communities where every child can thrive with safety, freedom and hope.",
    },
    {
      question: "Is Upper Valley SAFE Initiative a nonprofit?",
      answer:
        "Upper Valley SAFE Initiative is a community-focused child safety and prevention initiative. For official nonprofit status and registration details, please contact our team.",
    },
    {
      question: "Who started Upper Valley SAFE?",
      answer:
        "Upper Valley SAFE Initiative was founded by Kristin and Dean Coleman, who recognized the need for coordinated, community-based prevention education focused on child and family safety.",
    },
    {
      question:
        "Are you part of a school district, church or government agency?",
      answer:
        "No. Upper Valley SAFE Initiative is an independent community initiative that works with schools, families, professionals and community partners.",
    },
    {
      question: "Who teaches your workshops and lessons?",
      answer:
        "Our workshops are supported by experienced volunteers and professionals in fields such as education, law enforcement, internet crimes investigation and medicine.",
    },
    {
      question: "How is your work funded?",
      answer:
        "Our work is supported through community partnerships, donations, fundraising and contributions from people who believe in protecting children and strengthening families.",
    },
  ];

  return (
    <section className="w-full bg-[#f1f3f5] px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1074px] grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.3fr] md:gap-14 lg:gap-[75px]">

        {/* Left content */}
        <div>

          <h2 className="mb-4 text-[28px] font-bold leading-[1.7] tracking-[-0.7px] text-[#111827] sm:text-[32px]">
            Frequently asked questions
          </h2>

          <p className="max-w-[290px] text-[14px] leading-[1.65] text-[#203d63]">
            About Upper Valley SAFE. Don't see your question?{" "}
            <a
              href="/contact"
              className="font-semibold text-[#111827] underline underline-offset-2 hover:text-[#203d63]"
            >
              Contact us
            </a>.
          </p>
        </div>

        {/* Right FAQ accordion */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0 }
              className="border-t border-[#d8dde2] last:border-b"
            >
              <summary className="cursor-pointer py-[17px] text base font-bold leading-[1.5] text-[#111827] marker:text-black marker:text-[12px]">
                <span className="text-[12px] transition-transform duration-200 group-open:rotate-90">
                </span>

                {faq.question}
              </summary>

              <div className="pb-[16px] pl-0">
                <p className="text-[13px] leading-[1.7] text-[#203d63]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;