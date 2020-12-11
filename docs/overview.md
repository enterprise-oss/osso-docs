---
id: overview
title: An overview of Osso
sidebar_label: Overview
---

### What is SAML-based SSO and why is it important?        
Companies use Identity Providers (IDPs) like Okta and OneLogin to provide their employees with Single Sign-On (SSO) access to applications so they don’t have to remember multiple passwords or reuse the same passwords across multiple applications. When/if an employee leaves their role, the Identity Provider makes it very easy to disable access to all of the applications they use (including yours) in one stroke, thus safeguarding their information.

Security Assertion Markup Language (SAML) is an open specification that enables Single Sign-on. Similar to OAuth, an Identity Provider centralizes identity for each user. OAuth is generally used for consumer oriented apps, but enterprise companies often require the services they purchase to offer SAML-based SSO.

### What is Osso?        
Osso provides an open-source microservice for authenticating users against SAML-based Identity Providers. Osso includes all of the functionality needed to configure SAML Identity Providers for your customers and begin signing them in to your application. What is typically a multi-week project of building a scalable, sellable and serviceable SAML integration becomes just a few hours of work with Osso.

To get started, you'll deploy your own instance of Osso, then use it to onboard customers using the Admin UI, which allows your team members to set up SAML-based Identity Providers via an intuitive interface. You can also choose to integrate SAML configuration forms into your own admin or account settings pages using Osso's React library, thus allowing your customers to do it themselves.

Once that's all set, you'll consume your Osso microservice's OAuth server in your own application. This will send users who want to sign in via SAML to your Osso instance as part of an OAuth 2.0 authorization flow, and you'll receive a normalized user profile.

### How does it work?        
Osso authenticates users against SAML Identity Provider services, normalizes user payloads, and provides an OAuth server to sign those users into your application. It does this by wrapping a SAML auth flow inside an OAuth flow, handling all of the ugly SAML bits while allowing your application to add Osso as an OAuth provider. This is usually a much simpler task for your engineering team, especially if you already support other OAuth providers like Google or GitHub.

### Who is Osso for?        
Integrating Osso to your application is a 3-step process that typically takes a couple of hours. You will primarily need back-end engineering skills. A more complete integration should also involve your product and design teams in order to craft a strong sign in experience for SSO users.

Osso also provides React components for integrating Osso flows directly into your application, which would require front-end engineering and more of a time commitment. We recommend starting with a base integration before moving the core flows into your application.