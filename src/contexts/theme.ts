import { createContext, useContext } from "react"
import { lightTheme } from "../styles/material/theme";
import { Theme } from "@mui/material";

export const MuiThemeContext = createContext({
    themeMode: lightTheme,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleTheme: (_theme?: Theme) => {}
});

export const MuiThemeProvider = MuiThemeContext.Provider;

export default function useMuiTheme() {
    return useContext(MuiThemeContext);
}