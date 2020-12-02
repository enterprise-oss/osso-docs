---
id: redirect-uris
title: Redirect URIs
---
You must add Redirect URIs to an allow-list of valid redirects for each OAuth Client. After a user successfully authorizes their Identity Provider, Osso will redirect the user back to your application with an authorization code in the URL. Because the URL will contain sensitive information, Osso will only redirect a user to a URL you've added to your allow list.

You must also specify a Primary Redirect URI - users who access your app by choosing it from their Identity Provider (known as an Identity Provider initiated sign in) will be sent to this URL.

Once you've created at least one OAuth client, you're ready to onboard and configure an enterprise account for SAML-based authentication.