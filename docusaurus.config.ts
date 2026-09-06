import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  // =========================================
  // 🔹 تنظیمات پایه و هویت سایت
  // =========================================
  title: "Rubika Bot | مستندات رسمی توسعه ربات روبیکا",
  tagline:
    "پکیج قدرتمند جاوااسکریپت/تایپ‌اسکریپت برای ساخت ربات‌های روبیکا. سریع، امن و کاملاً فارسی.",

  // متادیتای کامل برای گوگل و سوشال
  headTags: [
    // SEO Meta Tags
    // {
    //   tagName: "meta",
    //   attributes: {
    //     name: "description",
    //     content:
    //       "آموزش جامع و مستندات رسمی پکیج rubika برای توسعه ربات‌های روبیکا با تایپ‌اسکریپت. شامل راهنمای نصب، مثال‌های کاربردی و مرجع کامل API.",
    //   },
    // },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "ربات روبیکا, توسعه ربات, rubika, javascript bot, typescript bot, آموزش روبیکا, API روبیکا, ساخت ربات تلگرامی, rubika sdk",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "Hadi Rostami",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    },

    {
      tagName: "meta",
      attributes: { property: "og:type", content: "website" },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://docs.hr-dev.ir/",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Rubika Bot | مستندات رسمی توسعه ربات",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "پکیج قدرتمند تایپاسکریپت با bun برای ساخت ربات‌های روبیکا. سریع، امن و کاملاً فارسی.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://docs.hr-dev.ir/img/logo.jpg",
      },
    },
    {
      tagName: "meta",
      attributes: { property: "og:image:width", content: "1200" },
    },
    {
      tagName: "meta",
      attributes: { property: "og:image:height", content: "630" },
    },
    {
      tagName: "meta",
      attributes: { property: "og:site_name", content: "Rubika Bot Docs" },
    },
    {
      tagName: "meta",
      attributes: { property: "og:locale", content: "fa_IR" },
    },

    // Twitter Card
    {
      tagName: "meta",
      attributes: { name: "twitter:card", content: "summary_large_image" },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "Rubika Bot | مستندات رسمی",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content: "ساخت ربات روبیکا با جاوااسکریپت در چند دقیقه!",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: "https://docs.hr-dev.ir/img/logo.jpg",
      },
    },

    {
      tagName: "meta",
      attributes: {
        name: "msvalidate.01",
        content: "F220823714AB4D2E0A71E8BB27F629F6",
      },
    },
  ],

  favicon: "img/logo.jpg",
  future: { v4: true },

  // =========================================
  // 🔹 تنظیمات URL (بسیار مهم برای سئو)
  // =========================================
  url: "https://docs.hr-dev.ir",
  baseUrl: "/",

  // مدیریت لینک‌های شکسته
  onBrokenLinks: "warn",

  // =========================================
  // 🔹 تنظیمات زبان (SEO فارسی)
  // =========================================
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
    localeConfigs: {
      fa: {
        htmlLang: "fa-IR",
        direction: "rtl",
      },
    },
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // =========================================
  // 🔹 پلاگین‌ها
  // =========================================
  plugins: [
    "./src/plugins/tailwind-config.ts",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsDir: "docs",
        blogDir: "blog",
        searchResultLimits: 10,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
      },
    ],
  ],

  // =========================================
  // 🔹 پریست‌های کلاسیک (Docs + Blog + Sitemap)
  // =========================================
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/hadi-rostami/rubika-bot/edit/main/",
          lastVersion: "current",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "v1.2.7",
              path: "/",
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   editUrl: "https://github.com/hadi-rostami/rubika-bot/edit/main/"
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        //   // سئوی بلاگ
        //   blogSidebarCount: 'ALL',
        //   blogSidebarTitle: 'تمامی مقالات',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
        // ⭐ پلاگین سایت‌مپ برای ایندکس شدن در گوگل
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            // حذف صفحات تکراری یا کم‌ارزش از سایت‌مپ
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  // =========================================
  // 🔹 تنظیمات تم و ظاهر
  // =========================================
  themeConfig: {
    image: "img/og-image.jpg", // تصویر پیش‌فرض برای اشتراک‌گذاری
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false,
      defaultMode: "dark", // حالت پیش‌فرض دارک برای تجربه کاربری بهتر
    },

    // متادیتای اضافه برای تم
    metadata: [
      { name: "application-name", content: "Rubika Bot Docs" },
      { name: "apple-mobile-web-app-title", content: "Rubika Bot" },
      { name: "theme-color", content: "#f97316" }, // رنگ نارنجی روبیکا
      { name: "msapplication-TileColor", content: "#f97316" },
    ],

    navbar: {
      title: "Rubika v1.2.7",
      logo: {
        alt: "Rubika Bot Logo", // ⭐ متن جایگزین لوگو برای سئو
        src: "img/logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "مستندات",
        },
        // {
        //   to: "/blog",
        //   label: "بلاگ",
        //   position: "left",
        // },
        {
          href: "https://github.com/hadi-rostami/rubika-bot",
          label: "GitHub",
          position: "right",
          // لینک‌های خارجی بهتره با target="_blank" باز بشن (داکسیوروس خودکار این کار رو می‌کنه)
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer", // برای امنیت و سئو
          },
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "مستندات",
          items: [
            { label: "شروع سریع", to: "/docs/intro" },
            { label: "نصب و راه‌اندازی", to: "/docs/installation" },
          ],
        },
        {
          title: "جامعه",
          items: [
            {
              label: "گیت‌هاب",
              href: "https://github.com/hadi-rostami/rubika-bot",
            },
            { label: "تلگرام", href: "https://t.me/your_channel" },
            { label: "روبیکا", href: "https://rubika.ir/rubika_ts" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rubika Bot. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json"], // برای هایلایت بهتر کدها
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
