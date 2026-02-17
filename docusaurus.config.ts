import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "rubika document | داکیومنت روبیکا",
  tagline:
    "پکیج قدرتمند جاوااسکریپت برای توسعه ربات‌های روبیکا. با امکانات کامل، امنیت بالا و مستندات فارسی، ایده‌های خود را به واقعیت تبدیل کنید.",
  favicon: "img/logo.jpg",

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "ignore",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },

  plugins: [
    "./src/plugins/tailwind-config.ts",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // 🔍 تنظیمات اصلی
        hashed: false, // برای کش بهتر
        language: [ "en"], // پشتیبانی از فارسی و انگلیسی
        indexDocs: true, // ایندکس کردن داکیومنت‌ها
        indexBlog: true, // ایندکس کردن بلاگ
        indexPages: true, // ایندکس کردن صفحات
        docsDir: "docs", // پوشه داکیومنت‌ها
        blogDir: "blog", // پوشه بلاگ
        
        // 🎨 تنظیمات ظاهری
        searchResultLimits: 10, // حداکثر نتایج نمایش
        searchResultContextMaxLength: 50, // طول متن نمایش داده شده
        explicitSearchResultPath: true, // نمایش مسیر کامل
        hideSearchBarWithNoSearchContext: false,
        
        // 🌐 تنظیمات زبان فارسی
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: true, // برای فارسی مهمه
        removeDefaultStemmer: true,
        
        // 📍 محل نمایش سرچ
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
      }),
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/hadi-rostami/rubika-bot/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/hadi-rostami/rubika-bot/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Rubika v1.1.0",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "مستندات",
        },        {
          href: "https://github.com/hadi-rostami/rubika-bot",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
