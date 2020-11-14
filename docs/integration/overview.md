---
id: overview
title: Quick Start
sidebar_label: Quick Start
---

Integrating Osso to your application is a 3-step process that typically takes a couple of hours. You will primarily need back-end engineering skills. A more complete integration should also involve your product and design teams in order to craft a strong sign in experience for SSO users.

Osso also provides React components for integrating Osso flows directly into your application, which would require front-end engineering and more of a time commitment. Osso recommends starting with a base integration before integrating the core flows to your application.

## Getting Started

### 1. Deploy

_30 minutes_

You'll need to deploy an instance of Osso in order to start using it. We suggest treating Osso as an external service, meaning you deploy a single instance in a production environment.

Heroku is the easiest way to deploy Osso, and should remain relatively inexpensive. Osso can otherwise be deployed anywhere a Ruby / Rack app can be deployed. We currently include CI steps for [Buildkite](https://buildkite.com/) in the source code.

Continue to our [Deployment docs](/docs/integration/deployment) when you're ready to deploy.

### 2. Consume

_30 minutes_

Once you've got an Osso instance deployed, in order to sign users in to your application you need to consume user resources in an OAuth 2.0 authorization code grant flow. Osso provides client libraries for Ruby and Node to make this process easier, but whatever language you use on your back-end, you'll sign SSO users in using an OAuth 2.0 spec-compliant flow.

If you're already using OAuth with other providers you'll be familiar with this process. You'll register OAuth clients on the Osso admin, specify redirect URIs, and set Client ID and Secret values in your application's environment.

Review our [OAuth docs](/docs/integration/oauth-consumption) for more details.

### 3. Sign in UX

_1 hour_

SSO has two flavors of logging in to your application. Identity providers offer a dashboard to their users that display all the applications the user has can access. If a user clicks your app from an IDP dashboard, that's called an **IDP Initiated Sign In**. On the other hand, if a user visits your website, you should offer a **Service Provider Initiated Sign In**.

This step isn't strictly necessary to start signing users in as they can access your app from their IDP, but it does result in a stronger sign in user experience. You'll want to involve your product and design teams to help make decisions about how to approach allowing SSO users to sign in to your application. You'll need to ascertain a user's email or domain in order to start the sign in process with Osso - some apps offer separate SSO login forms, while others combine this form with their email / password based login forms.

Read our [SSO UX Guide](/docs/integration/oauth-consumption) to learn about your options.

## Next Steps

Once you've got what feels like a complete integration, we suggest QAing your integration by configuring identity providers for your own domain - Okta and OneLogin offer developer accounts, and if you're using Google Workspace at your company you can use Google SAML. Read more in our [QA guide](/docs/integration/test)

In the future, reduce the onboarding and support burden on your team by adding core Osso flows to your own application using our React library. This will your customers to configure a SAML identity provider themselves, removing your team from the equation. Learn more about [Osso's React library here](/docs/integration/self-serve-osso-react).
