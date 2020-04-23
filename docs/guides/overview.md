---
id: overview
title: Osso Overview
---

Osso provides an open-source microservice for authenticating users against SAML-based Identity Providers.

You deploy your own instance of Osso and use it to onboard enterprise accounts using the Admin UI, 
which allows your team members or to onbaord enterprise accounts by setting up an Identity Provider. 
You can also setup the Admin UI to allow enterprise customers to configure their own Identity Provider 
for your application.

Finally, consume your Osso microservice's OAuth server in your own application to begin signing SAML-based 
users into your application.

## Deployment

Osso is a complete solution for authenticating users via SAML. It's offered as a microservice that 
you can deploy to your own infrastructure. The application is written in Ruby with the Sinatra framework.

See our technical documentation on deployment.

## Enterprise Onboarding

For each customer who wishes to use SAML-based authentication, there is a multi-step process that you and / or 
your enterprise customer must perform to configure an Identity Provider instance.

The Osso Admin UI makes it easy to perform these tasks, and documents them well. To begin, we recommend your 
team uses the Admin UI to onboard enterprise customers. Once the team understands the process well, you can 
have your enterprise customers access the Admin UI to perform configuration themselves.

See our IDP configuration guide to learn about the configuration process. Then see our Admin UI technical 
documentation to learn how to authenticate your team members and enterprise accounts to access the Admin UI 
using JSON Web Tokens (JWTs). You may also want to review our guide on enterprise facing documentation.

## Consume OAuth Server

Once your Osso instance is deployed, and you've configured at least one OAuth Client and  Identity Provider 
instance, you're ready to start signing users into your application. You'll use slightly-modified OAuth to 
consume the user resources that Osso provides, allowing you to sign the SAML-based users into your application.

See our guide on Sign-In UX to learn how you can integrate Osso into your existing login experience. Then see 
our technical documentation on consuming the OAuth resources. 