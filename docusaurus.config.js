module.exports = {
  title: 'OSSO',
  // tagline: 'Authenticate Single Sign On users via SAML',
  url: 'https://samlbox.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'enterprise-oss',
  projectName: 'saml-box',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap'
  ],
  themeConfig: {
    navbar: {
      title: 'Osso',
      logo: {
        alt: 'OSSO logo',
        src: 'img/logo.svg',
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
          href: 'https://github.com/enterprise-oss/saml-box',
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
              href: 'https://github.com/enterprise-oss/saml-box',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Osso',
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
            'https://github.com/enterprise-oss/saml-box-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
