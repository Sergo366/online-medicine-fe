import 'server-only';
import { locales } from '@/shared/components/const';

const dictionaries = {
  [locales.en]: () =>
    import('../../shared/locale/en.json').then((module) => module.default),
  [locales.pl]: () =>
    import('../../shared/locale/pl.json').then((module) => module.default),
};

export const getDictionary = (locale) => dictionaries[locale]();
