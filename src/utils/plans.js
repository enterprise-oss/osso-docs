import React from "react";

export const plans = [
  {
    name: "PMF",
    price: "$99/mo",
    priceId: "price_1HzqrZG25oQYthlcPgwp81JB",
    cta: "Choose PMF",
    copy:
      "If one of your customers is asking for SAML, this is your best option. Osso is a snap to integrate, and our monthly agreements give you the flexibility you need to scale up easily when business takes off. ",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 5 customers</strong>
      </span>,
      <span key="0">
        Pick this if: you’re just starting to sell to Enterprise
      </span>,
    ],
  },
  {
    name: "Series A",
    price: "$199/mo",
    priceId: "price_1HzqunG25oQYthlcEv25U7OB",
    cta: "Choose Series A",
    copy:
      "Multiple requests for SAML SSO? This is the plan for you. Once you’ve integrated Osso, onboarding a dozen customers is easy, and with our Admin UI your Sales team can handle it themselves.",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 25 customers</strong>
      </span>,
      <span key="0">
        Pick this if: you’ve got customer demand and have had SAML in your
        backlog for too long
      </span>,
    ],
  },
  {
    name: "Unicorn",
    price: "$499/mo",
    priceId: "price_1Hzqv3G25oQYthlcnLuHacWO",
    cta: "Choose Unicorn",
    copy:
      "You might have patched together SAML yourself, but by now the overhead and onboarding are becoming a pain. Let our expertise and intuitive documentation help you close more deals with less fuss.",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>up to 100 customers</strong>
      </span>,
      <span key="0">
        Pick this if: your current solution costs too much – in dollars,
        developer time, or support burden
      </span>,
    ],
  },
  {
    name: "Enterprise",
    price: "$10k+/year",
    priceId: "osso_pmf", // TODO
    cta: "Get in touch",
    copy:
      "These days a lot of companies want to self-host certain critical services for a range of reasons. We’re here to help: we’ll work side by side with your dev team to design, build, and integrate the perfect Osso instance for your needs. ",
    features: [
      <span key="0">
        Enables SAML SSO for <strong>ALL of your customers</strong>
      </span>,
      <span key="0">
        Pick this if: you want a bespoke solution that’s hosted on your own
        infrastructure
      </span>,
    ],
  },
];
