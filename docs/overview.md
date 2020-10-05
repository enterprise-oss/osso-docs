---
id: overview
title: What is Osso?
---

Osso provides an open-source microservice for authenticating users against SAML-based Identity Providers. Osso includes all of the functionality needed to configure SAML Identity Providers for your customers and begin signing them in to your application. What is typically a multi-week project of building a scalable, sellable and serviceable SAML integration becomes just a few hours of work with Osso.

You deploy your own instance of Osso and use it to onboard customers using the Admin UI, which allows your team members or customers to set up a SAML-based Identity Provider. You might also integrate SAML configuration forms to your own admin or account settings page using Osso's React library.

Then consume your Osso microservice's OAuth server in your own application to begin signing SAML-based users into your application. Send users who want to sign in via SAML to your Osso instance as part of an OAuth 2.0 authorization flow and receive a normalized user profile.

## Deployment

Osso is a complete solution for authenticating users via SAML. It's offered as a microservice that you can deploy to your own infrastructure. The application is written in Ruby with the Sinatra framework.

The simplest way to deploy Osso is with Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/enterprise-oss/osso/tree/main)

Heroku will run convenient setup scripts and set required environment variables to get you up and running quickly.

[Read more about deployment](/docs/integration/deployment).

## Admin UI

Once you deploy an instance of Osso, you'll use JSON Web Tokens (JWTs) to authenticate users to Osso's Admin UI. The Admin UI offers two main areas of functionality - managing OAuth Clients and managing customers' Identity Providers.

Your app will consume Osso using an OAuth 2.0 Authorization flow, so your engineering team can manage OAuth Clients and their identifiers, secrets and redirect URIs via the Admin UI. 

For every customer who demands SAML SSO, your team, typically someone in customer success or account management, will need to work with the customer's IT department to enable SSO via their Identity Provider. Osso's Admin UI allows you to manage this process. Ask your customer which Identity Provider they use, and create a new Identity Provider record in Osso. Osso will generate PDF documentation, specific to the provider, that you then share with the customer.

Once the customer completes configuration in their IDP, they will return some information back to you that you'll enter into Osso in order to finalize configuration.

Osso also provides `@enterprise-oss/osso`, a React library composed of hooks and components that allow you to build SAML configuration into your own UI such that your enterprise customers can configure SAML Identity Providers on their own, without your customer success team's intervention.

See our docs on [using the Admin UI](/docs/usage/admin-ui/overview) and [integrating @enterprise-oss/osso](/docs/integration/self-serve-osso-react).

## Consume OAuth Server

Once your Osso instance is deployed, and you've configured at least one OAuth Client and Identity Provider, you're ready to start signing users into your application. You'll use slightly-modified OAuth to consume the user resources that Osso provides, allowing you to sign the SAML-based users into your application.

Osso offers libararies for consuming OAuth for Ruby and NodeJS applications - omniauth-osso and passport-osso.

See our technical documentation on [consuming OAuth](/docs/integration/oauth-consumption) and learn how you can [QA and test your integration](/docs/integration/test).


