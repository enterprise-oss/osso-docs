---
id: what-is-saml
title: What Is SAML?
---

## Background

Security Assertion Markup Language (SAML) is an open specification that allows Identity Providers (IDPs) 
to securely pass authorization credentials to a Service Provider (SP). SAML is conceptually very similar to 
OAuth - instead of a user creating a password based account for every service they use, an IDP centralizes 
identity for the user, and they use their IDP credentials to access the services they use. Where OAuth 
is generally more consumer friendly, enterprise companies often require the services they purchase to 
offer SAML based Single Sign On (SSO).

:::tip
You're the Service Provider (SP) here - your SAAS app is the service. An Identity Provider (IDP) is
a company like Okta or OneLogin.
:::

Another important distinction between OAuth and SAML based SSO is that SAML IDPs require you to configure your 
application to receive authorization credentials _per IDP instance_ rather than for the IDP as an entity. With OAuth, 
you integrate a provider like Twitter once, and all Twitter users can now sign in with their Twitter account. 

With SAML, any time an Okta (or OneLogin, or Microsoft Azure) customer wants to sign in to your application from 
their Okta instance, you need to configure your application to receive a SAML assertion from that instance. 
You'll repeat this for every account that requires SAML-based authentication, even if they use the same IDP 
as one of your other customers.

## Challenges

SAML itself is not a challenging protocol to adopt. There's tons of existing open-source software, often 
provided by IDPs themselves, that can help you get a SAML proof of concept shipped in a couple of hours.

The challenges are in turning this proof of concept into a production-ready system that everyone from product 
to sales understands.

### Configure IDP Instances for Multi-tenancy

Configuring an IDP instance is a 3 step handshake between a Service Provider (you) and a customer of an 
Identity Provider (your enterprise accounts). 

#### 1. You provide SAML information to your enterprise account 

This will typically be someone in IT who manages the IDP for the enterprise. You'll provide them things 
like an Assertion Consumer Service URL and an SP Audience ID. They'll use these values to create a SAML
application in their IDP instance.

#### 2. Your enterprise account provides SAML application information back to you

Once the IT professional creates the SAML application in their IDP instance, they will need to return 
to you some other information, like an x509 certificate. 

#### 3. You finalize configuration

The information the enterprise provides back to you must be used in the SAML authentication process 
to validate the SAML response and access the authorization credentials.

To take your proof-of-concept to a production-ready system, you'll need to first understand this process,
and then build a lot of boilerplate to manage SAML configurations for mutiple accounts. 

### Education

Who is going to configure each IDP instance for your application? Once you build the boilerplate for 
managing multi-tenancy, you'll need to educate your team on how SAML works, and how to onboard a new account 
that requires SAML-based authentication. 

While SAML is an open specification, each IDP tends to name things a little differently, and has different processes 
for configuring a SAML app in a customer instance. You can't assume that your customer will know exactly how to 
configure your app in their instance, so your team will need to learn the vagaries of each IDP, and how to 
configure a SAML app in at least a handful of IDPs, and will need to learn how to debug and support authentication 
issues that may arise.

## SAMLBox

SAMLBox solves these challenges by providing the boilerplate you need to manage muliple SAML tenants in your application, 
while also providing guides and documentation for your whole team, and even your enterprise customers. You'll still need 
to educate your team, and you'll still need to configure the IDP instance for each customer that requires it. But if you 
use all the tools in your SAMLBox your whole team will be confidently onboarding enterprise accounts in no time!