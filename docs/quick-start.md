---
id: quick-start
title: Quick start
sidebar_label: Quick start
---

Integrating Osso to your application is a 3-step process that typically takes a couple of hours. You will primarily need back-end engineering skills. A more complete integration should also involve your product and design teams in order to craft a strong sign in experience for SSO users.

### 1. Deploy
_Should take about 30 minutes - Osso customers can skip this step_

You'll need to deploy an instance of Osso in order to start using it. We suggest treating Osso as an external service, meaning you deploy a single instance in a production environment. We also offer paid Osso instances if you'd rather not think about it.

Heroku is the easiest way to deploy Osso, and should remain relatively inexpensive. Osso can otherwise be deployed anywhere a Ruby / Rack app can be deployed along with a NodeJS runtime build process. We currently include CI steps for [Buildkite](https://buildkite.com/) in the source code.
Check out our [Deployment docs](/docs/deploy/overview/) when you're ready to deploy.

### 2. Configure & Consume

_Also approximately 30 minutes_

Once you've got an Osso instance deployed, in order to sign users in to your application you need to consume user resources in an OAuth 2.0 authorization code grant flow. If you're already using OAuth with other providers you'll be familiar with this process. You'll register OAuth clients on the Osso admin, specify redirect URIs, and set Client ID and Secret values in your application's environment.

Osso provides client libraries for Ruby and NodeJS to make the integration process easier, but whatever language you use on your back-end, you'll sign SSO users into your application using an OAuth 2.0 spec-compliant flow.

See our [Configuring Osso docs](/docs/consume/overview) for more on OAuth clients and redirect URIs, then visit our [Consuming Osso docs](/docs/consume/overview) for OAuth developer docs and guides for integrating Osso's client libraries.

### 3. Sign-in UX
_Takes around 1 hour_

You'll want to involve your product and design teams to help make decisions about how to approach SSO login for your application. Some apps offer separate SSO login forms, while others combine this form with their email / password based login flows. You can also send SSO users to Osso's hosted login page, where Osso can handle routing the user to the right Identity Provider.

Whatever your branding or customization needs, Osso provides integrations to make your SAML SSO implementation simpler. Add more customization as you grow, and save your company time by allowing users to configure SAML themselves through Osso's APIs, Javascript widgets and React components.

### 4. Release

_All done!_

Once you've got what feels like a complete integration, we suggest QAing your integration by configuring identity providers for your own domain - Osso offers a Test IDP, Okta and OneLogin offer developer accounts, and if you're using Google Workspace at your company you can use Google SAML. Read more in our [User guide](/docs/user-guide/overview).

Osso is more than easy to deploy and integrate - Osso helps for everyone in your organization smoothly onboard your most valuable clients. Osso's intuitive UI and bespoke SAML documentation help your team confidently kick off the most important deals with enterprise grade security.
