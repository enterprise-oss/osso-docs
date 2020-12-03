---
id: overview
title: Overview
---

Osso is a Ruby application that serves a single page React app for the Admin UI. The [main Github repository](https://github.com/enterprise-oss/osso) is a light Sinatra application written around the Osso gem, which is itself a collection of modular Sinatra applications with shared models, helpers, and migrations to back the models. The client React app provides a robust Admin UI and is written in Typescript, getting most of its functionality from `@enterprise-oss/osso`.

This approach allows developers to clone an instance of Osso from the main Github repository and customize as needed, while integrating critical updates via package updates with little fuss. You can add middlewares, customize the UI theme, and extend the API without worrying about resolving merge conflicts. If you use Ruby in your application's back end, you can alternatively use `osso-rb` within your application, though this approach is less documented.

The main Osso repository includes end-to-end tests via Cypress and CI steps for Buildkite - Osso's [Buildkite pipelines are public](https://buildkite.com/enterpriseoss).