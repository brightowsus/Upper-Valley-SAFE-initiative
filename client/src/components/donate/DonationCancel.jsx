
const DonationCancel = () => {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[#f1f3f5] px-5 py-16 sm:px-8">
      <div className="w-full max-w-[600px] rounded-xl border border-[#dce1e7] bg-white px-6 py-12 text-center shadow-sm sm:px-10">

        {/* Cancel icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-10 text-amber-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#41679c]">
          Upper Valley SAFE Initiative
        </p>

        <h1 className="mb-4 text-3xl font-bold text-[#111827] sm:text-4xl">
          Your donation wasn't completed
        </h1>

        <p className="mb-6 text-sm leading-7 text-[#405675] sm:text-base">
          It looks like you left the payment process before completing your
          donation. No worries! You can return whenever you're ready.
        </p>

        <div className="mb-8 rounded-lg bg-[#f1f3f5] p-4">
          <p className="text-sm leading-6 text-[#405675]">
            Your support helps protect children, strengthen families and
            build safer communities throughout the Upper Valley.
            Every contribution makes a difference.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/donate"
            className="inline-flex justify-center rounded-md bg-[#17345f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b78]"
          >
            Try donating again
          </a>

          <a
            href="/"
            className="inline-flex justify-center rounded-md border border-[#17345f] px-6 py-3 text-sm font-semibold text-[#17345f] transition hover:bg-[#f1f3f5]"
          >
            Return to homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationCancel;
