---
id: oauth-consumption
title: Consume OAuth
---

Osso wraps a SAML auth flow inside an OAuth flow, handling all the ugly SAML bits while allowing your application to add Osso as an OAuth provider, a much simpler task for your engineering team, especially if you already support other OAuth providers, such as Google or GitHub.

Digging deeper, Osso supports an OAuth 2.0 authorization code grant flow that allows your application to send your users to Osso when they wish to log in with SSO. Osso then authenticates the user against their Identity Provider using SAML, and returns the user to your application with an authorization code in the URL. Per the OAuth spec, you exchange this code for an access token which you can then use to request a profile about the user, allowing you to sign them in to your application however you see fit.

You can learn more about the OAuth 2.0 authorization code grant flow on [Okta's developer website](https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type), as well as the [official OAuth 2.0 docs](https://oauth.net/2/grant-types/authorization-code/).

### OAuth Clients

Before you can consume the OAuth flow, you need to manage your OAuth Clients in the Configuration section of the Osso Admin UI. An OAuth Client respresents an application that is allowed and configured to integrate with Osso's OAuth endpoints. If you've ever registered an OAuth client on a popular service like Google or Facebook you may be familiar with this process.

Osso will generate a Client ID and Client Secret for each OAuth Client. You'll need to use these in your application when interacting with Osso. These values should be considered secret (the Client Secret is **super secret**, the Client ID will appear in URLs but it's best to still treat it as _somewhat secret_) and should not be commited to version control. Osso allows you to regenerate credentials if you fear they have been compromised.

#### Redirect URIs

You must add Redirect URIs to an allow-list of valid redirects for each OAuth Client. After a user successfully authorizes their Identity Provider, Osso will redirect the user back to your application with an authorization code in the URL. Because the URL will contain sensitive information, Osso will only redirect a user to a URL you've added to your allow list.

You must also specify a Primary Redirect URI - users who access your app by choosing it from their Identity Provider (known as an Identity Provider initiated sign in) will be sent to this URL.

### Consumption Libraries

Osso offers OAuth consumption libraries in a couple languages / frameworks, and plans on adding more as needed. Please let us know if you could use a library for consuming Osso oauth in your langauge: <a href="mailto:hello@enterpriseoss.dev" target="_blank">hello@enterpriseoss.dev</a>

#### omniauth-osso (Ruby)

<a href="https://github.com/enterprise-oss/omniauth-osso" target="_blank">Source on GitHub</a>

omniauth-osso is a provider gem for Omniauth, a popular Ruby framework for integrating OAuth services.

First, add the gem to your Gemfile:

```ruby
gem 'omniauth-osso'
```

Then you'll need to add Osso to your `Omniauth::Builder` block.

```ruby
# Rails initializer:

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :osso, ENV['OSSO_CLIENT_ID'], ENV['OSSO_CLIENT_SECRET']
end

# alternatively, in a Rack or Sinatra app:

use OmniAuth::Builder do
  provider(
    :osso,
    client_id: ENV['OSSO_CLIENT_ID'],
    client_secret: ENV['OSSO_CLIENT_SECRET'],
  )
end

```

Finally, you'll need to send your users to `/auth/osso?domain=USER_DOMAIN` in order to kick off the authentication. SSO login experience is a bit different than any login experience you've used before. We've got a guide for SSO UX, and our React library offers an SSOLogin component to help you offer a strong UX.

#### passport-osso

👷🏽‍♀️ Under Construction 🏗

#### Others

We intend to build other consumption libraries as we grow, and welcome contributions from the developer community. If there's a specific language or OAuth framework you need a client library for, let us know: <a href="mailto:hello@enterpriseoss.dev" target="_blank">hello@enterpriseoss.dev</a>.