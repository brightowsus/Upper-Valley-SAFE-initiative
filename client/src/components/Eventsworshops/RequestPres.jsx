

const options = [
    {
        title: "Family Workshop",
        meta: "Parents and Caregivers · [Length]",
        text: "Digital safety, AI, healthy screen use and exploitation warning signs."
    },
    {
        title: "Safety Heroes",
        meta: "Kids ages 7 - 11 · Schools and Youth Groups",
        text: "Interactive lessons, plus a Parent Information Night"
    },
    {
        title: "Community Presentation",
        meta: "Community and NonProfit Groups · [Length]",
        text: "An overview of current risks in our area and how to prevent them." 
    }
]

function RequestPres(){
    return(
        <section className="bg-white">
            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <h2 className="max-w-3xl text-3xl font-extrabold 
                leading-tight tracking-tight text-gray-900 sm:text-4xl">
                    Request An Internet Safety Presentation For Parents
                </h2>

                {/* Add how far to book*/}
                <p mt-3 max-w-2xl text-gray-600>
                    We bring free prevention education to schools, churches, 
                    community groups and organizations
                    !!!!!! ADD HOW FAR TO BOOK!!!!!
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                {options.map(({ title, meta, text }) => (
                    <div
                    key={title}
                    className="rounded-xl border-2 border-gray-200 bg-white 
                    p-6 transition hover:-translate-y-1 hover:border-[#09234A] hover:shadow-lg"
                    >
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-xs font-semibold text-gray-500">{meta}</p>
                    <p className="mt-3 leading-7 text-gray-600">{text}</p>
                    </div>
                ))}
                </div>
                
                {/* REMEMBER TO ADD ACTUAL LINK*/}
                <a
                href="#"
                className="mt-8 inline-block rounded-lg bg-[#09234A] px-6 py-3 
                font-semibold text-white transition hover:bg-[#0d3169]"
                >
                Request a presentation
                </a>
            </div>
        </section>
    );
}

export default RequestPres;