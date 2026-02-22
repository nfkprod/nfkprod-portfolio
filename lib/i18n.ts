export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePrefix(locale: Locale) {
  return locale === "en" ? "/en" : "";
}

export function withLocalePath(path: string, locale: Locale) {
  if (!path.startsWith("/")) {
    return path;
  }

  const prefix = localePrefix(locale);
  if (!prefix) {
    return path;
  }

  return path === "/" ? prefix : `${prefix}${path}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}
