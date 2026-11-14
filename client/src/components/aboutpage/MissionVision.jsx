

const MissionSection = () => {
  return (
    <section className="w-full bg-[#f1f3f5] px-5 py-12 sm:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1074px]">
        {/* Mission */}
        <div className="mb-7">
          <p className="mb-3 text-[13px] font-semibold text-[#203d63]">
            Our mission
          </p>

          <h2 className="w-full max-w-[780px] text-[25px] font-bold leading-[1.3] tracking-[-0.5px] text-[#111827] sm:text-[26px]">
            The Upper Valley SAFE Initiative protects children,
            strengthens families, and builds safer, resilient communities
            by preventing exploitation before it happens.
          </h2>

          <p className="mt-4 max-w-[790px] text-sm leading-[1.65] text-[#203d63] sm:text-[14px]">
            Through practical, evidence-informed education, collaboration,
            mentorship and community partnerships, we equip children,
            parents, educators and community members to recognize risks,
            make informed decisions, develop healthy technology habits and
            value authentic human relationships.
          </p>
        </div>

        {/* Vision and Philosophy */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-6">
          <div className="border-t border-[#202020] pt-4">
            <h3 className="mb-2 text-sm font-bold text-[#111827]">
              Our vision
            </h3>

            <p className="text-[13px] leading-[1.55] text-[#203d63]">
              A community where every child is protected, every family is
              empowered, and every person has access to the knowledge,
              resources and partnerships necessary to live safely,
              confidently and free from preventable harm.
            </p>
          </div>

          <div className="border-t border-[#202020] pt-4">
            <h3 className="mb-2 text-sm font-bold text-[#111827]">
              Our philosophy
            </h3>

            <p className="text-[13px] leading-[1.55] text-[#203d63]">
              Communities are safer when prevention comes before crisis.
              Rather than respond only after harm occurs, we equip people
              with practical knowledge and tools before problems arise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;