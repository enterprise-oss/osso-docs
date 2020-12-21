---
id: overview
title: How to configure Osso
sidebar_label: Overview
---

Once you've logged in to your Osso instance, you can set up your OAuth Clients and Redirect URIs before integrating Osso into your application's code base. Osso recommends a single Osso instance in production and creating an OAuth client for each of your environments

### 1. OAuth clients

Osso acts as an OAuth server, and your application is an OAuth client. The Osso Admin UI allows you to create OAuth Clients in the Configuration section. Osso also provides a command line script to bootstrap your instance with Development, Staging and Production OAuth Clients which you can run with `$ bundle exec rake osso:bootstrap`.

An OAuth client is identified and authenticated by its `CLIENT_ID` and `CLIENT_SECRET`. You'll want to set each of these in your application's corresponding environment, and be sure to keep the secret secure. You can regenerate the credentials if they become exposed.

See the [OAuth clients docs](/docs/configure/adding-oauth-clients) for more.

### 2. Redirect URIs

The OAuth protocol maintains security by requiring an allow list of URLs where a user may be redirected after authentication. You can add redirect URIs to each of your OAuth Clients in the Admin UI. Later you'll include one of these URIs in your authorization request.

Review our [Redirect URI guide](/docs/configure/redirect-uris).

### 3. Test SAML accounts

The SAML specification requires a multi-step configuration between Osso and each of your enterprise customer's Identity Provider. You'll want to be able to test your integration before releasing SAML SSO to your customers. Test your integration with the Osso IDP, with your company's Google account or with a developer account from Okta or OneLogin.
