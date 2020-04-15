---
id: admin-ui
title: Admin UI
sidebar_label: Admin UI
---

SAMLBox provides an Admin interface for managing SAML Identity Providers and OAuth Clients. 

You'll need to configure an OAuth Client for each application to which you want to add SAML-based authentication. 
You can deploy SAMLBox instances for each of your application environments (dev, staging, production, etc.) or 
you can use a single deployed instance to serve all of your environments by creating multiple OAuth Clients.

When you need to onboard a customer who requires SAML-based authentication, your team can use the Admin UI 
to set up and configure the customer's SAML Identity Provider, or you can have your enterprise customer 
complete this setup themselves.

## Authentication

SAMLBox uses JSON Web Tokens (JWTs) to authenticate users into the Admin UI. Users can be scoped with 
admin privileges (your team members) to configure any enterprise account, or with enterprise specific 
privileges (your customers) that allows the user to only configure an Identity Provider for their own account. 
See our technical documentation on JWT Authentication to implement the authentication scheme.

## OAuth Client Configuration

SAMLBox authenticates users against multiple Identity Providers via SAML, and makes normalized user profiles 
available to your application via OAuth. You need to create an OAuth Client 
for each application that needs to consume these profiles.

The SAMLBox Admin UI makes it easy to create OAuth Clients. Navigate to your SAMLBox instance, choose OAuth Clients 
from the menu, and click the button to Create an OAuth Client. You must be authenticated into SAMLBox with a JWT 
with the `admin` scope.

You'll be asked to enter a name to identify the OAuth Client, and to specify redirect URIs where the OAuth server 
may send your users once they authenticate. SAMLBox will generate a Client ID and Client Secret which you will 
need in your application.

Once you've created at least one OAuth client, you're ready to onboard and configure an enterprise account for 
SAML-based authentication.

## Admin SAML Configuration

SAMLBox Admin UI allows your team members to onboard an enterprise customer to use SAML-based authentication. 
When you acquire a new customer who requires SAML, you'll navigate to your SAMLBox instance's admin interface at
`https://<YourSAMLBoxURL>/admin`. You must be authenticated into SAMLBox with a JWT with the `admin` scope.

Click the Onboard Enterprise button to start configuring a new enterprise account for SAML. You'll need to know 
the account's domain name and the Identity Provider they use (i.e. Okta, OneLogin, etc.). Enter these in the 
web form, and SAMLBox will generate a _pending_ Identity Provider instance. 

The Admin UI will then provide all of the information your enterprise customer needs to configure your app in their 
IDP admin dashboard. SAMLBox will also generate a PDF document that you can send your enterprise customer, specific to their 
IDP, that will walk them through configuration, and tell them what information they need to relay back to you. The 
enterprise employee then goes and configures your app in their IDP admin dashboard while you wait. 

Once you receive configuration information back from your customer, return to the SAMLBox Admin UI, and find the pending 
Identity Provider instance for the account you are onboarding. When you visit the pending connection, you'll be 
able to input and upload the configuration information your customer provided. The Identity Provider instance will be 
promoted to _live_ and users from that account are ready to start signing in.

## Enterprise User SAML Configuration

SAMLBox Admin UI also allows your enterprise customers to configure their own SAML-based authentication. 
When you acquire a new customer who requires SAML, send them to the SAMLBox instance's admin interface for 
their account at `https://<YourSAMLBoxURL>/admin/enterprise/:domain`. Your customer muse be authenticated 
into SAMLBox with a JWT with the the domain name as the scope.

:::tip
If you take this approach, have your enterprise customers first create accounts with email / password so 
that you can generate JWTs for the user who will be configuring their IDP in SAMLBox.
:::

The enterprise user will choose their IDP, and SAMLBox will generate all of the configuration information 
needed to configure your application on their IDP admin dashboard, as well as a PDF document to walk the enterprise 
user through configuring your application on their IDP admin dashboard.

Once they complete configuration on the IDP admin dashboard, the enterprise user will be able to input and upload 
the final configuration information into SAMLBox, which will promote the Identity Provider instance to _live_, 
and allow users from that enterprise to start signing in.
