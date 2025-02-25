import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'All the docs you need!',
  favicon: 'img/favicon.ico',

  // ✅ Update these for GitHub Pages
  url: 'https://peer-sense.github.io', // GitHub Pages URL
  baseUrl: '/docs/', // ✅ Make sure this matches your repo name & ends with /

  organizationName: 'peer-sense', // GitHub org/user
  projectName: 'docs', // GitHub repo name
  deploymentBranch: 'gh-pages', // ✅ Ensure deployment goes to gh-pages
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // ✅ Ensures docs are served under /docs/
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Docs',
      style: 'dark',
      logo: {
        alt: 'Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/peer-sense/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} PeerSense Documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;