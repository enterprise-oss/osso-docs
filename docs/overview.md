---
id: overview
title: An overview of Osso
sidebar_label: Overview
---

### What is SAML-based SSO and why is it important?

Enterprise companies use Identity Provider (IDP) services like Okta and OneLogin, or on-premise solutions like Active Directory, to centralize employee access and identity. Employees log in once to this identity layer, and use it to access applications they need for their daily work. Authentication is shared between the IDP and Service Provider (SP) applications in what's known as SSO - Single Sign On.

Security Assertion Markup Language (SAML) is an open specification that enables SSO. Similar to OAuth, authenticating a user with SAML requires configuration between your application and the Identity Provider. You provide customer-specific secrets about your application to your customer, and they configure your app and return some secrets from their IDP that you must persist to complete configuration on your end. Authentication can then be performed in a multi-step exchange to securely authenticate a user for that customer's IDP.

SAML SSO is a requirement for enterprise companies, but they must be onboarded individually in a multi-step configuration. A SAML implementation requires configuration UI, documentation, and a scalable engineering system for persisting configuration data and signing SAML users in using the right IDP.

### What is Osso?

Osso provides a service for authenticating users against SAML-based Identity Providers. Osso includes all of the functionality needed to configure SAML Identity Providers for your customers and begin signing them in to your application. What is typically a multi-week project of building a scalable, sellable and serviceable SAML integration becomes just a few hours of work with Osso.

When your team needs to onboard a new enterprise customer to use SAML, a colleague can use Osso to onboard the customer and generate bespoke documentation instructing them how to configure your application in their Identity Provider. Once complete, the customer returns some data like an x509 certificate that your colleague uploads to Osso, completing configuration for that Identity Provider.

On the engineering side, you'll consume your Osso instance's OAuth server from your own application. You send users who want to sign in via SAML to your Osso instance as part of an OAuth 2.0 authorization code grant flow. Based on a user's email or domain, if Osso finds a configured Identity Provider, Osso will complete the SAML authentication, and you'll receive a normalized user profile describing the user.

### How does Osso help me?

Integrating SAML can seem like a simple project you can implement yourself, and plenty of companies do. The SAML spec itself isn't terribly complicated, but if your company is that the stage where you need SAML, you also know that adding a new feature to your application has costs outside of the initial engineering - maintenance, internal education, documentation and support are important factors to consider when adding a customer-facing feature, especially a feature your most valuable customers encounter right off the bat.

Osso's software primarily saves your development team cycles they'd rather spend working on more interesting tasks. But Osso's usability and documentation may provide the biggest value to your organization. When implementing SAML yourself, your team might cut corners on a clunky internal admin UI, create unclear documentation for customers, or miss engineering edge cases an enterprise customer is sure to hit.

Let Osso handle SAML and roll out SSO with confidence and ease.
