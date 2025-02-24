import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'All the docs you need!',
  favicon: 'img/favicon.ico',

  url: 'https://docs.github.io',
  baseUrl: '/',

  organizationName: 'peer-sense', // Replace with your GitHub org/user
  projectName: 'docs', // Replace with your repo name
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
          routeBasePath: '/', // Makes docs the default homepage
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/your-org/your-repo/edit/main/docs/',
        },
        blog: false, // Disable blog
        pages: false, // Disable extra pages
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Set default mode to dark
      disableSwitch: true, // This should remove the toggle
      respectPrefersColorScheme: false, // Ensure it doesn't change based on system settings
    },
    navbar: {
      title: 'Docs',
      style: 'dark',
      logo: {
        alt: 'Docs Logo',
        src: 'img/logo.svg',
      },

      // items: [
      //   // {
      //   //   type: 'docSidebar',
      //   //   sidebarId: 'tutorialSidebar',
      //   //   position: 'left',
      //   //   label: 'Docs',
      //   // },
      //   // {
      //   //   href: 'https://github.com/your-org/your-repo',
      //   //   label: 'GitHub',
      //   //   position: 'right',
      //   // },
      // ],
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
