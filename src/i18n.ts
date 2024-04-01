import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
// import HTTPApi from "i18next-http-backend";

const localhostUrl = 'http://localhost:5173';
const prodUrl = 'https://multi-lang-app-react.netlify.app'; // TODO: Change this to your own prod url
const getCurrentHost = import.meta.env.MODE === 'development' ?  localhostUrl : prodUrl;

i18n
    .use(Backend)
    .use(initReactI18next)
    // .use(HTTPApi)
    .init({
        backend: {
            // translation file path
            loadPath: `${getCurrentHost}/locals/{{lng}}/translations.json`,
        },
        lng: "he",
        fallbackLng: "he",
    
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
 });
export default i18n;