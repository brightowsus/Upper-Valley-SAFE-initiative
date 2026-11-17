
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

// Check that the backend is running
app.get("/", (req, res) => {
  res.json({
    message: "Upper Valley SAFE Initiative API is running",
  });
});

// Create Stripe Checkout Session
app.post("/api/donations/checkout", async (req, res) => {
  try {
    const { amount, frequency } = req.body;

    // Validate donation amount
    const donationAmount = Number(amount);

    if (
      !Number.isFinite(donationAmount) ||
      donationAmount < 0.50 ||
      donationAmount > 100000
    ) {
      return res.status(400).json({
        error: "Please enter a valid donation amount.",
      });
    }

    // Validate donation frequency
    if (!["Monthly", "One time"].includes(frequency)) {
      return res.status(400).json({
        error: "Invalid donation frequency.",
      });
    }

    // Convert dollars to cents for Stripe
    const amountInCents = Math.round(donationAmount * 100);

    const isMonthly = frequency === "Monthly";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to Upper Valley SAFE Initiative",
              description: isMonthly
                ? "Monthly donation supporting child safety education and prevention."
                : "One-time donation supporting child safety education and prevention.",
            },
            unit_amount: amountInCents,

            ...(isMonthly && {
              recurring: {
                interval: "month",
              },
            }),
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.CLIENT_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.CLIENT_URL}/donate/cancel`,
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe Checkout Error:", error.message);

    res.status(500).json({
      error: "Unable to create donation checkout. Please try again.",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
