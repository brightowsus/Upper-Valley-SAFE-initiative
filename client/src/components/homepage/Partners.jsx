// REMEMBER TO CHANGE THINGS LATER

const partners = [
  "Madison School District",
  "ICAC Task Force",
  "[Law enforcement partner]",
  "[Healthcare partner]",
  "[Faith community partner]",
  "[Business sponsor]",
];
 
function Partners() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="w-full px-6 py-12 text-center sm:px-10 lg:px-16">
        <h2 className="text-md font-bold text-gray-900">
          Working Alongside Schools, Law Enforcement, and Community Partners
        </h2>
 
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <li
              key={name}
              className="flex h-20 items-center justify-center rounded-lg border border-gray-200 bg-[#F2F3F5] px-3 text-sm font-semibold text-gray-600"
            >
              {name}
            </li>
          ))}
        </ul>
 
        <a
          href="#"
          className="mt-6 inline-block text-sm font-bold text-[#09234A] underline underline-offset-4 transition hover:text-[#EE4024]"
        >
          Become a community partner
        </a>
      </div>
    </section>
  );
}
 
export default Partners;