// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector'; // Optional but useful for language detection

// // Import translation files
// import en from './locales/en/translation.json';
// import ro from './locales/ro/translation.json';

// // i18n configuration
// i18n
//   .use(LanguageDetector) // Detects user language (optional)
//   .use(initReactI18next) // Bind i18n to React
//   .init({
//     resources: {
//       en: { translation: en },
//       ro: { translation: ro },
//     },
//     fallbackLng: 'en', // Default language
//     interpolation: {
//       escapeValue: false, // React already escapes by default
//     },
//     detection: {
//       order: ['queryString', 'cookie'], // Customize detection order
//       caches: ['cookie'], // Cache the language in cookies
//     },
//   });

// export default i18n;
