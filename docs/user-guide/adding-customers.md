---
id: adding-customers
title: Adding customers
---
Osso Admin UI allows your team members to onboard an enterprise customer to use SAML-based authentication. When you acquire a new customer who requires SAML, you'll navigate to your Osso instance's admin interface at https://test/admin.

Click the Onboard Enterprise button to start configuring a new enterprise account for SAML. You'll need to know the account's domain name and the Identity Provider they use (i.e. Okta, OneLogin, etc.). Enter these in the web form, and Osso will generate a pending Identity Provider instance.

The Admin UI will then provide all of the information your enterprise customer needs to configure your app in their IDP admin dashboard. Osso will also generate a PDF document that you can send your enterprise customer, specific to their IDP, that will walk them through configuration, and tell them what information they need to relay back to you. The enterprise employee then goes and configures your app in their IDP admin dashboard while you wait.

Once you receive configuration information back from your customer, return to the Osso Admin UI, and find the pending Identity Provider instance for the account you are onboarding. When you visit the pending connection, you'll be able to input and upload the configuration information your customer provided. The Identity Provider instance will be promoted to live and users from that account are ready to start signing in.