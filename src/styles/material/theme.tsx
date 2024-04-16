
import { Theme, createTheme } from "@mui/material";

// export const rtlDir: Direction = 'rtl';
// export const ltrDir: Direction = 'ltr';

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
  // direction: rtlDir,
});

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
  },
  // direction: rtlDir,
});