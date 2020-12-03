---
id: overview
title: Overview
---
Osso wraps a SAML auth flow inside an OAuth flow, handling all the ugly SAML bits while allowing your application to add Osso as an OAuth provider, a much simpler task for your engineering team, especially if you already support other OAuth providers, such as Google or GitHub.

Digging deeper, Osso supports an OAuth 2.0 authorization code grant flow that allows your application to send your users to Osso when they wish to log in with SSO. Osso then authenticates the user against their Identity Provider using SAML, and returns the user to your application with an authorization code in the URL. Per the OAuth spec, you exchange this code for an access token which you can then use to request a profile about the user, allowing you to sign them in to your application however you see fit.

You can learn more about the OAuth 2.0 authorization code grant flow on [Okta's developer website](https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type), as well as the [official OAuth 2.0 docs](https://oauth.net/2/grant-types/authorization-code/).