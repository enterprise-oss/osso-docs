module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/what-is-saml', 'guides/overview',
        {
          type: 'category',
          label: 'IDP Configuration',
          items: ['guides/idp-config/admin-ui'],
        }]
    },
    {
      type: 'category',
      label: 'Documentation',
      items: ['deployment', 'doc1']
    },
    {
      type: 'category',
      label: 'Identity Providers',
      items: ['idp/overview', 'idp/okta',]
    },
  ],
};
