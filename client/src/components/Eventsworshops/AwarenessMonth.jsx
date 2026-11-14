import officalsphoto from "../../assets/images/group-photo-april-workshop.webp";

function AwarenessMonth() {
  return (
    <section className="bg-white">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <article className="grid items-center overflow-hidden rounded-2xl border-2 border-gray-200 
        bg-white transition hover:border-[#09234A] lg:grid-cols-[0.9fr_1.1fr]">

            <img
                src={officalsphoto}
                alt="Officals at the April 25, 2026 workshop at Madison Jr. High"
                className="block h-auto w-full"
            />
          <div className="p-8 sm:p-10">
            <p className="text-sm font-semibold text-gray-600">Every April</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Child Abuse Prevention Month in Eastern Idaho
            </h2>

            {/* TODO: add plans for upcoming April events here */}
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              April is National Child Abuse Prevention Month. On April 25, 2026,
              families joined us at Madison Jr. High for Keep Your Kids Safe in
              a Digital World, with a keynote by board director Scott Pope.
            </p>

            {/* TODO: link to the contact page */}
            <a
              href="#"
              className="mt-6 inline-block rounded-lg bg-[#09234A] px-6 py-3 font-semibold text-white transition hover:bg-[#0d3169]"
            >
              Follow Us For April Updates
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AwarenessMonth;