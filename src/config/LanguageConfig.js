import en from "../translations/en.json";
import fa from "../translations/fa.json";
import pa from "../translations/pa.json";
const LanguageConfig = {
  languageList: async function () {
    let languageList = [
      {
        displayName: "English",
        code: "en",
      },
      {
        displayName: "Dari",
        code: "fa",
      },
      {
        displayName: "Pashto",
        code: "pa",
      },
    ];
    return languageList;
  },
  I18ConfigResources: function () {
    let resources = {
      en: {
        translations: en,
      },
      fa: {
        translations: fa,
      },
      pa: {
        translations: pa,
      },
    };
    return resources;
  },
};
export default LanguageConfig;
