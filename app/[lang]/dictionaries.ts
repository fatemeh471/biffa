import "server-only";

const dictionaries: any = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  fa: () =>
    import("../../dictionaries/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const loadDictionary = dictionaries[locale];
  return loadDictionary();
};
