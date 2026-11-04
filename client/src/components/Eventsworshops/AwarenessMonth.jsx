import { FaHeart } from "react-icons/fa";

function AwarenessMonth() {
    return(
        <section className="bg-white">
            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <article className="grid overflow-hidden rounded-2xl border-2 border-gray-200
                bg-white transition hover:border-{#09234A] lg:grid-cols-[0.9fr_1.1fr] ">
                    <div role="img" aria-label="The April 25, 2026 workshop at Madison Jr. High" 
                    className="flex min-h-64 items-center justify-center bg-gradient-to-br 
                    from-[#09234A]/10 to-[#09234A]/[0.03]">
                        <FaHeart className="text-6xl text-[#09234A]" aria-hidden="true" />
                    </div>

                    <div className="p-8 sm:p-10">
                        <p className="text-sm font-semibold text-gray-600">
                            Every April
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight
                        text-gray-900 sm:text-4xl">
                            Child Abuse Prevention Month in Easter Idaho
                        </h2>

                        {/* ADD PLANS FOR LATER FOR EVENTS COMING IN APRIL*/}
                        <p className="mt-4 max-w-xl leading-7 text-gray-600">
                            April in National Child Abuse Prevention Month. On April 25,
                            2026, families joined us at Madison Jr. High for Keep Your Kids 
                            Safe in a Digital World, with a keynote by board director Scott Pope. 
                            !!!!!ADD PLANS!!!!!!
                        </p>

                        {/* Add link to contact us page*/}
                        <a href="#" className="mt-6 inline-block rounded-lg bg-[#09234A] px-6 py-3
                        font-semibold text-white transition hover:bg-[$0d3169]">
                            Follow Us For April Updates
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default AwarenessMonth;