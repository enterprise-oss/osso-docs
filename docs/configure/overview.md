---
id: overview
title: How to configure Osso
sidebar_label: Overview
---

Once you've logged in to your Osso instance, you can set up your OAuth Clients and Redirect URIs before integrating Osso into your application's code base. Osso recommends a single Osso instance in production and creating an OAuth client for each of your environments

### 1. OAuth clients

Osso acts as an OAuth server, and your application is an OAuth client. The Osso Admin UI allows you to create OAuth Clients in the Configuration section. Osso also provides a command line script to bootstrap your instance with Development, Staging and Production OAuth Clients which you can run with `$ bundle exec rake osso:bootstrap`.

An OAuth client is identified and authenticated by its `CLIENT_ID` and `CLIENT_SECRET`. You'll want to set each of these in your application's corresponding environment, and be sure to keep the secret secure. You can regenerate the credentials if they become exposed.

Check out our [Deployment docs](/docs/deploy/overview/) when you're ready to deploy.

### 2. Redirect URIs

The OAuth protocol maintains security by requiring an allow list of URLs where a user may be redirected after authentication. You can add redirect URIs to each of your OAuth Clients in the Admin UI.

Check out our [Deployment docs](/docs/deploy/overview/) when you're ready to deploy.

### 3. Application Integration

To begin Osso authentication, send a user to Osso as part of an OAuth 2.0 authorization code grant flow. Osso then authenticates the user against their SAML Identity Provider and returns them to your application with an authorization code. Exchange this code for an access token which you can use to request a profile about the user, allowing you to sign them in to your application securely.

You can learn more about the OAuth 2.0 authorization code grant flow on [Okta's developer website](https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type), as well as the [official OAuth 2.0 docs](https://oauth.net/2/grant-types/authorization-code/).