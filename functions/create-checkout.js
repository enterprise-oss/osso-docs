const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    success_url: `${process.env.URL}/success`,
    cancel_url: process.env.URL,
    line_items: [
      {
        name: "Osso",
        description: "Subscription to Osso hosted",
        amount: "24900",
        currency: "USD",
        quantity: 1,
      },
    ],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
