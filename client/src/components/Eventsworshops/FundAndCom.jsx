import { FaFilm } from "react-icons/fa";

function FundCom() {
      return (
    <section className="bg-[#F2F3F5]">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Fundraisers and community events
        </h2>
        <p className="mt-3 text-gray-600">
          Come have fun with us and support our work in the community.
        </p>
 
        <article className="mt-10 grid overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition hover:border-[#09234A] lg:grid-cols-[0.9fr_1.1fr]">

          <div
            role="img"
            aria-label="Friends crafting together at a movie night"
            className="flex min-h-64 items-center justify-center bg-gradient-to-br from-[#09234A]/10 to-[#09234A]/[0.03]"
          >
            <FaFilm className="text-6xl text-[#09234A]" aria-hidden="true" />
          </div>
 
          <div className="p-8 sm:p-10">
            <p className="text-sm font-semibold text-gray-600">
              Tuesday, October 20, 2026 · 6:00–10:00 pm · FatCats Rexburg, 475 N 2nd E
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
              “Meemaw” Movie and Craft Night
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Ladies, grab your girl tribe and your crafts! Join us for our
              first ladies’ Meemaw Movie and Craft Night. Come craft, laugh,
              snack, sip and enjoy the quintessential ladies’ movie, Sense and
              Sensibility, all while supporting a local cause.
            </p>
            <p className="mt-4 font-bold text-gray-900">
              Tickets $20 · Doors open at 6:00 pm
            </p>
            <a
              href="#"
              className="mt-6 inline-block rounded-lg bg-[#09234A] px-6 py-3 font-semibold text-white transition hover:bg-[#0d3169]"
            >
              Buy tickets
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FundCom;