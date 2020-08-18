---
id: deployment
title: Deployment
---

Osso is primarily available as a Ruby application. The main Github repository 
is a light Sinatra application written around the Osso gem, which is itself 
a couple of Sinatra applications with shared models, helpers, and migrations 
to back the models. Osso can be deployed to Heroku or any cloud provider that 
supports app json, or own your own if you're familiar with Rack applications.

This approach allows developers to deploy an instance of Osso from the main 
Github repository while receiving updates via the Ruby gem. You can also add 
your own middlewares for things like health checks while avoiding painful 
upgrades, though we encourage you to contribute those improvements back to 
Osso!

### Heroku

You can deploy an an instance of Osso to Heroku with the button below. We 
recommend deploying to Heroku first, even as a proof of concept, so you 
can decide if Osso is right for you before investing in CI or other 
production scale preparations. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Environment variables

Some Environment variables are necessary for each Osso deployment. If you 
Deploy Osso with the Heroku button, some of the these will be set for you,
and you'll have the opportunity to set the others as you deploy your instance. 
Otherwise view your hosting provider's documentation on Environment or 
Configuration variables.



### Post Deploy



