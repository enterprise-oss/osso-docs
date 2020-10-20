---
id: overview
title: Overview
sidebar_label: Overview
---

Integrating Osso to your application is a 3-step process that typically takes a couple of hours. You will primarily need back-end engineering 
skills. A more complete integration should also involve your product and design teams in order to craft a strong sign in experience for SSO users. 
Osso also provides React components for integrating Osso flows directly into your application, which would require front-end engineering and more 
of a time commitment. Osso recommends starting with a base integration before integrating the core flows to your application.

## Getting Started

### 1. Deploy
_30 minutes_

You'll need to deploy an instance of Osso in order to start using it. We suggest treating Osso as an external service, meaning you deploy a single instance in a production environment.

Heroku is the easiest way to deploy Osso, and should remain relatively inexpensive. Osso can otherwise be deployed anywhere a Ruby / Rack app can be deployed. We currently include CI steps for [Buildkite](https://buildkite.com/) in the source code.

Continue to our [Deployment docs](/docs/integration/deployment) when you're ready to deploy.

### 2. Authenticate
_1 hour_

Once your instance is live, you need to authenticate your admin users in order for you and your colleagues to be able to start using Osso. 

Osso uses JSON Web Tokens, or JWTs, to authenticate your colleagues. You'll need to implement an approach for crafting JWTs in your application or administrative application, and provide a link to your Osso instance that includes the JWT.

Visit our [JWT Authentication](/docs/integration/jwt-authentication) docs once you've got an instance deployed.

### 3. Consume
_30 minutes_

The final step to complete a working SSO login through Osso is to start consuming Osso as an OAuth server.

Osso provides client libraries for Ruby and Node to make this process easier, but whatever language you use on your back-end, you'll sign SSO users in using an OAuth 2.0 spec-compliant authorization flow. You will need to provide the user's domain when initiating this flow, so you'll need to think through this sign in experience.

## Next Steps

Once you've got what feels like a complete integration, we suggest QAing your integration by configuring identity providers for your own domain - Okta and OneLogin offer developer accounts, and if you're using Google Workspace at your company you can use Google SAML. Read more in our [QA guide](/docs/integration/test)

In the future, reduce the onboarding and support burden on your team by adding some core Osso flows to your own application using our React library. This will your customers to configure a SAML identity provider themselves, removing your team from the equation. Learn more about [Osso's React library here](/docs/integration/self-serve-osso-react).


