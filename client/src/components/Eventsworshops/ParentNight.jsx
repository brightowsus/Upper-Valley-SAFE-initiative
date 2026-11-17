import { FaChalkboardTeacher } from "react-icons/fa";


const steps = [
    {
        title: "Learn about Safety Heroes", 
        text: "What the lessons cover and why."},
    {
        title: "Meet the Facilitators", 
        text: "The UVSI team who will be working with your students."},
    {
        title: "Get Practical Tip For Home", 
        text:"Resources for safer habits, technology practices and environments at home."
    },
    {
        title: "Ask Your Questions",
        text: "Every question answered before lessons begin."
    },
];

const topics = [
    "Online and Cyber Safety",
    "Healthy Screen Use",
    "AI Platforms",
    "Sextortion",
    "Grooming Warning Signs",
    "Human Trafficking Awareness",
    "Emotional Regulation",
    "Home and Relationship Safety"
];

function ParentNight() {
    return (
        <section className="bg-white">
            <div className="grid w-full gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 
            lg:gap-20 lg:px-16 lg:py:20">
                <div>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                        What Happens At a Parent Information Night
                    </h2>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                        When Safety Heroes comes to a school, we host a Parent Information Night so Families can 
                        see exactly what their kids will learn. We strongly encourage parents to attend.
                    </p>

                    <ul className="mt-8 space-y-6 ">
                        {steps.map(({title, text}) =>
                        (
                            <li key={title} className="border-l-4 border-[#EE4024] pl-5">
                                <h3 className="font-bold text-gray-900">
                                    {title}
                                </h3>
                                <p className="mt-1 text-gray-600">
                                    {text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div role = "img" aria-label="A facilitator speaking with parents"
                    className=" flex aspect-[16/10] w-full items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#09234A]/10 to-[#09234A/[0.03] ring-1 ring-gray-200">
                        <FaChalkboardTeacher className="text-6xl text-[#09234A]" aria-hidden="true"/>
                    </div>

                    <h3 className="mt-8 font-bold text-gray-900">
                        Topics We Cover
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                        {topics.map((t) => (
                            <li key={t}
                            className="rounded-full border border-gray-300 bg-white px-4 py-1.5
                            text-sm text-gray-700">
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    );
}

export default ParentNight;