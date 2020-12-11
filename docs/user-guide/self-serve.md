---
id: self-serve
title: Enterprise User SAML Configuration
---

Osso Admin UI also allows your enterprise customers to configure their own SAML-based authentication. When you acquire a new customer who requires SAML, send them to the Osso instance's admin interface for their account at https://test/admin/enterprise/:domain.

The enterprise user will choose their IDP, and Osso will generate all of the configuration information needed to configure your application on their IDP admin dashboard, as well as a PDF document to walk the enterprise user through configuring your application on their IDP admin dashboard.

Once they complete configuration on the IDP admin dashboard, the enterprise user will be able to input and upload the final configuration information into Osso, which will promote the Identity Provider instance to live, and allow users from that enterprise to start signing in.