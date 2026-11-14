
import workshopImage from "../../assets/images/donate_workshop.avif";

const DonateHero = () => {
  return (
    <section className="w-full">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-[#41679c]">
        <a href="/" className="underline underline-offset-2 hover:text-[#17345f]">
          Home
        </a>
        <span>/</span>
        <span>Donate</span>
      </nav>

      {/* Heading */}
      <h1 className="mb-4 max-w-[480px] text-3xl font-bold leading-[1.08] text-[#111827] sm:text-4xl">
        Help prevent child exploitation in Eastern Idaho
      </h1>

      <p className="mb-5 max-w-[500px] text-sm leading-6 text-[#405675]">
        Your donations directly fund our free digital safety education,
        community workshops and after-school programs. As a volunteer-led,
        community-based initiative, every dollar stays right here in the
        Upper Valley to protect our youth.
      </p>

      {/* Workshop Image */}
      <div className="mb-5 h-[220px] w-full max-w-[500px] overflow-hidden rounded-lg border border-[#d1d8e0] bg-[#e3e7eb] sm:h-[260px]">
        <img
          src={workshopImage}
          alt="Upper Valley SAFE Initiative family workshop"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Impact Statistics */}
      <div className="space-y-2 text-sm text-[#203d63]">
        <p className="border-l-2 border-[#17345f] pl-3">
          [#] families reached at workshops
        </p>

        <p className="border-l-2 border-[#17345f] pl-3">
          [#] kids taught through Safety Heroes
        </p>

        <p className="border-l-2 border-[#17345f] pl-3">
          [#] schools and groups served
        </p>
      </div>
    </section>
  );
};

export default DonateHero;
