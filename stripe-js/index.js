module.exports = function (context, options) {
  return {
    name: "stripe-js",
    injectHtmlTags() {
      return {
        headTags: ['<script async src="https://js.stripe.com/v3/"></script>'],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
