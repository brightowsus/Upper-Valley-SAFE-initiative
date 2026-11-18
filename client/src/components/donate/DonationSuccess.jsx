

const DonationSuccess = () => {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[#f1f3f5] px-5 py-16 sm:px-8">
      <div className="w-full max-w-[600px] rounded-xl border border-[#dce1e7] bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-10 w-10 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#41679c]">
          Upper Valley SAFE Initiative
        </p>

        <h1 className="mb-4 text-3xl font-bold text-[#111827] sm:text-4xl">
          Thank you for your generosity!
        </h1>

        <p className="mb-6 text-sm leading-7 text-[#405675] sm:text-base">
          Your support helps us protect children, strengthen families and
          build safer communities throughout the Upper Valley.
        </p>

        <div className="mb-8 rounded-lg bg-[#f1f3f5] p-4">
          <p className="text-sm leading-6 text-[#405675]">
            Your payment confirmation is being checked. If you completed
            your donation, please look out for your confirmation from
            Stripe.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex rounded-md bg-[#17345f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b78]"
        >
          Return to homepage
        </a>
      </div>
    </section>
  );
};

export default DonationSuccess;
