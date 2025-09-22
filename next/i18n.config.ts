export const i18n = {
  defaultLocale: 'sv-SE',
  locales: ['en', 'sv-SE'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
