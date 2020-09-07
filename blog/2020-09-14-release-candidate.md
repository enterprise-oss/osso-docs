---
id: 1-0-0-release-candidate
title: Osso v1.0.0.rc Available Now
author: Sam Bauch
author_title: Cofounder
author_url: https://github.com/sbauch
author_image_url: https://avatars1.githubusercontent.com/u/923033?s=460&u=db9bb41f9b279750c74afc1be0ab51db05539593&v=4
tags: [Osso, SAML, SSO]
---

We've been hard at work building Osso for a few months now and are ready to lift the curtain!

Osso is a free, open-source service for adding SAML-based SSO to your application. We've always intended to be open source, but wanted to get to a point of some stability and usefulness before opening up our repos. We're considering this a v1 release candidate and hope to release a proper v1 within a few weeks - you can start using Osso today with confidence that things won't change a ton, but the utility is limited with support for only a couple of Identity Providers.

### SAML-based SSO

(shorter version of What is SAML from docs)

### Building off existing OSS

Osso depends on some important open source projects in order to provide authentication functionality. OneLogin maintains `ruby-saml`, a ruby gem that "provides a means for managing authorization initialization and confirmation requests from identity providers." SAML is 15 year old open standard - we don't see any need to reinvent the wheel here, and this project is stable, well-tested and well-maintained.

Osso depends directly on `omniauth-multi-provider` which itself utilizes `ruby-saml`. Omniauth is a popular multilpe-provider authentication system for Rack-based applications, and this provider gem wraps `ruby-saml` so it can be used in the familiar Omniauth authentication flow. `omniauth-multi-provider` is similarly well-tested, and we again saw no reason to reinvent this additional wheel.

Finally, Osso provides an OAuth Server. OAuth is another stable and open standard, albeit one that is more familiar to modern web developers. You send your users through Osso as part of an OAuth authorization flow - Osso handles the SAML part, and once authenticated against an IDP, sends the user back to your application, eventually allowing you to request a profile for the user using an access token. Osso depends on `rack-oauth2` to provide a spec compliant OAuth server.

You may be asking yourself _If Osso depends on these other projects for so much functionality, what does Osso actually do?_

### Osso value add

As we've seen, there's already plenty of OSS for adding SAML-based SSO to your application. So what value does Osso actually provide?

While the OSS we've discussed is great and well-documented, there's a huge gap between setting up an SSO proof of concept and releasing SSO as a scalable feature that Sales knows how to sell, Customer Success knows how to onboard and troubleshoot, and Engineering knows how to debug.

Osso provides two main areas of functionality to help close this gap: CRUD and Docs.

#### CRUD

With Osso, our Identity Provider CRUD (create, read, update, destroy) helps you go from proof of concept to full-featured by allowing you to skip all of the biolerplate code needed to configure SAML identity providers for each enterprise customer. In a POC, you might hard code some of the data needed to complete the authentication dance. As you start to scale the solution, you'll keep pulling on this thread, and soon realize that it's a bit bigger of a project involving some database tables, x509 certificate validation, and a UI to tie it all together. Start adding more identity providers and things get even more entangled.

Instead, let Osso worry about the banal CRUD - deploy your Osso instance, authenticate your team, and you've got a full-featured Admin UI where your team can easily manage your customer's SAML providers.

Since Osso requires that you send your users through an OAuth flow, Osso's Admin UI also includes a section for OAuth Client CRUD. If you've ever registered an OAuth client on Google or Facebook then this will be a familiar UI to you.

#### Docs

Osso generates PDF documentation for each one of your customers, specific to their provider. In a proof of concept, documentation might not be something you consider, but each Identity Provider has a very specific process for adding a SAML app for a enterprises's employees. These are also enterprise companies themselves, and the UIs are as obtuse as you would expect.

We've taken great care in crafting straightforward and accurate documention for each provider we support (Okta and Microsoft Azure ADFS for now). When you onboard a enw customer in Osso, we provide you the white-labeled documentation to send to your client in order to configure your app in their IDP.

In some ways we see this as the biggest value add - our open source docs should cut down on time to onboard and troubleshoot customers, and non-engineers may benefit form this the most.

### Next steps

Between now and a proper v1 release, here's what the Osso team will be focused on:

#### More Providers

We plan to keep adding providers, and the bulk of this work is in creating our industry best documentation. We plan to add Google (SAML), OneLogin, Ping, Gluu (yay OSS!), and others that the community asks for. 

#### Self-serve Paid Plans

We'll always be free and open source, but we'll also sell paid hosted plans for companies that wish to decrease the integration workload on the development team or would like to have the peace of mind that the Osso team can provide support if anything comes up. Our hosted plans will be a deployment of an Osso instance, and your data will not be mixed with other Osso customers'.

#### More OAuth Consumption Libraries

We're releasing omniauth-osso today for Ruby apps, and have started on a Passport strategy for NodeJS apps. We'd like to further explore consuming OAuth in other languages and offering libraries to make consuming your Osso instance easy in whatever langauge you write your backend.

#### Let's chat!

We're really intersted in having conversations with Engineering and Sales leaders who have maybe heard of SAML, or have it on their backlog, who might consider using Osso. We'd also be thrilled to chat with folks on the other side of this - anyone in IT or Infosec who administers their company's Identity Provider.

You can reach us at team@enterpriseoss.dev