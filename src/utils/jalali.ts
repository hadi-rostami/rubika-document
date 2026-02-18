// src/utils/jalali.ts
import jalaali from 'moment-jalaali';

// ✅ حتماً لوکال فارسی رو یک‌بار لود کن
jalaali.loadPersian({
  dialect: 'persian-modern', // یا 'persian' برای اسامی سنتی
  usePersianDigits: true,    // اعداد هم فارسی بشن: ۱۴۰۲ به جای 1402
});

export function formatJalaliDate(timestamp: number): string {
  // داکسیوروس timestamp رو به ثانیه میده، moment به میلی‌ثانیه نیاز داره
  const timeInMs = timestamp > 1e12 ? timestamp : timestamp * 1000;
  
  return jalaali(timeInMs)
    .locale('fa') // ✅ لوکال فارسی
    .format('jDD jMMMM jYYYY');
  // خروجی صحیح: "۲۹ بهمن ۱۴۰۲"
}