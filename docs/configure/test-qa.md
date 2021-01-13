---
id: test-qa
title: Testing & QA
---

Testing a SAML integration can be challenging if you don't have access to an Identity Provider. Osso provides a Test IDP (repo | site) that you can use for testing purposes. We also recommend testing with at least one real Identity Provider - Okta offers a free developer account and if you're a Google Workspace admin you can configure a SAML app for your company via Google.

## Setup

To set your testing up for success, first ensure you've created your OAuth Clients and configured Redirect URIs. You should also enter your application's information on the Configuration page to customize your PDF docs. Then create a Customer record for your own company or a test company like example.com. You'll use this to add and configure Identity Providers for your testing purposes.

## Osso Test IDP

Osso offers a test Identity Provider. It's open source and available for anyone to use. It requires no authentication - given a valid SAMLRequest, it will return a SAMLResponse for a mock user with the email address entered. You can download the SAML Metadata to configure the test IDP as an  Identity Provider in your Osso instance here.

Return to the Customer you created during Setup and create a New Identity Provider. Choose Generic SAML as the Identity Provider and the OAuth client for the environment you will use to QA your integration. Upload the SAML metadata for the Test IDP to complete configuration.

You can start testing your integration with the Osso test IDP, but we recommend testing with a real IDP before releasing into production.

## Okta Developer