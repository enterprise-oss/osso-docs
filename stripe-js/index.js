module.exports = function (context, options) {
  return {
    name: "stripe-js",
    injectHtmlTags() {
      return {
        headTags: ['<script src="https://js.stripe.com/v3/"></script>'],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
