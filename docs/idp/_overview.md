# Overview (Usage Guides > Identity Providers)
Identity Providers (IDPs) are a category of software applications responsible for managing employees’ access to the various third party applications (i.e. Service Providers) modern enterprise companies rely on. 

## Why do companies use Identity Providers?

On average, companies with fewer than 1,000 employees rely on 22 separate applications to run their business(1). As a result, for each application an employee has access to, the employee will need to be onboarded with the proper privileges, a username and password created, and eventually offboarded upon their departure. Each point in this process gives rise to security risks. 

An Identity Provider enables companies to take control of this process and ensure the correct employee is receiving the proper access levels to applications necessary for them to do their job. Additionally, Identity Providers provide employees Single Sign-On (SSO) access to applications so employees aren’t having to remember multiple passwords or reuse the same passwords across many applications. Upon departure, an administrator of the Identity Provider can disable access to all applications for the exiting employee at the same time. 


## How do Identity Providers work?

An Identity Provider is just a list of employee names and their job titles, without the multitude of Service Providers they connect to. Service Providers can be anything from chat apps for internal communication where every employee requires access, to more specialized applications like that of payroll management where only a few employees are granted access. 

When an employee attempts to login to an application used for their work, they have two methods to do so, if their employer is using an Identity Provider: 1.) Identity Provider-initiated and 2.) Service Provider-initiated.

1.) Logging into an application through an Identity Provider-initiated workflow relies on the employee to login to their Identity Provider Portal—this is oftentimes the only username and password employees will be given. From the portal, they will select the application they want to login to, which they will then be redirected into a separate browser tab (or window) to their desired Service Provider. The Service Provider will be given a message from the Identity Provider to let it know that this person logging in has been authenticated and is in fact who they say they are. The Service Provider sees this and grants the employee access. 

![](https://paper-attachments.dropbox.com/s_1C026FDCE648A63D75102577A290E8DC5412EE7A17B31425A020766B7FC97303_1602011658868_Screen+Shot+2020-10-06+at+12.08.15+PM.png)


2.) Signing into applications via the IDP can sometimes feel inconvenient, as a result a Service Provider-initiated logon is preferred and is generally more popular. This method allows employees to login from the Service Provider’s website, just like they would normally if their employer wasn’t using an Identity Provider. As soon as the employee enters their email into the Service Provider’s website, the SP will send an authentication request to the IDP associated with the employee’s email address. If the employee is already logged into their employer’s IDP, and has access to the SP making the request, the IDP will return a message to the SP letting them know the employee’s identity has been authenticated and to allow them access. If the employee isn’t logged into their IDP, a separate tab (or window) will prompt the employee to login to the IDP in order for them to be authenticated and gain access to the SP.

![](https://paper-attachments.dropbox.com/s_1C026FDCE648A63D75102577A290E8DC5412EE7A17B31425A020766B7FC97303_1602011653962_Screen+Shot+2020-10-06+at+12.13.56+PM.png)

## Challenges of Integrating Identity Providers

Although each Identity Provider relies on SAML as the means to enable SSO across Service Provides, each IDP has its own workflow for onboarding a new Service Provider. As a result, Service Providers are required to familiarize themselves with the workflow of each Identity Provider they support. 

Service Providers typically don’t consider this to be much of an issue when they’re supporting one or two Identity Providers. As companies grow and mature, they will continue to bring on additional enterprise customers and sooner-or-later some of them will require support for a new Identity Provider the Service Provider doesn’t support yet. Soon enough, one or two turns into five or ten, each with their own unique workflows that need to be learned and supported. 

## Benefits of supporting Identity Providers within your Service

As B2B SaaS companies begin to sell upmarket into the enterprise space, certain security features are considered table stakes and are viewed as a prerequisite to begin a sales conversation. SAML SSO falls into this category of table stakes features and should be viewed as a bare minimum requirement to sell into enterprise companies. 

Additionally, when a Service Provider supports an Identity Provider they are given the opportunity to be a part of that Identity Providers Marketplace. This is a place where enterprise companies can search for solutions to their problems that already connect to their IDP.

Don’t let prospective customers disqualify themselves from your solution. Since SAML SSO is so often considered to be a prerequisite, when shopping for software many prospects will eliminate vendors based on this requirement when creating a shortlist. It is in your best interest, as a Service Provider, so support as many Identity Providers as possible to ensure this is not an objection for future prospects. 

## Which Identity Providers should I support first?

Since balancing resources when determining your feature roadmap is a constant concern, you’ll need to prioritize the Identity Provider with the greatest reach. Okta and Microsoft’s Azure Active Directory are the industry leaders, however scoping, coding, testing, documenting, and training are all still necessary to produce a working prototype. 

## What to do now?

If you’re reading this, it should be no surprise we’d recommend giving Osso a try. We’ve built a one-stop shop to connect your Service to a number of Identity Providers (and we’re constantly adding more), in addition to providing a User Interface to help manage and onboard your enterprise customers. Each Identity Provider is complete with custom documentation so that your Customer Success and Sales teams can assist in seamlessly onboarding your next enterprise customer to their preferred Identity Provider. 

Drop us an email at hello@ossoapp.com — we’d love to chat and learn more about what you’re working on!


## Sources

(1) https://www.skyhighnetworks.com/cloud-security-blog/every-company-is-a-software-company-today

