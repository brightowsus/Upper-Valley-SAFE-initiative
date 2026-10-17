import{
    FaLaptop,
    FaUserShield,
    FaRobot, 
    FaHome
} from "react-icons/fa";

const topics = [
    {
        title: "Digital & Cyber Safety",
        text: "Online safety, healthy screen use and parental controls, set up one step at a time.",
        Icon: FaLaptop,
        links:[
            {
                label: "Internet Safety for Kids: A Parent's Guide", href: "#"
            },
            {
                label: "Parental Controls on iPhone", href: "#"
            },
            {
                label: "Screen Time for Kids by Age", href:"#"
            }
        ]
    },
    {
        title: "Exploitation Prevention",
        text: "Grooming, sextortion, and human trafficking awareness, and how to spot warning signs early.",
        Icon: FaUserShield,
        links:[
            {
                label: "What is sextortion?", href: "#"
            },
            {
                label: "Signs of grooming", href:"#"
            },
            {
                label:"How to report sextortion", href:"#"
            }
        ]

    },
    {
        title: "AI & Emerging Safety Concerns",
        text:"AI platforms, deepfakes, and AI companions, explained calmly and clearly.",
        Icon: FaRobot,
        links:[
            {
                label: "AI sextortion: What Parents Should Know" , href: "#"
            },
            {
                label:"Ai Safety for Kids", href:"#"
            },
            {
                label:"AI Companion Apps and Teens", href:"#"
            }
        ]
    },
    {
        title: "Life Skills & Family Safety",
        text: "Emotional regulation, essential life skills, home and relationship safety, and basic emergency preparedness.",
        Icon: FaHome,
        links: [
            {
                label: "How to Teach Kids Safety", href:"#"
            },
            {
                label: "Calm-Down Strategies for Kids", href:"#"
            }
        ]
    }
]

function WhatWeTeach(){
    return(
        <section className="bg-white">
            <div className="w-full px-6 py-16 sm:px-20 lg:px-16 lg:py-20">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            What We Teach
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Practical, evidence-informed lessons on the risks Upper Valley families face today.
                        </p>
                    </div>

                    <a href="#" className="self-start rounded-lg border-2 border-[#09234A] px-5 py-2.5 text-sm font-semibold text-[#09234A]
                    transition hover:bg-[#09234A] hover:text-white sm:self-auto">
                        Browse All Resources
                    </a>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {topics.map (({title, text, Icon, links}) =>
                    (
                        <article key={title}
                        className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1
                        hover:show-lg">

                            {/* Can put other photos later when we have them.*/}
                            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-[#09234A]/10 to-[#09234A]/[0.03]">
                                <Icon className="text-5xl text-[#09234A]" aria-hidden>

                                </Icon>
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-xl font-bold leading-snug text-gray-900">
                                    {title}
                                </h3>

                                <p className="mt-2 text-[15px leading-6 text-gray-600 pt-5">
                                    {text}
                                </p>

                                <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                                    {links.map(({label, href}) => (
                                        <li key={label}>
                                            <a href={href} className="text-sm font-bold text-[#09234A]
                                            underline underline-offset-4 transition hover:text-[#EE4024]">
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeTeach