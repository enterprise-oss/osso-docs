const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const querystring = require("querystring");

exports.handler = async (event, context, callback) => {
  const params = JSON.parse(event.body);
  try {
    await stripe.paymentMethods.attach(params.paymentMethodId, {
      customer: params.customerId,
    });
  } catch (error) {
    return {
      statusCode: 402,
      error: { message: error.message },
    };
  }

  await stripe.customers.update(params.customerId, {
    invoice_settings: {
      default_payment_method: params.paymentMethodId,
    },
  });

  // Create the subscription
  const subscription = await stripe.subscriptions.create({
    customer: params.customerId,
    items: [{ price: params.priceId, quantity: 1 }],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      subscription: subscription,
    }),
  };
};
