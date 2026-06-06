import en from './messages/en.json';
import fr from './messages/fr.json';
import de from './messages/de.json';

export const dictionaries = { en, fr, de };

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function createTranslator(lang) {
  const dict = dictionaries[lang] ?? dictionaries.en;
  const fallback = dictionaries.en;

  return function t(key, vars) {
    let value = getByPath(dict, key) ?? getByPath(fallback, key) ?? key;
    if (vars && typeof value === 'string') {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      });
    }
    return value;
  };
}

export function getMeta(lang) {
  const dict = dictionaries[lang] ?? dictionaries.en;
  return dict.meta ?? dictionaries.en.meta;
}
