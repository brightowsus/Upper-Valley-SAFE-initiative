import kristinImage from "../../assets/images/kristin.webp";
import DeanImage from "../../assets/images/dean.webp";
import joshImage from "../../assets/images/josh.webp";
import scottImage from "../../assets/images/scott.webp";
import LyndaImage from "../../assets/images/lynda.webp";
import AveryImage from "../../assets/images/avery.webp";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Kristin Coleman",
      role: "Co-Founder · Chair, Board of Directors",
      bio: "Kristin works as a victim advocate and public speaker with a background in organizational consulting, Principle-Centered Leadership, and community education focused on protecting children and strengthening families.",
      image: kristinImage,
    },
    {
      name: "Dean Coleman",
      role: "Co-Founder · Vice-Chair, Board of Directors",
      bio: "Dean brings decades of leadership experience in national security, intelligence, organizational consulting, and higher education.",
      image: DeanImage,
    },
    {
      name: "Chief Josh Rhodes",
      role: "Board Director · Law Enforcement Liaison",
      bio: "Chief Rhodes has served as Rexburg’s Chief of Police since 2022, bringing extensive law enforcement and leadership experience and a strong commitment to community safety, public trust, and collaborative partnerships",
      image: joshImage,
    },
    {
      name: "Scott Pope",
      role: "Board Director · Finance",
      bio: "Scott Pope serves as Chair of the Business Management Department at BYU–Idaho, bringing extensive corporate experience in finance, leadership development, and organizational management.",
      image: scottImage,
    },
    {
      name: "Lynda Hawkes",
      role: "Chair of Educational Programs",
      bio: "Seasoned educator and experienced curriculum designer with extensive expertise in instructional development and creating engaging, age-appropriate learning experiences.",
      image: LyndaImage,
    },
    {
      name: "Avery Moss",
      role: "Project Manager",
      bio: "Provides essential project coordination, organizational oversight and operational support, keeping UVSI’s initiatives focused, organized and on track.",
      image: AveryImage ,
    },
  ];

  const boardMembers = [
    "Kristin Coleman, Chair",
    "Dean Coleman, Vice-Chair",
    "Josh Rhodes, Board Director & Liaison",
    "Scott Pope, Board Director & Finance",
  ];

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-8 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* Breadcrumb */}
        <nav
          className="mb-7 flex items-center gap-1.5 text-xs text-[#17345f] sm:text-sm"
          aria-label="Breadcrumb"
        >
          <a
            href="/"
            className="underline underline-offset-2 transition-colors duration-300 hover:text-[#41679c]"
          >
            Home
          </a>

          <span>/</span>

          <span aria-current="page">Our Team</span>
        </nav>

        {/* Section heading */}
        <div className="mb-7 max-w-[600px]">
          <h2 className="mb-3 text-[26px] font-bold leading-tight tracking-tight text-[#111827] sm:text-[32px]">
            Our team
          </h2>

          <p className="text-[13px] leading-[1.8] text-[#203d63] sm:text-[14px]">
            We're a volunteer-led collective of advocates, educators, public
            servants, mental health providers, medical professionals and
            community leaders. Our volunteers include professionals in law
            enforcement, internet crimes investigation, education and medicine.
          </p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="w-full min-w-0 max-w-[220px] sm:max-w-none"
            >
              {/* Team member photo */}
              <div className="group relative mb-3 aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-xl border border-[#d1d8e0] bg-[#e2e6eb] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#17345f]/50 hover:shadow-xl hover:shadow-[#17345f]/20">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                ) : (
                  <>
                    <svg
                      viewBox="0 0 300 375"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden="true"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="300"
                        y2="375"
                        stroke="#cbd2db"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="300"
                        y1="0"
                        x2="0"
                        y2="375"
                        stroke="#cbd2db"
                        strokeWidth="1.2"
                      />
                    </svg>

                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#d1d8e0] bg-white px-3 py-1.5 text-[10px] text-[#203d63]">
                      Headshot
                    </span>
                  </>
                )}

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102747]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#17345f] transition-all duration-500 ease-in-out group-hover:w-full" />
              </div>

              {/* Member information */}
              <div>
                <h3 className="mb-1 text-sm font-bold leading-tight text-[#111827] transition-colors duration-300 hover:text-[#17345f] sm:text-base">
                  {member.name}
                </h3>

                <p className="mb-1 text-xs leading-5 text-[#203d63] sm:text-[13px] sm:leading-6">
                  {member.role}
                </p>

                <p className="text-[11px] leading-[1.6] text-[#52647c] sm:text-xs sm:leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Board of directors */}
        <div className="mt-9 rounded-xl bg-[#f1f3f5] px-4 py-5 transition-shadow duration-300 hover:shadow-md sm:px-6 sm:py-6">
          <h3 className="mb-4 text-base font-bold text-[#111827] sm:text-[17px]">
            Board of directors
          </h3>

          <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {boardMembers.map((member) => (
              <p
                key={member}
                className="text-xs leading-6 text-[#203d63] transition-colors duration-300 hover:text-[#41679c] sm:text-[13px]"
              >
                {member}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
