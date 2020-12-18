const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const querystring = require("querystring");

exports.handler = async (event, context, callback) => {
  const params = JSON.parse(event.body);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    success_url: `${process.env.DEPLOY_URL}/success`,
    cancel_url: `${process.env.DEPLOY_URL}/pricing?plan=${plan.name}`,
    mode: "subscription",
    line_items: [
      {
        price: params.priceId,
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: 21,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
