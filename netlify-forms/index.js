module.exports = function (context, options) {
  return {
    name: "netlify-forms",
    injectHtmlTags() {
      return {
        headTags: [],
        preBodyTags: [
          `<form name="email-list" netlify netlify-honeypot="bot-field" hidden><input type="email" name="email" /></form>`,
          `<form name="plan-interest" netlify netlify-honeypot="bot-field" hidden><input type="email" name="email" /><input name="about" /><input name="chosenPlan" /></form>`,
        ],
        postBodyTags: [],
      };
    },
  };
};
