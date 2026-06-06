export const SUPPORTED_LANGS = ['en', 'fr', 'de'];

export const CV_BY_LANG = {
  en: '/assets/Widad_Amrani_CV_EN.pdf',
  fr: '/assets/Widad_Amrani_CV_FR.pdf',
  de: '/assets/Widad_Amrani_CV_EN.pdf',
};

export const CV_FILENAME_BY_LANG = {
  en: 'Widad_Amrani_CV_EN.pdf',
  fr: 'Widad_Amrani_CV_FR.pdf',
  de: 'Widad_Amrani_CV_EN.pdf',
};

export function getCvPath(lang) {
  return CV_BY_LANG[lang] ?? CV_BY_LANG.en;
}

export function getCvFilename(lang) {
  return CV_FILENAME_BY_LANG[lang] ?? CV_FILENAME_BY_LANG.en;
}
