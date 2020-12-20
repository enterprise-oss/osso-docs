---
id: overview
title: How to deploy Osso
sidebar_label: Overview
---

Osso is an open source service for adding SAML-based Single Sign-On to your stack. You can deploy and manage it yourself or pay for a managed Osso instance. If you're an Osso customer you can <strong>skip this section</strong> and go right to [How to Consume Osso](/docs/consume/overview).

## Deployment

Osso makes it easy to deploy your instance whether you need a quick deployment to Heroku or a containerized deployment on your own servers.

If you're deploying Osso to a PaaS like Heroku, or with the Osso Docker image, you'll need external services like an SMTP server to send email (i.e. Mailgun), which you configure through [environment variables](/docs/deploy/env-variables).

If you're deploying Osso to your own infrastructure, you'll need your own services like a postgres database, a build server with the NodeJS runtime, and a Ruby/Rack compatible webserver.

### Heroku

If you want to deploy and manage Osso yourself, the easiest way to get started is with the Deploy to Heroku button. Heroku will run convenient setup scripts and help you set required [environment variables](/docs/deploy/env-variables) to get you up and running quickly.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/enterprise-oss/osso/tree/main)

### Docker

Osso also provides a Docker image (beta).

### Github

GitHub based deployments work well due to Osso's package based architecture.

## Architecture

Osso is a Ruby application that serves a single page React app for the Admin UI. The [main Github repository](https://github.com/enterprise-oss/osso) is a simple Ruby application written around the [osso-rb gem](https://github.com/enterprise-oss/osso-rb), which provides the Admin API and the SAML and OAuth login functionality. The client React app provides a robust Admin UI and is written in Typescript, getting its core functionality from React hooks and components in [osso-react](https://github.com/enterprise-oss/osso-react).

This approach allows developers to customize their Osso instance as needed, while maintaining the ability to get critical updates via package updates with little fuss. Add middleware like tracing, customize the UI theme, and extend the API without worrying about resolving merge conflicts on critical authentication code.

### Back end


### Front end

