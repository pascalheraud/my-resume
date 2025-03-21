import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
export type LanguagesType = "en" | "fr";

const resources = {
  en: {
    translation: {
      Formation: "Education",
      Français: "French",
      Anglais: "English",
      Italien: "Italian",
      Contact: "Contact",
      Langues: "Languages",
      "Compétences générales": "Soft Skills",
      "Ce CV en Français": "This resume in French",
      "Ce CV en Anglais": "This resume in English",
      "Mode Geek": "Geek Mode",
      "Mode Clair": "Light Mode",
      "Mode Sombre": "Dark Mode",
      "Orienté résultat": "Result oriented",
      Pragmatique: "Pragmatic",
      Curieux: "Curious",
      Rigoureux: "Rigorous",
      Sport: "Sport",
      Voyage: "Travel",
      "Chant/Musique": "Singing/Music",
      Bénévolat: "Volunteering",
    },
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
