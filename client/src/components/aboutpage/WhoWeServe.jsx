
import childrenImage from "../../assets/images/children_image.jfif";
import familiesImage from "../../assets/images/familiesImage.webp";
import educatorsImage from "../../assets/images/educators.webp";
import communitiesImage from "../../assets/images/communities.webp";

const WhoWeServe = () => {
  const audiences = [
    {
      title: "Children",
      image: childrenImage,
      description:
        "Age-appropriate lessons through Safety Heroes.",
      linkText: "Safety Heroes",
      link: "#safety-heroes",
    },
    {
      title: "Families",
      image: familiesImage,
      description:
        "Free workshops and guides for parents and caregivers.",
      linkText: "Family workshops",
      link: "#family-workshops",
    },
    {
      title: "Educators",
      image: educatorsImage,
      description:
        "School partnerships, Safety Heroes lessons and Parent Information Nights.",
      linkText: "For schools",
      link: "#schools",
    },
    {
      title: "Communities",
      image: communitiesImage,
      description:
        "Outreach and partnerships across the Upper Valley.",
      linkText: "Partner with us",
      link: "#partnerships",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1074px]">
        <h2 className="mb-10 text-[32px] font-bold leading-tight tracking-[-0.7px] text-[#111827] sm:text-[40px]">
          Who we serve
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="overflow-hidden rounded-xl border border-[#dbe2ea] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Audience image */}
              <img
                src={audience.image}
                alt={`${audience.title} served by Upper Valley SAFE Initiative`}
                className="h-[200px] w-full object-cover"
                loading="lazy"
              />

              {/* Card content */}
              <div className="px-6 py-6">
                <h3 className="mb-3 text-[21px] font-bold leading-tight text-[#111827]">
                  {audience.title}
                </h3>

                <p className="mb-3 text-[15px] leading-[1.8] text-[#203d63]">
                  {audience.description}
                </p>

                <a
                  href={audience.link}
                  className="inline-block text-[15px] font-bold text-[#111827] underline underline-offset-4 transition hover:text-[#17345f]"
                >
                  {audience.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
