---
id: consuming-osso
title: OAuth 2.0 Flow
---

For languages that don't have an Osso library, you'll need to implement the OAuth 2.0 authorization code grant flow yourself. It's a multi-step exchange .

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

These are the query parameters you must include:

- response_type=code - This allows Osso to initiate the authorization code flow. While that's the only supported flow now, we may add other types in the future, so this is required.

- client_id - The Client Identifier for the corresponding OAuth Client registered on the Osso Admin UI. This typically comes from your environment.

- redirect_uri - Tells Osso where to send the user back to after they've successfully logged in. Must be included in the allow list for the OAuth Client registered on the Osso Admin UI.

- state - Generate a random string and includes it in the request. Osso returns the user back to your application with the same state param - store in a server session and check that is matches in your callback in order to prevent CSRF attacks.

- domain or email (optional) - If you don't provide this paramater, Osso will present the user the hosted login form. Otherwise, Osso uses this value to look up the configured IDP for the user or domain in order to know where to redirect the user. If you pass domain and multiple IDPs are configured for the domain, the user will always be shown a selector. If you pass email, the user will be shown a selector once, and then automatically sent to the chosen IDP in the future.

### 2. Code Exchange

Once the user successfully signs in to their IDP, the user is redirected back to the `redirect_uri` you specified in the authorization URL query param. This URI must also have been allow-listed for the OAuth client in your Osso Admin UI. The redirect URL will include `code` and `state` parameters:

```bash
https://example-app.com/2Fcallback
  ?code=g0ZGZmNjVmOWIjNTk2NTk4ZTYyZGI3
  &state=xcoiv98y2kd22vusuye3kch
```

Ensure that the state param matches the value you previously generated to prevent CSRF attacks.

Then, exchange the `code` for an access token by making a POST request from your server:

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

These are the form encoded parameters you must include:

- grant_type=authorization_code - Keeps Osso in the authorization code flow.

- client_id - The Client Identifier for the OAuth Client registered on the Osso Admin UI.

- client_secret - The Client Secret for the OAuth Client registered on the Osso Admin UI.

- redirect_uri - Same URI as the previous request, must be included in the allow list for the OAuth Client registered on the Osso Admin UI.

- code - The authorization code you received as a URL query param when the user was redirected back to your application.

Assuming your request is successful, you'll receive a JSON body that includes an `access_token`.

```json
{
  "access_token": "3633395cffe739bb87089235c152155ae73b6794f7af353b2aa189aeeacee1ec",
  "token_type": "bearer",
  "expires_in": 600
}
```

### 3. Request profile

Osso access tokens are short-lived and are only useful for requesting a normalized profile for the associated user.

Make a request to the `/oauth/me` endpoint with the access token as an authorization header:

```bash
curl --request GET \
  --url https://your-osso.com.com/oauth/me \
  --header 'authorization: Bearer 3633395cffe739bb87089235c152155ae73b6794f7af353b2aa189aeeacee1ec' \
  --header 'content-type: application/json'
```

```json
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

These are the returned keys for the profile:

- email - The email address provided by the IDP for the user.

- id - Osso's internal unique and permanent ID for the user.

- idp - The name of the Identity Provider the user authenticated against.

- requested - The value you passed to the authorization URL. IDPs do allow for users with different email domains. For instance, the primary domain might be `acme.com`, but the user's email address in their IDP is `user@acme.co.uk`. Osso includes the requested email or domain such that you can properly associate the user with their team.