import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AlapaJs',
  tagline: 'Alapa is a flexible, high-performance web development framework with React-like components, intuitive routing, and built-in authentication. Perfect for scalable, maintainable applications.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://alapa-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alapajs', // Usually your GitHub org/user name.
  projectName: 'alapa-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/alapajs/alapa-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/alapajs/alapa-doc/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark', // Default theme if system preference is not detected
      disableSwitch: false, // Enable the theme switch button
      respectPrefersColorScheme: true, // Respect system theme preference
    },
    
    image: 'img/logo.png', 
    navbar: {
      title: 'Alapa Js',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/roadmap', label: 'Road Map', position: 'left'},
        {to: '/get-involve', label: 'Get Involve', position: 'left'},
        {to: '/sponsorship', label: 'Sponsorship 🤝', position: 'left'},
        {
          href: 'https://github.com/alapajs/alapa',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/nPqTeJ8SgK',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sponsorship',
              to: '/sponsorship',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/alapajs/alapa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AlapaJs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
