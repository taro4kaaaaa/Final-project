import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./en.json"
import ru from "./ru.json"

const savedLanguage = localStorage.getItem("lang") || "en"

// сразу устанавливаем lang в html
document.documentElement.lang = savedLanguage

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    },

    lng: savedLanguage,

    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  })

// меняем lang при переключении
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng
  localStorage.setItem("lang", lng)
})

export default i18n