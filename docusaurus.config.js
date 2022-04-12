// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Yeti Docs',
  tagline: 'Why ape, when you can Yeti?',
  url: 'https://docs.yeti.ink',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Yeti.ink',
  projectName: 'yeti-docs.github.io',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-5FRN8XSFZV',
          anonymizeIP: true
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/yeti-ink/yeti-docs.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/yeti-ink/yeti-docs.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/theme.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 1
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        // respectPrefersColorScheme: false
      },
      navbar: {
        title: 'Yeti Docs',
        logo: {
          alt: 'yeti logo',
          src: 'img/logo.png',
        },
        items: [
          // { to: 'blog', label: 'Blog', position: 'right' },
          { type: 'doc', docId: 'main/intro', label: 'Documentation', position: 'right' },
          { label: 'Discussions', href: 'https://discord.gg/eyB7fdwMSc', position: 'right' },
          // { href: '/examples', label: 'Examples', position: 'right' },
          { href: 'https://github.com/yeti-ink', label: 'Source code', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'yeti Docs',
            items: [
              
              {
                label: 'Documentation',
                to: '/docs/main/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/eyB7fdwMSc',
              },
              {
                label: 'Discussions',
                href: 'https://discord.gg/eyB7fdwMSc',
              }
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'GitHub Repos',
                href: 'https://github.com/yeti-ink',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yeti ink`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
      plugins: [
        [
          '@docusaurus/plugin-ideal-image',
          {
            quality: 85,
            //size: 288,
            //max: 300, // max resized image's size.
            //min: 240, // min resized image's size. if original is lower, use that size.
            steps: 2, // the max number of images generated between min and max (inclusive)
            disableInDev: false,
          },
        ],
      ],
    
}

module.exports = config
