import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { type Locale, LOCALES, DEFAULT_LOCALE } from "@/types/i18n";
import koCommon from "@public/locales/ko/common.json";
import enCommon from "@public/locales/en/common.json";
import jaCommon from "@public/locales/ja/common.json";

const resources = {
  ko: { common: koCommon },
  en: { common: enCommon },
  ja: { common: jaCommon },
} as const;

const initI18next = async (locale: Locale, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance.use(initReactI18next).init({
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: [...LOCALES],
    ns,
    defaultNS: ns,
    fallbackNS: ns,
    resources,
  });
  return i18nInstance;
};

export async function getTranslation(locale: Locale, ns = "common") {
  const i18nextInstance = await initI18next(locale, ns);
  return {
    t: i18nextInstance.getFixedT(locale, ns),
    i18n: i18nextInstance,
  };
}
