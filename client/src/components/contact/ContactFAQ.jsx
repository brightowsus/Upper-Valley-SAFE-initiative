
const faqs = [
  {
    question: "Can I report abuse through this form?",
    answer:
      "Please don't use this form to report abuse or emergencies. Call 911 if a child is in immediate danger. For suspected abuse in Idaho, call 855-552-KIDS (5437). For online exploitation, use the CyberTipline.",
  },
  {
    question: "Do you offer counseling?",
    answer:
      "We focus on prevention education. If your family needs support, the Upper Valley Child Advocacy Center in Rigby, (208) 745-2612, and our help directory are good places to start.",
  },
  {
    question: "Do you charge for workshops or presentations?",
    answer:
      "No. Everything we offer is free of charge.",
  },
  {
    question: "How soon will you reply?",
    answer:
      "We aim to respond to messages as soon as possible. We will get back to you using the contact information you provide.",
  },
  {
    question: "Who do I contact about the internship?",
    answer:
      "Choose “Volunteering or internships” in the form above, and our project manager will follow up.",
  },
];

const ContactFAQ = () => {
  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1074px] grid-cols-1 gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
        <div>

          <h2 className="mb-4 max-w-[300px] text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="text-base text-[#203d63]">
            Before you write.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-[#d1d8e0] py-4 first:border-t"
              open={index === 0}
            >
              <summary className="cursor-pointer text-base font-semibold text-[#111827]">
                {faq.question}
              </summary>

              <p className="mt-4 text-sm leading-7 text-[#405675]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
