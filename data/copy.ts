import type { Locale } from "@/lib/i18n";

export const copy = {
  home: {
    eyebrow: "Motion + CGI Designer",
    titleTop: "Создаю визуал,",
    titleMiddle: "который работает",
    titleBottom: "",
    subtitle: "Motion и CGI для запусков, продуктовых роликов и digital-кампаний.",
    ctaPrimary: "Смотреть портфолио",
    ctaSecondary: "Получить оценку",
    responseNote: "Ответ в течение 24 часов"
  }
};

export const copyEn = {
  home: {
    eyebrow: "Motion + CGI Designer",
    titleTop: "I create visuals",
    titleMiddle: "that actually work",
    titleBottom: "",
    subtitle: "Motion and CGI for launches, product videos, and digital campaigns.",
    ctaPrimary: "View portfolio",
    ctaSecondary: "Get estimate",
    responseNote: "Reply within 24 hours"
  }
};

export function getCopy(locale: Locale) {
  return locale === "en" ? copyEn : copy;
}
