const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const querystring = require("querystring");

exports.handler = async (event, context, callback) => {
  const params = JSON.parse(event.body);

  const customer = await stripe.customers.create({
    email: params.billingEmail || params.email,
    name: params.name,
    metadata: params,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      customer: customer,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
