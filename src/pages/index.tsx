import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

// -----------------------------------------------------------------------------
// آیکون‌ها
// -----------------------------------------------------------------------------
const Icons = {
  Speed: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  ),
  Shield: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  Code: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  TypeScript: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M4 7V4h16v3"></path>
      <path d="M9 20h6"></path>
      <path d="M12 4v16"></path>
    </svg>
  ),
  Events: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  ),
  Users: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Check: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M5 13l4 4L19 7"></path>
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
  ),
  Copy: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  ),
  Plus: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
    >
      <path d="M12 5v14M5 12h14"></path>
    </svg>
  ),
};

// -----------------------------------------------------------------------------
// نوار نصب سریع با دکمه‌ی کپی
// -----------------------------------------------------------------------------
function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "bun add rubika";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // اگر کپی خودکار ممکن نبود، کاربر می‌تواند متن را دستی انتخاب کند
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      dir="ltr"
      aria-label="کپی کردن دستور نصب"
      className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-green-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
    >
      <span className="text-green-400">$</span>
      <span>{command}</span>
      <span className="mr-1 flex items-center gap-1 text-slate-500 group-hover:text-green-400">
        <Icons.Copy />
        <span className="text-xs">{copied ? "کپی شد" : "کپی"}</span>
      </span>
    </button>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 text-center text-sm shadow-2xl">
        <span>📢 برای دریافت مطالب جدید، به کانال روبیکا ما بپیوندید!</span>
        <a
          href="https://rubika.ir/rubika_ts"
          className="banner-btn"
          target="_blank"
          rel="noreferrer"
        >
          عضویت در کانال
        </a>
      </div>

      <div className="relative flex min-h-[90vh] items-center overflow-hidden">
        {/* پس‌زمینه */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="motion-safe:animate-pulse absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]"></div>
          <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-green-500/10 blur-[100px]"></div>
          <div className="absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* محتوا */}
            <div className="space-y-8">
              <Heading
                as="h1"
                className="font-[Vazir] text-4xl sm:text-5xl lg:text-6xl"
              >
                ساخت ربات‌های{" "}
                <span className="bg-linear-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                  روبیکا
                </span>
              </Heading>

              <p className="max-w-xl text-lg leading-relaxed sm:text-xl">
                {siteConfig.tagline}
              </p>

              <p className="max-w-xl leading-relaxed text-slate-400">
                یک لایبرری تایپ‌اسکریپتی برای ارتباط با پیام‌رسان روبیکا؛ بدون
                درگیر شدن با جزئیات پروتکل، مستقیم سراغ منطق ربات خودتان بروید.
              </p>

              {/* دکمه‌ها */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/docs/intro"
                  className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:from-green-600 hover:to-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                >
                  شروع کنید
                  <Icons.ArrowLeft />
                </Link>
                <Link
                  to="https://github.com/hadi-rostami/rubika-bot"
                  className="group inline-flex items-center gap-2 rounded-xl border border-green-600 px-8 py-4 text-lg font-bold shadow-lg transition-all hover:-translate-y-1 hover:border-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                >
                  <Icons.Github />
                  گیت‌هاب
                </Link>
              </div>

              {/* نصب سریع */}
              <div className="space-y-2">
                <p className="text-sm text-slate-500">یا مستقیم شروع کنید:</p>
                <InstallCommand />
              </div>

              {/* ویژگی‌های کوتاه */}
              <div className="flex flex-wrap gap-6 pt-2 text-sm">
                {[
                  "متن‌باز (Open Source)",
                  "پشتیبانی فعال",
                  "آپدیت منظم",
                  "تایپ‌اسکریپت ناتیو",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-green-600">
                      <Icons.Check />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* تصویر */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="motion-safe:animate-pulse absolute inset-0 rounded-full bg-linear-to-tr from-green-500/20 to-blue-500/20 opacity-50 blur-3xl"></div>
                <img
                  src="img/hero.png"
                  alt="نمایی از ساخت ربات روبیکا با استفاده از این پکیج"
                  className="motion-safe:animate-float relative z-10 h-auto w-full rounded-tr-4xl rounded-bl-4xl rounded-tl-[156px] rounded-br-[156px] drop-shadow-2xl"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// -----------------------------------------------------------------------------
// ویژگی‌ها
// -----------------------------------------------------------------------------
function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-800 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10">
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/15">
          <Icon />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
          {title}
        </h3>
        <p className="leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: "سرعت فوق‌العاده",
      description:
        "بهینه‌سازی شده برای پردازش هزاران پیام در ثانیه بدون افت کیفیت. مناسب برای گروه‌های شلوغ و کانال‌های بزرگ.",
      icon: Icons.Speed,
    },
    {
      title: "امنیت و پایداری",
      description:
        "مدیریت خودکار اتصال و ری‌کانکت شدن. احراز هویت امن و محافظت از اکانت شما در برابر بن شدن.",
      icon: Icons.Shield,
    },
    {
      title: "مستندات کامل",
      description:
        "راهنمای فارسی گام‌به‌گام، مثال‌های کاربردی و توضیحات دقیق برای تمام متدها و کلاس‌های موجود.",
      icon: Icons.Code,
    },
    {
      title: "تایپ‌اسکریپت ناتیو",
      description:
        "تمام کلاس‌ها، پیام‌ها و رویدادها به‌صورت کامل تایپ شده‌اند؛ یعنی تکمیل خودکار و خطایابی در همان لحظه‌ی نوشتن کد.",
      icon: Icons.TypeScript,
    },
    {
      title: "مدیریت ساده‌ی رویدادها",
      description:
        "با یک الگوی on ساده به پیام، عضویت، خروج و سایر رویدادهای گروه و کانال گوش دهید؛ بدون نیاز به تنظیم وب‌هوک.",
      icon: Icons.Events,
    },
    {
      title: "انجمن فعال",
      description:
        "سوال بپرسید، باگ گزارش دهید یا ایده‌ی خود را در گیت‌هاب و کانال روبیکا با بقیه‌ی توسعه‌دهنده‌ها در میان بگذارید.",
      icon: Icons.Users,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">چرا این پکیج؟</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            ابزارهایی که برای ساخت یک ربات حرفه‌ای نیاز دارید، همه در یک جا جمع
            شده‌اند.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// مسیر یادگیری
// -----------------------------------------------------------------------------
function LearningPath() {
  const steps = [
    {
      title: "نصب و راه‌اندازی",
      desc: "پکیج را نصب کنید و ساختار اولیه‌ی پروژه را بچینید.",
      href: "/docs/intro",
    },
    {
      title: "احراز هویت",
      desc: "با شماره‌ی خود وارد شوید و توکن ربات را دریافت کنید.",
      href: "/docs/intro",
    },
    {
      title: "نوشتن هندلر",
      desc: "به پیام‌ها، دستورات و رویدادهای گروه پاسخ دهید.",
      href: "/docs/intro",
    },
    {
      title: "استقرار ربات",
      desc: "ربات را روی سرور اجرا کنید و آن را ۲۴ ساعته فعال نگه دارید.",
      href: "/docs/intro",
    },
  ];

  return (
    <section className="border-t py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">مسیر یادگیری</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            از صفر تا اجرای اولین ربات، چهار قدم بیشتر فاصله ندارید.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Link
              key={step.title}
              to={step.href}
              className="group relative flex flex-col gap-3 rounded-2xl border border-slate-700/50 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 font-bold text-green-400">
                {index + 1}
              </div>
              <h3 className="font-bold text-white group-hover:text-green-400">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// نمونه کد با تب
// -----------------------------------------------------------------------------
function CodeExample() {
  const tabs = [
    {
      label: "پیام و خطا",
      filename: "main.ts",
      code: `import Bot from "rubika";
      
/// فعال سازی دیباگر
const bot = new Bot("YOUR_TOKEN", { logLevel: "debug" });

// دریافت پیام‌های جدید
bot.on<any, "update">("update", async (message) => {
  await message.reply("سلام از روبیکا!");
});

bot.run();`,
    },
    {
      label: "دستور سفارشی",
      filename: "commands.ts",
      code: `bot.command("/start", async (message) => {
    await message.reply(
      "به ربات خوش آمدید! برای راهنما /help را بفرستید."
    );
});

bot.command("/help", async (message) => {
    await message.reply("دستورات: /start ، /help");
});`,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative border-y py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-green-500/10 blur-[100px]"></div>
        <div className="absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]"></div>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          {/* محتوا */}
          <div className="flex-1 space-y-6 text-start">
            <h2 className="text-3xl font-bold sm:text-4xl">
              شروع کار در ۳ دقیقه
            </h2>
            <p className="text-justify text-lg leading-relaxed text-slate-400">
              نصب و راه‌اندازی ربات شما بسیار ساده است. فقط کافیست پکیج را نصب
              کنید و چند خط کد بنویسید. این پکیج تمام پیچیدگی‌های پروتکل روبیکا
              را برای شما مدیریت می‌کند.
            </p>
          </div>

          {/* پنجره‌ی کد */}
          <div className="relative w-full flex-1">
            <div className="relative mx-auto w-full overflow-hidden rounded-xl border border-gray-700 bg-[#1e1e1e] shadow-lg shadow-green-700/5">
              <div className="flex items-center justify-between border-b border-slate-700 bg-[#252526] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div dir="ltr" className="font-mono text-xs text-slate-400">
                  {tabs[active].filename}
                </div>
              </div>

              {/* تب‌ها */}
              <div
                dir="ltr"
                className="flex gap-1 border-b border-slate-700 bg-[#1a1a1a] px-3 pt-2"
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    onClick={() => setActive(index)}
                    className={`rounded-t-lg px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${
                      active === index
                        ? "bg-[#1e1e1e] text-green-400"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="ts"
                  style={vscDarkPlus}
                  customStyle={{
                    background: "#1e1e1e",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    direction: "ltr",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  {tabs[active].code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-800">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      >
        <span className="font-bold text-white">{question}</span>
        <span
          className={`text-green-400 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
        >
          <Icons.Plus />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 leading-relaxed text-slate-400">{answer}</div>
      )}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "آیا استفاده از این پکیج رایگان است؟",
      answer:
        "بله، این پکیج متن‌باز است و می‌توانید آن را به‌صورت رایگان در پروژه‌های شخصی و تجاری استفاده کنید.",
    },
    {
      question: "آیا نیاز به دانش قبلی از تایپ‌اسکریپت دارم؟",
      answer:
        "آشنایی پایه با جاوااسکریپت کافی است. مستندات با مثال‌های ساده شروع می‌شود و کم‌کم به موارد پیشرفته‌تر می‌رسد.",
    },
    {
      question: "چطور مشکل یا باگ را گزارش دهم؟",
      answer:
        "کافیست در بخش Issues گیت‌هاب پروژه، موضوع را با جزئیات ثبت کنید تا در سریع‌ترین زمان بررسی شود.",
    },
    {
      question: "آیا این پکیج برای ربات‌های پرترافیک هم مناسب است؟",
      answer:
        "بله، مدیریت اتصال و صف پیام‌ها به‌گونه‌ای طراحی شده که برای گروه‌ها و کانال‌های شلوغ هم پایدار بماند.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            پرسش‌های متداول
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            جواب چند سوالی که بیشتر توسعه‌دهنده‌ها قبل از شروع می‌پرسند.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-green-500/20 to-green-600/20 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-green-600 to-green-800 p-8 text-center sm:p-12">
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>
            <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                آماده شروع هستید؟
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-green-100">
                همین حالا مستندات را مطالعه کنید و اولین ربات روبیکای خود را
                بسازید.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/docs/intro"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-600 shadow-lg transition-all hover:-translate-y-1 hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
                >
                  مشاهده مستندات
                  <Icons.ArrowLeft />
                </Link>
                <Link
                  to="https://rubika.ir/rubika_ts"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
                >
                  پیوستن به کانال
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="مستندات کامل توسعه ربات‌های روبیکا با تایپ‌اسکریپت"
    >
      <main className="flex-1">
        <HomepageHeader />
        <HomepageFeatures />
        <LearningPath />
        <CodeExample />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
}
