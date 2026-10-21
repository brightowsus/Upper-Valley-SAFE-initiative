import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
 
// If we want a real photo, import it at the top,
// then replace the placeholder <div> where it says "Image placeholder here":
// <img src={image_name} alt="..." className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
 
const lessons = [
  "Recognize safe, trusted adults and how trust is built",
  "Listen to their gut feelings",
  "Calm themselves when they feel scared or overwhelmed",
  "Protect personal information online",
];
 
function FeaturedProgram() {
  return (
    <section className="bg-[#F2F3F5]">
      <div className="grid w-full items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-20">
        {/* Image placeholder here */}
        <div
          role="img"
          aria-label="Safety Heroes lesson in a Madison School District classroom"
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#09234A]/10 to-[#09234A]/[0.03] text-[#09234A] ring-1 ring-gray-200"
        >
          <FaShieldAlt className="text-6xl" aria-hidden="true" />
          <span className="text-sm font-semibold">Safety Heroes</span>
        </div>
 
        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-gray-600">
            Featured program · Ages 7–11
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Safety Heroes: How We Teach Kids Safety
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            A free, interactive after-school program, offered in partnership
            with Madison School District. Through activities, discussion and
            role play, kids learn to:
          </p>
 
          <ul className="mt-5 space-y-3">
            {lessons.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle
                  className="mt-1 shrink-0 text-[#EE4024]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
 
          <p className="mt-6 font-bold text-gray-900">
            Designed to prepare children, not frighten them.
          </p>
 
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* Remember to add links in later */}
            <a
              href="#"
              className="rounded-lg bg-[#09234A] px-6 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-[#0d3169]"
            >
              See how Safety Heroes works
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-[#09234A] px-6 py-3.5 text-center font-semibold text-[#09234A] transition hover:bg-[#09234A]/5"
            >
              Bring it to your school
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default FeaturedProgram;