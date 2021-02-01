---
id: test-qa
title: Testing & QA
---

Testing a SAML integration can be challenging if you don't have access to an Identity Provider. Osso provides a Mock IDP ([repo](https://github.com/enterprise-oss/sinatra-ruby-idp) | [site](https://idp.ossoapp.com)) that you can use for testing purposes. We also recommend testing with at least one real Identity Provider - Okta offers a free developer account and if you're a Google Workspace admin you can configure a SAML app for your company via Google.

## Setup

To set your testing up for success, first ensure you've created your OAuth Clients and configured Redirect URIs. You should also enter your application's information on the Configuration page to customize your PDF docs. Then create a Customer record for your own company or a test company like example.com. You'll use this to add and configure Identity Providers for your testing purposes.

## Osso Test IDP

Osso offers a [mock Identity Provider](https://idp.ossoapp.com). It's [open source](https://github.com/enterprise-oss/sinatra-ruby-idp) and available for anyone to use. It requires no authentication - given a valid SAMLRequest, it will return a SAMLResponse for a mock user with the email address entered. The Mock IDP _does_ persist the email you enter, but only in order to return consistent UUIDs for a given email address - we won't ever contact an email you enter there.You can download the SAML Metadata to configure the test IDP as an Identity Provider in your Osso instance [here](https://github.com/enterprise-oss/sinatra-ruby-idp/blob/main/metadata.xml).

Return to the Customer you created during Setup and create a New Identity Provider. Choose Generic SAML as the Identity Provider and the OAuth client for the environment you will use to QA your integration. Upload the SAML metadata for the Test IDP to complete configuration.

You can start integrating Osso and testing your integration against the Osso mock IDP, but we recommend setting up a second, real IDP. Going through this process will help you understand the whole flow and should generate some empathy for your customers who use Identity Providers. Osso has first class support for Google Workspaces, so if your company runs on Google software you can configure your application as a SAML app in your Google workspace, but you'll need administrative access, which might not be ideal. Instead we'd suggest signing up for an identity provider like Okta.

## Okta Developer

Okta, a leading cloud Identity Provider service, offers a free Developer Edition account. The account limits the number of users and applications you can create, but the account doesn't expire and the sales team isn't _too_ aggressive, so this is perfect for your testing needs. You can sign up for an account at [https://developer.okta.com/signup](https://developer.okta.com/signup/).

Osso has first-class support for Okta as an Identity Provider, but we encourage you to click around a bit to explore and familiarize yourself with the type of software your enterprise customers are using. We're big fans of Okta, but it is definitely enterprise software made by an enterprise company. There are, for some reason, two different UIs for admin purposes - the "Classic UI" and "Developer Console", toggled by a dropdown menu, and SAML apps can only be created in the Classic UI. Without reading more Osso docs, can you figure out how to set up your application in your Okta instance? It's not easy! But that's where Osso shines.

Once you've clicked around Okta a bit, come back to your Osso instance, and let's create another Identity Provider for your same test customer record. Osso will generate documentation that walks you through setting up your app in Okta, and at the end will instruct you to download a `metadata.xml` file and upload to Osso to complete configuration. By going through this process you'll start to understand how your colleagues will help onboard enterprise customers once your Osso integration is shipped to production.

Once you have two identity providers in the **Configured** state in Osso, you're set up for testing success, and can start integrating Osso into your application by consuming Osso's OAuth server.
