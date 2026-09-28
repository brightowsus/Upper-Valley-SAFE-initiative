
import heroImage from "../assets/images/hero_image.avif";

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              🛡️ Protecting Kids in a Digital World
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Keeping Kids Safe Online and in the Real World
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Upper Valley SAFE Initiative helps families, educators, and
              communities build the knowledge and confidence needed to navigate
              the digital world safely. Together, we work to prevent
              exploitation, promote online safety, and create safer
              environments for children and families.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
                Get Involved
              </button>

              <button className="px-6 py-3 border border-blue-700 text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">Families</h3>
                <p className="text-gray-500">Supported</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700">Educators</h3>
                <p className="text-gray-500">Empowered</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700">Communities</h3>
                <p className="text-gray-500">Protected</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={heroImage}
              alt="Family and children staying safe in the digital world"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
