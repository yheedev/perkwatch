"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { LOCALES, type Locale } from "@/types/i18n";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import koCommon from "@public/locales/ko/common.json";
import enCommon from "@public/locales/en/common.json";
import jaCommon from "@public/locales/ja/common.json";

const translations = {
  ko: koCommon,
  en: enCommon,
  ja: jaCommon,
};

const LANGUAGE_NAMES: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

const LANGUAGE_FLAGS: Record<Locale, string> = {
  ko: "🇰🇷",
  en: "🇺🇸",
  ja: "🇯🇵",
};

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as Locale;
  const [open, setOpen] = useState(false);

  const t = translations[currentLocale];

  const getLocalizedPath = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLanguageChange = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.push(getLocalizedPath(locale));
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
          <span className="text-xl">{LANGUAGE_FLAGS[currentLocale]}</span>
          <span className="font-medium">{LANGUAGE_NAMES[currentLocale]}</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t.languageSwitcher.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {t.languageSwitcher.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-2 py-4">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                currentLocale === locale
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              }`}
            >
              <span className="text-2xl">{LANGUAGE_FLAGS[locale]}</span>
              <span className="font-medium">{LANGUAGE_NAMES[locale]}</span>
              {currentLocale === locale && (
                <span className="ml-auto text-sm">✓</span>
              )}
            </button>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>{t.languageSwitcher.cancel}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
