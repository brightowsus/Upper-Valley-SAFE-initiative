// REMEMBER TO CHANGE QUOTES LATER

const quotes = [
    {
        quote: "[Quote from a parent who attended a workshop: What changed a home afterward]",
        name: "[Name], [role], [School]",
    },
    {
        quote: "[Quote from a parent who attended a workshop: What changed a home afterward]",
        name: "[Name], [role], [School]",
    },
];

function Testimonials() {
  return (
    <section className="bg-[#F2F3F5]">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What families and educators say
        </h2>
        <p className="mt-3 text-gray-600">
          Has Upper Valley SAFE made a difference for your family, school or
          group?{" "}
          <a
            href="#"
            className="font-bold text-[#09234A] underline underline-offset-4 transition hover:text-[#EE4024]"
          >
            Share your story
          </a>
          .
        </p>
 
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {quotes.map(({ quote, name }) => (
            <figure key={name} className="border-l-4 border-[#EE4024] pl-6">
              <blockquote className="text-xl font-semibold leading-relaxed text-gray-900">
                “{quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Testimonials;