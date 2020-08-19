---
id: deployment
title: Deployment
---

Osso is a Ruby app that serves a single page React app. The main Github repository is a light Sinatra application written around the Osso gem, which is itself a collection of modular Sinatra applications with shared models, helpers, and migrations to back the models. The client React app provides a robust Admin UI and is written in Typescript, getting most of its functionality from `osso-react`.

This approach allows developers to clone an instance of Osso from the main Github repository and customize as needed, while integrating critical updates via git based package updates with little fuss.

The main Osso repository includes end-to-end tests via Cypress and CI steps for Buildkite.

### Heroku

The simplest way to deploy an Osso instance is with Heroku via the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Heroku will run convenient setup scripts and set required environment variables to get you up and running quickly.

### Environment variables

Some Environment variables are necessary for each Osso deployment. If you Deploy Osso with the Heroku button, some of the these will be set for you, and you'll have the opportunity to set the others as you deploy your instance. Otherwise view your hosting provider's documentation on Environment or Configuration variables.




### Post Deploy



