import {
  ShieldCheck,
  UsersRound,
  Handshake,
} from "lucide-react";


const HowWeWork = () => {
const approaches = [
  {
    title: "School-based prevention",
    description:
      "Safety Heroes, our free after-school program, teaches kids 7–11 practical safety skills in partnership with local schools.",
    icon: ShieldCheck,
  },
  {
    title: "Family workshops",
    description:
      "Free workshops on digital and cyber safety, AI, healthy screen use, home and relationship safety, and exploitation prevention.",
    icon: UsersRound,
  },
  {
    title: "Community outreach",
    description:
      "Partnerships with schools, law enforcement, therapists and case managers, healthcare providers and faith communities.",
    icon: Handshake,
  },
];


  const educationTopics = [
    "Digital and cyber safety",
    "Emotional regulation and essential life skills",
    "Awareness and prevention of all forms of exploitation",
    "Home and relationship safety, including emerging AI platforms",
    "Basic emergency preparedness",
  ];

  return (
    <section className="w-full bg-[#f1f3f5] px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* Section heading */}
        <div className="mb-6 max-w-[470px]">
          <h2 className="mb-2 text-[24px] font-bold leading-tight tracking-tight text-[#111827] sm:text-[28px]">
            How we work
          </h2>

          <p className="text-[12px] leading-[1.8] text-[#203d63] sm:text-[13px]">
            Our approach is simple: reduce vulnerabilities, increase awareness
            and empower families with tools they can actually use. Our programs
            are shaped by law enforcement and other community partners, and they
            evolve with today's challenges.
          </p>
        </div>

        {/* Three approach cards */}

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {approaches.map((approach) => {
    const Icon = approach.icon;

    return (
      <article
        key={approach.title}
        className="rounded-xl border border-[#d1d8e0] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8eff8]">
          <Icon
            size={26}
            strokeWidth={1.8}
            className="text-[#17345f]"
          />
        </div>

        <h3 className="mb-3 text-lg font-bold leading-snug text-[#111827]">
          {approach.title}
        </h3>

        <p className="text-[14px] leading-7 text-[#203d63] sm:text-[15px]">
          {approach.description}
        </p>
      </article>
    );
  })}
</div>


        {/* Education focus panel */}
        <div className="mt-[18px] rounded-lg bg-white px-5 py-5 sm:px-6">
          <h3 className="mb-3 text-[13px] font-bold text-[#111827]">
            Our education focuses on
          </h3>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {educationTopics.map((topic) => (
              <li
                key={topic}
                className="relative pl-3 text-[11px] leading-[1.6] text-[#203d63] sm:text-[12px]"
              >
                <span className="absolute left-0 top-0">•</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
