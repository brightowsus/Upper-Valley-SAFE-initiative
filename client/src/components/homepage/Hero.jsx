import heroImage from "../../assets/images/close-up-girl-with-parent-tablet.webp";
import { FaArrowRight } from "react-icons/fa";
 
function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="grid w-full items-center gap-14 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pb-20 lg:pt-10">
        {/* Left content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-600">
            Protecting kids in a digital world
          </p>
 
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Internet Safety and Child Exploitation Prevention for Eastern Idaho
            Families
          </h1>
 
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We give families, educators and communities the tools to keep kids
            safe online and in the real world, and to prevent exploitation
            before it happens. Every workshop, school program and parent guide
            we offer is free.
          </p>
 
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-[#09234A] px-6 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-[#0d3169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09234A]"
            >
              See the next free workshop
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-[#09234A] px-6 py-3.5 text-center font-semibold text-[#09234A] transition hover:bg-[#09234A]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09234A]"
            >
              Read the parent guides
            </a>
          </div>
 
          <p className="mt-6 text-sm text-gray-500">
            Volunteer-Supported· Free for families · Based in Rexburg, serving Eastern Idaho
          </p>
        </div>
 
        {/* Image and Card*/}
        <div className="relative mb-10 lg:mb-0">
          <img
            src={heroImage}
            alt="A parent and children talking together about staying safe online"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
 
          <div className="absolute -bottom-10 left-4 w-[17.5rem] rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:w-80 lg:-left-8">
            <p className="text-xs font-semibold text-gray-500">
              Next community workshop
            </p>
            <h2 className="mt-1.5 text-lg font-bold leading-snug text-gray-900">
              Keep Your Kids Safe in a Digital World
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Saturday, November 14 · 5:00–7:00 pm
              <br />
              Madison Jr. High, Rexburg · Free
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#09234A] underline underline-offset-4 transition hover:text-[#EE4024]"
            >
              RSVP
              <FaArrowRight className="text-xs" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;