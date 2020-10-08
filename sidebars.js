module.exports = {
  someSidebar: [
    'what-is-saml',
    'overview',
    {
      type: 'category',
      label: 'Integration Docs',
      items: [
        'integration/overview',
        'integration/deployment',
        'integration/jwt-authentication',
        'integration/oauth-consumption',
        'integration/test',
        'integration/self-serve-osso-react',
      ]
    },
    {
      type: 'category',
      label: 'Usage Guides',
      items: [
        {
          type: 'category',
          label: 'Admin UI',
          items: ['usage/admin-ui/overview'],
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
