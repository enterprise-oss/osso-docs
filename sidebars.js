module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/what-is-saml', 'overview',
        {
          type: 'category',
          label: 'IDP Configuration',
          items: ['guides/idp-config/admin-ui'],
        }]
    },
    {
      type: 'category',
      label: 'Documentation',
      items: ['doc1',]
    },
    {
      type: 'category',
      label: 'Identity Providers',
      items: ['idp/overview', 'idp/okta',]
    },
  ],
};
