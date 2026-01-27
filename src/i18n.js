import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import en from "../public/Locals/en.json";
import ru from "../public/Locals/ru.json";
import uz from "../public/Locals/uz.json";

i18n

  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz }
    },
    lng: 'ru',
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
