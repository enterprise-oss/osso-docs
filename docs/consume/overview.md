---
id: overview
title: How to consume Osso
sidebar_label: Overview
---

The OAuth 2.0 Authorization Code Grant is the most common OAuth 2.0 grant type - if you've implemented OAuth before with a service like Google or Github, then you've used this approach already. Osso's OAuth client libraries handle the intermediate requests, authorization code exchange, etc., but this describes the entire flow for consuming Osso.

## Overview

### 1. Authorization

Send a user who wishes to sign in with SAML to your Osso instance `authorization_url`. If you provide a `domain` or `email` param, Osso will route the user to their Identity Provider. Otherwise Osso will display a hosted login page before routing to an IDP. Start with the hosted login page and later implement your sign in UX.

### 2. Code Exchange

Once the user successfully signs in to their Identity Provider, the user is redirected back to the `redirect_uri` you specified in the authorization URL query param and previously allow-listed in the Osso Admin UI. You exchange a `code` parameter for an `access_token`.

### 3. Request profile

Use the `access_token` to fetch a profile for the user, allowing you to sign them in to your application. Osso access tokens are short lived and profiles are intentionally limited, but are augmented with information describing the user's Identity Provider and login flow.

## Client libraries

### SDKs

Osso provides [omniauth-osso](https://github.com/enterprise-oss/omniauth-osso) for Ruby / Rails apps and [passport-osso](https://github.com/enterprise-oss/passport-osso) for NodeJS express apps. Whether or not you use OmniAuth and PassportJS already, both are stable and convenient libraries for OAuth consumption.

Osso is also integrated into other authentication libraries like [next-auth](https://github.com/nextauthjs/next-auth/) for NextJS apps.

### Example apps

You can review Osso's example apps to see how to integrate Osso into various frameworks:

- [osso-rails-example](https://github.com/enterprise-oss/osso-rails-example) - a clean Rails app using omniauth-osso
- [enterprise-oss/forem](https://github.com/enterprise-oss/forem) - fork of Rails app forem which powers dev.to, using omniauth-osso
- [osso-nodejs-example](https://github.com/enterprise-oss/osso-nodejs-example) - a clean NodeJS express app using passport-osso
- [saas](https://github.com/enterprise-oss/saas) - a fork of saas, a boilerplate SAAS app in Node / express, typescript and using passport-osso
- [osso-next-auth-example](https://github.com/enterprise-oss/osso-next-auth-example) - a NextJS app, hosted on Vercel, using next-auth
