import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

// آیکون‌های SVG
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
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="relative min-h-[90vh] flex items-center  overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}

            {/* Title */}
            <Heading
              as="h1"
              className="text-4xl font-[Vazir] sm:text-5xl lg:text-6xl"
            >
              ساخت ربات‌های{" "}
              <span className="bg-clip-text bg-linear-to-r text-transparent from-green-500 to-green-700">
                روبیکا
              </span>
            </Heading>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl">
              {siteConfig.tagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/docs/intro"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg  hover:-translate-y-1"
              >
                شروع کنید
                <Icons.ArrowLeft />
              </Link>
              <Link
                to="https://github.com/hadi-rostami/rubika-bot"
                className="group inline-flex items-center border-green-600 gap-2 px-8 py-4    shadow-lg border  hover:border-green-800 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
              >
                <Icons.Github />
                گیت‌هاب
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-600">
                  <Icons.Check />
                </span>
                <span>متن‌باز (Open Source)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">
                  <Icons.Check />
                </span>
                <span>پشتیبانی فعال</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">
                  <Icons.Check />
                </span>
                <span>آپدیت منظم</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img
                src="img/hero.png"
                alt="Rubika Bot AI"
                className="relative z-10 rounded-bl-4xl rounded-br-[156px] rounded-tl-[156px] rounded-tr-4xl w-full h-auto drop-shadow-2xl animate-float"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="group relative p-8 bg-slate-800 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10">
      {/* linear Border on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-green-500/0 transition-all duration-300"></div>

      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:bg-green-500/15 transition-all duration-300">
          <Icon />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed">{description}</p>
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
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">چرا این پکیج؟</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            ابزارهایی که برای ساخت یک ربات حرفه‌ای نیاز دارید، همه در یک جا جمع
            شده‌اند.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeExample() {
  const codeString = `import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

// handle update message
bot.on("update", async (message) => {
  await message.reply('hello from rubika!');
});

// error handeling
bot.on("error", async (err) => {
  console.log(err)
});

// start robot
bot.run();`;

  return (
    <section className="py-24 relative border-y ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-start space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold ">
              شروع کار در ۳ دقیقه
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              نصب و راه‌اندازی ربات شما بسیار ساده است. فقط کافیست پکیج را نصب
              کنید و چند خط کد بنویسید. این پکیج تمام پیچیدگی‌های پروتکل روبیکا
              را برای شما مدیریت می‌کند.
            </p>

            {/* Steps */}
            <div className="space-y-4 pt-4">
              {[
                {
                  num: 1,
                  title: "نصب پکیج",
                  desc: "با دستور bun add rubika",
                },
                {
                  num: 2,
                  title: "احراز هویت",
                  desc: "وارد کردن شماره و کد تایید",
                },
                {
                  num: 3,
                  title: "نوشتن هندلر",
                  desc: "تعریف توابع برای پاسخ به پیام‌ها",
                },
              ].map((step) => (
                <div key={step.num} className="flex  items-start gap-4">
                  <div className="shrink w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center font-bold border border-green-500/20">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-[Vazir]">{step.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Window */}
          <div className="relative">
            <div className="relative bg-[#1e1e1e] rounded-xl w-full  overflow-hidden shadow-green-700/5 shadow-lg border border-gray-700">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-slate-700">
                <div className="flex gap-1.5 items-center ">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mr-4 text-xs text-slate-400 font-mono">
                  main.js
                </div>
              </div>

              {/* Code */}
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
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-green-600/20 rounded-3xl blur-2xl"></div>

          {/* Card */}
          <div className="relative bg-linear-to-r from-green-600 to-green-800 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                آماده شروع هستید؟
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                همین حالا مستندات را مطالعه کنید و اولین ربات روبیکای خود را
                بسازید.
              </p>
              <Link
                to="/docs/intro"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg transition-all hover:bg-green-50 hover:-translate-y-1 shadow-lg"
              >
                مشاهده مستندات
                <Icons.ArrowLeft />
              </Link>
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
        <CodeExample />
        <CTASection />
      </main>
    </Layout>
  );
}
