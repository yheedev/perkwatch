export const LOCALES = ['ko', 'en', 'ja'] as const;
export const DEFAULT_LOCALE = 'ko' as const;

export type Locale = (typeof LOCALES)[number];

export type LocalizedText = Record<Locale, string>;
