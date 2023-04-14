import en from "../translations/en.json";
import fa from "../translations/fa.json";
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
    };
    return resources;
  },
};
export default LanguageConfig;
