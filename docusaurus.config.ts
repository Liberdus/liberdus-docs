import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Home',

  future: {
    v4: true,
  },

  url: 'https://liberdus.com/',
  baseUrl: '/docs/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      logo: {
        href: 'https://liberdus.com',
        target: '_self',
        src: 'img/logo.png',
        alt: 'Liberdus',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },

    footer: {
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Features', href: 'https://liberdus.com/site/#features' },
            { label: 'Technology', href: 'https://liberdus.com/site/#technology' },
            { label: 'Roadmap', href: 'https://liberdus.com/site/roadmap.html' },
            { label: 'Litepaper', href: 'https://liberdus.com/Liberdus-Litepaper.pdf', target: '_blank' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/2cpJzFnwCR' },
            { label: 'X (Twitter)', href: 'https://x.com/liberdus' },
            { label: 'Substack', href: 'https://liberdus.substack.com' },
            { label: 'YouTube', href: 'https://www.youtube.com/@Liberdus' },
            { label: 'Telegram', href: 'https://t.me/LiberdusOfficial' },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/Liberdus' },
            { label: 'GitHub', href: 'https://github.com/Liberdus' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'GitHub', href: 'https://github.com/Liberdus' },
            { label: 'Developer Chat', href: 'https://liberdus.com/discord/', target: '_blank' },
            { label: 'Contribute', href: 'https://liberdus.com/site/#earn' },
          ],
        },
      ],
      copyright:
        '© 2019 - present, Liberdus. Decentralized and unstoppable.',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
