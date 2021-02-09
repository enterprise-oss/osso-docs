module.exports = {
  someSidebar: [
    "overview",
    "quick-start",
    {
      type: "category",
      label: "How to deploy Osso",
      items: [
        "deploy/overview",
        "deploy/env-variables",
        "deploy/build-steps",
        "deploy/post-deployment",
      ],
    },
    {
      type: "category",
      label: "How to configure Osso",
      items: [
        "configure/overview",
        "configure/adding-oauth-clients",
        "configure/redirect-uris",
        "configure/test-qa",
      ],
    },
    {
      type: "category",
      label: "How to consume Osso",
      items: [
        "consume/overview",
        "consume/consuming-osso",
        "consume/passport-osso",
        "consume/omniauth-osso",
        "consume/nextjs",
        "consume/clojure",
      ],
    },
    {
      type: "category",
      label: "How to use Osso",
      items: [
        "user-guide/overview",
        "user-guide/adding-customers",
        "user-guide/onboarding-customers",
        "user-guide/self-serve",
      ],
    },
  ],
};
