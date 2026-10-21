const linkClass = "font-bold text-white underline underline-offset-2 transition hover:text-[#EE4024]";

function CrisisHelp() {
  return (
    <section className="bg-[#111] text-white">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          If a Child is in Danger or Being Threatened Online
        </h2>
        <p className="mt-3 max-w-xl text-gray-300">
          You don’t have to handle it alone. Start with the option that fits.
        </p>
 
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-white/25 p-6 transition hover:border-white/60">
            <h3 className="text-lg font-bold leading-snug">Immediate danger</h3>
            <p className="mt-3 text-[15px] leading-6 text-gray-300">
              Call{" "}
              <a href="tel:911" className={linkClass}>
                911
              </a>{" "}
              now.
            </p>
          </div>
 
          <div className="rounded-xl border border-white/25 p-6 transition hover:border-white/60">
            <h3 className="text-lg font-bold leading-snug">
              Abuse or neglect in Idaho
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-gray-300">
              Idaho Child Protection Hotline, 24 hours:{" "}
              <a href="tel:8555525437" className={linkClass}>
                855-552-KIDS (5437)
              </a>
              .
            </p>
          </div>
 
          <div className="rounded-xl border border-white/25 p-6 transition hover:border-white/60">
            <h3 className="text-lg font-bold leading-snug">
              Sextortion or online exploitation
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-gray-300">
              Report to the NCMEC CyberTipline at{" "}
              <a href="https://report.cybertip.org" className={linkClass}>
                report.cybertip.org
              </a>{" "}
              or{" "}
              <a href="tel:18008435678" className={linkClass}>
                1-800-843-5678
              </a>
              .
            </p>
          </div>
 
          <div className="rounded-xl border border-white/25 p-6 transition hover:border-white/60">
            <h3 className="text-lg font-bold leading-snug">
              Local child advocacy
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-gray-300">
              Upper Valley Child Advocacy Center, Rigby:{" "}
              <a href="tel:2087452612" className={linkClass}>
                (208) 745-2612
              </a>
              .
            </p>
          </div>
        </div>
 
        {/* REMEMBER TO ADD LINK LATER*/}
        <a
          href="#"
          className="mt-8 inline-block font-bold text-white underline underline-offset-4 transition hover:text-[#EE4024]"
        >
          See all local and national help
        </a>
      </div>
    </section>
  );
}
 
export default CrisisHelp;