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
      algoliaOptions: {
        appId: 'BH4D9OD16A',
      }, // Optional, if provided by Algolia
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'Osso v1.0.0.rc is out! 🎉 🍾 Read our <a href="/blog/1-0-0-release-candidate">launch blog post</a>.',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: 'Osso',
      logo: {
        alt: 'Osso logo',
        src: '//LogoComponent',
      },
      
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/enterprise-oss/osso',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
           
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
