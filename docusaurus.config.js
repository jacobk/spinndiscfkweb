// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Spinndisc FK",
  tagline: "Discgolf i Malmö och Lund",
  favicon: "img/logo_liten.svg",

  // Set the production url of your site here
  url: "https://www.spinndiscfk.se",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jacobk", // Usually your GitHub org/user name.
  projectName: "spinndiscfkweb", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "sv",
    locales: ["sv"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Senaste nyheter",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Spinndisc FK",
        logo: {
          alt: "Spinndisc FK",
          src: "img/logo_liten.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Medlemskap",
          },
          { to: "/blog", label: "Nyheter", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Kontakt",
            items: [
              {
                label: "Styrelsen",
                to: "/docs/kontakt/styrelsen",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/groups/303037613105051",
              },
              {
                label: "Discord",
                href: "https://discord.gg/n29MN4J9WY",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/spinndiscfk/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spinndisc FK`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
