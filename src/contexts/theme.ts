import { createContext, useContext } from "react"
import { lightTheme } from "../styles/material/theme";

export const MuiThemeContext = createContext({
    themeMode: lightTheme,
    toggleTheme: () => {}
    // darkTheme: () => {},
    // lightTheme: () => {},
});

export const MuiThemeProvider = MuiThemeContext.Provider;

export default function useMuiTheme() {
    return useContext(MuiThemeContext);
}