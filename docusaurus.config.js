var path = require("path");

module.exports = {
  title: "Osso",
  tagline: "Authenticate Single Sign On users via SAML",
  url: "https://ossoapp.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "enterprise-oss",
  projectName: "osso-docs",
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap",
    "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap",
  ],
  themeConfig: {
    algolia: {
      apiKey: "e446f4b89c6d2f86db157cc2906a1520",
      indexName: "ossoapp",
      searchParamaters: {
        appId: "BH4D9OD16A",
      },
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        'Osso v1.0.0.rc is out! 🎉 🍾 Read our <a href="/blog/1-0-0-release-candidate">launch blog post</a>.',
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    googleAnalytics: {
      trackingID: "UA-177630158-1",
    },
    image: 'img/OGImage.png',
    metadatas: 
      [
        {name: 'twitter:image', content: 'img/Logo_Card.png'},
        {name: 'og:description', content: 'Add enterprise-grade SAML SSO to your app today'},
        {name: 'og:type', content: 'website'}
      ],
    navbar: {
      title: "Osso",
      logo: {
        alt: "Osso Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-alt.svg", // Default to `logo.src`.
      },
      items: [
        {
          to: "docs/quick-start",
          activeBasePath: "docs/quick-start",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "pricing", label: "Pricing", position: "left" },
        { to: "about", label: "About", position: "left" },
        {
          href: "https://github.com/enterprise-oss/osso",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          to: "https://demo.ossoapp.com",
          label: "Demo",
          position: "left",
          rel: "noopener noreferrer nofollow",
        },
      ],
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY || "no",
      appUrl: "https://a.ossoapp.com",
      enableInDevelopment: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/enterprise-oss/osso",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/osso",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enterprise OSS - Built with Docusaurus.`,
    },
    colorMode: {
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {},
        lightIcon: "🔆",
        lightIconStyle: {},
      },
    },
  },
  presets: [
    "docusaurus2-dotenv",
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/enterprise-oss/osso-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 1.0,
          trailingSlash: true,
        },
      },
    ],
  ],
  plugins: [
    ["docusaurus2-dotenv", { systemvars: true }],
    [
      require.resolve("docusaurus-plugin-less"),
      {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-WN9GGTG", // GTM Container ID
      },
    ],
    path.resolve(__dirname, "netlify-forms"),
    path.resolve(__dirname, "stripe-js"),
    path.resolve(__dirname, "chatwoot"),
    path.resolve(__dirname, "cookie-consent"),
    "posthog-docusaurus",
  ],
};
