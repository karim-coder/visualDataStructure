import en from "../translations/en.json";
import fa from "../translations/fa.json";
import pa from "../translations/pa.json";
import hi from "../translations/hi.json"; // Changed import alias from `in` to `hi`

const LanguageConfig = {
  languageList: async function () {
    let languageList = [
      {
        displayName: "English",
        code: "en",
      },
      {
        displayName: "हिन्दी", // Hindi in Hindi
        code: "hi",
      },
      {
        displayName: "دری", // Dari in Dari
        code: "fa",
      },
      {
        displayName: "پښتو", // Pashto in Pashto
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
      hi: {
        translations: hi, // Use the new alias
      },
    };
    return resources;
  },
};

export default LanguageConfig;
