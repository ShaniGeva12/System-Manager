import { createContext, useContext } from "react";

export enum LanguageOptions {
    Hebrew = 'he',
    English = 'en',
}

export const LanguageContext = createContext({
    language: LanguageOptions.Hebrew,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeLanguage: (_lan: LanguageOptions) => {}
});

export const LanguageProvider = LanguageContext.Provider;

export default function useLanguageContext() {
    return useContext(LanguageContext);
}