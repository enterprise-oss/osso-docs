---
id: azure-active-directory
title: Azure Active Directory
---
This guide is for an end user to connect to a Service Provider via Azure Active Directory. If you’re looking to add a new connection for an Enterprise Customer, please read our guide on Adding your first Enterprise Customer.

To configure SSO to log in to the Service Provider’s application, you will need to create a **Non-gallery Enterprise Application** inside your Azure Active Directory portal. This is typically performed by someone in IT or InfoSec who has administrative privileges to the Azure ADFS portal.

Once you configure the application in your portal, you will need to return the **Federation Metadata XML** to your contact at your Service Provider so that they can finalize configuration on their end.

## Create new Application
1. Log in to your Azure portal at portal.azure.com - you will need an account with at least the **Application administrator** role, though we recommend that a **Global administrator** completes this process.
2. Access your Azure Active Directory, and in the left-hand menu click **Enterprise Applications**. Then click **+ New Application** in the top nav. You should land on a page like this:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597871237501_Screen+Shot+2020-08-19+at+4.51.40+PM.png)

3. Choose **Non-gallery application**, and on the next page enter the name of the Service Provider you wish to setup as the application <u>Name</u>:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597871290255_Screen+Shot+2020-08-19+at+4.52.28+PM.png)

4. Click the **Add** button, and you’ll be taken to your new application’s Overview page:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597871381050_Screen+Shot+2020-08-19+at+5.09.24+PM.png)

## Assign Users
1. Click **1. Assign users and groups**
2. We recommend first adding yourself, completing setup, and then adding more users once you confirm that SSO is working for your user account.
3. Click **+ Add User** and select your own user account to provide yourself access, and click **Assign**.
4. Once at least one user account or group is listed under <u>Users and groups</u>, you’re ready to move on to the next step - click **Overview** in the left-nav to go back to your application’s overview.
## Set up SSO
1. From your application’s overview page, click **2. Set up single sign on**
2. Choose **SAML** as the single sign-on method:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597872312543_Screen+Shot+2020-08-19+at+5.24.50+PM.png)

3. You’ll be taken to a page titled <u>Set up Single Sign-On with SAML</u> with 5 steps:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597873230217_Screen+Shot+2020-08-19+at+5.40.16+PM.png)

    
## Basic SAML Configuration
1. Click **Edit** in the first card, **Basic SAML Configuration**
2. A form will open - enter the following information into the relevant form fields:

| Field                                          | Value                                                  |
| ---------------------------------------------- | ------------------------------------------------------ |
| **Identifier (Entity ID)**                     | [This value will be provided by your Service Provider] |
| **Reply URL (Assertion Consumer Service URL)** | [This value will be provided by your Service Provider] |

3. Click **Save** to return to your application Overview


## User Attributes & claims
1. Click **Edit** in the second card, **User Attributes & claims**
2. Add the following claims using the **+** **Claim** button

    | Claim | Value         |
    | ----- | ------------- |
    | email | user.mail     |
    | id    | user.objectid |

3. Click **Save** to close the attributes page to return to your application Overview
## SAML Signing Certificate
1. You’ve now completed configuration, but you won’t be able to sign in until the Service Provider receives the **Federation Metadata XML**
2. In the third card, click the Download link next to **Federation Metadata XML**:
![](https://paper-attachments.dropbox.com/s_42E43B4BA7A68F5BC08B93AD8B4C7A77610FFB9CA4931A1C1AA2DBBD75AB9EBA_1597873793440_Screen+Shot+2020-08-19+at+5.49.18+PM.png)

3. This will download an XML file to your computer. Email this file back to your contact at the Service Provider in order for them to finalize configuration.

