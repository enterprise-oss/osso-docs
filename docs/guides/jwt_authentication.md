---
id: jwt-authentication
title: JWT Authentication
---

> Osso Hosted users can skip this step and reduce the integration load on your dev team.

Osso uses JSON Web Tokens, or JWTs, to authenticate users who want to make configuration changes 
to Osso.

Using your `OSSO_JWT_HMAC_SECRET` environment variable, you create an Osso JWT on your own server. You can 
then redirect users to your Osso Admin UI with the JWT as a query parameter, or pass the JWT to your front 
end to use in an `osso-react` powered UI.

### Crafting a JWT

First you'll need a secret key for encoding your JWT. Osso instances include `JWT_HMAC_SECRET` in the 
[required environment variables](/), and you'll want to mirror the value in the environment on your 
server. JWT libraries are availble for most major languages - be sure to use `HS256` as the algorithm.

### JWT Payload

To create an Osso JWT token, encode an object with all of the following properties:

```ruby
    { 
      email: 'user@example.com', # email address of the current user
      scope: 'admin', # 'admin' | 'internal' | 'end-user'
      id: SecureRandom.uuid, # any string
      oauth_client_id: ENV['OSSO_CLIENT_ID'], # 
    }
```

* **email** - required

The email address of the current user on your server. The email domain will be used for `end-users` to determine their privileges.

* **scope** - required

One of `'admin'`, `'internal'` or `'end-user'`.

Only `'admin'` users will be able to access Developer Configuration, `'internal'` users can create and update customer records, and `'end-user'` users will only be able to access customer records belonging to their email domain, allowing for self-serve configuration of their own SSO. 

* **id** - required

A string identifier for the user.

* **oauth_client_id** - required

The Client ID for the OAuth Client associated with your application in your current environment. Sets the base OAuth Client for configuration actions by `'internal'` and`'end-user'` users, whereas `'admin'` users have access to any OAuth Client.

## Providing Access

### Osso Admin UI

> Osso Hosted users can skip this step and instead provide access through the Hosted UI.

To authenticate a user to Osso Admin UI, craft an Osso JWT and send a user to your Osso instance with the JWT in the `admin_token` query paramater:

```
https://[OSSO_URL]/admin?admin_token=[JWT]
```

Users will be signed in automatically with the correct privileges.

You can also provide a `JWT_LOGIN_URL` to your Osso instance environment that redirects unauthenticated Osso Admin UI users to your application. You can sign them in, craft a JWT, and send them back to Osso UI for the best experience.

### osso-react

If you integrate `osso-react` into your own application, you need to authenticate your users as Osso `'end-users'`. It's important that you craft this token on your server to keep your `JWT_HMAC_SECRET` secret.

Pass the JWT to your front end and provide it to your `<OssoProvider>`:

```jsx
<OssoProvider jwt={JWT}>
  {/* your application tree that includes Osso components */}
 </OssoProvider>
```