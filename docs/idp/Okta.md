---
id: okta
title: Okta
---

Okta is a publicly traded identity and access management company based in San Francisco. It provides cloud software that helps companies manage and secure user authentication into modern applications, and for developers to build identity controls into applications, website web services and devices.


# Okta (website)
This guide is for an end user to connect to a Service Provider via Okta. If you’re looking to add a new connection for an Enterprise Customer, please read our guide on Adding your first Enterprise Customer.

To configure SSO to login to a Service Provider, you will need to create a **SAML 2.0 Integrated Application** inside your Okta Admin dashboard. This is typically performed by someone in IT or InfoSec who has administrative privileges to the Okta account.

Once you configure the application in your Okta portal, you will need to return to the **Federation Metadata XML** ****to your contact at the Service Provider you’re setting up so that they can finalize configuration.

## Access Classic UI in Admin Portal
1. Login to your Okta user account at your-domain.okta.com - you will need an account with administrator access to complete this process.
2. Open the Admin dashboard by clicking on the **Admin** button in the top right 
3. Switch into the Classic UI with the selector in the top left. You should have an Okta blue top navigation when in the Classic UI:
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598372182731_Screen+Shot+2020-08-25+at+12.15.30+PM.png)

## Create a SAML 2.0 App
1. Click **Applications** in the top navigation and then click Add Application on the top left of the Applications page:
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598372307711_Screen+Shot+2020-08-25+at+12.18.11+PM.png)

2. Click **Create New App** in the top right of the Applications directory page.
3. Choose Web as the **Platform** and SAML 2.0 ****as the **Sign on method** in the Create a New Application Integration modal, and click Create:
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598372534368_Screen+Shot+2020-08-25+at+12.21.57+PM.png)

## General Settings
1. Insert the name of the Service Provider you’re setting up as the **App name**
2. The Service Provider should provide the **App logo**
3. It’s your decision whether to display the Service Provider’s application to users or in the Okta mobile app - we recommend leaving both boxes **unchecked**
4. Click **Next**
## SAML Settings - General
1. On the Configure SAML step, locate the fields under (A) SAML Settings - General
2. Enter or verify the following values for each of the inputs:
| field                                              | value                                                  |
| -------------------------------------------------- | ------------------------------------------------------ |
| **Single sign on URL**                             | [This value will be provided by your Service Provider] |
| **Use this for Recipient URL and Destination URL** | ✔️                                                     |
| **Allow this app to request other SSO URLs**       | (leave unchecked)                                      |
| **Audience URI (SP Entity ID)**                    | [This value will be provided by your Service Provider] |
| **Default RelayState**                             | (leave blank)                                          |
| **Name ID format**                                 | Unspecified                                            |
| **Application username**                           | Okta username                                          |

## Attribute Statements
1. Okta’s UI suggests this is an optional step, but it is **required** for your users to be be able to login to the Service Provider via Okta
2. Add the following attributes using the **Add Another** button:
| Name  | Name format | Value      |
| ----- | ----------- | ---------- |
| email | Unspecified | user.email |
| id    | Unspecified | user.id    |

3. This section should look like this once you’re finished:
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598373396597_Screen+Shot+2020-08-25+at+12.34.52+PM.png)

4. Click Next to complete the initial SAML setup
## Feedback
1. Okta dumps you on a “Feedback” page to better understand their users. We don’t need you to do anything here.
2. None of the choices quite reflect what we are doing, but the quickest way to get through this form is to choose **I'm a software vendor. I'd like to integrate my app with Okta.**
3. Click Finish
## Download Identity Provider Metadata XML
1. From the previous step, you’ll be taken to the Sign On tab for the Application we just created.
2. Find the notice in the middle of the page that tells us **SAML 2.0** is not configured until you complete the setup instructions:
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598373836653_Screen+Shot+2020-08-25+at+12.43.23+PM.png)

3. The Service Provider will support dynamic configuration, and you’ll need to download the **Identity Provider metadata** that is linked here.
4. Right-click (ctrl-click on Mac) and save the linked file to your computer.
5. Return this file to your contact at the Service Provider so they can finalize configuration.
## Assign Users
3. In order for your users to sign in to the Service Provider’s application via Okta, you must assign them the application in Okta.
4. Who gets access is up to you and your team, but we recommend first adding yourself, completing setup, and then adding more users once you confirm that SSO is working for your user account. 
5. Click the **Assignments** tab
6. Click **Assign** in the top left
![](https://paper-attachments.dropbox.com/s_29E48A2A16B9151D65C0D3F5A2A3AEBA2CC154801EC18822C23E362A84811C2C_1598374109055_Screen+Shot+2020-08-25+at+12.48.13+PM.png)

5. We recommend choosing **Assign to People** and finding your own user account in the next modal, and clicking **Assign**. If you already have groups set up or know who will need to access this application, you can create assignments however you see fit.



