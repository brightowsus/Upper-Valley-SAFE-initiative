import {FaUsers} from "react-icons/fa";

function EventHero() {
    return(
        <section className="bg-white">
            <div className="w-full px-6 pb-14 pt-6 sm:px-10 lg:px-16 lg:pb-20">
                <nav aria-label="Breadcrumb" className=" text-xs text-gray-500">
                    <a href="/" className="text-[#09234A] underline underline-offset-2-hover:text-[#EE4024]">
                    Home
                    </a>{" "}
                    / <span aria-current="page">
                    Events &amp; workshops
                    </span>
                </nav>

                <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h1 className="text-4x1 font-extrabold leading-[1.08] tracking-tight text-gray-900
                        sm:text-5xl lg:text-6xl">
                            Parenting Workshops and Parent Nights in Eastern Idaho

                        </h1>
                        <p className=" mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Free workshops where parents, caregivers, and community members learn
                            the risks, settings, and warning signs that matter right now, explained in
                            practical, easy-to-understand language.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a href="#upcoming" className="rounded-lg bg-[#09234A] px-6 py-3.5 text-center
                            font-semibold text-white shadow-sm transition hover:bg-[#0d3169">
                                Request a workshop
                            </a>
                        </div>
                    </div>

                    <article className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white
                    shadow-lg transition hover:border-[#09234A]">
                        {/* needs to put a real photo later*/}
                        <div className="flex h-48 items-center justify-center bg-gradient-to-br
                        from-[#09234A]/10 to-[#09234A]/[0.03] sm:h-56">
                            <FaUsers className="text-6xl text-[#09234A]" aria-hidden="true">

                            </FaUsers>

                        </div>
                        <div className="flex gap-5 p-6">
                            <div className="flex h=16 w-16 shrink-0 flex-col items-center justify-center rounded-lg
                            border-2 border-[#09234A] text[#09234A]" aria-hidden="true">
                                <span className="text-xs font-bold uppercase">
                                    Nov
                                </span>
                                <span className="text-2xl font-extrabold leading-none">
                                    14
                                </span>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500">
                                    Next Workshop · Free family workshop · Rexburg
                                </p>
                                <h2 className="mt-1 text-2xl font-bold leading-snug text-gray-900">
                                    Keep Your Kids Safe in a Digital World
                                </h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    What every parent in the Upper Valley should know
                                </p>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    Saturday, November 14 · 5:00–7:00 pm
                                    <br />
                                    Madison Jr. High, 134 Madison Ave, Rexburg · Free
                                </p>

                                {/* Change Link LATER*/}
                                <a href="#" className="mt-4 inline-block rounded-lg bg-[#09234A] px-5
                                py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d3169]">
                                    RSVP
                                </a>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </section>
    );
}

export default EventHero;