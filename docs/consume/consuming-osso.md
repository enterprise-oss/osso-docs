---
id: consuming-osso
title: Consuming Osso
---
## OAuth 2.0 Authorization Code Flow

The OAuth 2.0 Authorization Code Grant is the most common OAuth 2.0 grant type - if you've implemented OAuth before with something like Google or Github, then you used this approach already. Osso's OAuth client libraries handle the intermediate requests, authorization code exchange, etc., but this describes the entire flow for consuming Osso.

### 1. Authorization

To begin the OAuth flow, construct a URL like this and redirect the user there:

```bash
https://your-osso.com/oauth/authorize
  ?response_type=code
  &client_id=29352915982374239857
  &redirect_uri=https%3A%2F%2Fexample-app.com%2Fcallback
  &state=xcoiv98y2kd22vusuye3kch
  &domain=foo.com
  &email=user@foo.com
```

Here’s each query parameter explained:

- response_type=code - This allows Osso to initiate the authorization code flow. While that's the only supported flow now, we may add other types in the future, so this is required.

- client_id - The Client Identifier for the OAuth Client registered on the Osso Admin UI.

- redirect_uri - Tells Osso where to send the user back to after they've successfully logged in. Must be included in the allow list for the OAuth Client registered on the Osso Admin UI.

- state - Generate a random string and includes it in the request. Osso returns the user back to your application with the same state param - check that is matches in order to prevent CSRF attacks.

- domain OR email - One of domain or email is required. Osso uses the value to look up the configured IDP for the user or domain in order to know where to redirect the user. If you pass domain and multiple IDPs are configured for the domain, the user will always be shown a selector. If you pass email, the user will be shown a selector once, and then automatically sent to the chosen IDP in the future.

### 2. Code Exchange

Once the user successfully signs in to their IDP, the user is redirected back to the `redirect_uri` you specified in the authorization URL query param. The redirect URL will include `code` and `state` parameters:

```bash
https://example-app.com/2Fcallback
  ?code=g0ZGZmNjVmOWIjNTk2NTk4ZTYyZGI3
  &state=xcoiv98y2kd22vusuye3kch
```

Ensure that the state param matches the value you previously generated to prevent CSRF attacks.

Then, exchange the `code` for an access token by making a POST request:

```bash
curl --request POST \
  --url 'https://your-osso.com/oauth/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=authorization_code \
  --data 'client_id=YOUR_CLIENT_ID' \
  --data client_secret=YOUR_CLIENT_SECRET \
  --data 'redirect_uri=https://example.com/callback' \
  --data code=YOUR_AUTHORIZATION_CODE
```

Here’s each query parameter explained:

- grant_type=authorization_code - Keeps Osso in the authorization code flow.

- client_id - The Client Identifier for the OAuth Client registered on the Osso Admin UI.

- client_secret - The Client Secret for the OAuth Client registered on the Osso Admin UI.

- redirect_uri - Same URI as the previous request, must be included in the allow list for the OAuth Client registered on the Osso Admin UI.

- code - The authorization code you received as a URL query param when the user was redirected back to your application.

Assuming your request is successful, you'll receive a JSON body that includes an `access_token`.

```javascript
{
  "access_token": "3633395cffe739bb87089235c152155ae73b6794f7af353b2aa189aeeacee1ec",
  "token_type": "bearer",
  "expires_in": 600
}
```

### 3. Request profile

Osso access tokens are short-lived and are only useful for requesting a normalized profile for the associated user.

```bash
curl --request GET \
  --url https://myapi.com/api \
  --header 'authorization: Bearer 3633395cffe739bb87089235c152155ae73b6794f7af353b2aa189aeeacee1ec' \
  --header 'content-type: application/json'
```

```javascript
{
  "email": "user@foo.com",
  "id": "f23611a5-2817-43e2-94b7-99b25235ad2d",
  "idp": "Okta",
  "requested": {
    "email": null,
    "domain": "foo.com"
  }
}
```

Here’s each query parameter explained:

- email - The email address provided by the IDP for the user.

- id - Osso's internal unique and permanent ID for the user.

- idp - The name of the Identity Provider the user authenticated against.

- requested - The value you passed to the authorization URL. IDPs do allow for users with different email domains. For instance, the primary domain might be `acme.com`, but the user's email address in their IDP is `user@acme.co.uk`. Osso includes the requested email or domain such that you can properly associate the user with their team.