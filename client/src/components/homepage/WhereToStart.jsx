import {
  FaHandHoldingHeart,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
 
const paths = [
  {
    title: "I'm a parent or caregiver",
    text: "Guides, workshops and conversation starters for every age.",
    cta: "See parent resources",
    href: "#",
    Icon: FaHandHoldingHeart,
  },
  {
    title: "I work with kids",
    text: "Bring Safety Heroes to your school, Activity Days group or youth program.",
    cta: "Explore Safety Heroes",
    href: "#",
    Icon: FaChalkboardTeacher,
  },
  {
    title: "I'm a teen who needs help",
    text: "Someone threatening to share photos of you? You are not in trouble. Here is what to do right now.",
    cta: "Get help now",
    href: "#",
    Icon: FaShieldAlt,
    urgent: true,
  },
  {
    title: "I want to help",
    text: "Volunteer, intern, partner or give. Every program stays free.",
    cta: "Get involved",
    href: "#",
    Icon: FaHandsHelping,
  },
];
 
function StartHere() {
  return (
    <section className="bg-[#F2F3F5]">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Where would you like to start?
        </h2>
        <p className="mt-3 max-w-xl text-gray-600">
          Pick the path that fits you. Each one leads to the help, programs or
          guides made for you.
        </p>
 
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map(({ title, text, cta, href, Icon}) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-xl border-2 border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#09234A] hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#09234A]/10 text-xl text-[#09234A] transition-colors duration-200 group-hover:bg-[#EE4024]/10 group-hover:text-[#EE4024]">
                <Icon aria-hidden="true" />
              </span>
 
              <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-[15px] leading-6 text-gray-600">
                {text}
              </p>
 
              <a
                href={href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#09234A] underline underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:text-[#EE4024]"
              >
                {cta}
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default StartHere;