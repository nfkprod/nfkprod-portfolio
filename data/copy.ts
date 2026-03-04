import type { Locale } from "@/lib/i18n";

export const copy = {
  home: {
    eyebrow: "Motion - CGI - AI",
    titleTop: "Создаю визуал,",
    titleMiddle: "который работает",
    titleBottom: "",
    subtitle: "Motion, CGI и AI для запусков, продуктовых роликов и digital-кампаний.",
    ctaPrimary: "Смотреть портфолио",
    ctaSecondary: "Получить оценку",
    responseNote: "Ответ в течение 24 часов"
  }
};

export const copyEn = {
  home: {
    eyebrow: "Motion - CGI - AI",
    titleTop: "I create visuals",
    titleMiddle: "that actually work",
    titleBottom: "",
    subtitle: "Motion, CGI, and AI for launches, product videos, and digital campaigns.",
    ctaPrimary: "View portfolio",
    ctaSecondary: "Get estimate",
    responseNote: "Reply within 24 hours"
  }
};

export function getCopy(locale: Locale) {
  return locale === "en" ? copyEn : copy;
}
