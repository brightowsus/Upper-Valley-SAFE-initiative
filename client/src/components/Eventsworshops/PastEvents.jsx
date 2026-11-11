import {FaCamera, FaVideo} from "react-icons/fa";
//import keynotescottpope from "../assets/images/keynote-scott-pope.webp";

//REMEMBER TO ADD LINKS LATER
const past = [
    {
        title: "Recap: Keep Your Kids Safe in a Digital World",
        meta: "April 25, 2026 · Madison Jr. High, Rexburg",
        text: "Parents and community members learned what every parent in \
        Easter Idaho should know about keeping kids safe online.",
        Icon: FaCamera,
        href: "#"
    },
    {
        title: "What the Keynote: Scott Pope on The Anxious Generation",
        meta: "Video · April 25, 2026",
        text: "Scott spoke about the findings from The Anxious Generation, how \
        excess screen time affects kids' mental health and wellbeing, and strategies \
        for our community",
        Icon: FaVideo,
        href: "#"
    }
];

function PastEvents() {
    return(
        <section className="bg-[#F2f3f5]">
            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Past Events
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {past.map(({title, meta, text, Icon, href}) => (
                        <a key={title} href={href} className="group flex flex-col overflow-hidden rounded-xl
                        border-2 border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#09234A]
                        hover:shadow-lg">
                            {/* REMEMBER TO ADD IMAGES */}

                            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#09234A]/[0.03]">
                                <Icon className="text-5xl text-[#09234A] transition-colors duration-200
                                group-hover:text-[#EE4024]" aria-hidden="true">

                                </Icon>
                            </div>
                            <div className="p-6">
                                <p className="text-xs font-semibold text-gray-500">
                                    {meta}
                                </p>
                                <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
                                    {title}
                                </h3>
                                <p className="mt-2 text-[15px] leading-6 text-gray-600">
                                    {text}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PastEvents;