module.exports = {
  someSidebar: [
    {
      type: "category",
      label: "Quick start",
      items: [
        "quick-start/overview",
        "quick-start/deploy",
        "quick-start/consume",
        "quick-start/sign-in",
        "quick-start/handoff",
      ],
    },
    {
      type: "category",
      label: "How to deploy Osso",
      items: [
        "deploy/overview",
        "deploy/with-heroku",
        "deploy/with-docker",
        "deploy/env-variables",
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
    {
      type: "category",
      label: "Usage Guides",
      items: [
        {
          type: "category",
          label: "Admin UI",
          items: [
            "usage/admin-ui/overview",
            "usage/admin-ui/onboarding-your-first-enterprise-customer",
          ],
        },
        {
          type: "category",
          label: "Identity Providers",
          items: [
            "idp/overview",
            "idp/azure-active-directory",
            "idp/google-saml",
            "idp/okta",
            "idp/one-login",
          ],
        },
      ],
    },
  ],
};
