---
id: consume
title: 2. Consume
---

Once you've got an Osso instance deployed, in order to sign users in to your application you need to consume user resources in an OAuth 2.0 authorization code grant flow. Osso provides client libraries for Ruby and Node to make this process easier, but whatever language you use on your back-end, you'll sign SSO users in using an OAuth 2.0 spec-compliant flow.

If you're already using OAuth with other providers you'll be familiar with this process. You'll register OAuth clients on the Osso admin, specify redirect URIs, and set Client ID and Secret values in your application's environment.

Review our OAuth docs for more details.