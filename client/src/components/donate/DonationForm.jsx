
import { useState } from "react";

const DonationForm = () => {
  const [frequency, setFrequency] = useState("Monthly");
  const [amount, setAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amounts = [10, 20, 30];

  const selectedAmount = customAmount.trim()
    ? Number(customAmount)
    : amount;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationAmount = selectedAmount;

    if (
      !Number.isFinite(donationAmount) ||
      donationAmount < 0.5 ||
      donationAmount > 100000
    ) {
      setError("Please enter an amount between $0.50 and $100,000.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/donations/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: donationAmount,
            frequency,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      if (!data.url) {
        throw new Error("Stripe did not return a checkout URL.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="h-fit w-full rounded-lg border border-[#26313d] bg-white p-5 sm:p-6">
      <h2 className="mb-5 text-xl font-bold text-[#111827]">
        Choose your gift
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Frequency */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          {["Monthly", "One time"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFrequency(option)}
              className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                frequency === option
                  ? "border-[#111827] bg-[#111827] text-white"
                  : "border-[#cbd2d9] bg-white text-[#17345f] hover:bg-[#f1f3f5]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Donation amounts */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          {amounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setAmount(value);
                setCustomAmount("");
                setError("");
              }}
              className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                !customAmount && amount === value
                  ? "border-[#111827] bg-[#111827] text-white"
                  : "border-[#cbd2d9] bg-white text-[#17345f] hover:bg-[#f1f3f5]"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mb-3">
          <label
            htmlFor="custom-amount"
            className="mb-1.5 block text-xs font-medium text-[#17345f]"
          >
            Other amount
          </label>

          <div className="flex items-center rounded-md border border-[#cbd2d9] px-3 focus-within:border-[#17345f]">
            <span className="text-sm text-[#405675]">$</span>

            <input
              id="custom-amount"
              type="number"
              min="0.50"
              max="100000"
              step="0.01"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setError("");
              }}
              placeholder="Enter amount"
              className="w-full border-0 px-2 py-2 text-sm text-[#17345f] outline-none"
            />
          </div>
        </div>

        {/* Donation impact message */}
        <div className="mb-4 rounded-md bg-[#f1f3f5] p-3">
          <p className="text-xs leading-5 text-[#405675]">
            {customAmount
              ? `Your $${selectedAmount > 0 ? selectedAmount.toFixed(2) : "0.00"} gift can help support child safety education.`
              : `What a $${amount} ${frequency.toLowerCase()} gift provides!`}
          </p>
        </div>

        {/* Donate button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#17345f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#294b78] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Connecting to checkout..."
            : `Donate $${selectedAmount > 0 ? selectedAmount.toFixed(2) : "0.00"} ${frequency.toLowerCase()}`}
        </button>

        {/* Error message */}
        {error && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <p className="mt-3 text-center text-[12px] leading-4 text-[#718096]">
          Secure checkout powered by Stripe. Confirm tax-deductible status
          with the organization.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;
