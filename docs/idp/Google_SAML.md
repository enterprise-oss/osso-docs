# Google SAML (website)
This guide is for an end user to connect to a Service Provider via Google SAML. If you’re looking to create a connection for an Enterprise Customer, please read our guide on Adding your first Enterprise Customer

In order to login users via Google SAML, you will need to add a custom SSO SAML ****application ****inside your Google Admin Console. This is typically performed by someone in IT or InfoSec who has administrative privileges to the Google Admin Console account.

Follow the steps below to create an application with information we’ve generated for your account, and when finished be sure to return the **G****oogle** ******IDP** ******Metadata** **XML** to your contact at the Service Provider so your team can begin signing in with SSO.

## Access Google Admin Console
1. Login to the Google Admin Console (https://admin.google.com/)
2. Click the Apps ****tile
3. Click the SAML apps tile
4. Click the yellow **(+)** icon at the bottom right corner
## Configure SAML Connection

**Step 1 of 5 - Enable SSO for SAML Application**

1. Click SETUP MY OWN CUSTOM APP ****

**Step 2 of 5 - Google IdP Information**

1. Click NEXT

**Step 3 of 5 - Basic information for your Custom App**

1. Insert the name of the Service Provider you wish to setup as the **Application Name**
2. For **Description**, optionally enter a description for your colleagues describing what you use the app for. 
3. The logo should be provided by the Service Provider
4. Click NEXT

**Step 4 of 5 - Service Provider Details**

1. Fill in the boxes with the following information:
    **ACS URL**
        [You should receive this from the Service Provider]
    **Entity ID**
        [You should receive this from the Service Provider]
    **Start URL**
        [leave blank]
    **Signed Response**
        [keep unchecked]
    **Name ID**
        [keep as Basic Information]
        [keep as Primary Email]
    **Name ID Format**
        [keep as UNSPECIFIED]
2. Click NEXT

**Step 5 of 5 - SAML attribute mapping**

1. Click FINISH ****on bottom right corner
2. Click OK ****on bottom right corner
3. From Apps > SAML apps > the Service Provider’s name you just created, click the Configure SAML attribute mapping link on the card titled **SAML attribute mapping** at the bottom of the page
4. Click ADD ANOTHER MAPPING
5. Click the Select field dropdown menu and select Primary email. Directly to the right, enter `email` in the empty text field.
6. Click ADD ANOTHER MAPPING
7. Click the Select field dropdown menu and select Primary email. Directly to the right, enter `idp_id` in the empty text field.
8. Click SAVE on the bottom right corner. When finished, the table of fields should look like this:
![](https://paper-attachments.dropbox.com/s_9410907BB5FC07EB4F862C37A82433C15D972B6BD2C079E0EC9DE5E3238E8F95_1600290716167_Screen+Shot+2020-09-16+at+2.09.57+PM.png)



## Download metadata
1. From Apps > SAML apps > the Service Provider’s name you just created, click Download metadata on the left navigation menu
![](https://paper-attachments.dropbox.com/s_9410907BB5FC07EB4F862C37A82433C15D972B6BD2C079E0EC9DE5E3238E8F95_1600373000752_Screen+Shot+2020-09-17+at+1.02.37+PM.png)

2. Click DOWNLOAD METADATA and save the file to your computer. Google will default the file name to `[GoogleIDPMetadata.xml](#)`
3. Email this file to us. We require this file to complete setup on our end.
## Turn on your SAML app
3. From Apps > SAML apps > the Service Provider’s name you just created, click the User access card
![](https://paper-attachments.dropbox.com/s_9410907BB5FC07EB4F862C37A82433C15D972B6BD2C079E0EC9DE5E3238E8F95_1600374730143_Screen+Shot+2020-09-17+at+1.31.54+PM.png)

2. To turn on for everyone in your organization, click On for everyone, and then click Save
3. To turn on the app for only users in a specific Group or Organizational Unit:
    1. On the left navigation menu, click Group or Organizational Units and select the specific Groups or Organizational Units to grant them access to [app name interpolation].
    2. Click On
    3. Click Save
## Verify SSO is working with the Service Provider

*Note: in order for you to login via SSO you will have had to send the* ***G******oogle*** *********IDP*** *********Metadata*** ***XML*** *file to your contact at the Service Provider you’re wishing to access.*

In order to test whether signing in with SSO is working correctly, you will sign in via Google Admin Console, although in the future your team will be able to sign on from the Service Provider’s login page. 


1. From Apps > SAML apps > the Service Provider’s name you just created, click Test SAML login on the left navigation menu
![](https://paper-attachments.dropbox.com/s_9410907BB5FC07EB4F862C37A82433C15D972B6BD2C079E0EC9DE5E3238E8F95_1600373795073_Screen+Shot+2020-09-17+at+1.15.39+PM.png)

2. A separate tab will open on your browser and prompt you to choose the Google account to sign into. Click on your account that you plan on using with our service.
3. You should be redirected to our service and have been logged in successfully.

