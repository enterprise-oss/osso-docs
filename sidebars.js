module.exports = {
  someSidebar: [
    'what-is-saml',
    'overview',
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/deployment',
        'integration/jwt-authentication',
        'integration/oauth-consumption',
        'integration/test',
        'integration/self-serve-osso-react',
      ]
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        {
          type: 'category',
          label: 'IDP Configuration',
          items: ['integration/idp-config/admin-ui'],
        },
        {
          type: 'category',
          label: 'Identity Providers',
          items: ['idp/overview', 'idp/okta',]
        },
      ]
    },
  ],
};
