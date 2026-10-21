const values = [
  {
    title: "Always free",
    text: "Every workshop, program and guide is offered free of charge.",
  },
  {
    title: "Volunteer-Supported",
    text: "Local professionals in law enforcement, education and health give their time.",
  },
  {
    title: "Shaped by experts",
    text: "Lessons are informed by law enforcement and the ICAC Task Force.",
  },
  {
    title: "Evidence-informed",
    text: "Community-centered, nonpartisan and updated as risks change.",
  },
];
 
function SaferFuture() {
  return (
    <section className="bg-white">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Building a safer digital future, together
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
          Prevention is a collective responsibility. By partnering with
          families, schools, law enforcement, mental health providers, medical
          professionals and other local organizations, we create a unified front
          against exploitation. Communities are safer when prevention comes
          before crisis.
        </p>
 
        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, text }) => (
            <div key={title} className="border-t-4 border-[#EE4024] pt-5">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default SaferFuture;