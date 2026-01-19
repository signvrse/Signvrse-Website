// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. Define your translations
const resources = {
  en: {
    translation: {
      "select_language": "Select Language",
      "choose_text": "Choose a language to translate the interface.",
      "welcome": "Welcome to my app"
    }
  },
  es: {
    translation: {
      "select_language": "Seleccionar idioma",
      "choose_text": "Elija un idioma para traducir la interfaz.",
      "welcome": "Bienvenido a mi aplicación"
    }
  },
  fr: {
    translation: {
      "select_language": "Choisir la langue",
      "choose_text": "Choisissez une langue pour traduire l'interface.",
      "welcome": "Bienvenue sur mon application"
    }
  }
  // Add Swahili, Arabic, etc...
};

// 2. Initialize i18next
i18n
  .use(LanguageDetector) // Detects user language automatically
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language if translation is missing
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
