const events = [
    {
        month: "Oct",
        day: "20",
        tags: "Fundraiser · Rexburg · Ladies' night",
        title: "“Meemaw” Movie and Craft Night",
        details: "FatCats Rexburg · Tuesday, 6:00 - 10:00pm · Tickets $20",
        cta: "Buy tickets",
        // Add links later
        href: "#"
    },
    {
        month: "Nov",
        day: "14",
        tags: "Free family workshop · Rexburg · Parents, caregivers and community members",
        title: "Keep Your Kids Safe in a Digital World",
        details: "Madison Jr. High · Saturday, 5:00-7:00pm · Free · What every parents in the Upper Valley should know",
        cta: "RSVP",
        // Add links later
        href: "#"
    },
];

function UpcomingEvents() {
    return(
        <section className="bg-[#F2F3F5]">
            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <div className="flex items-end justify-between gap-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Upcoming Parenting WorkShops and Events
                    </h2>

                    {/* Remember to change link */}
                    <a href="#" className="shrink-0 text-sm font-bold text-[#09234A] underline
                    underline-offset-4 transition hover:text-[#EE4024]">
                        See All Events
                    </a>
                </div>

                <ul className="mt-10 space-y-4">
                    {events.map(({ month, day, tags, title, details, cta, href}) => (
                        <li key={title} className="flex flex-col gap-5 rounded-xl border-2 border-gray-200
                        bg-white p-5 transition hover:border-[#09234A] text-[#09234A" aria-hidden = "true">
                            
                            {/* Date Box */}
                            <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg
                            border-2 border-[#09234A] text-[#09234A]" aria-hidden="true">
                                <span className="text-xs font-bold uppercase tracking-wide">
                                    {month}
                                </span>
                                <span className="text-3xl font-extrabold leading-none">
                                    {day}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <p className="text-xs font-semibold text-gray-500">
                                    {tags}
                                </p>
                                <h3 className="mt-1 text-xl font-bold text-gray-900">
                                    <span className="sr-only">
                                        {month} {day};
                                    </span>
                                    {title}
                                </h3>
                                <p className="mt-1 text-[15px] leading-6 text-gray-600">
                                    {details}
                                </p>

                            </div>
                            <a href={href} className="shrink-0 rounded-lg bg-[#09234A] px-6 py-3 text-center
                            font-semibold text-white shadow-sm transition hover:bg-[#0d3169] focus-visible:outline
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09234A]">
                                {cta}
                            </a>
                        </li>
                    ))}

                </ul>

            </div>

        </section>
    );
}

export default UpcomingEvents;