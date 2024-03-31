import i18n from "i18next";
// import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import HTTPApi from "i18next-http-backend";

i18n
    // .use(Backend)
    .use(initReactI18next)
    .use(HTTPApi)
    .init({
        // backend: {
        //     // translation file path
        //     loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
        // },
        // resources: {
        //     en: {
        //       translation: {
        //         "Welcome to React": "Welcome to React and react-i18next"
        //       }
        //     }
        //   },
        // lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
    
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }

    //------------------------------------------------    
    //   fallbackLng: "en",
    //   interpolation: {
    //    espaceValue: false,
    //   },
    //   react: {
    //    wait: true,
    //   },
 });
export default i18n;