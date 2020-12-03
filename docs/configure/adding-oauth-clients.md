---
id: adding-oauth-clients
title: Adding an OAuth client
---
Osso authenticates users against multiple Identity Providers via SAML, and makes normalized user profiles available to your application via OAuth. You need to create an OAuth Client for each application that needs to consume these profiles. An OAuth Client represents an application that is allowed and configured to integrate with Osso's OAuth endpoints. If you've ever registered an OAuth client on a popular service like Google or Facebook you may be familiar with this process.

You can manage your OAuth Clients in the Configuration section of the Osso Admin UI. Navigate to your Osso instance, choose OAuth Clients from the menu, and click the button Create an OAuth Client.

You'll be asked to enter a name to identify the OAuth Client, and to specify redirect URIs where the OAuth server may send your users once they authenticate. Osso will generate a Client ID and Client Secret which you will need in your application. You'll need to use these in your application when interacting with Osso. These values should be considered secret (the Client Secret is **super secret**, the Client ID will appear in URLs but it's best to still treat it as somewhat secret) and should not be committed to version control. Osso allows you to regenerate credentials if you fear they have been compromised.
