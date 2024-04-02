import { Direction } from "@mui/material";
import { createContext, useContext } from "react";

export enum LanguageOptions {
    Hebrew = 'he',
    English = 'en',
}

export const rtlDir: Direction = 'rtl';
export const ltrDir: Direction = 'ltr';

export const LanguageContext = createContext({
    language: LanguageOptions.Hebrew,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeLanguage: (_lan: LanguageOptions) => {},
    direction: 'rtl',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeDirection: (_dir: Direction) => {},
});

export const LanguageProvider = LanguageContext.Provider;

export default function useLanguageContext() {
    return useContext(LanguageContext);
}