---
id: one-login
title: OneLogin
---
This guide is for an end user to connect to a Service Provider via OneLogin. If you’re looking to add a new connection for an Enterprise Customer, please read our guide on Adding your first Enterprise Customer.

To configure SSO to log in to a Service Provider’s application, you will need to add a **SAML Test Connector** application inside your OneLogin Administration dashboard. This is typically performed by someone in IT or InfoSec who has administrative privileges to the OneLogin account. When finished be sure to return the **OneLogin Metadata** to your contact at the Service Provider you’re setting up in order for them to complete configuration. 

## Access OneLogin Administration Portal
1. Log in to your OneLogin user account at your-domain.onelogin.com - you will need an account with administrator access to complete this process.
2. Open the Admin dashboard by clicking on the **Administration** link in the top right. 
3. Click **Applications** in the top left of the top navigation bar.
4. Click **Add App** in the top right.
5. Type `SAML Test` in the search field in the top left, and choose the first result shown below, **SAML Test Connector (Advanced)**
![](https://paper-attachments.dropbox.com/s_A55FC0BB3CD2D5C754377F7C17F95879C302974294BDDAEEE55F28E27A3FBD1E_1600100002091_Screen+Shot+2020-09-14+at+12.12.42+PM.png)

## Portal Configuration
1. Insert the name of the Service Provider you’re setting up as the <u>Display name</u>.
2. It’s your decision whether to display the Service Provider’s application to users in the Portal - we recommend leaving this switch **turned on**.
3. The Service provider will provide a logo for you to use
4. Optionally enter a description for your colleagues describing what you plan on using the Service Provider’s application for. 
5. Click **Save** in the top right. 
## Application Details
1. Once your new app has been successfully updated, click on **Configuration** in the left navigation menu.
2. Fill in the Application details form fields so they match this information: 
| Field                             | Value                                                  |
| --------------------------------- | ------------------------------------------------------ |
| **RelayState**                    | [ leave blank ]                                        |
| **Audience (EntityID)**           | [This value will be provided by your Service Provider] |
| **Recipient**                     | [This value will be provided by your Service Provider] |
| **ACS (Consumer) URL Validator*** | [This value will be provided by your Service Provider] |
| **ACS (Consumer) URL***           | [This value will be provided by your Service Provider] |
| **Single Logout URL**             | [leave blank]                                          |
| **Login URL**                     | [leave blank]                                          |
| **SAML not valid before**         | [keep 3]                                               |
| **SAML not valid on or after**    | [keep 3]                                               |
| **SAML initiator**                | [keep as OneLogin ]                                    |
| **SAML nameID format**            | [keep as Email ]                                       |
| **SAML issuer type**              | [keep as Specific]                                     |
| **SAML signature element**        | [keep as Response]                                     |
| **Encrypt assertion**             | [leave unchecked]                                      |
| **SAML encryption method**        | [keep  TRIPLEDES-CBC ]                                 |
| **Sign SLO Response**             | [keep unchecked]                                       |

3. Click **Save** in the top right.
## Parameters
1. Once your app has been successfully updated, click on **Parameters** in the left navigation menu.
2. Click the blue **(+)** icon on the right hand side of the table to add attributes.
3. Under <u>Field name</u> enter `email` in the text field.
4. Under the <u>Flags</u> section, check the box to the left of **Include in SAML assertion**.
5. Click **Save** in the bottom right corner
![](https://paper-attachments.dropbox.com/s_9BF480D5EBAB6950B61107BE32D4AE0DF2AFBB973F00481A178A9FA8B91419FF_1600111364932_OneLoginNewAttributeScreen-pt1.png)

6. After saving, you will be brought to another window from which you will need to select **Email** from the dropdown menu underneath <u>Value</u>
7. Select **Save** on the bottom right corner
![](https://paper-attachments.dropbox.com/s_9BF480D5EBAB6950B61107BE32D4AE0DF2AFBB973F00481A178A9FA8B91419FF_1600111574114_OneLoginNewAttributeScreen-pt2.png)

8. Repeat Steps 2 - 7, except this time enter the following data:
    1. <u>Name</u>: `id`
    2. Underneath <u>Flags</u>, check the box to the left of Include in SAML assertion
    3. Select **OneLogin** **ID** from the dropdown menu underneath <u>Value</u>
9. When finished, the table of fields should look like this:
![](https://paper-attachments.dropbox.com/s_5B8999539163B19653FE1C2D5CD97D7611B397BED353C95493FEDA68CBAFCB54_1600285143939_image.png)

10. To finish, click **Save** at the top right corner of the webpage.
## Assign Users
1. Click **Users** in the top navigation bar on the left. From this screen, you will be able to bulk add users into the Service Provider’s application, however **we recommend starting with adding yourself first, completing the setup, and then adding additional users once you confirm that SSO is working with your user account.**
2. Click your profile from the list of users.
3. Click **Applications** from the left navigation menu.
4. Click the blue **(+)** icon on the right hand side to add yourself as a user to Service Provider’s application
5. From the dropdown menu below Select application, select the Service Provider’s application name, and click **Continue** on the bottom right corner.
6. On the next screen, leave everything **as-is** and click **Save**.
## Complete setup
1. Once you’ve added yourself as a user, click on **Applications** in the top navigation bar.
2. Click on the application you just added
3. In the top right corner of the screen, click on the **More actions** dropdown, and select **Download SAML Metadata**. The download should start automatically. 
![](https://paper-attachments.dropbox.com/s_A55FC0BB3CD2D5C754377F7C17F95879C302974294BDDAEEE55F28E27A3FBD1E_1600102157126_Screen+Shot+2020-09-14+at+12.48.29+PM.png)

4. When the file is done downloading, attach it to an email and send it back to the contact you have at your Service Provider in order for them to finalize configuration.

