// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const requestToJoinURL = 'https://github.com/3v3ry0n3/request-to-join';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' 3v3ry0n3',
  tagline: 'everyone get in!',
  favicon: 'img/favicon.ico',

  url: 'https://3v3ry0n3.github.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    requestToJoinURL
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/3v3ry0n3/3v3ry0n3.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '3v3ry0n3',
        logo: {
          alt: '3v3ry0n3',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: requestToJoinURL,
            label: 'Join this mess',
            position: 'right',
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
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Project Links',
                to: '/docs/links',
              },
              {
                label: 'Bee Movie Script',
                to: '/docs/beemovie',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3kh0',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Join this mess',
                href: requestToJoinURL
              },
              {
                label: 'GitHub',
                href: 'https://github.com/3v3ry0n3',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} 3v3ry0n3. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
