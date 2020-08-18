module.exports = {
  title: 'Osso',
  tagline: 'Authenticate Single Sign On users via SAML',
  url: 'https://ossoapp.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'enterprise-oss',
  projectName: 'osso-docs',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap'
  ],
  themeConfig: {
    algolia: {
      apiKey: 'e446f4b89c6d2f86db157cc2906a1520',
      indexName: 'ossoapp',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'Osso',
      logo: {
        alt: 'Osso logo',
        src: '//LogoComponent',
      },
      links: [
        {
          to: 'docs/guides/what-is-saml',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'right',
        },
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/enterprise-oss/osso-docs',
          label: 'GitHub',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/enterprise-oss/osso',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/osso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enterpise OSS - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/enterprise-oss/osso-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
