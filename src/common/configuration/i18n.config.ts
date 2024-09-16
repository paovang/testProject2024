import { createI18n } from "vue-i18n";
import enMessage from "../localization/en.json";
import laMessage from "../localization/la.json";

const locale = localStorage.getItem("locale") || "en";
const i18n = createI18n({
  legacy: true,
  locale: locale,
  fallbackLocale: "en",
  messages: {
    en: enMessage,
    la: laMessage,
  },
});

export default i18n;
